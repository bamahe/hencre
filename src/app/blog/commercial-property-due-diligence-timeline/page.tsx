import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Commercial Property Due Diligence Timeline
 * Step-by-step checklist for CRE buyers.
 * ----------------------------------------------------------------- */

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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Commercial Property Due Diligence Timeline",
  description:
    "Step-by-step due diligence checklist and timeline for commercial real estate buyers.",
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
  url: "https://hencre.com/blog/commercial-property-due-diligence-timeline",
};

const relatedLinks = [
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Investment criteria from a broker's perspective.",
  },
  {
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding the key metric for evaluating CRE investments.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How we help buyers acquire commercial properties.",
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
      <SchemaOrg schema={articleSchema} />

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
          Due diligence is the investigation period between signing a purchase agreement and closing on a commercial property. It is your opportunity to verify everything the seller has represented and uncover anything they have not disclosed. A typical commercial due diligence period runs 30 to 60 days, though complex properties may require longer. Missing a step or running behind schedule can cost you money — or force you to close on a property with unresolved issues.
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
          <li><strong>Analyze tenant credit.</strong> Research the financial health of major tenants. A property&apos;s value depends on the tenants&apos; ability to pay rent.</li>
          <li><strong>Review lease terms.</strong> Identify renewal options, termination rights, <a href="/insights/cam-charges-explained" className="text-accent underline">CAM</a> structures, and any below-market or above-market rents.</li>
          <li><strong>Assess <a href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rate</a> and valuation.</strong> Compare the property&apos;s pricing to comparable sales and market cap rates.</li>
          <li><strong>Estimate capital expenditures.</strong> Use inspection findings to estimate near-term capital needs — roof replacement, HVAC upgrades, parking lot resurfacing, etc.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Weeks 3-4: Title and Legal Review?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Title review should run concurrently with inspections and financial analysis:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Title commitment.</strong> Review for liens, encumbrances, easements, and any restrictions that affect the property&apos;s use or value.</li>
          <li><strong>Zoning verification.</strong> Confirm the property&apos;s current <a href="/blog/commercial-property-zoning-florida-basics" className="text-accent underline">zoning</a> allows your intended use and any planned modifications.</li>
          <li><strong>Estoppel certificates.</strong> Request from all tenants to verify lease terms, rent amounts, deposits, and any landlord obligations.</li>
          <li><strong>Association documents.</strong> If applicable, review any property owner association or business improvement district obligations.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in Weeks 4-6: Resolution and Negotiation?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Use your findings to negotiate with the seller. Common outcomes include price adjustments for deferred maintenance, seller credits for capital expenditures, repairs completed before closing, or additional representations and warranties in the purchase agreement. Your <a href="/services/investment-sales" className="text-accent underline">broker</a> and attorney work together to protect your interests during this phase.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happens in the Final Week: Pre-Closing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The final days before closing involve confirming that all conditions have been met, financing is in place, insurance is bound, and closing documents are prepared. Conduct a final property walk-through to verify the property&apos;s condition has not changed since inspections. Coordinate with the title company on closing statements, proration calculations, and fund transfers.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Commercial due diligence is not a formality — it is the process that protects your investment. Rushing through it or skipping steps creates risk that can cost far more than the purchase price. With 23+ years of real estate experience, I guide buyers through every phase of due diligence, making sure nothing gets missed and every finding is used to protect your position. A thorough due diligence process is the foundation of a successful commercial acquisition.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Buying Commercial Property in Tampa Bay?"
        body="I manage the entire due diligence process — from document review to inspections to closing coordination. Nothing gets overlooked."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
