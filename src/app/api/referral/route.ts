// POST /api/referral — Broker-to-broker referral form handler
// Steps: Turnstile verify -> Zod validate -> Supabase insert -> FUB create ->
//        Resend alert + auto-responder -> Twilio SMS -> return success

import { supabaseAdmin } from "@/lib/supabase";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { ReferralFormSchema } from "@/lib/validation";
import { createReferral } from "@/lib/fub";
import { sendAlertEmail, sendAutoResponder } from "@/lib/resend";
import { sendSmsAlert } from "@/lib/twilio";

export async function POST(request: Request) {
  try {
    // 1. Parse JSON body
    const body = await request.json();

    // 2. Verify Turnstile token
    const turnstileResult = await verifyTurnstileToken(body.turnstileToken ?? "");
    if (!turnstileResult.success) {
      return Response.json(
        { success: false, error: "Bot verification failed" },
        { status: 403 }
      );
    }

    // 3. Validate with Zod schema
    const parsed = ReferralFormSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { success: false, error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 4. Insert into Supabase leads table with source='referral'
    const { data: lead, error: dbError } = await supabaseAdmin
      .from("leads")
      .insert({
        source: "referral",
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        county: data.county || null,
        brokerage: data.brokerage,
        license_number: data.licenseNumber || null,
        client_type: data.clientType || null,
        deal_notes: data.dealNotes || null,
        fub_tags: ["cre-referral-in"],
        status: "new",
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("[Referral API] Supabase insert failed:", dbError);
      return Response.json(
        { success: false, error: "Failed to save referral" },
        { status: 500 }
      );
    }

    // 5. Split name for FUB
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    // 6. Create FUB person with cre-referral-in tag + customClaudeConversation
    const fubResult = await createReferral({
      firstName,
      lastName,
      email: data.email,
      phone: data.phone || undefined,
      brokerage: data.brokerage,
      licenseNumber: data.licenseNumber,
      tags: ["cre-referral-in"],
      source: "HenCRE Referral",
      customClaudeConversation: JSON.stringify({
        leadId: lead.id,
        brokerage: data.brokerage,
        licenseNumber: data.licenseNumber,
        county: data.county,
        clientType: data.clientType,
        dealNotes: data.dealNotes,
        submittedAt: new Date().toISOString(),
      }),
    });

    // 7. Update lead with FUB ID
    if (fubResult.success) {
      await supabaseAdmin
        .from("leads")
        .update({ fub_id: String(fubResult.id) })
        .eq("id", lead.id);
    }

    // 8. Send notifications in parallel
    await Promise.allSettled([
      sendAlertEmail({
        subject: `New CRE Referral: ${data.name} from ${data.brokerage}`,
        leadName: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        county: data.county || "Not specified",
        inquiryType: `Referral (${data.clientType})`,
        message: data.dealNotes || "No notes",
        source: "referral",
      }),
      sendSmsAlert({
        leadName: data.name,
        county: data.county || "Unknown",
        source: "HenCRE Referral",
      }),
      sendAutoResponder({
        toName: firstName,
        toEmail: data.email,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("[Referral API] Unexpected error:", err);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
