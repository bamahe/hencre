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
 * Blog: Tampa Bay Self-Storage CRE Investment 2026
 * What investors need to know about self-storage as a commercial
 * asset class in the Tampa Bay market as supply stabilizes in 2026.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Self-Storage CRE Investment Guide 2026 | HenCRE",
  description:
    "Self-storage is one of the most resilient commercial real estate asset classes — and Tampa Bay's population growth keeps demand structurally strong. Here is what investors need to know in 2026 as Sunbelt oversupply fades.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-self-storage-cre-investment-2026" },
  openGraph: {
    title: "Tampa Bay Self-Storage CRE Investment Guide 2026",
    description:
      "Tampa Bay's self-storage market is stabilizing after Sunbelt oversupply pressure. Here is what the asset class is, why it performs so consistently, and what investors should know before buying in 2026.",
    url: "https://hencre.com/blog/tampa-bay-self-storage-cre-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Self-storage facility exterior in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What makes self-storage a commercial real estate investment?",
    answer:
      "Self-storage facilities are commercial income-producing properties — they generate rent from individual storage unit leases and trade on capitalization rates just like office buildings, retail centers, or industrial warehouses. Unlike residential rental properties, self-storage tenants sign month-to-month agreements, which means rents can be adjusted quickly as market conditions change. That flexibility, combined with low per-unit operating costs and minimal landlord obligations compared to other property types, is what draws investors to the sector. Self-storage is also recession-resilient: demand tends to hold during economic downturns because the life events that drive storage needs — job loss, divorce, downsizing, death of a family member — actually increase during difficult periods.",
  },
  {
    question: "How does Tampa Bay's population growth affect self-storage demand?",
    answer:
      "Tampa Bay consistently ranks among the fastest-growing metro areas in the United States, and population growth is the strongest single driver of self-storage demand. Household formation — people moving into new homes — generates immediate storage needs during the transition. Retirees downsizing from larger homes need space for possessions that no longer fit. Renters in apartment-heavy submarkets like downtown Tampa, St. Petersburg, and Channelside lack garage and attic space, making off-site storage a practical necessity. Small businesses and sole proprietors use self-storage for seasonal inventory overflow, equipment, and document storage. Every new household and business that arrives in Tampa Bay represents a potential storage tenant — and the region has been adding them at a rate that few other markets in the country match.",
  },
  {
    question: "What are typical self-storage cap rates in Tampa Bay in 2026?",
    answer:
      "Cap rates for stabilized, well-located self-storage assets in Tampa Bay generally range from 5.5% to 7.0% in 2026, depending on asset quality, occupancy, lease-up maturity, facility age, and submarket position. Facilities operated by or affiliated with national brands — Public Storage, CubeSmart, Extra Space Storage — tend to trade at the tighter end of that range because investors price in the operational expertise and brand-driven demand those operators bring. Smaller mom-and-pop facilities, particularly those with significant value-add potential through technology upgrades, climate control additions, or rebranding, can trade at 7% or above, offering better going-in yields for investors willing to take on the operational work of improving them. Interest rate movements in 2025 and 2026 have kept financing costs elevated, which has modestly widened cap rates compared to the 2021–2022 peak, creating more rational entry points for buyers.",
  },
  {
    question: "Is now a good time to buy self-storage in Tampa Bay?",
    answer:
      "The self-storage sector in Sunbelt markets including Tampa Bay absorbed meaningful new supply between 2022 and 2025, which put downward pressure on occupancy and street rents in some submarkets. That supply wave is now largely through the pipeline — construction starts nationally have slowed sharply as higher financing costs made speculative development less viable. For buyers, the consequence is a market where occupancy is stabilizing, rents are recovering, and sellers who bought or built at 2021–2022 valuations may be more motivated than they were two years ago. That combination — supply pressure fading, seller motivation improving, and long-run demand drivers intact — describes an environment where patient buyers with strong underwriting can find opportunities that would not have existed when the sector was trading at compressed 4% and 5% cap rates.",
  },
  {
    question: "What should I look for when evaluating a self-storage facility for purchase?",
    answer:
      "The due diligence checklist for a self-storage acquisition differs from other commercial property types in a few important ways. First, review the unit mix thoroughly — climate-controlled units command 15% to 30% premiums over non-climate units and are in higher demand in Florida's heat and humidity, so a facility with no climate-controlled inventory is both a risk and a value-add opportunity. Second, analyze rent rolls at the unit level: street rents (what you charge new tenants) and in-place rents (what existing tenants pay) often diverge significantly in stabilized facilities, and understanding that gap tells you how much organic rent growth is embedded in the portfolio without signing new leases. Third, assess the technology stack — facilities using modern online rental platforms, automated gate access, and digital marketing for lease-up outperform older properties with manual processes. Finally, examine the competitive radius: how many square feet of competing storage exist within a three- to five-mile drive, what are they charging, and how full are they? Submarket saturation is the single biggest risk factor in any self-storage underwriting.",
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
          name: "Tampa Bay Self-Storage CRE Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-self-storage-cre-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Self-Storage CRE Investment Guide 2026",
      description:
        "What investors need to know about self-storage as a commercial asset class in Tampa Bay as Sunbelt oversupply pressure fades and the market stabilizes in 2026.",
      datePublished: "2026-08-02",
      dateModified: "2026-09-02",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-self-storage-cre-investment-2026",
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
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "A framework for underwriting self-storage acquisitions: NOI, cap rate, and cash-on-cash return basics.",
  },
  {
    title: "What Is a Triple-Net (NNN) Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "Self-storage is structured differently from NNN retail, but understanding net lease fundamentals helps contextualize both.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Selling a self-storage facility? A 1031 exchange can defer capital gains while repositioning into a new property.",
  },
  {
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "How self-storage cap rates compare to multifamily pricing in the same Tampa Bay market.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step guide to what due diligence looks like on a commercial acquisition in Florida.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett Henry helps buyers and sellers execute commercial investment transactions across Tampa Bay.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "Owner-users can finance a self-storage acquisition with below-market fixed rates through SBA 504.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "The core evaluation framework for any income-producing commercial property in Florida.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "How self-storage cap rates compare to single-tenant net lease yields across Tampa Bay.",
  },
  {
    title: "Selling Tenant-Occupied Investment Property in Florida",
    href: "/blog/selling-tenant-occupied-investment-property-florida",
    description: "Key considerations when marketing a leased or occupied self-storage facility for sale.",
  },
];

export default function TampaBaySelfStorageCREInvestment2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Self-Storage CRE Investment 2026", href: "/blog/tampa-bay-self-storage-cre-investment-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
        title="Self-Storage CRE in Tampa Bay: Investor Guide 2026"
        subtitle="Tampa Bay adds residents faster than almost any market in the country — and every new household and business that arrives is a potential storage tenant. Here is what the self-storage asset class is, how it performs, and what investors need to know before buying in 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Among the commercial real estate asset classes that have held investor interest through multiple market cycles, self-storage stands out for a simple reason: it performs well in almost every economic environment. When people are prosperous they buy things and need somewhere to put them. When they are struggling they downsize, move in with family, or navigate life transitions that generate storage needs. Tampa Bay — one of the fastest-growing metro areas in the United States — layers a structurally strong demand environment on top of those national dynamics, making self-storage worth understanding whether you are a first-time commercial investor, a seasoned portfolio operator, or a business owner sitting on a facility you are thinking about selling.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Self-Storage as a Commercial Real Estate Asset Class?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Self-storage facilities are income-producing commercial properties. They generate rent from individual storage unit leases — typically month-to-month agreements — and are valued on the same capitalization rate framework used for any other commercial property type. Net operating income divided by the purchase price equals the cap rate; that single number anchors how buyers, sellers, appraisers, and lenders think about facility value.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What separates self-storage from most other commercial assets is the lease structure. Because individual storage leases are month-to-month, operators can raise rents on existing tenants with relatively short notice — typically 30 days — and reprice the entire unit mix toward market rents when conditions improve. That flexibility is the inverse of what a multi-year office or industrial tenant provides. In a rising-rent environment, self-storage operators can capture market appreciation faster than landlords locked into five- or ten-year leases. In a soft market, the same structure means operators feel downward pressure faster when tenants shop competing facilities nearby.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          National operators — Public Storage, Extra Space Storage, CubeSmart, Life Storage — dominate the institutional tier of the market. But a significant share of Tampa Bay&apos;s self-storage inventory is still owned by private operators: family businesses, individual investors who bought a single facility, or regional operators running a handful of locations. That fragmented private ownership is why self-storage has historically offered value-add and acquisition opportunities that more consolidated asset classes like <Link href="/commercial/nnn-net-lease" className="text-accent underline">net-lease retail</Link> or <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial warehouse</Link> properties rarely provide.
        </p>

        <div className="mt-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
            alt="Self-storage facility in Tampa Bay commercial corridor"
            width={800}
            height={500}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Self-storage facilities trade on cap rates like any other commercial income property.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Does Tampa Bay Create Unusually Strong Self-Storage Demand?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Self-storage demand is driven primarily by life transitions: moving, downsizing, divorce, death of a family member, business formation, and disaster recovery. Tampa Bay experiences all of those at elevated rates compared to slower-growth markets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In-migration is the most powerful driver. Tampa Bay has consistently ranked among the top metros in the country for net population inflows, drawing residents from high-cost markets in the Northeast and Midwest, retirees moving toward Florida&apos;s climate and tax environment, and remote workers relocating for lower costs of living. Every person moving into the market — whether into a single-family home in <Link href="/markets/pasco" className="text-accent underline">Pasco County&apos;s Wesley Chapel corridor</Link>, a condo in <Link href="/markets/pinellas" className="text-accent underline">St. Petersburg</Link>, or an apartment in <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County&apos;s Channelside district</Link> — generates transitional storage needs during the move and often long-term storage needs afterward, particularly when they are downsizing from a larger home to smaller Florida square footage. For an overview of how strong this growth momentum has been across the region, see our analysis of <Link href="/blog/why-tampa-bay-cre-is-booming" className="text-accent underline">why Tampa Bay commercial real estate is booming</Link> and what the population data means for investors across asset classes.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Florida&apos;s hurricane history adds a demand driver that most other self-storage markets do not have: disaster-related storage. When storms damage homes, insurance claims take months to settle and reconstruction takes longer. Displaced families need storage for salvageable belongings during that period, generating temporary but substantial demand spikes across the region. Facilities near coastal submarkets — Pinellas County, Hillsborough&apos;s flood-prone areas, Pasco County — benefit from this demand pattern in ways that inland Midwest markets simply do not see.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Small businesses are also consistent self-storage tenants in Tampa Bay. Contractors, e-commerce operators, service businesses, and tradespeople regularly use storage units for overflow inventory, seasonal equipment, and document archives. That commercial tenant base provides a stabilizing layer of demand alongside residential customers, and it tends to be stickier — a business with tools and materials stored on-site is less likely to abruptly vacate than a household that decides to declutter.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Happened to Tampa Bay Self-Storage in 2022–2025, and Where Does the Market Stand Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Self-storage nationally — and across Sunbelt markets including Tampa Bay — saw an extraordinary construction boom between 2021 and 2024. Developers, attracted by pandemic-era occupancy records and rising rents, broke ground on new facilities at a pace the market struggled to absorb. In Tampa Bay, submarkets that were at or above 90% occupancy in 2021 saw competitive pressure from new supply as facilities delivered through 2023 and 2024, pushing vacancy up and limiting operators&apos; ability to push rents aggressively.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          By 2025, higher interest rates had effectively ended speculative self-storage development. Projects that penciled at 3.5% financing do not pencil at 6.5% financing, and the construction pipeline nationally and in Tampa Bay thinned considerably. The consequence in 2026 is a market that is working through the tail end of that supply wave: occupancies have stabilized in most Tampa Bay submarkets, street rents have stopped falling and in some corridors are recovering, and the competitive environment — while still tighter than 2021 — is returning to a more normal equilibrium.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, the practical implication is that acquisition opportunities look more realistic today than they did when sellers were holding firm at 4% and 5% cap rates. Owners who financed at peak pricing and face loan maturities or partnership pressures are more motivated than they were two years ago, and the denominator math on valuations has improved with cap rate expansion. Understanding how to <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">calculate commercial property ROI</Link> and use the <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> is the essential first step in evaluating whether a specific facility offers the return profile you are targeting.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Is Self-Storage Different from Other Commercial Real Estate Investments?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Self-storage occupies a different operating model than most commercial property types, and that distinction matters when you are comparing it to other investments in your portfolio.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>No tenant improvement obligations.</strong> Self-storage operators do not spend money building out tenant spaces. The units are concrete or steel shells with a roll-up door. There are no carpet allowances, no demising walls, no electrical improvements. That sharply reduces the capital landlords must deploy between tenants compared to office or retail.
          </li>
          <li>
            <strong>Management intensity is real.</strong> Month-to-month leases mean constant lease-up activity. Operators managing 200, 300, or 500 units are effectively running a hotel with very small rooms — revenue management, move-in/move-out tracking, lien management for delinquent tenants, and competitive pricing analysis are continuous tasks. Technology platforms (StorEdge, SiteLink, Doorloop) have automated much of this, but the operational workload is higher than a single-tenant NNN lease.
          </li>
          <li>
            <strong>Income concentration is low.</strong> Unlike an office building where one tenant vacating destroys 30% or 50% of your income, a 400-unit self-storage facility where 30 tenants leave in a month loses roughly 7.5% of its occupancy. That income diversification is a genuine risk management advantage that other commercial property types rarely match.
          </li>
          <li>
            <strong>Capital expenditures are modest but real.</strong> Roofing, gate systems, security cameras, and HVAC for climate-controlled buildings are the primary ongoing capital needs. Climate-controlled facilities have significantly higher utility costs and HVAC replacement exposure than non-climate facilities, which should be reflected in underwriting.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Comparing self-storage to a{" "}
          <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">
            triple-net retail investment
          </Link>{" "}
          or a{" "}
          <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">
            multifamily property
          </Link>{" "}
          is useful context: NNN retail offers minimal management with credit-tenant income, multifamily offers income diversification with significant tenant relations obligations, and self-storage sits somewhere between the two — more management than NNN, more income resilience than a heavily concentrated multi-tenant property. For help underwriting any commercial acquisition across these property types, the <Link href="/services/cre-valuation" className="text-accent underline">CRE valuation service</Link> can provide market-based analysis before you commit capital.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tampa Bay Self-Storage Owners Know About Selling?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you own a self-storage facility in Tampa Bay and are evaluating your exit options, the 2026 market is meaningfully different from 2021 and 2022. Institutional buyers who were paying aggressive multiples on stabilized facilities have become more disciplined as financing costs have risen. That does not mean the market is bad — it means pricing has normalized to levels where underwriting is honest rather than optimistic.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Owners who need to move quickly — because of partnership dynamics, loan maturity, health, estate planning, or simply a desire to redeploy capital — have more options than a traditional broker listing. Direct buyers and operators looking to expand their Tampa Bay footprint have been active, and off-market transactions for well-located facilities continue to close efficiently when sellers engage the right buyers directly. For owners who want a fast, certain transaction rather than a lengthy marketing process,{" "}
          the <Link href="/services/dispositions" className="text-accent underline">commercial dispositions process</Link> is worth understanding alongside a traditional brokered sale. The right exit depends on your timeline, your tax situation, and how much certainty matters to you relative to price optimization.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are holding a facility with a large embedded gain, a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">
            1031 exchange
          </Link>{" "}
          into replacement property is worth evaluating before any sale closes — the tax deferral on a multi-million-dollar commercial sale can be substantial, and Florida has favorable treatment for investors navigating this process. The <Link href="/services/dispositions" className="text-accent underline">dispositions service</Link> covers all the steps from pricing and marketing to closing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Self-Storage the Right Commercial Investment for You in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Self-storage is not a passive investment for buyers who expect to collect a check and ignore the property. It rewards operators who engage with the business — who manage pricing dynamically, who respond to competitive moves in the submarket, and who invest in the technology and curb appeal that drives online lease-up in a market where a significant share of new tenants select and rent units entirely online before ever visiting the facility.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors who are comfortable with that operating reality, Tampa Bay&apos;s combination of population growth, structural in-migration, small-business density, and improving supply dynamics makes the market worth serious attention in 2026. The supply wave that compressed returns between 2022 and 2025 is working its way through the system, and the buyers who move while seller expectations are still adjusting to the new financing reality tend to find better entry points than those who wait for the all-clear.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay, I help investors identify and evaluate self-storage acquisition targets alongside the full range of <Link href="/commercial" className="text-accent underline">commercial property types</Link> — <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial</Link>, <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>, <Link href="/commercial/office-space" className="text-accent underline">office</Link>, and <Link href="/commercial/multifamily" className="text-accent underline">multifamily</Link>. If you are trying to understand whether self-storage fits your investment criteria, or if you own a facility and are exploring your options, let&apos;s have a direct conversation about what the market looks like right now. You can also review the <Link href="/services/investment-sales" className="text-accent underline">investment sales process</Link> to understand how a commercial transaction comes together.
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
              Barrett has 23+ years of commercial real estate experience across Tampa Bay. He works with investors evaluating
              self-storage, industrial, retail, and multifamily acquisitions, and with owners navigating commercial property sales
              and exchanges.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating a Self-Storage Investment in Tampa Bay?"
        body="Whether you are underwriting your first self-storage acquisition, comparing it against other commercial asset classes, or exploring an exit from a facility you already own, I can help you understand the Tampa Bay market with real data. Contact Barrett Henry at REMAX Collective."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
