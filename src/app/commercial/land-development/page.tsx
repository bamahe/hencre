import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -- FAQ data -- */
const FAQS = [
  { question: "What is entitled land vs. raw land?", answer: "Entitled land has received government approvals for a specific use (zoning, site plan, permits). Raw land has no entitlements and requires the buyer to navigate the approval process. Entitled land commands a premium because it reduces development risk and timeline." },
  { question: "How long does the entitlement process take in Florida?", answer: "According to the Florida Department of Economic Opportunity, entitlement timelines vary from 6 months for minor zoning changes to 18-24 months for comprehensive plan amendments. Barrett helps buyers evaluate entitlement status and timeline risk before making offers." },
  { question: "What are impact fees in Florida?", answer: "Impact fees are one-time charges levied by local governments to fund infrastructure improvements. Florida impact fees vary by county and can range from $5,000 to $25,000+ per unit for residential and $2-$15 per square foot for commercial. Barrett factors impact fees into total development cost estimates." },
  { question: "How do I evaluate commercial land for development?", answer: "Key factors include zoning and future land use designation, environmental conditions (wetlands, flood zones), utility availability, traffic access, impact fees, and market demand for the intended use. Barrett provides a comprehensive feasibility analysis for every land opportunity." },
  { question: "What types of land deals does Barrett handle?", answer: "Barrett handles all commercial land types — entitled pad sites, raw acreage for development, land assemblages, industrial parcels, and mixed-use development sites — across all 67 Florida counties." },
];

/* -------------------------------------------------------------------
 * Land & Development — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Land & Development Florida | Buy or Sell",
  description:
    "Buy or sell commercial land in Florida. Entitled, raw, and development-ready parcels for commercial, industrial, and mixed-use projects. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/commercial/land-development" },
  openGraph: {
    title: "Land & Development | REMAX Commercial Real Estate",
    description: "Commercial and development land across Florida. Entitled, raw, and shovel-ready parcels.",
    url: "https://hencre.com/commercial/land-development",
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
        { "@type": "ListItem", position: 3, name: "Land & Development", item: "https://hencre.com/commercial/land-development" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Land & Development in Florida",
      url: "https://hencre.com/commercial/land-development",
    },
    { "@type": "FAQPage", mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function LandDevelopmentPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Property Types", href: "/commercial" }, { label: "Land & Development", href: "/commercial/land-development" }]} />

      <Hero
        title="Land & Development"
        subtitle="Entitled and raw land for commercial, industrial, and mixed-use development. Florida's growth creates opportunity."
        ctaText="Find Land Parcels"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial land in Florida includes entitled, raw, and development-ready parcels for retail, industrial, multifamily, and mixed-use projects. According to the Florida Department of Economic Opportunity, Florida consistently ranks among the top states for commercial development permits, driven by sustained population growth and business-friendly policies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Land Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s sustained population and job growth drive continuous demand
            for new commercial development. Developers, builders, and investors are
            actively acquiring land for retail pads, industrial parks, multifamily
            communities, medical facilities, and mixed-use projects across the state.
          </p>
          <p>
            Land transactions are complex. Zoning, entitlements, environmental
            assessments, utility availability, flood zones, and future land use
            designations all factor into value and feasibility. A broker who
            understands these variables can save you months of wasted time and hundreds
            of thousands in avoidable costs.
          </p>
          <p>
            REMAX Commercial Real Estate advisors bring development expertise and land brokerage resources to every engagement. I work with buyers to identify sites that match their development vision
            and with sellers to position land for maximum value. Whether you are
            looking for a shovel-ready outparcel or a 50-acre assemblage, I bring the
            local knowledge and network to get the deal done.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Land</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Zoning & Entitlements", desc: "Current zoning determines what you can build today. Entitlement status determines how close you are to breaking ground. I verify zoning and research the entitlement path before you make an offer." },
              { title: "Environmental", desc: "Phase I and Phase II environmental assessments identify contamination risk. Wetlands, flood zones, and protected habitats can limit buildable area. I flag environmental concerns early." },
              { title: "Utilities & Access", desc: "Water, sewer, electric, and road access must be confirmed. Impact fees in Florida can be substantial — I help you estimate total site development costs." },
              { title: "Future Land Use", desc: "The county comprehensive plan dictates long-term land use. I review future land use maps to confirm your intended development is consistent with the plan." },
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
            Have a Development Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me what you are building and where. I will identify available parcels
            and evaluate feasibility.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">Contact Barrett</Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">Call (813) 733-7907</a>
          </div>
        </div>
      </section>

      {/* ---- Land type comparison table ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Commercial Land Types Compare?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Land Type</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Timeline to Build</th>
                  <th className="py-3 text-left font-bold text-black">Risk Level</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Shovel-Ready (fully entitled)</td><td className="py-3 pr-4">6-12 months</td><td className="py-3">Low — permits in hand</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Partially Entitled</td><td className="py-3 pr-4">12-18 months</td><td className="py-3">Moderate — some approvals remain</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Raw Land (consistent FLU)</td><td className="py-3 pr-4">18-24 months</td><td className="py-3">Moderate-High — full entitlement needed</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Raw Land (comp plan amendment)</td><td className="py-3 pr-4">24-36 months</td><td className="py-3">High — regulatory uncertainty</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Land &amp; Development — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>Florida Department of Economic Opportunity — Development and Permitting Data</li>
          <li>Florida Statutes Chapter 163 — Growth Management and Comprehensive Planning</li>
          <li>CoStar Group — Florida Land Market Analytics</li>
          <li>Urban Land Institute — Florida Chapter Reports</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Industrial &amp; Warehouse</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
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
