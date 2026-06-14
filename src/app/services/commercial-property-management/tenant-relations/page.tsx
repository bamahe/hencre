import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";

/* -------------------------------------------------------------------
 * Tenant Relations & Retention — sub-page under Commercial PM.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Tenant Relations & Retention FL",
  description:
    "Tenant communication, lease renewals, dispute resolution, and retention strategies for commercial properties in Florida. Call Barrett at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/commercial-property-management/tenant-relations" },
  openGraph: {
    title: "Commercial Tenant Relations & Retention | Keep Quality Tenants",
    description:
      "Proven tenant retention strategies for commercial property owners across Florida. Reduce turnover and protect your NOI.",
    url: "https://hencre.com/services/commercial-property-management/tenant-relations",
  },
};

const FAQS = [
  {
    question: "How much does tenant turnover cost in commercial real estate?",
    answer: "According to BOMA, tenant turnover in commercial properties typically costs 12 to 18 months of rent when you factor in vacancy loss, tenant improvement costs for the next tenant, leasing commissions, and marketing expenses. For a 3,000 SF office space at $25 PSF, that translates to $75,000 to $112,500 in total turnover cost.",
  },
  {
    question: "When should lease renewal negotiations begin?",
    answer: "Best practice is to begin renewal discussions 9 to 12 months before lease expiration. This gives both parties adequate time to evaluate market conditions, negotiate terms, and complete any tenant improvement work before the existing lease expires.",
  },
  {
    question: "How do you handle tenant disputes in a multi-tenant building?",
    answer: "Barrett follows a structured dispute resolution process: document the issue, meet with both parties individually, review lease terms for applicable clauses, propose a solution that aligns with the lease, and follow up in writing. Most disputes resolve without legal involvement when handled promptly and professionally.",
  },
  {
    question: "What is a tenant satisfaction survey and how often should one be conducted?",
    answer: "A tenant satisfaction survey measures tenant perceptions of building management, maintenance responsiveness, common area quality, and overall value. IREM recommends conducting surveys annually. The results identify issues before they become reasons to vacate and provide data to benchmark management performance.",
  },
  {
    question: "How does Barrett communicate with tenants?",
    answer: "Barrett maintains regular communication through quarterly property newsletters, prompt response to maintenance requests (same-day acknowledgment), annual in-person check-ins with each tenant, and immediate notification of any building-wide issues or scheduled maintenance. Every interaction is documented.",
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
        { "@type": "ListItem", position: 4, name: "Tenant Relations", item: "https://hencre.com/services/commercial-property-management/tenant-relations" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Tenant Relations & Retention",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Tenant communication, lease renewal negotiation, dispute resolution, and retention programs for commercial properties across Florida.",
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

export default function TenantRelationsPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services/commercial-property-management" className="hover:underline no-underline">Commercial Property Management</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Tenant Relations</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Tenant Relations & Retention"
        subtitle="Keep quality tenants longer. Reduce turnover costs. Protect your net operating income."
        ctaText="Discuss Your Property"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial tenant relations encompass proactive communication, lease renewal negotiation, dispute resolution, and satisfaction monitoring. Retaining an existing tenant costs a fraction of replacing one — typically saving owners 12 to 18 months of rent equivalent costs per turnover avoided.
          </p>
        </div>
      </section>

      {/* ---- Why retention matters ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Why Does Tenant Retention Matter More Than Tenant Acquisition?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Every commercial property owner wants full occupancy, but the real money in property management is retention — not acquisition. According to the Building Owners and Managers Association (BOMA), the total cost of turning over a commercial tenant typically equals 12 to 18 months of gross rent. That includes vacancy loss during downtime, tenant improvement demolition and rebuild costs, leasing commissions, marketing expenses, and the administrative burden of lease negotiation.
          </p>
          <p>
            A proactive tenant relations program eliminates most of those costs by identifying issues early, addressing concerns before they escalate, and negotiating renewals from a position of mutual value rather than desperation. Barrett builds these programs into every <Link href="/services/commercial-property-management" className="font-semibold text-black underline">commercial property management</Link> engagement.
          </p>
        </div>
      </section>

      {/* ---- Retention vs turnover cost table ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Does Tenant Turnover Actually Cost?</h2>
          <p className="mt-4 text-lg text-[#666666]">
            This comparison shows the real cost difference between retaining an existing tenant and replacing one, based on a typical 3,000 SF office space at $25 PSF NNN in the Tampa Bay market.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Cost Category</th>
                  <th className="py-3 pr-4 text-right font-bold text-black">Tenant Retention</th>
                  <th className="py-3 text-right font-bold text-black">Tenant Turnover</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Vacancy Loss (6-9 months avg)</td>
                  <td className="py-3 pr-4 text-right">$0</td>
                  <td className="py-3 text-right">$37,500 - $56,250</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Tenant Improvement Costs</td>
                  <td className="py-3 pr-4 text-right">$0 - $5,000</td>
                  <td className="py-3 text-right">$15,000 - $45,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Leasing Commission</td>
                  <td className="py-3 pr-4 text-right">$0</td>
                  <td className="py-3 text-right">$7,500 - $11,250</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Marketing &amp; Showing Costs</td>
                  <td className="py-3 pr-4 text-right">$0</td>
                  <td className="py-3 text-right">$2,000 - $5,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Legal &amp; Admin</td>
                  <td className="py-3 pr-4 text-right">$500 - $1,500</td>
                  <td className="py-3 text-right">$2,000 - $5,000</td>
                </tr>
                <tr className="border-t-2 border-black font-bold text-black">
                  <td className="py-3 pr-4">Total Estimated Cost</td>
                  <td className="py-3 pr-4 text-right">$500 - $6,500</td>
                  <td className="py-3 text-right">$64,000 - $122,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- What Barrett does ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Does Barrett Manage Tenant Relationships?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Barrett takes a structured approach to tenant relations that prevents problems rather than reacting to them. Every managed property receives quarterly tenant check-ins, annual satisfaction surveys, and proactive lease renewal outreach beginning 12 months before expiration.
          </p>
          <p>
            When disputes arise — noise complaints between tenants, parking conflicts, or shared utility disagreements — Barrett documents the issue, reviews the relevant lease clauses, and facilitates a resolution that protects the owner&apos;s interests while maintaining the tenant relationship. Most disputes resolve within 48 hours without legal involvement.
          </p>
          <p>
            For lease renewals, Barrett combines <Link href="/services/commercial-property-management/financial-reporting" className="font-semibold text-black underline">financial performance data</Link> with current market analysis from his <Link href="/services/cre-valuation" className="font-semibold text-black underline">CRE valuation</Link> practice to negotiate renewal terms that reflect fair market value while retaining quality tenants. This integrated approach — available because Barrett handles both management and <Link href="/services/landlord-leasing" className="font-semibold text-black underline">leasing</Link> — is something most standalone management firms cannot offer.
          </p>
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

      {/* ---- Retention strategies ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Retention Strategies Work Best for Commercial Properties?</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Proactive lease renewal outreach 9-12 months before expiration",
              "Annual tenant satisfaction surveys with action plans",
              "Quarterly property newsletters with building updates",
              "Same-day acknowledgment of maintenance requests",
              "Tenant improvement coordination for growing businesses",
              "Flexible lease restructuring when tenant needs change",
              "Building amenity investments based on tenant feedback",
              "Direct access to the property manager — not a call center",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-black font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
          <li>Building Owners and Managers Association (BOMA) — <em>Tenant Retention Best Practices</em></li>
          <li>Institute of Real Estate Management (IREM) — <em>Managing Commercial Real Estate</em></li>
          <li>Florida Statute 83, Part II — Florida Landlord and Tenant Act</li>
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
        heading="Struggling with Tenant Turnover?"
        body="Call Barrett at (813) 733-7907. A proactive retention strategy costs a fraction of replacing a quality tenant."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/commercial-property-management" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Property Management Overview</Link>
            <Link href="/services/commercial-property-management/lease-administration" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Lease Administration</Link>
            <Link href="/services/commercial-property-management/vacancy-marketing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Vacancy Marketing</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
