import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";

/* -- FAQ data -- */
const FAQS = [
  { question: "What is the average industrial lease rate in Florida?", answer: "Industrial lease rates in Florida range from $8 to $16 per square foot NNN, depending on building class, clear height, and location. Premium distribution space near port and interstate access commands $12-$16/SF. Older flex/warehouse in secondary corridors runs $8-$11/SF." },
  { question: "What clear height do I need for warehouse space?", answer: "Modern distribution centers require 28-36 ft clear height for efficient racking and operations. Older warehouses with 18-24 ft clear height are suitable for light manufacturing, assembly, and small-scale storage. Barrett helps match your operational needs to available inventory." },
  { question: "Is Florida a good market for industrial investment?", answer: "According to CBRE, Florida ranks among the top 5 states for industrial demand, driven by e-commerce, supply chain diversification, and the state's position as a distribution hub for the Southeast and Latin America. Vacancy rates remain historically tight across major metros." },
  { question: "What is the difference between warehouse and flex space?", answer: "Warehouse space is primarily used for storage and distribution with high clear heights and dock access. Flex space combines warehouse and office in one building, typically with lower clear heights (16-24 ft) and more finished office area. Flex is common for light manufacturing, R&D, and showroom uses." },
  { question: "How do I evaluate an industrial property for investment?", answer: "Key metrics include cap rate, price per square foot, clear height, dock count, power capacity, lot coverage ratio, and remaining lease term. Barrett builds pro formas that project cash flow, debt service, and returns specific to industrial investment." },
];

/* -------------------------------------------------------------------
 * Industrial & Warehouse — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Industrial & Warehouse Florida | Lease, Buy, Sell",
  description:
    "Lease, buy, or sell industrial and warehouse space in Florida. Distribution, flex, manufacturing, and cold storage. Barrett Henry at REMAX Collective. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/commercial/industrial-warehouse" },
  openGraph: {
    title: "Industrial & Warehouse | REMAX Commercial Real Estate",
    description: "Industrial and warehouse leasing, sales, and investment across Florida.",
    url: "https://hencre.com/commercial/industrial-warehouse",
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
        { "@type": "ListItem", position: 3, name: "Industrial & Warehouse", item: "https://hencre.com/commercial/industrial-warehouse" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Industrial & Warehouse Space in Florida",
      url: "https://hencre.com/commercial/industrial-warehouse",
    },
    { "@type": "FAQPage", mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function IndustrialWarehousePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Industrial &amp; Warehouse</li>
        </ol>
      </nav>

      <Hero
        title="Industrial & Warehouse"
        subtitle="Distribution, flex, manufacturing, and cold storage. Florida's logistics corridor is booming."
        ctaText="Find Industrial Space"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Industrial and warehouse space covers distribution centers, flex buildings, manufacturing facilities, and cold storage. According to CBRE, Florida industrial vacancy rates dropped below 5% in 2024, driven by e-commerce fulfillment demand and supply chain reshoring. Tampa Bay&apos;s I-75 corridor is one of the most active industrial zones in the Southeast.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Industrial Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Industrial is the hottest commercial real estate sector in Florida — and
            nationally. E-commerce growth, supply chain reshoring, and Florida&apos;s
            strategic position as a distribution hub for the Southeast and Latin
            America have driven vacancy rates to historic lows in major submarkets.
          </p>
          <p>
            Tampa Bay, Central Florida, and South Florida all see strong demand for
            distribution space, flex/warehouse, manufacturing facilities, and cold
            storage. New construction is underway, but pre-leasing rates are high and
            existing inventory moves fast. REMAX Commercial Real Estate advisors specialize in industrial and logistics properties. If you need industrial space in Florida, act
            now.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Industrial</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Clear Height", desc: "Ceiling height determines racking capacity and operational efficiency. Modern distribution requires 28-36 ft clear. Older warehouses may have 18-24 ft." },
              { title: "Dock & Grade Access", desc: "Dock-high doors for trailer loading and grade-level doors for van access. The mix depends on your operations." },
              { title: "Power & Utilities", desc: "Manufacturing and cold storage need heavy power (3-phase, high amperage). Confirm utility capacity before signing a lease." },
              { title: "Zoning & Use", desc: "Not all industrial zoning allows all uses. Outside storage, hazardous materials, and heavy manufacturing have specific zoning requirements I verify upfront." },
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
            Need Industrial or Warehouse Space?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your operation and I will identify available options. The market
            moves fast — let us get ahead of it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">Contact Barrett</Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">Call (813) 733-7907</a>
          </div>
        </div>
      </section>

      {/* ---- Industrial type comparison table ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Industrial Property Types Compare?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Type</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Clear Height</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Typical Use</th>
                  <th className="py-3 text-left font-bold text-black">FL Rent Range</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Distribution</td><td className="py-3 pr-4">28-40 ft</td><td className="py-3 pr-4">E-commerce, 3PL, bulk storage</td><td className="py-3">$10-$16/SF NNN</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Flex</td><td className="py-3 pr-4">16-24 ft</td><td className="py-3 pr-4">Light assembly, showroom, R&D</td><td className="py-3">$12-$18/SF MG</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Manufacturing</td><td className="py-3 pr-4">20-32 ft</td><td className="py-3 pr-4">Production, heavy power needs</td><td className="py-3">$8-$14/SF NNN</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Cold Storage</td><td className="py-3 pr-4">24-36 ft</td><td className="py-3 pr-4">Food, pharma, temp-controlled</td><td className="py-3">$14-$22/SF NNN</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Industrial &amp; Warehouse — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>CBRE Research — U.S. Industrial &amp; Logistics Market Report</li>
          <li>CoStar Group — Tampa Bay Industrial Market Analytics</li>
          <li>Prologis Research — Logistics Rent and Demand Trends</li>
          <li>Port Tampa Bay — Cargo and Trade Statistics</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
            <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Representation</Link>
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
