import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: CRE Due Diligence Checklist
 * Evergreen guide — comprehensive due diligence for CRE acquisitions.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Due Diligence Checklist: What to Inspect Before You Buy",
  description:
    "Comprehensive commercial real estate due diligence checklist covering financial, environmental, legal, and physical inspection items. Expert broker guidance.",
  openGraph: {
    title: "CRE Due Diligence Checklist: What to Inspect Before You Buy",
    description:
      "Comprehensive commercial real estate due diligence checklist covering financial, environmental, legal, and physical inspection items.",
    url: "https://hencre.com/insights/cre-due-diligence-checklist",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CRE Due Diligence Checklist: What to Inspect Before You Buy",
  description:
    "Comprehensive commercial real estate due diligence checklist covering financial, environmental, legal, and physical inspection items.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Real Estate", url: "https://hencre.com" },
  url: "https://hencre.com/insights/cre-due-diligence-checklist",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long is a typical due diligence period for commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Due diligence periods for commercial properties typically range from 30 to 90 days, depending on the property complexity and what the buyer and seller negotiate. Larger, more complex properties may require longer periods. The key is to negotiate enough time to complete all inspections, reviews, and analyses before your contingency expires.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Phase I environmental assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Phase I Environmental Site Assessment (ESA) is a report that identifies potential environmental contamination liabilities on a property. It includes a site visit, review of historical records, regulatory database searches, and interviews. If the Phase I identifies recognized environmental conditions, a Phase II assessment with soil and groundwater testing may be recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays for due diligence in a commercial real estate transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The buyer typically pays for all due diligence costs — inspections, environmental assessments, surveys, title searches, and appraisals. These are out-of-pocket costs that the buyer spends before closing, so it is important to do preliminary research before entering a contract to avoid wasting money on properties that do not meet your criteria.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if due diligence reveals problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If due diligence uncovers issues, the buyer typically has several options depending on contract terms: negotiate a price reduction to account for the problems, request the seller make repairs before closing, accept the property as-is, or terminate the contract within the due diligence contingency period and receive a refund of any deposit.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "How long is a typical due diligence period for commercial real estate?",
    answer:
      "Due diligence periods for commercial properties typically range from 30 to 90 days, depending on property complexity and what the buyer and seller negotiate. Larger, more complex properties may need longer periods. The key is to negotiate enough time to complete all inspections and analyses before your contingency expires.",
  },
  {
    question: "What is a Phase I environmental assessment?",
    answer:
      "A Phase I Environmental Site Assessment (ESA) identifies potential environmental contamination liabilities. It includes a site visit, historical records review, regulatory database searches, and interviews. If it identifies recognized environmental conditions, a Phase II with soil and groundwater testing may be recommended.",
  },
  {
    question: "Who pays for due diligence in a commercial real estate transaction?",
    answer:
      "The buyer typically pays for all due diligence costs — inspections, environmental assessments, surveys, title searches, and appraisals. These are out-of-pocket costs before closing, so do preliminary research before entering a contract to avoid wasting money on unsuitable properties.",
  },
  {
    question: "What happens if due diligence reveals problems?",
    answer:
      "If due diligence uncovers issues, the buyer typically can negotiate a price reduction, request seller repairs, accept as-is, or terminate the contract within the contingency period and get their deposit back. Your options depend on contract terms.",
  },
];

const relatedLinks = [
  {
    title: "How to Value Commercial Property",
    href: "/insights/how-to-value-commercial-property",
    description: "Three valuation approaches for CRE acquisition decisions.",
  },
  {
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding capitalization rates for investment analysis.",
  },
  {
    title: "1031 Exchange Basics",
    href: "/insights/1031-exchange-basics",
    description: "Tax-deferred exchanges for CRE investors.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Investment criteria from a broker's perspective.",
  },
];

export default function DueDiligencePage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "Due Diligence Checklist", href: "/insights/cre-due-diligence-checklist" },
        ]}
      />

      <Hero
        title="CRE Due Diligence Checklist"
        subtitle="Buying commercial real estate without thorough due diligence is like flying blind. Here is the checklist I walk every buyer through."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Due diligence is the most critical phase of any commercial real estate acquisition. It is the period where you verify every assumption, uncover every risk, and confirm that the property is actually what the seller says it is. I have seen deals saved — and deals killed — by what comes out during due diligence. Here is the comprehensive checklist I use with my buyer clients.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Financial Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The financial review tells you whether the property performs as advertised. Every number the seller provides should be verified independently.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Rent roll review.</strong> Verify every tenant, their lease terms, rent amounts, escalation schedules, and lease expiration dates. Cross-reference the rent roll against actual lease documents.</li>
          <li><strong>Operating statements.</strong> Request a minimum of three years of actual operating income and expense statements. Compare year-over-year to identify trends, anomalies, and one-time items.</li>
          <li><strong>Tax returns.</strong> Ask for the property-related portions of the seller&apos;s tax returns to verify reported income.</li>
          <li><strong>Lease abstracts.</strong> Read every lease — not just the summary. Look for tenant options (renewal, expansion, termination), co-tenancy clauses, exclusive use provisions, and any landlord obligations that could affect NOI.</li>
          <li><strong>Accounts receivable.</strong> Check for delinquent tenants. A rent roll looks great on paper, but outstanding balances tell a different story.</li>
          <li><strong>Property tax history.</strong> Review current and historical tax assessments. A recent sale often triggers a reassessment, which could significantly increase property taxes.</li>
          <li><strong>Insurance costs.</strong> Get current premium quotes. Florida property insurance, in particular, has seen significant cost fluctuations in recent years.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Physical Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A commercial property inspection is far more involved than a home inspection. You need specialists for each major system.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Building condition assessment.</strong> Hire a qualified commercial inspector to evaluate the roof, structural systems, HVAC, plumbing, electrical, and building envelope.</li>
          <li><strong>Roof inspection.</strong> Get a dedicated roof report, especially in Florida. Identify remaining useful life and any pending repair needs.</li>
          <li><strong>HVAC assessment.</strong> Document the age, condition, and remaining life of all units. Replacement costs for commercial HVAC can be substantial.</li>
          <li><strong>ADA compliance.</strong> Evaluate accessibility compliance — parking, ramps, restrooms, door widths, and signage. Non-compliance creates both legal liability and renovation costs.</li>
          <li><strong>Parking and site conditions.</strong> Inspect the parking lot surface, drainage, striping, lighting, and landscaping.</li>
          <li><strong>Utilities.</strong> Verify utility capacity (electrical, water, sewer, gas) is adequate for current and planned use.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Environmental Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Environmental issues can be deal-killers. They can also create massive unexpected costs after closing if you do not catch them up front.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Phase I Environmental Site Assessment.</strong> This is non-negotiable for any commercial acquisition. It reviews historical site use, regulatory databases, and current conditions to identify recognized environmental conditions (RECs).</li>
          <li><strong>Phase II assessment.</strong> If the Phase I identifies potential contamination, a Phase II involves actual soil and groundwater sampling. This is when you find out if there is a real problem.</li>
          <li><strong>Flood zone verification.</strong> Confirm the property&apos;s flood zone designation. Florida properties are particularly susceptible — and flood insurance costs can be significant.</li>
          <li><strong>Wetlands and protected areas.</strong> Verify there are no wetland encroachments or environmental restrictions that could limit development or use.</li>
          <li><strong>Asbestos and lead paint.</strong> For older buildings, these assessments are essential. Abatement costs can be substantial.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Legal Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Legal due diligence protects you from title issues, zoning problems, and contractual surprises.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Title search and title insurance.</strong> A title search reveals liens, encumbrances, easements, and any clouds on title. Title insurance protects you from defects the search missed.</li>
          <li><strong>Survey.</strong> An ALTA survey shows the property boundaries, building footprint, easements, encroachments, setback compliance, and access points. Do not skip this.</li>
          <li><strong>Zoning verification.</strong> Confirm the property is zoned for your intended use. Verify any nonconforming use status and what happens if the property is damaged or you want to change the use.</li>
          <li><strong>Building permits and certificates of occupancy.</strong> Verify that all improvements were properly permitted and that current certificates of occupancy are in place.</li>
          <li><strong>Existing litigation.</strong> Ask the seller to disclose any pending or threatened legal actions involving the property.</li>
          <li><strong>HOA/association documents.</strong> If the property is part of a commercial association, review covenants, restrictions, and association financials.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Market Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding the market around the property is just as important as understanding the property itself.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Comparable rents.</strong> Are the current rents at, above, or below market? This directly affects your valuation and investment thesis.</li>
          <li><strong>Vacancy rates.</strong> What is the vacancy rate for similar properties in the area? High area vacancy may signal risk.</li>
          <li><strong>Planned development.</strong> Check municipal planning records for upcoming projects that could compete with or complement your property.</li>
          <li><strong>Infrastructure changes.</strong> Road widening, new highway interchanges, or public transit expansions can dramatically affect commercial property value — positively or negatively.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Due diligence is not a formality — it is your protection. Every dollar you spend on inspections, assessments, and professional reviews during this period can save you tens of thousands after closing. I coordinate this entire process for my buyer clients, making sure nothing falls through the cracks and every deadline is met. If you are evaluating a commercial property, this is the process that separates informed buyers from wishful thinkers.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Ready to Start Due Diligence?"
        body="I guide buyers through every step of the due diligence process — from financial review to closing. Let us make sure you know exactly what you are buying."
        buttonText="Let Us Talk"
        buttonHref="/contact"
      />
    </>
  );
}
