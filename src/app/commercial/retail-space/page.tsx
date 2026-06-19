import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -- FAQ data -- */
const FAQS = [
  { question: "What is a good traffic count for retail space?", answer: "According to the International Council of Shopping Centers (ICSC), retail locations along corridors with 20,000+ average daily traffic (ADT) are considered strong. Major intersections with 40,000+ ADT command premium rents. Barrett provides traffic data for every retail location he presents." },
  { question: "What is a NNN lease for retail?", answer: "In a triple-net (NNN) lease, the tenant pays base rent plus property taxes, insurance, and common area maintenance (CAM). NNN is the standard lease structure for most retail space in Florida. Barrett negotiates CAM caps, exclusivity clauses, and other tenant protections." },
  { question: "How long are typical retail lease terms?", answer: "Retail leases typically run 5 to 10 years with options to renew. National tenants may sign 10 to 20-year leases. Shorter terms are common for startups and pop-up concepts. Barrett structures terms that balance landlord security with tenant flexibility." },
  { question: "What retail property types are available in Florida?", answer: "Florida retail includes strip centers, neighborhood centers, power centers, lifestyle centers, standalone pad sites, outparcels, and mixed-use ground-floor retail. Each format serves different tenant profiles and traffic patterns." },
  { question: "How do I evaluate a retail location?", answer: "Key factors include traffic counts, demographics within a 1, 3, and 5-mile radius, co-tenancy mix, visibility, signage rights, parking ratios, and competition. Barrett provides a comprehensive site analysis for every retail opportunity." },
];

/* -------------------------------------------------------------------
 * Retail Space — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Retail Space Florida | Strip Centers, Pads, Mixed-Use",
  description:
    "Find, lease, or invest in retail space across Florida. Strip centers, standalone pads, outparcels, and mixed-use. Barrett Henry at REMAX Collective. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/commercial/retail-space" },
  openGraph: {
    title: "Retail Space | REMAX Commercial Real Estate",
    description: "Commercial retail leasing, sales, and investment across Florida.",
    url: "https://hencre.com/commercial/retail-space",
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
        { "@type": "ListItem", position: 3, name: "Retail Space", item: "https://hencre.com/commercial/retail-space" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Retail Space in Florida",
      url: "https://hencre.com/commercial/retail-space",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function RetailSpacePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Property Types", href: "/commercial" }, { label: "Retail Space", href: "/commercial/retail-space" }]} />

      <Hero
        title="Retail Space"
        subtitle="Strip centers, standalone pads, outparcels, and mixed-use retail. High-traffic locations across Florida."
        ctaText="Find Retail Space"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial retail space encompasses strip centers, standalone pads, outparcels, and mixed-use storefronts used by restaurants, service businesses, and retailers. According to the International Council of Shopping Centers (ICSC), Florida ranks among the top 3 states nationally for retail demand driven by population growth, tourism, and no state income tax.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Retail Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s retail market benefits from strong population growth,
            year-round tourism, and no state income tax. Retail vacancy rates in major
            metros remain tight, and tenant demand continues to outpace new
            construction in high-traffic corridors.
          </p>
          <p>
            From neighborhood strip centers to regional power centers, the retail
            landscape offers diverse opportunities for tenants, landlords, and
            investors. REMAX Commercial Real Estate advisors bring deep retail expertise to every deal. I work with restaurant operators, medical practices, service
            businesses, and national brands to secure high-visibility locations with
            strong traffic counts and favorable lease terms.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Retail</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Traffic Counts", desc: "Daily vehicle and pedestrian traffic directly impacts revenue. I provide traffic data and demographic analysis for every location." },
              { title: "Co-Tenancy", desc: "Who are the neighboring tenants? A strong anchor tenant drives foot traffic. I evaluate co-tenancy clauses and tenant mix." },
              { title: "Lease Structure", desc: "NNN is standard for retail, but percentage rent, CAM caps, and exclusivity clauses are all negotiable. I protect your interests on every point." },
              { title: "Visibility & Signage", desc: "Frontage, pylon signs, and monument signs impact your brand exposure. Zoning and landlord approval for signage should be confirmed early." },
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
            Need Retail Space in Florida?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your concept, size requirements, and target market. I will find the
            right location.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">Contact Barrett</Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">Call (813) 733-7907</a>
          </div>
        </div>
      </section>

      {/* ---- Retail format comparison table ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Retail Property Formats Compare?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Format</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Size Range</th>
                  <th className="py-3 text-left font-bold text-black">Typical Tenants</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Strip Center</td><td className="py-3 pr-4">10,000-30,000 SF</td><td className="py-3">Restaurants, salons, service businesses</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Neighborhood Center</td><td className="py-3 pr-4">30,000-100,000 SF</td><td className="py-3">Grocery-anchored, pharmacy, banks</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Pad Site</td><td className="py-3 pr-4">1,500-5,000 SF</td><td className="py-3">QSR, coffee, banks, auto service</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Power Center</td><td className="py-3 pr-4">250,000-600,000 SF</td><td className="py-3">Big-box retailers, category killers</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Retail Space — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>International Council of Shopping Centers (ICSC) — Retail Market Demand Report</li>
          <li>CoStar Group — Florida Retail Market Analytics</li>
          <li>National Association of REALTORS — Commercial Real Estate Trends</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Industrial &amp; Warehouse</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
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
