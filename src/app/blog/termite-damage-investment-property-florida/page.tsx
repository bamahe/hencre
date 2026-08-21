import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Termite Damage in Florida Investment Property | HenCRE",
  description:
    "WDO findings on Florida investment properties trigger mandatory lender repair requirements that can consume years of rental income. Here is how to evaluate the repair-vs-sell decision.",
  alternates: { canonical: "https://hencre.com/blog/termite-damage-investment-property-florida" },
  openGraph: {
    title: "Termite Damage in Florida Investment Property: The ROI Reality Check",
    description:
      "WDO findings on Florida investment properties trigger mandatory lender repair requirements that can consume years of rental income. Here is how to evaluate the repair-vs-sell decision.",
    url: "https://hencre.com/blog/termite-damage-investment-property-florida",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Florida investment property inspected for termite damage",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is a WDO inspection and is it required in Florida?",
    answer: "A Wood Destroying Organism (WDO) inspection, also called a termite inspection, examines a property for evidence of subterranean termites, drywood termites, wood-decaying fungi, and related damage. In Florida real estate transactions, WDO inspections are required by most lenders as a condition of financing. They are performed by licensed pest control operators and produce a state-mandated report form (Florida Department of Agriculture FDACS Form 13645).",
  },
  {
    question: "Does termite damage prevent selling an investment property in Florida?",
    answer: "No, but it does affect your buyer pool and your negotiation position. Properties with active WDO findings or unrepaired structural damage cannot be purchased with FHA or VA financing. Conventional lenders may also require treatment and repair before funding. Cash buyers purchase without these requirements, which is why properties with WDO findings often sell directly to investors who price the remediation into their offer.",
  },
  {
    question: "What does termite treatment and repair actually cost in Florida?",
    answer: "Costs depend heavily on scope. Tent fumigation without structural damage runs $1,800 to $3,500. Localized framing repair plus treatment costs $4,000 to $12,000. Floor joist replacement on pier-and-beam or raised foundations runs $8,000 to $25,000. Structural beam or bearing wall compromise can cost $15,000 to $45,000. Widespread Formosan termite structural damage can reach $30,000 to $80,000 or more.",
  },
  {
    question: "Is it better to repair termite damage or sell as-is in Florida?",
    answer: "The right answer depends on the repair cost relative to net proceeds after the repair, the property's current cash flow, and your timeline. Repair-and-list makes sense when remediation is modest and the repaired property commands a meaningfully higher price. An as-is sale outperforms when remediation costs are large relative to net value, you need to close within a defined timeframe, or the property has compounding condition issues beyond termite damage.",
  },
  {
    question: "Does a 1031 exchange work for a Florida investment property with termite damage?",
    answer: "Yes, a 1031 exchange can be used when selling a Florida investment property with WDO findings, as long as you sell and reinvest into a like-kind replacement property following IRS rules. The exchange defers capital gains and depreciation recapture. Working with a qualified intermediary is required. The benefit is that you can exit a problem asset without paying full capital gains tax and redeploy into a better-positioned property.",
  },
  {
    question: "How do I know if a cash offer on my termite-damaged Florida property is fair?",
    answer: "Compare the cash offer to a repair-and-list scenario: estimate the full repair cost, add 60 to 90 days of carrying costs during repair and listing, subtract a 5 to 6% agent commission on the retail-condition sale price, and account for the risk that repairs reveal additional hidden damage. A broker with investment property experience can run this comparison for you with realistic local numbers before you decide.",
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
          name: "Termite Damage in Florida Investment Property",
          item: "https://hencre.com/blog/termite-damage-investment-property-florida",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Termite Damage in Florida Investment Property: The ROI Reality Check",
      description:
        "WDO findings on Florida investment properties trigger mandatory lender repair requirements that can consume years of rental income. Here is how to evaluate the repair-vs-sell decision.",
      datePublished: "2026-06-24",
      dateModified: "2026-08-21",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/termite-damage-investment-property-florida",
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
    title: "Selling Tenant-Occupied Investment Property in Florida",
    href: "/blog/selling-tenant-occupied-investment-property-florida",
    description: "How to exit an investment property without triggering tenant displacement or financing complications.",
  },
  {
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "Full cost analysis of holding vs. exiting Tampa Bay rentals this year.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "Barrett represents sellers of investment properties across Tampa Bay, including distressed and condition-challenged assets.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Defer capital gains when exiting a Florida investment property and redeploy into a better asset.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to inspect and verify before committing to any Florida investment property acquisition.",
  },
  {
    title: "Investment Property Divorce Liquidation Florida",
    href: "/blog/investment-property-divorce-liquidation-florida",
    description: "How forced sale timelines affect exit options for jointly-owned investment property.",
  },
  {
    title: "Florida Insurance Crisis and Investment Properties",
    href: "/blog/florida-insurance-crisis-investment-properties",
    description: "How surging insurance premiums are reshaping ROI and exit decisions for Tampa Bay landlords.",
  },
  {
    title: "Multifamily Investment in Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "What the 2026 Tampa Bay multifamily market means for buyers and sellers.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "The fundamentals that separate good commercial real estate deals from bad ones.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Cap rate, cash-on-cash, and IRR calculations explained for Florida investors.",
  },
];

export default function TermiteDamageInvestmentPropertyPage() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Termite Damage in Florida Investment Property", href: "/blog/termite-damage-investment-property-florida" },
        ]}
      />
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
        title="Termite Damage in Florida Investment Property"
        subtitle="Running the repair-vs-sell numbers when WDO findings surface on a rental or investment property"
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
        <p className="mt-4 text-[#666666]">
          The impact of a WDO inspection finding depends on how the buyer is financing the purchase.
          For investors evaluating a sale, the buyer pool and required terms vary significantly:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[#666666]">
          <li>
            <strong>FHA and VA buyers:</strong> Cannot close on a property with active WDO findings
            or unrepaired structural damage. The seller must treat and repair before funding. This
            is non-negotiable: the lender&apos;s underwriter will not approve the loan with open
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
            into the offer rather than creating a pre-closing obligation. Our{" "}
            <Link href="/services/investment-sales" className="text-accent underline">investment sales team</Link>{" "}
            works with qualified cash buyers who purchase Florida properties in any condition.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Termite Damage Repair Cost vs. ROI Impact on Florida Investment Properties
        </h2>
        <p className="mt-4 text-[#666666]">
          Before committing capital to termite remediation on an investment property, run the
          full repair-vs-proceed math:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[#666666]">
          <li>Tent fumigation, no structural damage: $1,800 to $3,500</li>
          <li>Localized framing repair plus treatment: $4,000 to $12,000</li>
          <li>Floor joist replacement (pier-and-beam or raised foundation): $8,000 to $25,000</li>
          <li>Structural beam or bearing wall compromise: $15,000 to $45,000</li>
          <li>Widespread Formosan termite structural damage: $30,000 to $80,000</li>
        </ul>
        <p className="mt-4 text-[#666666]">
          On an investment property generating $1,800 to $2,200 per month in gross rent with
          net operating income of $600 to $900 per month after carrying costs, a $25,000 remediation
          represents 28 to 42 months of net operating income. The capital reinvestment payback period
          on major structural remediation often exceeds the investor&apos;s intended hold horizon. Use
          our{" "}
          <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link>{" "}
          to model payback period on your specific property before committing to a repair path. For a
          broader look at how carrying costs have shifted for Tampa Bay landlords, see our{" "}
          <Link href="/blog/tampa-bay-rental-property-exit-strategy-2026" className="text-accent underline">
            rental property exit strategy guide
          </Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          When Selling As-Is Outperforms Repair-and-List
        </h2>
        <p className="mt-4 text-[#666666]">
          The repair-and-list path makes financial sense when: the remediation cost is modest
          relative to the property&apos;s value, the repaired property commands a meaningfully higher
          sale price than an as-is offer, and the investor has the liquidity and timeline to fund
          repairs and carry the property through listing and closing.
        </p>
        <p className="mt-4 text-[#666666]">
          The as-is sale path outperforms when: remediation costs are substantial relative to
          net proceeds, the investor needs to exit within a defined timeframe, or the property
          has compounding condition issues beyond termite damage, such as roof age, deferred HVAC,
          or electrical, that would require additional capital regardless of WDO remediation. For
          properties with tenants in place, our guide on{" "}
          <Link href="/blog/selling-tenant-occupied-investment-property-florida" className="text-accent underline">
            selling tenant-occupied Florida investment property
          </Link>{" "}
          covers additional factors that affect the cash-vs-listing decision.
        </p>
        <p className="mt-4 text-[#666666]">
          A direct cash sale to an investor buyer eliminates the repair obligation, closes in
          7 to 21 days, and transfers the remediation cost and risk to the buyer, who prices
          it into their offer. For many Florida investment property owners, this produces better
          net proceeds after accounting for carrying costs during a repair-and-list process,
          contractor delays, and continued vacancy during remediation.
        </p>
        <p className="mt-4 text-[#666666]">
          If capital gains exposure is a concern, a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">
            1031 exchange
          </Link>{" "}
          can defer taxes while allowing redeployment into a better-positioned asset, even when
          selling a property with WDO findings.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Run the Numbers Before You Commit
        </h2>
        <p className="mt-4 text-[#666666]">
          Barrett Henry at HenCRE evaluates Florida investment properties with WDO findings
          across all exit scenarios, including repair-and-list, as-is conventional listing, and
          direct cash sale. He provides a side-by-side net proceeds comparison before any capital
          commitment is made. With 23+ years of real estate experience and offices in Tampa,
          Largo, and Brandon, Barrett serves all 67 Florida counties. Contact us to schedule
          an investment property evaluation.
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
          <Image
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
              Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate
              experience. He evaluates investment property exit scenarios across all 67 Florida
              counties, including distressed, condition-challenged, and tenant-occupied situations.
              Offices in Tampa, Largo, and Brandon.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Consult qualified professionals before making real estate decisions.
        </p>
      </section>

      <CTASection
        heading="Get an Investment Property Evaluation"
        body="WDO findings do not have to end your investment thesis, but they do change the exit math. Let us run the numbers on your specific Florida investment property before you commit to a repair path."
        buttonText="Schedule an Evaluation"
        buttonHref="/contact"
      />
    </>
  );
}
