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
 * Blog: Tampa Bay Boat & RV Storage CRE Investment 2026
 * A distinct niche from traditional self-storage with higher cap rates,
 * lower expenses, and uniquely strong Tampa Bay demand fundamentals.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Boat & RV Storage Investment 2026 | HenCRE",
  description:
    "Tampa Bay boat and RV storage facilities trade at 6–8% cap rates with expense ratios 15–20 points below traditional self-storage. Here is the investment case, the demand drivers, and what buyers need to know in 2026.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-boat-rv-storage-cre-investment-2026" },
  openGraph: {
    title: "Tampa Bay Boat & RV Storage Investment 2026",
    description:
      "Boat and RV storage in Tampa Bay offers 6–8% cap rates, 25–35% expense ratios, and demand driven by HOA bans and record boat registrations. Here is what investors need to know in 2026.",
    url: "https://hencre.com/blog/tampa-bay-boat-rv-storage-cre-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Covered boat and RV storage facility in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What cap rates do Tampa Bay boat and RV storage facilities trade at?",
    answer:
      "Tampa Bay boat and RV storage facilities traded at cap rates of approximately 6–8% in 2026, sitting roughly 20% above the national average for traditional climate-controlled self-storage. Florida's combination of high boat ownership, HOA restrictions on recreational vehicle parking, and limited supply of waterfront-adjacent land keeps demand structurally elevated. Covered canopy product — which commands a 40–80% rent premium over uncovered — trades toward the lower end of the cap rate range due to the higher income stream and the scarcity of new covered supply.",
  },
  {
    question: "How do expense ratios compare between boat/RV storage and traditional self-storage?",
    answer:
      "Boat and RV storage operations run expense ratios of 25–35% of effective gross income, compared to 40–50% for climate-controlled self-storage. The difference comes from minimal staffing requirements, no HVAC maintenance, simpler building systems, and lower insurance costs per square foot. This structural efficiency advantage translates directly into higher net operating income on a comparable gross revenue basis — a meaningful consideration when underwriting acquisitions against today's financing costs.",
  },
  {
    question: "What drives demand for boat and RV storage in Tampa Bay specifically?",
    answer:
      "Three forces converge in Tampa Bay. First, HOA covenants in virtually all master-planned communities throughout Hillsborough, Pasco, Pinellas, and Manatee Counties prohibit parking boats, trailers, or RVs on residential properties — pushing every boat and RV owner into the paid storage market. Second, Tampa Bay's boating culture is among the most active in the country: Hillsborough County consistently ranks among the top Florida counties for registered vessels, and new boat sales across Florida have been strong throughout 2023–2026. Third, Tampa Bay's continued population growth — now exceeding 3.2 million — means new residents arriving with recreational vehicles and boats, adding to storage demand before a single facility is added.",
  },
  {
    question: "Is covered or uncovered boat and RV storage a better investment in Tampa Bay?",
    answer:
      "Covered canopy storage — metal roofed structures with open sides — commands $125–$250 per month per space versus $75–$150 for uncovered asphalt storage, depending on the size of the bay. The higher rent premium generates 40–80% more income per unit, and covered product typically leases faster and retains tenants longer. However, covered construction costs (roughly $18–$30 per square foot for canopy structures) are substantially higher than surface lot development, and permitting in flood-prone areas can be complex. For acquisition-focused investors, existing covered facilities that are stabilized trade at a premium but offer less execution risk than new development. Stabilized existing facilities with covered and uncovered mix are often the most attractive risk-adjusted acquisition targets.",
  },
  {
    question: "What should buyers check when evaluating a Tampa Bay boat and RV storage acquisition?",
    answer:
      "Key diligence items include: (1) Zoning — confirm the parcel is zoned for outdoor recreational vehicle storage and that the use is explicitly listed, not merely tolerated. Many parcels in Tampa Bay have conditional use permits that can complicate future expansions or ownership changes. (2) Flood zone designation — the FEMA flood map is essential. Ground-level storage in AE or VE zones carries mandatory flood insurance obligations that materially affect operating costs. (3) Current lease-up and rate-to-market analysis — compare in-place rents against the 47+ competitive facilities in the Tampa market and evaluate the gap between current and market rents. (4) Access quality — facilities with wide drive aisles, pull-through bays, and 24/7 gated access consistently outperform cramped older facilities on both occupancy and retention metrics.",
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
          name: "Tampa Bay Boat & RV Storage Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-boat-rv-storage-cre-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Boat & RV Storage: The CRE Investment Case for 2026",
      description:
        "Tampa Bay boat and RV storage facilities trade at 6–8% cap rates with expense ratios 15–20 points below traditional self-storage. The investment case, demand drivers, and what buyers need to know.",
      datePublished: "2026-09-19",
      dateModified: "2026-09-21",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-boat-rv-storage-cre-investment-2026",
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
    title: "Tampa Bay Self-Storage CRE Investment 2026",
    href: "/blog/tampa-bay-self-storage-cre-investment-2026",
    description: "How traditional self-storage compares as an investment alongside boat and RV storage.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate benchmarks across net lease asset classes in Tampa Bay.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Framework for underwriting storage acquisitions including NOI, cap rate, and cash-on-cash returns.",
  },
  {
    title: "Tampa Bay Commercial Mortgage Rates 2026",
    href: "/blog/tampa-bay-commercial-mortgage-rates-2026",
    description: "Current financing benchmarks for commercial acquisitions including storage facilities.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to defer capital gains when trading out of a storage facility into a larger asset.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step diligence checklist for storage facility acquisitions.",
  },
  {
    title: "Florida Property Insurance & Tampa Bay CRE",
    href: "/blog/florida-property-insurance-tampa-bay-cre-2026",
    description: "How Florida insurance market conditions affect underwriting for storage and other outdoor commercial assets.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Core criteria for evaluating any commercial acquisition, including alternative asset classes.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors acquire and sell commercial properties including storage facilities across Tampa Bay.",
  },
  {
    title: "Why Tampa Bay CRE Is Booming",
    href: "/blog/why-tampa-bay-cre-is-booming",
    description: "The macro population and economic forces driving demand for alternative commercial assets including boat and RV storage.",
  },
];

export default function TampaBayBoatRVStorageInvestmentPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Boat & RV Storage Investment 2026", href: "/blog/tampa-bay-boat-rv-storage-cre-investment-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
        title="Tampa Bay Boat & RV Storage: The CRE Investment Case for 2026"
        subtitle="6–8% cap rates. Expense ratios 15–20 points below self-storage. Demand driven by HOA bans, record boat registrations, and relentless population growth. Here is what investors need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Tampa Bay&apos;s boat and RV storage market sits at the intersection of two powerful forces: Florida&apos;s outdoor recreation culture and the HOA-driven suburban development pattern that covers nearly every master-planned community from Wesley Chapel to Apollo Beach. The result is a commercial real estate niche that generates 6–8% cap rates, operates at expense ratios well below traditional self-storage, and benefits from a demand base that grows every time a new single-family subdivision is built. This post breaks down why this asset class works in Tampa Bay, what the numbers look like in 2026, and what buyers and sellers need to understand before entering the market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Does Tampa Bay Have Such Strong Structural Demand for Boat and RV Storage?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Boat and RV storage demand in Tampa Bay is structurally different from the demand in most other markets because the region stacks multiple reinforcing demand drivers in a way few metros can match.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Start with the boating culture. Tampa Bay — the actual body of water — is one of the most active recreational boating environments in the United States. Hillsborough County consistently ranks among the top Florida counties for registered vessels. The Gulf of Mexico is accessible within 45 to 90 minutes from virtually anywhere in the metro. Fishing, watersports, and cruising are year-round activities in a climate where storage seasonality — the main occupancy constraint in northern markets — simply does not exist. Unlike the Great Lakes region or the Pacific Northwest, a boat owner in Tampa Bay is using their vessel in January, which means storage turnover is lower and occupancy is stickier throughout the year.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Layer on top of that the HOA restriction dynamic. Every master-planned community built in Hillsborough, Pasco, Pinellas, Polk, and Manatee Counties over the last 30 years — which covers the vast majority of residential development — prohibits parking a boat, trailer, or recreational vehicle on a residential lot. This is not a soft guideline; it is a covenant enforced with fines, and it creates a captive storage market. Every household in these communities that owns a boat, camper, RV, jet ski trailer, or even a utility trailer needs paid off-site storage. The larger and denser the suburban build-out becomes, the more demand is generated.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Finally, add population growth. Tampa Bay&apos;s metro area now exceeds 3.2 million residents, and net migration into the region has been consistently positive for years. New arrivals — retirees relocating from the Midwest, remote workers from the Northeast, families moving for affordability — disproportionately arrive with recreational vehicles and boats. Each new household requiring storage represents incremental demand added to a market where supply cannot easily expand near the water. For context on the scale of this population growth and what it means for commercial real estate broadly, see our overview of{" "}
          <Link href="/blog/why-tampa-bay-cre-is-booming" className="text-accent underline">why Tampa Bay commercial real estate is booming</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Do the Operating Economics of a Boat and RV Storage Facility Look Like?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The financial profile of a boat and RV storage operation is distinct from traditional self-storage in ways that matter significantly at the underwriting level.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Expense ratios for boat and RV storage facilities run 25–35% of effective gross income. Compare that to 40–50% for climate-controlled self-storage, which carries HVAC maintenance, higher insurance per square foot, and utility costs that boat storage simply does not have. The operating simplicity of an outdoor or canopy storage facility — minimal staffing, no climate systems, simpler building components — means a larger share of every dollar of rent flows to NOI. At a 30% expense ratio versus 45%, the same gross revenue produces roughly 21% more net operating income. That gap translates directly into acquisition value.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On the revenue side, Tampa Bay market rents in 2026 are averaging approximately $223 per month for RV storage spaces and $262 per month for boat storage spaces, with meaningful variation based on size, access quality, and whether the space is covered or uncovered. Covered canopy product — metal-roofed structures that protect vehicles from UV damage and Florida&apos;s intense afternoon rain — commands a 40–80% rent premium over uncovered asphalt storage. A facility with a healthy mix of covered and uncovered product at a high-demand location can generate gross revenues comparable to a small climate-controlled self-storage facility while running at significantly lower operating cost.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates for stabilized boat and RV storage assets in Tampa Bay trade in the 6–8% range, approximately 20% above the national average for the asset class and meaningfully above the 5.5–7% range typical for climate-controlled self-storage in Florida primary markets. New construction costs for covered canopy structures — roughly $18–$30 per square foot — and land scarcity near water access limit the forward supply pipeline, supporting the current cap rate environment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a broader context on cap rate benchmarks across Tampa Bay commercial asset classes, including how storage compares to retail, industrial, and multifamily, see our post on{" "}
          <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rates in 2026</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Covered vs. Uncovered Storage: Which Product Type Offers the Better Investment?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most important product decision in boat and RV storage is the mix between covered canopy bays and open asphalt or gravel storage. Both serve a real market, and the right answer depends on the specific acquisition — but understanding the economics of each is essential.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Uncovered surface storage</strong> is the most capital-efficient product to develop or acquire. Land costs, grading, drainage, security fencing, gate systems, and paving represent a development investment that can be executed at $4–$8 per square foot of usable storage area. Rents for uncovered spaces in Tampa Bay run $75–$150 per month for standard RV and boat spaces. Stabilized uncovered facilities in strong locations trade toward the higher end of the cap rate range — sometimes 7.5–9% — because income is lower per unit even when occupancy is strong.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Covered canopy storage</strong> commands $125–$250 per month per space and generates significantly more income from the same land footprint. The tradeoff is higher construction cost ($18–$30 per square foot for engineered metal canopy structures that meet Florida building code for wind uplift) and, in many cases, more complex permitting — particularly in flood zones or near water. Existing covered facilities in Tampa Bay that are stabilized and well-located trade at lower cap rates, often 6–7%, reflecting investor appetite for the higher income stream. Demand for covered bays typically outpaces uncovered at occupied facilities, with waitlists common at premium locations.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For acquisition-focused investors, the most attractive risk-adjusted opportunity is often a <strong>mixed-product facility</strong> — one that has both covered and uncovered storage, is largely stabilized, and has not yet optimized its rate structure to current market rents. Rate-to-market upside combined with a stable existing income stream can deliver meaningful value creation without the execution risk of ground-up construction. The key is confirming that in-place rents are genuinely below market before attributing that upside in your underwriting.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Key Due Diligence Items for a Tampa Bay Storage Acquisition?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Boat and RV storage acquisitions have a distinct diligence checklist compared to traditional commercial real estate. Four areas deserve particular attention in Tampa Bay&apos;s regulatory and geographic environment.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Zoning confirmation.</strong> Confirm that the parcel is explicitly zoned for outdoor recreational vehicle and boat storage — not merely grandfathered as a nonconforming use or permitted under a conditional use permit. Hillsborough, Pasco, and Pinellas Counties each have slightly different zoning code language governing outdoor storage, and conditional use permits that travel with the property can restrict operational flexibility or create uncertainty on a future sale. If the use is conditional, understand what triggers a re-hearing and what conditions are attached.
          </li>
          <li>
            <strong>FEMA flood zone mapping.</strong> A disproportionate share of Tampa Bay&apos;s boat and RV storage facilities sit in or near FEMA Special Flood Hazard Areas because operators historically located facilities near boat ramps and water access. Flood zone designation drives mandatory commercial flood insurance premiums, which can represent $15,000–$60,000 or more annually for a large facility in an AE zone. Model the flood insurance cost into your operating expense pro forma before settling on a price. The broader issue of Florida insurance costs on commercial properties is covered in our post on{" "}
            <Link href="/blog/florida-property-insurance-tampa-bay-cre-2026" className="text-accent underline">Florida property insurance and Tampa Bay CRE</Link>.
          </li>
          <li>
            <strong>Rate-to-market analysis.</strong> Storage facilities — particularly family-owned operations — often have chronically below-market rents because owners are reluctant to raise rates on long-term tenants. Run a competitive analysis of current asking rates at the 47+ competing facilities in the Tampa Bay market, segment by product type (covered, uncovered, size), and estimate the gap between in-place rents and market rents. Rate-to-market upside is one of the most reliable value-creation levers in storage acquisitions, but it needs to be confirmed against real market data, not assumed.
          </li>
          <li>
            <strong>Operational systems and technology.</strong> Modern storage operators use automated gate access, online lease execution, and dynamic pricing software that allows real-time rate adjustments based on occupancy. Facilities still operating on paper leases and manual key pads are strong acquisition candidates — operational modernization alone can drive occupancy improvement and reduce management cost — but the capital investment for upgrades should be factored into acquisition pricing.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a comprehensive framework on structuring commercial due diligence from offer to closing, see our{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence timeline</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do Financing and Exit Strategies Work for Tampa Bay Storage Facilities?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Financing boat and RV storage acquisitions is similar in structure to other commercial real estate but has some asset-class-specific nuances. Most conventional lenders will underwrite stabilized storage facilities at 65–75% LTV with debt service coverage requirements of 1.25x or higher. Interest rates in mid-2026 for commercial storage loans with 5–10 year fixed terms are in the 6.5–7.5% range for well-qualified borrowers and stabilized assets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          SBA 7(a) and SBA 504 loans can be used for storage facilities if the owner-operator is going to manage the business as an operating company — this is most applicable to buyers who plan to operate the facility directly rather than third-party manage. For a detailed breakdown of how SBA financing works on commercial real estate, see our post on{" "}
          <Link href="/blog/sba-504-loan-commercial-real-estate-tampa-bay" className="text-accent underline">SBA 504 loans for Tampa Bay commercial real estate</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On the exit side, boat and RV storage facilities in Tampa Bay have a liquid buyer pool. Institutional consolidators — regional and national storage operators who are rolling up smaller facilities — are active in the Florida market. Private investors and 1031 exchange buyers represent additional demand, particularly for stabilized assets that require minimal management involvement. If you own a storage facility and are evaluating a sale, a{" "}
          <Link href="/services/dispositions" className="text-accent underline">disposition or off-market sale process</Link>{" "}
          can make sense when a quick close or certainty of execution matters more than maximizing marketed price — worth understanding as one option alongside a full brokered sale.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For storage investors considering a sale, evaluating a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange into a replacement property</Link>{" "}
          is worth doing before any sale closes. The tax deferral on a multi-million-dollar storage sale can be substantial, and the timeline requirements — 45 days to identify replacement property, 180 days to close — require planning well in advance.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Tampa Bay Boat and RV Storage as a CRE Investment</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s boat and RV storage market is a genuine commercial real estate niche — not just a variation on self-storage — with its own demand drivers, operating economics, and acquisition considerations. The case for the asset class rests on four pillars: above-average cap rates relative to other commercial property types, structurally lower expense ratios, demand that grows with every HOA-governed subdivision built in the metro, and a supply-constrained environment where land near water is limited and new construction is expensive and complex.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The best acquisition targets in 2026 are mid-size, mixed-product facilities — 100 to 400 spaces of covered and uncovered storage — that are largely stabilized but carrying below-market rents and operating with outdated management systems. These assets offer the combination of immediate income, rate-to-market upside, and operational improvement potential that makes value-add commercial acquisitions compelling.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience across Tampa Bay, I help investors evaluate and acquire commercial properties including alternative asset classes like storage. Whether you are evaluating your first storage acquisition or looking to trade out of an existing facility into a larger asset, let&apos;s talk about what the market looks like right now for your specific investment criteria.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Boat & RV Storage Investment — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay. He helps investors identify and evaluate commercial acquisitions including storage facilities, industrial, retail, and multifamily properties. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Thinking About Buying or Selling a Boat and RV Storage Facility in Tampa Bay?"
        body="I help investors evaluate storage acquisitions and sellers understand their options across Tampa Bay. Call (813) 733-7907 or reach out below — let&apos;s talk about what this market looks like right now."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
