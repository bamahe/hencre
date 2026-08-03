import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import rawManifest from "@/../public/data/blog-manifest.json";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * Blog Index — reads from blog-manifest.json at build time.
 * Auto-updated by the content engine cron.
 * ----------------------------------------------------------------- */

interface ManifestPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  city: string | null;
  county: string | null;
  businessType: string | null;
  image: { url: string; alt: string; photographer: string; link: string } | null;
}

const manifest = rawManifest as ManifestPost[];

export const metadata: Metadata = {
  title: "CRE Blog | Market Updates & Investment Analysis FL",
  description:
    "Commercial real estate blog by Barrett Henry. Market updates, investment analysis, leasing tips, and CRE strategy for Florida investors, tenants, and landlords.",
  alternates: { canonical: "https://hencre.com/blog" },
  openGraph: {
    title: "Blog | Barrett Henry, HenCRE",
    description:
      "CRE market updates, investment analysis, and leasing insights from Barrett Henry, Broker Associate at REMAX Collective.",
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
      name: "HenCRE Blog",
      description:
        "Commercial real estate insights, market updates, and investment analysis from Barrett Henry, Broker Associate at REMAX Collective.",
      url: "https://hencre.com/blog",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
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

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />

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

      {/* ---- Related Resources ---- */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-bold text-black">Explore More CRE Resources</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/insights" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">CRE Insights</Link>
          <Link href="/calculators" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">CRE Calculators</Link>
          <Link href="/markets/hillsborough" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Hillsborough Market</Link>
          <Link href="/markets/pinellas" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Pinellas Market</Link>
          <Link href="/markets/pasco" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Pasco Market</Link>
          <Link href="/markets/polk" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Polk Market</Link>
          <Link href="/services/investment-sales" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Investment Sales</Link>
          <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Tenant Representation</Link>
          <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Industrial Space</Link>
          <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50">Office Space</Link>
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

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
