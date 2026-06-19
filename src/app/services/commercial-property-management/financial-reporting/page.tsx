import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * Financial Reporting & Accounting — sub-page under Commercial PM.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Property Financial Reporting FL",
  description:
    "Monthly owner reports, rent roll management, CAM reconciliation, and tax documentation for commercial properties in Florida. Call Barrett at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/commercial-property-management/financial-reporting" },
  openGraph: {
    title: "Commercial Property Financial Reporting | CRE Accounting FL",
    description:
      "Institutional-quality financial reporting for commercial property owners across Florida. Monthly, quarterly, and annual reporting packages.",
    url: "https://hencre.com/services/commercial-property-management/financial-reporting",
  },
};

const FAQS = [
  {
    question: "What financial reports should a commercial property owner expect monthly?",
    answer: "At minimum, commercial property owners should receive a monthly income and expense statement, rent roll summary, accounts receivable aging report, and maintenance expense log. Barrett delivers all four reports within 10 business days of month-end close, with variance notes explaining any significant deviations from budget.",
  },
  {
    question: "What is CAM reconciliation and how often does it happen?",
    answer: "CAM (Common Area Maintenance) reconciliation is the annual process of comparing estimated CAM charges paid by tenants throughout the year against actual expenses incurred. Overages are billed to tenants and credits are applied. Under most NNN leases, reconciliation must be completed within 90 to 120 days after the calendar year ends.",
  },
  {
    question: "Does Barrett provide tax-ready financial documentation?",
    answer: "Yes. Barrett prepares year-end financial packages that include annual income and expense summaries, depreciation schedules, capital improvement documentation, and 1099 reporting. These packages are formatted for direct use by your CPA or tax advisor, eliminating the need for manual data compilation.",
  },
  {
    question: "How does Barrett track operating budgets versus actual expenses?",
    answer: "Barrett creates detailed annual operating budgets for every managed property and tracks actual expenses against budget on a monthly basis. Quarterly budget variance reports identify line items that are over or under budget, with explanations and recommended adjustments. This keeps owners informed and prevents end-of-year surprises.",
  },
  {
    question: "What is a rent roll and why does it matter?",
    answer: "A rent roll is a snapshot of every lease in a property — tenant name, suite, square footage, rent amount, lease start and end dates, escalation schedule, and current payment status. Rent rolls are essential for property valuation, financing, and sales. Barrett maintains real-time rent rolls as part of lease administration for every managed property.",
  },
  {
    question: "Can Barrett manage financial reporting for a multi-property portfolio?",
    answer: "Absolutely. Barrett provides both individual property reports and consolidated portfolio-level reporting. Portfolio owners receive a combined financial summary alongside individual property details, making it easy to compare performance, identify underperforming assets, and make data-driven investment decisions.",
  },
],

schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "Commercial Property Management", item: "https://hencre.com/services/commercial-property-management" },
        { "@type": "ListItem", position: 4, name: "Financial Reporting", item: "https://hencre.com/services/commercial-property-management/financial-reporting" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Property Financial Reporting & Accounting",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Monthly income statements, rent roll management, CAM reconciliation, operating budgets, capital expense tracking, and tax documentation for commercial properties across Florida.",
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

export default function FinancialReportingPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Commercial Property Management", href: "/services/commercial-property-management" }, { label: "Financial Reporting", href: "/services/commercial-property-management/financial-reporting" }]} />

      <Hero
        title="Commercial Property Financial Reporting"
        subtitle="Institutional-quality reporting for every property size. Monthly statements, CAM reconciliation, operating budgets, and tax-ready documentation."
        ctaText="Request a Sample Report"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial property financial reporting includes monthly income and expense statements, rent roll management, accounts receivable tracking, CAM reconciliation, operating budget creation and variance analysis, capital expense tracking, and year-end tax documentation. Professional reporting gives owners complete visibility into property performance.
          </p>
        </div>
      </section>

      {/* ---- What's included ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Financial Reports Should Commercial Property Owners Receive?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Financial reporting is the backbone of effective <Link href="/services/commercial-property-management" className="font-semibold text-black underline">commercial property management</Link>. Without clear, accurate, and timely financial data, owners cannot make informed decisions about operations, capital improvements, or investment strategy. According to IREM, financial transparency is the number one factor property owners cite when evaluating management performance.
          </p>
          <p>
            Barrett delivers comprehensive financial reporting on a monthly, quarterly, and annual cadence. Every report is delivered within 10 business days of the reporting period close. Owners receive detailed variance explanations — not just numbers, but the story behind the numbers. If HVAC expenses are 15% over budget, the report explains why (emergency compressor replacement, for example) and what steps are being taken to prevent recurrence.
          </p>
          <p>
            This level of reporting matters especially for owners who hold multiple properties or who plan to pursue <Link href="/services/dispositions" className="font-semibold text-black underline">dispositions</Link> or <Link href="/services/investment-sales" className="font-semibold text-black underline">investment sales</Link>. Clean financial records directly impact property valuation and buyer confidence during due diligence.
          </p>
        </div>
      </section>

      {/* ---- Reporting schedule table ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Is Included in Each Reporting Period?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Report</th>
                  <th className="py-3 pr-4 text-center font-bold text-black">Monthly</th>
                  <th className="py-3 pr-4 text-center font-bold text-black">Quarterly</th>
                  <th className="py-3 text-center font-bold text-black">Annual</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Income &amp; Expense Statement</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Rent Roll Summary</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Accounts Receivable Aging</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Maintenance Expense Log</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Budget Variance Analysis</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Market Comparison</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 pr-4 text-center">Yes</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">CAM Reconciliation</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Capital Improvement Summary</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Tax-Ready Documentation</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 text-center">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">1099 Reporting</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 pr-4 text-center">—</td>
                  <td className="py-3 text-center">Yes</td>
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

      {/* ---- CAM reconciliation ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Does CAM Reconciliation Work?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            CAM reconciliation is one of the most complex and error-prone areas of commercial property accounting. Throughout the year, tenants pay estimated CAM charges based on the previous year&apos;s actual expenses plus anticipated increases. At year-end, Barrett compiles actual CAM expenses, calculates each tenant&apos;s pro rata share, and reconciles the difference.
          </p>
          <p>
            If a tenant overpaid, they receive a credit. If they underpaid, they receive a bill. According to most NNN lease agreements, reconciliation statements must be delivered within 90 to 120 days after calendar year-end. Missing this deadline can forfeit the landlord&apos;s right to collect underpayments — a common and expensive mistake among self-managed properties.
          </p>
          <p>
            Barrett&apos;s <Link href="/services/commercial-property-management/lease-administration" className="font-semibold text-black underline">lease administration</Link> tracking ensures every CAM deadline is met and every reconciliation is accurate. For a deeper understanding of CAM charges, see the <Link href="/insights/cam-charges-explained" className="font-semibold text-black underline">CAM Charges Explained</Link> guide.
          </p>
        </div>
      </section>

      {/* ---- Cash flow and budgets ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Does Barrett Handle Operating Budgets and Cash Flow?</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Barrett creates detailed annual operating budgets for every managed property, incorporating historical expense data, anticipated <Link href="/services/commercial-property-management/maintenance-operations" className="font-semibold text-black underline">maintenance and capital needs</Link>, market-driven revenue projections, and tenant-specific variables like lease expirations and escalation schedules.
            </p>
            <p>
              Cash flow projections run on a 12-month rolling basis, updated monthly with actual data. This forward-looking approach allows owners to anticipate cash needs, plan distributions, and make informed decisions about capital improvements. It also provides the data foundation for accurate <Link href="/services/cre-valuation" className="font-semibold text-black underline">property valuations</Link> when owners consider selling or refinancing.
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
          <li>Institute of Real Estate Management (IREM) — <em>Financial Management for Property Managers</em></li>
          <li>Building Owners and Managers Association (BOMA) — <em>CAM Reconciliation Best Practices</em></li>
          <li>Florida Statute 475 — Trust Accounting Requirements for Licensed Brokers</li>
          <li>FASB ASC 842 — Lease Accounting Standards</li>
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
        heading="Want Better Financial Visibility Into Your Property?"
        body="Call Barrett at (813) 733-7907. Get institutional-quality reporting without institutional-level fees."
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
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/services/investment-sales" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
