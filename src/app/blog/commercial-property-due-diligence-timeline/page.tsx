import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Commercial Property Due Diligence Timeline | HenCRE",
  description:
    "A step-by-step due diligence timeline for commercial real estate buyers — inspections, financials, environmental, title, and closing milestones explained.",
  alternates: { canonical: "https://hencre.com/blog/commercial-property-due-diligence-timeline" },
  openGraph: {
    title: "Commercial Property Due Diligence Timeline",
    description:
      "Step-by-step due diligence timeline for CRE buyers — inspections, financials, environmental, title, and closing.",
    url: "https://hencre.com/blog/commercial-property-due-diligence-timeline",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "person reviewing documents and charts at a desk",
      },
    ],
  },
};

const faqItems = [
  {
    question: "How long is a typical commercial real estate due diligence period?",
    answer:
      "A typical commercial due diligence period runs 30 to 60 days from the effective date of the purchase agreement. Complex properties — those requiring Phase II environmental testing, zoning variances, or extensive lease review — may need 90 days or longer. The timeline should be negotiated into the purchase contract before signing.",
  },
  {
    question: "What is a Phase I Environmental Site Assessment?",
    answer:
      "A Phase I ESA is an environmental review conducted by a licensed environmental professional. It examines historical records, site reconnaissance, and interviews to identify potential contamination risks — known as Recognized Environmental Conditions (RECs). Most commercial lenders require a Phase I before financing. If the Phase I flags concerns, a Phase II (soil and groundwater testing) may be required, which adds weeks to the timeline.",
  },
  {
    question: "What is a Property Condition Assessment?",
    answer:
      "A Property Condition Assessment (PCA) is a comprehensive inspection of a commercial building's structural, mechanical, electrical, plumbing, and site systems. It is more detailed than a residential home inspection and is typically required by lenders. The PCA identifies immediate repair needs and projects future capital expenditures over a specified hold period.",
  },
  {
    question: "What is an estoppel certificate and why do I need one?",
    answer:
      "An estoppel certificate is a document signed by a tenant confirming the material terms of their lease: rent amount, lease start and end dates, options, deposits held, and any outstanding landlord obligations. Estoppels are critical because they verify what the seller has represented — and because the tenant's signed statement can be relied upon in a dispute. Request estoppels from every tenant early in the due diligence period.",
  },
  {
    question: "Can I negotiate price reductions based on due diligence findings?",
    answer:
      "Yes, and this is one of the most important functions of the due diligence period. If inspections reveal deferred maintenance, environmental concerns, or financial discrepancies, you can negotiate a price reduction, request seller credits at closing, or require repairs before closing. Your broker and attorney work together to structure these requests as conditions of the purchase contract.",
  },
  {
    question: "What happens if I cannot complete due diligence in time?",
    answer:
      "Most purchase contracts allow you to request a due diligence extension, though the seller is not required to grant one. If you cannot complete due diligence within the contracted period, you typically must either proceed to closing or exercise a contingency to terminate and recover your earnest money deposit. Terminating after the due diligence period expires risks losing your deposit. Work with your broker to build realistic timelines into the contract.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Commercial Property Due Diligence Timeline",
      description:
        "Step-by-step due diligence checklist and timeline for commercial real estate buyers.",
      datePublished: "2026-05-25",
      dateModified: "2026-07-20",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate, Commercial Real Estate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/commercial-property-due-diligence-timeline",
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
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Investment criteria from a broker's perspective.",
  },
  {
    title: "Cap Rate Calculator",
    href: "/calculators/cap-rate",
    description: "Calculate and compare cap rates for commercial properties.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett manages the acquisition process for buyers.",
  },
  {
    title: "CRE Valuation Services",
    href: "/services/cre-valuation",
    description: "Professional property valuation for informed decision-making.",
  },
];

export default function DueDiligenceTimelinePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Due Diligence Timeline", href: "/blog/commercial-property-due-diligence-timeline" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop"
        title="Commercial Property Due Diligence Timeline"
        subtitle="What to inspect, verify, and analyze — and when — during a commercial real estate purchase."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Due diligence is the investigation period between signing a purchase agreement and closing on a commercial property. It is your opportunity to verify everything the seller has represented and uncover anything they have not disclosed. A typical commercial due diligence period runs 30 to 60 days, though complex properties may require longer. Missing a step or running behind schedule can cost you money — or force you to close on a property with unresolved issues. This timeline applies whether you are acquiring a{" "}
          <Link href="/commercial/retail-space" className="text-accent underline">retail center</Link>,{" "}
          <Link href="/commercial/office-space" className="text-accent underline">office building</Link>, or{" "}
          <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial facility</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Week 1: Document Collection?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The first week is all about gathering information from the seller. Request and begin reviewing:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Financial records.</strong> Trailing 12-month profit and loss statements, rent rolls, operating expense history, and tax returns for the property.</li>
          <li><strong>Lease agreements.</strong> All current leases, amendments, guarantees, and tenant correspondence. Verify lease terms against the rent roll.</li>
          <li><strong>Property records.</strong> Surveys, site plans, as-built drawings, certificates of occupancy, and any existing environmental reports.</li>
          <li><strong>Insurance history.</strong> Current policies, claims history, and loss runs for the past 3 to 5 years.</li>
          <li><strong>Permits and violations.</strong> Any open building permits, code violations, or compliance issues.</li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="Commercial real estate due diligence document review process"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Document collection in week one sets the foundation for all subsequent due diligence steps.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Weeks 2-3: Physical Inspections?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Schedule and complete all physical inspections during this window. Do not wait — inspectors and specialists often need lead time, and you need time to review their findings.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Property condition assessment (PCA).</strong> A comprehensive inspection of the building&apos;s structure, roof, HVAC, electrical, plumbing, and site improvements. This is the commercial equivalent of a home inspection but far more detailed.</li>
          <li><strong>Environmental assessment (Phase I ESA).</strong> Required by most lenders. Identifies potential environmental contamination risks. If the Phase I flags concerns, a Phase II (soil and groundwater testing) may be needed, which adds time and cost.</li>
          <li><strong>ALTA survey.</strong> Confirms property boundaries, easements, encroachments, and improvements. Essential for identifying potential title and boundary issues.</li>
          <li><strong>ADA compliance review.</strong> Evaluate the property&apos;s compliance with the Americans with Disabilities Act. Non-compliance can create significant liability.</li>
          <li><strong>Roof inspection.</strong> Separate from the PCA, a specialized roof inspection evaluates remaining useful life and estimates replacement costs.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Weeks 2-4: Financial Analysis?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          While inspections are underway, conduct detailed financial analysis in parallel:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Verify NOI.</strong> Independently verify net operating income by cross-referencing rent rolls, bank deposits, and expense invoices. Do not rely solely on seller-provided numbers.</li>
          <li><strong>Analyze tenant credit.</strong> Research the financial health of major tenants. A property&apos;s value depends on the tenants&apos; ability to pay rent. This is especially critical for{" "}
            <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">NNN lease properties</Link>{" "}
            where tenant default eliminates all income.</li>
          <li><strong>Review lease terms.</strong> Identify renewal options, termination rights,{" "}
            <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">CAM</Link>{" "}
            structures, and any below-market or above-market rents.</li>
          <li><strong>Assess{" "}
            <Link href="/calculators/cap-rate" className="text-accent underline">cap rate</Link>{" "}
            and valuation.</strong> Compare the property&apos;s pricing to comparable sales and market cap rates.</li>
          <li><strong>Estimate capital expenditures.</strong> Use inspection findings to estimate near-term capital needs — roof replacement, HVAC upgrades, parking lot resurfacing, etc.</li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop"
            alt="Commercial building inspection during the due diligence period"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Physical inspections during weeks two and three reveal deferred maintenance and capital expenditure needs that directly affect price negotiations.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Weeks 3-4: Title and Legal Review?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Title review should run concurrently with inspections and financial analysis:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Title commitment.</strong> Review for liens, encumbrances, easements, and any restrictions that affect the property&apos;s use or value.</li>
          <li><strong>Zoning verification.</strong> Confirm the property&apos;s current{" "}
            <Link href="/blog/commercial-property-zoning-florida-basics" className="text-accent underline">zoning</Link>{" "}
            allows your intended use and any planned modifications. For Florida properties, verify with both the county and municipality where applicable.</li>
          <li><strong>Estoppel certificates.</strong> Request from all tenants to verify lease terms, rent amounts, deposits, and any landlord obligations.</li>
          <li><strong>Association documents.</strong> If applicable, review any property owner association or business improvement district obligations.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Weeks 4-6: Resolution and Negotiation?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Use your findings to negotiate with the seller. Common outcomes include price adjustments for deferred maintenance, seller credits for capital expenditures, repairs completed before closing, or additional representations and warranties in the purchase agreement. Your{" "}
          <Link href="/services/investment-sales" className="text-accent underline">broker</Link>{" "}
          and attorney work together to protect your interests during this phase. Buyers pursuing a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link>{" "}
          need to be especially mindful of the 180-day closing deadline when scheduling this phase.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in the Final Week: Pre-Closing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The final days before closing involve confirming that all conditions have been met, financing is in place, insurance is bound, and closing documents are prepared. Conduct a final property walk-through to verify the property&apos;s condition has not changed since inspections. Coordinate with the title company on closing statements, proration calculations, and fund transfers. For investment properties in{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>,{" "}
          <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link>, or{" "}
          <Link href="/markets/pasco" className="text-accent underline">Pasco</Link>{" "}
          County, Barrett coordinates the full closing process.
        </p>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=1200&h=600&fit=crop"
            alt="Commercial real estate closing process with documents being signed"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">The final week of due diligence involves verifying all conditions are met before proceeding to close.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Commercial due diligence is not a formality — it is the process that protects your investment. Rushing through it or skipping steps creates risk that can cost far more than the purchase price. With 23+ years of real estate experience, Barrett Henry guides buyers through every phase of due diligence, making sure nothing gets missed and every finding is used to protect your position. Review our{" "}
          <Link href="/services/cre-valuation" className="text-accent underline">CRE valuation services</Link>{" "}
          and{" "}
          <Link href="/services/investment-sales" className="text-accent underline">investment sales process</Link>{" "}
          to understand how Barrett manages acquisitions from first look to closing.
        </p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">Due Diligence — Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Buying Commercial Property in Florida?"
        body="Barrett manages the entire due diligence process — from document review to inspections to closing coordination. Nothing gets overlooked."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
