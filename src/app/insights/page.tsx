import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insights Hub Index — links to all insight articles.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Insights | REMAX Commercial Florida — CRE Market Intelligence",
  description:
    "In-depth commercial real estate insights for Florida investors, tenants, and property owners. Market analysis, investment guides, and CRE strategy from Barrett Henry.",
  openGraph: {
    title: "Insights | REMAX Commercial Florida",
    description: "In-depth CRE market intelligence and investment guides for Florida commercial real estate.",
    url: "https://hencre.com/insights",
  },
};

/* -- Insight articles (future deep-dive content) -- */
const INSIGHTS = [
  {
    title: "Tampa Bay Office Market Report",
    description: "Quarterly analysis of vacancy, absorption, and rental trends across Tampa Bay office submarkets.",
    href: "/insights/tampa-bay-office-market",
    category: "Market Report",
  },
  {
    title: "Florida Industrial Market Outlook",
    description: "Supply, demand, and development pipeline across Florida's key industrial corridors.",
    href: "/insights/florida-industrial-outlook",
    category: "Market Report",
  },
  {
    title: "1031 Exchange Guide for Florida Investors",
    description: "Timeline, rules, and strategies for deferring capital gains through like-kind exchanges.",
    href: "/insights/1031-exchange-guide",
    category: "Investment Guide",
  },
  {
    title: "Understanding Cap Rates in Florida CRE",
    description: "How to interpret and compare cap rates across property types and submarkets.",
    href: "/insights/cap-rates-florida",
    category: "Investment Guide",
  },
  {
    title: "Commercial Lease Types Compared",
    description: "NNN vs. gross vs. modified gross — which lease structure is right for your situation?",
    href: "/insights/lease-types-compared",
    category: "Leasing Guide",
  },
  {
    title: "Florida Retail Trends for Tenants",
    description: "Where the opportunities are for retail tenants in Florida's evolving consumer landscape.",
    href: "/insights/florida-retail-trends",
    category: "Market Report",
  },
  {
    title: "Due Diligence Checklist for CRE Buyers",
    description: "Every item you need to verify before closing on a commercial property in Florida.",
    href: "/insights/due-diligence-checklist",
    category: "Buyer Guide",
  },
  {
    title: "Multifamily Investment in Florida: A Primer",
    description: "Key metrics, market dynamics, and underwriting fundamentals for apartment investors.",
    href: "/insights/multifamily-investment-primer",
    category: "Investment Guide",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://hencre.com/insights" },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "REMAX Commercial Florida Insights",
      description: "In-depth commercial real estate market intelligence and guides.",
      url: "https://hencre.com/insights",
    },
  ],
};

export default function InsightsIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Insights</li>
        </ol>
      </nav>

      <Hero
        title="Insights"
        subtitle="In-depth market intelligence, investment guides, and CRE strategy. The information you need to make confident decisions."
      />

      {/* ---- Insights grid ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.href}
              className="group flex flex-col rounded-lg border border-[#E5E5E5] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                {insight.category}
              </p>
              <h2 className="mt-2 text-lg font-bold text-black group-hover:text-black">
                {insight.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-[#666666]">
                {insight.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-black">
                Coming soon &rarr;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want Market Intelligence for a Specific Deal?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            I provide custom market analysis for clients evaluating specific
            properties, submarkets, or investment strategies.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
