import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Termite Damage in Florida Investment Property: The ROI Reality Check",
  description:
    "WDO findings on Florida investment properties trigger mandatory lender repair requirements that can consume years of rental income. Here is how to evaluate the repair-vs-sell decision.",
  alternates: { canonical: "https://hencre.com/blog/termite-damage-investment-property-florida" },
  openGraph: {
    title: "Termite Damage in Florida Investment Property: The ROI Reality Check",
    description:
      "WDO findings on Florida investment properties trigger mandatory lender repair requirements that can consume years of rental income. Here is how to evaluate the repair-vs-sell decision.",
    url: "https://hencre.com/blog/termite-damage-investment-property-florida",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Termite Damage in Florida Investment Property: The ROI Reality Check",
  description:
    "WDO findings on Florida investment properties trigger mandatory lender repair requirements that can consume years of rental income. Here is how to evaluate the repair-vs-sell decision.",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: {
      "@type": "Organization",
      name: "REMAX Collective",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "HenCRE",
    url: "https://hencre.com",
  },
  url: "https://hencre.com/blog/termite-damage-investment-property-florida",
};

const relatedLinks = [
  {
    title: "Selling Florida Rental Property With Tenants in Place",
    href: "/blog/selling-florida-rental-property-tenants-in-place",
    description: "How to exit an investment property without triggering tenant displacement.",
  },
  {
    title: "As-Is Sales for Florida Investment Properties",
    href: "/blog/as-is-sale-florida-investment-property",
    description: "When selling as-is produces better net proceeds than repair-and-list.",
  },
  {
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "Full cost analysis of holding vs. exiting Tampa Bay rentals this year.",
  },
];

export default function TermiteDamageInvestmentPropertyPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Termite Damage in Florida Investment Property", href: "/blog/termite-damage-investment-property-florida" },
        ]}
      />
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
        title="Termite Damage in Florida Investment Property"
        subtitle="Running the repair-vs-sell numbers when WDO findings surface on a rental"
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Florida ranks among the top three states for termite activity nationally. For investors
          holding single-family rental property in Tampa Bay, Central Florida, or along the Gulf
          Coast, a Wood Destroying Organism (WDO) inspection during a sale or refinance can surface
          findings that fundamentally change the asset&apos;s economics. The repair-vs-sell decision
          requires a clear-eyed look at what remediation actually costs, how it affects net proceeds,
          and whether the repaired asset delivers the return profile that justifies the capital
          reinvestment.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How WDO Findings Affect Florida Investment Property Transactions
        </h2>
        <p className="text-[#666666]">
          The impact of a WDO inspection finding depends on how the buyer is financing the purchase.
          For investors evaluating a sale, the buyer pool and required terms vary significantly:
        </p>
        <ul className="text-[#666666]">
          <li>
            <strong>FHA and VA buyers:</strong> Cannot close on a property with active WDO findings
            or unrepaired structural damage. The seller must treat and repair before funding. This
            is non-negotiable — the lender&apos;s underwriter will not approve the loan with open
            WDO conditions.
          </li>
          <li>
            <strong>Conventional financed buyers:</strong> Most conventional programs require
            treatment and structural repair for significant WDO findings. Some lenders accept
            a repair escrow holdback at closing, but this is lender-specific and not guaranteed.
          </li>
          <li>
            <strong>Cash investors:</strong> Purchase with no lender involvement, no WDO clearance
            requirement, and no repair condition precedent to closing. The condition is priced
            into the offer rather than creating a pre-closing obligation.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Termite Damage Repair Cost vs. ROI Impact on Florida Investment Properties
        </h2>
        <p className="text-[#666666]">
          Before committing capital to termite remediation on an investment property, run the
          full repair-vs-proceed math:
        </p>
        <ul className="text-[#666666]">
          <li>Tent fumigation, no structural damage: $1,800 to $3,500</li>
          <li>Localized framing repair plus treatment: $4,000 to $12,000</li>
          <li>Floor joist replacement (pier-and-beam or raised foundation): $8,000 to $25,000</li>
          <li>Structural beam or bearing wall compromise: $15,000 to $45,000</li>
          <li>Widespread Formosan termite structural damage: $30,000 to $80,000</li>
        </ul>
        <p className="text-[#666666]">
          On an investment property generating $1,800 to $2,200 per month in gross rent with
          net operating income of $600 to $900 per month after carrying costs, a $25,000 remediation
          represents 28 to 42 months of net operating income — nearly 3 to 4 years of yield consumed
          by a single repair event. The capital reinvestment payback period on major structural
          remediation often exceeds the investor&apos;s intended hold horizon.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          When Selling As-Is Outperforms Repair-and-List
        </h2>
        <p className="text-[#666666]">
          The repair-and-list path makes financial sense when: the remediation cost is modest
          relative to the property&apos;s value, the repaired property commands a meaningfully higher
          sale price than an as-is offer, and the investor has the liquidity and timeline to fund
          repairs and carry the property through listing and closing.
        </p>
        <p className="text-[#666666]">
          The as-is sale path outperforms when: remediation costs are substantial relative to
          net proceeds, the investor needs to exit within a defined timeframe, or the property
          has compounding condition issues beyond termite damage (roof age, deferred HVAC,
          electrical) that would require additional capital regardless of WDO remediation.
        </p>
        <p className="text-[#666666]">
          A direct cash sale to an investor buyer eliminates the repair obligation, closes in
          7 to 21 days, and transfers the remediation cost and risk to the buyer — who prices
          it into their offer. For many Florida investment property owners, this produces better
          net proceeds after accounting for carrying costs during a repair-and-list process,
          contractor delays, and continued vacancy during remediation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Run the Numbers Before You Commit
        </h2>
        <p className="text-[#666666]">
          Barrett Henry at HenCRE evaluates Florida investment properties with WDO findings
          across all exit scenarios — repair-and-list, as-is conventional listing, and direct
          cash sale — providing a side-by-side net proceeds comparison before any capital
          commitment is made. Contact us to schedule an investment property evaluation.
        </p>
      </article>

      <RelatedLinks
        heading="Keep Reading"
        links={relatedLinks}
      />

      <CTASection
        heading="Get an Investment Property Evaluation"
        body="WDO findings do not have to end your investment thesis — but they do change the exit math. Let us run the numbers on your specific Florida investment property before you commit to a repair path."
        buttonText="Schedule an Evaluation"
        buttonHref="/contact"
      />
    </>
  );
}
