import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Investment Property Divorce Liquidation Florida | HenCRE",
  description:
    "Divorce-driven liquidation of Florida investment property involves court timelines, equitable distribution, and capital gains exposure that require specific planning before the sale closes.",
  alternates: { canonical: "https://hencre.com/blog/investment-property-divorce-liquidation-florida" },
  openGraph: {
    title: "Investment Property Divorce Liquidation Florida | HenCRE",
    description:
      "Divorce-driven liquidation of Florida investment property involves court timelines, equitable distribution, and capital gains exposure that require specific planning before the sale closes.",
    url: "https://hencre.com/blog/investment-property-divorce-liquidation-florida",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Florida investment property for sale during divorce",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Does a Florida divorce automatically force the sale of investment property?",
    answer: "Not automatically, but equitable distribution proceedings often result in a court-ordered sale when spouses cannot agree on a buyout or division. If both parties agree, one can buy out the other. If they cannot agree, a Florida family court judge can order the property sold within a defined timeline and proceeds split per the equitable distribution ruling.",
  },
  {
    question: "Can I do a 1031 exchange during a divorce in Florida?",
    answer: "A 1031 exchange is technically possible during a divorce but requires both spouses to cooperate fully, agree on the replacement property, and execute all exchange documents within the IRS deadlines (45-day identification, 180-day close). In contested divorces, the coordination required often makes a 1031 exchange impractical. Consult a qualified intermediary and your attorney early if you want to preserve this option.",
  },
  {
    question: "What is Florida's equitable distribution rule for investment property?",
    answer: "Florida is an equitable distribution state, meaning marital assets are divided fairly but not necessarily equally. Investment property acquired during the marriage is generally a marital asset. Separate property (owned before marriage or inherited individually) may be excluded, but if marital funds were used for improvements or mortgage payments, a marital interest may have accrued in the appreciation.",
  },
  {
    question: "How does selling a rental property in divorce affect capital gains taxes?",
    answer: "Investment property sold in a divorce does not qualify for the Section 121 primary residence exclusion. The full gain net of adjusted basis is taxable. Long-term capital gains rates apply if held over one year (0%, 15%, or 20% depending on income). Depreciation recapture is taxed at up to 25%. Each spouse is responsible for their allocated share of the gain based on how proceeds are divided.",
  },
  {
    question: "What if one spouse refuses to sign the closing documents?",
    answer: "Both names on the deed must sign all closing documents to convey title. If a spouse refuses, the other can seek a court order compelling cooperation. A Hillsborough County Family Court judge can also appoint a special master to sign on behalf of a non-cooperating spouse in extreme cases. This adds time and legal cost but does not permanently block the sale.",
  },
  {
    question: "How long does a court-ordered investment property sale take in Florida?",
    answer: "Timelines vary by complexity and court docket. Once a court orders a sale, parties typically have 30 to 90 days to list and accept a contract, followed by a standard closing period of 30 to 45 days. A cash buyer can close in as little as 7 to 21 days, which often fits court-mandated windows more reliably than conventional financing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Investment Property Divorce Liquidation Florida",
          item: "https://hencre.com/blog/investment-property-divorce-liquidation-florida",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Liquidating Florida Investment Property in a Divorce: What Investors Need to Know",
      description:
        "Divorce-driven liquidation of Florida investment property involves court timelines, equitable distribution, and capital gains exposure that require specific planning before the sale closes.",
      datePublished: "2026-06-24",
      dateModified: "2026-08-14",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/investment-property-divorce-liquidation-florida",
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
    title: "Florida 1031 Exchange Guide for Investors",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Defer capital gains and redeploy equity after a Florida investment property sale.",
  },
  {
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "Full cost analysis of holding vs. exiting Tampa Bay rentals in 2026.",
  },
  {
    title: "Selling Tenant-Occupied Investment Property in Florida",
    href: "/blog/selling-tenant-occupied-investment-property-florida",
    description: "How to exit investment property without triggering tenant displacement.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "Barrett represents sellers of investment and commercial properties across Tampa Bay.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Understand how to evaluate replacement property before redeploying divorce proceeds.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to inspect and verify before committing capital to any replacement property.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Model returns on replacement commercial assets before the 45-day identification window closes.",
  },
  {
    title: "Hillsborough County Market",
    href: "/markets/hillsborough",
    description: "Commercial investment opportunities in Hillsborough County for 1031 replacement buyers.",
  },
  {
    title: "CRE Valuation Services",
    href: "/services/cre-valuation",
    description: "Get a fair market value opinion for buyout negotiations or estate planning purposes.",
  },
  {
    title: "Florida Insurance Crisis and Investment Properties",
    href: "/blog/florida-insurance-crisis-investment-properties",
    description: "Rising insurance costs are a key factor in the hold-versus-sell analysis for Florida investment property.",
  },
];

export default function InvestmentPropertyDivorceLiquidationPage() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Investment Property Divorce Liquidation Florida", href: "/blog/investment-property-divorce-liquidation-florida" },
        ]}
      />
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=900&fit=crop"
        title="Investment Property Liquidation in a Florida Divorce"
        subtitle="Court timelines, capital gains exposure, and equitable distribution: what investors need to plan for before the sale closes"
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Divorce involving jointly-owned Florida investment property introduces complications that
          primary residence sales do not. Equitable distribution of rental income received during
          the marriage, capital gains allocation between spouses, active tenant lease obligations,
          and court-mandated sale timelines all require coordination that goes beyond a standard
          investment property transaction. Getting the exit right requires planning that begins
          before any sale agreement is signed.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Florida Divorce Law Treats Investment Property
        </h2>
        <p className="mt-4 text-[#666666]">
          Florida is an equitable distribution state. Marital assets including investment
          properties acquired during the marriage and rental income generated during the marriage
          are subject to equitable distribution between spouses. Several realities shape how
          investment property is handled:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[#666666]">
          <li>
            <strong>Separate vs. marital classification:</strong> Investment property owned before
            the marriage or inherited individually may be classified as separate property. However,
            if marital funds were used for mortgage payments, improvements, or carrying costs, the
            marital estate may have an equitable interest in the appreciation that occurred during
            the marriage.
          </li>
          <li>
            <strong>Rental income during marriage:</strong> Rental income generated by marital
            property during the marriage is a marital asset subject to distribution. Documentation
            of income and expense history is essential for accurate equitable distribution. Our{" "}
            <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link>{" "}
            can help organize the income and expense picture.
          </li>
          <li>
            <strong>Both owners must sign to sell.</strong> Both names on the deed must sign all
            closing documents. A non-cooperating spouse can be compelled by Florida family court
            order, but this extends timelines and increases legal costs for both parties.
          </li>
          <li>
            <strong>Active tenants complicate timing.</strong> Florida tenants have statutory rights
            that do not disappear because the owners are divorcing. A sale to a new investor-owner
            who assumes the existing lease is typically cleaner and faster than attempting to vacate
            tenants before closing. See our guide on{" "}
            <Link href="/blog/selling-tenant-occupied-investment-property-florida" className="text-accent underline">
              selling tenant-occupied investment property in Florida
            </Link>{" "}
            for the full picture.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Capital Gains Exposure in Divorce-Driven Investment Property Sales
        </h2>
        <p className="mt-4 text-[#666666]">
          Investment property sold during divorce does not qualify for the Section 121 primary
          residence capital gains exclusion ($250,000 per owner, $500,000 per couple). The full
          gain, calculated as sale price minus adjusted cost basis, which includes original
          purchase price plus capital improvements minus depreciation taken, is subject to
          capital gains tax. For investment properties held more than one year, the long-term
          capital gains rate applies (0%, 15%, or 20% depending on the spouse&apos;s income level).
        </p>
        <p className="mt-4 text-[#666666]">
          Depreciation recapture is also triggered on the portion of the gain attributable to
          depreciation previously deducted, taxed at a maximum rate of 25%. For properties
          held 10 or more years, depreciation recapture can be a significant component of the
          total tax liability.
        </p>
        <p className="mt-4 text-[#666666]">
          A{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">
            1031 exchange
          </Link>{" "}
          into a replacement property defers capital gains and depreciation
          recapture, but requires both spouses&apos; cooperation to execute and must follow strict
          IRS identification and closing timelines. Whether a 1031 is viable in a contested
          divorce depends on the level of cooperation and the court timeline.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Execution Options for Divorce-Driven Florida Investment Property Sales
        </h2>
        <p className="mt-4 text-[#666666]">
          <strong>Cooperative conventional sale:</strong> Both spouses agree on a listing price,
          agent, and timeline. Works when both parties are cooperative and the property is in
          condition for a traditional MLS listing. Maximizes gross sale price but requires
          60 to 90 or more days to close and ongoing cooperation during the listing period. Our{" "}
          <Link href="/services/investment-sales" className="text-accent underline">investment sales service</Link>{" "}
          handles both cooperative and court-ordered transaction types.
        </p>
        <p className="mt-4 text-[#666666]">
          <strong>Court-ordered sale with defined timeline:</strong> Hillsborough County Family
          Court can order the property sold within a specified timeframe when spouses cannot agree.
          A cash buyer&apos;s guaranteed close in 7 to 21 days fits court-mandated timelines far
          more reliably than a conventional listing with contingencies.
        </p>
        <p className="mt-4 text-[#666666]">
          <strong>One-party buyout via refinance:</strong> One spouse retains the property by
          refinancing the existing mortgage into their name alone, paying the other spouse their
          equitable share from proceeds. Requires the retaining spouse to qualify independently
          for the new mortgage, which lender income and debt-to-income requirements may make
          impossible. A{" "}
          <Link href="/services/cre-valuation" className="text-accent underline">CRE valuation</Link>{" "}
          from a qualified advisor is typically required to establish a fair buyout price.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Understanding the Numbers Before the Court Sets the Timeline
        </h2>
        <p className="mt-4 text-[#666666]">
          The earlier investment property issues are addressed in a Florida divorce, the more
          options both parties retain. Once a court sets a mandatory sale deadline, the choice
          of exit strategy narrows to whatever can close within that window. Our{" "}
          <Link href="/blog/tampa-bay-rental-property-exit-strategy-2026" className="text-accent underline">
            Tampa Bay rental property exit strategy guide
          </Link>{" "}
          breaks down the full cost-of-holding analysis that helps investors decide whether a fast
          exit or a conventional listing serves their financial interest better.
        </p>
        <p className="mt-4 text-[#666666]">
          Barrett Henry at HenCRE works with both parties and their attorneys to evaluate all
          exit options, providing market analysis, net proceeds comparisons across sale scenarios,
          and coordination with closing agents familiar with court-ordered transactions. Serving
          all 67 Florida counties from offices in Tampa, Largo, and Brandon.
        </p>

        {/* ---- Mid-article CTA ---- */}
        <div className="my-10 rounded-lg bg-[#1a1a1a] p-8 text-center text-white">
          <p className="text-lg font-bold">Talk to a Commercial Real Estate Broker</p>
          <p className="mt-2 text-white/80">
            Call <a href="tel:8137337907" className="underline">(813) 733-7907</a> or{" "}
            <a href="/contact" className="underline">send a message</a>.
          </p>
        </div>

        <p className="mt-6 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      {/* ---- FAQ Section ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <img
            src="/images/barrett-henry-headshot.jpg"
            alt="Barrett Henry, Broker Associate at REMAX Collective"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett has 23+ years of real estate experience serving all 67 Florida counties from offices in Tampa, Largo, and Brandon. He works with investment property owners, estates, and legal counsel on complex disposition situations.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Consult qualified legal and financial professionals before making real estate decisions during divorce proceedings.
        </p>
      </section>

      <CTASection
        heading="Investment Property Divorce Consultation"
        body="Get a neutral evaluation of your Florida investment property exit options before the court sets a deadline. We work with both parties and their attorneys to find the path that serves everyone&apos;s financial interest."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
