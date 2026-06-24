import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Liquidating Florida Investment Property in a Divorce: What Investors Need to Know",
  description:
    "Divorce-driven liquidation of Florida investment property involves court timelines, equitable distribution, and capital gains exposure that require specific planning before the sale closes.",
  alternates: { canonical: "https://hencre.com/blog/investment-property-divorce-liquidation-florida" },
  openGraph: {
    title: "Liquidating Florida Investment Property in a Divorce: What Investors Need to Know",
    description:
      "Divorce-driven liquidation of Florida investment property involves court timelines, equitable distribution, and capital gains exposure that require specific planning before the sale closes.",
    url: "https://hencre.com/blog/investment-property-divorce-liquidation-florida",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Liquidating Florida Investment Property in a Divorce: What Investors Need to Know",
  description:
    "Divorce-driven liquidation of Florida investment property involves court timelines, equitable distribution, and capital gains exposure that require specific planning before the sale closes.",
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
  url: "https://hencre.com/blog/investment-property-divorce-liquidation-florida",
};

const relatedLinks = [
  {
    title: "1031 Exchange Basics for Tampa Bay Investors",
    href: "/blog/1031-exchange-tampa-bay",
    description: "Defer capital gains and redeploy equity — does a divorce-driven sale qualify?",
  },
  {
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "Full cost analysis of holding vs. exiting Tampa Bay rentals in 2026.",
  },
  {
    title: "Selling Florida Rental Property With Tenants in Place",
    href: "/blog/selling-florida-rental-property-tenants-in-place",
    description: "How to exit investment property without triggering tenant displacement.",
  },
];

export default function InvestmentPropertyDivorceLiquidationPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Investment Property Divorce Liquidation Florida", href: "/blog/investment-property-divorce-liquidation-florida" },
        ]}
      />
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=900&fit=crop"
        title="Investment Property Liquidation in a Florida Divorce"
        subtitle="Court timelines, capital gains exposure, and equitable distribution — what investors need to plan for"
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Divorce involving jointly-owned Florida investment property introduces complications that
          primary residence sales do not. Equitable distribution of rental income received during
          the marriage, capital gains allocation between spouses, active tenant lease obligations,
          and court-mandated sale timelines all require coordination that goes beyond a standard
          investment property transaction. Getting the exit right — both legally and financially —
          requires planning that begins before any sale agreement is signed.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Florida Divorce Law Treats Investment Property
        </h2>
        <p className="text-[#666666]">
          Florida is an equitable distribution state. Marital assets — including investment
          properties acquired during the marriage and rental income generated during the marriage —
          are subject to equitable distribution between spouses. Several realities shape how
          investment property is handled:
        </p>
        <ul className="text-[#666666]">
          <li>
            <strong>Separate vs. marital classification:</strong> Investment property owned before
            the marriage or inherited individually may be classified as separate property — not
            subject to equitable distribution. However, if marital funds were used for mortgage
            payments, improvements, or carrying costs, the marital estate may have an equitable
            interest in the appreciation that occurred during the marriage.
          </li>
          <li>
            <strong>Rental income during marriage:</strong> Rental income generated by marital
            property during the marriage is a marital asset subject to distribution. Documentation
            of income and expense history is essential for accurate equitable distribution calculation.
          </li>
          <li>
            <strong>Both owners must sign to sell.</strong> Both names on the deed must sign all
            closing documents. A non-cooperating spouse can be compelled by Florida family court
            order — but this extends timelines and increases legal costs for both parties.
          </li>
          <li>
            <strong>Active tenants complicate timing.</strong> Florida tenants have statutory rights
            that do not disappear because the owners are divorcing. A sale to a new investor-owner
            who assumes the existing lease is typically cleaner and faster than attempting to vacate
            tenants before closing.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Capital Gains Exposure in Divorce-Driven Investment Property Sales
        </h2>
        <p className="text-[#666666]">
          Investment property sold during divorce does not qualify for the Section 121 primary
          residence capital gains exclusion ($250,000 per owner, $500,000 per couple). The full
          gain — calculated as sale price minus adjusted cost basis, which includes original
          purchase price plus capital improvements minus depreciation taken — is subject to
          capital gains tax. For investment properties held more than one year, the long-term
          capital gains rate applies (0%, 15%, or 20% depending on the spouse&apos;s income level).
        </p>
        <p className="text-[#666666]">
          Depreciation recapture is also triggered on the portion of the gain attributable to
          depreciation previously deducted — taxed at a maximum rate of 25%. For properties
          held 10+ years, depreciation recapture can be a significant component of the total
          tax liability.
        </p>
        <p className="text-[#666666]">
          A 1031 exchange into a replacement property defers capital gains and depreciation
          recapture — but requires both spouses&apos; cooperation to execute and must follow strict
          IRS identification and closing timelines. Whether a 1031 is viable in a contested
          divorce depends on the level of cooperation and the court timeline.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Execution Options for Divorce-Driven Florida Investment Property Sales
        </h2>
        <p className="text-[#666666]">
          <strong>Cooperative conventional sale:</strong> Both spouses agree on a listing price,
          agent, and timeline. Works when both parties are cooperative and the property is in
          condition for a traditional MLS listing. Maximizes gross sale price but requires
          60-90+ days to close and ongoing cooperation during the listing period.
        </p>
        <p className="text-[#666666]">
          <strong>Court-ordered sale with defined timeline:</strong> Hillsborough County Family
          Court can order the property sold within a specified timeframe when spouses cannot agree.
          A cash buyer&apos;s guaranteed close in 7 to 21 days fits court-mandated timelines far
          more reliably than a conventional listing with contingencies.
        </p>
        <p className="text-[#666666]">
          <strong>One-party buyout via refinance:</strong> One spouse retains the property by
          refinancing the existing mortgage into their name alone, paying the other spouse their
          equitable share from proceeds. Requires the retaining spouse to qualify independently
          for the new mortgage — which lender income and debt-to-income requirements may make
          impossible.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Coordinate Early — Before the Court Sets the Timeline
        </h2>
        <p className="text-[#666666]">
          The earlier investment property issues are addressed in a Florida divorce, the more
          options both parties retain. Once a court sets a mandatory sale deadline, the choice
          of exit strategy narrows to whatever can close within that window. Barrett Henry at
          HenCRE works with both parties and their attorneys to evaluate all exit options —
          providing market analysis, net proceeds comparisons across sale scenarios, and
          coordination with closing agents familiar with court-ordered transactions.
        </p>
      </article>

      <RelatedLinks
        heading="Keep Reading"
        links={relatedLinks}
      />

      <CTASection
        heading="Investment Property Divorce Consultation"
        body="Get a neutral evaluation of your Florida investment property's exit options before the court sets a deadline. We work with both parties and their attorneys to find the path that serves everyone's financial interest."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
