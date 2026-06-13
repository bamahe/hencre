import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";

/* -- FAQ data -- */
const FAQS = [
  { question: "What cap rate should I expect for Florida multifamily?", answer: "Stabilized Class A multifamily in Tampa Bay trades at 4.5-5.5% cap rates. Class B and C value-add properties typically trade at 6-8%. Cap rates vary significantly by submarket, unit count, vintage, and condition. Barrett provides market-specific cap rate analysis for every deal." },
  { question: "What is a value-add multifamily investment?", answer: "Value-add multifamily involves acquiring a property below replacement cost, renovating units and common areas, and increasing rents to market levels. According to the National Apartment Association, well-executed renovations can increase per-unit value by 20-40% over a 3-5 year hold period." },
  { question: "How many units qualifies as commercial multifamily?", answer: "Properties with 5 or more units are generally classified as commercial multifamily and financed with commercial loans. Properties with 1-4 units are typically classified as residential. Barrett works with 5+ unit properties across Florida." },
  { question: "What is the minimum down payment for multifamily investment?", answer: "Commercial multifamily loans typically require 20-30% down. SBA loans may allow lower down payments for owner-occupied properties. Barrett works with investors at all equity levels and can connect you with commercial lenders experienced in Florida multifamily." },
  { question: "Is Florida a good market for multifamily investment?", answer: "According to the U.S. Census Bureau, Florida adds over 300,000 residents annually. Combined with rising homeownership costs and no state income tax, these fundamentals drive sustained rental demand. Tampa Bay, Orlando, and South Florida are among the most active multifamily markets in the country." },
];

/* -------------------------------------------------------------------
 * Multifamily — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Multifamily | REMAX Commercial Real Estate",
  description:
    "Buy, sell, or invest in multifamily properties across Florida. Apartment complexes, garden-style, mid-rise, and value-add opportunities. Barrett Henry, REALTOR® at REMAX Collective.",
  openGraph: {
    title: "Multifamily | REMAX Commercial Real Estate",
    description: "Multifamily investment sales and acquisitions across Florida.",
    url: "https://hencre.com/commercial/multifamily",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Property Types", item: "https://hencre.com/commercial" },
        { "@type": "ListItem", position: 3, name: "Multifamily", item: "https://hencre.com/commercial/multifamily" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Multifamily Investment in Florida",
      url: "https://hencre.com/commercial/multifamily",
    },
    { "@type": "FAQPage", mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function MultifamilyPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Multifamily</li>
        </ol>
      </nav>

      <Hero
        title="Multifamily"
        subtitle="Apartment complexes and multi-unit residential investments. Strong fundamentals driven by Florida's population growth."
        ctaText="Explore Multifamily"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Multifamily real estate includes apartment complexes with 5+ units, valued as income-producing commercial assets. According to the National Apartment Association, Florida is the third-largest apartment market in the U.S. with over 1.2 million rental units, driven by population growth exceeding 300,000 residents annually.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Multifamily Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida adds over 300,000 new residents annually, and they all need
            somewhere to live. That population growth, combined with rising
            homeownership costs, keeps demand for rental housing high across the state.
            REMAX Commercial Real Estate advisors handle multifamily acquisitions and dispositions across all Florida markets. Multifamily is one of the most resilient and in-demand CRE asset classes in
            Florida.
          </p>
          <p>
            From garden-style apartments in suburban Tampa Bay to mid-rise
            developments in urban corridors, the multifamily market offers opportunities
            for stabilized cash flow and value-add plays. Cap rates have compressed in
            institutional-quality assets, but well-located properties with renovation
            potential still offer attractive returns.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Multifamily</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Unit Mix", desc: "Studio, 1BR, 2BR, and 3BR units serve different tenant demographics. The right mix depends on your submarket and target renter profile." },
              { title: "Rent Growth", desc: "Historical and projected rent growth drives valuation. I analyze submarket trends to identify properties with upside potential." },
              { title: "Operating Expenses", desc: "Insurance, property taxes, and maintenance are major line items in Florida. I help you underwrite realistic expenses, not pro forma fantasy." },
              { title: "Value-Add Potential", desc: "Interior renovations, amenity upgrades, and operational improvements can boost NOI significantly. I identify properties where the numbers work." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Looking at Multifamily in Florida?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you are buying, selling, or just evaluating the market, I can help
            you make a data-driven decision.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">Contact Barrett</Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">Call (813) 733-7907</a>
          </div>
        </div>
      </section>

      {/* ---- Multifamily comparison table ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Multifamily Investment Strategies Compare?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Strategy</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Typical Cap Rate</th>
                  <th className="py-3 text-left font-bold text-black">Risk/Return Profile</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Core (Class A, stabilized)</td><td className="py-3 pr-4">4.5-5.5%</td><td className="py-3">Low risk, steady cash flow, institutional quality</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Core-Plus</td><td className="py-3 pr-4">5.5-6.5%</td><td className="py-3">Moderate risk, some operational upside</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Value-Add (Class B/C)</td><td className="py-3 pr-4">6.5-8.5%</td><td className="py-3">Higher risk, renovation-driven NOI growth</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Opportunistic</td><td className="py-3 pr-4">8%+</td><td className="py-3">High risk, significant repositioning or development</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Multifamily — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>National Apartment Association — Florida Apartment Market Report</li>
          <li>U.S. Census Bureau — Population Estimates and Migration Data</li>
          <li>CoStar Group — Tampa Bay Multifamily Market Analytics</li>
          <li>CBRE Research — U.S. Multifamily Investment Outlook</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Industrial &amp; Warehouse</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
            <Link href="/services/investment-sales" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
          </div>
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
