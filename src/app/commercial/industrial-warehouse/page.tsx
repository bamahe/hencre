import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -- FAQ data -- */
const FAQS = [
  { question: "What is the average industrial lease rate in Florida?", answer: "Industrial lease rates in Florida range from $8 to $16 per square foot NNN, depending on building class, clear height, and location. Premium distribution space near port and interstate access commands $12-$16/SF. Older flex/warehouse in secondary corridors runs $8-$11/SF." },
  { question: "What clear height do I need for warehouse space?", answer: "Modern distribution centers require 28-36 ft clear height for efficient racking and operations. Older warehouses with 18-24 ft clear height are suitable for light manufacturing, assembly, and small-scale storage. Barrett helps match your operational needs to available inventory." },
  { question: "Is Florida a good market for industrial investment?", answer: "Florida ranks among the top states for industrial demand, driven by e-commerce, supply chain diversification, and the state's position as a distribution hub for the Southeast and Latin America. Vacancy rates remain historically tight across major metros including Tampa Bay, Orlando, and South Florida." },
  { question: "What is the difference between warehouse and flex space?", answer: "Warehouse space is primarily used for storage and distribution with high clear heights and dock access. Flex space combines warehouse and office in one building, typically with lower clear heights (16-24 ft) and more finished office area. Flex is common for light manufacturing, R&D, and showroom uses." },
  { question: "How do I evaluate an industrial property for investment?", answer: "Key metrics include cap rate, price per square foot, clear height, dock count, power capacity, lot coverage ratio, and remaining lease term. Barrett builds pro formas that project cash flow, debt service, and returns specific to industrial investment." },
  { question: "What zoning do I need for industrial or warehouse use in Florida?", answer: "Florida industrial uses typically require M-1 (light industrial), M-2 (heavy industrial), or equivalent county designations. Outside storage, hazardous materials, and heavy manufacturing often require specific zoning or conditional use approval. Barrett verifies zoning compatibility before you commit to any space." },
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

      <Breadcrumbs items={[{ label: "Property Types", href: "/commercial" }, { label: "Industrial & Warehouse", href: "/commercial/industrial-warehouse" }]} />

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
            Industrial and warehouse space covers distribution centers, flex buildings, manufacturing facilities, and cold storage. Florida industrial vacancy rates have remained historically tight, driven by e-commerce fulfillment demand and supply chain reshoring. Tampa Bay&apos;s I-75 corridor and the Lakeland/Plant City industrial zone are among the most active in the Southeast. With 23+ years of real estate experience, Barrett Henry specializes in matching industrial users and investors to the right assets across all Florida submarkets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Industrial Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Industrial is the hottest commercial real estate sector in Florida — and nationally. E-commerce growth, supply chain reshoring, and Florida&apos;s strategic position as a distribution hub for the Southeast and Latin America have driven vacancy rates to historic lows in major submarkets.
          </p>
          <p>
            Tampa Bay, Central Florida, and South Florida all see strong demand for distribution space, flex/warehouse, manufacturing facilities, and cold storage. New construction is underway, but pre-leasing rates are high and existing inventory moves fast. The <Link href="/blog/lakeland-warehouse-industrial-growth" className="text-accent underline">Lakeland warehouse and industrial growth corridor</Link> and the <Link href="/blog/tampa-industrial-market-outlook-2026" className="text-accent underline">Tampa industrial market</Link> are particularly active. If you need industrial space in Florida, act now.
          </p>
          <p>
            For investors, industrial properties offer strong fundamentals: <Link href="/insights/nnn-lease-explained" className="text-accent underline">NNN lease structures</Link> that pass operating costs to tenants, low management burden, and tenant demand that outpaces new supply in most Florida markets. Learn how to <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">calculate industrial property ROI</Link> before making an acquisition decision.
          </p>
        </div>
      </section>

      {/* ---- Image 1: Warehouse exterior ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1565551402624-7b2b47cdcb7e?w=800&auto=format&fit=crop&q=75"
          alt="Industrial warehouse distribution center in Florida with dock-high loading doors"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Modern distribution centers in Florida&apos;s <Link href="/markets/hillsborough" className="underline">Hillsborough</Link>, <Link href="/markets/polk" className="underline">Polk</Link>, and <Link href="/markets/pasco" className="underline">Pasco</Link> county corridors feature 32-40 ft clear heights and cross-dock configurations.</p>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 mt-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Industrial</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Clear Height", desc: "Ceiling height determines racking capacity and operational efficiency. Modern distribution requires 28-36 ft clear. Older warehouses may have 18-24 ft." },
              { title: "Dock & Grade Access", desc: "Dock-high doors for trailer loading and grade-level doors for van access. The mix depends on your operations." },
              { title: "Power & Utilities", desc: "Manufacturing and cold storage need heavy power (3-phase, high amperage). Confirm utility capacity before signing a lease." },
              { title: "Zoning & Use", desc: "Not all industrial zoning allows all uses. Outside storage, hazardous materials, and heavy manufacturing have specific zoning requirements Barrett verifies upfront." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Image 2: Warehouse interior ---- */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=75"
          alt="Warehouse interior with high clear height racking and logistics operations"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Interior clear height determines racking capacity and operational efficiency — a critical spec for distribution and 3PL tenants. Barrett evaluates every industrial property against your operational requirements.</p>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8 mt-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Industrial or Warehouse Space?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your operation and Barrett will identify available options. The market moves fast — get ahead of it.
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
          <p className="mt-4 text-[#666666]">Each industrial sub-type serves different operational needs and trades at different cap rates. Barrett helps tenants and investors match their requirements to the right product type.</p>
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
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Flex</td><td className="py-3 pr-4">16-24 ft</td><td className="py-3 pr-4">Light assembly, showroom, R&amp;D</td><td className="py-3">$12-$18/SF MG</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Manufacturing</td><td className="py-3 pr-4">20-32 ft</td><td className="py-3 pr-4">Production, heavy power needs</td><td className="py-3">$8-$14/SF NNN</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Cold Storage</td><td className="py-3 pr-4">24-36 ft</td><td className="py-3 pr-4">Food, pharma, temp-controlled</td><td className="py-3">$14-$22/SF NNN</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Image 3: Florida industrial corridor ---- */}
      <section className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=75"
          alt="Florida industrial park with multiple warehouse buildings and truck access"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Florida industrial parks along the I-4 and I-75 corridors serve regional distribution networks across the Southeast. Read the <Link href="/blog/sarasota-warehouse-distribution-space-guide" className="underline">Sarasota warehouse guide</Link> for submarket-specific insights.</p>
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
          <h3 className="text-lg font-bold text-black">Explore Related Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
            <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Representation</Link>
            <Link href="/markets/polk" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Polk County Market</Link>
            <Link href="/markets/hillsborough" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Hillsborough Market</Link>
            <Link href="/blog/tampa-industrial-market-outlook-2026" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tampa Industrial Outlook</Link>
            <Link href="/calculators/roi" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">ROI Calculator</Link>
          </div>
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
