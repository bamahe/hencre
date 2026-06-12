# Auto-Blog System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an automated system that publishes 3 CRE blog posts per week to hencre.com, targeting Tampa Bay cities with Unsplash hero images, proper schema markup, and SEO/AEO optimization.

**Architecture:** A Vercel cron route (`/api/cron/auto-blog`) fires Mon/Wed/Fri. It picks a weighted-random city + topic, calls Claude to generate structured content, builds a complete page.tsx from a template, fetches an Unsplash hero image URL, commits everything to GitHub via API, and triggers a Vercel redeploy. A JSON manifest (`public/data/blog-manifest.json`) tracks all posts and is read by the blog index page and sitemap at build time.

**Tech Stack:** Next.js 16, Anthropic SDK (existing), Unsplash API (existing lib), GitHub REST API, Vercel Deploy Hooks

---

### Task 1: Create blog-topics.ts — City Weights, Business Types, and Topic Templates

**Files:**
- Create: `src/lib/blog-topics.ts`

This file defines all the data the topic selector needs: weighted city lists, business types, and prompt templates per category.

- [ ] **Step 1: Create `src/lib/blog-topics.ts`**

```ts
/**
 * blog-topics.ts
 * City weights, business types, and topic category definitions
 * for the hencre.com auto-blog content engine.
 */

/* ---- City Pool with Weights ---- */

export interface CityEntry {
  name: string;
  county: string;
  tier: "high" | "medium" | "low";
}

/** High-frequency cities (60% of posts) */
const HIGH_TIER: CityEntry[] = [
  { name: "Tampa", county: "Hillsborough", tier: "high" },
  { name: "Brandon", county: "Hillsborough", tier: "high" },
  { name: "Valrico", county: "Hillsborough", tier: "high" },
  { name: "Riverview", county: "Hillsborough", tier: "high" },
  { name: "St. Petersburg", county: "Pinellas", tier: "high" },
  { name: "Clearwater", county: "Pinellas", tier: "high" },
  { name: "Wesley Chapel", county: "Pasco", tier: "high" },
  { name: "Land O' Lakes", county: "Pasco", tier: "high" },
  { name: "Largo", county: "Pinellas", tier: "high" },
];

/** Medium-frequency cities (30% of posts) */
const MEDIUM_TIER: CityEntry[] = [
  { name: "Lakeland", county: "Polk", tier: "medium" },
  { name: "Winter Haven", county: "Polk", tier: "medium" },
  { name: "Bradenton", county: "Manatee", tier: "medium" },
  { name: "Sarasota", county: "Sarasota", tier: "medium" },
  { name: "New Port Richey", county: "Pasco", tier: "medium" },
  { name: "Dunedin", county: "Pinellas", tier: "medium" },
  { name: "Palm Harbor", county: "Pinellas", tier: "medium" },
];

/** Low-frequency cities (10% of posts) */
const LOW_TIER: CityEntry[] = [
  { name: "Spring Hill", county: "Hernando", tier: "low" },
  { name: "Brooksville", county: "Hernando", tier: "low" },
  { name: "Crystal River", county: "Citrus", tier: "low" },
  { name: "Inverness", county: "Citrus", tier: "low" },
  { name: "Ruskin", county: "Hillsborough", tier: "low" },
  { name: "Plant City", county: "Hillsborough", tier: "low" },
];

/** Pick a weighted-random city. 60% high, 30% medium, 10% low. */
export function pickCity(): CityEntry {
  const roll = Math.random();
  const pool = roll < 0.6 ? HIGH_TIER : roll < 0.9 ? MEDIUM_TIER : LOW_TIER;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ---- Business Types ---- */

export const BUSINESS_TYPES = [
  "restaurant or food service",
  "medical office, dental practice, or urgent care",
  "retail storefront",
  "warehouse or distribution center",
  "office space or coworking",
  "auto repair shop, car wash, or dealership",
  "fitness center, gym, or wellness studio",
  "professional services firm (law, accounting, insurance)",
  "multifamily apartment complex",
  "land development or new construction",
  "commercial leasing",
  "commercial property management",
] as const;

/** Pick a random business type */
export function pickBusinessType(): string {
  return BUSINESS_TYPES[Math.floor(Math.random() * BUSINESS_TYPES.length)];
}

/* ---- Topic Categories ---- */

export type TopicCategory = "city-market" | "business-guide" | "investor";

/**
 * Pick category by day of week.
 * Monday = city-market, Wednesday = business-guide, Friday = investor
 * Fallback: rotate in order.
 */
export function pickCategory(): TopicCategory {
  const day = new Date().getDay(); // 0=Sun, 1=Mon, 3=Wed, 5=Fri
  if (day === 1) return "city-market";
  if (day === 3) return "business-guide";
  if (day === 5) return "investor";
  // Fallback for manual triggers
  const cats: TopicCategory[] = ["city-market", "business-guide", "investor"];
  return cats[Math.floor(Math.random() * cats.length)];
}

/* ---- Existing Pages for Internal Linking ---- */

/** Service page slugs for cross-linking in blog posts */
export const SERVICE_SLUGS = [
  "tenant-representation",
  "landlord-leasing",
  "investment-sales",
  "dispositions",
  "cre-valuation",
];

/** Property type slugs for cross-linking */
export const PROPERTY_TYPE_SLUGS = [
  "office-space",
  "retail-space",
  "industrial-warehouse",
  "multifamily",
  "nnn-net-lease",
  "land-development",
];

/** County slugs for market page links */
export const COUNTY_SLUGS = [
  "hillsborough",
  "pinellas",
  "pasco",
  "polk",
  "manatee",
  "sarasota",
  "citrus",
  "hernando",
];
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/blog-topics.ts
git commit -m "feat: add blog topic data — city weights, business types, categories"
```

---

### Task 2: Create blog-manifest.json — Post Tracking

**Files:**
- Create: `public/data/blog-manifest.json`

Seed file with the 5 existing blog posts. The cron will append new entries. Both the blog index page and sitemap read this at build time.

- [ ] **Step 1: Create `public/data/blog-manifest.json`**

```json
[
  {
    "slug": "why-tampa-bay-cre-is-booming",
    "title": "Why Tampa Bay Commercial Real Estate Is Booming",
    "excerpt": "Population growth, business migration, and infrastructure investment are reshaping the Tampa Bay commercial landscape.",
    "date": "2026-06-07",
    "category": "city-market",
    "city": "Tampa",
    "county": "Hillsborough",
    "businessType": null,
    "image": null
  },
  {
    "slug": "5-mistakes-first-time-commercial-tenants-make",
    "title": "5 Mistakes First-Time Commercial Tenants Make",
    "excerpt": "Most business owners search for space on their own. That is a mistake. Here is why having a tenant rep in your corner saves money and headaches.",
    "date": "2026-06-07",
    "category": "business-guide",
    "city": "Tampa",
    "county": "Hillsborough",
    "businessType": null,
    "image": null
  },
  {
    "slug": "what-makes-a-good-commercial-investment",
    "title": "What Makes a Good Commercial Investment?",
    "excerpt": "Investment criteria from a broker's perspective — what to look for, what to avoid, and how to evaluate commercial property deals.",
    "date": "2026-06-07",
    "category": "investor",
    "city": "Tampa",
    "county": "Hillsborough",
    "businessType": null,
    "image": null
  },
  {
    "slug": "do-you-need-a-commercial-real-estate-broker",
    "title": "Do You Need a Commercial Real Estate Broker?",
    "excerpt": "When and why to hire a CRE broker — the value proposition for tenants, landlords, and investors.",
    "date": "2026-06-07",
    "category": "business-guide",
    "city": "Tampa",
    "county": "Hillsborough",
    "businessType": null,
    "image": null
  },
  {
    "slug": "florida-1031-exchange-what-investors-need-to-know",
    "title": "Florida 1031 Exchange: What Investors Need to Know",
    "excerpt": "Florida-specific 1031 exchange considerations for commercial real estate investors — tax advantages, property flexibility, and common pitfalls.",
    "date": "2026-06-07",
    "category": "investor",
    "city": null,
    "county": null,
    "businessType": null,
    "image": null
  }
]
```

- [ ] **Step 2: Commit**

```bash
git add public/data/blog-manifest.json
git commit -m "feat: add blog manifest seeded with 5 existing posts"
```

---

### Task 3: Create blog-generator.ts — Content Generation and Page Template

**Files:**
- Create: `src/lib/blog-generator.ts`

This is the core engine: takes a topic selection, calls Claude for structured content, and returns a complete page.tsx string ready to commit.

- [ ] **Step 1: Create `src/lib/blog-generator.ts`**

```ts
/**
 * blog-generator.ts
 * Generates blog post content via Claude and builds a complete page.tsx file.
 */

import { fetchPhoto, type UnsplashPhoto } from "./unsplash";
import type { TopicCategory, CityEntry } from "./blog-topics";
import {
  SERVICE_SLUGS,
  PROPERTY_TYPE_SLUGS,
  COUNTY_SLUGS,
} from "./blog-topics";

/* ---- Types ---- */

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: TopicCategory;
  city: string | null;
  county: string | null;
  businessType: string | null;
  date: string;
  image: { url: string; alt: string; photographer: string; link: string } | null;
}

interface GeneratedContent {
  title: string;
  metaDescription: string;
  excerpt: string;
  slug: string;
  /** Array of { heading, paragraphs[] } sections */
  sections: { heading: string; paragraphs: string[] }[];
  /** 4-5 FAQ items */
  faqs: { question: string; answer: string }[];
  /** 6-8 related page paths with titles */
  relatedLinks: { title: string; href: string; description: string }[];
  /** CTA heading — must vary, never "Ready to Make [City] Home?" */
  ctaHeading: string;
  /** CTA body text */
  ctaBody: string;
  /** Unsplash search query for hero image */
  imageQuery: string;
}

/* ---- Claude Prompt ---- */

function buildPrompt(
  category: TopicCategory,
  city: CityEntry | null,
  businessType: string | null,
  existingSlugs: string[]
): string {
  const cityName = city?.name ?? "Tampa Bay";
  const countyName = city?.county ?? "Hillsborough";

  /* Build list of existing pages for cross-linking */
  const serviceLinks = SERVICE_SLUGS.map((s) => `/services/${s}`).join(", ");
  const propertyLinks = PROPERTY_TYPE_SLUGS.map((p) => `/commercial/${p}`).join(", ");
  const marketLinks = COUNTY_SLUGS.map((c) => `/markets/${c}`).join(", ");
  const blogLinks = existingSlugs.slice(-10).map((s) => `/blog/${s}`).join(", ");

  let topicInstruction = "";

  if (category === "city-market") {
    topicInstruction = `Write about commercial real estate in ${cityName}, ${countyName} County, Florida. Cover the local CRE market conditions, what types of commercial properties are in demand, why businesses are moving to or operating in ${cityName}, and what investors or tenants should know about this submarket. Include specific neighborhood or corridor references if relevant.`;
  } else if (category === "business-guide") {
    topicInstruction = `Write a guide about finding commercial space for a ${businessType} in ${cityName}, ${countyName} County, Florida. Cover what to look for in a location, lease considerations specific to this business type, zoning and permitting basics, and why ${cityName} is a good market for this kind of business. Be practical and specific.`;
  } else {
    topicInstruction = `Write an investor-focused article about commercial real estate opportunities in ${cityName}, ${countyName} County, Florida. This could cover: leasing strategies, commercial property management considerations, NNN investment opportunities, cap rate trends, what makes this submarket attractive for CRE investors, or landlord strategies for this area. Pick the angle that creates the most useful content for an investor or landlord considering ${cityName}.`;
  }

  return `You are writing a blog post for hencre.com — Barrett Henry's commercial real estate website. Barrett is a REALTOR® and Broker Associate at REMAX Collective, operating under REMAX Commercial® for commercial transactions. He has 23+ years of real estate experience (NEVER tie this to Tampa Bay specifically) and serves all 67 Florida counties from three offices in Tampa, Largo, and Brandon.

${topicInstruction}

CONTENT RULES:
- 800-1,300 words total
- Question-format H2 headings (e.g., "What Types of Commercial Space Are Available in ${cityName}?")
- First paragraph: directly answer the page's main question in 2-3 sentences
- Include "According to [source]" citations where appropriate (Florida statutes, county records, industry reports)
- Plain English, benefit-driven, no fluff phrases or AI-sounding transitions
- Always say "REMAX Commercial®" (with ® after Commercial)
- Always say "REALTOR®" with ®
- Always say "owners suite" (never "master suite")
- Never mention mobile or manufactured homes
- Never invent specific statistics, vacancy rates, cap rates, or price-per-square-foot numbers
- Vary CTA copy — NEVER use "Ready to Make [City] Home?"
- Never name individuals in any crime-related context

SEO/AEO RULES:
- Title tag: keyword first, under 60 characters, include benefit or year
- Meta description: 120-155 characters with CTA
- Include 5-10 internal links referencing these existing pages:
  Services: ${serviceLinks}
  Property types: ${propertyLinks}
  Markets: ${marketLinks}
  Recent blog posts: ${blogLinks}

RESPOND WITH VALID JSON ONLY (no markdown fences, no explanation). Use this exact structure:
{
  "title": "string — under 60 chars, keyword first",
  "metaDescription": "string — 120-155 chars with CTA",
  "excerpt": "string — 1-2 sentence summary for blog index card",
  "slug": "string — kebab-case URL slug",
  "sections": [
    { "heading": "Question-Format H2 Heading?", "paragraphs": ["paragraph 1", "paragraph 2"] }
  ],
  "faqs": [
    { "question": "string", "answer": "string — starts with direct complete sentence" }
  ],
  "relatedLinks": [
    { "title": "string", "href": "/path/to/page", "description": "string" }
  ],
  "ctaHeading": "string — varied, not generic",
  "ctaBody": "string — 1-2 sentences",
  "imageQuery": "string — 2-4 word Unsplash search query for hero image"
}`;
}

/* ---- Parse Claude Response ---- */

function parseContent(raw: string): GeneratedContent {
  /* Strip markdown code fences if Claude wraps them */
  const cleaned = raw.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
  return JSON.parse(cleaned);
}

/* ---- Build page.tsx String ---- */

function buildPageTsx(content: GeneratedContent, image: UnsplashPhoto | null, date: string): string {
  const { title, metaDescription, slug, sections, faqs, relatedLinks, ctaHeading, ctaBody } = content;

  const url = `https://hencre.com/blog/${slug}`;

  /* Escape backticks and ${} in content strings for template literal safety */
  const esc = (s: string) => s.replace(/`/g, "\\`").replace(/\$/g, "\\$");

  /* Build image import and component */
  const heroImageJsx = image
    ? `
        {/* Hero image */}
        <div className="relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-lg">
          <img
            src="${esc(image.url)}"
            alt="${esc(image.alt)}"
            width={1080}
            height={607}
            className="h-auto w-full"
            loading="eager"
          />
          <p className="mt-2 text-center text-xs text-[#999999]">
            Photo by <a href="${esc(image.link)}" target="_blank" rel="noopener noreferrer" className="underline">${esc(image.photographer)}</a> on Unsplash
          </p>
        </div>`
    : "";

  /* Build article sections */
  const sectionJsx = sections
    .map(
      (s) =>
        `
        <h2 className="mt-10 text-2xl font-bold text-black">${esc(s.heading)}</h2>
${s.paragraphs.map((p) => `        <p className="mt-4 text-[#666666] leading-relaxed">${esc(p)}</p>`).join("\n")}`
    )
    .join("\n");

  /* Build FAQ items for schema */
  const faqSchemaItems = faqs
    .map(
      (f) =>
        `    {
      "@type": "Question",
      name: "${esc(f.question)}",
      acceptedAnswer: {
        "@type": "Answer",
        text: "${esc(f.answer)}",
      },
    }`
    )
    .join(",\n");

  /* Build FAQ accordion items */
  const faqItems = faqs
    .map((f) => `  { question: "${esc(f.question)}", answer: "${esc(f.answer)}" }`)
    .join(",\n");

  /* Build related links */
  const relatedLinksArr = relatedLinks
    .map((l) => `  { title: "${esc(l.title)}", href: "${esc(l.href)}", description: "${esc(l.description)}" }`)
    .join(",\n");

  return `import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Auto-generated blog post — ${date}
 * ${title}
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "${esc(title)}",
  description: "${esc(metaDescription)}",
  openGraph: {
    title: "${esc(title)}",
    description: "${esc(metaDescription)}",
    url: "${url}",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "${esc(title)}",
  description: "${esc(metaDescription)}",
  datePublished: "${date}",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\\u00AE & Broker Associate",
    image: "https://hencre.com/images/barrett-henry-headshot.jpg",
    sameAs: [
      "https://hencre.com/about",
      "https://nowtb.com",
      "https://barretthenry.remax.com",
    ],
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial\\u00AE Florida", url: "https://hencre.com" },
  url: "${url}",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
${faqSchemaItems}
  ],
};

const relatedLinks = [
${relatedLinksArr}
];

const faqItems = [
${faqItems}
];

export default function BlogPost() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "${esc(title)}", href: "/blog/${slug}" },
        ]}
      />

      <Hero
        title="${esc(title)}"
        subtitle="${esc(metaDescription)}"
      />
${heroImageJsx}

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
${sectionJsx}

        {/* ---- Mid-article CTA ---- */}
        <div className="my-10 rounded-lg bg-[#1a1a1a] p-8 text-center text-white">
          <p className="text-lg font-bold">Talk to a REMAX Commercial\\u00AE Broker</p>
          <p className="mt-2 text-white/80">
            Call <a href="tel:8137337907" className="underline">(813) 733-7907</a> or{" "}
            <a href="/contact" className="underline">send a message</a>.
          </p>
        </div>

${sectionJsx ? "" : ""}
      </article>

      {/* ---- FAQ Section ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <img
            src="/images/barrett-henry-headshot.jpg"
            alt="Barrett Henry, REALTOR® and Broker Associate"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">REALTOR\\u00AE & Broker Associate at REMAX Collective</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett has 23+ years of real estate experience and operates under the REMAX Commercial\\u00AE division for commercial transactions. He serves all 67 Florida counties from offices in Tampa, Largo, and Brandon.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Free Resources ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#F5F5F5] p-6 text-sm text-[#666666]">
          <p className="font-semibold text-black">Free Resources</p>
          <ul className="mt-2 space-y-1">
            <li>HUD Housing Counseling: <a href="tel:18005694287" className="underline">1-800-569-4287</a></li>
            <li>FHA Resource Center: <a href="tel:18002255342" className="underline">1-800-225-5342</a></li>
            <li>HOPE Hotline: <a href="tel:18889954673" className="underline">1-888-995-4673</a></li>
          </ul>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Consult qualified professionals before making real estate decisions.
        </p>
      </section>

      <CTASection
        heading="${esc(ctaHeading)}"
        body="${esc(ctaBody)}"
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
`;
}

/* ---- Main Generator Function ---- */

/**
 * Generate a complete blog post: calls Claude, fetches image, returns
 * the page.tsx content string and post metadata.
 */
export async function generateBlogPost(
  category: TopicCategory,
  city: CityEntry | null,
  businessType: string | null,
  existingSlugs: string[]
): Promise<{ pageTsx: string; postData: BlogPostData }> {
  const prompt = buildPrompt(category, city, businessType, existingSlugs);

  /* Call Claude for content */
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  const raw = data.content?.[0]?.text ?? "";

  if (!raw) throw new Error("Claude returned empty content");

  const content = parseContent(raw);
  const today = new Date().toISOString().split("T")[0];

  /* Fetch Unsplash hero image */
  const image = await fetchPhoto(content.imageQuery);

  /* Build the page.tsx string */
  const pageTsx = buildPageTsx(content, image, today);

  const postData: BlogPostData = {
    slug: content.slug,
    title: content.title,
    metaDescription: content.metaDescription,
    excerpt: content.excerpt,
    category,
    city: city?.name ?? null,
    county: city?.county ?? null,
    businessType: businessType ?? null,
    date: today,
    image: image
      ? { url: image.url, alt: image.alt, photographer: image.photographer, link: image.link }
      : null,
  };

  return { pageTsx, postData };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/blog-generator.ts
git commit -m "feat: add blog generator — Claude prompt, page.tsx template, image fetch"
```

---

### Task 4: Create the Cron Route — `/api/cron/auto-blog`

**Files:**
- Create: `src/app/api/cron/auto-blog/route.ts`

The cron endpoint that ties everything together: picks a topic, generates content, commits to GitHub, triggers deploy.

- [ ] **Step 1: Create `src/app/api/cron/auto-blog/route.ts`**

```ts
import { NextResponse } from "next/server";
import { pickCity, pickCategory, pickBusinessType } from "@/lib/blog-topics";
import { generateBlogPost, type BlogPostData } from "@/lib/blog-generator";

/**
 * /api/cron/auto-blog — Auto-generates a CRE blog post.
 *
 * Runs Mon/Wed/Fri at 10 AM ET via Vercel cron.
 * Picks a weighted-random city + topic, generates content with Claude,
 * commits to GitHub, and triggers a Vercel redeploy.
 *
 * Required env vars:
 * - CRON_SECRET
 * - ANTHROPIC_API_KEY
 * - UNSPLASH_ACCESS_KEY
 * - GITHUB_TOKEN
 * - VERCEL_DEPLOY_HOOK
 */

const GITHUB_OWNER = "bamahe";
const GITHUB_REPO = "hencre";
const GITHUB_BRANCH = "main";

export async function GET(request: Request) {
  /* ---- Auth ---- */
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  /* ---- Check env vars ---- */
  const missing = ["ANTHROPIC_API_KEY", "UNSPLASH_ACCESS_KEY", "GITHUB_TOKEN", "VERCEL_DEPLOY_HOOK"]
    .filter((k) => !process.env[k]);
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing env vars: ${missing.join(", ")}` }, { status: 503 });
  }

  try {
    /* ---- Step 1: Read current manifest to avoid duplicate topics ---- */
    const manifestRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/public/data/blog-manifest.json`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    let manifest: BlogPostData[] = [];
    let manifestSha = "";

    if (manifestRes.ok) {
      const manifestData = await manifestRes.json();
      manifestSha = manifestData.sha;
      manifest = JSON.parse(Buffer.from(manifestData.content, "base64").toString("utf-8"));
    }

    const existingSlugs = manifest.map((p) => p.slug);

    /* ---- Step 2: Pick topic ---- */
    const category = pickCategory();
    const city = pickCity();
    const businessType = category === "business-guide" ? pickBusinessType() : null;

    /* ---- Step 3: Generate content ---- */
    const { pageTsx, postData } = await generateBlogPost(
      category,
      city,
      businessType,
      existingSlugs
    );

    /* ---- Step 4: Check for duplicate slug ---- */
    if (existingSlugs.includes(postData.slug)) {
      /* Append date to make unique */
      postData.slug = `${postData.slug}-${postData.date}`;
    }

    /* ---- Step 5: Commit page.tsx via GitHub API ---- */
    const pagePath = `src/app/blog/${postData.slug}/page.tsx`;
    const pageContent = Buffer.from(pageTsx).toString("base64");

    const pageCommitRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${pagePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Auto-publish: ${postData.title}`,
          content: pageContent,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!pageCommitRes.ok) {
      const err = await pageCommitRes.json();
      console.error("[auto-blog] GitHub page commit failed:", err);
      return NextResponse.json({ error: "GitHub page commit failed", details: err }, { status: 500 });
    }

    /* ---- Step 6: Update manifest ---- */
    manifest.push(postData);
    const updatedManifest = Buffer.from(JSON.stringify(manifest, null, 2)).toString("base64");

    const manifestCommitRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/public/data/blog-manifest.json`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Update blog manifest: ${postData.slug}`,
          content: updatedManifest,
          sha: manifestSha,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!manifestCommitRes.ok) {
      const err = await manifestCommitRes.json();
      console.error("[auto-blog] Manifest commit failed:", err);
      /* Page was committed, continue anyway */
    }

    /* ---- Step 7: Trigger Vercel redeploy ---- */
    if (process.env.VERCEL_DEPLOY_HOOK) {
      await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: "POST" });
    }

    return NextResponse.json({
      success: true,
      slug: postData.slug,
      title: postData.title,
      category,
      city: city.name,
      county: city.county,
      businessType,
    });
  } catch (error) {
    console.error("[auto-blog] Error:", error);
    return NextResponse.json(
      { error: "Failed to generate blog post", details: String(error) },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/cron/auto-blog/route.ts
git commit -m "feat: add auto-blog cron route — topic selection, generation, GitHub commit, deploy"
```

---

### Task 5: Create vercel.json — Cron Schedule

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Create `vercel.json`**

```json
{
  "crons": [
    {
      "path": "/api/cron/auto-blog",
      "schedule": "0 14 * * 1,3,5"
    }
  ]
}
```

(0 14 UTC = 10 AM ET on Monday, Wednesday, Friday)

- [ ] **Step 2: Commit**

```bash
git add vercel.json
git commit -m "feat: add vercel.json with auto-blog cron schedule (Mon/Wed/Fri 10am ET)"
```

---

### Task 6: Fix Blog Index Page — Dynamic Post Listing

**Files:**
- Modify: `src/app/blog/page.tsx` (full rewrite)

Replace the broken hardcoded POSTS array with dynamic reading from `blog-manifest.json`. Use `<Link>` instead of `<span>`. Show Unsplash hero images.

- [ ] **Step 1: Rewrite `src/app/blog/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import manifest from "@/../public/data/blog-manifest.json";

/* -------------------------------------------------------------------
 * Blog Index — reads from blog-manifest.json at build time.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Blog | Commercial Real Estate Insights & Market Updates",
  description:
    "Commercial real estate blog by Barrett Henry. Market updates, investment analysis, leasing tips, and CRE strategy for Florida investors, tenants, and landlords.",
  openGraph: {
    title: "Blog | REMAX Commercial® Florida",
    description:
      "CRE market updates, investment analysis, and leasing insights from Barrett Henry.",
    url: "https://hencre.com/blog",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
      ],
    },
    {
      "@type": "Blog",
      name: "REMAX Commercial® Florida Blog",
      description:
        "Commercial real estate insights and market updates from Barrett Henry.",
      url: "https://hencre.com/blog",
      author: { "@type": "Person", name: "Barrett Henry" },
    },
  ],
};

/* Category label for display */
const CATEGORY_LABELS: Record<string, string> = {
  "city-market": "Market Update",
  "business-guide": "Business Guide",
  investor: "Investor",
};

export default function BlogIndexPage() {
  /* Sort posts newest first */
  const posts = [...manifest].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <SchemaOrg schema={schema} />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
      >
        <ol className="flex text-sm text-[#666666]">
          <li>
            <Link href="/" className="hover:underline no-underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      <Hero
        title="Blog"
        subtitle="Market updates, investment analysis, and practical CRE insights. No fluff, no filler."
      />

      {/* ---- Blog grid ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-lg border border-[#E5E5E5] bg-white overflow-hidden transition-shadow hover:shadow-lg no-underline"
            >
              {/* Hero image or gradient placeholder */}
              {post.image ? (
                <img
                  src={post.image.url}
                  alt={post.image.alt}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-40 bg-gradient-to-br from-[#1a1a1a] to-[#333333]" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-black">
                  {CATEGORY_LABELS[post.category] ?? post.category}
                </p>
                <h2 className="mt-2 text-lg font-bold text-black group-hover:text-black">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[#666666]">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-[#666666]" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-sm font-semibold text-black">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have a CRE Question?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            I answer real questions from real clients. Reach out and your
            question might become the next blog post.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "fix: rebuild blog index to read from manifest, fix broken links"
```

---

### Task 7: Update Sitemap to Read from Manifest

**Files:**
- Modify: `src/app/sitemap.ts`

Replace the hardcoded `BLOG_POSTS` array with a dynamic read from `blog-manifest.json`.

- [ ] **Step 1: Update sitemap.ts**

At the top of the file, replace the hardcoded `BLOG_POSTS` constant:

Replace:
```ts
// Blog post slugs (seed posts — engine adds more over time)
const BLOG_POSTS = [
  "why-tampa-bay-cre-is-booming",
  "5-mistakes-first-time-commercial-tenants-make",
  "what-makes-a-good-commercial-investment",
  "do-you-need-a-commercial-real-estate-broker",
  "florida-1031-exchange-what-investors-need-to-know",
];
```

With:
```ts
// Blog posts — read from manifest (auto-updated by content engine)
import blogManifest from "@/../public/data/blog-manifest.json";
const BLOG_POSTS = blogManifest.map((p: { slug: string }) => p.slug);
```

- [ ] **Step 2: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: sitemap reads blog slugs from manifest instead of hardcoded array"
```

---

### Task 8: Configure Unsplash Remote Images in next.config

**Files:**
- Modify: `next.config.ts` (or `next.config.js` — check which exists)

Add Unsplash to `images.remotePatterns` so `next/image` can optimize Unsplash URLs if we switch from `<img>` to `<Image>` later.

- [ ] **Step 1: Check which config file exists**

```bash
ls /Users/barretthenry/hencre/next.config.*
```

- [ ] **Step 2: Add Unsplash to images.remotePatterns**

Add to the config:
```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
},
```

- [ ] **Step 3: Commit**

```bash
git add next.config.*
git commit -m "feat: allow Unsplash remote images in next.config"
```

---

### Task 9: Set Environment Variables and Test

**Files:** None (env config + manual test)

- [ ] **Step 1: Check which env vars already exist on Vercel**

```bash
cd /Users/barretthenry/hencre && npx vercel env ls
```

- [ ] **Step 2: Add missing env vars**

The cron needs these (ANTHROPIC_API_KEY and UNSPLASH_ACCESS_KEY may already exist):
- `CRON_SECRET` — generate a random string
- `GITHUB_TOKEN` — personal access token with repo contents write
- `VERCEL_DEPLOY_HOOK` — create via Vercel dashboard or CLI

- [ ] **Step 3: Create a Vercel Deploy Hook**

Go to Vercel → hencre project → Settings → Git → Deploy Hooks → Create Hook named "auto-blog" for `main` branch. Copy the URL and set as `VERCEL_DEPLOY_HOOK`.

- [ ] **Step 4: Test the cron locally**

```bash
cd /Users/barretthenry/hencre
curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/cron/auto-blog
```

- [ ] **Step 5: Verify the generated post**

Check that:
- A new `src/app/blog/[slug]/page.tsx` was committed to GitHub
- `public/data/blog-manifest.json` was updated
- Vercel deploy was triggered
- The blog index page at `/blog` shows the new post

- [ ] **Step 6: Deploy and confirm cron is registered**

```bash
cd /Users/barretthenry/hencre && git push
```

After deploy, verify cron shows in Vercel dashboard → Settings → Crons.

---

### Task 10: Final Push and Verify

**Files:** None

- [ ] **Step 1: Run build locally to catch any TypeScript errors**

```bash
cd /Users/barretthenry/hencre && npm run build
```

- [ ] **Step 2: Fix any build errors**

- [ ] **Step 3: Push all changes**

```bash
git push
```

- [ ] **Step 4: Verify on live site**

- Blog index at hencre.com/blog shows all 5 existing posts with correct links
- Cron is visible in Vercel dashboard
- Wait for next scheduled run (or trigger manually) to confirm end-to-end flow
