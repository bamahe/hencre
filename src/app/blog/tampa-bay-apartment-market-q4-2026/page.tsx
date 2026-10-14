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
 * Blog: Tampa Bay Apartment Market Q4 2026
 * Higher rates squeezing owners. New supply pressure. What's next.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Apartment Market Q4 2026 | HenCRE",
  description:
    "Higher interest rates are squeezing Tampa Bay apartment owners heading into Q4 2026. Vacancy has risen, rent growth has flattened, and floating-rate loans are forcing decisions. Here is what multifamily owners, buyers, and investors need to know.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-apartment-market-q4-2026" },
  openGraph: {
    title: "Tampa Bay Apartment Market Q4 2026",
    description:
      "Higher rates. Elevated new supply. Owners under pressure. Tampa Bay's apartment market is recalibrating heading into Q4 2026 — here is what it means for owners, buyers, and investors.",
    url: "https://hencre.com/blog/tampa-bay-apartment-market-q4-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Apartment complex in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the apartment vacancy rate in Tampa Bay in Q4 2026?",
    answer:
      "Tampa Bay multifamily vacancy has risen from the historic lows of 3% to 4% seen in 2021 and 2022 to approximately 7% to 8% entering Q4 2026. The increase is driven primarily by new supply: the region absorbed a significant wave of apartment deliveries in 2024 and 2025, and additional units from projects started during the construction boom of 2022 and 2023 continue to deliver. Vacancy is not uniform across the market. Class A properties in submarkets that saw the heaviest new construction — Wesley Chapel, Riverview, New Tampa, and parts of Hillsborough County's growth corridors — are facing the most pressure, with effective vacancy (accounting for concessions) running higher than headline figures suggest. Class B and Class C assets in infill locations with limited nearby new competition are holding up considerably better, in some cases still running below 5% occupancy. The vacancy story is ultimately a supply story: Tampa Bay's demand fundamentals, driven by continued population inflow and household formation, remain sound. The question is how long it takes the market to absorb the delivery wave.",
  },
  {
    question: "How are higher interest rates affecting Tampa Bay apartment owners?",
    answer:
      "Higher interest rates are creating real financial stress for a subset of Tampa Bay apartment owners, particularly those who financed acquisitions or developments between 2021 and 2023 using floating-rate bridge debt or short-term construction loans. Many of those loans are now maturing into a refinance environment where rates are meaningfully higher than at origination, and where reduced cash flow from softening rents and concessions has eroded debt-service coverage ratios. For owners who bought stabilized assets at 4.0% to 4.5% cap rates in 2021 or 2022 with floating-rate leverage, the math has become difficult: the property's income may not cover the higher debt service of a refinance, and a sale at current market cap rates — which have expanded to 5.5% to 6.5% for stabilized assets — would crystallize a loss. The owners in the most difficult position are those with near-term loan maturities, insufficient reserves, and properties that have not fully recovered from the concession environment. Those who locked in fixed-rate, long-term agency financing (Fannie/Freddie) during the same period are largely insulated from the rate pressure and watching the market recalibrate from a position of relative stability.",
  },
  {
    question: "Are apartment rents still growing in Tampa Bay in 2026?",
    answer:
      "Rent growth in Tampa Bay's apartment market has flattened significantly from the 20%-plus annual increases seen in 2021 and 2022. Entering Q4 2026, effective rents across the metro are roughly flat on a year-over-year basis, and in submarkets with the heaviest new supply concentration, effective rents are modestly negative when concessions are factored in. Class A new construction in Wesley Chapel, Riverview, and Brandon is offering one to two months of free rent or waived application fees to compete for residents, which reduces effective revenue even when headline asking rents hold nominally steady. Class B and Class C rents are more stable, supported by residents who cannot or choose not to upgrade to new Class A product at higher price points. The rental affordability dynamic in Tampa Bay remains relevant: the market's household income levels and the overall cost of homeownership continue to support apartment demand at the right price point, even as the luxury tier adjusts to the supply wave. Rent growth is expected to return to a positive but normalized 2% to 3% annual trajectory by mid-2027 as the delivery pipeline thins.",
  },
  {
    question: "Is Tampa Bay multifamily still a good investment in Q4 2026?",
    answer:
      "Tampa Bay multifamily remains a fundamentally sound long-term investment market, but the entry point and asset selection matter more than at any time in the past five years. Cap rates for stabilized Class B assets have expanded to 5.5% to 6.25%, which is a meaningfully better entry point than the 4.5% to 5.0% cap rates that prevailed in 2021 and 2022. Value-add investors who can buy older, well-located Class B assets at expanded caps, execute targeted renovations, and hold through the supply cycle absorption period are positioned well. The key underwriting discipline is stress-testing for continued vacancy softness and concessions through 2027 before assuming rent growth resumes. Ground-up development economics remain challenged in most submarkets: construction costs have not come down proportionally to where rents landed after the supply wave, making new construction pencil for fewer developers and reducing the forward pipeline, which is ultimately a positive for stabilized asset owners. For investors considering selling, the current environment rewards patient capital — owners who can carry their assets through the supply absorption without being forced by loan maturity or cash flow pressure will be in the best position to capture the recovery.",
  },
  {
    question: "Which Tampa Bay submarkets are holding up best for apartments in Q4 2026?",
    answer:
      "Infill submarkets with limited nearby new construction and strong existing demand are outperforming in the current cycle. South Tampa, Seminole Heights, Ybor City, and Hyde Park-adjacent submarkets have seen relatively modest vacancy increases because new apartment development in those areas is constrained by land costs, zoning, and the difficulty of assembling sites in established urban neighborhoods. Downtown St. Petersburg and the Edge District remain resilient, with steady demand from the city's growing professional and creative-industry workforce. In contrast, suburban growth corridor submarkets — parts of Wesley Chapel, New Tampa, and the Riverview-Brandon corridor — have absorbed more new supply and are working through higher vacancy and concession environments. The long-term outlook for all Tampa Bay submarkets is supported by continued household formation and the region's consistent net in-migration, but the near-term path depends heavily on how quickly the Class A supply overhang is absorbed and when the development pipeline normalizes.",
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
          name: "Tampa Bay Apartment Market Q4 2026",
          item: "https://hencre.com/blog/tampa-bay-apartment-market-q4-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Apartment Market Q4 2026",
      description:
        "Higher interest rates are squeezing Tampa Bay apartment owners heading into Q4 2026. Vacancy has risen to 7–8%, rent growth has flattened, and floating-rate loans are forcing decisions. A full market update for multifamily owners, buyers, and investors.",
      datePublished: "2026-10-13",
      dateModified: "2026-10-13",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-apartment-market-q4-2026",
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
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description: "The midyear multifamily update — vacancy, rents, and the delivery pipeline through H1 2026.",
  },
  {
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "Current cap rate benchmarks for apartment investment across Tampa Bay submarkets.",
  },
  {
    title: "Tampa Bay CRE Debt Maturity Wall 2026",
    href: "/blog/tampa-bay-cre-debt-maturity-wall-2026",
    description: "How the wave of maturing CRE loans is affecting Tampa Bay owners across all property types.",
  },
  {
    title: "Tampa Bay Build-to-Rent CRE 2026",
    href: "/blog/tampa-bay-build-to-rent-cre-2026",
    description: "The build-to-rent single-family sector and what it means for traditional apartment demand.",
  },
  {
    title: "Multifamily Investment Tampa Bay Guide",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "A comprehensive guide to multifamily investment across Tampa Bay's submarkets.",
  },
  {
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "How rental property owners are thinking about exits and timing in the current market.",
  },
  {
    title: "Tampa Bay CRE Market Outlook Q4 2026",
    href: "/blog/tampa-bay-cre-market-outlook-q4-2026",
    description: "The broader commercial real estate market outlook across all property types for Q4 2026.",
  },
  {
    title: "Sale-Leaseback Commercial Real Estate Tampa Bay",
    href: "/blog/sale-leaseback-commercial-real-estate-tampa-bay",
    description: "How sale-leasebacks work for commercial property owners facing capital pressure.",
  },
  {
    title: "Selling Tenant-Occupied Investment Property Florida",
    href: "/blog/selling-tenant-occupied-investment-property-florida",
    description: "How to sell a rental property or apartment building with tenants in place in Florida.",
  },
  {
    title: "Tampa Bay Residential Slowdown and CRE Opportunity 2026",
    href: "/blog/tampa-bay-residential-slowdown-cre-opportunity-2026",
    description: "Where the residential market slowdown is creating openings in commercial real estate.",
  },
];

export default function TampaBayApartmentMarketQ4Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Apartment Market Q4 2026", href: "/blog/tampa-bay-apartment-market-q4-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop"
        title="Tampa Bay Apartment Market Q4 2026"
        subtitle="Higher rates are squeezing owners. Vacancy has risen to 7–8%. Rent growth has flattened. Here is what multifamily owners, buyers, and investors need to know heading into year-end."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Tampa Bay&apos;s apartment market is going through a meaningful recalibration heading into Q4 2026. After three years of historically tight vacancy, explosive rent growth, and aggressive capital flows into multifamily, the market is now absorbing the consequences of the construction boom it attracted: a large wave of new supply, higher interest rates than most owners underwrote, and a rental consumer who has more choices than at any point since 2019. This is not a collapse — Tampa Bay&apos;s long-term demand story is intact, driven by continued population inflow and the region&apos;s position as one of the most in-demand metros in the Southeast. But the near-term operating environment is meaningfully more difficult than it was two years ago, and owners who entered the market with floating-rate leverage are facing decisions that require clear-eyed analysis of their options.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Higher Rates Squeezing Tampa Bay Apartment Owners Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The rate squeeze hitting Tampa Bay apartment owners in Q4 2026 is the product of a specific financial structure that was extremely common during the 2021 to 2023 acquisition and development cycle: floating-rate bridge loans and short-term construction financing, typically with two- to three-year terms and one-year extension options. At origination, many of these loans were underwritten at rates of 4% to 5% all-in. Today, those same loans are maturing or hitting extension triggers at rates of 7% to 8%, in some cases higher.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The timing is particularly difficult because the rate shock is arriving simultaneously with a softening operating environment. In 2021 and 2022, apartment owners could absorb higher financing costs with rental rate increases — rents were growing 15% to 25% annually, cash flow was expanding, and the path to refinancing at stabilized value looked clear. Today, effective rents are roughly flat year-over-year, concessions are compressing net operating income on newer Class A assets, and the appraisal values supporting new permanent financing have come down from peak levels. Owners who needed rent growth to hit their stabilization numbers have not gotten it, and their refinance path requires either more equity or terms they did not plan for.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This dynamic is playing out in Tampa Bay and across Sun Belt markets that were the most active multifamily destinations during the low-rate cycle. The owners most at risk are those with assets that have not yet fully stabilized, those in submarkets with the heaviest new supply competition, and those whose loan structures have exhausted extension options. Our broader analysis of the{" "}
          <Link href="/blog/tampa-bay-cre-debt-maturity-wall-2026" className="text-accent underline">Tampa Bay CRE debt maturity wall in 2026</Link>{" "}
          covers how this pressure is showing up across all commercial property types in the region.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Driving the Rise in Tampa Bay Apartment Vacancy?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Vacancy in Tampa Bay&apos;s apartment market has risen from the 3% to 4% historic lows of 2021 and 2022 to approximately 7% to 8% entering Q4 2026. The primary driver is simple: a large volume of new apartment units delivered into a market that had already absorbed strong rent growth and attracted more supply than its absorption rate could immediately handle.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay permitted and started construction on an extraordinary number of apartment units between 2021 and 2023, responding rationally to the vacancy and rent signals of that period. Many of those projects took 24 to 30 months to deliver, bringing a concentrated wave of new supply to market in 2024 and 2025, with additional deliveries continuing into 2026. The submarkets that attracted the most development activity — Wesley Chapel, Riverview, Brandon, New Tampa, and the Westshore-Airport corridor — are the ones working through the most pronounced vacancy elevation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          It&apos;s worth being precise about what &quot;elevated vacancy&quot; means in context. A 7% to 8% vacancy rate in Tampa Bay&apos;s apartment market is not historically extraordinary — it is roughly in line with long-run averages before the pandemic tightening. What makes it feel sharp is the contrast with where the market was just two years ago, and the fact that it has arrived alongside higher financing costs rather than in a period of financial ease. For owners who bought at peak cap rates with leverage sized to tighter conditions, even a normalized vacancy environment creates meaningful stress.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The demand side remains constructive. Tampa Bay continues to add population at a rate that supports long-term household formation. The homeownership affordability challenge — with mortgage rates and home prices both elevated — continues to keep many potential buyers in the rental market longer than they might otherwise stay. As the new supply wave is absorbed and the development pipeline thins due to challenging construction economics, the fundamental demand-supply balance is expected to return to equilibrium by 2027. For context, the{" "}
          <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market midyear update</Link>{" "}
          provides the prior quarter&apos;s data and trajectory.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Options Do Stressed Tampa Bay Apartment Owners Have?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Apartment owners in Tampa Bay who are facing rate-driven stress have a narrower set of options than they did when rates were low and values were rising, but they are not without choices. The right path depends heavily on the specific asset&apos;s operating performance, loan structure, remaining term or extension options, and the owner&apos;s equity position and capital reserves.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Refinance and extend.</strong> Owners with properties that have achieved or are approaching stabilization — typically 90%+ physical occupancy on a sustained basis — may qualify for agency permanent financing (Fannie Mae or Freddie Mac) or life company debt at current market rates. The challenge is that the resulting debt service coverage ratio must meet lender minimums, which requires either a larger equity paydown, higher NOI than the asset is currently achieving, or both. Owners with sufficient equity and a stabilized property can often execute this path, taking out of the floating-rate risk in exchange for locking in a higher long-term fixed rate than they originally anticipated.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Sell at current market values.</strong> For owners who acquired at peak cap rates and have limited equity cushion, a sale at current market pricing — where cap rates have expanded to 5.5% to 6.5% for stabilized Class B assets — may crystallize a loss against their purchase basis. However, a controlled sale today may be preferable to a forced sale or lender workout later if the property cannot be refinanced. Owners who bought value-add assets with genuine below-market rents that have not yet been renovated and marked to market have more options, as those assets carry real upside that a buyer will underwrite. If you are considering an exit from a Tampa Bay apartment investment, our guide to{" "}
          <Link href="/blog/tampa-bay-rental-property-exit-strategy-2026" className="text-accent underline">rental property exit strategies in 2026</Link>{" "}
          covers the considerations in more detail. Investors who want to move quickly can also explore{" "}
          <a href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">fast-sale options for commercial and investment properties</a>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Raise additional equity or preferred capital.</strong> Some owners have been able to bring in equity partners, mezzanine lenders, or preferred equity providers to bridge the gap between what the current lender requires and what the existing equity can support. This option is available primarily for assets with genuine operating upside — either through lease-up completion, rent-roll mark-to-market, or physical value-add potential — that can support a return on incremental capital. It requires a compelling story to a sophisticated capital source and a realistic timeline to generate that return.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Work with the existing lender.</strong> Bridge lenders and construction lenders with Tampa Bay multifamily exposure are generally aware of the market dynamics and prefer a cooperative workout to a forced sale or foreclosure. Loan modifications, forbearance agreements, or structured extensions with additional reserves can buy time for a property to stabilize or for market conditions to improve. This path requires transparency with the lender, a credible stabilization business plan, and a lender that is willing to engage — not all are, particularly non-bank bridge lenders with their own capital pressures.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Where Are the Opportunities for Multifamily Buyers in Q4 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The same conditions creating stress for some existing owners are creating entry opportunities for well-capitalized buyers who can underwrite the current environment without the leverage structures that are causing distress. Tampa Bay multifamily is more attractively priced today than it has been at any point since 2019, and buyers who are patient, disciplined, and willing to hold through the supply absorption cycle are well-positioned.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Class B value-add in infill locations.</strong> Well-located Class B apartment assets in submarkets with limited new construction competition — South Tampa, Seminole Heights, older parts of St. Petersburg — are the clearest opportunity for value-add investors. These assets benefit from a renter base that is not competing directly with new Class A supply and that responds to targeted unit renovations with rent premiums that justify the renovation investment. Buying at today&apos;s expanded caps with a value-add renovation thesis is a meaningfully better risk-adjusted entry than the 2021 and 2022 vintage of similar acquisitions.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Motivated seller transactions.</strong> The rate squeeze affecting some owners will produce genuine motivated seller transactions in Q4 2026 and into early 2027 — assets where the current owner needs to transact before a loan maturity or covenant breach forces their hand. These situations can offer below-market pricing, seller financing, or other terms that improve the acquisition economics for buyers who can move quickly and with confidence. Identifying these opportunities requires market presence and broker relationships, not just watching listing services.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a full picture of cap rate benchmarks and where multifamily investment is priced across Tampa Bay&apos;s submarkets, our{" "}
          <Link href="/blog/tampa-bay-multifamily-cap-rates-2026" className="text-accent underline">Tampa Bay multifamily cap rate guide for 2026</Link>{" "}
          breaks down the data by submarket and asset class. And for those monitoring the broader cross-sector dynamics, the{" "}
          <Link href="/blog/tampa-bay-cre-market-outlook-q4-2026" className="text-accent underline">Q4 2026 Tampa Bay CRE market outlook</Link>{" "}
          places the apartment sector in context alongside office, industrial, and retail.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Tampa Bay Apartment Market Look Like Going Into 2027?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The near-term outlook for Tampa Bay apartments through the end of 2026 and into early 2027 is one of continued absorption and recalibration. The new supply wave that has been pressuring vacancy and rents is largely running its course: the pipeline of units under construction has thinned as construction financing became more difficult and development economics deteriorated, and major brokerage data sources point to a declining delivery schedule heading into 2027.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          As new deliveries slow, the demand drivers that made Tampa Bay one of the most-watched multifamily markets in the country — sustained in-migration, a young and growing workforce, and the continued unaffordability of homeownership for many households — will reassert themselves against a smaller supply increment. Vacancy is expected to drift back toward 5% to 6% by mid-2027, and rent growth is expected to return to a positive but normalized 2% to 3% annual pace. For long-term holders, the cycle will look like a meaningful but temporary correction in what remains one of the strongest multifamily markets in the Southeast.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors considering the Tampa Bay market from a broader portfolio perspective, it is worth noting that the same household formation and population dynamics are generating demand across residential-adjacent sectors. The{" "}
          <Link href="/blog/tampa-bay-build-to-rent-cre-2026" className="text-accent underline">build-to-rent single-family sector in Tampa Bay</Link>{" "}
          is absorbing some of the renter demand that would historically have gone to traditional apartments — a structural shift worth understanding for investors evaluating where multifamily demand goes long-term. Those curious about the residential market context can also visit{" "}
          <a href="https://nowtb.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">nowtb.com</a>{" "}
          for Tampa Bay neighborhood guides and home market updates that illustrate the homeownership affordability dynamic keeping renters in the market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The bottom line for Tampa Bay apartment owners and investors heading into Q4 2026: the market is not broken, but it requires more careful underwriting and more realistic expectations than the 2021 and 2022 environment demanded. Owners who are proactive about addressing financing stress — not waiting for a lender-forced outcome — and investors who are buying with a clear-eyed view of the supply absorption timeline are the ones best positioned to benefit when the market completes its recalibration.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of experience in Tampa Bay commercial real estate, I work with multifamily owners navigating today&apos;s more complex market — whether that means evaluating exit options, identifying acquisition opportunities, or understanding what current cap rates and rent trends mean for a specific asset. If you have a Tampa Bay apartment investment question, I am happy to talk through what the current market means for your situation.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Apartment Market Q4 2026 — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial and investment markets. He helps multifamily owners and investors navigate acquisitions, dispositions, and market cycles across Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions About Your Tampa Bay Apartment Investment?"
        body="Whether you are evaluating your financing options, considering a sale, or looking for multifamily acquisition opportunities in Tampa Bay's current market, I can help you understand what Q4 2026's recalibration means for your specific situation. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
