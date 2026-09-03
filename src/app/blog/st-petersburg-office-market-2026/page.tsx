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
 * Blog: St. Petersburg Office Market 2026
 * Deep-dive on downtown vs. suburban dynamics, rents, vacancy,
 * and what the $19.5M Carillon deal signals for investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "St. Petersburg Office Market 2026 | HenCRE",
  description:
    "St. Petersburg office market 2026: downtown vacancy at 9.5% while Class A suburban Carillon trades for $189/sqft. Current rents, vacancy by submarket, and what tenants and investors should know.",
  alternates: { canonical: "https://hencre.com/blog/st-petersburg-office-market-2026" },
  openGraph: {
    title: "St. Petersburg Office Market 2026",
    description:
      "Downtown St. Pete office vacancy sits at 9.5% with Class A rents at $42/sqft. ESN Group just paid $19.5M for the Carillon campus. Here is what the data means for tenants and investors.",
    url: "https://hencre.com/blog/st-petersburg-office-market-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "St. Petersburg Florida downtown skyline with office towers and waterfront",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the office vacancy rate in St. Petersburg in 2026?",
    answer:
      "Downtown St. Petersburg has a direct office vacancy rate of approximately 9.5% as of mid-2026 — among the tightest submarkets in the Tampa Bay metro. The broader Pinellas County office market sits at around 16.5%, still well above downtown but improving for four consecutive quarters. Tampa Bay overall came in at 18.2% in Q1 2026, a four-year low for the region. The divergence between downtown and suburban vacancy is the defining characteristic of the St. Pete office market right now: premium urban product is effectively full, while certain suburban corridors still carry meaningful vacancy from the post-pandemic correction.",
  },
  {
    question: "What are office rental rates in St. Petersburg in 2026?",
    answer:
      "Class A office space in downtown St. Petersburg averages approximately $42 per square foot on a full-service gross basis — a premium driven by limited supply, waterfront positioning, and consistent demand from professional services, legal, and financial tenants. Suburban Class A in the Carillon/Gateway corridor averages closer to $26 to $31 per square foot, though well-renovated product with modern amenities commands the top of that range. Class B downtown runs $30 to $36 per square foot; Class B suburban averages $22 to $28 per square foot. Rental rates across Pinellas County have grown modestly over the past two years as the market absorbed excess pandemic-era vacancy, and further rent compression is limited by the tightness now showing in the best downtown product.",
  },
  {
    question: "Is the St. Petersburg office market a good investment in 2026?",
    answer:
      "For specific product types, yes. Downtown St. Pete Class A, well-leased suburban campuses in the Carillon corridor, and medical office in high-growth residential corridors are all showing positive occupancy trends and investor interest. The $19.5 million ESN Group acquisition of Castille at Carillon — two interconnected buildings totaling 103,000 square feet at $189 per square foot — illustrates that sophisticated buyers are seeing value in suburban St. Pete office at the right basis. The caution is tenant concentration risk: single-tenant suburban buildings without strong lease term are harder to underwrite as remote-work norms continue to evolve. Multi-tenant buildings with diversified lease rolls, below-market rents, and renovation upside are the strongest value-add thesis in the current market.",
  },
  {
    question: "What types of tenants are leasing office space in St. Petersburg?",
    answer:
      "The most active office lease signers in St. Petersburg in 2026 are professional services firms — law firms, accounting practices, wealth management, and insurance — that value the walkable downtown environment and proximity to the courthouse and financial institutions. Technology companies that remained in St. Pete through the remote-work correction have largely committed to reduced but permanent footprints. Healthcare and medical office users are a growing demand source across both downtown and suburban submarkets. Financial services and fintech firms drawn by Florida's tax environment and talent pool continue to absorb Class A downtown space. In suburban markets, government contractors and defense-adjacent firms operating near MacDill Air Force Base and Carillon Park remain consistent occupiers.",
  },
  {
    question: "How does downtown St. Pete office compare to the suburbs?",
    answer:
      "Downtown St. Petersburg and its immediate waterfront office corridor are operating near full occupancy for quality product, with rents at $42 per square foot for Class A — a 60% premium over suburban Class A. The suburban Carillon and Gateway submarkets carry more vacancy (in the mid-teens percentage range) but offer more square footage per dollar, ample parking, and modern campuses that appeal to back-office and technology users. The right choice depends on your business: client-facing firms that benefit from the downtown brand and walkability should lean urban; operations-heavy users that need large contiguous floors, generous parking ratios, and lower occupancy cost belong in the suburbs. The gap in rents is large enough that suburban tenants are effectively getting a significant cost advantage — but only if the location works for their team and clients.",
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
          name: "St. Petersburg Office Market 2026",
          item: "https://hencre.com/blog/st-petersburg-office-market-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "St. Petersburg Office Market 2026",
      description:
        "Downtown St. Pete office vacancy at 9.5% with Class A rents at $42/sqft. ESN Group paid $19.5M for the Carillon campus. What the data means for office tenants and investors in Pinellas County.",
      datePublished: "2026-08-25",
      dateModified: "2026-09-03",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/st-petersburg-office-market-2026",
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
    title: "Tampa Bay Office Market Q2 2026",
    href: "/blog/tampa-bay-office-market-q2-2026",
    description: "Regional office market data for the full Tampa Bay metro — vacancy, absorption, and rent trends.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "Tampa Bay's largest office submarket: Westshore vacancy, rents, and investment outlook.",
  },
  {
    title: "St. Petersburg Commercial Real Estate 2026",
    href: "/blog/st-petersburg-commercial-real-estate-2026",
    description: "Broader overview of St. Pete CRE — retail, industrial, and mixed-use alongside office.",
  },
  {
    title: "Clearwater Office Space for Professional Services Firms",
    href: "/blog/clearwater-office-space-professional-services-firms",
    description: "Pinellas County's other major office market: what professional firms need to know about Clearwater.",
  },
  {
    title: "Sarasota Office Market Trends 2026",
    href: "/blog/sarasota-office-market-trends-2026",
    description: "How the Sarasota office market compares to St. Pete for Sun Belt investors and tenants.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to investigate before closing on any commercial acquisition in Florida.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "A practical framework for underwriting office acquisitions.",
  },
  {
    title: "Pinellas County Industrial CRE 2026",
    href: "/blog/pinellas-county-industrial-cre-2026",
    description: "The other side of Pinellas County CRE: industrial vacancy, rents, and investment outlook.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "How Barrett helps office tenants find and negotiate the right space at no cost to the tenant.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors evaluate and acquire commercial properties across Tampa Bay.",
  },
];

export default function StPetersburgOfficeMarket2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "St. Petersburg Office Market 2026", href: "/blog/st-petersburg-office-market-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="St. Petersburg Office Market 2026"
        subtitle="Downtown vacancy at 9.5%. A $19.5M suburban campus deal. Class A rents at $42/sqft in the urban core. Here is what the St. Pete office market looks like right now — and what it means if you are leasing space or evaluating an acquisition."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          On August 24, 2026, ESN Group closed on Castille at Carillon — a two-building, 103,000-square-foot office campus at 400 and 450 Carillon Parkway in St. Petersburg — for $19.5 million, or $189 per square foot. It is a modest transaction by institutional standards, but the deal captures something important about the St. Petersburg office market in mid-2026: well-located suburban product at the right basis is attracting serious capital, even as the broader national office story remains complicated.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          That transaction is the headline, but the St. Pete office market is more nuanced than any single deal. Downtown is effectively tight. Suburban submarkets are recovering unevenly. Pinellas County as a whole is outperforming the Tampa Bay metro average. And the gap between what downtown Class A commands versus what you can get in the Carillon corridor for 60 cents on the dollar is one of the more interesting arbitrage opportunities in the Tampa Bay CRE market right now.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the St. Petersburg Office Market Look Like Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s office market recorded its lowest overall vacancy rate in four years in Q1 2026, coming in at 18.2% — down 110 basis points year-over-year. Pinellas County, which includes St. Petersburg, performed better than the metro average, with vacancy improving to approximately 16.5%. But those aggregate numbers obscure the more interesting story at the submarket level.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Downtown St. Petersburg stands apart. With approximately 1.7 million square feet of office inventory, downtown carries a direct vacancy rate of roughly 9.5% — a figure that most major metro downtowns would envy in 2026. The combination of limited supply, sustained demand from professional services and financial tenants, and the genuine quality-of-place advantage that downtown St. Pete offers has kept the core submarket far tighter than suburban alternatives.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The suburban Carillon and Gateway corridors — the primary office submarkets north and east of downtown, clustered around I-275 and Ulmerton Road — tell a different story. These markets carry more vacancy, with rates in the mid-teens, reflecting the office market correction that hit suburban product harder than urban core across virtually every Sun Belt metro. Positive net absorption over the past four quarters signals recovery is underway, but it is uneven, and certain buildings continue to struggle with large blocks of availble space left behind by tenants who downsized after 2020.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The <Link href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">broader Tampa Bay office market</Link> context is helpful here: the metro recorded four consecutive quarters of positive net absorption entering mid-2026, which is a meaningful reversal from the correction years of 2021 through 2023. St. Petersburg is outperforming the metro average in part because Pinellas County has a higher concentration of professional services tenants relative to large corporate back-office users, who have been more aggressive in right-sizing their footprints.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does Downtown St. Petersburg Office Space Cost?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Class A office space in downtown St. Petersburg commands approximately $42 per square foot on a full-service gross basis — the highest rents in Pinellas County and among the highest in the Tampa Bay metro outside of Westshore and the Water Street district. The premium reflects a genuine scarcity: the downtown inventory is largely fixed, demand from law firms, wealth management, and professional services remains consistent, and the walkable waterfront environment is genuinely difficult to replicate in the suburbs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Class B downtown space runs $30 to $36 per square foot gross, with meaningful variation based on floor, condition, and parking access — parking is the chronic constraint in downtown St. Pete, and buildings with structured parking attached command a premium over those relying on surface lots or public garages. For smaller tenants (2,000 to 5,000 square feet), downtown options include creative office buildouts in the Central Avenue corridor and mixed-use buildings in the Edge District and Grand Central area, which can offer below-market rents with shorter lease terms as landlords fill out new inventory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Compare that to the suburban landscape: Class A in the Carillon/Gateway corridor averages $26 to $31 per square foot. That gap — roughly $11 to $16 per square foot per year in occupancy cost — is real money for growing firms. A 5,000-square-foot tenant saves $55,000 to $80,000 per year choosing Carillon over a comparable downtown floor. Whether that trade makes sense depends entirely on what the downtown address is worth to the business.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Did the $19.5M Carillon Sale Signal for Suburban Office?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The ESN Group acquisition of Castille at Carillon — two interconnected buildings linked by a covered walkway at 400 and 450 Carillon Parkway — closed at $19.5 million, or $189 per square foot. For context, that is a meaningful discount to replacement cost for Class A suburban office product, and it reflects a buyer who has done the math on absorption, lease-up, and the longer-term recovery story for Carillon Park as one of Pinellas County&apos;s most established suburban office submarkets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Carillon Park sits in one of the more strategically positioned suburban office nodes in the Tampa Bay region: close to I-275 for connectivity to downtown Tampa and St. Pete, adjacent to some of the strongest residential growth corridors in Pinellas County, and near the Gateway area&apos;s established amenity base of restaurants, hotels, and services. For the right tenant — professional services, technology, or government-adjacent firms — it offers a credible alternative to downtown at a fraction of the occupancy cost.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The $189-per-square-foot purchase price points to a buyer underwriting at a going-in cap rate that would work only if the buyer expects meaningful occupancy improvement from current levels — which is consistent with what absorption data is showing. Four consecutive quarters of positive net absorption in Pinellas County suggests the correction floor has been reached, and competitively priced, well-maintained suburban product is steadily leasing up. The Carillon deal fits that thesis.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors watching this transaction: the signal is not that all suburban St. Pete office is investable at any price. The signal is that well-located suburban campuses with identifiable tenanting strategies, at a basis reflecting the current market rather than peak-cycle valuations, are attracting sophisticated capital. Buildings in secondary suburban locations without that story — or requiring significant capital expenditure to compete for tenants — are a different underwriting conversation. Run a full <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence process</Link> and model your <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">return on investment</Link> at current rents before assuming the Carillon deal validates the entire suburban segment.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Who Is Leasing Office Space in St. Petersburg in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most active office tenant categories in St. Petersburg in mid-2026 reflect both the market&apos;s established strengths and its evolution:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Professional services.</strong> Law firms, accounting practices, wealth management, and insurance firms remain the backbone of downtown St. Pete office demand. These tenants value the walkable core, proximity to the courthouse and financial institutions, and the brand signal that a downtown St. Pete address carries. They sign multi-year leases, are generally creditworthy, and absorb small-to-mid-size floors (2,000 to 10,000 square feet) consistently.
          </li>
          <li>
            <strong>Financial services and fintech.</strong> Florida&apos;s favorable tax environment has made St. Pete an attractive destination for financial technology and asset management firms that want proximity to the Gulf Coast lifestyle without New York or Miami occupancy costs. Several firms that relocated or opened satellite offices in St. Pete through 2022 to 2024 have committed to permanent footprints, signing leases that will extend into the early 2030s.
          </li>
          <li>
            <strong>Healthcare and medical office.</strong> Medical office demand is one of the most consistent drivers across both downtown and suburban submarkets. Physician practices, behavioral health providers, and insurance-adjacent healthcare administrators are active tenants in first-floor retail/office conversions in the urban core and in suburban office buildings near major hospital systems. This demand is relatively insulated from remote-work trends and tends to produce long, stable leases.
          </li>
          <li>
            <strong>Government and defense contractors.</strong> The proximity to MacDill Air Force Base in Tampa generates meaningful demand for office space on the Pinellas side from government contractors, engineering firms, and defense-adjacent service providers. Carillon Park in particular has a long history of hosting this tenant category, which values the I-275 access, suburban office campus format, and parking availability.
          </li>
          <li>
            <strong>Technology firms with hybrid footprints.</strong> The tech tenant story in St. Pete is one of reduction followed by stabilization. Firms that dramatically shrunk their footprints in 2021 and 2022 have largely completed their right-sizing; those that remain are largely locked into leases and in many cases considering modest expansions as in-office mandates have returned across the sector. The incremental demand from this category is real but modest — it does not drive the market, but it contributes to absorption.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Downtown St. Pete vs. Carillon: Which Is Right for Your Business?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The decision between downtown St. Pete and suburban Carillon/Gateway office space comes down to three questions: What does your address mean to clients? How many of your employees commute from where? And what does the all-in occupancy cost difference mean to your budget?
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Downtown makes sense if:</strong> Your clients visit your office regularly and the downtown environment — waterfront proximity, walkable lunch options, the visual experience of Beach Drive and the Pier District — contributes meaningfully to the impression you make. If you are recruiting talent from the urban core residential market (the apartments and condos in Edge District, Old Northeast, and Kenwood), downtown minimizes commute time. And if your floor plate needs are 2,000 to 8,000 square feet, downtown has the best density of Class A and B inventory to choose from.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Suburban Carillon or Gateway makes sense if:</strong> Your operations need 10,000 to 40,000 square feet or more of contiguous space. Your team is dispersed across Pinellas and Hillsborough County and car commutes are the norm — Carillon&apos;s I-275 access is a genuine advantage for a workforce coming from multiple directions. Your budget is constrained and the $11 to $16 per square foot per year cost differential between downtown Class A and suburban Class A is material to your financial model. And if your clients are institutional or government rather than individual consumers, the downtown address premium may not be worth the cost.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a full picture of Pinellas County commercial real estate, explore the <Link href="/markets/pinellas" className="text-accent underline">Pinellas County market guide</Link> or review our analysis of <Link href="/blog/st-petersburg-commercial-real-estate-2026" className="text-accent underline">St. Petersburg commercial real estate</Link> across all property types.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Office Tenants Know About Leasing in St. Petersburg?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The leverage balance has shifted somewhat in tenants&apos; favor compared to the 2018 to 2020 peak — but unevenly. Downtown Class A is genuinely tight, and landlords there are not offering the concession packages they were during the correction years. Suburban product still has enough vacancy that motivated landlords are offering meaningful tenant improvement allowances and free rent to attract quality tenants.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Start your search 9 to 12 months out.</strong> Downtown availability is limited enough that waiting until you are under immediate pressure significantly reduces your options. If you know your lease expires in mid-2027, the search should begin in mid-2026 to capture the best opportunities before they are taken.
          </li>
          <li>
            <strong>Model the full occupancy cost, not just base rent.</strong> Full-service gross leases (common downtown) include operating expenses in the base rent but often carry expense stops or base year provisions that expose tenants to increases above a threshold. Modified gross and NNN structures in suburban buildings pass operating costs through more directly. Know what you are comparing before making lease decisions based on headline rent numbers.
          </li>
          <li>
            <strong>Tenant improvement allowances vary significantly by submarket.</strong> Downtown Class A landlords are offering $40 to $60 per square foot in TI for tenants with strong credit and multi-year lease commitments. Suburban landlords competing for tenants in a higher-vacancy environment are offering more — sometimes $60 to $90 per square foot or equivalent rent abatement — to attract quality long-term tenants to reposition their buildings. If your space requires significant buildout, suburban may offer meaningfully better economics on the all-in basis.
          </li>
          <li>
            <strong>Parking is non-negotiable in downtown St. Pete.</strong> Get parking ratios, garage access hours, and monthly parking costs in writing before executing any downtown lease. The downtown parking environment is constrained, and tenants who assumed adequate parking was part of the deal have been surprised. In suburban markets, parking ratios of 4 to 5 per 1,000 square feet are standard; downtown, ratios of 2 to 3 per 1,000 square feet are common, with additional reserved spaces billed separately.
          </li>
          <li>
            <strong>Use a tenant representative.</strong> In any office search — downtown or suburban — a <Link href="/services/tenant-representation" className="text-accent underline">tenant representative</Link> costs you nothing (the fee is paid by the landlord) and brings market knowledge about off-market availabilities, landlord flexibility, and comparable deal economics that you cannot access independently. In a market with this much variation between submarkets and buildings, local representation is the highest-leverage thing a tenant can do.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Is St. Petersburg Office a Good Investment Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The differentiated answer: yes for specific product types at the right basis, no for everything. The categories where the investment thesis is sound:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Downtown Class A, stabilized.</strong> Fully leased or near-fully leased downtown assets trade at cap rates in the 6.0% to 7.5% range, reflecting both the genuine scarcity of quality downtown inventory and the investor uncertainty that still hangs over the office asset class nationally. For buyers who have underwritten the tenant roster carefully and are comfortable with the lease rollover timeline, stabilized downtown St. Pete is one of the more defensible office investment stories in the Sun Belt.
          </li>
          <li>
            <strong>Suburban value-add with identified lease-up strategy.</strong> The Carillon deal is the template: below-replacement-cost basis, a submarket showing positive absorption, and a clear strategy for leasing vacant space to the government, healthcare, and professional services tenants that historically occupied the corridor. This thesis requires patient capital and a realistic view of the lease-up timeline — 24 to 48 months in the current market.
          </li>
          <li>
            <strong>Medical office and healthcare-adjacent.</strong> Medical office in St. Pete is performing above the broader office market, with lower vacancy and more stable rent. Standalone medical buildings and the medical office component of larger mixed-use or campus developments near Bayfront Health, St. Anthony&apos;s Hospital, and the Johns Hopkins All Children&apos;s complex in the surrounding area are the most in-demand investment targets.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Categories to approach with caution: large single-tenant suburban buildings with short lease terms and no clear re-tenanting strategy; buildings with deferred capital expenditure on mechanical systems and life safety in an environment where tenants have become more selective about building quality; and any asset where the underwriting depends on rent growth assumptions not supported by current submarket absorption data.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on St. Petersburg Office in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The St. Petersburg office market in mid-2026 is a study in divergence: downtown Class A is tight, well-priced, and attracting consistent demand from the professional services and financial tenants that have always driven it. Suburban Carillon and Gateway are recovering but uneven — the absorption data is encouraging, and the ESN Group deal suggests institutional capital is paying attention, but individual building performance varies widely depending on condition, lease rollover, and management quality.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants, the opportunity is in suburban product right now: the cost differential relative to downtown is large, landlords in higher-vacancy buildings are motivated to offer meaningful concession packages, and positive absorption trends suggest the supply overhang is being worked through. For investors, the same dynamic applies — the right suburban assets at the right basis offer value that was not available three years ago, but the analysis has to be building-specific rather than submarket-level.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience across Tampa Bay, I represent office tenants and investors throughout Hillsborough, Pinellas, Pasco, and Manatee Counties. Whether you are evaluating a lease in downtown St. Pete, assessing a suburban acquisition in the Carillon corridor, or trying to understand how the St. Pete office market fits into a broader investment strategy, local knowledge makes the difference. Let&apos;s talk about your situation.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            St. Petersburg Office Market — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial market. He helps office tenants find and negotiate space and assists investors in evaluating office acquisitions throughout Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
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
        heading="Looking to Lease or Invest in St. Petersburg Office Space?"
        body="I help office tenants navigate the downtown vs. suburban decision and assist investors in evaluating acquisitions across the Pinellas County office market. Whether you are signing your first lease or underwriting a campus acquisition, let&apos;s talk."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
