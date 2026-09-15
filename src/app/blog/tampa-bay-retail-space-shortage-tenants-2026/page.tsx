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
 * Blog: Tampa Bay Retail Space Shortage — Tenant's Guide 2026
 * Sub-4% vacancy; how tenants find space in an undersupplied market.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Retail Space Shortage: A Tenant's Guide to Leasing in a Sub-4% Market (2026) | HenCRE",
  description:
    "Tampa Bay retail vacancy sits at 3.8% — well below the national 6% average — and sub-2% in South Tampa and Westshore. This guide shows retail tenants how to find space, negotiate leases, and compete in one of Florida's tightest retail markets.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-retail-space-shortage-tenants-2026" },
  openGraph: {
    title: "Tampa Bay Retail Space Shortage: A Tenant's Guide (2026)",
    description:
      "With Tampa Bay retail vacancy at 3.8% — below the national 6% average and under 2% in key submarkets — finding quality retail space requires strategy, speed, and the right broker. Here is how tenants win.",
    url: "https://hencre.com/blog/tampa-bay-retail-space-shortage-tenants-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Busy retail storefront strip center in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is Tampa Bay's retail vacancy rate in 2026?",
    answer:
      "Tampa Bay's overall retail vacancy rate was approximately 3.8% as of mid-2026, according to Cushman & Wakefield market data — well below the national average of 6.0%. In high-demand corridors like South Tampa and Westshore, vacancy dropped below 2%, meaning fewer than two in every hundred retail spaces were available at any given time. The tightness reflects a combination of strong population-driven demand, limited new construction of strip centers and inline retail, and consistent absorption of space as fast as it becomes available.",
  },
  {
    question: "Which Tampa Bay submarkets have the tightest retail availability?",
    answer:
      "South Tampa and the Westshore corridor are the tightest, with vacancy reported below 2%. These submarkets benefit from dense daytime office and evening residential populations, high household incomes, and a limited supply pipeline — the zoning and land costs make new retail construction difficult. Dale Mabry Highway from Carrollwood south to Gandy, the SoHo / Hyde Park Village area, and the Westshore Business District are essentially full. Moderately tight but slightly more available: Brandon and the US-301 / Riverview corridor in suburban Hillsborough, and Pinellas submarkets along US-19 and Ulmerton Road. Wesley Chapel and Pasco County offer the most availability, though lease rates there reflect the lower traffic and longer drive times.",
  },
  {
    question: "How long does it take to find retail space in Tampa Bay in 2026?",
    answer:
      "In the tightest submarkets — South Tampa, Westshore, Hyde Park — retailers should plan for a six to twelve month search before execution. Well-priced, well-located spaces often receive multiple inquiries within days of becoming available, and some never reach public listing because existing tenant networks and broker relationships fill them first. In suburban submarkets like Brandon, Wesley Chapel, or Clearwater, a four to six month search is more realistic for most users. Restaurant, medical, and drive-through users requiring specialized infrastructure face longer timelines because of the limited universe of qualifying spaces.",
  },
  {
    question: "Can retail tenants still negotiate lease terms in Tampa Bay's tight market?",
    answer:
      "Yes — but the window is narrow and landlord-specific. In the sub-2% submarkets, landlords hold significant leverage and concession packages are minimal compared to 2020 and 2021. However, tenants with strong credit, a proven concept, and lease terms of five or more years still negotiate rent abatement (free rent), tenant improvement allowances, and renewal options. The key is knowing which landlords are motivated — owners with vacancies approaching loan maturity or with adjacent dark spaces are more flexible. Off-market conversations, which require a well-connected tenant representative, surface these opportunities before they reach the broader market.",
  },
  {
    question: "Is it better to buy or lease retail space in Tampa Bay in 2026?",
    answer:
      "For owner-users — businesses that occupy the space they own — buying is compelling in a market where rents are high and rising. Locking in occupancy cost through ownership provides protection against future lease renewals in an undersupplied market. SBA 504 financing can fund an owner-user retail purchase with as little as 10% down at fixed below-market rates, making the buy-versus-lease math favorable for creditworthy businesses. For pure retailers not interested in real estate ownership, the calculation is different: buying takes capital off the core business and requires managing a real estate asset. For most traditional retailers, leasing remains the right model — but selecting a skilled tenant representative who understands the current supply constraints is essential to securing a quality location.",
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
          name: "Tampa Bay Retail Space Shortage: A Tenant's Guide (2026)",
          item: "https://hencre.com/blog/tampa-bay-retail-space-shortage-tenants-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Retail Space Shortage: A Tenant's Guide to Leasing in a Sub-4% Market (2026)",
      description:
        "Tampa Bay retail vacancy is 3.8%, far below the national 6% average, and under 2% in South Tampa and Westshore. This guide explains how retail tenants find space, compete, and negotiate in one of Florida's most undersupplied retail markets.",
      datePublished: "2026-09-14",
      dateModified: "2026-09-14",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-retail-space-shortage-tenants-2026",
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
    title: "Tampa Bay Retail Market Q2 2026",
    href: "/blog/tampa-bay-retail-market-q2-2026",
    description: "Full Q2 2026 retail market data: vacancy, asking rents, absorption, and investment trends.",
  },
  {
    title: "Clearwater Retail Space Guide",
    href: "/blog/clearwater-retail-space-guide",
    description: "How Clearwater's retail corridors compare to Hillsborough and South Pinellas.",
  },
  {
    title: "Riverview FL Retail Leasing Guide",
    href: "/blog/riverview-fl-retail-leasing-guide",
    description: "Retail leasing conditions in Riverview and the US-301 Southeast Hillsborough corridor.",
  },
  {
    title: "Dale Mabry Corridor Commercial Real Estate 2026",
    href: "/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026",
    description: "One of Tampa Bay's most in-demand retail corridors — current conditions and availability.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "A full look at South Tampa's commercial market across retail, office, and mixed-use.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "What retail investors are paying for net-leased properties in today's market.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "How owner-users can buy retail space with as little as 10% down at fixed rates.",
  },
  {
    title: "5 Mistakes First-Time Commercial Tenants Make",
    href: "/blog/5-mistakes-first-time-commercial-tenants-make",
    description: "Common errors retail tenants make — and how to avoid them when competing for limited space.",
  },
  {
    title: "How Commercial Leases Differ from Residential",
    href: "/blog/how-commercial-leases-differ-from-residential",
    description: "Key lease provisions every retail tenant needs to understand before signing.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "How Barrett helps retail tenants find space and negotiate leases across Tampa Bay.",
  },
];

export default function TampaBayRetailSpaceShortageTenantsPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Retail Space Shortage: Tenant's Guide 2026", href: "/blog/tampa-bay-retail-space-shortage-tenants-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1600&h=900&fit=crop"
        title="Tampa Bay Retail Space Shortage: A Tenant's Guide (2026)"
        subtitle="Tampa Bay retail vacancy sits at 3.8% — far below the national 6% average, and below 2% in South Tampa and Westshore. Here is how retail tenants find space, compete, and negotiate in one of Florida's most undersupplied markets."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          If you have spent any time trying to lease retail space in Tampa Bay in 2026, you already know the frustration: the spaces you want are gone before they are publicly listed, the landlords who do have availability are not in a hurry to negotiate, and everything in your target trade area seems to be occupied. That frustration is not your imagination. With overall retail vacancy at 3.8% — nearly 40% below the national average of 6.0% — and certain prime submarkets sitting below 2%, Tampa Bay is running one of the tightest retail markets in Florida. This guide explains why, where the best opportunities remain, and what strategies give tenants the best chance of securing a quality location.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Tampa Bay Retail Vacancy So Low in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s retail shortage is the product of two forces running simultaneously: demand has grown steadily while supply has barely moved.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On the demand side, the Tampa Bay region has added well over 200,000 residents since 2020, and that population growth translates directly into retail demand — for restaurants, fitness studios, medical-adjacent retail, personal services, and daily needs. Strong household income growth in the region, driven by in-migration of higher-earning remote workers and financial services professionals, supports spending at a level that makes Tampa Bay an attractive target for national and regional retail concepts.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On the supply side, relatively little new retail has been built. Construction costs, land prices, and the lending environment have made speculative inline retail and strip center development economically difficult. Most new retail space delivered in Tampa Bay in the last several years has been either grocery-anchored centers — which fill quickly with necessity-based tenants — or pad sites built to suit for single users. The result is a market where space that opens up gets absorbed almost immediately.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Even store closure activity, which generated some incremental availability in early 2026, has not materially loosened the market. Each closure in a well-located center creates a leasing opportunity, but those spaces typically lease to the next tenant faster than the prior occupant&apos;s fixtures are cleared. For the broader market overview and data, see our{" "}
          <Link href="/blog/tampa-bay-retail-market-q2-2026" className="text-accent underline">Tampa Bay retail market Q2 2026 report</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Submarkets Have the Tightest Retail Availability Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not all submarkets are equally tight. Understanding where availability concentrates — and where it is virtually non-existent — is the first step to building a realistic search strategy.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>South Tampa and Hyde Park.</strong> Vacancy is reported below 2% in this submarket. The combination of high household incomes, walkable density, and limited developable land creates essentially no buffer inventory. Tenants targeting this area should expect a long search, above-market rents, and minimal concessions. Read more about the full commercial landscape in our{" "}
            <Link href="/blog/south-tampa-commercial-real-estate-2026" className="text-accent underline">South Tampa commercial real estate guide</Link>.
          </li>
          <li>
            <strong>Westshore Business District.</strong> The Westshore corridor — including the Westshore Plaza area and Dale Mabry south of the airport — is similarly tight. Daytime office worker density and proximity to Tampa International Airport drive consistent demand from food, beverage, and service retail. Our post on the{" "}
            <Link href="/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026" className="text-accent underline">Dale Mabry corridor</Link> covers current conditions in detail.
          </li>
          <li>
            <strong>Brandon and Southeast Hillsborough.</strong> More availability exists in suburban Hillsborough County, though the best-anchored centers along Brandon Boulevard and US-301 are filling quickly. Retailers willing to go slightly off the primary corridors will find more options and more landlord flexibility than the urban core markets. The{" "}
            <Link href="/blog/riverview-fl-retail-leasing-guide" className="text-accent underline">Riverview retail leasing guide</Link> covers the US-301 corridor in detail.
          </li>
          <li>
            <strong>Clearwater and Central Pinellas.</strong> The US-19 corridor and Gulf-to-Bay intersection areas in Clearwater offer moderate availability, particularly in older strip centers that may require tenant improvement investment. See our{" "}
            <Link href="/blog/clearwater-retail-space-guide" className="text-accent underline">Clearwater retail space guide</Link> for an overview of this submarket.
          </li>
          <li>
            <strong>Wesley Chapel and Pasco County.</strong> The fastest-growing submarket in the region by population also has the most available retail, though asking rents are rising and the best-positioned centers near SR-56 and SR-54 are leasing quickly. This is the area of the market where tenants still hold meaningful negotiating leverage.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Find Retail Space That Never Gets Listed in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a sub-4% vacancy market, a large share of the best retail spaces never appear on CoStar, LoopNet, or any other public listing platform. They are filled through direct broker-to-broker or broker-to-landlord relationships before a vacancy is ever formally announced. For retail tenants without an existing broker relationship, that invisible market is essentially inaccessible.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Here is how experienced retail tenants approach a market with limited public inventory:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Start the search 12 to 18 months ahead of need.</strong> In tight submarkets, waiting until six months before you need to open is too late. A longer runway gives you the ability to wait for the right space rather than settling for what happens to be available when you are under pressure.
          </li>
          <li>
            <strong>Engage a tenant representative with established landlord relationships in your target submarket.</strong> The best retail opportunities in Tampa Bay surface through conversations with asset managers and listing brokers who have not formally activated a listing yet. A well-connected tenant representative hears about these spaces first. Their commission is paid by the landlord — not by you.
          </li>
          <li>
            <strong>Be ready to move quickly.</strong> When a quality space in a tight submarket becomes available, multiple parties often hear about it simultaneously. Having your business plan, credit package, and decision-making process organized in advance — so you can execute a Letter of Intent within 48 to 72 hours of first viewing — is a genuine competitive advantage.
          </li>
          <li>
            <strong>Consider the second ring of your target trade area.</strong> If a specific intersection or center is full, the next closest qualifying location may offer more availability and more landlord flexibility. A tenant representative can map your trade area realistically and surface alternatives you may not have considered.
          </li>
          <li>
            <strong>Look at build-to-suit and ground lease options for larger users.</strong> Some developers and landowners in suburban Tampa Bay are open to build-to-suit arrangements — constructing a space to a tenant&apos;s specifications — when the tenant&apos;s credit and concept warrant the investment. This path requires more lead time (18 to 24 months) but produces a purpose-built space in a location of your choosing.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Retail Tenants Know Before Signing a Lease in a Tight Market?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tight market conditions can pressure tenants into signing leases that carry terms they would not accept in a balanced market. Here are the provisions that matter most when you are leasing retail space in a sub-4% vacancy environment:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>CAM charges and caps.</strong> Common area maintenance charges — the operating expenses passed through to tenants under a gross or modified lease — can add $4 to $8 per square foot annually to your occupancy cost. Negotiating a cap on CAM increases (typically 3% to 5% per year) and an audit right protects against landlord over-billing. Our{" "}
            <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">guide to CAM charges</Link> explains what to watch for.
          </li>
          <li>
            <strong>Co-tenancy clauses.</strong> If you are locating in an anchored center, insist on a co-tenancy provision that gives you rent relief or an exit right if the anchor vacates. In a tight market, landlords resist these provisions — but for strip centers anchored by a single grocery or big-box tenant, the risk of anchor departure is real.
          </li>
          <li>
            <strong>Permitted use and exclusivity.</strong> Define your permitted use broadly enough to accommodate concept evolution, and push for an exclusivity clause that prevents the landlord from leasing adjacent space to a direct competitor. In tight centers with full occupancy, landlords have less incentive to grant these protections — but a skilled negotiator can often secure them.
          </li>
          <li>
            <strong>Buildout responsibility and TI allowance.</strong> In a tight market, tenant improvement allowances have compressed. Understand clearly what the landlord will deliver (warm shell, cold dark shell, or turn-key) and what buildout costs fall to you. Before finalizing a lease, it is worth getting repair and renovation estimates from a qualified contractor. For clients who need pre-opening repairs or HVAC servicing on their new space,{" "}
            <a href="https://bestbayservices.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">Best Bay Services</a> provides handyman and HVAC work across Tampa Bay — the kind of vendor coordination that prevents opening delays.
          </li>
          <li>
            <strong>Renewal options and rent escalations.</strong> Lock in below-market renewal options now, before rents move higher. A five-year lease with two five-year renewal options at fixed or capped increases provides long-term occupancy security in a market where rents are likely to continue rising as vacancy stays tight.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a broader overview of what makes commercial leases different from residential and what to watch in every clause, see our guide on{" "}
          <Link href="/blog/how-commercial-leases-differ-from-residential" className="text-accent underline">how commercial leases differ from residential</Link>. And if this is your first commercial lease, our post on{" "}
          <Link href="/blog/5-mistakes-first-time-commercial-tenants-make" className="text-accent underline">the five mistakes first-time commercial tenants make</Link> covers the most common and costly errors.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is It Worth Buying Retail Space Instead of Leasing in Tampa Bay&apos;s Current Market?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For business owners who qualify as owner-users, buying the retail space you occupy is worth a serious look — particularly when lease renewals in a sub-4% vacancy market may arrive with significant rent increases you have limited power to resist.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The case for buying: ownership locks in your occupancy cost, builds equity in the real estate, and insulates you from future lease renewal risk in an undersupplied market. SBA 504 financing — available to qualifying owner-users — can fund up to 90% of a retail property acquisition at fixed below-market interest rates, making the monthly payment often comparable to or lower than market rent. Our guide to{" "}
          <Link href="/blog/sba-504-loan-commercial-real-estate-tampa-bay" className="text-accent underline">SBA 504 loans for Tampa Bay commercial real estate</Link> explains exactly how this financing works.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The case against: ownership ties up capital that might generate better returns deployed in the core business, and managing a real estate asset adds complexity to operations. For most traditional retailers — where inventory, staffing, and marketing demand constant capital — leasing remains the right structure, with emphasis on securing strong lease terms that protect against the cost volatility that comes with a tight rental market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Whether you are leasing or buying, the fundamentals of evaluating a retail investment apply. Understanding the trade area, traffic counts, co-tenancy, and the landlord&apos;s financial health matters whether you are signing a lease or writing a purchase offer. See our guide on{" "}
          <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">what makes a good commercial investment</Link> for a framework that applies to retail acquisitions and long-term lease decisions alike.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line for Tampa Bay Retail Tenants in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s retail vacancy at 3.8% — with core submarkets below 2% — means this is not a market where tenants can afford to be passive. The spaces that matter are leasing before they are listed, the landlords with quality locations are not chasing tenants, and the concession environment is materially tighter than it was in 2020 and 2021. But quality space still exists, deals are still being done, and tenants who approach the market strategically — starting early, using professional tenant representation, and moving decisively when the right space appears — are finding locations and securing reasonable lease terms.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience and deep knowledge of Tampa Bay&apos;s retail submarkets, I work with retail tenants to navigate this supply-constrained market — from identifying off-market opportunities to negotiating leases that protect your business long-term. If you are looking for retail space in Tampa Bay, Hillsborough, Pinellas, or Pasco County, let&apos;s have a conversation about your timeline, trade area requirements, and budget before the market tightens further.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Retail Space — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He helps retail tenants find and negotiate space across Tampa Bay&apos;s tight retail market. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Looking for Retail Space in Tampa Bay's Tight Market?"
        body="I help retailers find and negotiate space across Hillsborough, Pinellas, and Pasco County — including off-market opportunities that never reach public listings. Call (813) 733-7907 or reach out below to start the search before the market tightens further."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
