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
  title: "Tampa Bay Distressed Apartment Sales 2026 | HenCRE",
  description:
    "Tampa Bay apartment owners face a refinancing squeeze as higher rates, weaker rents, and maturing loans force difficult choices. What owners can do and where investors find opportunity.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-distressed-apartment-sales-2026" },
  openGraph: {
    title: "Tampa Bay Distressed Apartment Sales 2026: What Owners and Investors Need to Know",
    description:
      "Occupancy at its lowest in a decade, rents slipping, and loans maturing into a 7% rate environment. Tampa Bay multifamily distress is creating both crisis and opportunity.",
    url: "https://hencre.com/blog/tampa-bay-distressed-apartment-sales-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tampa Bay apartment complex representing distressed multifamily sales 2026",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Why are Tampa Bay apartment owners in distress in 2026?",
    answer:
      "The distress stems from a collision of three factors that arrived at the same time. First, loans originated in 2020 and 2021 at 3% to 3.5% are now maturing and need to be refinanced at rates in the 6.5% to 7.5% range for bridge debt and 5.5% to 6% for agency debt — a dramatic increase in debt service that many properties cannot support at current rents and occupancy. Second, occupancy in Tampa Bay multifamily fell to roughly 91% in early 2026, its lowest level in a decade, as new supply from the 2022-2024 construction wave absorbed slowly. Third, rents softened — Yardi Matrix data showed Tampa Bay among the hardest-hit major markets with a -0.8% monthly rent decline in early 2026. Together, lower income and dramatically higher financing costs put many 2020-2022 vintage loans in distress at maturity.",
  },
  {
    question: "What does the refinancing squeeze actually look like in dollar terms?",
    answer:
      "Consider a practical example: a Tampa Bay apartment property that supported approximately $15 million of debt at 3.5% based on its 2021 NOI. At 3.5%, the annual debt service on $15 million over 30 years is roughly $808,000. At 7%, the same income stream supports only about $10 million of debt — the same DSCR test that passed in 2021 fails today unless NOI has grown substantially. The owner must produce another $5 million from somewhere: inject new equity, find a capital partner, or sell. For owners who took maximum leverage at peak prices, none of those options is attractive. This math is not hypothetical — it is playing out in real transactions across the Tampa Bay market.",
  },
  {
    question: "Are there real examples of Tampa Bay apartment distress in 2026?",
    answer:
      "Yes. The Wave, a 242-unit apartment complex in North Tampa, defaulted on a $26 million mortgage in mid-2026 and entered foreclosure proceedings. In South Tampa, The Edge at 1702 — a 227-unit community — sold in September 2026 for $70 million, a figure that represented a $45 million drop from its 2022 peak valuation of approximately $115 million. Nationally, distressed apartment sales accounted for 4.7% of U.S. multifamily transactions in the second quarter of 2026, up from 1.5% just one year earlier, according to MSCI data. Multi-Housing News has flagged Tampa among the markets where appraisal values are frequently coming in below existing loan balances, forcing owners to either inject capital or sell.",
  },
  {
    question: "What options does a Tampa Bay apartment owner have when facing a loan maturity problem?",
    answer:
      "There are four realistic paths. First, refinance if the numbers work: if the property's current NOI supports a DSCR of 1.20x or better at today's rates, conventional refinancing is available — owners should engage lenders 90 days before maturity. Second, negotiate a loan modification or extension: many lenders still prefer a performing loan at a higher rate over taking back a property; 'extend and pretend' strategies remain available for owners in good standing with their lender. Third, bring in an equity partner or recapitalize: injecting new equity to reduce the loan balance to a refinanceable level preserves the asset but dilutes ownership. Fourth, sell on your terms before the lender forces the issue: a controlled sale will almost always produce a better outcome than a foreclosure sale, and the current buyer pool for Tampa Bay multifamily remains active. If you need to sell quickly, services like fastselleasysale.com handle multifamily and commercial property sales for owners who need speed over maximum pricing.",
  },
  {
    question: "Where do investors find distressed apartment buying opportunities in Tampa Bay?",
    answer:
      "The most productive sources are properties approaching loan maturity with overleveraged debt stacks, owners who purchased at 2021-2022 peak pricing and have not been able to refinance, and properties that have come through foreclosure into bank REO inventory. The best deals are typically off-market — owners in distress rarely list on the open market, because the time required for a traditional sale may outlast their runway. Engaging a commercial broker who tracks loan maturities and lender relationships is the most reliable way to access these deals before they become public. Well-located class-B properties in Hillsborough, Pasco, and Pinellas counties offer the clearest value creation path because the underlying renter demand remains intact despite the temporary softness in rents and occupancy.",
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
          name: "Tampa Bay Distressed Apartment Sales 2026",
          item: "https://hencre.com/blog/tampa-bay-distressed-apartment-sales-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Distressed Apartment Sales 2026: What Owners and Investors Need to Know",
      description:
        "Occupancy at its lowest in a decade, rents slipping, and loans maturing into a higher-rate environment. Tampa Bay multifamily distress is creating both crisis and opportunity.",
      datePublished: "2026-10-17",
      dateModified: "2026-10-20",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: {
        "@type": "Organization",
        name: "HenCRE",
        url: "https://hencre.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://hencre.com/blog/tampa-bay-distressed-apartment-sales-2026",
      },
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
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "How to evaluate whether the investment math works at current prices and rates.",
  },
  {
    title: "Tampa Bay CRE Debt Maturity Wall 2026",
    href: "/blog/tampa-bay-cre-debt-maturity-wall-2026",
    description: "The broader wave of maturing commercial loans across all property types.",
  },
  {
    title: "Multifamily Investment Tampa Bay Guide",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "Fundamentals, deal evaluation, and value-add strategies for Tampa Bay apartments.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Defer capital gains tax when repositioning into Tampa Bay multifamily.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "Barrett Henry sources and closes multifamily investment deals across Tampa Bay.",
  },
];

export default function TampaBayDistressedApartmentSales2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Distressed Apartment Sales 2026", href: "/blog/tampa-bay-distressed-apartment-sales-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
        title="Tampa Bay Distressed Apartment Sales 2026"
        subtitle="Higher rates, softer rents, and a wave of maturing loans are forcing Tampa Bay apartment owners into difficult decisions. Here is what is happening and what it means for owners and investors."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          The Tampa Bay multifamily market is producing a story that two years ago seemed improbable: apartment owners who purchased at record prices in 2021 and 2022 are now facing the prospect of foreclosure, forced sales at steep discounts, or painful equity injections just to hold their properties. The refinancing squeeze is real, the numbers are brutal, and the consequences are beginning to show up in court filings and sale records across the region.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is not a sign of a failing market. Tampa Bay&apos;s underlying renter demand remains strong, and the population drivers that made apartments a compelling investment in 2019 and 2020 have not reversed. What has changed is the financing math — and for owners who layered maximum leverage onto 2021-peak pricing, that math no longer works. Understanding why, and what it means for both owners and investors, is what this piece covers.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Tampa Bay Apartment Owners Under Pressure Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Three forces converged at the same time in 2026, and each one would have been manageable alone. Together, they created real distress for a meaningful slice of the Tampa Bay multifamily market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Loan maturities arriving in a high-rate environment.</strong> The Mortgage Bankers Association estimates roughly $800 billion in multifamily debt matures between 2026 and 2028. Much of it was originated in 2020 and 2021 at 3% to 3.5% — the lowest commercial rates in modern history. Refinancing those loans today means accepting rates in the 5.5% to 7.5% range depending on property type, loan-to-value, and lender type. That is not a marginal difference. A $15 million loan at 3.5% carries annual debt service of roughly $808,000. The same property&apos;s income may support only $10 million of new debt at 7%, leaving the owner $5 million short. See the full picture in the{" "}
          <Link href="/blog/tampa-bay-cre-debt-maturity-wall-2026" className="text-accent underline">Tampa Bay CRE debt maturity wall analysis</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Occupancy hit a decade low.</strong> The 2022 through 2024 construction boom delivered a significant volume of new apartments to Tampa Bay submarkets. Class-A communities absorbed slowly, and the competition pushed occupancy for existing class-B and class-C properties lower. Cushman &amp; Wakefield data cited in recent market reporting put Tampa Bay multifamily occupancy at roughly 91% in early 2026 — its lowest point in ten years. Every percentage point of occupancy below a lender&apos;s underwriting threshold reduces the maximum loan amount at refinancing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Rents declined in early 2026.</strong> Yardi Matrix data shows Tampa Bay recorded a -0.8% monthly rent decline in early 2026, one of the sharpest drops among major U.S. metros. That reversed a multi-year run of strong rent growth and compressed the NOI that owners were counting on to support debt service at higher rates. Properties underwritten in 2021 against projected rent growth that did not fully materialize are now generating income well below the original pro forma.
        </p>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop"
            alt="Tampa Bay apartment complex representing distressed multifamily market conditions 2026"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">
            Tampa Bay multifamily occupancy fell to roughly 91% in early 2026 — its lowest in a decade — compounding the refinancing pressure for owners with maturing loans.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Real Distress Looks Like: Tampa Bay Examples</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The pressure is not abstract. Specific Tampa Bay properties have already entered foreclosure or sold at material discounts from their peak valuations.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>The Wave, North Tampa.</strong> This 242-unit apartment community defaulted on a $26 million mortgage in mid-2026 and entered foreclosure proceedings — a direct casualty of the refinancing squeeze applied to a leveraged acquisition made near market peak.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>The Edge at 1702, South Tampa.</strong> This 227-unit community sold in September 2026 for $70 million — a figure that represents a $45 million loss from its peak 2022 valuation of approximately $115 million. A decline of that magnitude on a single asset illustrates how significantly peak-cycle pricing has repriced in submarkets that experienced the most aggressive appreciation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Nationally, distressed multifamily sales accounted for 4.7% of U.S. apartment transactions in the second quarter of 2026, according to MSCI data — up from 1.5% just one year earlier. That is a more than threefold increase in twelve months. Multi-Housing News has flagged Tampa Bay specifically as a market where appraisals are frequently coming in below existing loan balances, a structural characteristic of distressed refinancing cycles.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A Canadian real estate firm also closed an $84 million transaction involving Largo apartments in early October 2026, another data point in an active transaction market where motivated sellers and patient buyers are finding price discovery. For context on the broader <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market</Link>, see the mid-2026 overview.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Options Does a Tampa Bay Apartment Owner Have?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you own Tampa Bay multifamily with a loan maturing in the next 12 to 24 months — or one that has already matured and is on a modification or extension — you have four realistic paths. The earlier you evaluate them, the more options you have.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Refinance if the math works.</strong> Pull current financials — trailing 12-month NOI, current rent roll, occupancy history — and engage a commercial lender 90 days before maturity. If your property&apos;s current NOI supports a debt service coverage ratio of 1.20x or better at today&apos;s rates, refinancing is available and straightforward. Agency debt (Fannie Mae, Freddie Mac) remains the most competitive source for stabilized properties with five or more units. If you need to grow NOI before refinancing, a modest renovation to bring rents to market can change the math.
          </li>
          <li>
            <strong>Negotiate a loan modification or extension.</strong> Lenders — particularly regional banks and community banks that originated loans in 2020 and 2021 — are still extending performing loans rather than forcing foreclosure. If your loan is current and you can demonstrate a credible path to refinancing within 12 to 18 months, a modification or extension is often achievable. Come to that conversation with data: current rent roll, market comparables, and a specific plan for reaching refinanceable NOI.
          </li>
          <li>
            <strong>Bring in a capital partner or recapitalize.</strong> If the property has equity — even reduced equity after value corrections — a joint venture or preferred equity partner can inject capital to pay down the loan to a refinanceable balance. This dilutes ownership but preserves the asset and avoids a forced sale. Private equity firms with multifamily mandates are actively evaluating Tampa Bay recapitalization opportunities in 2026.
          </li>
          <li>
            <strong>Sell on your terms before the lender acts.</strong> A controlled, market-rate sale almost always produces a better outcome than a lender-forced sale, short sale, or foreclosure auction. If the refinancing math is insurmountable and recapitalization is not realistic, an early and voluntary sale preserves more capital and credit than waiting until the lender initiates proceedings. Owners who need to sell quickly — including those facing maturity or foreclosure timelines — can also explore expedited sale options through services like{" "}
            <a href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">fastselleasysale.com</a>
            , which handles multifamily and commercial property sales for owners who prioritize speed and certainty over maximum list-price exposure.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Is the Distress Wave Creating Buying Opportunities for Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Yes — and for well-capitalized buyers, the current environment is the most compelling entry point in Tampa Bay multifamily since 2019. Here is what separates the genuinely good deals from the ones that look cheap for a reason.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>What makes a distressed deal genuinely attractive.</strong> A property whose distress is purely financial — the owner has a bad capital structure, not a bad property — is the investor&apos;s target. Well-located, well-maintained class-B communities in <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>, <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link>, and <Link href="/markets/pasco" className="text-accent underline">Pasco</Link> counties that are generating 90%+ occupancy with in-place rents close to market, but whose owners are trapped by a legacy debt stack, are exactly the type of deal that creates investor opportunity. The underlying asset is sound; the financing is not. A buyer who steps in without that legacy debt pays a lower price, structures right-sized financing, and owns the same quality of building with a realistic path to returns.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>What to avoid.</strong> Properties with the financing problem and an operational problem — high vacancy, deferred maintenance, location in an oversupplied submarket — require both recapitalization and execution to recover. These are not impossible, but they are investor-intensive and carry more downside than they appear to on a compressed-cap-rate offering memorandum. Carefully evaluate trailing NOI against actual in-place rents and market-rate rents before underwriting stabilized cash flow.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>How investors are accessing these deals.</strong> Most distressed multifamily sales in Tampa Bay are not appearing on CoStar or LoopNet in the traditional sense. Owners facing maturity problems do not want public knowledge of their distress, and many would rather negotiate a private sale than expose themselves to public marketing that alerts their lender. The most productive sourcing channels are direct broker relationships, lender referrals, and attorneys who specialize in commercial workouts. This is a significant area of Barrett&apos;s practice — he works with owners across the valuation spectrum, including those who need to exit quietly and efficiently.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors deploying <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange capital</Link>, the combination of expanded cap rates (see the <Link href="/blog/tampa-bay-multifamily-cap-rates-2026" className="text-accent underline">Tampa Bay multifamily cap rate analysis</Link>) and motivated sellers creates a favorable exchange window that was not available in 2021 or 2022. Exchange deadlines create urgency; the right relationship with a broker who has an active deal pipeline is the difference between meeting that deadline and passing on deals that do not fit.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Underwrite a Distressed Tampa Bay Apartment Deal?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Underwriting a distressed acquisition requires a more conservative set of assumptions than a stabilized purchase. Four items specific to the current Tampa Bay environment that every investor should stress-test:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Insurance at current market rates.</strong> Do not use the seller&apos;s historical insurance cost. Obtain actual current quotes for the specific property. Florida property insurance premiums have increased materially and vary significantly by age, construction type, and proximity to coast. A property whose seller was paying $80,000 per year might require $160,000 or more at current market rates — a difference that can shift the NOI by 100 basis points or more on a smaller deal. The <Link href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">Florida insurance crisis guide</Link> covers this in detail.
          </li>
          <li>
            <strong>Property tax at post-acquisition assessed value.</strong> Florida&apos;s homestead exemption does not apply to investment properties, and the Save Our Homes cap does not follow investment owners. When a property sells, it reassesses at the sale price, and your property tax will reflect that valuation — not the seller&apos;s historic cap-limited basis. On properties that transacted at peak 2021-2022 pricing and are now being resold at a discount, the tax burden may actually decrease — verify the expected reassessment with a tax professional before closing.
          </li>
          <li>
            <strong>Financing available at your actual leverage.</strong> Model debt service at today&apos;s rates for your actual loan-to-value. If you need bridge financing because the property does not qualify for agency debt at current occupancy, factor in the higher bridge rate — often 7% to 8.5% — and model when the property will stabilize enough to refinance into permanent agency financing.
          </li>
          <li>
            <strong>Rent growth conservatively.</strong> The market that delivered -0.8% monthly rent declines in early 2026 is not a market where aggressive rent growth assumptions are justified at entry. Model flat-to-modest rent growth through 2027 and show that the investment works even if rents stay where they are today before growing. That stress test will reveal whether you are buying a property or buying a bet.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Tampa Bay Multifamily Market Look Like Beyond the Distress?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The distress is real, but it is not the whole story. Transaction volume in Tampa Bay multifamily reached approximately $372 million in the first quarter of 2026, up 78% year over year, according to Northmarq data. Buyers are active and capital is available — the market is not frozen, it is repricing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The oversupply pressure from the 2022-2024 construction wave is expected to moderate through 2027 and 2028 as new deliveries slow. When occupancy recovers toward the mid-to-high 90s — which is the historical norm for Tampa Bay&apos;s supply-constrained submarkets — the properties acquired today at distressed pricing will benefit from both income improvement and cap rate compression as institutional buyer demand returns.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For patient, well-capitalized investors, October 2026 represents the kind of entry point that becomes obvious in retrospect but requires conviction in real time. The conditions that created the distress — the rate shock, the supply wave — are beginning to resolve. The buyers who move while others are still assessing the damage will own the assets that benefit when the cycle turns.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience across multiple market cycles in Tampa Bay. He represents buyers and sellers of multifamily properties across Hillsborough, Pinellas, Pasco, Manatee, and Polk counties. If you are an owner evaluating your options on a maturing loan or a property you need to exit, or an investor looking to source distressed multifamily opportunities, contact Barrett directly at (813) 500-5700 or through the <Link href="/contact" className="text-accent underline">contact page</Link>.
        </p>

        <p className="mt-8 text-xs text-[#666666]">Published: October 2026</p>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#f5f5f5] p-6">
          <p className="text-sm font-semibold text-black">About the Author</p>
          <p className="mt-2 text-sm text-[#666666]">
            Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience serving investors across Tampa Bay. e-PRO, MRP, SRS | REMAX Hall of Fame.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <FAQAccordion items={faqItems} />
      </section>

      <CTASection
        heading="Tampa Bay Multifamily: Owner or Investor, Let's Talk"
        body="Barrett Henry advises apartment owners on their exit options and helps investors source distressed multifamily opportunities across Tampa Bay. Whether you need to move quickly or are building a long-term acquisition strategy, start with a conversation."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <RelatedLinks links={relatedLinks} />
    </>
  );
}
