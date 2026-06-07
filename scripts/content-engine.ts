#!/usr/bin/env npx tsx
/**
 * HenCRE Content Engine
 *
 * Runs daily via GitHub Actions. Pulls up to 10 pending items from content_queue,
 * drafts each with Haiku (cheap/fast), reviews with Sonnet (smart gatekeeper),
 * and publishes passing pages. Self-throttling: stops at 10 or when queue is empty.
 *
 * HARD RULE: Drafter may NEVER invent numbers (vacancy %, cap rates, price/SF,
 * population). Only qualitative market context from verified data.
 */

import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// --- Config ---
const DAILY_LIMIT = 10;
const PASS_THRESHOLD = 80;
const MAX_ATTEMPTS = 2;

// --- Clients ---
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// --- Florida counties data (inline subset for the engine) ---
// The engine reads the full data from the built site's florida-counties module,
// but for the standalone script we load a JSON export.
const COUNTIES_DATA_PATH = path.join(__dirname, "../src/lib/florida-counties-data.json");

interface CountyData {
  name: string;
  slug: string;
  tier: 1 | 2;
  region: string;
  majorCities: string[];
  marketNotes: string;
}

interface QueueItem {
  id: string;
  county: string | null;
  page_type: string;
  page_slug: string | null;
  status: string;
  attempts: number;
}

// --- Load county data ---
function loadCountyData(): CountyData[] {
  try {
    const raw = fs.readFileSync(COUNTIES_DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    console.error("Could not load county data. Run the export script first.");
    process.exit(1);
  }
}

function getCountyData(counties: CountyData[], name: string): CountyData | undefined {
  return counties.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
}

// --- Draft with Haiku (cheap model) ---
async function draftContent(
  item: QueueItem,
  countyData: CountyData | undefined
): Promise<string> {
  const systemPrompt = `You are a content writer for HenCRE, a Florida commercial real estate authority site run by Barrett Henry, Broker Associate at REMAX Collective.

HARD RULES:
- NEVER invent numbers: no vacancy %, cap rates, price/SF, population, dollar amounts
- Only use qualitative market descriptions: corridors, asset types, demand drivers, who is active
- Write in Barrett's first-person broker voice — confident, direct, expert
- "REMAX" never "RE/MAX"
- "REALTOR®" with the registered symbol
- "23+ years experience" max once, never tied to Tampa Bay specifically
- Phone: (813) 733-7907, Email: barrett@nowtb.com
- Include a brief FAQ section (3-5 questions) at the end
- Write 600-1000 words of substantive content
- No fluff, no filler, no generic AI language`;

  const countyContext = countyData
    ? `County: ${countyData.name} (${countyData.region})
Major cities: ${countyData.majorCities.join(", ")}
Market notes: ${countyData.marketNotes}
Tier: ${countyData.tier} (${countyData.tier === 1 ? "Barrett serves directly" : "referral territory"})`
    : "No specific county data available.";

  const pagePrompts: Record<string, string> = {
    market: `Write a comprehensive market overview page for ${item.county} County, Florida commercial real estate. Cover key CRE corridors, active property types, demand drivers, and why this market matters. Include what services Barrett offers here.`,
    identity: `Write an identity/SEO page for "${item.page_slug}". This targets someone searching for a commercial real estate professional in this area. Cover Barrett's qualifications, the local CRE landscape, and why he's the right broker.`,
    "property-type": `Write a property type page about ${item.page_slug} in Florida. Cover what this property type involves, key considerations for buyers/tenants/investors, and the Florida market for this asset class.`,
    blog: `Write a blog post about "${item.page_slug}". Make it educational, actionable, and grounded in real CRE expertise. Florida angle where relevant.`,
  };

  const userPrompt = `${pagePrompts[item.page_type] || pagePrompts.blog}

VERIFIED DATA (use ONLY this for any county-specific claims):
${countyContext}

Output the page content as clean JSX-compatible text (no imports, no component wrappers — just the content sections as HTML-like markup with <section>, <h2>, <p>, <ul> tags).`;

  const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock?.text || "";
}

// --- Overseer review with Sonnet (smart gatekeeper) ---
async function reviewContent(
  draft: string,
  item: QueueItem,
  countyData: CountyData | undefined
): Promise<{ pass: boolean; score: number; revised: string; feedback: string }> {
  const systemPrompt = `You are the quality gatekeeper for HenCRE content. Your job is to review drafts and ensure they meet Barrett Henry's standards.

REVIEW CHECKLIST:
1. SCAN FOR INVENTED NUMBERS: Any vacancy %, cap rates, price/SF, population figures, dollar amounts that aren't in the verified data? → STRIP THEM. This is the #1 rule.
2. E-E-A-T INJECTION: Does the content reflect Barrett's real expertise? 23+ years, REMAX Collective, designations (e-PRO, MRP, SRS, Hall of Fame), first-person broker voice? Add if missing.
3. BRAND STRING RULES: "REMAX" (no slash), "REALTOR®" (with symbol), "owners suite" (not master). Phone: (813) 733-7907, Email: barrett@nowtb.com.
4. QUALITY: Is this genuinely helpful to someone searching for CRE info in this market? Would a real broker be proud of this content?
5. NO FLUFF: Strip generic filler, AI-sounding transitions, buzzwords.

SCORING (0-100):
- 90-100: Excellent, publish as-is
- 80-89: Good, minor tweaks applied, publish
- 60-79: Needs work, revise
- Below 60: Reject

PASS threshold: 80+

Respond in JSON format:
{
  "score": <number>,
  "pass": <boolean>,
  "feedback": "<brief explanation>",
  "revised": "<the full revised content if score >= 80, or improved draft if attempting rescue>"
}`;

  const verifiedData = countyData
    ? `Verified data for ${countyData.name}: ${countyData.marketNotes}. Cities: ${countyData.majorCities.join(", ")}.`
    : "No verified county data for this page.";

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6-20250514",
    max_tokens: 3000,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Review this draft for page type "${item.page_type}" (${item.page_slug || item.county}):

VERIFIED DATA (anything not here is invented and must be stripped):
${verifiedData}

DRAFT:
${draft}`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  const text = textBlock?.text || "{}";

  try {
    // Extract JSON from the response (may be wrapped in markdown code fences)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in response");
    const result = JSON.parse(jsonMatch[0]);
    return {
      score: result.score || 0,
      pass: result.pass || false,
      revised: result.revised || draft,
      feedback: result.feedback || "No feedback",
    };
  } catch {
    console.error("Failed to parse overseer response:", text.substring(0, 200));
    return { score: 0, pass: false, revised: draft, feedback: "Parse error" };
  }
}

// --- Generate the page file ---
function generatePageFile(
  item: QueueItem,
  content: string,
  countyData: CountyData | undefined
): string {
  const title = generateTitle(item);
  const description = generateDescription(item, countyData);
  const slug = item.page_slug || item.county || "page";

  return `import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "${title} | HenCRE",
  description: "${description}",
  openGraph: {
    title: "${title} | HenCRE",
    description: "${description}",
    url: "https://hencre.com/${getPagePath(item)}",
    siteName: "HenCRE",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${title}",
        "description": "${description}",
        "author": {
          "@type": "Person",
          "name": "Barrett Henry",
          "jobTitle": "Broker Associate",
          "worksFor": { "@type": "Organization", "name": "REMAX Collective" }
        }
      }} />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "${getBreadcrumbParent(item)}", href: "/${getBreadcrumbParentPath(item)}" },
        { label: "${title}", href: "/${getPagePath(item)}" },
      ]} />
      <Hero title="${title}" subtitle="${description}" />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        ${content}
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate?"
        body="Whether you're leasing, buying, selling, or investing — Barrett Henry has the experience and local knowledge to get it done right."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
`;
}

function generateTitle(item: QueueItem): string {
  if (item.page_type === "market" && item.county) {
    return `Commercial Real Estate in ${item.county} County, Florida`;
  }
  if (item.page_type === "identity" && item.page_slug) {
    // Convert slug like "commercial-real-estate-agent-tampa" to title
    return item.page_slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  if (item.page_type === "blog" && item.page_slug) {
    return item.page_slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return "Florida Commercial Real Estate";
}

function generateDescription(item: QueueItem, countyData: CountyData | undefined): string {
  if (item.page_type === "market" && item.county) {
    return `Expert guide to commercial real estate in ${item.county} County, FL. Office, retail, industrial, and investment opportunities from Barrett Henry, REMAX Collective.`;
  }
  return `Florida commercial real estate expertise from Barrett Henry, Broker Associate at REMAX Collective. 23+ years of experience.`;
}

function getPagePath(item: QueueItem): string {
  if (item.page_type === "market") return `markets/${item.county?.toLowerCase()}`;
  if (item.page_type === "identity") return item.page_slug || "";
  if (item.page_type === "blog") return `blog/${item.page_slug}`;
  return item.page_slug || "";
}

function getBreadcrumbParent(item: QueueItem): string {
  const parents: Record<string, string> = {
    market: "Markets",
    identity: "Services",
    blog: "Blog",
    "property-type": "Commercial",
  };
  return parents[item.page_type] || "Home";
}

function getBreadcrumbParentPath(item: QueueItem): string {
  const paths: Record<string, string> = {
    market: "markets",
    identity: "services",
    blog: "blog",
    "property-type": "commercial",
  };
  return paths[item.page_type] || "";
}

// --- Fetch Unsplash photo ---
async function fetchPhoto(query: string): Promise<{ url: string; alt: string } | null> {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return null;

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${key}` } }
    );
    const data = await res.json();
    const photo = data.results?.[0];
    if (!photo) return null;
    return {
      url: photo.urls.regular,
      alt: photo.alt_description || `${query} - Florida commercial real estate`,
    };
  } catch {
    return null;
  }
}

// --- Main engine loop ---
async function main() {
  console.log("🏢 HenCRE Content Engine starting...");
  console.log(`Daily limit: ${DAILY_LIMIT} pages`);

  // Load county data
  const counties = loadCountyData();
  console.log(`Loaded ${counties.length} counties`);

  // Pull pending items from queue
  const { data: items, error } = await supabase
    .from("content_queue")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(DAILY_LIMIT);

  if (error) {
    console.error("Failed to fetch queue:", error.message);
    process.exit(1);
  }

  if (!items || items.length === 0) {
    console.log("✅ Queue is empty. Nothing to publish today.");
    process.exit(0);
  }

  console.log(`Found ${items.length} pending items`);

  let published = 0;
  let failed = 0;

  for (const item of items as QueueItem[]) {
    console.log(`\n--- Processing: ${item.page_type} / ${item.page_slug || item.county} ---`);

    // Mark as drafting
    await supabase
      .from("content_queue")
      .update({ status: "drafting", attempts: item.attempts + 1 })
      .eq("id", item.id);

    const countyData = item.county ? getCountyData(counties, item.county) : undefined;

    // Step 1: Draft with Haiku
    console.log("  Drafting with Haiku...");
    let draft: string;
    try {
      draft = await draftContent(item, countyData);
    } catch (err) {
      console.error("  Draft failed:", err);
      await markFailed(item, "Draft generation failed");
      failed++;
      continue;
    }

    // Step 2: Review with Sonnet
    console.log("  Reviewing with Sonnet...");
    let review = await reviewContent(draft, item, countyData);
    console.log(`  Score: ${review.score} | Pass: ${review.pass}`);

    // One rewrite attempt if failed
    if (!review.pass && item.attempts < MAX_ATTEMPTS) {
      console.log("  Attempting rewrite...");
      review = await reviewContent(review.revised, item, countyData);
      console.log(`  Rewrite score: ${review.score} | Pass: ${review.pass}`);
    }

    if (!review.pass) {
      console.log("  ❌ Failed quality gate");
      await markFailed(item, review.feedback);
      failed++;
      continue;
    }

    // Step 3: Write the page file
    const pagePath = getPagePath(item);
    const filePath = path.join(__dirname, "../src/app", pagePath, "page.tsx");
    const fileDir = path.dirname(filePath);

    // Create directory if needed
    fs.mkdirSync(fileDir, { recursive: true });

    // Generate and write the page
    const pageContent = generatePageFile(item, review.revised, countyData);
    fs.writeFileSync(filePath, pageContent, "utf-8");
    console.log(`  📄 Wrote: src/app/${pagePath}/page.tsx`);

    // Step 4: Update queue
    const publishedUrl = `https://hencre.com/${pagePath}`;
    await supabase
      .from("content_queue")
      .update({
        status: "published",
        published_url: publishedUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", item.id);

    // Log to content_log
    await supabase.from("content_log").insert({
      queue_id: item.id,
      action: "publish",
      status: "success",
      score: review.score,
      details: { feedback: review.feedback, page_path: pagePath },
    });

    published++;
    console.log(`  ✅ Published: ${publishedUrl}`);
  }

  console.log(`\n========================================`);
  console.log(`Content Engine Complete`);
  console.log(`Published: ${published} | Failed: ${failed} | Total: ${items.length}`);
  console.log(`========================================`);
}

async function markFailed(item: QueueItem, reason: string) {
  await supabase
    .from("content_queue")
    .update({ status: "failed", updated_at: new Date().toISOString() })
    .eq("id", item.id);

  await supabase.from("content_log").insert({
    queue_id: item.id,
    action: "review",
    status: "failed",
    score: 0,
    details: { reason },
  });
}

// Run
main().catch((err) => {
  console.error("Content engine crashed:", err);
  process.exit(1);
});
