import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";

/* -------------------------------------------------------------------
 * Lease Administration — sub-page under Commercial PM.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Lease Administration | Tracking & Compliance FL",
  description:
    "Lease abstraction, critical date tracking, compliance monitoring, and estoppel preparation for commercial properties in Florida. Call Barrett at (813) 733-7907.",
  openGraph: {
    title: "Commercial Lease Administration | Tracking & Compliance FL",
    description:
      "Never miss a lease deadline. Critical date tracking, tenant compliance, and renewal management for commercial properties across Florida.",
    url: "https://hencre.com/services/commercial-property-management/lease-administration",
  },
};

const FAQS = [
  {
    question: "What is lease abstraction and why is it important?",
    answer: "Lease abstraction is the process of extracting key terms from a commercial lease into a standardized summary — rent amounts, escalation schedules, renewal options, termination rights, insurance requirements, and special clauses. Abstractions make it possible to track dozens of leases without reading full documents every time a decision needs to be made.",
  },
  {
    question: "What critical dates should a commercial property manager track?",
    answer: "Essential critical dates include lease expiration, renewal option exercise deadlines, rent escalation dates, percentage rent calculation periods, insurance certificate renewal deadlines, estoppel delivery deadlines, tenant improvement completion dates, and any special clause trigger dates like co-tenancy or kick-out provisions.",
  },
  {
    question: "What is an estoppel certificate and when is it needed?",
    answer: "An estoppel certificate is a signed statement by a tenant confirming the terms of their lease — rent amount, lease dates, security deposit, and any modifications. Estoppels are required during property sales, refinancing, or loan applications. Barrett prepares and distributes estoppel requests as part of every disposition or financing engagement.",
  },
  {
    question: "How does Barrett monitor tenant compliance?",
    answer: "Barrett tracks tenant compliance across insurance certificates (ensuring coverage stays current), permitted use restrictions, exclusive use provisions, signage guidelines, maintenance obligations under NNN leases, and any special conditions like operating hours or hazardous materials restrictions. Non-compliance is documented and addressed immediately.",
  },
  {
    question: "What happens if a lease renewal deadline is missed?",
    answer: "Missing a lease renewal option deadline can mean losing a quality tenant or losing leverage in negotiation — depending on which side misses it. If the tenant misses their option exercise window, the lease may convert to month-to-month or terminate. Barrett's tracking system flags all critical dates 120, 90, 60, and 30 days in advance to prevent missed deadlines.",
  },
  {
    question: "How often should a commercial lease audit be conducted?",
    answer: "A full lease audit should be conducted at least annually and whenever a property changes management. The audit verifies that all lease terms are being enforced, rent escalations have been applied correctly, insurance requirements are current, and CAM charges match actual expenses. Barrett performs comprehensive lease audits for every property entering management.",
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
        { "@type": "ListItem", position: 4, name: "Lease Administration", item: "https://hencre.com/services/commercial-property-management/lease-administration" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Lease Administration",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Lease abstraction, critical date tracking, tenant compliance monitoring, insurance certificate management, estoppel preparation, and lease audits for commercial properties across Florida.",
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

export default function LeaseAdministrationPage() {
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
          <li className="font-semibold text-black" aria-current="page">Lease Administration</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Lease Administration"
        subtitle="Every critical date tracked. Every compliance requirement monitored. Never miss a deadline that costs you money."
        ctaText="Schedule a Lease Audit"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial lease administration is the systematic tracking and management of all lease terms, critical dates, tenant compliance requirements, and documentation across a commercial property. Proper lease administration prevents missed deadlines, revenue leakage, and compliance failures that can cost property owners thousands of dollars annually.
          </p>
        </div>
      </section>

      {/* ---- What is lease admin ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Is Commercial Lease Administration and Why Does It Matter?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Lease administration is the operational backbone of <Link href="/services/commercial-property-management" className="font-semibold text-black underline">commercial property management</Link>. A typical multi-tenant commercial property has dozens of critical dates, compliance requirements, and financial triggers buried across multiple lease documents. Without systematic tracking, deadlines get missed, rent escalations go unapplied, and insurance lapses go unnoticed.
          </p>
          <p>
            According to IREM, revenue leakage from poor lease administration — missed escalations, unapplied late fees, expired insurance — averages 2% to 5% of gross revenue for self-managed commercial properties. On a $500,000 annual rent roll, that is $10,000 to $25,000 walking out the door every year.
          </p>
          <p>
            Barrett&apos;s lease administration system tracks every critical date, compliance requirement, and financial trigger across every lease in the portfolio. Alerts fire at 120, 90, 60, and 30 days before each deadline, giving owners and tenants adequate time to review, negotiate, and act.
          </p>
        </div>
      </section>

      {/* ---- Critical dates table ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Critical Lease Dates Should Property Owners Track?</h2>
          <p className="mt-4 text-lg text-[#666666]">
            The following table lists the critical dates Barrett tracks for every commercial lease, along with recommended lead times for action.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Critical Date</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Action Required</th>
                  <th className="py-3 text-left font-bold text-black">Lead Time</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Lease Expiration</td>
                  <td className="py-3 pr-4">Begin renewal negotiation or vacancy marketing</td>
                  <td className="py-3">9-12 months</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Renewal Option Deadline</td>
                  <td className="py-3 pr-4">Notify tenant of exercise window; evaluate market terms</td>
                  <td className="py-3">120 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Rent Escalation</td>
                  <td className="py-3 pr-4">Calculate new rent; send tenant notice; update billing</td>
                  <td className="py-3">60 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">CAM Reconciliation Deadline</td>
                  <td className="py-3 pr-4">Complete reconciliation; distribute statements</td>
                  <td className="py-3">90-120 days post year-end</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Insurance Certificate Expiration</td>
                  <td className="py-3 pr-4">Request renewal certificate from tenant</td>
                  <td className="py-3">30 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Termination/Kick-Out Option</td>
                  <td className="py-3 pr-4">Evaluate exercise; prepare contingency plan</td>
                  <td className="py-3">6-9 months</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Percentage Rent Calculation</td>
                  <td className="py-3 pr-4">Collect tenant sales reports; calculate breakpoint rent</td>
                  <td className="py-3">60 days post period-end</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Estoppel Delivery</td>
                  <td className="py-3 pr-4">Prepare and distribute certificates for sale or refi</td>
                  <td className="py-3">30 days before closing</td>
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

      {/* ---- Compliance monitoring ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Does Tenant Compliance Monitoring Work?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Tenant compliance monitoring ensures every tenant operates within the terms of their lease. This includes verifying that insurance certificates remain current (liability, property, and workers&apos; comp where required), tenants operate within permitted use restrictions, signage meets building and zoning standards, and NNN tenants fulfill their maintenance obligations.
          </p>
          <p>
            Barrett conducts quarterly compliance reviews for every managed property. When non-compliance is identified, tenants receive written notice with a cure period as specified in their lease. This protects the owner legally while maintaining a professional relationship with the tenant — a balance that ties directly into the <Link href="/services/commercial-property-management/tenant-relations" className="font-semibold text-black underline">tenant relations</Link> program.
          </p>
        </div>
      </section>

      {/* ---- Lease audits ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Does a Commercial Lease Audit Include?</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              A lease audit is a comprehensive review of all lease documents against actual operations. Barrett conducts full lease audits for every property entering management and annually thereafter. The audit verifies that rent escalations have been applied correctly, CAM charges match the lease formula, insurance requirements are current, tenant improvements were completed per the lease, and all special provisions are being enforced.
            </p>
            <p>
              Lease audits frequently uncover missed revenue. Barrett has identified unapplied rent escalations, under-billed CAM charges, and expired insurance coverage during transition audits. These findings often pay for several months of management fees in recovered revenue alone.
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
          <li>Institute of Real Estate Management (IREM) — <em>Lease Administration and Revenue Protection</em></li>
          <li>Building Owners and Managers Association (BOMA) — <em>Lease Audit Standards</em></li>
          <li>FASB ASC 842 — Lease Accounting and Disclosure Requirements</li>
          <li>Florida Statute 475 — Broker Fiduciary and Trust Accounting Requirements</li>
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
        heading="Are Your Leases Being Managed Properly?"
        body="Call Barrett at (813) 733-7907 for a lease audit. Find missed revenue, catch compliance gaps, and get every critical date tracked."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/commercial-property-management" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Property Management Overview</Link>
            <Link href="/services/commercial-property-management/financial-reporting" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Financial Reporting</Link>
            <Link href="/services/commercial-property-management/tenant-relations" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Relations</Link>
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
