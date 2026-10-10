import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay DST (Delaware Statutory Trust) CRE Investment 2026
 * How DSTs work as 1031 replacement properties, why Tampa Bay is
 * a target market for DST sponsors, and what investors need to know.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "DST Investing in Tampa Bay Commercial Real Estate 2026 | HenCRE",
  description:
    "Delaware Statutory Trusts (DSTs) are one of the fastest-growing 1031 exchange replacement vehicles in commercial real estate. Here is how they work, why Tampa Bay is a top DST sponsor target, and what investors need to know before committing capital.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-dst-delaware-statutory-trust-cre-2026" },
  openGraph: {
    title: "Delaware Statutory Trust (DST) Investing in Tampa Bay CRE 2026",
    description:
      "DST programs are growing 30% annually nationally. Tampa Bay industrial, retail, and multifamily are top targets. What DSTs are, how they replace 1031 exchange properties, and what investors need to evaluate before investing.",
    url: "https://hencre.com/blog/tampa-bay-dst-delaware-statutory-trust-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tampa Bay commercial real estate investor reviewing DST offering documents",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is a Delaware Statutory Trust (DST) in commercial real estate?",
    answer:
      "A Delaware Statutory Trust is a legal entity -- a trust formed under Delaware law -- that holds title to one or more commercial real estate properties on behalf of multiple investors. Each investor acquires a fractional beneficial interest in the trust rather than taking direct title to the underlying real estate. A professional sponsor organizes, acquires, finances, and manages the property; investors are passive beneficial owners who receive their pro-rata share of rental income distributions and any appreciation at sale. DSTs became widely used in commercial real estate after the IRS issued Revenue Ruling 2004-86, which confirmed that a DST beneficial interest qualifies as a like-kind property for purposes of a 1031 exchange. That ruling transformed the DST structure into one of the most practical tools available to investors who need to identify and close a 1031 replacement property on the exchange timeline -- typically 45 days to identify and 180 days to close.",
  },
  {
    question: "How does a DST work as a 1031 exchange replacement property?",
    answer:
      "When an investor sells a commercial or investment property, a 1031 exchange allows them to defer capital gains taxes by reinvesting the proceeds into a like-kind replacement property. The challenge is the identification timeline: the investor has 45 days from the sale to identify up to three replacement properties and 180 days to close. In a competitive market like Tampa Bay, finding, negotiating, and closing a direct acquisition in that window is difficult -- particularly for investors with large exchange proceeds who need a single-tenant NNN property or a multifamily asset that may simply not exist in sufficient supply when they are looking. A DST solves that problem. The sponsor has already identified, acquired, and seasoned the property, and the investor can close their fractional interest purchase quickly -- often in days -- satisfying the 180-day close requirement. Because fractional DST interests can be sized to match the exchange proceeds precisely, investors can also use multiple DSTs to absorb the full proceeds from a large sale, satisfying the identification rules without the risk of closing gaps.",
  },
  {
    question: "Why are Tampa Bay commercial properties targeted by DST sponsors?",
    answer:
      "DST sponsors target markets with strong occupancy fundamentals, growing tenant demand, and long-term population tailwinds -- because DST investors need durable cash flow to support the income distributions that make these programs attractive. Tampa Bay checks every box. The metro's population growth remains among the strongest in the country, driven by domestic migration from high-cost states, a business-friendly regulatory environment, and a diversifying employment base. Tampa Bay industrial vacancy stabilized at 7.4% in 2026 after a supply-driven rise, and the forward pipeline of new construction is the thinnest since 2021 -- creating conditions for tightening vacancy and rent growth. Retail vacancy in core Tampa Bay corridors is below 4%, among the tightest in the nation. In late 2025, a New Jersey-based developer placed the Sweetwater Business Center -- a nine-building, 225,789 square foot shallow-bay flex industrial complex near Tampa International Airport -- into a $42.5 million DST, secured by a 10-year interest-only Bank of Montreal mortgage at 6.2%. The offering was fully subscribed within six weeks, illustrating how quickly institutional DST capital moves when a quality Tampa Bay asset comes to market.",
  },
  {
    question: "What are the risks and limitations of DST investments?",
    answer:
      "DSTs offer passive income and 1031 exchange eligibility, but they carry specific risks and limitations that investors must evaluate carefully. First, liquidity: DST interests are not publicly traded and are generally illiquid. The typical hold period is 5 to 10 years, and exiting before the sponsor's planned disposition is difficult or impossible. Second, concentration: most DSTs hold a single property or a small portfolio, meaning investors bear the operating and market risk of that specific asset. A DST holding a single net-lease tenant is as exposed to that tenant's credit risk as a direct owner would be. Third, investor control: DST beneficial owners have no management authority over the property -- the sponsor makes all operating, leasing, and financing decisions. The IRS rules that allow DST interests to qualify as like-kind property also prohibit investors from participating in management. Fourth, sponsor quality: the DST market has grown rapidly, and sponsor quality varies. Fee structures, leverage levels, underwriting assumptions, and track records differ materially across programs. Fifth, leverage risk: many DSTs are financed with fixed-rate debt, which protects against rising rates but also means that if the property underperforms, investors can face capital calls or reduced distributions with no ability to modify the financing.",
  },
  {
    question: "How do I evaluate a DST offering for a Tampa Bay commercial property?",
    answer:
      "Evaluating a DST offering requires the same fundamental underwriting discipline as a direct acquisition, applied to the sponsor's structure and fees rather than just the property. Start with the property: location, tenant credit quality, lease term remaining, rent escalation schedule, and market fundamentals in the submarket where the property sits. For Tampa Bay assets, review submarket vacancy trends, competing supply pipelines, and the specific corridor dynamics -- an East Tampa flex industrial asset has different fundamentals than a Westshore office building. Then evaluate the sponsor: how long have they been running DST programs, what is their track record on prior dispositions, how are fees structured, and how much leverage does the offering carry? Review the private placement memorandum (PPM) carefully -- DSTs are securities offerings regulated by the SEC, sold only to accredited investors, and the PPM will disclose all material risks, fees, and assumptions. Working with a licensed broker-dealer who specializes in DST and 1031 exchange placements is advisable; they can help compare multiple offerings and identify sponsors with strong track records in specific property types and markets.",
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
          name: "Delaware Statutory Trust (DST) Investing in Tampa Bay CRE 2026",
          item: "https://hencre.com/blog/tampa-bay-dst-delaware-statutory-trust-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Delaware Statutory Trust (DST) Investing in Tampa Bay CRE 2026",
      description:
        "How Delaware Statutory Trusts work as 1031 exchange replacement properties, why Tampa Bay commercial real estate is a top DST sponsor target in 2026, and what investors need to evaluate before investing in a DST offering.",
      datePublished: "2026-10-07",
      dateModified: "2026-10-10",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-dst-delaware-statutory-trust-cre-2026",
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
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "The rules, timelines, and strategies for deferring capital gains through a 1031 exchange in Florida.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Where net lease cap rates stand across retail, industrial, and office in the current Tampa Bay market.",
  },
  {
    title: "Tampa Bay Industrial Market Q3 2026",
    href: "/blog/tampa-bay-industrial-market-q3-2026",
    description: "Vacancy stabilizing at 7.4% -- and CoStar's #1 small-bay industrial market nationally.",
  },
  {
    title: "Tampa Bay Small-Bay Industrial & Flex 2026",
    href: "/blog/tampa-bay-small-bay-industrial-flex-2026",
    description: "The undersupplied segment of Tampa Bay industrial that is outperforming the national market.",
  },
  {
    title: "Tampa Bay Grocery-Anchored Retail Investment 2026",
    href: "/blog/tampa-bay-grocery-anchored-retail-investment-2026",
    description: "Why grocery-anchored retail continues to attract DST and 1031 exchange capital in Tampa Bay.",
  },
  {
    title: "Tampa Bay Commercial Mortgage Rates 2026",
    href: "/blog/tampa-bay-commercial-mortgage-rates-2026",
    description: "Current financing conditions for commercial acquisitions -- including how DST leverage compares to direct financing.",
  },
  {
    title: "Tampa Bay CRE Debt Maturity Wall 2026",
    href: "/blog/tampa-bay-cre-debt-maturity-wall-2026",
    description: "How maturing commercial loans are creating the distressed acquisition opportunities that DST sponsors target.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "The fundamentals of underwriting returns -- applicable to direct acquisitions and DST offerings alike.",
  },
  {
    title: "Sale-Leaseback Commercial Real Estate Tampa Bay",
    href: "/blog/sale-leaseback-commercial-real-estate-tampa-bay",
    description: "An alternative to DSTs for business owners who want to monetize real estate while staying in their space.",
  },
  {
    title: "Tampa Bay Owner-User Commercial Real Estate: Buy vs. Lease",
    href: "/blog/tampa-bay-owner-user-commercial-real-estate-buy-vs-lease",
    description: "When buying your own building beats leasing -- and how sale-leaseback and DST exit strategies factor in.",
  },
];

export default function TampaBayDSTPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "DST Investing in Tampa Bay CRE 2026", href: "/blog/tampa-bay-dst-delaware-statutory-trust-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop"
        title="Delaware Statutory Trust (DST) Investing in Tampa Bay Commercial Real Estate 2026"
        subtitle="DST programs are growing 30% annually as 1031 exchange investors seek passive replacement properties. Tampa Bay industrial, retail, and multifamily are top targets. Here is what every investor needs to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Delaware Statutory Trusts -- DSTs -- have become one of the fastest-growing capital structures in commercial real estate, and Tampa Bay is at the center of that growth. National DST sales are projected to exceed $7.5 billion in 2025, up 33% year over year, driven by a combination of an aging investor base with built-up appreciation in long-held investment properties, a competitive 1031 exchange market where direct acquisition on the statutory timeline is increasingly difficult, and institutional sponsors who have discovered that Tampa Bay&apos;s population growth and supply-constrained commercial fundamentals make it one of the most compelling markets in the country for deploying DST capital. Whether you are a Tampa Bay investor considering a DST as a 1031 replacement property, an out-of-state investor whose DST offering holds Tampa Bay assets, or a business owner exploring whether a sale-leaseback into a DST structure makes sense, this post covers the mechanics, the Tampa Bay market context, and what to evaluate before committing capital.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is a Delaware Statutory Trust and How Does It Hold Real Estate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A Delaware Statutory Trust is a legal entity formed under Delaware law that holds title to real property on behalf of multiple beneficial interest holders. The structure has been used in commercial real estate for decades, but it became a significant investment vehicle after the IRS issued Revenue Ruling 2004-86, which confirmed that a DST beneficial interest qualifies as a like-kind property for purposes of a Section 1031 exchange. That ruling was the pivot point: it meant that an investor who sold a directly held commercial property and needed to identify a replacement within 45 days could purchase a fractional interest in a professionally managed, already-closed DST offering -- satisfying the identification and closing requirements without having to negotiate and close a direct acquisition on a compressed timeline.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The mechanics work as follows. A DST sponsor -- typically an experienced commercial real estate firm -- identifies, acquires, and finances an institutional-quality property or portfolio. The sponsor places the property into a DST and then offers fractional beneficial interests to accredited investors through a private placement, with minimum investments typically ranging from $100,000 to $250,000. Investors become beneficial owners of the trust, receiving their pro-rata share of rental income distributions and any sale proceeds at disposition. The sponsor handles all property management, leasing, maintenance, and financing decisions; investors are passive owners with no management responsibility or authority -- which is also a regulatory requirement that keeps the DST interest qualifying as a like-kind property under the 1031 rules.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The typical DST hold period ranges from 5 to 10 years, at which point the sponsor disposes of the property and investors receive their proceeds -- at which point many execute another 1031 exchange into a new DST or a direct acquisition. For investors who have spent decades building equity in Tampa Bay commercial or residential investment properties and are now approaching retirement, the DST structure offers a way to exit a management-intensive asset, defer the capital gains tax, and receive passive income distributions from a professionally managed institutional property -- without the operational responsibilities of being a direct landlord.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Tampa Bay a Top Target for DST Sponsors in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          DST sponsors concentrate their acquisitions in markets where two conditions hold simultaneously: strong current cash flow to support income distributions, and credible long-term demand growth that supports the hold thesis investors rely on when committing to a 5-to-10-year illiquid position. Tampa Bay satisfies both conditions more convincingly in 2026 than almost any other Sun Belt market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On the industrial side -- the property type most heavily targeted by DST capital currently -- Tampa Bay&apos;s fundamentals are among the strongest in the country. CoStar ranked Tampa the number-one small-bay industrial market nationally in September 2026 for rent growth and leasing activity growth. Overall industrial vacancy stabilized at 7.4% through the third quarter, ending a two-year supply-driven rise. The forward construction pipeline has thinned dramatically as lenders pulled back on speculative industrial financing in 2024, meaning the current vacancy reading is likely near its peak. For a DST sponsor underwriting a 7-to-10-year hold on a shallow-bay flex industrial property near Tampa International Airport or in the East Tampa corridor, those fundamentals represent a compelling entry point: current cash flow supported by a tight tenant market, and a structural case for rent growth and cap rate compression over the hold period.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most visible recent example is the Sweetwater Business Center transaction. In late 2025, Denholtz -- a New Jersey-based commercial real estate firm -- placed its nine-building, 225,789 square foot shallow-bay flex industrial complex approximately two miles north of Tampa International Airport into a Delaware Statutory Trust (DX SB Industrial I DST), securing a $24 million Bank of Montreal mortgage at 6.2% on a 10-year interest-only basis. The offering was fully subscribed within six weeks, at a total capitalization of $42.5 million. For 1031 exchange investors looking for exposure to Tampa Bay industrial without the execution complexity of a direct acquisition, it was exactly the kind of offering the DST structure is designed to deliver.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Beyond industrial, Tampa Bay retail and multifamily are also attracting DST capital. Tampa Bay retail vacancy below 4% in core corridors makes grocery-anchored centers, QSR net lease, and pharmacy NNN properties in the market among the most defensible cash-flow assets in the DST universe -- the kind of stabilized, credit-tenanted, long-lease-term assets that DST income projections are built on. For more on why those assets continue to attract institutional capital, our{" "}
          <Link href="/blog/tampa-bay-grocery-anchored-retail-investment-2026" className="text-accent underline">grocery-anchored retail investment guide</Link>{" "}
          and{" "}
          <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rate overview</Link>{" "}
          provide full market context.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do DSTs Solve the 1031 Exchange Identification Problem?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 1031 exchange timeline is where most transactions break down. An investor who sells a Tampa Bay commercial property has 45 days from the closing date to formally identify up to three potential replacement properties -- and 180 days to close on at least one of them. In a market where quality commercial real estate is tightly held and competitive acquisitions often take 30 to 60 days to negotiate and close even before the formal exchange timeline begins, the 45-day identification window is a significant operational constraint.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          DST offerings bypass that constraint. Because the sponsor has already acquired the property and the offering is open to investors at the time the investor needs to identify a replacement, the investor can close their fractional interest purchase in days rather than months. The DST&apos;s pre-existing loan and professional management structure are already in place; the investor is simply acquiring a fractional beneficial interest in an operating asset. For investors with large exchange proceeds -- say, $2 million or more from the sale of a fully appreciated Tampa Bay apartment complex or industrial building -- the ability to identify and close on multiple DST interests across different properties and property types in a matter of days is transformational. It replaces a race-the-clock direct acquisition with a deliberate investment decision.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are planning a sale of Tampa Bay investment property and considering a 1031 exchange -- whether into a direct acquisition, a DST, or a combination of both -- it pays to structure the exchange before the property closes, not after. Our overview of{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">Florida 1031 exchange rules and strategies</Link>{" "}
          covers the full timeline and the most common structuring approaches for Tampa Bay investors. And if you are considering selling investment property quickly -- including land or commercial real estate that may work well as a DST sponsor target --{" "}
          our <Link href="/services/dispositions" className="text-accent underline">commercial disposition services</Link>{" "}
          can help evaluate your options before you commit to a traditional listing process.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Key Risks Investors Should Understand Before Investing in a DST?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          DSTs offer real advantages -- passive income, 1031 eligibility, access to institutional-quality assets at fractional minimums -- but they carry risks that investors must weigh carefully before committing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Illiquidity.</strong> DST interests are not publicly traded. There is no secondary market comparable to public REITs or stocks. Once invested, capital is locked up for the duration of the sponsor&apos;s hold period -- typically 5 to 10 years. Investors who may need liquidity during that period should either invest a portion of exchange proceeds they can afford to lock up or explore DST programs that have stated secondary market mechanisms (which exist but are limited and offer no guaranteed execution price).
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Concentration risk.</strong> Many DST offerings are single-property or single-tenant structures. A DST holding a single big-box retail tenant, a single net-lease restaurant location, or a single industrial building exposes investors to the credit risk of that tenant and the performance risk of that specific asset. Diversified multi-property DST portfolios exist and reduce concentration risk, but they also typically come with more complex structures and additional fees.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>No investor control.</strong> IRS rules require that DST investors have no management authority over the trust property. The sponsor makes all decisions: leasing, capital expenditures, financing modifications, and ultimately the timing and terms of disposition. If you disagree with a sponsor&apos;s decision -- say, to accept a renewal lease from a weaker tenant at below-market rent to preserve occupancy -- you have no recourse short of legal action for a breach of fiduciary duty.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Sponsor quality matters enormously.</strong> The DST market has grown rapidly, and not all sponsors are equally capable or ethical. Before investing, review the sponsor&apos;s track record across prior programs -- specifically, how actual distributions and total returns compared to original projections, whether there were capital calls, and whether dispositions were completed at or above underwritten prices. Working with a broker-dealer who has independent research on DST sponsors is essential; avoid sponsors whose projections seem optimistic relative to current market fundamentals.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Fee drag.</strong> DST programs typically charge acquisition fees, asset management fees, and disposition fees that reduce net returns relative to a direct acquisition at equivalent pricing. Understanding the fee structure and modeling its impact on your projected return is a fundamental part of evaluating whether a DST offering competes favorably with direct acquisition alternatives.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Are DSTs the Right Structure for Every 1031 Exchange Investor in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          No -- and understanding when a DST is the right tool versus a direct replacement acquisition requires an honest assessment of the investor&apos;s situation, timeline, and objectives.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          DSTs are most compelling for investors who are transitioning out of management-intensive real estate -- a self-managed apartment building, a multi-tenant retail strip center, or an industrial property that the owner has operated directly -- and into passive income. The investor who is approaching retirement and wants institutional management, reliable income distributions, and no landlord responsibilities is the DST&apos;s natural user. The same investor who sells a Tampa Bay warehouse and wants to reinvest into a directly managed acquisition -- buying into a corridor they know, managing their own tenants, and controlling leasing decisions -- will find the DST&apos;s passivity and illiquidity to be negatives, not positives.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The middle ground -- investors who want to deploy most of their exchange proceeds into a direct acquisition but need to identify a replacement quickly and have remaining proceeds that do not fit neatly into the direct deal -- is where the DST is most often used in combination with a direct acquisition. Identifying a direct replacement property for 80% of the proceeds and a DST interest for the remaining 20% is a common structuring approach that satisfies the exchange requirements while preserving the investor&apos;s hands-on involvement in the majority of their reinvested capital.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For Tampa Bay investors who are actively evaluating 1031 exchange options -- whether direct acquisitions, DSTs, or a combination strategy -- working with a commercial real estate broker who understands both the direct market and the structured product landscape is essential. The Tampa Bay direct acquisition market and the DST offering market are both active in 2026, and the right allocation between them depends on factors that are specific to each investor&apos;s tax situation, timeline, and portfolio objectives.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tampa Bay Commercial Real Estate Investors Do Next?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are holding appreciated Tampa Bay commercial or investment real estate and are considering a sale, the first step is to understand your exchange options before the property closes -- not after. The 45-day identification clock starts at closing, and preparing your exchange strategy in advance gives you the optionality to evaluate both direct replacement acquisitions and DST offerings on your own timeline rather than under deadline pressure.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Key preparation steps: engage a qualified intermediary (QI) before the sale closes; consult your CPA or tax advisor on the exchange structure and how DST beneficial interests interact with your overall tax position; and work with a broker who can identify direct replacement properties in Tampa Bay submarkets while simultaneously connecting you with DST broker-dealers who cover quality Tampa Bay-focused offerings.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of Tampa Bay commercial real estate experience at REMAX Collective, I work with investors at every stage of the acquisition and disposition cycle -- including those navigating the 1031 exchange process and evaluating the full spectrum of replacement options available in the current Tampa Bay market. Whether you are buying direct, exploring DSTs, or weighing both, I can help you understand what is available and structure a strategy that fits your objectives.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Delaware Statutory Trust (DST) Investing in Tampa Bay -- Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial markets. He advises investors on acquisitions, dispositions, and 1031 exchange strategies across all major property types. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Selling Tampa Bay Investment Property and Exploring 1031 Exchange Options?"
        body="Whether you are evaluating a direct replacement acquisition, a Delaware Statutory Trust, or a combination strategy, I can help you understand the Tampa Bay market and structure the right exchange plan for your situation. 23+ years of experience at REMAX Collective. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
