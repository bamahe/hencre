import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import manifest from "@/../public/data/blog-manifest.json";

/* -------------------------------------------------------------------
 * Blog Index — reads from blog-manifest.json at build time.
 * Auto-updated by the content engine cron.
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
