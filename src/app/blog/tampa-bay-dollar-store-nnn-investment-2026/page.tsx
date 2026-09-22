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
 * Blog: Tampa Bay Dollar Store NNN Investment 2026
 * Dollar General's 450-store expansion, BBB credit, 6.75-7.05% caps,
 * and why passive investors are targeting Tampa Bay dollar stores.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Dollar Store NNN Investment 2026: Investor Guide | HenCRE",
  description:
    "Dollar General and Dollar Tree NNN properties in Tampa Bay are trading at 6.75–7.05% cap rates in 2026. Learn what investment-grade dollar store leases offer passive investors, what to watch for in due diligence, and which Tampa Bay corridors are seeing the most activity.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-dollar-store-nnn-investment-2026" },
  openGraph: {
    title: "Tampa Bay Dollar Store NNN Investment 2026: Cap Rates, Leases & Market Guide",
    description:
      "Dollar General is opening 450 stores in 2026 with BBB-rated corporate leases. Tampa Bay dollar store NNN properties trade at 6.75–7.05% caps — here is what passive investors need to know before buying.",
    url: "https://hencre.com/blog/tampa-bay-dollar-store-nnn-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dollar store retail building exterior in a Tampa Bay Florida suburban corridor",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What cap rates are Dollar General NNN properties trading at in Tampa Bay in 2026?",
    answer:
      "Dollar General NNN properties in Tampa Bay are trading at approximately 6.75% to 7.05% going-in cap rates as of Q1–Q2 2026. That range reflects the asset class's investment-grade credit quality — Dollar General carries a BBB rating from S&P and Baa2 from Moody's — combined with its absolute NNN lease structure, which eliminates landlord management responsibilities. Newer construction with longer remaining lease terms (15 years or more) commands the tighter end of that range, while older properties or those with shorter remaining terms trade wider. Dollar Tree and Family Dollar properties, which merged under the same corporate parent, tend to trade at slightly wider caps — 7.0% to 7.5% — reflecting the ongoing integration and store-rationalization activity that has created some investor uncertainty around specific locations. For comparison, QSR drive-thru pads in Tampa Bay are trading at 5.0% to 5.75%, so dollar stores offer meaningfully more yield for investors willing to accept slightly lower foot traffic per square foot.",
  },
  {
    question: "Are Dollar General leases truly triple-net, and what does that mean for landlords?",
    answer:
      "Dollar General's standard lease format is absolute NNN, which is the most landlord-passive structure available in net-lease investing. Under an absolute NNN lease, the tenant — Dollar General's corporate entity — pays base rent plus all property taxes, building insurance, and maintenance costs. The landlord receives a check every month and has essentially no ongoing property management responsibility. This differs from a standard NNN lease, where the landlord may still be responsible for roof, structure, or parking lot capital expenditures depending on how the lease is written. Dollar General's absolute NNN structure means roof and structure repairs are also the tenant's obligation, which is a significant distinction. The tradeoff is that absolute NNN deals typically price tighter (lower cap rates) than modified NNN or gross leases because the landlord is giving up management upside in exchange for completely passive income. For Tampa Bay investors who own residential rental portfolios and are fatigued by property management, dollar store NNN is one of the cleanest exits from active management while maintaining real estate income.",
  },
  {
    question: "What is the typical lease term for a new Dollar General in Tampa Bay?",
    answer:
      "New Dollar General locations typically come with 15-year initial lease terms and multiple renewal option periods of five years each, with rent escalations built into either the option periods or the base term. The escalation structure varies: some leases include 10% bumps every five years, while others are flat during the base term with increases at renewal. From an underwriting standpoint, a new Dollar General with 15 years of term remaining is meaningfully different from one with five years left — the shorter the remaining term, the wider the cap rate and the more critical it becomes to understand the local market's ability to re-lease the box if Dollar General exercises its renewal right at a lower rent or simply does not renew. The 8,500 to 9,500-square-foot format Dollar General is adopting for its 2026 expansion builds is larger than older locations, which makes re-leasing to alternative users like a discount retailer, a small-format grocery, or a medical services provider more feasible if Dollar General ever vacates.",
  },
  {
    question: "How do I find dollar store NNN properties for sale in Tampa Bay?",
    answer:
      "Dollar store NNN listings in Tampa Bay appear on LoopNet, Crexi, CoStar, and through specialized net-lease brokers who track corporate sale-leaseback programs. Dollar General periodically sells properties it owns through sale-leaseback transactions — where Dollar General sells the building to an investor and simultaneously signs a long-term NNN lease to stay in place — which creates a pipeline of corporate-guaranteed NNN assets with fresh 15-year terms. National net-lease brokers like Marcus & Millichap, CBRE, and Westwood Net Lease regularly bring these to market. For Tampa Bay investors seeking to deploy 1031 exchange proceeds, dollar store NNN is frequently used as a replacement property because the properties are priced in the $1.5 million to $3.5 million range — accessible to investors exchanging out of residential investment properties or smaller commercial assets. A commercial broker with net-lease experience can source off-market opportunities and help evaluate specific lease abstracts before you engage in due diligence.",
  },
  {
    question: "What are the biggest risks in dollar store NNN investing that buyers overlook?",
    answer:
      "The most commonly overlooked risks in dollar store NNN investing fall into three categories. First, lease expiration risk: a dollar store with three to five years of remaining term is not the same investment as one with fifteen. When a lease expires or the tenant does not renew, the landlord is left with a 9,000-square-foot retail box in a secondary location that was purpose-leased to a dollar-store operator — re-leasing to an alternative user takes time and capital, and the gap between dollar-store rent and the next best tenant's rent can be significant. Second, location quality: not all dollar stores in Tampa Bay are equal. A store on a well-trafficked corridor in a growing submarket like Wesley Chapel or Riverview has far better re-leasing prospects than one in a declining area. Third, the Family Dollar consolidation: Dollar Tree's ongoing rationalization of its Family Dollar store base means some Family Dollar NNN properties carry elevated vacancy risk if their specific location is on the company's closure list. Always verify the store's sales performance and whether it is a flagged location before acquiring a Family Dollar-branded property.",
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
          name: "Tampa Bay Dollar Store NNN Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-dollar-store-nnn-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Dollar Store NNN Investment 2026: Cap Rates, Leases & Market Guide",
      description:
        "Dollar General and Dollar Tree NNN properties in Tampa Bay are trading at 6.75–7.05% cap rates in 2026. Here is what passive investors need to know about lease structure, due diligence, and which corridors are most active.",
      datePublished: "2026-09-20",
      dateModified: "2026-09-22",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-dollar-store-nnn-investment-2026",
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
    description: "Where dollar stores fit within the broader Tampa Bay net-lease cap rate landscape.",
  },
  {
    title: "What Is a Triple-Net (NNN) Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "The complete guide to NNN lease structure — what landlords own, what tenants pay.",
  },
  {
    title: "Tampa Bay QSR Drive-Thru NNN Investment 2026",
    href: "/blog/tampa-bay-qsr-drive-thru-nnn-investment-2026",
    description: "How dollar store NNN compares to QSR drive-thru pads on cap rates and credit quality.",
  },
  {
    title: "Tampa Bay Pharmacy & Drugstore NNN Investment 2026",
    href: "/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
    description: "Another defensive retail NNN category and how it stacks up against dollar store product.",
  },
  {
    title: "Tampa Bay Convenience Store & Fuel NNN Investment 2026",
    href: "/blog/tampa-bay-convenience-store-fuel-retail-nnn-investment-2026",
    description: "C-store NNN deals in Tampa Bay and how they compare to dollar store cap rates.",
  },
  {
    title: "Florida 1031 Exchange Guide for CRE Investors",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Dollar store NNN is a top replacement property for Florida 1031 exchanges — here is the process.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Underwriting dollar store NNN deals: cap rate, cash-on-cash, and long-term return analysis.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "Owner-user financing options for investors who want to buy the building and occupy it.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What the due diligence process looks like when acquiring a net-lease retail asset.",
  },
  {
    title: "Tampa Bay Retail Market Q2 2026",
    href: "/blog/tampa-bay-retail-market-q2-2026",
    description: "The broader Tampa Bay retail vacancy and rent data that supports dollar store NNN fundamentals.",
  },
];

export default function TampaBayDollarStoreNNNInvestment2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Dollar Store NNN Investment 2026", href: "/blog/tampa-bay-dollar-store-nnn-investment-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&h=900&fit=crop"
        title="Tampa Bay Dollar Store NNN Investment 2026"
        subtitle="Dollar General is opening 450 stores this year backed by BBB-rated corporate leases. Tampa Bay&apos;s dollar store NNN market is trading at 6.75–7.05% caps — here is what passive investors need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          For passive investors looking to step out of active property management while keeping their capital in real estate, dollar store NNN has been one of the most quietly reliable asset classes of the past decade. In Tampa Bay specifically, the combination of strong suburban population growth, Dollar General&apos;s aggressive 2026 expansion, and a retail vacancy rate sitting at 3.8% — nearly two full points below the national average — creates a favorable backdrop for investors evaluating single-tenant net-lease opportunities in the $1.5 million to $3.5 million price range.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This guide covers how dollar store NNN deals are priced in Tampa Bay right now, what the lease structure actually means for landlords, what to look for in due diligence, and how this asset class compares to other passive NNN options available in the market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Dollar Store NNN Properties Attractive to Passive Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The appeal of dollar store NNN is straightforward: investment-grade credit tenant, absolute NNN lease structure, long initial term, and a price point accessible to private investors who are not buying institutional-grade mall anchors or big-box distribution centers. Dollar General — the dominant player in the category — carries a BBB credit rating from S&P and Baa2 from Moody's, which is the same investment-grade tier as many grocery chains and pharmacy operators. The company operates over 19,000 stores nationally and has been expanding consistently through economic cycles, including through 2008, 2020, and the current period of elevated interest rates.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Under Dollar General&apos;s standard absolute NNN lease, the tenant pays base rent plus all property taxes, building insurance, and maintenance — including roof and structure in most corporate leases. The landlord&apos;s sole responsibility is cashing the monthly check. For investors coming out of residential rentals or smaller retail properties where they are managing tenants, collecting CAM, handling maintenance calls, and dealing with lease renewals, the contrast is stark. Dollar store NNN is as close to truly passive real estate ownership as the market offers.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a deeper explanation of how triple-net lease structures work — and what the difference between NNN, absolute NNN, and modified gross means in practice — see our guide to <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">triple-net leases and why investors use them</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Dollar General&apos;s 2026 Expansion Doing to the Tampa Bay Market?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dollar General announced plans to open approximately 450 new stores in 2026 — more than one per day — and over 80% of those new builds will use the company&apos;s expanded 8,500 to 9,500-square-foot format. That is a meaningful shift from the older 7,400-square-foot prototypes that still make up a significant portion of Dollar General&apos;s national portfolio. The larger format is designed to accommodate a broader merchandise mix, including more refrigerated food and health products, and it is intended to position Dollar General more directly against small-format grocery and discount general merchandise operators.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Tampa Bay, that expansion is concentrated in the growth corridors where Dollar General follows rooftops: the Pasco County I-75 and SR-54 corridors serving Wesley Chapel, Zephyrhills, and Land O&apos; Lakes; the Hillsborough County SR-60 and Brandon/Riverview growth zones; and the eastern Polk County towns along US-98. These are the same areas where residential developers have been most active and where the retail real estate supply has not kept pace with population growth. Dollar General&apos;s playbook of targeting suburban and exurban markets where households have limited big-box alternatives is exactly the density profile these Tampa Bay growth corridors offer.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, this expansion creates two opportunities. First, sale-leaseback deals: Dollar General periodically sells properties it built or acquired to investors through sale-leaseback transactions, delivering fresh 15-year NNN leases on new construction. Second, the secondary market for existing stores with shorter remaining lease terms — properties that still have eight to twelve years of term remaining and trade at wider cap rates than new construction, which can work well for investors with a yield-first priority who are comfortable managing lease expiration risk a decade out.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Cap Rates Are Dollar Store NNN Properties Trading at in Tampa Bay Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dollar General NNN properties in Tampa Bay are trading at approximately 6.75% to 7.05% going-in cap rates as of Q1–Q2 2026. New construction with 15-year terms commands the tighter end of that range — 6.75% to 6.90% — while older properties or locations with shorter remaining term trade closer to 7.00% to 7.25%. Dollar Tree and Family Dollar properties, operating under the same corporate umbrella following their 2015 merger, tend to trade at 7.0% to 7.5% because of the ongoing Family Dollar store rationalization program that has created uncertainty about specific locations&apos; long-term futures.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          To put those cap rates in context: QSR drive-thru pads in Tampa Bay — McDonald&apos;s, Chick-fil-A, and Raising Cane&apos;s — are trading at 5.0% to 5.75%, meaning investors are accepting less yield for the premium ground-lease structure and dominant brand traffic those tenants provide. Pharmacy and drugstore NNN deals in Tampa Bay have compressed significantly and now often trade below 6.0% for Walgreens and CVS with long remaining terms. Dollar stores occupy a middle tier: stronger credit than a franchisee-operated QSR or auto service tenant, but not as demand-compressed as ground-lease fast food. The result is a cap rate that provides real yield for passive investors who do not need to stretch into riskier tenant categories.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a full comparison of Tampa Bay&apos;s NNN cap rates across tenant categories, see our <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rate guide for 2026</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Tampa Bay&apos;s Retail Market Support Dollar Store NNN Fundamentals?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s retail vacancy rate was 3.8% in Q1 2026 — significantly below the 5.9% national average and among the tightest readings in the Southeast. In core suburban corridors like South Tampa, Westshore, and the Brandon Town Center area, vacancy runs below 2%. That structural tightness matters for dollar store investors because it speaks to the health of the underlying retail market their assets are embedded in.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A dollar store NNN investment is not just a lease — it is a piece of real estate. If Dollar General ever vacates at lease expiration and declines to renew, the landlord needs to re-lease a 9,000-square-foot retail box. In a Tampa Bay market where retail vacancy is below 4% and limited new supply is coming online, re-leasing that space to a hair salon, urgent care clinic, dollar store competitor, or small-format grocery is a realistic outcome — and in some corridors, the re-leasing rent potential exceeds what Dollar General was paying. That re-leasing optionality is much weaker in declining retail markets, which is one reason why Tampa Bay&apos;s suburban growth story matters even for what appears to be a purely passive, credit-backed investment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Population growth across Hillsborough, Pasco, and Polk counties has added over 400,000 residents to the Tampa Bay metro since 2020. Each new household represents a new unit of demand for the everyday consumables — cleaning products, food staples, over-the-counter health items — that dollar stores supply. The strongest performers in the Tampa Bay Dollar General portfolio tend to be stores in secondary suburban locations that are the most convenient option for their immediate trade area, not in dense urban corridors where competition is higher.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tampa Bay Investors Know About Dollar Store NNN Due Diligence?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dollar store NNN deals require less intensive due diligence than multi-tenant retail or office acquisitions, but there are specific items that distinguish a strong acquisition from one you will regret.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Lease abstract review.</strong> The difference between an absolute NNN lease and a standard NNN lease is significant and is determined by the specific lease language, not the marketing materials. Before closing, have the lease abstract reviewed to confirm roof, structure, and parking lot responsibility. Some older Dollar General leases have carve-outs that shift certain capital expenditures back to the landlord.
          </li>
          <li>
            <strong>Remaining term and renewal structure.</strong> A property with 15 years of term and 10% bumps every five years has a very different long-term return profile than one with four years remaining and flat rent. Model both scenarios — renewal at current rent and renewal at market rent — to understand your yield across the hold period.
          </li>
          <li>
            <strong>Location quality and trade area analysis.</strong> Not all dollar stores are equal. A store in a growing Pasco County subdivision on a signalized corner with limited nearby competition is a different risk profile than one in a declining strip center in a stagnant submarket. Drive the site, understand the trade area, and look at nearby competitive development before committing.
          </li>
          <li>
            <strong>Environmental history.</strong> Older sites — particularly those that were previously gas stations, dry cleaners, or industrial uses before being developed as retail — can carry environmental conditions that a Phase I environmental site assessment will catch. Never skip the Phase I on any commercial acquisition.
          </li>
          <li>
            <strong>Family Dollar flag check.</strong> If you are evaluating a Dollar Tree or Family Dollar property specifically, verify that the location is not on the company&apos;s announced or rumored closure list. Dollar Tree has been rationalizing its Family Dollar portfolio aggressively, and a Family Dollar NNN investment in a borderline location carries materially higher vacancy risk than a Dollar General.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a full walkthrough of the commercial due diligence process, see our guide on the <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence timeline</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is a Dollar Store NNN a Good 1031 Exchange Replacement Property in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dollar store NNN properties are among the most commonly used 1031 exchange replacement properties in Florida, and for good reason. The combination of investment-grade credit, absolute NNN lease structure, and price points in the $1.5 million to $3.5 million range makes them accessible to investors who are exchanging out of residential investment portfolios, small apartment buildings, or smaller commercial assets and want to step into a truly passive structure without dramatically overshooting their equity position.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 45-day identification window and 180-day closing requirement for a 1031 exchange can be tight for some net-lease acquisitions if the deal is competitive, but dollar store NNN deals close on relatively predictable timelines — typically 30 to 45 days for a cash buyer and 45 to 60 days with financing. Working with a broker who has current inventory and understands the net-lease market before you start the clock on your exchange is essential. If you are selling a residential investment property in Tampa Bay and want to identify replacement dollar store NNN properties before closing your sale, I can help you build a shortlist. For a full explanation of how the Florida 1031 exchange process works, see our <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">Florida 1031 exchange guide</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors who need to move quickly on a sale before identifying a replacement -- or who have decided not to exchange and want a fast, clean disposition -- our{" "}
          <Link href="/services/dispositions" className="text-accent underline">commercial property disposition services</Link>{" "}
          can help you execute a fast, straightforward sale of your investment property or land.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do Dollar Store NNN Deals Compare to Other Passive NNN Options in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s NNN market offers passive investors a wide range of tenant categories and risk profiles. Dollar store NNN sits in a specific part of the risk-yield spectrum that is worth understanding clearly before committing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At the lower-yield, higher-credit end of the market, QSR ground leases — McDonald&apos;s, Chick-fil-A, Raising Cane&apos;s — trade at 5.0% to 5.75% with stronger brand recognition and ground-lease structures that give the landlord additional flexibility at expiration. Pharmacy and drugstore NNN deals for Walgreens and CVS trade similarly or tighter, though the long-term store rationalization story at both chains has made some investors cautious about lease expiration risk at underperforming locations.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At a similar yield to dollar stores, auto service NNN — AutoZone, O&apos;Reilly, Advance Auto Parts — offers comparable investment-grade credit and has the added benefit of a product category (automotive parts and maintenance) that is genuinely insulated from e-commerce pressure. Childcare NNN properties tend to offer slightly wider cap rates with somewhat less credit certainty given the franchisee-level guarantee common in that sector. Dollar store NNN&apos;s specific advantage over most of these categories is Dollar General&apos;s direct corporate guarantee on the absolute NNN lease — you are not dealing with a franchise operator — combined with the largest store network in the country, which gives Dollar General unmatched data on which markets its stores should stay in long-term.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding where dollar store NNN fits within the broader Tampa Bay market context is important before you make an acquisition decision. I review the full suite of net-lease options with every investor I work with — cap rates, lease structures, re-leasing risk, and how specific properties underwrite — so you can make a confident decision with real market data rather than marketing language.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

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
              Barrett has 23+ years of commercial real estate experience across Tampa Bay. He works with passive investors evaluating
              net-lease acquisitions, 1031 exchange buyers sourcing replacement properties, and business owners weighing lease-versus-own
              decisions with real market data.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Looking for Dollar Store NNN or Passive Investment Properties in Tampa Bay?"
        body="Whether you are evaluating a specific dollar store NNN deal, sourcing replacement properties for a 1031 exchange, or building a net-lease portfolio in Tampa Bay — I can help. Call or message Barrett Henry at REMAX Collective."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
