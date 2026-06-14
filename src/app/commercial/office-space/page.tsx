import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";

/* -- FAQ data -- */
const FAQS = [
  {
    question: "What is the average office lease rate in Florida?",
    answer: "Office lease rates in Florida range from $18 to $45 per square foot depending on class, location, and lease structure. Class A office in Tampa's Westshore district averages $32-$38/SF full-service. Suburban Class B office runs $22-$28/SF. Barrett provides current market rates for your specific submarket.",
  },
  {
    question: "What is the difference between Class A, B, and C office space?",
    answer: "Class A buildings are premier properties with high-end finishes, modern systems, and prime locations. Class B buildings are well-maintained but may lack premium amenities. Class C buildings are functional but dated, offering the lowest rents. The right class depends on your business image and budget.",
  },
  {
    question: "Should I lease or buy office space?",
    answer: "Leasing offers flexibility, lower upfront costs, and the ability to scale. Buying builds equity and provides tax advantages. Barrett analyzes both options against your business plan, timeline, and financial position to recommend the best approach.",
  },
  {
    question: "How much office space do I need per employee?",
    answer: "According to BOMA, the industry standard ranges from 150 to 300 usable square feet per employee, depending on work style. Open office plans use less; private offices use more. Barrett helps you calculate the right amount based on your specific needs.",
  },
  {
    question: "What is a full-service gross lease?",
    answer: "In a full-service gross lease, the tenant pays one flat rental rate that includes base rent plus all operating expenses — taxes, insurance, utilities, and maintenance. This structure is most common for office space and provides predictable monthly costs.",
  },
];

/* -------------------------------------------------------------------
 * Office Space — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Office Space Florida | Class A, B, C Lease & Sale",
  description:
    "Find, lease, or invest in office space across Florida. Class A, B, and C office buildings. Tenant rep, landlord leasing, and investment sales. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/commercial/office-space" },
  openGraph: {
    title: "Office Space | REMAX Commercial Real Estate",
    description: "Commercial office leasing, sales, and investment across Florida. Class A through C.",
    url: "https://hencre.com/commercial/office-space",
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
        { "@type": "ListItem", position: 3, name: "Office Space", item: "https://hencre.com/commercial/office-space" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Office Space in Florida",
      description: "Commercial office space leasing, sales, and investment across Florida.",
      url: "https://hencre.com/commercial/office-space",
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

export default function OfficeSpacePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Office Space</li>
        </ol>
      </nav>

      <Hero
        title="Office Space"
        subtitle="Class A, B, and C office — from single-tenant buildings to multi-story towers. Leasing, sales, and investment."
        ctaText="Find Office Space"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Florida office space includes Class A, B, and C buildings used for professional, medical, and corporate purposes. According to CoStar, Tampa Bay office vacancy rates are approximately 12-15% in 2026, with strong absorption in Class A suburban locations as companies relocate from higher-cost states.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Office Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s office market continues to evolve as companies relocate from
            high-tax states and remote work reshapes demand patterns. Tampa Bay, in
            particular, has seen strong net absorption in Class A suburban office as
            companies seek modern, amenity-rich workspaces that attract talent.
          </p>
          <p>
            Whether you need a 1,500 SF professional suite or a 50,000 SF corporate
            headquarters, the Florida office market offers options across every price
            point and submarket. REMAX Commercial Real Estate advisors specialize in office properties across every submarket. I help tenants find the right fit, landlords fill
            vacancies, and investors acquire performing office assets.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Office Space</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Classification", desc: "Class A offers premium finishes and amenities. Class B is functional and well-maintained. Class C is budget-friendly but may need updates. The right class depends on your business image and budget." },
              { title: "Lease Structure", desc: "Full-service gross, modified gross, or NNN — each shifts expenses differently between tenant and landlord. I help you understand total occupancy cost, not just asking rent." },
              { title: "Location & Access", desc: "Proximity to talent, clients, and transportation matters. Consider highway access, parking ratios, walkability, and proximity to restaurants and amenities." },
              { title: "Build-Out & TI", desc: "Most office spaces require some customization. Negotiate tenant improvement allowances early — they can save tens of thousands over a lease term." },
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
            Looking for Office Space in Florida?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your requirements and I will start the market survey. No cost, no
            obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Contact Barrett
            </Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      {/* ---- Office class comparison table ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Office Building Classes Compare?</h2>
          <p className="mt-4 text-[#666666]">According to BOMA International, office buildings are classified based on quality, amenities, and location.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Class</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Typical Rent (FL)</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Finishes</th>
                  <th className="py-3 text-left font-bold text-black">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Class A</td>
                  <td className="py-3 pr-4">$30-$45/SF</td>
                  <td className="py-3 pr-4">Premium, modern systems, high-end lobbies</td>
                  <td className="py-3">Law firms, finance, corporate HQ</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Class B</td>
                  <td className="py-3 pr-4">$22-$30/SF</td>
                  <td className="py-3 pr-4">Well-maintained, functional</td>
                  <td className="py-3">Professional services, medical, tech</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Class C</td>
                  <td className="py-3 pr-4">$14-$22/SF</td>
                  <td className="py-3 pr-4">Budget-friendly, may need updates</td>
                  <td className="py-3">Startups, nonprofits, back-office</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Office Space — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>CoStar Group — Tampa Bay Office Market Report</li>
          <li>BOMA International — Office Building Classification Standards</li>
          <li>CBRE Research — U.S. Office Market Outlook</li>
          <li>National Association of REALTORS — Commercial Real Estate Market Report</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Industrial &amp; Warehouse</Link>
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
