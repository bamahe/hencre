import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * Vacancy Marketing & Tenant Placement — sub-page under Commercial PM.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Vacancy Marketing & Tenant Placement FL",
  description:
    "Multi-channel vacancy marketing on LoopNet, CoStar, Crexi, and broker networks. Tenant screening, LOI negotiation, and lease execution. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/commercial-property-management/vacancy-marketing" },
  openGraph: {
    title: "Commercial Vacancy Marketing & Tenant Placement | Florida",
    description:
      "Fill commercial vacancies faster with targeted marketing across LoopNet, CoStar, Crexi, and the REMAX Commercial broker network.",
    url: "https://hencre.com/services/commercial-property-management/vacancy-marketing",
  },
};

const FAQS = [
  {
    question: "How long does it take to fill a commercial vacancy in Florida?",
    answer: "Average commercial vacancy absorption varies by property type: office space typically takes 4 to 9 months, retail space 3 to 8 months, and industrial/warehouse space 2 to 6 months in Florida's current market. Factors affecting timeline include location, asking rent relative to market, property condition, and marketing strategy. Barrett's multi-channel approach consistently outperforms single-platform listings.",
  },
  {
    question: "What marketing platforms does Barrett use for commercial vacancies?",
    answer: "Barrett markets commercial vacancies across LoopNet, CoStar, Crexi, the REMAX Commercial network, local commercial MLS, direct outreach to tenant rep brokers, and targeted email campaigns to industry contacts. Each platform reaches a different audience segment, maximizing exposure and reducing time-to-lease.",
  },
  {
    question: "How does tenant screening work for commercial properties?",
    answer: "Commercial tenant screening evaluates business financial statements (2-3 years), business credit reports, personal guarantor credit, trade references, landlord references, business plan viability, and use compatibility with existing tenants and zoning. Barrett prepares a tenant qualification package for owner review before any LOI is accepted.",
  },
  {
    question: "What is an LOI and how does it work in commercial leasing?",
    answer: "A Letter of Intent (LOI) is a non-binding document outlining the key business terms of a proposed lease — rent, term, tenant improvements, concessions, and special conditions. The LOI is negotiated before the formal lease is drafted, saving both parties legal costs on deal points that may not survive negotiation. Barrett drafts and negotiates LOIs as part of the vacancy marketing process.",
  },
  {
    question: "How does vacancy marketing tie into property management?",
    answer: "When property management and leasing are handled by the same broker, vacancy response time drops dramatically. Barrett identifies upcoming vacancies through lease administration tracking and begins pre-marketing before the space is even vacant. This integrated approach — combining management data with REMAX Commercial's leasing network — minimizes vacancy loss.",
  },
  {
    question: "Does Barrett charge a separate leasing commission for vacancies in managed properties?",
    answer: "Leasing commissions for vacancy fills are handled per the management agreement. Barrett discusses commission structure upfront during the management proposal process so there are no surprises. In many cases, the leasing commission is reduced for managed properties because Barrett already has institutional knowledge of the building, tenants, and market positioning.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "Commercial Property Management", item: "https://hencre.com/services/commercial-property-management" },
        { "@type": "ListItem", position: 4, name: "Vacancy Marketing", item: "https://hencre.com/services/commercial-property-management/vacancy-marketing" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Vacancy Marketing & Tenant Placement",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Multi-channel vacancy marketing, tenant screening, LOI negotiation, and lease execution for commercial properties across Florida.",
      areaServed: { "@type": "State", name: "Florida" },
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

export default function VacancyMarketingPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Commercial Property Management", href: "/services/commercial-property-management" }, { label: "Vacancy Marketing", href: "/services/commercial-property-management/vacancy-marketing" }]} />

      <Hero
        title="Commercial Vacancy Marketing & Tenant Placement"
        subtitle="Fill vacancies faster with multi-channel marketing, qualified tenant screening, and the REMAX Commercial broker network."
        ctaText="Market My Vacancy"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial vacancy marketing combines multi-platform listing exposure (LoopNet, CoStar, Crexi), direct broker outreach, tenant screening, LOI negotiation, and lease execution. Integrated with property management, vacancy marketing begins before a space is even vacant — reducing downtime and protecting owner revenue.
          </p>
        </div>
      </section>

      {/* ---- Why multi-channel matters ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Why Does Multi-Channel Marketing Matter for Commercial Vacancies?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Commercial tenants do not find space the way residential renters do. Business owners and their tenant rep brokers search across multiple platforms, rely on broker-to-broker referrals, and evaluate properties based on financial analysis rather than photos. A vacancy listed on only one platform misses entire segments of the market.
          </p>
          <p>
            Barrett markets every commercial vacancy across all major platforms simultaneously while activating the REMAX Commercial broker network — one of the largest commercial real estate networks in the world. This multi-channel approach reaches local, regional, and national tenants, dramatically increasing the pool of qualified prospects.
          </p>
          <p>
            Because Barrett also handles <Link href="/services/commercial-property-management" className="font-semibold text-black underline">property management</Link>, vacancy marketing begins proactively. When <Link href="/services/commercial-property-management/lease-administration" className="font-semibold text-black underline">lease administration</Link> tracking identifies an upcoming lease expiration or non-renewal, pre-marketing starts months before the space becomes vacant. This overlap between management and <Link href="/services/landlord-leasing" className="font-semibold text-black underline">landlord leasing</Link> services is a key advantage of working with Barrett.
          </p>
        </div>
      </section>

      {/* ---- Marketing channels table ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Which Marketing Channels Reach Commercial Tenants?</h2>
          <p className="mt-4 text-lg text-[#666666]">
            Each marketing channel reaches a different audience. Barrett uses all of them simultaneously to maximize exposure and minimize vacancy time.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Channel</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Primary Audience</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Strengths</th>
                  <th className="py-3 text-left font-bold text-black">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">LoopNet</td>
                  <td className="py-3 pr-4">Business owners, small investors</td>
                  <td className="py-3 pr-4">Largest public-facing CRE platform</td>
                  <td className="py-3">Retail, small office, owner-users</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">CoStar</td>
                  <td className="py-3 pr-4">Tenant rep brokers, institutional tenants</td>
                  <td className="py-3 pr-4">Industry-standard data; broker-to-broker</td>
                  <td className="py-3">Office, industrial, institutional</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Crexi</td>
                  <td className="py-3 pr-4">Investors, brokers, business owners</td>
                  <td className="py-3 pr-4">Modern platform; strong investor traffic</td>
                  <td className="py-3">NNN, investment, retail</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">REMAX Commercial Network</td>
                  <td className="py-3 pr-4">Brokers across 110+ countries</td>
                  <td className="py-3 pr-4">Global reach; broker referral system</td>
                  <td className="py-3">All property types</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Direct Broker Outreach</td>
                  <td className="py-3 pr-4">Local and regional tenant rep brokers</td>
                  <td className="py-3 pr-4">Personal relationships; off-market deals</td>
                  <td className="py-3">High-value spaces, specialized use</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Email Campaigns</td>
                  <td className="py-3 pr-4">Targeted industry contacts</td>
                  <td className="py-3 pr-4">Segmented by industry and size need</td>
                  <td className="py-3">Niche tenants, specific use cases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Mid-article CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg font-semibold text-white">
            Call Barrett directly at{" "}
            <a href="tel:+18137337907" className="underline text-white">(813) 733-7907</a>{" "}
            to discuss your property management needs.
          </p>
        </div>
      </section>

      {/* ---- Tenant screening ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Does Commercial Tenant Screening Differ from Residential?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Screening a commercial tenant is fundamentally different from screening a residential renter. Barrett evaluates business financial statements (typically 2 to 3 years of tax returns and balance sheets), business credit reports, personal guarantor credit, trade and landlord references, business plan viability for startups, and use compatibility with existing tenants and local zoning requirements.
          </p>
          <p>
            The goal is not just finding a tenant who can pay rent today — it is finding a tenant whose business will thrive in the space for the full lease term. A tenant who fails after 18 months costs the owner far more than a few extra weeks of vacancy spent finding the right fit.
          </p>
          <p>
            Barrett prepares a detailed tenant qualification summary for owner review before any LOI is executed. This summary includes financial analysis, reference checks, use compatibility assessment, and Barrett&apos;s recommendation. Owners make the final decision with full transparency.
          </p>
        </div>
      </section>

      {/* ---- LOI to lease ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Happens from LOI to Lease Execution?</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Once a qualified tenant is identified and screened, Barrett drafts the Letter of Intent (LOI) outlining key business terms: rent, lease term, tenant improvement allowance, free rent or concessions, permitted use, and any special conditions. The LOI is negotiated until both parties agree on terms.
            </p>
            <p>
              After LOI execution, Barrett coordinates with the owner&apos;s attorney for formal lease drafting, manages the review process, and ensures all lease terms match the agreed LOI. For properties under management, Barrett also coordinates tenant improvement construction, move-in logistics, and the transition into the <Link href="/services/commercial-property-management/tenant-relations" className="font-semibold text-black underline">tenant relations</Link> program — creating a seamless experience from first showing to occupancy.
            </p>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-black">{faq.question}</h3>
              <p className="mt-2 text-[#666666]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>CoStar Group — <em>U.S. Commercial Real Estate Market Analytics</em></li>
          <li>REMAX Commercial — <em>Global Commercial Network Standards</em></li>
          <li>Institute of Real Estate Management (IREM) — <em>Commercial Leasing Best Practices</em></li>
          <li>Florida Statute 475 — Commercial Real Estate Brokerage Requirements</li>
        </ul>
      </section>

      {/* ---- Lead form ---- */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CTASection
        heading="Have a Vacant Space That Needs a Tenant?"
        body="Call Barrett at (813) 733-7907. Multi-platform marketing, qualified screening, and the REMAX Commercial network working for you."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/commercial-property-management" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Property Management Overview</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
            <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Representation</Link>
            <Link href="/services/commercial-property-management/lease-administration" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Lease Administration</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
