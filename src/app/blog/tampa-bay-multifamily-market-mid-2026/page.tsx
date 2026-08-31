import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay Multifamily Market Mid-2026
 * Record 10.7% vacancy, rents down 2.6% — what structural oversupply
 * means for apartment investors and what the recovery timeline looks like.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Multifamily Market Mid-2026 | HenCRE",
  description:
    "Tampa Bay apartment vacancy hit a 25-year high of 10.7% in 2026 and effective rents fell 2.6% year-over-year to $1,828 per unit. Here is what the oversupply cycle means for multifamily investors, developers, and buyers right now.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-multifamily-market-mid-2026" },
  openGraph: {
    title: "Tampa Bay Multifamily Market Mid-2026",
    description:
      "Tampa Bay apartment vacancy is at a 25-year high. Rents are down. New supply is still delivering. What multifamily investors need to know about the current cycle — and what the recovery looks like.",
    url: "https://hencre.com/blog/tampa-bay-multifamily-market-mid-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tampa Bay apartment complex exterior with pool and landscaping",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the apartment vacancy rate in Tampa Bay in 2026?",
    answer:
      "Tampa Bay's multifamily vacancy rate climbed to approximately 10.7% entering 2026 — the highest level CoStar has recorded in 25 years of tracking the market. The vacancy spike reflects a sustained wave of new apartment deliveries that has outpaced absorption. The market added tens of thousands of units over the 2022–2025 development cycle, and demand — while still positive — has not been sufficient to absorb that supply at the pace developers underwrote. Vacancy is expected to remain elevated through at least mid-2027 as the remaining pipeline delivers, before gradual tightening begins as new starts have slowed materially.",
  },
  {
    question: "Are Tampa Bay apartment rents going down in 2026?",
    answer:
      "Yes. Metro-wide effective rents in Tampa Bay declined approximately 2.6% year-over-year as of Q4 2025, landing at roughly $1,828 per unit. Asking rents have fallen further in submarkets with the heaviest new supply — particularly downtown Tampa, Channel District, and parts of the Westshore/Airport corridor where Class A deliveries have been concentrated. Workforce and garden-style apartments in suburban submarkets like Brandon, Riverview, and Wesley Chapel have held up somewhat better because new supply in those corridors is more limited. Some Class A landlords are offering concessions equivalent to one to two months of free rent to attract tenants, effectively pushing net effective rents further below asking rates.",
  },
  {
    question: "Is Tampa Bay multifamily a good investment in 2026?",
    answer:
      "It depends entirely on what you are buying and at what price. The current oversupply cycle has created genuine distress — developers with maturing bridge loans on recent deliveries are under real pressure, and some assets will transact at discounts to replacement cost. For experienced value-add investors with patient capital and conservative underwriting, the next 12 to 24 months could represent a meaningful acquisition window. The case against buying is that the recovery timeline is uncertain and further rent softness is possible before stabilization. Cap rates for Tampa Bay multifamily are running 6.2% to 7.1% depending on asset class and submarket — not a deeply distressed number, which means disciplined underwriting on income is still essential.",
  },
  {
    question: "Which Tampa Bay submarkets have the worst multifamily oversupply?",
    answer:
      "The heaviest new supply has been concentrated in urban core and infill submarkets — downtown Tampa, Channel District, Ybor City, and the Westshore apartment corridor. These markets absorbed the most Class A luxury product and have the most elevated vacancy. Suburban garden markets in Hillsborough County's growth corridors — Riverview, Brandon, Valrico, and southern Hillsborough — have seen less oversupply and have held occupancy and rents more firmly. Pinellas County markets (St. Petersburg, Clearwater) are more supply-constrained and have fared better than the Hillsborough urban core. Pasco County (Wesley Chapel, New Port Richey) is a mixed picture — strong demand growth but active suburban delivery pipelines.",
  },
  {
    question: "When will the Tampa Bay multifamily market recover?",
    answer:
      "Most market analysts expect the oversupply pressure to persist through 2026 and into mid-2027, with stabilization beginning in the second half of 2027 as new deliveries slow and the existing supply is absorbed. The recovery pace will depend on continued population and employment growth — which remains a genuine Tampa Bay strength — and whether new construction starts remain suppressed. Financing constraints, higher construction costs, and lender conservatism have already slowed the development pipeline substantially, which sets the stage for the next tightening cycle. Investors with a 3-to-5-year hold horizon who acquire assets in 2026 or early 2027 are likely to participate in that recovery.",
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
          name: "Tampa Bay Multifamily Market Mid-2026",
          item: "https://hencre.com/blog/tampa-bay-multifamily-market-mid-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Multifamily Market Mid-2026",
      description:
        "Tampa Bay apartment vacancy hit a 25-year high of 10.7%. Rents fell 2.6% year-over-year. New supply is still delivering. What multifamily investors need to know — and what the recovery looks like.",
      datePublished: "2026-08-28",
      dateModified: "2026-08-31",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-multifamily-market-mid-2026",
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
    description: "Current cap rate data for Tampa Bay apartment investments by submarket and asset class.",
  },
  {
    title: "Multifamily Investment Guide for Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "How to evaluate Tampa Bay multifamily acquisitions — underwriting, due diligence, and exit strategy.",
  },
  {
    title: "Tampa Bay Build-to-Rent CRE 2026",
    href: "/blog/tampa-bay-build-to-rent-cre-2026",
    description: "How the build-to-rent single-family sector is competing with traditional apartments across the metro.",
  },
  {
    title: "Tampa Bay CRE Debt Maturity Wall 2026",
    href: "/blog/tampa-bay-cre-debt-maturity-wall-2026",
    description: "What maturing bridge loans mean for apartment owners and investors watching for distressed opportunities.",
  },
  {
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "When to hold, sell, or 1031 exchange an income-producing property in the current cycle.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "A practical underwriting framework for multifamily acquisitions — cash-on-cash, cap rate, and IRR.",
  },
  {
    title: "Florida 1031 Exchange for Investors",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to defer capital gains taxes when selling a multifamily property and rolling proceeds into a new acquisition.",
  },
  {
    title: "Riverview FL Commercial Real Estate 2026",
    href: "/blog/riverview-fl-commercial-real-estate-2026",
    description: "Growth and development trends in one of Hillsborough County's most active suburban submarkets.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps multifamily investors acquire and divest income-producing properties across Tampa Bay.",
  },
  {
    title: "Tampa Bay Senior Housing CRE Investment 2026",
    href: "/blog/tampa-bay-senior-housing-cre-investment-2026",
    description: "How Florida's aging demographics are shaping senior housing investment alongside the multifamily cycle.",
  },
];

export default function TampaBayMultifamilyMarketMid2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Multifamily Market Mid-2026", href: "/blog/tampa-bay-multifamily-market-mid-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop"
        title="Tampa Bay Multifamily Market Mid-2026"
        subtitle="Vacancy at a 25-year high. Rents down 2.6%. New supply still delivering. The Tampa Bay apartment market is in the deepest oversupply cycle in a generation — here is what it means for investors and what the path to recovery looks like."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Tampa Bay&apos;s multifamily market entered 2026 at a crossroads. After five years of aggressive apartment construction driven by pandemic-era migration, historically low interest rates, and investor optimism about the Sun Belt growth story, the market is now absorbing the consequences of that supply wave. Vacancy has climbed to 10.7% — the highest CoStar has recorded in 25 years of tracking the Tampa Bay market — and effective rents have declined 2.6% year-over-year to approximately $1,828 per unit.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          For investors, developers, and owners navigating this cycle, the picture is nuanced. The macroeconomic case for Tampa Bay remains intact — population growth, employment diversification, and in-migration are all real. The problem is that the market built too many apartments too fast, and the supply hangover will take time to clear. This post examines the data, the submarket dynamics, and what experienced CRE investors should be doing right now.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Did Tampa Bay Get to 10.7% Multifamily Vacancy?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding the oversupply cycle requires going back to 2021 and 2022, when Tampa Bay was one of the hottest apartment markets in the country. Net migration into the region surged. Rents spiked 25% or more in a single year. Cap rate compression made multifamily acquisitions attractive across the capital stack, and developers — responding to real demand signals and cheap debt — broke ground on tens of thousands of new units.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The problem was sequencing. Construction takes 18 to 36 months. The units permitted and started in 2021 and 2022 began delivering in 2023 and 2024 — precisely when in-migration had begun normalizing and interest rate increases were cooling both investor appetite and renter household formation. The result: a market that had been absorbing units rapidly was suddenly absorbing at a slower pace while supply continued to deliver at full speed.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          By the end of 2025, Tampa Bay had absorbed the largest new-supply cycle in its modern history, and vacancy climbed to record levels. The pattern mirrors what happened in other high-growth Sun Belt metros — Austin, Phoenix, Charlotte — where the same development surge played out on similar timing. Tampa Bay is not uniquely broken; it is cycling through a supply correction that the fundamentals support recovering from, but the timing is uncertain and the pain for leveraged owners is real.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Submarkets Are Feeling the Most Pressure?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The oversupply is not distributed evenly across the metro. Urban core and Class A submarkets have absorbed the heaviest concentration of new product and are experiencing the worst vacancy and rent concessions. Suburban and workforce submarkets have held up materially better.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Downtown Tampa and Channel District.</strong> The urban core delivered the largest concentration of Class A luxury units over the past three years — high-rise and mid-rise towers with rooftop amenities, concierge services, and rents well above the metro average. These assets are now competing hard for tenants, and effective rents have fallen 5% to 8% in some buildings as landlords layer in concessions. Occupancy in the best-managed buildings has held above 88%; in weaker-positioned assets, it has slipped to the low 80s.
          </li>
          <li>
            <strong>Westshore and Airport corridor.</strong> The Westshore business district and surrounding apartment corridors along the Veterans Expressway and Airport area also absorbed significant Class A supply. These markets benefit from proximity to Tampa&apos;s largest employment concentration, which provides a floor on demand — but the volume of competing units has pushed concessions to one to two months of free rent in some properties.
          </li>
          <li>
            <strong>Ybor City and Tampa Heights.</strong> Both neighborhoods benefit from the longer-term urban revitalization story — the Gasworx development and continued residential activation in Tampa Heights are real catalysts — but near-term vacancy pressure from new deliveries has moderated rent growth. Tenants in these submarkets have meaningful negotiating leverage compared to 2022 and 2023.
          </li>
          <li>
            <strong>Riverview and Brandon (relative outperformers).</strong> Suburban garden-style apartments in the southern Hillsborough corridor have held occupancy and rents more firmly because new supply in these markets is less concentrated. Workforce renter demand from the large middle-income population base in <Link href="/blog/riverview-fl-commercial-real-estate-2026" className="text-accent underline">Riverview and Brandon</Link> has provided a stabilizing floor. Vacancy in well-managed suburban properties in this corridor is running in the 7% to 8% range — elevated vs. 2022 but meaningfully below the urban core.
          </li>
          <li>
            <strong>Pinellas County (St. Petersburg, Clearwater).</strong> Pinellas supply has been more constrained — land is scarcer and regulatory complexity is higher — so vacancy pressure is less acute. St. Pete urban apartments near Central Avenue and the Warehouse Arts District have seen some softening but remain more stable than the Tampa side of the bay.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Rent Picture Look Like Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Metro-wide effective rents declined approximately 2.6% year-over-year as of Q4 2025, with the average landing around $1,828 per unit. That headline number understates the variation by asset class:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Class A urban high-rise and mid-rise.</strong> This is where rent pressure has been most acute. Effective rents — net of concessions — are down 5% to 10% from 2023 peaks in the hardest-hit downtown and Westshore buildings. One to two months of free rent on a 12-month lease reduces the net effective monthly rent materially below the quoted asking rate. Owners of Class A assets are managing occupancy vs. revenue tradeoffs in real time, and the calculus has shifted toward occupancy.
          </li>
          <li>
            <strong>Class B workforce apartments.</strong> Suburban Class B garden-style product has held up better. Rents in this category are flat to down 1% to 2% year-over-year, which reflects softer demand growth but not the heavy concession environment of the Class A sector. For the large segment of Tampa Bay renters who cannot afford Class A rents, workforce apartments remain the primary option and the supply dynamics are less distorted.
          </li>
          <li>
            <strong>Single-family build-to-rent.</strong> The build-to-rent sector — purpose-built single-family or townhome rental communities — is competing directly with traditional apartments for renters who value space and privacy over urban amenities. <Link href="/blog/tampa-bay-build-to-rent-cre-2026" className="text-accent underline">Build-to-rent communities</Link> in suburban Hillsborough and Pasco Counties have held rents more firmly than Class A apartments because their product type differentiates from the high-rise competition.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Happening With Distressed Multifamily Assets in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The single most consequential dynamic in Tampa Bay multifamily right now is the <Link href="/blog/tampa-bay-cre-debt-maturity-wall-2026" className="text-accent underline">debt maturity wall</Link> — a large volume of bridge loans and short-term construction debt originated in 2021 and 2022 that is coming due at interest rates dramatically higher than when the loans were written. Owners who underwrote cap rates of 4.0% to 4.5% at sub-3% floating rate debt are now managing assets with elevated vacancy, declining rents, and refinancing costs that no longer pencil at original underwriting.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The result is a growing — though still early-stage — distressed opportunity set. Some owners are choosing to sell at discounts rather than fund operating deficits or inject additional equity to refinance at higher rates. Others are working with lenders on extensions or modifications. In a small but growing number of cases, lenders are taking control of assets through receiverships or deed-in-lieu transactions.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors with dry powder and patience, this is a potentially meaningful window. The key discipline is not buying the headline distress — it is underwriting the recovery. A 10.7% vacant building bought at a distressed price is still a bad investment if it takes five years to stabilize and you underwrite a two-year recovery. The investors who will do well in this cycle are those who model realistic absorption timelines, conservative rent growth assumptions (3% to 4% annually, not the 10% per year of 2021), and fully loaded expense structures that include current Florida insurance costs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Owners navigating financial distress who need to exit quickly may also find options through cash-sale channels. Barrett Henry works directly with multifamily owners who need a faster exit path — <Link href="/services/dispositions" className="text-accent underline">explore disposition services</Link> for a direct assessment of your options.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the New Development Pipeline Doing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The good news for investors betting on a recovery is that the development pipeline has contracted sharply. New apartment starts across Tampa Bay have fallen materially from their 2021 and 2022 peaks, driven by a combination of factors that all point in the same direction: higher financing costs, lender conservatism, elevated construction costs, and the visible softening of rent and occupancy fundamentals.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Units currently under construction and expected to deliver in 2026 will continue to pressure the market through this year and into early 2027. But the starts that were not made in 2024 and 2025 represent units that will not deliver in 2026 and 2027 — which sets the stage for the supply pipeline to thin out considerably by mid-2027. At that point, if demand — driven by continued population growth and household formation — continues at its current pace, the vacancy correction should begin reversing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The macro demand story for Tampa Bay is real and durable. The metro has added population consistently for a decade, employment has diversified beyond tourism and real estate into finance, technology, healthcare, and defense-related sectors, and the quality-of-life proposition continues to draw in-migrants from higher-cost markets in the Northeast and Midwest. Those are not going to stop. The timing question is whether supply burns off fast enough for that demand to show up clearly in occupancy and rent trends before investors who bought in 2026 need to exit.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Multifamily Investors Do Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The right move depends heavily on whether you are an existing owner or a potential acquirer.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>If you own multifamily in Tampa Bay right now:</strong> The most important focus is occupancy over rent. In an oversupplied market, fighting to hold your 2022 asking rent while vacancy climbs is the wrong trade. A stabilized 93%-occupied building generating real cash flow is worth more — and refinances more easily — than a 78%-occupied building with premium asking rents and growing concessions. Invest in your property condition and management quality; Class B assets in good physical shape and well-managed hold occupancy better than those that are not. And model your debt maturity carefully — getting ahead of a maturing loan six to twelve months early gives you options that waiting until the last minute eliminates.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>If you are considering selling a multifamily asset:</strong> The current market does not favor sellers of stabilized assets at 2022 valuations — buyers are pricing in the current income reality, not the peak assumptions. However, if your hold period assumptions have changed, if partnership dynamics require liquidity, or if you have a 1031 exchange strategy that requires selling now, the market still has buyers. Pricing discipline and realistic underwriting from both sides are essential. An experienced broker who knows the current cap rate environment — <Link href="/blog/tampa-bay-multifamily-cap-rates-2026" className="text-accent underline">currently 6.2% to 7.1% by submarket</Link> — will give you an honest read on where your asset prices today.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>If you are considering buying:</strong> The next 12 to 18 months may represent one of the better acquisition windows in Tampa Bay multifamily in years. Pricing has come off peaks, cap rates have expanded, and some motivated sellers are transacting. The discipline is in underwriting conservatively — model 7% to 8% stabilized vacancy rather than 5%, use 3% annual rent growth rather than 5%, and fully burden your expenses with current Florida insurance premiums. Run a full <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence process</Link> and model your <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">returns</Link> at multiple scenarios before committing. The right asset, bought at the right price with conservative assumptions, can be an outstanding investment over a 3-to-5-year hold.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors considering a 1031 exchange from a sold multifamily asset into a different asset class — NNN retail, industrial, or net-leased medical office — should review the <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange rules for Florida</Link> carefully. The current multifamily cycle has prompted some investors to rotate into asset classes with more stable near-term income profiles.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Recovery Timeline for Tampa Bay Apartments?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Most credible forecasts project that the vacancy correction will persist through 2026 and into mid-2027, with stabilization beginning in the second half of 2027. The logic behind that timeline:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Supply delivery slows materially in 2027.</strong> The units under construction today will deliver through 2026 and early 2027. The sharp drop in new starts in 2024 and 2025 means the delivery pipeline will be dramatically thinner by mid-2027, relieving the primary pressure on vacancy.
          </li>
          <li>
            <strong>Demand remains positive.</strong> Tampa Bay&apos;s population growth has moderated from its COVID-era highs but remains well above national average rates. Employment growth, in-migration from other Florida markets and out-of-state, and household formation from the metro&apos;s large young adult population all support continued positive absorption.
          </li>
          <li>
            <strong>Concessions burn off before asking rents recover.</strong> The first sign of a recovering market will be landlords pulling back concessions — free rent months, waived application fees — before asking rents actually increase. Watch for concession compression as the leading indicator of stabilization.
          </li>
          <li>
            <strong>Institutional capital returns as conditions normalize.</strong> The multifamily market will attract significant institutional buyer interest once vacancy begins trending down and rent growth turns positive. That re-entry of institutional capital will compress cap rates from current levels, benefiting investors who acquired in the 2026 window.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Homebuyers weighing an apartment versus a purchase decision in the current market should evaluate current conditions carefully. First-time buyers may find the current environment favorable for a purchase rather than continued renting. For insights on Tampa Bay&apos;s broader market, see our overview of <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County commercial real estate</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Tampa Bay Multifamily in Mid-2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Tampa Bay apartment market is in a real correction — the numbers are not soft, they are a genuine oversupply cycle with a 10.7% vacancy rate and declining effective rents. Owners with leveraged balance sheets and maturing short-term debt are under real pressure, and that pressure will create transaction opportunities over the next 12 to 24 months.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At the same time, the long-term investment case for Tampa Bay multifamily is not broken. Population growth, employment diversification, and the structural undersupply of workforce housing relative to the region&apos;s long-term needs are all real. The current cycle is a supply correction, not a demand collapse. Markets that get through supply corrections with their demand foundations intact — and Tampa Bay&apos;s demand story is intact — typically emerge with strong fundamentals on the other side.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience across Tampa Bay, I work with multifamily investors evaluating acquisitions, existing owners navigating the current cycle, and clients considering whether to hold, sell, or exchange into alternative investments. Whether you own a small apartment building in Hillsborough County or are evaluating a larger acquisition in the current distressed environment, local market knowledge and realistic underwriting make the difference. Let&apos;s talk about your specific situation.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Multifamily Market — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial and investment property market. He works with multifamily investors acquiring and divesting income-producing properties throughout Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
              <Link href="/about" className="text-accent underline">
                Barrett&apos;s background
              </Link>{" "}
              or explore{" "}
              <Link href="/services" className="text-accent underline">
                his services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Navigating Tampa Bay&apos;s Multifamily Cycle?"
        body="Whether you own apartments in the current oversupply environment, are evaluating an acquisition in the distressed market, or are considering a 1031 exchange into a different asset class, I can help you model the numbers and make a disciplined decision. Let&apos;s talk."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
