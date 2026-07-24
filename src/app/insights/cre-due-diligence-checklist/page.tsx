import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  title: "CRE Due Diligence Checklist | What to Inspect Before Buy",
  description:
    "Comprehensive commercial real estate due diligence checklist covering financial, environmental, legal, and physical inspection items. Expert broker guidance.",
  alternates: { canonical: "https://hencre.com/insights/cre-due-diligence-checklist" },
  openGraph: {
    title: "CRE Due Diligence Checklist: What to Inspect Before You Buy",
    description:
      "Comprehensive commercial real estate due diligence checklist covering financial, environmental, legal, and physical inspection items.",
    url: "https://hencre.com/insights/cre-due-diligence-checklist",
    type: "article",
  },
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
  {
    question: "What are the most common due diligence surprises in Florida?",
    answer:
      "In Florida, the most frequent surprises are flood zone designations that affect insurance costs, environmental conditions related to prior agricultural or industrial use, aging HVAC systems with shortened remaining life in the Florida heat, and title issues on older properties. Barrett reviews all of these as part of the acquisition process — buyers who skip any step often regret it at closing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://hencre.com/insights" },
        { "@type": "ListItem", position: 3, name: "CRE Due Diligence Checklist", item: "https://hencre.com/insights/cre-due-diligence-checklist" },
      ],
    },
    {
      "@type": "Article",
      headline: "CRE Due Diligence Checklist: What to Inspect Before You Buy",
      description:
        "Comprehensive commercial real estate due diligence checklist covering financial, environmental, legal, and physical inspection items.",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      datePublished: "2026-06-10",
      dateModified: "2026-07-24",
      image: "https://hencre.com/og-image.png",
      publisher: {
        "@type": "Organization",
        name: "REMAX Commercial Real Estate",
        url: "https://hencre.com",
        logo: { "@type": "ImageObject", url: "https://hencre.com/icon-512.png" },
      },
      url: "https://hencre.com/insights/cre-due-diligence-checklist",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

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
    description: "Investment criteria from a broker&apos;s perspective.",
  },
];

export default function DueDiligencePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
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
          Due diligence is the most critical phase of any commercial real estate acquisition. It is the period where you verify every assumption, uncover every risk, and confirm that the property is actually what the seller says it is. As a Broker Associate at REMAX Collective with 23+ years of real estate experience, I have seen deals saved — and deals killed — by what comes out during due diligence across markets from <Link href="/markets/hillsborough" className="text-accent underline">Tampa Bay</Link> to <Link href="/markets/brevard" className="text-accent underline">Brevard County</Link>. Here is the comprehensive checklist I use with my buyer clients. This pairs directly with our <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence timeline guide</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Financial Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The financial review tells you whether the property performs as advertised. Every number the seller provides should be verified independently. This is especially important when evaluating <Link href="/commercial/multifamily" className="text-accent underline">multifamily</Link> properties and <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN investments</Link> where income projections drive the purchase price.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Rent roll review.</strong> Verify every tenant, their lease terms, rent amounts, escalation schedules, and lease expiration dates. Cross-reference the rent roll against actual lease documents.</li>
          <li><strong>Operating statements.</strong> Request a minimum of three years of actual operating income and expense statements. Compare year-over-year to identify trends, anomalies, and one-time items. Use our <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> to verify NOI against asking price.</li>
          <li><strong>Tax returns.</strong> Ask for the property-related portions of the seller&apos;s tax returns to verify reported income.</li>
          <li><strong>Lease abstracts.</strong> Read every lease — not just the summary. Look for tenant options (renewal, expansion, termination), co-tenancy clauses, exclusive use provisions, and any landlord obligations that could affect NOI. Understanding <Link href="/insights/gross-vs-net-lease" className="text-accent underline">gross vs. net lease structures</Link> and <Link href="/insights/cam-charges-explained" className="text-accent underline">CAM charges</Link> is essential to reading these correctly.</li>
          <li><strong>Accounts receivable.</strong> Check for delinquent tenants. A rent roll looks great on paper, but outstanding balances tell a different story.</li>
          <li><strong>Property tax history.</strong> Review current and historical tax assessments. A recent sale often triggers a reassessment, which could significantly increase property taxes.</li>
          <li><strong>Insurance costs.</strong> Get current premium quotes. Florida property insurance, in particular, has seen significant cost fluctuations in recent years.</li>
        </ul>
      </article>

      {/* ---- Image 1: Due diligence documents ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate due diligence documents including rent rolls and operating statements"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Financial due diligence starts with three years of operating statements and the full rent roll. Use our <Link href="/calculators/roi" className="underline">ROI calculator</Link> to model actual vs. projected returns before committing to a price.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">Physical Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A commercial property inspection is far more involved than a home inspection. You need specialists for each major system. This is especially important for older <Link href="/commercial/retail-space" className="text-accent underline">retail</Link> and <Link href="/commercial/office-space" className="text-accent underline">office</Link> buildings in Florida where HVAC systems are under constant stress.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Building condition assessment.</strong> Hire a qualified commercial inspector to evaluate the roof, structural systems, HVAC, plumbing, electrical, and building envelope.</li>
          <li><strong>Roof inspection.</strong> Get a dedicated roof report, especially in Florida. Identify remaining useful life and any pending repair needs.</li>
          <li><strong>HVAC assessment.</strong> Document the age, condition, and remaining life of all units. Replacement costs for commercial HVAC can be substantial.</li>
          <li><strong>ADA compliance.</strong> Evaluate accessibility compliance — parking, ramps, restrooms, door widths, and signage. Non-compliance creates both legal liability and renovation costs.</li>
          <li><strong>Parking and site conditions.</strong> Inspect the parking lot surface, drainage, striping, lighting, and landscaping. These are often the first items that show up in <Link href="/insights/cam-charges-explained" className="text-accent underline">CAM reconciliations</Link>.</li>
          <li><strong>Utilities.</strong> Verify utility capacity (electrical, water, sewer, gas) is adequate for current and planned use — especially important for <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial and warehouse</Link> properties with heavy power requirements.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Environmental Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Environmental issues can be deal-killers. They can also create massive unexpected costs after closing if you do not catch them up front. In Florida, flood zones and wetland encroachments are especially common concerns.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Phase I Environmental Site Assessment.</strong> This is non-negotiable for any commercial acquisition. It reviews historical site use, regulatory databases, and current conditions to identify recognized environmental conditions (RECs).</li>
          <li><strong>Phase II assessment.</strong> If the Phase I identifies potential contamination, a Phase II involves actual soil and groundwater sampling. This is when you find out if there is a real problem.</li>
          <li><strong>Flood zone verification.</strong> Confirm the property&apos;s flood zone designation. Florida properties are particularly susceptible — and flood insurance costs can be significant. This is a critical concern across coastal markets like <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link> and <Link href="/markets/manatee" className="text-accent underline">Manatee</Link>.</li>
          <li><strong>Wetlands and protected areas.</strong> Verify there are no wetland encroachments or environmental restrictions that could limit development or use. Especially relevant for <Link href="/commercial/land-development" className="text-accent underline">land development</Link> projects.</li>
          <li><strong>Asbestos and lead paint.</strong> For older buildings, these assessments are essential. Abatement costs can be substantial.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Legal Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Legal due diligence protects you from title issues, zoning problems, and contractual surprises. Understanding <Link href="/blog/commercial-property-zoning-florida-basics" className="text-accent underline">Florida commercial zoning basics</Link> is essential context.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Title search and title insurance.</strong> A title search reveals liens, encumbrances, easements, and any clouds on title. Title insurance protects you from defects the search missed.</li>
          <li><strong>Survey.</strong> An ALTA survey shows the property boundaries, building footprint, easements, encroachments, setback compliance, and access points. Do not skip this.</li>
          <li><strong>Zoning verification.</strong> Confirm the property is zoned for your intended use. Verify any nonconforming use status and what happens if the property is damaged or you want to change the use.</li>
          <li><strong>Building permits and certificates of occupancy.</strong> Verify that all improvements were properly permitted and that current certificates of occupancy are in place.</li>
          <li><strong>Existing litigation.</strong> Ask the seller to disclose any pending or threatened legal actions involving the property.</li>
          <li><strong>HOA/association documents.</strong> If the property is part of a commercial association, review covenants, restrictions, and association financials.</li>
        </ul>
      </article>

      {/* ---- Image 2: Building inspection ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=75"
          alt="Commercial building inspection — physical due diligence covers roof, HVAC, structure, and site conditions"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Physical inspections are a non-negotiable part of the process. In Florida&apos;s climate, roof condition and HVAC age are the most common deal-breakers — get specialist reports on both before your contingency expires.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">Market Due Diligence</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding the market around the property is just as important as understanding the property itself. I assess market context for every acquisition I advise on — whether in <Link href="/markets/polk" className="text-accent underline">Polk County</Link>, <Link href="/markets/hernando" className="text-accent underline">Hernando County</Link>, or <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link>.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Comparable rents.</strong> Are the current rents at, above, or below market? This directly affects your <Link href="/insights/how-to-value-commercial-property" className="text-accent underline">valuation</Link> and investment thesis.</li>
          <li><strong>Vacancy rates.</strong> What is the vacancy rate for similar properties in the area? High area vacancy may signal risk.</li>
          <li><strong>Planned development.</strong> Check municipal planning records for upcoming projects that could compete with or complement your property.</li>
          <li><strong>Infrastructure changes.</strong> Road widening, new highway interchanges, or public transit expansions can dramatically affect commercial property value — positively or negatively. This is a key factor in growth corridors like <Link href="/markets/pasco" className="text-accent underline">Pasco County</Link>.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Due diligence is not a formality — it is your protection. Every dollar you spend on inspections, assessments, and professional reviews during this period can save you tens of thousands after closing. I coordinate this entire process for my buyer clients, making sure nothing falls through the cracks and every deadline is met. If you are evaluating a commercial property, this is the process that separates informed buyers from wishful thinkers. Pair this checklist with our <Link href="/services/investment-sales" className="text-accent underline">investment sales service</Link> and <Link href="/services/cre-valuation" className="text-accent underline">CRE valuation</Link> to cover all bases.
        </p>
      </article>

      {/* ---- Image 3: Closing meeting ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate broker and buyer reviewing due diligence findings before closing"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Due diligence culminates in a decision: proceed, renegotiate, or walk away. A broker who has coordinated this process dozens of times is your best asset. Learn more about <Link href="/blog/what-makes-a-good-commercial-investment" className="underline">what makes a good commercial investment</Link>.</p>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8 mt-12">
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

      <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
