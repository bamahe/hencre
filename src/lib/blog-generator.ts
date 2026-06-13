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
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { title: string; href: string; description: string }[];
  ctaHeading: string;
  ctaBody: string;
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

  return `You are writing a blog post for hencre.com — Barrett Henry's commercial real estate website. Barrett is a Commercial Real Estate Advisor at REMAX Collective, operating under REMAX Commercial Real Estate for commercial transactions. He has 23+ years of real estate experience (NEVER tie this to Tampa Bay specifically) and serves all 67 Florida counties from three offices in Tampa, Largo, and Brandon.

${topicInstruction}

CONTENT RULES:
- 800-1,300 words total
- Question-format H2 headings (e.g., "What Types of Commercial Space Are Available in ${cityName}?")
- First paragraph: directly answer the page's main question in 2-3 sentences
- Include "According to [source]" citations where appropriate (Florida statutes, county records, industry reports)
- Plain English, benefit-driven, no fluff phrases or AI-sounding transitions
- Always say "REMAX Commercial Real Estate" (with ® after Commercial)
- Always say "REALTOR®" with ®
- Always say "owners suite" (never "master suite")
- Never mention mobile or manufactured homes
- Never invent specific statistics, vacancy rates, cap rates, or price-per-square-foot numbers
- Vary CTA copy — NEVER use "Ready to Make [City] Home?"
- Never name individuals in any crime-related context

CONVERSION FOCUS (THIS IS CRITICAL — every post must motivate readers to call):
- The post must make the reader feel like they need an experienced CRE advisor NOW
- Include a mid-article CTA: "Call Barrett directly at (813) 733-7907 to discuss [specific opportunity related to the article topic]"
- End with urgency — why acting now matters (lease windows, market timing, competition, inventory)
- Position Barrett as the insider who saves clients time and money — not a generic agent
- Every post should answer: "Why should a business owner or investor call Barrett about THIS?"
- Target these buyer/seller types: business owners looking for space, investors seeking income properties, landlords considering selling, tenants whose leases expire soon

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
  const cleaned = raw.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
  return JSON.parse(cleaned);
}

/* ---- Build page.tsx String ---- */

function buildPageTsx(content: GeneratedContent, image: UnsplashPhoto | null, date: string): string {
  const { title, metaDescription, slug, sections, faqs, relatedLinks, ctaHeading, ctaBody } = content;
  const url = `https://hencre.com/blog/${slug}`;

  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/"/g, '\\"');

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

  const sectionJsx = sections
    .map(
      (s) => `
        <h2 className="mt-10 text-2xl font-bold text-black">${esc(s.heading)}</h2>
${s.paragraphs.map((p) => `        <p className="mt-4 text-[#666666] leading-relaxed">${esc(p)}</p>`).join("\n")}`
    )
    .join("\n");

  const faqSchemaItems = faqs
    .map(
      (f) => `    {
      "@type": "Question",
      name: "${esc(f.question)}",
      acceptedAnswer: {
        "@type": "Answer",
        text: "${esc(f.answer)}",
      },
    }`
    )
    .join(",\n");

  const faqItems = faqs
    .map((f) => `  { question: "${esc(f.question)}", answer: "${esc(f.answer)}" }`)
    .join(",\n");

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
    type: "article",${image ? `
    images: [{ url: "${esc(image.url)}", width: 1200, height: 630, alt: "${esc(title)}" }],` : `
    images: [{ url: "https://hencre.com/og-image.png", width: 1200, height: 630, alt: "REMAX Commercial Real Estate — HenCRE" }],`}
  },
  twitter: {
    card: "summary_large_image",${image ? `
    images: ["${esc(image.url)}"],` : `
    images: ["https://hencre.com/og-image.png"],`}
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
    jobTitle: "Commercial Real Estate Advisor",
    image: "https://hencre.com/images/barrett-henry-headshot.jpg",
    sameAs: [
      "https://hencre.com/about",
      "https://nowtb.com",
      "https://barretthenry.remax.com",
    ],
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Real Estate", url: "https://hencre.com" },
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
            alt="Barrett Henry, Commercial Real Estate Advisor"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">REALTOR\\u00AE & Commercial Real Estate Advisor at REMAX Collective</p>
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

export async function generateBlogPost(
  category: TopicCategory,
  city: CityEntry | null,
  businessType: string | null,
  existingSlugs: string[]
): Promise<{ pageTsx: string; postData: BlogPostData }> {
  const prompt = buildPrompt(category, city, businessType, existingSlugs);

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

  const image = await fetchPhoto(content.imageQuery);
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
