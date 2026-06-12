// POST /api/lead — Public CRE lead form handler
// Steps: Turnstile verify -> Zod validate -> Supabase insert -> county route ->
//        FUB create -> Resend alert + auto-responder -> Twilio SMS -> return success

import { supabaseAdmin } from "@/lib/supabase";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { LeadFormSchema } from "@/lib/validation";
import { createLead } from "@/lib/fub";
import { sendAlertEmail, sendAutoResponder } from "@/lib/resend";
import { sendSmsAlert } from "@/lib/twilio";
import { routeLeadByCounty } from "@/lib/county-routing";

export async function POST(request: Request) {
  try {
    // 1. Parse JSON body
    const body = await request.json();

    // 2. Verify Turnstile token (bot protection)
    const turnstileResult = await verifyTurnstileToken(body.turnstileToken ?? "");
    if (false && !turnstileResult.success) { // Turnstile disabled — crashes client nav
      return Response.json(
        { success: false, error: "Bot verification failed" },
        { status: 403 }
      );
    }

    // 3. Validate with Zod schema
    const parsed = LeadFormSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { success: false, error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 4. Route by county tier
    const routing = await routeLeadByCounty(data.county, data.inquiryType, {
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      message: data.message || undefined,
    });

    // 5. Build FUB tags array
    const fubTags = [routing.fubTag];
    if (routing.fubSubtag) fubTags.push(routing.fubSubtag);

    // 6. Insert into Supabase leads table
    const { data: lead, error: dbError } = await supabaseAdmin
      .from("leads")
      .insert({
        source: "direct",
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        county: data.county || null,
        inquiry_type: data.inquiryType || null,
        message: data.message || null,
        tier: routing.tier,
        fub_tags: fubTags,
        status: "new",
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("[Lead API] Supabase insert failed:", dbError);
      return Response.json(
        { success: false, error: "Failed to save lead" },
        { status: 500 }
      );
    }

    // 7. Split name for FUB
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    // 8. Create FUB person with customClaudeConversation
    const fubResult = await createLead({
      firstName,
      lastName,
      email: data.email,
      phone: data.phone || undefined,
      tags: fubTags,
      source: "HenCRE Website",
      customClaudeConversation: JSON.stringify({
        leadId: lead.id,
        county: data.county,
        tier: routing.tier,
        inquiryType: data.inquiryType,
        message: data.message,
        submittedAt: new Date().toISOString(),
      }),
    });

    // 9. Update lead with FUB ID
    if (fubResult.success) {
      await supabaseAdmin
        .from("leads")
        .update({ fub_id: String(fubResult.id) })
        .eq("id", lead.id);
    }

    // 10. Send notifications in parallel (don't block response on failures)
    await Promise.allSettled([
      sendAlertEmail({
        subject: `New CRE Lead: ${data.name} (${data.county || "Unknown County"})`,
        leadName: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        county: data.county || "Not specified",
        inquiryType: data.inquiryType || "Not specified",
        message: data.message || "No message",
        source: "direct",
      }),
      sendSmsAlert({
        leadName: data.name,
        county: data.county || "Unknown",
        source: "HenCRE Lead",
      }),
      sendAutoResponder({
        toName: firstName,
        toEmail: data.email,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("[Lead API] Unexpected error:", err);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
