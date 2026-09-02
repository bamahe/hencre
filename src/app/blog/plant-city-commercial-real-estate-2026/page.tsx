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
 * Blog: Plant City Commercial Real Estate 2026
 * I-4 corridor hub with 3.4M SF Stalwart Business Park approved.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Plant City Commercial Real Estate 2026 | HenCRE",
  description:
    "Plant City is emerging as one of Tampa Bay's most active commercial real estate markets in 2026, anchored by the 3.4 million square foot Stalwart Business Park. Here is what investors, tenants, and developers need to know.",
  alternates: { canonical: "https://hencre.com/blog/plant-city-commercial-real-estate-2026" },
  openGraph: {
    title: "Plant City Commercial Real Estate 2026",
    description:
      "Plant City's 410-acre Stalwart Business Park anchors a wave of I-4 corridor industrial investment in 2026. Rents run $1–3 below Tampa prices while logistics access rivals anything in the metro. Here is the full picture.",
    url: "https://hencre.com/blog/plant-city-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Industrial park and warehouse development along I-4 corridor near Plant City, Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Stalwart Business Park in Plant City?",
    answer:
      "The Stalwart Business Park is a 3.4 million square foot industrial complex spanning approximately 410 acres along Paul Buchman Highway in Plant City. Plant City officials unanimously approved the development, making it one of the largest industrial approvals in Hillsborough County in recent years. The park is designed to serve large-format logistics, distribution, and light manufacturing users who need direct I-4 access and the lower land costs that Plant City offers compared to core Tampa submarkets. Stalwart represents a generational shift in how Plant City is positioned within the Tampa Bay industrial market.",
  },
  {
    question: "What types of commercial real estate are available in Plant City?",
    answer:
      "Plant City's commercial real estate market is anchored by industrial and warehouse product — the I-4 corridor and proximity to Tampa Bay and Polk County make it a natural distribution location. Beyond industrial, the market includes retail space serving the city's growing residential base, agricultural processing and cold storage facilities tied to the Strawberry Capital of the World brand, flex industrial space for local contractors and light manufacturers, and land for commercial development. Average commercial listing prices in the area run approximately $2.5 million per property, with per-acre costs around $578,000 — significantly below core Tampa market pricing.",
  },
  {
    question: "How far is Plant City from Tampa Bay's major logistics nodes?",
    answer:
      "Plant City sits approximately 25 miles east of downtown Tampa and 30 miles west of Lakeland along I-4 — one of the most logistics-favorable highway corridors in Florida. From Plant City, a distribution operator can reach Downtown Tampa in approximately 35 minutes, Tampa International Airport in 40 minutes, Port Tampa Bay's Hooker's Point terminals in 45 minutes, and the Orlando metro area within 60 to 75 minutes. This positioning makes Plant City effective for both Tampa Bay last-mile delivery operations and I-4 corridor regional distribution runs connecting Tampa to Orlando.",
  },
  {
    question: "Are commercial rents lower in Plant City than in Tampa?",
    answer:
      "Yes — meaningfully so. Industrial asking rents in Plant City and the broader Polk County / I-4 corridor run approximately $8.00 to $9.50 per square foot NNN for Class A space, compared to $9.50 to $12.00 per square foot in core Tampa industrial submarkets. For tenants with some flexibility on location, the rent differential can represent $1 to $2.50 per square foot in annual savings — meaningful over a 50,000 to 200,000 square foot footprint across a five-year lease term. Land costs follow the same pattern, making Plant City attractive for owner-users and developers underwriting new construction at 6.0 to 6.5 percent stabilized cap rates.",
  },
  {
    question: "Is Plant City a good commercial real estate investment in 2026?",
    answer:
      "The investment case for Plant City in 2026 centers on three factors: the Stalwart Business Park delivering institutional-grade industrial supply to a supply-constrained market, the I-4 corridor's structural role as Florida's primary east-west logistics spine, and the rent and land cost differential relative to core Tampa. Investors acquiring well-located industrial product along Paul Buchman Highway or the SR-60 and US-92 commercial corridors today are betting on demand catching up to supply as the region absorbs the new inventory. Stabilized cap rates in the 6.0 to 6.5 percent range offer yield that has been compressed out of infill Tampa product. As always, submarket selection, building quality, and tenant creditworthiness drive the difference between a strong and a mediocre acquisition.",
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
          name: "Plant City Commercial Real Estate 2026",
          item: "https://hencre.com/blog/plant-city-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Plant City Commercial Real Estate 2026",
      description:
        "Plant City is emerging as one of Tampa Bay's most active commercial real estate markets in 2026, anchored by the 3.4 million square foot Stalwart Business Park and I-4 corridor logistics demand.",
      datePublished: "2026-08-21",
      dateModified: "2026-09-02",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/plant-city-commercial-real-estate-2026",
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
    title: "Lakeland Warehouse & Industrial Growth",
    href: "/blog/lakeland-warehouse-industrial-growth",
    description: "How Lakeland's I-4 corridor compares to Plant City as a logistics market.",
  },
  {
    title: "Tampa Bay Industrial Market Q2 2026",
    href: "/blog/tampa-bay-industrial-market-q2-2026",
    description: "The broader Tampa Bay industrial picture — vacancy, rents, and investment trends.",
  },
  {
    title: "Tampa Industrial Market Outlook 2026",
    href: "/blog/tampa-industrial-market-outlook-2026",
    description: "Forward-looking demand drivers for Tampa Bay warehouse and distribution space.",
  },
  {
    title: "East Tampa US-301 Industrial Corridor 2026",
    href: "/blog/east-tampa-us-301-industrial-corridor-2026",
    description: "Tampa Bay's most active large-format industrial submarket — and how it compares to Plant City.",
  },
  {
    title: "Port Tampa Bay Expansion & Industrial CRE",
    href: "/blog/port-tampa-bay-expansion-industrial-cre-investors",
    description: "How Port Tampa Bay growth drives demand for distribution space across the region.",
  },
  {
    title: "Tampa Bay Small-Bay Industrial Flex 2026",
    href: "/blog/tampa-bay-small-bay-industrial-flex-2026",
    description: "The undersupplied flex industrial segment — relevant to Plant City's local business base.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "How owner-users can finance a Plant City industrial acquisition with below-market fixed rates.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "The framework for underwriting an I-4 corridor industrial acquisition.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to defer capital gains when selling into or out of a Plant City commercial position.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step due diligence checklist for industrial and warehouse buyers.",
  },
];

export default function PlantCityCommercialRealEstate2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Plant City Commercial Real Estate 2026", href: "/blog/plant-city-commercial-real-estate-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop"
        title="Plant City Commercial Real Estate 2026"
        subtitle="A 3.4 million square foot industrial park approved. I-4 corridor logistics demand rising. Rents running $1–3 below core Tampa prices. Plant City is no longer a footnote in Tampa Bay commercial real estate."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Plant City has long been known as the Strawberry Capital of the World and a quiet Hillsborough County community between Tampa and Lakeland. In 2026, it is earning a different kind of attention: commercial real estate investors, industrial developers, and logistics operators are taking a hard look at a market that offers I-4 corridor access at prices that core Tampa submarkets cannot match. The unanimous approval of the 3.4 million square foot Stalwart Business Park — one of the largest industrial approvals in Hillsborough County history — signals that Plant City&apos;s commercial real estate story is just getting started.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Plant City Attracting Industrial Investment in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Plant City&apos;s appeal to industrial investors and occupiers in 2026 comes down to a combination of location, cost, and timing. On location: Plant City sits directly on I-4, the 135-mile highway that connects Tampa Bay to the Orlando metro and serves as Florida&apos;s primary east-west freight spine. Logistics operators who need to serve both metro areas — or who need a hub positioned between them — find Plant City&apos;s location functionally equivalent to the closest Tampa or Lakeland submarkets at meaningfully lower cost.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On cost: industrial land in Plant City and the broader east Hillsborough corridor is priced at approximately $578,000 per acre on average — a significant discount to infill Tampa industrial land, where constrained supply and entitlement complexity push costs far higher. For developers underwriting new construction, this land cost advantage translates directly into the ability to achieve stabilized cap rates in the 6.0 to 6.5 percent range, which is more attractive than what most infill Tampa industrial projects can deliver at current construction costs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          On timing: the{" "}
          <Link href="/blog/tampa-bay-industrial-market-q2-2026" className="text-accent underline">Tampa Bay industrial market&apos;s Q2 2026 vacancy stabilization</Link> means the supply-driven correction of the past two years is working through the system. As institutional buyers return to the market with renewed conviction, markets like Plant City — where land availability and development economics still allow new product to be built at rational yields — become attractive alternatives to compressed-yield infill options.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Stalwart Business Park and Why Does It Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Stalwart Business Park is the commercial real estate story of the moment in Plant City. City officials unanimously approved the development of a 3.4 million square foot industrial complex spanning approximately 410 acres along Paul Buchman Highway. To put the scale in perspective: 3.4 million square feet is roughly equivalent to the entire annual leasing volume for some of Tampa Bay&apos;s secondary industrial submarkets — delivered into a single development.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Stalwart approval matters for several reasons beyond its size. First, unanimous city approval signals that Plant City is actively courting industrial investment — not just tolerating it. Second, the 410-acre footprint gives the development flexibility to accommodate a range of building sizes and configurations, from large-format distribution boxes serving regional supply chains to mid-bay product suited for regional distributors and light manufacturers. Third, the Paul Buchman Highway location provides excellent truck access without routing heavy vehicles through the core of the city, which is critical for logistics operations and for maintaining community support for industrial development.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context on how large-scale I-4 corridor industrial development typically performs, see our analysis of{" "}
          <Link href="/blog/lakeland-warehouse-industrial-growth" className="text-accent underline">Lakeland&apos;s warehouse and industrial growth</Link> — the South Polk / Lakeland market has been an instructive case study in how I-4 logistics demand absorbs large new supply when the development economics are right.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Types of Commercial Properties Are Available in Plant City Today?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Plant City&apos;s commercial real estate market is more varied than its industrial headline suggests. Here is how the key segments break down:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Industrial and warehouse.</strong> The dominant and fastest-growing segment. Existing product ranges from older functional warehouses along SR-60 and US-92 to newer Class A distribution facilities built to modern spec — 28- to 32-foot clear heights, adequate dock positions, ESFR sprinklers. The Stalwart Business Park will add a significant tranche of purpose-built Class A product as it delivers over the next several years.
          </li>
          <li>
            <strong>Agricultural processing and cold storage.</strong> Plant City&apos;s strawberry and agricultural heritage has left a legacy of specialized cold storage and produce processing facilities. These are niche properties — specific to operators in the food supply chain — but Plant City has more of them than virtually any other market in Florida, and the tenant base that understands their value is active and creditworthy.
          </li>
          <li>
            <strong>Retail and neighborhood commercial.</strong> Plant City&apos;s population has grown alongside the broader east Hillsborough residential boom, and retail demand has followed. The SR-60 and US-92 corridors serve as the primary retail spines. Strip centers, QSR outparcels, and service retail are the dominant formats. National tenants are present but the market remains more dependent on regional and local operators than the suburban Tampa retail corridors.
          </li>
          <li>
            <strong>Flex industrial.</strong> The most undersupplied segment. Small-bay flex bays between 2,000 and 8,000 square feet — suitable for contractors, regional distributors, and light manufacturers — are scarce throughout the Tampa Bay metro, and Plant City is no exception. Operators who find and hold functional flex product in this market tend to see strong tenant demand and limited competition. Our post on{" "}
            <Link href="/blog/tampa-bay-small-bay-industrial-flex-2026" className="text-accent underline">small-bay flex industrial in Tampa Bay</Link> covers the broader segment dynamics.
          </li>
          <li>
            <strong>Commercial land.</strong> Land for commercial development — particularly along I-4 interchange corridors and Paul Buchman Highway — is the most actively sought product type among developers in 2026. Entitlement timelines and infrastructure availability vary significantly by parcel; thorough due diligence is essential before land acquisition.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do Plant City Industrial Rents Compare to Tampa and Lakeland?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The rent differential is one of the clearest reasons logistics operators and investors are looking at Plant City. A direct comparison of asking rents across the I-4 corridor:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Core Tampa industrial (East Tampa / US-301 corridor).</strong> Class A product asking $9.50 to $11.50 per square foot NNN. Premium for newer spec, higher clear height, and proximity to Port Tampa Bay. Our post on the{" "}
            <Link href="/blog/east-tampa-us-301-industrial-corridor-2026" className="text-accent underline">East Tampa US-301 corridor</Link> covers this submarket in detail.
          </li>
          <li>
            <strong>Plant City / East Hillsborough I-4 corridor.</strong> Class A product asking approximately $8.00 to $9.50 per square foot NNN. The discount to core Tampa reflects the shorter drive time to the Tampa metro, but for tenants who primarily need I-4 access — not Tampa infill proximity — the rent savings are meaningful with no operational compromise.
          </li>
          <li>
            <strong>Lakeland / South Polk corridor.</strong> Comparable to Plant City in the $8.00 to $9.50 per square foot NNN range, with the largest floor plates in the region and the most new Class A supply. The Plant City market offers a geographic advantage for operators who need to be closer to the Tampa metro while still capturing I-4 corridor economics.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a tenant occupying 75,000 square feet, a $1.50 per square foot rent differential between core Tampa and Plant City translates to $112,500 per year in savings — $562,500 over a five-year lease term. That is a number that warrants serious evaluation of whether the operational trade-off (longer drive to the Tampa port and urban core) is worth the cost savings for a given business model.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Who Is Moving to Plant City? Understanding the Tenant Demand Mix</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Plant City&apos;s industrial tenant base reflects both its agricultural heritage and its emerging role as an I-4 logistics node. The occupier mix includes:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Regional distribution and logistics.</strong> Third-party logistics providers and regional distributors who need I-4 access to serve both Tampa Bay and Central Florida. These users value Plant City&apos;s midpoint location and are less dependent on the Port Tampa Bay proximity that drives demand in the core Tampa market.
          </li>
          <li>
            <strong>Food and agricultural supply chain.</strong> Cold storage operators, produce distributors, and food processing companies drawn by Plant City&apos;s existing infrastructure and agricultural community. The strawberry capital heritage is not just marketing — it represents a real cluster of food supply chain businesses with local roots and stable demand.
          </li>
          <li>
            <strong>Building materials and construction supply.</strong> One of the most active demand drivers for I-4 corridor industrial across the Tampa-to-Orlando market. Building materials distributors need large-format storage space, dock-height loading, and freeway access — requirements Plant City product meets at competitive cost.
          </li>
          <li>
            <strong>E-commerce fulfillment.</strong> Mid-size fulfillment operators who serve the broader Tampa Bay and I-4 corridor market, targeting 2-hour delivery windows across a wide geographic footprint. Plant City&apos;s location enables coverage that would require two separate Tampa and Orlando facilities for some operators.
          </li>
          <li>
            <strong>Light manufacturing.</strong> Manufacturers who relocated to Florida during the pandemic-era population surge and are now expanding. Plant City&apos;s lower land and occupancy costs make it one of the more viable light manufacturing locations in Hillsborough County.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The{" "}
          <Link href="/blog/port-tampa-bay-expansion-industrial-cre-investors" className="text-accent underline">ongoing expansion of Port Tampa Bay</Link> is a secondary driver — import-dependent distributors who use Port Tampa Bay and need cost-effective storage for inventory between port arrival and final delivery are evaluating Plant City as part of their distribution footprint.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Plant City Commercial Real Estate a Good Investment in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The investment case for Plant City is compelling but requires careful underwriting. Here is the honest assessment:
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>The bull case.</strong> The Stalwart Business Park approval is a demand magnet — large institutional developments attract anchor tenants and broker attention that lifts the entire submarket. As Stalwart delivers over the next several years, Plant City will gain visibility in regional tenant searches that it currently lacks. Land costs and development economics allow investors to achieve 6.0 to 6.5 percent stabilized cap rates — 50 to 100 basis points above comparable infill Tampa industrial product. And the I-4 corridor structural demand is real: population growth, e-commerce, and supply chain regionalization are durable demand drivers that do not depend on a single tenant or sector.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>The risks.</strong> Plant City&apos;s industrial market is smaller and less liquid than core Tampa. A vacancy event in a single asset can have an outsized impact on a portfolio concentrated here. The Stalwart Business Park will deliver a large volume of new supply, and the absorption timeline matters — if Stalwart&apos;s 3.4 million square feet is absorbed over three years, that is fine; if it takes six, nearby existing product will face a prolonged competition for tenants. Infrastructure constraints — water, sewer, and transportation capacity — are real considerations for development sites that do not benefit from existing infrastructure.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors evaluating an acquisition in Plant City, the analytical framework is the same as any commercial market: understand the{" "}
          <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">true return on the investment</Link>, complete thorough{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence</Link> on the building, the tenant, and the lease, and understand your exit options. A{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link> can be an effective tool for investors rotating out of appreciated Tampa product and into higher-yielding Plant City industrial — but only if the replacement property meets the investment criteria independently, not just as a tax-driven decision.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Owner-users — businesses that occupy industrial space and want to own their building — often find Plant City particularly compelling. The combination of SBA 504 financing (which can fund an acquisition with as little as 10 percent down at fixed below-market rates) and Plant City&apos;s lower purchase prices means a business can secure its occupancy cost at a level that competes favorably with lease alternatives. Our guide to{" "}
          <Link href="/blog/sba-504-loan-commercial-real-estate-tampa-bay" className="text-accent underline">SBA 504 loans for Tampa Bay commercial real estate</Link> explains how this works in practice.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For owners of Plant City commercial properties or land who are considering a sale, the current demand environment — particularly from industrial developers and investors who are actively seeking I-4 corridor opportunities — means there are real buyers in the market. If a structured, efficient exit is the priority, Barrett&apos;s <Link href="/services/dispositions" className="text-accent underline">commercial property disposition services</Link> are designed for exactly that scenario across Plant City and the broader Hillsborough County market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Plant City in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Plant City is not competing with the core Tampa industrial submarkets — it is offering a different value proposition entirely. For logistics operators and manufacturers who need I-4 access without paying core Tampa prices, Plant City delivers competitive product at a rent discount that can represent hundreds of thousands of dollars over a lease term. For investors, the Stalwart Business Park approval is a market-defining event that puts Plant City on the institutional radar in a way that will reshape how brokers and tenants think about east Hillsborough County for years to come.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial real estate fundamentals are sound: I-4 access, growing population, lower cost basis, and a city government that is actively courting commercial investment. The risks — new supply absorption, market liquidity, infrastructure constraints — are real but manageable with careful underwriting and site selection.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience and deep knowledge of Tampa Bay and the I-4 corridor, I work with investors, developers, and owner-users evaluating commercial opportunities across Hillsborough, Polk, Pasco, and Pinellas Counties. Whether you are looking at a Plant City industrial acquisition, need help sourcing flex space for your business, or want to understand how the Stalwart Business Park fits your investment thesis, let&apos;s talk.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Plant City Commercial Real Estate — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He helps investors, businesses, and developers navigate commercial real estate across Tampa Bay and the I-4 corridor. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating a Plant City Industrial or Commercial Property?"
        body="I help investors and businesses find and evaluate commercial real estate along the I-4 corridor, including Plant City and east Hillsborough County. Call (813) 733-7907 or reach out below — let&apos;s talk about whether Plant City fits your investment or occupancy strategy."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
