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
 * Blog: Tampa Bay Hotel & Hospitality CRE Investment 2026
 * Recent transactions, market fundamentals, and what investors need to know.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Hotel & Hospitality CRE Investment 2026 | HenCRE",
  description:
    "Tampa Bay hotel transactions surged in 2026 — TownePlace Suites near TIA sold for $19.65M, Home2 Suites Brandon fetched $32M. Here is what investors need to know about buying, valuing, and selling hospitality CRE in Tampa Bay.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-hotel-hospitality-cre-2026" },
  openGraph: {
    title: "Tampa Bay Hotel & Hospitality CRE Investment 2026",
    description:
      "Hotel transaction volume is climbing in Tampa Bay — three notable deals closed in the first nine months of 2026 alone. Here is what hospitality CRE investors need to know about the market, valuations, and opportunities.",
    url: "https://hencre.com/blog/tampa-bay-hotel-hospitality-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern hotel lobby in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What are hotel cap rates in Tampa Bay in 2026?",
    answer:
      "Hotel cap rates in Tampa Bay vary widely by brand, flag, location, and property class. Limited-service and extended-stay properties — the most actively traded segment — are trading at cap rates broadly in the 7% to 9% range in 2026, depending on in-place RevPAR, brand affiliation, and physical condition. Full-service and upper-upscale properties near downtown Tampa and the convention center trade at compressed cap rates, sometimes in the 6% to 7.5% range, given their institutional buyer universe and income stability. Cap rates in secondary locations or for independent (unbranded) properties can run significantly higher to compensate for brand risk and revenue volatility. Unlike multifamily or NNN retail, hotel cap rates must be interpreted alongside RevPAR penetration index (RPI), occupancy seasonality, and management overhead — net operating income for hotels is far more management-intensive than other asset classes.",
  },
  {
    question: "Is Tampa Bay a good market for hotel investment in 2026?",
    answer:
      "Tampa Bay has several structural advantages that make it an attractive hospitality investment market in 2026. The region ranked #7 in CBRE's 2026 North America Investor Intentions Survey for overall commercial real estate, driven by population growth, job creation, and tourism infrastructure including Tampa International Airport and the Port. Tampa posted the largest single-week occupancy gain among the top 25 U.S. markets in August 2026, with occupancy rising 11.7% to 64.9%, reflecting pent-up demand and an improving convention and events calendar. Water Street Tampa's development has repositioned downtown as a genuine destination, expanding the addressable corporate and leisure traveler base. The primary risk is supply: 867 rooms were under construction entering Q3 2026, and new deliveries could pressure occupancy in specific submarkets before demand absorbs them.",
  },
  {
    question: "What per-key pricing are Tampa Bay hotels trading at in 2026?",
    answer:
      "Recent transactions benchmark per-key pricing across Tampa Bay's hotel market. The 125-room Home2 Suites in Tampa's Brandon submarket sold for $32.09 million in February 2026, equating to approximately $257,000 per key — reflecting the premium that institutionally operated, dual-brand extended-stay product commands. The 121-room TownePlace Suites near Tampa International Airport transacted for $19.65 million in September 2026, or approximately $162,000 per key — a more typical range for extended-stay select-service product in suburban Tampa locations. Per-key pricing for Tampa Bay hotels broadly runs from $80,000 to $120,000 per key for older, lower-tier product requiring capital investment, to $200,000 to $350,000 per key for recently renovated or newly built upper-midscale and upscale select-service properties. Full-service downtown assets can exceed $400,000 per key.",
  },
  {
    question: "What is the difference between limited-service and full-service hotel investments?",
    answer:
      "Limited-service hotels (select-service, extended-stay, and midscale flags like Hampton Inn, Marriott TownePlace Suites, Hilton Home2 Suites, and similar) have lower operating expenses because they do not operate food and beverage outlets, large banquet spaces, or extensive concierge programs. Their income is primarily rooms revenue, making them more predictable to underwrite and easier to manage with lean staff. They dominate Tampa Bay's transaction market because of the broader investor universe — regional private buyers, family offices, and private equity funds all compete for quality limited-service assets. Full-service hotels (Marriott, Hilton, Westin, Hyatt brands at the full-service tier) generate revenue from rooms, F&B, and meeting space, but carry significantly higher operating costs and require specialized management expertise. In Tampa Bay, full-service hotel investment is concentrated around downtown Tampa, Westshore, and Clearwater Beach, and is more institutional in character.",
  },
  {
    question: "What due diligence is unique to hotel acquisitions versus other commercial real estate?",
    answer:
      "Hotel due diligence goes well beyond the standard commercial real estate checklist. In addition to physical inspection, environmental review, and title work, buyers must review historical STR (Smith Travel Research) data to assess RevPAR penetration relative to the competitive set, franchise agreement terms (including key money, PIP requirements, and termination provisions), management agreements and their assignability, FF&E reserve balances and deferred capital needs, and trailing 12-month profit and loss statements. Property Improvement Plans (PIPs) required by the franchise at transfer can add hundreds of thousands or millions of dollars in capital requirements that must be priced into the acquisition. The management structure also matters enormously — a well-run hotel significantly outperforms a poorly managed one at the same location and flag, and buyers must assess whether to retain existing management, hire a new operator, or self-manage. An experienced hospitality-focused attorney and a hotel broker or consultant with STR access are essential advisors for any buyer entering this asset class.",
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
          name: "Tampa Bay Hotel & Hospitality CRE Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-hotel-hospitality-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Hotel & Hospitality CRE Investment 2026",
      description:
        "Tampa Bay hotel transactions surged in 2026. Here is what investors need to know about buying, valuing, and selling hospitality real estate across the Tampa Bay market.",
      datePublished: "2026-09-12",
      dateModified: "2026-09-15",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-hotel-hospitality-cre-2026",
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
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "How hospitality cap rates compare to NNN retail, industrial, and other asset classes.",
  },
  {
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "Cap rate trends across the multifamily market for comparison to hospitality yields.",
  },
  {
    title: "Water Street Tampa Downtown CRE 2026",
    href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    description: "How Water Street Tampa's development is reshaping downtown hospitality and commercial demand.",
  },
  {
    title: "Tampa Bay Experience & Entertainment CRE 2026",
    href: "/blog/tampa-bay-experience-entertainment-cre-2026",
    description: "The broader experiential real estate sector that drives leisure hospitality demand.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "Corporate office activity near Tampa International Airport drives hotel demand in Westshore.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How investors can defer capital gains when selling hotel or other commercial property in Florida.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What hotel buyers need to verify beyond the standard CRE due diligence checklist.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "A framework for underwriting hotel acquisitions including RevPAR, NOI, and cap rate.",
  },
  {
    title: "Tampa Bay Self-Storage CRE Investment 2026",
    href: "/blog/tampa-bay-self-storage-cre-investment-2026",
    description: "An alternative operating asset class with lower management intensity than hotels.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors evaluate and transact commercial acquisitions across Tampa Bay.",
  },
];

export default function TampaBayHotelHospitalityCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Hotel & Hospitality CRE 2026", href: "/blog/tampa-bay-hotel-hospitality-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
        title="Tampa Bay Hotel & Hospitality CRE Investment 2026"
        subtitle="Three notable hotel transactions closed in the first nine months of 2026. Occupancy is recovering, Tampa ranked #7 in CBRE&apos;s national investment survey, and transaction volume is climbing. Here is what investors need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Tampa Bay&apos;s hotel market has been quietly busy in 2026. A TownePlace Suites near Tampa International Airport sold for $19.65 million in September. A Home2 Suites in Brandon fetched $32.09 million in February. A Sheraton near TIA changed hands with $27.5 million in acquisition financing in April. Transaction volume is running at a pace not seen since the pre-pandemic cycle, and occupancy trends have inflected sharply — Tampa posted the largest single-week occupancy gain among the top 25 U.S. hotel markets in August 2026. Hospitality has always been one of the more complex commercial real estate asset classes to underwrite, but the current market is generating investor interest from buyers who see Tampa Bay&apos;s fundamentals as among the most compelling in Florida. This piece covers what the data shows and what investors need to evaluate before entering the Tampa Bay hotel market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Tampa Bay Hotel Investment Activity Picking Up in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Several converging factors have put Tampa Bay hospitality on investor radar in 2026. The region&apos;s population growth — the Tampa MSA now exceeds 3.2 million people — continuously expands the base of corporate and leisure travel demand. Tampa International Airport, consistently rated among the best airports in the United States, handled record passenger volumes in 2025 and continues to add service, making it a reliable hotel demand generator for the airport-adjacent Westshore submarket.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The development of{" "}
          <Link href="/blog/water-street-tampa-33-story-tower-downtown-cre-2026" className="text-accent underline">Water Street Tampa</Link>{" "}
          has repositioned downtown Tampa as a genuine destination, not just a convention hub. The mixed-use district anchors a new class of corporate meetings, medical conferences, and leisure travelers who previously had fewer reasons to anchor their visit to the downtown waterfront. Convention demand is also recovering, with the Tampa Convention Center&apos;s event calendar driving midweek group occupancy that stabilizes annual revenue.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa ranked #7 in CBRE&apos;s 2026 North America Investor Intentions Survey, reflecting the broader thesis that Tampa Bay is one of the top-tier Sun Belt markets for commercial real estate investment. That ranking — driven by job growth, in-migration, and institutional capital flows — applies to hotels as much as it does to industrial and multifamily. Investors who have been priced out of Miami and Orlando hospitality are finding Tampa Bay offers comparable demand drivers at more attractive entry yields.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Do Recent Hotel Sales Tell Us About Tampa Bay Valuations?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The transaction record from 2026 provides useful benchmarks for buyers evaluating Tampa Bay hotel acquisitions. The deals range across submarkets and flag tiers, offering a reasonably complete picture of where the market is pricing today.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>TownePlace Suites by Marriott, 5302 Avion Park Drive, Tampa (September 2026).</strong> 121 rooms. Sold for $19.65 million — approximately $162,000 per key. Southern Hospitality and Management Co. acquired the property through YOLO Tampa Airport LLC with $15.75 million in acquisition financing from Banesco USA, representing roughly 80% loan-to-value. The price represented a meaningful appreciation over the property&apos;s $15.54 million sale less than three years prior, reflecting rising Tampa Bay hospitality values.
          </li>
          <li>
            <strong>Home2 Suites by Hilton, 10323 Palm River Road, Tampa Brandon (February 2026).</strong> 125 keys. Sold for $32.09 million — approximately $257,000 per key — to AAM15 Management, a private equity real estate investment firm based in Massachusetts. Berkadia handled the transaction. The premium per-key pricing reflects the dual-brand extended-stay appeal and the Brandon submarket&apos;s strong corporate and healthcare-driven demand.
          </li>
          <li>
            <strong>Sheraton Hotel near Tampa International Airport (April 2026).</strong> Ocean Bank provided $27.5 million in financing for this transaction, indicating a sale price likely in the $30 million to $35 million range for this convention- and airport-proximate full-service property.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          These data points establish a useful range: suburban extended-stay select-service product is trading at $150,000 to $260,000 per key depending on brand, condition, and RevPAR performance. Airport-proximate and urban full-service properties are commanding meaningfully higher per-key pricing. Distressed or repositioning plays — older product requiring significant capital investment — can be acquired below $100,000 per key, but the capital expenditure requirement must be realistically budgeted. The quarterly hotel sales volume for Tampa Bay was running at approximately $97.7 million per quarter entering mid-2026, and the pace of transactions suggests continued institutional and private buyer interest through year-end.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are Tampa Bay Hotel Occupancy and RevPAR Trends Showing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The operational metrics for Tampa Bay hotels have been improving through 2026. In Q3 2025, the market reported average occupancy of 57.6%, ADR of $140.77, and RevPAR of $81.09 — metrics depressed by seasonal softness. The trajectory since then has been positive. For the week ending August 15, 2026, Tampa posted the single largest occupancy increase among the top 25 U.S. hotel markets, with occupancy rising 11.7% week-over-week to reach 64.9%. This kind of demand inflection — broad-based rather than driven by a single event — is the signal investors look for when assessing a market&apos;s recovery trajectory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          ADR trends are equally important. Tampa Bay has benefited from the general post-pandemic repricing of hotel rates nationally, and average daily rates have remained well above pre-2020 levels even as some markets have seen rate softness. Extended-stay product — the TownePlace Suites and Home2 Suites flags that have dominated recent transactions — has been particularly strong, driven by corporate relocation, project-based workforce housing, and longer-stay leisure travelers who have migrated to Tampa Bay as a lifestyle destination.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The supply side warrants attention. With 1,216 rooms delivered over the recent construction cycle and 867 rooms under construction entering Q3 2026, new supply is adding to inventory in select submarkets. Buyers evaluating acquisitions must model the competitive set carefully — a new hotel delivering within the primary competitive set can meaningfully pressure occupancy and ADR for existing properties during the ramp-up period.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Hotel Submarkets Offer the Best Investment Opportunities?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s hotel market is not uniform. Demand drivers, competitive supply, and per-key pricing vary substantially by location, and submarket selection is one of the most important decisions an investor makes.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Westshore / Tampa International Airport.</strong> The highest-volume hotel submarket in Tampa Bay, driven by corporate demand from the Westshore business district — one of Florida&apos;s largest office concentrations — and the passenger throughput of Tampa International Airport. Select-service and extended-stay flags dominate, with strong midweek corporate occupancy. Competition is higher here than in suburban markets, but demand resilience is also stronger.
          </li>
          <li>
            <strong>Downtown Tampa / Water Street.</strong> Benefiting from the ongoing Water Street development, convention business, and proximity to Amalie Arena events. Full-service and boutique properties are the primary investment vehicle here. Lower transaction velocity than select-service submarkets, but significant upside for investors who can reposition older product alongside the neighborhood&apos;s transformation.
          </li>
          <li>
            <strong>Brandon / Southeast Hillsborough County.</strong> The February 2026 Home2 Suites sale at $257,000 per key validates this submarket. Strong healthcare demand (Brandon Regional Hospital, Advent Health), corporate activity, and affordable land make it a preferred location for extended-stay development and acquisition. The{" "}
            <Link href="/blog/brandon-commercial-real-estate-guide-2026" className="text-accent underline">Brandon commercial real estate market</Link>{" "}
            is one of Tampa Bay&apos;s most active suburban growth corridors.
          </li>
          <li>
            <strong>Clearwater Beach / Pinellas Beach Corridor.</strong> Leisure-driven resorts and boutique properties with strong seasonal demand. Higher ADR than corporate submarkets, but more pronounced seasonality. Acquisition pricing reflects the leisure premium, with limited inventory available and strong barriers to new supply given land constraints and zoning.
          </li>
          <li>
            <strong>Wesley Chapel / North Pasco County.</strong> An emerging growth submarket where hotel supply lags population growth. New residential development, the Shops at Wiregrass, and the BayCare medical campus generate demand that has not yet been fully served by the hotel supply. Early-cycle investors have found favorable acquisition pricing relative to demand fundamentals. The{" "}
            <Link href="/blog/wesley-chapel-commercial-real-estate-2026" className="text-accent underline">Wesley Chapel commercial real estate market</Link>{" "}
            is among Tampa Bay&apos;s fastest-growing suburban corridors.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Key Risks in Tampa Bay Hotel Investment?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Hotel investment carries higher operational complexity and income volatility than most commercial real estate asset classes. Understanding the risks is essential before committing capital.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Management quality drives performance.</strong> Unlike a triple-net leased retail property where the tenant operates the business, hotel performance is directly tied to management effectiveness. RevPAR and NOI at the same hotel can vary 20% to 30% depending on operator quality, revenue management sophistication, and operating cost control. Buyers must evaluate management carefully — and budget for a management transition if the incumbent underperforms.
          </li>
          <li>
            <strong>Franchise PIPs at acquisition.</strong> Most branded hotel acquisitions trigger a Property Improvement Plan from the franchisor, requiring the buyer to renovate the property to current brand standards. PIPs can run from a few hundred thousand dollars for minor refreshes to several million dollars for full renovations, and must be negotiated and budgeted into the acquisition underwriting. Failure to complete a PIP on time can result in loss of the franchise flag — a potentially catastrophic outcome for a branded property.
          </li>
          <li>
            <strong>Florida insurance costs.</strong> Commercial property insurance in Florida has increased dramatically, and hotels are not immune. Coverage for coastal properties, in particular, has become more expensive and harder to place. Buyers should obtain detailed insurance quotes before closing, not estimates, and model the full annual insurance expense into NOI.
          </li>
          <li>
            <strong>Supply pipeline competition.</strong> New hotel supply delivering into a competitive set can depress occupancy and ADR for several years while demand absorbs the new rooms. Buyers must map the competitive set — including properties under construction or in planning — and stress-test NOI against a scenario where RevPAR declines 10% to 15% from current levels.
          </li>
          <li>
            <strong>Financing complexity.</strong> Hotel loans are underwritten differently than standard commercial real estate loans. Lenders focus heavily on trailing DSCR and STR data, brand flag and franchise term remaining, and management quality. Loan-to-value ratios are typically lower than multifamily or NNN retail, and some lenders restrict exposure to hospitality. Buyers entering the asset class for the first time should work with a lender experienced in hospitality debt. The September 2026 TownePlace Suites transaction closed at roughly 80% LTV — atypical; most hotel deals finance at 60% to 70% LTV.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are considering selling an existing hospitality or commercial property in Tampa Bay, explore{" "}
          <Link href="/services/dispositions" className="text-accent underline">commercial property disposition services</Link>{" "}
          — including strategies for operating assets — as a complement to a traditional listed sale process.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does a Hotel Acquisition Look Like Step by Step?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Hotel acquisitions follow a broadly similar process to other commercial real estate, with several hospitality-specific elements that buyers must build into their timeline and due diligence scope.
        </p>
        <ol className="mt-4 list-decimal pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Identify and underwrite the target.</strong> Obtain STR data (Smith Travel Research competitive set performance), trailing 12-month P&amp;L statements, franchise agreement, management agreement, and capital expenditure history. Build a proforma using conservative RevPAR assumptions.
          </li>
          <li>
            <strong>Request a PIP from the franchisor.</strong> Before signing a purchase contract, request a preliminary PIP scope from the hotel brand. This can take 30 to 60 days and must be completed before you can accurately price the acquisition.
          </li>
          <li>
            <strong>Negotiate and execute a purchase agreement.</strong> Hotel PSAs include provisions specific to franchise transfer, management agreement assumption or termination, and employee transition. Work with an attorney experienced in hospitality transactions.
          </li>
          <li>
            <strong>Complete due diligence.</strong> Physical inspection by a hospitality-experienced inspector, environmental Phase I (and Phase II if warranted), title search, review of all contracts (franchise, management, vendor, union if applicable), and review of tax and insurance records. See our guide on{" "}
            <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence timelines</Link>{" "}
            for the broader framework.
          </li>
          <li>
            <strong>Secure financing and close.</strong> Hotel loan processes are longer than standard CRE loans, often requiring 60 to 90 days. Build this into your closing timeline. Confirm franchise transfer approval is in hand before closing.
          </li>
        </ol>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Tampa Bay Hospitality CRE in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s hotel market is generating real transaction activity and improving operational fundamentals heading into late 2026. The region&apos;s population growth, airport traffic, corporate base, and convention and events calendar provide sustainable demand drivers that underpin long-term hospitality investment. The recent transaction record — with per-key pricing ranging from $162,000 to $257,000 for extended-stay select-service product and higher for full-service and resort assets — reflects a market that has repriced to reflect both improved fundamentals and the higher interest rate environment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Hospitality is not a passive real estate investment. Management quality, franchise relationships, capital investment timing, and revenue management acumen all materially affect returns. Investors who approach the Tampa Bay hotel market with rigorous underwriting, realistic capital budgets, and experienced operator partnerships will find a market offering yield and growth potential that many Sun Belt peers can no longer provide. Investors who treat hotel acquisition like a NNN lease purchase will discover the hard way why hospitality commands a premium cap rate.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay and ties to an extensive network of investors, lenders, and operators, I help clients evaluate hospitality and other commercial acquisitions with the context that only comes from deep local market knowledge. Whether you are evaluating your first hotel acquisition or looking to expand an existing hospitality portfolio across Tampa Bay, let&apos;s have a conversation about the current market and what opportunities fit your investment criteria.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Hotel & Hospitality CRE 2026 — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay. He helps investors evaluate and transact commercial acquisitions including hospitality assets, retail, industrial, and multifamily. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating a Hotel or Hospitality Investment in Tampa Bay?"
        body="Hospitality CRE requires local market knowledge, the right network, and disciplined underwriting. I help investors assess Tampa Bay hotel opportunities across every submarket and price point. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
