/**
 * scripts/auto-blog.mjs
 *
 * Auto-publishes one new CRE blog post for hencre.com.
 * Called by GitHub Actions (Mon/Wed/Fri at 10 AM ET).
 *
 * Steps:
 * 1. Reads existing blog slugs to avoid duplicates
 * 2. Picks a weighted-random city + category + business type
 * 3. Asks Claude to write the post (JSON response)
 * 4. Fetches a relevant Unsplash photo and downloads it
 * 5. Creates the page.tsx file
 * 6. Updates blog-manifest.json
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src', 'app', 'blog');
const IMAGES_DIR = path.join(ROOT, 'public', 'images', 'blog');
const MANIFEST_FILE = path.join(ROOT, 'public', 'data', 'blog-manifest.json');

// ─── City Pool with Weights ─────────────────────────────

const HIGH_TIER = [
  { name: 'Tampa', county: 'Hillsborough' },
  { name: 'Brandon', county: 'Hillsborough' },
  { name: 'Valrico', county: 'Hillsborough' },
  { name: 'Riverview', county: 'Hillsborough' },
  { name: 'St. Petersburg', county: 'Pinellas' },
  { name: 'Clearwater', county: 'Pinellas' },
  { name: 'Wesley Chapel', county: 'Pasco' },
  { name: "Land O' Lakes", county: 'Pasco' },
  { name: 'Largo', county: 'Pinellas' },
];

const MEDIUM_TIER = [
  { name: 'Lakeland', county: 'Polk' },
  { name: 'Winter Haven', county: 'Polk' },
  { name: 'Bradenton', county: 'Manatee' },
  { name: 'Sarasota', county: 'Sarasota' },
  { name: 'New Port Richey', county: 'Pasco' },
  { name: 'Dunedin', county: 'Pinellas' },
  { name: 'Palm Harbor', county: 'Pinellas' },
];

const LOW_TIER = [
  { name: 'Spring Hill', county: 'Hernando' },
  { name: 'Brooksville', county: 'Hernando' },
  { name: 'Crystal River', county: 'Citrus' },
  { name: 'Inverness', county: 'Citrus' },
  { name: 'Ruskin', county: 'Hillsborough' },
  { name: 'Plant City', county: 'Hillsborough' },
];

function pickCity() {
  const roll = Math.random();
  const pool = roll < 0.6 ? HIGH_TIER : roll < 0.9 ? MEDIUM_TIER : LOW_TIER;
  return pool[Math.floor(Math.random() * pool.length)];
}

const BUSINESS_TYPES = [
  'restaurant or food service',
  'medical office, dental practice, or urgent care',
  'retail storefront',
  'warehouse or distribution center',
  'office space or coworking',
  'auto repair shop, car wash, or dealership',
  'fitness center, gym, or wellness studio',
  'professional services firm (law, accounting, insurance)',
  'multifamily apartment complex',
  'land development or new construction',
  'commercial leasing',
  'commercial property management',
];

function pickBusinessType() {
  return BUSINESS_TYPES[Math.floor(Math.random() * BUSINESS_TYPES.length)];
}

const CATEGORIES = ['city-market', 'business-guide', 'investor'];

function pickCategory() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return CATEGORIES[dayOfYear % 3];
}

// ─── Existing page slugs for internal linking ────────────

const SERVICE_SLUGS = [
  'tenant-representation', 'landlord-leasing', 'investment-sales',
  'dispositions', 'cre-valuation',
];
const PROPERTY_TYPE_SLUGS = [
  'office-space', 'retail-space', 'industrial-warehouse',
  'multifamily', 'nnn-net-lease', 'land-development',
];
const COUNTY_SLUGS = [
  'hillsborough', 'pinellas', 'pasco', 'polk',
  'manatee', 'sarasota', 'citrus', 'hernando',
];

// ─── 1. Get existing blog slugs ──────────────────────────

function getExistingSlugs() {
  return fs.readdirSync(BLOG_DIR)
    .filter(f => fs.statSync(path.join(BLOG_DIR, f)).isDirectory())
    .map(f => f);
}

// ─── 2. Build the Claude prompt ──────────────────────────

function buildPrompt(category, city, businessType, existingSlugs) {
  const cityName = city?.name ?? 'Tampa Bay';
  const countyName = city?.county ?? 'Hillsborough';

  const serviceLinks = SERVICE_SLUGS.map(s => `/services/${s}`).join(', ');
  const propertyLinks = PROPERTY_TYPE_SLUGS.map(p => `/commercial/${p}`).join(', ');
  const marketLinks = COUNTY_SLUGS.map(c => `/markets/${c}`).join(', ');
  const blogLinks = existingSlugs.slice(-10).map(s => `/blog/${s}`).join(', ');

  let topicInstruction = '';

  if (category === 'city-market') {
    topicInstruction = `Write about commercial real estate in ${cityName}, ${countyName} County, Florida. Cover the local CRE market conditions, what types of commercial properties are in demand, why businesses are moving to or operating in ${cityName}, and what investors or tenants should know about this submarket. Include specific neighborhood or corridor references if relevant.`;
  } else if (category === 'business-guide') {
    topicInstruction = `Write a guide about finding commercial space for a ${businessType} in ${cityName}, ${countyName} County, Florida. Cover what to look for in a location, lease considerations specific to this business type, zoning and permitting basics, and why ${cityName} is a good market for this kind of business. Be practical and specific.`;
  } else {
    topicInstruction = `Write an investor-focused article about commercial real estate opportunities in ${cityName}, ${countyName} County, Florida. This could cover: leasing strategies, commercial property management considerations, NNN investment opportunities, cap rate trends, what makes this submarket attractive for CRE investors, or landlord strategies for this area. Pick the angle that creates the most useful content for an investor or landlord considering ${cityName}.`;
  }

  return `You are writing a blog post for hencre.com — Barrett Henry's commercial real estate website. Barrett is a Commercial Real Estate Advisor at REMAX Collective, operating under REMAX Commercial Real Estate for commercial transactions. He has 23+ years of real estate experience (NEVER tie this to Tampa Bay specifically) and serves all 67 Florida counties from three offices in Tampa, Largo, and Brandon.

${topicInstruction}

EXISTING BLOG POSTS (DO NOT duplicate any of these topics):
${existingSlugs.join('\n')}

CONTENT RULES:
- 800-1,300 words total
- Question-format H2 headings (e.g., "What Types of Commercial Space Are Available in ${cityName}?")
- First paragraph: directly answer the page's main question in 2-3 sentences
- Include "According to [source]" citations where appropriate (Florida statutes, county records, industry reports)
- Plain English, benefit-driven, no fluff phrases or AI-sounding transitions
- Always say "REMAX Commercial Real Estate" (no slash in REMAX)
- Always say "REALTOR®" with ®
- Always say "owners suite" (never "master suite")
- Never mention mobile or manufactured homes
- Never invent specific statistics, vacancy rates, cap rates, or price-per-square-foot numbers
- Vary CTA copy — NEVER use "Ready to Make [City] Home?"
- Never name individuals in any crime-related context

CONVERSION FOCUS (CRITICAL — every post must motivate readers to call):
- The post must make the reader feel like they need an experienced CRE advisor NOW
- Include a mid-article CTA: "Call Barrett directly at (813) 733-7907 to discuss [specific opportunity related to the article topic]"
- End with urgency — why acting now matters (lease windows, market timing, competition, inventory)
- Position Barrett as the insider who saves clients time and money
- Every post should answer: "Why should a business owner or investor call Barrett about THIS?"

SEO/AEO RULES:
- Title tag: keyword first, under 60 characters, include benefit or year
- Meta description: 120-155 characters with CTA
- Include 5-10 internal links referencing these existing pages:
  Services: ${serviceLinks}
  Property types: ${propertyLinks}
  Markets: ${marketLinks}
  Recent blog posts: ${blogLinks}

The blog post body should use JSX/HTML: <h2>, <p>, <ul>, <li>, <strong>, <a href> tags.
For internal links to hencre.com pages, use className="text-accent underline" on <a> tags.

RESPOND WITH VALID JSON ONLY (no markdown fences, no explanation). Use this exact structure:
{
  "title": "string — under 60 chars, keyword first",
  "metaDescription": "string — 120-155 chars with CTA",
  "excerpt": "string — 1-2 sentence summary for blog index card",
  "slug": "string — kebab-case URL slug, unique, not in existing list",
  "body": "string — full blog post body in JSX/HTML",
  "faqs": [
    { "question": "string", "answer": "string — starts with direct complete sentence" }
  ],
  "relatedLinks": [
    { "title": "string", "href": "/path/to/page", "description": "string" }
  ],
  "ctaHeading": "string — varied, not generic",
  "ctaBody": "string — 1-2 sentences with urgency",
  "imageQuery": "string — 2-4 word Unsplash search query for hero image"
}`;
}

// ─── 3. Generate post via Claude ─────────────────────────

async function generatePost(category, city, businessType, existingSlugs) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const prompt = buildPrompt(category, city, businessType, existingSlugs);

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 6000,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';

  function extractJSON(raw) {
    let c = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
    try { return JSON.parse(c); } catch {}
    const match = c.match(/\{[\s\S]*\}/);
    if (match) {
      try { return JSON.parse(match[0]); } catch {}
    }
    return null;
  }

  let result = extractJSON(text);
  if (result) return result;

  // Retry with simpler prompt
  console.log('  JSON parse failed. Response starts with:', text.substring(0, 200));
  console.log('  Retrying with simpler prompt...');
  const retry = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 6000,
    system: 'You are a JSON-only content generator. Respond with ONLY a valid JSON object.',
    messages: [{
      role: 'user',
      content: `Write an 800-word CRE blog post for hencre.com about ${city.name}, ${city.county} County FL. Avoid duplicating: ${existingSlugs.slice(0, 30).join(', ')}

Return ONLY valid JSON:
{
  "slug": "url-slug", "title": "Title", "metaDescription": "desc", "excerpt": "summary",
  "body": "<h2>Heading</h2><p>Content</p>",
  "faqs": [{"question": "Q?", "answer": "A."}],
  "relatedLinks": [{"title": "T", "href": "/path", "description": "D"}],
  "ctaHeading": "CTA", "ctaBody": "Body", "imageQuery": "search query"
}`
    }],
  });
  const retryText = retry.content[0].type === 'text' ? retry.content[0].text : '';
  result = extractJSON(retryText);
  if (result) return result;

  console.log('  Retry also failed. Response starts with:', retryText.substring(0, 200));
  throw new Error('Failed to parse JSON from Claude after 2 attempts');
}

// ─── 4. Fetch Unsplash image ─────────────────────────────

function fetchUnsplash(query) {
  return new Promise((resolve) => {
    const key = process.env.UNSPLASH_ACCESS_KEY;
    if (!key) { resolve(null); return; }

    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

    https.get(url, { headers: { Authorization: `Client-ID ${key}` } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.results?.[0]) {
            const photo = result.results[0];
            resolve({
              url: photo.urls.regular,
              downloadUrl: photo.urls.regular,
              alt: photo.alt_description || query,
              photographer: photo.user.name,
              link: photo.user.links.html,
            });
          } else resolve(null);
        } catch { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

// ─── 5. Download image ───────────────────────────────────

function downloadImage(imageUrl, outPath) {
  return new Promise((resolve) => {
    https.get(imageUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, outPath).then(resolve);
        return;
      }
      const stream = fs.createWriteStream(outPath);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(true); });
    }).on('error', () => resolve(false));
  });
}

// ─── 6. Create the page.tsx file ─────────────────────────

function createPageFile(post, image, category, city, today) {
  const dir = path.join(BLOG_DIR, post.slug);
  fs.mkdirSync(dir, { recursive: true });

  const localImage = image ? `/images/blog/${post.slug}.jpg` : '';
  const unsplashUrl = image ? image.url : '';
  // Use local image for hero if downloaded, otherwise Unsplash URL
  const heroImage = localImage || unsplashUrl;

  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/"/g, '\\"');

  // Build FAQ entries
  const faqEntries = post.faqs.map(f => `  {
    question: "${esc(f.question)}",
    answer: "${esc(f.answer)}",
  }`).join(',\n');

  // Build related links
  const relatedLinksArr = post.relatedLinks.map(l => `  {
    title: "${esc(l.title)}",
    href: "${esc(l.href)}",
    description: "${esc(l.description)}",
  }`).join(',\n');

  // FAQ schema items
  const faqSchemaItems = post.faqs.map(f => `    {
      "@type": "Question",
      name: "${esc(f.question)}",
      acceptedAnswer: {
        "@type": "Answer",
        text: "${esc(f.answer)}",
      },
    }`).join(',\n');

  const ogImage = heroImage || 'https://hencre.com/og-image.png';

  const pageContent = `import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Auto-generated blog post — ${today}
 * ${post.title}
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "${esc(post.title)}",
  description: "${esc(post.metaDescription)}",
  alternates: { canonical: "https://hencre.com/blog/${post.slug}" },
  openGraph: {
    title: "${esc(post.title)}",
    description: "${esc(post.metaDescription)}",
    url: "https://hencre.com/blog/${post.slug}",
    type: "article",
    images: [{ url: "${esc(ogImage)}", width: 1200, height: 630, alt: "${esc(post.title)}" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "${esc(post.title)}",
  description: "${esc(post.metaDescription)}",
  datePublished: "${today}",
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
  url: "https://hencre.com/blog/${post.slug}",
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
${faqEntries}
];

export default function BlogPost() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "${esc(post.title)}", href: "/blog/${post.slug}" },
        ]}
      />

      <Hero${heroImage ? `\n        backgroundImage="${esc(heroImage)}"` : ''}
        title="${esc(post.title)}"
        subtitle="${esc(post.metaDescription)}"
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        ${post.body}

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
        heading="${esc(post.ctaHeading)}"
        body="${esc(post.ctaBody)}"
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent);
  console.log(`Created: src/app/blog/${post.slug}/page.tsx`);
}

// ─── 7. Update blog-manifest.json ────────────────────────

function updateManifest(post, image, category, city, businessType, today) {
  let manifest = [];
  if (fs.existsSync(MANIFEST_FILE)) {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf-8'));
  }

  manifest.push({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: today,
    category,
    city: city?.name ?? null,
    county: city?.county ?? null,
    businessType: businessType ?? null,
    image: image ? {
      url: `/images/blog/${post.slug}.jpg`,
      alt: image.alt,
      photographer: image.photographer,
      link: image.link,
    } : null,
  });

  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  console.log('Updated blog-manifest.json');
}

// ─── Main ────────────────────────────────────────────────

async function main() {
  console.log('=== HenCRE Auto Blog Publisher ===');

  // 1. Get existing slugs
  const existingSlugs = getExistingSlugs();
  console.log(`Found ${existingSlugs.length} existing blog posts`);

  // 2. Pick topic
  const category = pickCategory();
  const city = pickCity();
  const businessType = category === 'business-guide' ? pickBusinessType() : null;
  console.log(`Category: ${category}, City: ${city.name}, ${city.county} County`);
  if (businessType) console.log(`Business type: ${businessType}`);

  // 3. Generate post (retry up to 3 times for duplicate slugs)
  let post = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    console.log(`Generating new post via Claude (attempt ${attempt})...`);
    post = await generatePost(category, city, businessType, existingSlugs);
    console.log(`Topic: ${post.title}`);
    console.log(`Slug: ${post.slug}`);

    if (!existingSlugs.includes(post.slug)) break;
    console.log(`  DUPLICATE SLUG: ${post.slug} — retrying...`);
    existingSlugs.push(post.slug);
    post = null;
  }
  if (!post) {
    console.error('Failed to generate unique topic after 3 attempts');
    process.exit(1);
  }

  // 4. Fetch + download Unsplash image
  let image = null;
  if (post.imageQuery) {
    console.log(`Fetching image: "${post.imageQuery}"`);
    image = await fetchUnsplash(post.imageQuery);
    if (image) {
      fs.mkdirSync(IMAGES_DIR, { recursive: true });
      const imagePath = path.join(IMAGES_DIR, `${post.slug}.jpg`);
      const downloaded = await downloadImage(image.downloadUrl, imagePath);
      if (downloaded) {
        console.log(`Image saved: ${post.slug}.jpg (credit: ${image.photographer})`);
      } else {
        image = null;
      }
    }
  }

  const today = new Date().toISOString().split('T')[0];

  // 5. Create page file
  createPageFile(post, image, category, city, today);

  // 6. Update manifest
  updateManifest(post, image, category, city, businessType, today);

  console.log('=== Done ===');
}

main().catch(err => {
  console.error('Auto blog failed:', err);
  process.exit(1);
});
