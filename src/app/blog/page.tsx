import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog Index — hardcoded seed posts with grid layout.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Blog | Commercial Real Estate Insights & Market Updates",
  description:
    "Commercial real estate blog by Barrett Henry. Market updates, investment analysis, leasing tips, and CRE strategy for Florida investors, tenants, and landlords.",
  openGraph: {
    title: "Blog | REMAX Commercial Florida",
    description: "CRE market updates, investment analysis, and leasing insights from Barrett Henry.",
    url: "https://hencre.com/blog",
  },
};

/* -- Seed blog posts (hardcoded for now) -- */
const POSTS = [
  {
    slug: "why-tenant-rep-matters",
    title: "Why Tenant Representation Matters More Than You Think",
    excerpt:
      "Most business owners search for space on their own. That is a mistake. Here is why having a tenant rep in your corner saves money and headaches.",
    date: "2026-06-01",
    category: "Leasing",
  },
  {
    slug: "florida-industrial-market-2026",
    title: "Florida Industrial Market: What Tenants and Investors Need to Know in 2026",
    excerpt:
      "Industrial vacancy is near historic lows across Florida. Here is what is driving demand, where new supply is coming, and how to position yourself.",
    date: "2026-05-28",
    category: "Market Update",
  },
  {
    slug: "cap-rate-explained",
    title: "Cap Rates Explained: What Florida CRE Investors Actually Need to Know",
    excerpt:
      "Cap rate is the most cited — and most misunderstood — metric in commercial real estate. Here is how to use it correctly.",
    date: "2026-05-20",
    category: "Investment",
  },
  {
    slug: "nnn-lease-beginners-guide",
    title: "The Beginner's Guide to NNN Net Lease Investing",
    excerpt:
      "Triple-net properties offer passive income with minimal landlord responsibility. Here is what to look for and what to avoid.",
    date: "2026-05-15",
    category: "Investment",
  },
  {
    slug: "lease-negotiation-tips",
    title: "5 Commercial Lease Terms You Should Always Negotiate",
    excerpt:
      "Rent is just the starting point. These five lease clauses can save — or cost — you thousands over the term.",
    date: "2026-05-10",
    category: "Leasing",
  },
] as const;

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
      name: "REMAX Commercial Florida Blog",
      description: "Commercial real estate insights and market updates from Barrett Henry.",
      url: "https://hencre.com/blog",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
      },
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-slate-brand">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">Blog</li>
        </ol>
      </nav>

      <Hero
        title="Blog"
        subtitle="Market updates, investment analysis, and practical CRE insights. No fluff, no filler."
      />

      {/* ---- Blog grid ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Placeholder hero area */}
              <div className="h-40 bg-gradient-to-br from-navy to-accent-blue/60" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-blue">
                  {post.category}
                </p>
                <h2 className="mt-2 text-lg font-bold text-navy group-hover:text-accent-blue">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-brand">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-slate-brand" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  {/* Link to future blog post page */}
                  <span className="text-sm font-semibold text-accent-blue">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have a CRE Question?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            I answer real questions from real clients. Reach out and your question
            might become the next blog post.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-block rounded-lg bg-remax-red px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-remax-red/90 hover:no-underline">
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
