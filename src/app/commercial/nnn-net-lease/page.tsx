import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -- FAQ data -- */
const FAQS = [
  { question: "What does NNN mean in a lease?", answer: "NNN stands for triple net — the tenant pays base rent plus all three net expenses: property taxes, building insurance, and common area maintenance (CAM). The landlord collects rent with minimal management responsibility, making NNN the most passive form of commercial real estate ownership." },
  { question: "What is a good cap rate for NNN properties in Florida?", answer: "NNN cap rates in Florida range from 4.5% for investment-grade tenants on long-term leases to 7%+ for franchisee-operated locations or shorter lease terms. According to The Boulder Group, the national average NNN cap rate is approximately 6.3% as of 2024." },
  { question: "Are NNN properties good for 1031 exchanges?", answer: "Yes. NNN properties are one of the most popular replacement properties for 1031 exchanges because they offer stable, predictable cash flow and minimal management — ideal for investors looking to defer taxes while transitioning to passive ownership." },
  { question: "What tenants are common in NNN properties?", answer: "Common NNN tenants include national pharmacy chains (Walgreens, CVS), quick-service restaurants (McDonald's, Chick-fil-A), dollar stores (Dollar General, Dollar Tree), auto parts stores, convenience stores, and bank branches. Investment-grade tenants carry S&P credit ratings." },
  { question: "What risks come with NNN investing?", answer: "Key risks include tenant credit deterioration, lease expiration without renewal, single-tenant concentration, market-level rent changes, and property obsolescence. Barrett evaluates each risk factor and helps investors build portfolios with appropriate diversification." },
];

/* -------------------------------------------------------------------
 * NNN / Net Lease — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "NNN Net Lease Florida | Triple-Net Investment Properties",
  description:
    "Buy or sell NNN net lease properties in Florida. Triple-net investments with stable, long-term cash flow and corporate-guaranteed tenants. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/commercial/nnn-net-lease" },
  openGraph: {
    title: "NNN / Net Lease | REMAX Commercial Real Estate",
    description: "Triple-net investment properties across Florida. Stable cash flow, minimal landlord responsibility.",
    url: "https://hencre.com/commercial/nnn-net-lease",
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
        { "@type": "ListItem", position: 3, name: "NNN / Net Lease", item: "https://hencre.com/commercial/nnn-net-lease" },
      ],
    },
    {
      "@type": "WebPage",
      name: "NNN Net Lease Properties in Florida",
      url: "https://hencre.com/commercial/nnn-net-lease",
    },
    { "@type": "FAQPage", mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function NNNNetLeasePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Property Types", href: "/commercial" }, { label: "NNN / Net Lease", href: "/commercial/nnn-net-lease" }]} />

      <Hero
        title="NNN / Net Lease"
        subtitle="Triple-net investments with stable, long-term cash flow. Corporate-guaranteed tenants and passive income."
        ctaText="Explore NNN Deals"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            A NNN (triple net) lease requires the tenant to pay base rent plus property taxes, insurance, and maintenance. According to The Boulder Group, NNN properties traded at an average 6.3% cap rate nationally in 2024, making them one of the most popular passive commercial investment vehicles for retirees, 1031 exchange buyers, and income-focused investors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Is a NNN Net Lease?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            In a triple-net (NNN) lease, the tenant pays base rent plus all three
            operating expenses: property taxes, building insurance, and common area
            maintenance. The landlord collects rent with minimal management
            responsibility. It is as close to passive income as commercial real estate
            gets.
          </p>
          <p>
            NNN properties are popular among investors, retirees, and 1031 exchange
            buyers who want predictable cash flow without the headaches of active
            property management. The best NNN deals feature investment-grade tenants
            (think national pharmacy chains, quick-service restaurants, dollar stores)
            on long-term leases with built-in rent escalations.
          </p>
          <p>
            REMAX Commercial Real Estate advisors bring specialized NNN expertise and investor relationships to every transaction. Florida is one of the most active NNN markets in the country, driven by
            population growth, strong retail fundamentals, and investor demand. I help
            buyers source quality NNN assets and sellers position properties for
            maximum value.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for NNN Investing</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Tenant Credit", desc: "Investment-grade tenants (S&P rated) offer the lowest risk. Franchisee-operated locations may carry higher cap rates but more credit risk. I help you evaluate the difference." },
              { title: "Lease Term", desc: "Longer remaining lease terms command lower cap rates (higher prices). Properties with 5+ years left on a corporate lease are the most liquid. Short-term leases introduce renewal risk." },
              { title: "Rent Escalations", desc: "Built-in annual increases (flat or CPI-linked) protect against inflation. A 2% annual bump compounds significantly over a 15-year lease. I model total return over your hold period." },
              { title: "Location Quality", desc: "Even with a strong tenant, location matters. A well-located property retains value and re-leases more easily if the tenant departs. I evaluate both the tenant and the real estate." },
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
            Interested in NNN Investments?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your investment criteria — cap rate target, budget, tenant
            preference — and I will source matching opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">Contact Barrett</Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">Call (813) 733-7907</a>
          </div>
        </div>
      </section>

      {/* ---- NNN comparison table ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do NNN Cap Rates Vary by Tenant Type?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Tenant Type</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Typical Cap Rate</th>
                  <th className="py-3 text-left font-bold text-black">Credit Profile</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Investment-Grade Corporate</td><td className="py-3 pr-4">4.5-5.5%</td><td className="py-3">S&amp;P rated (Walgreens, McDonald&apos;s)</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">National Franchisee</td><td className="py-3 pr-4">5.5-6.5%</td><td className="py-3">Strong multi-unit operators</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Regional Brand</td><td className="py-3 pr-4">6.5-7.5%</td><td className="py-3">Established but not publicly traded</td></tr>
                <tr className="border-b border-gray-200"><td className="py-3 pr-4 font-semibold text-black">Local / Single-Unit</td><td className="py-3 pr-4">7.5%+</td><td className="py-3">Higher risk, personal guarantee typical</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">NNN / Net Lease — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>The Boulder Group — Net Lease Research Report</li>
          <li>CoStar Group — Florida NNN Market Analytics</li>
          <li>National Association of REALTORS — Commercial Investment Trends</li>
          <li>IRS Publication 544 — 1031 Exchange Rules</li>
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
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
            <Link href="/insights/nnn-lease-explained" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN Leases Explained</Link>
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
