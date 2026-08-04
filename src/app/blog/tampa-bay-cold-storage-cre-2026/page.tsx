import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay Cold Storage & Temperature-Controlled CRE 2026
 * A $40M spec facility, a Dallas firm buying 19 East Tampa acres,
 * and institutional capital chasing the market's scarcest asset class.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Cold Storage Real Estate 2026: Investment, Demand & Key Deals | HenCRE",
  description:
    "Tampa Bay's cold storage and temperature-controlled warehouse market is drawing $40M+ in new investment. Here is what's driving demand, which submarkets are active, and what investors and tenants need to know about this specialized CRE segment in 2026.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-cold-storage-cre-2026" },
  openGraph: {
    title: "Tampa Bay Cold Storage Real Estate 2026: Investment, Demand & Key Deals",
    description:
      "A $40M spec cold storage facility near Port Tampa Bay, a Dallas firm's 19-acre East Tampa acquisition, and firming cap rates on limited supply: here is the full picture of Tampa Bay's temperature-controlled warehouse market in 2026.",
    url: "https://hencre.com/blog/tampa-bay-cold-storage-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Cold storage warehouse facility with refrigerated dock doors in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is cold storage commercial real estate?",
    answer:
      "Cold storage commercial real estate refers to warehouse and distribution facilities specifically designed to maintain controlled temperature environments — ranging from frozen storage at -10°F to refrigerated zones at 34°F to dry-chilled rooms at 55°F. These buildings serve food distributors, grocery chains, pharmaceutical companies, floral distributors, and any business that must keep perishable products within a defined temperature range during storage or transit. Cold storage buildings differ from conventional warehouses in several important ways: they require specialized insulated wall and roof panels, dedicated refrigeration equipment, vapor barriers, anti-condensation floor systems, and substantially higher electrical infrastructure. The result is a construction cost that runs 40% to 70% above comparable conventional warehouse square footage — which is exactly why supply is structurally limited and why investors are paying attention.",
  },
  {
    question: "Why is Tampa Bay attracting cold storage investment right now?",
    answer:
      "Several factors are converging to make Tampa Bay an attractive cold storage target in 2026. First, the metro's population has grown by over 400,000 residents since 2020, which directly increases the volume of perishable food products flowing through the region's distribution network. Second, Port Tampa Bay handles significant agricultural and food-related cargo, and its ongoing expansion is deepening the port's capacity to receive refrigerated container shipments — creating demand for cold storage space within proximity of the port. Third, the growth of grocery delivery, restaurant supply chains, and pharmaceutical cold-chain logistics has increased demand from tenants who previously relied on shared public refrigerated warehouse space and now need dedicated lease arrangements. Finally, Tampa Bay's position along I-4 and I-75 makes it a natural node in Florida's statewide distribution network for temperature-sensitive products moving between Miami, Orlando, and the Gulf Coast.",
  },
  {
    question: "What cap rates are investors seeing on cold storage in Tampa?",
    answer:
      "Cold storage cap rates in Tampa Bay have tightened meaningfully as institutional capital has identified the asset class as undersupplied. In 2026, going-in cap rates for stabilized, well-located cold storage facilities in the Tampa market generally range from 5.5% to 6.5% — comparable to or slightly tighter than premier small bay industrial product. New construction deals — where a developer is delivering a spec or pre-leased facility — underwrite at 6.0% to 7.0% depending on lease term, tenant credit, and temperature specifications. The limited supply of existing cold storage product in Tampa Bay means buyers are competing hard for the few assets that come to market, which has applied downward pressure on cap rates even as broader commercial real estate values have adjusted in some other segments.",
  },
  {
    question: "Who are the typical tenants for cold storage warehouse space?",
    answer:
      "Cold storage tenants in Tampa Bay span a wide range of industries. Food distribution companies — regional grocery chains, broadline foodservice distributors, specialty food importers — represent the largest tenant category by square footage. Pharmaceutical companies and medical device distributors represent a growing segment, particularly as the region's medical office and life sciences activity has increased demand for cold-chain pharmaceutical storage. Floral distributors use refrigerated space for high-volume storage near major holidays. E-commerce grocers — companies offering same-day or next-day fresh and frozen grocery delivery — need last-mile cold storage facilities positioned within the metro area rather than at distant regional distribution hubs. Frozen food manufacturers with Southeast distribution territory often anchor larger cold storage facilities with lease terms of five to ten years, providing the income stability that makes these assets attractive to institutional investors.",
  },
  {
    question: "How do cold storage leases differ from conventional warehouse leases?",
    answer:
      "Cold storage leases carry several characteristics that distinguish them from standard industrial or warehouse leases. Lease terms tend to run longer — five to ten years versus the three to five years typical for dry warehouse space — because the tenant investment in specialized racking, refrigeration connection equipment, and operational integration is substantial enough that shorter terms are rarely practical. Triple-net (NNN) lease structures are standard, but cold storage NNN charges often include a utility-cost passthrough that is not common in conventional warehouses: refrigeration energy costs, which can be significant, are frequently allocated to tenants based on their proportionate use of chilled versus frozen space. Base rents run $12 to $22 per square foot annually for Tampa Bay cold storage depending on temperature requirements, clear height, dock configuration, and year of construction — meaningfully above the $7 to $12 per square foot typical for dry warehouse space in the same submarkets. Tenant improvement allowances are limited because the base building is already the specialized product; most tenants invest in their own internal racking and process equipment.",
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
          name: "Tampa Bay Cold Storage Real Estate 2026",
          item: "https://hencre.com/blog/tampa-bay-cold-storage-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Cold Storage Real Estate 2026: Investment, Demand & Key Deals",
      description:
        "Tampa Bay's cold storage and temperature-controlled warehouse market is drawing $40M+ in new investment. Here is what is driving demand, which submarkets are active, and what investors and tenants need to know in 2026.",
      datePublished: "2026-08-03",
      dateModified: "2026-08-03",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-cold-storage-cre-2026",
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
    title: "Tampa Industrial Market Outlook 2026",
    href: "/blog/tampa-industrial-market-outlook-2026",
    description: "The broader industrial and warehouse market trends shaping Tampa Bay this year.",
  },
  {
    title: "Port Tampa Bay Expansion & Industrial CRE",
    href: "/blog/port-tampa-bay-expansion-industrial-cre-investors",
    description: "How port expansion is driving demand for logistics and distribution space along the bay.",
  },
  {
    title: "Tampa Bay Small Bay Industrial & Flex Space 2026",
    href: "/blog/tampa-bay-small-bay-industrial-flex-2026",
    description: "Why investors are paying $23M for undersupplied multi-tenant flex buildings near Tampa Airport.",
  },
  {
    title: "Lakeland Warehouse & Industrial Growth",
    href: "/blog/lakeland-warehouse-industrial-growth",
    description: "How Lakeland's I-4 corridor compares to Tampa's supply-constrained industrial submarkets.",
  },
  {
    title: "What Is a Triple-Net (NNN) Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "Cold storage leases are almost always NNN — here is what that means for tenants and owners.",
  },
];

export default function TampaBayColdStorageCRE2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Cold Storage Real Estate 2026", href: "/blog/tampa-bay-cold-storage-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=1600&h=900&fit=crop"
        title="Tampa Bay Cold Storage Real Estate 2026"
        subtitle="A $40 million spec facility near Port Tampa Bay, a Dallas firm's 19-acre East Tampa acquisition, and institutional capital chasing Florida&apos;s most supply-constrained industrial niche — here is the full picture."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Most Tampa Bay commercial real estate conversations in 2026 center on office recovery, multifamily supply, or the industrial big-box pipeline. But a quieter story is unfolding in the region&apos;s temperature-controlled warehouse sector — one that involves a $40 million spec cold storage facility, a Dallas developer buying 19 acres in East Tampa for a new logistics campus, and a Midwestern developer breaking ground on a speculative cold storage building sized to capture regional food distribution demand. Taken together, these transactions tell you something important about where institutional capital sees structural opportunity in Tampa Bay&apos;s industrial market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Makes Cold Storage a Distinct Asset Class Within Industrial CRE?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cold storage facilities look like warehouses from the outside. Inside, they are a fundamentally different product. A standard dry warehouse is built with metal walls, concrete floors, and a roof — construction that runs $80 to $120 per square foot for a modern mid-bay building in Tampa Bay. A temperature-controlled cold storage facility requires insulated metal panels rated to hold temperature differentials of 50 degrees or more, refrigeration systems with redundant compressors, vapor barriers and anti-condensation heating systems built into the floor slab, drainage systems designed for condensation and cleanout, and electrical infrastructure capable of powering industrial refrigeration equipment around the clock.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          That construction premium — typically 40% to 70% above comparable conventional warehouse — is the first reason supply is structurally limited. Developers who can build a dry warehouse for $12 million do not automatically jump to cold storage, because the same square footage now costs $18 to $20 million and requires specialized construction expertise. The second reason is that cold storage facilities have specialized operational requirements — they are not easily converted from dry to refrigerated use, and they are difficult to repurpose if the anchor tenant leaves — which means developers and lenders underwrite them more conservatively and require longer lease commitments before breaking ground.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The result is a market where demand has grown substantially but new supply has not kept pace. That supply-demand imbalance is why institutional investors are paying close attention to Tampa Bay right now.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Key Cold Storage Deals Shaping Tampa Bay in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most significant cold storage transaction in Tampa in the recent cycle involves the Tampa Cold Logistics facility at 3601 E. Third Avenue — a 108,544-square-foot, purpose-built cold storage warehouse that secured $40 million in financing. The building features 45-foot clear heights — among the highest for cold storage in the Southeast — 17 dock doors, and temperature capabilities ranging from -10°F to 34°F, with a split HVAC system designed to accommodate multiple tenants with different temperature requirements in the same building. The location is intentional: the site sits within two miles of Port Tampa Bay and downtown Tampa, with direct access to both I-4 and I-275. At 10 miles from Tampa International Airport, it is well-positioned to serve air freight cold-chain users as well as port-adjacent distributors.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The multi-tenant design at Tampa Cold Logistics is notable because it widens the addressable tenant pool significantly. Instead of needing a single large food distributor to anchor the building, the split HVAC configuration allows a regional pharmaceutical distributor to occupy one zone, a specialty food importer to take another, and an e-commerce grocer to use a third — each maintaining their own temperature range without interference. That diversification reduces the income risk that historically made cold storage a more concentrated bet for landlords.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In East Tampa, Dallas-based Constellation Real Estate Partners acquired approximately 19 acres and is developing the Constellation East Tampa Business Center — a modern industrial campus totaling roughly 251,162 square feet designed to serve last-mile and smaller-bay distribution users, including temperature-sensitive operators. Construction began in May 2026 with a target completion around May 2027. The site&apos;s positioning near I-4 and I-75, with proximity to the growing Brandon and Riverview residential corridors, makes it well-suited for food delivery, pharmaceutical distribution, and specialty logistics users who need to reach East Hillsborough population centers efficiently.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Meanwhile, a St. Louis-based developer through the Sansone Group has broken ground on a speculative cold storage facility in the Tampa market — a signal that outside capital has enough conviction in Tampa&apos;s food distribution demand to build without a pre-leased anchor tenant in place. Speculative cold storage development is relatively rare nationally, making Tampa&apos;s emergence as a spec-development target a meaningful data point about where institutional underwriters see the rent and occupancy trajectory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context on how Port Tampa Bay&apos;s expansion is creating the logistics demand that drives these investments, see our post on <a href="/blog/port-tampa-bay-expansion-industrial-cre-investors" className="text-accent underline">Port Tampa Bay and industrial CRE investors</a>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Tampa Bay Specifically Positioned for Cold Storage Growth?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Three structural factors explain why Tampa Bay is attracting cold storage investment in 2026 rather than other Florida markets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Population density and growth.</strong> The Tampa-St. Petersburg-Clearwater MSA has added over 400,000 residents since 2020, driven by domestic migration from higher-cost metros. Each new household is a new unit of demand for grocery distribution, restaurant supply, pharmaceutical delivery, and food e-commerce — all of which require cold chain infrastructure. The grocery delivery segment alone — DoorDash, Instacart, Amazon Fresh, and regional operators — has shifted significant cold chain demand from centralized regional distribution centers to metro-level cold storage positioned for two-hour delivery windows.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Port access and import infrastructure.</strong> Port Tampa Bay handles agricultural products, refrigerated container cargo, and food-related imports at scale. The port&apos;s ongoing infrastructure investment — including new terminal capacity and deeper dredging for larger vessels — increases the volume of temperature-sensitive cargo that needs local cold storage before distribution. Cold storage facilities within a five-mile radius of the port command rent premiums because they reduce the drayage cost of moving refrigerated cargo from the port to a storage facility before final delivery.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Interstate corridor position.</strong> Tampa Bay sits at the intersection of I-4, I-75, and I-275, giving cold storage operators convenient access to Orlando (90 minutes), Miami (four hours), and the entire Gulf Coast corridor. For food distributors servicing multi-market territories in Florida — and Florida&apos;s food service industry is among the largest in the country given tourism volume — Tampa is a natural central distribution point that avoids the congestion of Miami while maintaining Southeastern reach.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors looking at Tampa Bay&apos;s broader industrial picture, our <a href="/blog/tampa-industrial-market-outlook-2026" className="text-accent underline">Tampa industrial market outlook</a> covers the wider warehouse and distribution landscape.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do Cold Storage Cap Rates Compare to Other Industrial Product Types?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cold storage cap rates in Tampa Bay have compressed as institutional capital has entered the sector. In 2026, stabilized cold storage with strong tenant credit and long lease terms is trading at 5.5% to 6.5% going-in cap rates in preferred locations — comparable to or slightly tighter than premier small bay industrial product. New construction or recently delivered cold storage facilities, where the landlord has some lease-up risk or shorter remaining lease term, tends to price in the 6.0% to 7.0% range depending on specifics.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The pricing premium for cold storage versus dry warehouse reflects several factors. First, replacement cost is higher — you cannot build a comparable cold storage building at the same price as a dry warehouse, so replacement cost support puts a floor under values. Second, cold storage tenants tend to sign longer leases and renew at higher rates because the cost and operational disruption of moving a cold chain operation is substantial — a tenant who has invested in racking, refrigeration connections, and process integration has a high effective switching cost. Third, the limited supply of purpose-built cold storage in most markets means that well-located facilities rarely see extended vacancy.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding how to underwrite these properties accurately — accounting for the refrigeration equipment lifecycle, the higher NNN charges associated with energy-intensive operations, and the tenant credit quality of food distribution companies versus conventional industrial users — is essential before making acquisition decisions. Our guide on <a href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">calculating commercial property ROI</a> covers the framework that applies here.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Cold Chain Tenants Know Before Leasing Tampa Bay Cold Storage Space?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cold storage tenants in Tampa Bay face a market that has tightened meaningfully over the past 24 months, and the new supply coming online in 2026 and 2027 will not fully absorb demand before it leases. Here is what tenants evaluating cold storage space should understand before signing.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Lead time is long.</strong> Purpose-built cold storage facilities — built to your temperature specifications and operational requirements — take 18 to 24 months from lease execution to occupancy. Even finding and leasing existing cold storage space requires more runway than conventional warehouse: available cold storage in Tampa Bay is genuinely scarce, and quality facilities in preferred submarkets often receive multiple offers within weeks of becoming available. Starting your search 12 to 18 months before your target occupancy date is not early — it is table stakes.
          </li>
          <li>
            <strong>Lease terms are longer than dry warehouse.</strong> Expect five to ten year initial terms to be the landlord&apos;s preference. Landlords have spent significantly more per square foot to deliver cold storage, and they need longer lease security to justify the investment and satisfy their lenders. Shorter initial terms are sometimes negotiable if you are a credit tenant with an established operating history — but the rent premium for a three-year cold storage lease versus a seven-year lease can be meaningful.
          </li>
          <li>
            <strong>Understand what NNN includes.</strong> Cold storage <a href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">triple-net leases</a> often include a refrigeration energy passthrough that conventional warehouse NNN does not have. Before signing, understand exactly what goes into your CAM and utility reconciliation — refrigeration energy costs can be $2 to $4 per square foot annually in addition to base rent and standard <a href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">CAM charges</a>.
          </li>
          <li>
            <strong>Verify temperature specifications carefully.</strong> Not all cold storage is created equal. A building rated for 34°F refrigerated storage may not be capable of maintaining -10°F frozen zones without significant infrastructure investment. Confirm the building&apos;s temperature envelope, insulation specifications, and refrigeration equipment capacity matches your operational requirements before any letter of intent is executed — retrofitting inadequate cold storage infrastructure mid-lease is expensive and disruptive.
          </li>
          <li>
            <strong>Factor in dock door and clear height requirements.</strong> Cold storage dock doors are insulated, heated, and more expensive than standard dock equipment. Clear height matters more in cold storage than in ambient warehouse because the refrigeration cost per cubic foot drives operators to maximize storage density through high-bay racking. A 45-foot clear building like Tampa Cold Logistics provides meaningfully more effective storage capacity per square foot than a 30-foot clear facility of the same footprint — which can change the economics of your rent per unit of storage significantly.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Cold Storage the Right Investment for Private Tampa Bay Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cold storage has historically been dominated by institutional investors and specialized REITs — companies like Americold and Lineage Logistics — because the asset class requires specialized property management expertise and higher capital thresholds. A purpose-built cold storage facility in Tampa Bay today costs $18 to $25 million to construct, which puts ground-up development beyond the reach of most private investors.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          That said, the market is not closed to private capital. Existing cold storage facilities that come to market — through owner-user sales, estate situations, or value-add repositioning opportunities — offer a path for private investors who can underwrite the operational complexity and secure appropriate financing. The <a href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence process for cold storage</a> is more intensive than for dry warehouse: refrigeration equipment condition and remaining useful life, utility capacity and contracts, environmental history of prior refrigerant use (older facilities may have used R-22 or other legacy refrigerants), and fire suppression system compatibility all require specialized review.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors interested in industrial exposure at a lower entry point, Tampa Bay&apos;s <a href="/blog/tampa-bay-small-bay-industrial-flex-2026" className="text-accent underline">small bay industrial and flex space market</a> offers strong risk-adjusted returns with more manageable capital requirements and comparable supply constraints. If you want direct cold storage exposure but are not ready to acquire a standalone facility, some private equity structures focused on industrial real estate include cold storage as part of a diversified industrial portfolio — worth exploring with a commercial broker who can connect you with appropriate capital structures.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For operators or investors looking to sell an existing cold chain business or property quickly rather than through a traditional listing process, <a href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">cash buyer programs for commercial properties</a> can provide a faster exit path than conventional brokered sale — particularly useful in time-sensitive situations where operational continuity for a cold chain business matters.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does Tampa Bay&apos;s Cold Storage Pipeline Look Like Through 2027?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Three projects are adding meaningful cold storage and temperature-capable industrial capacity to Tampa Bay through the end of 2027: the Tampa Cold Logistics facility at 3601 E. Third Avenue (108,544 square feet, now operational), the Constellation East Tampa Business Center (approximately 251,162 square feet, delivering May 2027), and the Sansone Group spec cold storage facility (size and delivery timing to be confirmed as construction progresses). These three projects represent the most significant new cold chain supply the market has seen in years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Even with this new supply, the fundamentals of Tampa Bay&apos;s cold storage market are not expected to soften materially. The demand drivers — population growth, port expansion, pharmaceutical cold chain expansion, and food delivery logistics — are structural rather than cyclical. The new supply is being absorbed into a market that has been supply-constrained for years, not one that is starting from a position of excess.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Nationally, institutional investors have identified cold storage as one of the most durable industrial niches for the current cycle — cap rates are firming on limited supply, lease structures favor landlords, and the tenant base is growing as food supply chains modernize and food delivery becomes a permanent consumer behavior rather than a pandemic-era exception. Tampa Bay is increasingly in that institutional conversation, which is a meaningful signal for where private capital should be paying attention.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay, I work with industrial tenants sourcing specialized space, investors evaluating industrial acquisitions, and business owners considering whether to own or lease their facilities. If cold storage or temperature-controlled warehouse space is on your radar — whether as a tenant, buyer, or investor — the right time to start the conversation is before the limited available inventory gets absorbed.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <img
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
              Barrett has 23+ years of commercial real estate experience across Tampa Bay. He helps industrial tenants find specialized space,
              investors identify acquisition targets, and business owners evaluate lease-versus-own decisions with real market data.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Looking for Cold Storage or Industrial Space in Tampa Bay?"
        body="Whether you are a food distributor, pharmaceutical company, or logistics operator sourcing temperature-controlled space — or an investor evaluating Tampa Bay&apos;s industrial market — I can help. Call or message Barrett Henry at REMAX Collective."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
