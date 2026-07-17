#!/usr/bin/env npx tsx
/**
 * HenCRE Content Engine
 *
 * Runs daily via GitHub Actions. Generates up to 3 new pages per run.
 * Scans existing pages to avoid duplicates, picks fresh topics,
 * drafts with Haiku (cheap/fast), reviews with Sonnet (quality gate).
 *
 * HARD RULE: Drafter may NEVER invent numbers (vacancy %, cap rates, price/SF,
 * population). Only qualitative market context from verified data.
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

// --- Config ---
const DAILY_LIMIT = 3; // pages per run
const PASS_THRESHOLD = 80;
const MAX_ATTEMPTS = 2;

// --- Clients ---
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

// --- Florida counties data ---
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
  page_slug: string;
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

// --- Scan existing pages to avoid duplicates ---
function getExistingSlugs(): string[] {
  const slugs: string[] = [];
  const appDir = path.join(__dirname, "../src/app");

  // Scan blog posts
  const blogDir = path.join(appDir, "blog");
  if (fs.existsSync(blogDir)) {
    for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
      if (entry.isDirectory() && !entry.name.startsWith("_")) {
        slugs.push(`blog/${entry.name}`);
      }
    }
  }

  // Scan market pages
  const marketsDir = path.join(appDir, "markets");
  if (fs.existsSync(marketsDir)) {
    for (const entry of fs.readdirSync(marketsDir, { withFileTypes: true })) {
      if (entry.isDirectory() && !entry.name.startsWith("_")) {
        slugs.push(`markets/${entry.name}`);
      }
    }
  }

  return slugs;
}

// --- Pick topics to generate ---
function pickTopics(counties: CountyData[], existingSlugs: string[]): QueueItem[] {
  const items: QueueItem[] = [];

  // Priority 1: Tier 1 county market pages that don't exist yet
  for (const county of counties.filter((c) => c.tier === 1)) {
    const slug = `markets/${county.slug}`;
    if (!existingSlugs.includes(slug)) {
      items.push({
        id: `market-${county.slug}`,
        county: county.name,
        page_type: "market",
        page_slug: county.slug,
        status: "pending",
        attempts: 0,
      });
    }
  }

  // Priority 2: Tier 2 county market pages
  for (const county of counties.filter((c) => c.tier === 2)) {
    const slug = `markets/${county.slug}`;
    if (!existingSlugs.includes(slug)) {
      items.push({
        id: `market-${county.slug}`,
        county: county.name,
        page_type: "market",
        page_slug: county.slug,
        status: "pending",
        attempts: 0,
      });
    }
  }

  // Priority 3: Blog posts (always room for more)
  // These get generated with AI-picked topics
  if (items.length < DAILY_LIMIT) {
    items.push({
      id: `blog-auto-${Date.now()}`,
      county: null,
      page_type: "blog",
      page_slug: "", // AI will pick the slug
      status: "pending",
      attempts: 0,
    });
  }

  return items.slice(0, DAILY_LIMIT);
}

// --- Generate a blog topic via AI ---
async function pickBlogTopic(existingSlugs: string[]): Promise<{ slug: string; topic: string }> {
  const blogSlugs = existingSlugs
    .filter((s) => s.startsWith("blog/"))
    .map((s) => s.replace("blog/", ""))
    .slice(0, 40);

  const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 500,
    system: "You are a CRE content strategist. Respond with ONLY valid JSON, no markdown fences.",
    messages: [
      {
        role: "user",
        content: `Pick a fresh blog topic for hencre.com (Florida commercial real estate authority site).

EXISTING BLOG SLUGS (do NOT duplicate): ${blogSlugs.join(", ") || "none yet"}

Pick something educational about Florida CRE: market trends, property types, investment strategies, due diligence, lease structures, 1031 exchanges, cap rates explained, NNN leases, Florida-specific regulations, etc.

Return JSON: {"slug": "url-friendly-slug", "topic": "Full topic title"}`,
      },
    ],
  });

  const text = response.content.find((b) => b.type === "text")?.text || "{}";
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Failed to pick blog topic");
  return JSON.parse(match[0]);
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
    model: "claude-sonnet-4-5",
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

  // Escape quotes in content for JSX template literal safety
  const safeTitle = title.replace(/"/g, '\\"');
  const safeDesc = description.replace(/"/g, '\\"');

  return `import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "${safeTitle} | HenCRE",
  description: "${safeDesc}",
  openGraph: {
    title: "${safeTitle} | HenCRE",
    description: "${safeDesc}",
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
        "headline": "${safeTitle}",
        "description": "${safeDesc}",
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
        { label: "${safeTitle}", href: "/${getPagePath(item)}" },
      ]} />
      <Hero title="${safeTitle}" subtitle="${safeDesc}" />
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
  if (item.page_slug) {
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
  if (item.page_type === "market") return `markets/${item.page_slug}`;
  if (item.page_type === "blog") return `blog/${item.page_slug}`;
  return item.page_slug || "";
}

function getBreadcrumbParent(item: QueueItem): string {
  const parents: Record<string, string> = {
    market: "Markets",
    blog: "Blog",
  };
  return parents[item.page_type] || "Home";
}

function getBreadcrumbParentPath(item: QueueItem): string {
  const paths: Record<string, string> = {
    market: "markets",
    blog: "blog",
  };
  return paths[item.page_type] || "";
}

// --- Main engine loop ---
async function main() {
  console.log("🏢 HenCRE Content Engine starting...");

  // Load county data
  const counties = loadCountyData();
  console.log(`Loaded ${counties.length} counties`);

  // Scan existing pages
  const existingSlugs = getExistingSlugs();
  console.log(`Found ${existingSlugs.length} existing pages`);

  // Pick topics to generate
  const items = pickTopics(counties, existingSlugs);

  if (items.length === 0) {
    console.log("✅ All county pages exist. Adding blog posts only.");
    items.push({
      id: `blog-auto-${Date.now()}`,
      county: null,
      page_type: "blog",
      page_slug: "",
      status: "pending",
      attempts: 0,
    });
  }

  console.log(`Generating ${items.length} pages this run`);

  let published = 0;
  let failed = 0;

  for (const item of items) {
    // For blog posts, pick a topic first
    if (item.page_type === "blog" && !item.page_slug) {
      try {
        const topic = await pickBlogTopic(existingSlugs);
        item.page_slug = topic.slug;
        console.log(`\n--- Blog topic picked: ${topic.topic} (${topic.slug}) ---`);
      } catch (err) {
        console.error("Failed to pick blog topic:", err);
        failed++;
        continue;
      }
    } else {
      console.log(`\n--- Processing: ${item.page_type} / ${item.page_slug || item.county} ---`);
    }

    const countyData = item.county ? getCountyData(counties, item.county) : undefined;

    // Step 1: Draft with Haiku
    console.log("  Drafting with Haiku...");
    let draft: string;
    try {
      draft = await draftContent(item, countyData);
    } catch (err) {
      console.error("  Draft failed:", err);
      failed++;
      continue;
    }

    // Step 2: Review with Sonnet
    console.log("  Reviewing with Sonnet...");
    let review = await reviewContent(draft, item, countyData);
    console.log(`  Score: ${review.score} | Pass: ${review.pass}`);

    // One rewrite attempt if failed
    if (!review.pass) {
      console.log("  Attempting rewrite...");
      review = await reviewContent(review.revised, item, countyData);
      console.log(`  Rewrite score: ${review.score} | Pass: ${review.pass}`);
    }

    if (!review.pass) {
      console.log("  ❌ Failed quality gate");
      failed++;
      continue;
    }

    // Step 3: Write the page file
    const pagePath = getPagePath(item);
    const filePath = path.join(__dirname, "../src/app", pagePath, "page.tsx");
    const fileDir = path.dirname(filePath);

    // Create directory
    fs.mkdirSync(fileDir, { recursive: true });

    // Generate and write the page
    const pageContent = generatePageFile(item, review.revised, countyData);
    fs.writeFileSync(filePath, pageContent, "utf-8");
    console.log(`  📄 Wrote: src/app/${pagePath}/page.tsx`);

    // Track it so we don't duplicate next run
    existingSlugs.push(pagePath);

    published++;
    console.log(`  ✅ Published: https://hencre.com/${pagePath}`);
  }

  console.log(`\n========================================`);
  console.log(`Content Engine Complete`);
  console.log(`Published: ${published} | Failed: ${failed} | Total: ${items.length}`);
  console.log(`========================================`);

  // If we published anything, the GitHub Action workflow will commit and deploy
  if (published === 0) {
    console.log("No new pages generated this run.");
  }
}

// Run
main().catch((err) => {
  console.error("Content engine crashed:", err);
  process.exit(1);
});
