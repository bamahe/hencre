import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Duval County Commercial Real Estate | Jacksonville | HenCRE",
  description:
    "Commercial real estate in Duval County, FL: JAXPORT industrial, downtown office, multifamily, and coastal retail. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/duval" },
  openGraph: {
    title: "Duval County Commercial Real Estate | Jacksonville | HenCRE",
    description:
      "Jacksonville CRE: JAXPORT-driven industrial, downtown mixed-use, Class A office in Arlington, and Jacksonville Beach retail. Expert guidance from Barrett Henry at REMAX Collective.",
    url: "https://hencre.com/markets/duval",
  },
};

const faqs = [
  {
    question: "Why is Duval County&apos;s industrial market so active?",
    answer:
      "JAXPORT -- the Port of Jacksonville -- is one of the Southeast&apos;s most significant logistics engines. It drives consistent demand for warehouse, distribution, cross-dock, and light manufacturing space throughout Duval County, particularly in industrial zones east of downtown and along major freight corridors. Third-party logistics providers, freight forwarders, and regional distributors all cluster near port access, sustaining occupancy and rent growth across the industrial submarket.",
  },
  {
    question: "How does Duval County&apos;s office market compare to Tampa Bay?",
    answer:
      "Both markets show bifurcation between Class A and older product, but Jacksonville&apos;s office market has a different character. Arlington anchors Class A demand for corporate back-office and headquarters users. Downtown Jacksonville is seeing genuine revitalization with adaptive reuse and mixed-use development. Compared to Tampa Bay, Duval offers lower lease rates and less competition from institutional investors -- which can represent better value for buyers or tenants willing to do the analysis.",
  },
  {
    question: "What types of commercial investment work best in Duval County?",
    answer:
      "Industrial near JAXPORT and freight corridors, multifamily in urban infill and suburban growth areas, and mixed-use retail in downtown and Jacksonville Beach consistently attract capital. Medical office near major healthcare systems is also active. The market is less saturated than Miami-Dade or Broward, pricing is more accessible, and user demand is diversified across multiple economic drivers including port activity, defense, healthcare, and corporate relocation.",
  },
  {
    question: "Is downtown Jacksonville&apos;s revitalization real?",
    answer:
      "Yes, and it is gaining momentum. Revitalization efforts along the St. Johns River riverfront corridor have brought adaptive reuse projects, residential conversions, restaurant and retail activation, and corporate office repositioning. For investors, this corridor offers opportunities in urban office with character, ground-floor retail that has real foot traffic, and multifamily targeting young professionals and empty-nesters who want walkability. The fundamentals are tightening as supply of desirable downtown space remains constrained.",
  },
  {
    question: "How does Barrett Henry work in the Duval County market?",
    answer:
      "Barrett works Duval County regularly as a Broker Associate at REMAX Collective, with 23+ years of Florida CRE experience. He draws on direct market relationships, REMAX network connections in Jacksonville, and current transaction data to advise investors, corporate tenants, and property owners. Whether you are scouting industrial assets near JAXPORT, evaluating office in Arlington, or targeting multifamily in urban infill, Barrett provides analysis and connects you with the right specialists for execution.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://hencre.com/markets" },
        { "@type": "ListItem", position: 3, name: "Duval County", item: "https://hencre.com/markets/duval" },
      ],
    },
    {
      "@type": "Service",
      name: "Duval County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "Duval County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory and investment guidance for Duval County, Florida -- serving Jacksonville industrial, downtown office, multifamily, and Jacksonville Beach retail markets.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const relatedLinks = [
  {
    title: "Clay County Commercial Real Estate",
    href: "/markets/clay",
    description: "Jacksonville suburban market with strong residential-driven commercial demand.",
  },
  {
    title: "Bradford County Commercial Real Estate",
    href: "/markets/bradford",
    description: "Rural market with I-10 and US-301 corridor access adjacent to Duval.",
  },
  {
    title: "Industrial and Warehouse Advisory",
    href: "/commercial/industrial-warehouse",
    description: "Industrial and logistics space investment across Florida&apos;s port and freight corridors.",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description: "Florida commercial investment acquisition and disposition services.",
  },
  {
    title: "Multifamily Investment in Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "Florida multifamily investment fundamentals applicable across all major markets.",
  },
  {
    title: "CRE Due Diligence Checklist",
    href: "/insights/cre-due-diligence-checklist",
    description: "Step-by-step due diligence for Florida commercial property acquisitions.",
  },
];

export default function DuvalMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Duval County", href: "/markets/duval" },
        ]}
      />

      <Hero
        title="Duval County Commercial Real Estate"
        subtitle="Jacksonville -- JAXPORT industrial, downtown mixed-use revival, and Class A office in Arlington. Barrett Henry, Broker Associate at REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />

      {/* Quick Answer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Duval County is Florida&apos;s largest city by area, and its commercial real estate market reflects that scale. JAXPORT drives the industrial sector. Downtown Jacksonville&apos;s riverfront revitalization is producing real mixed-use value. Arlington anchors Class A office demand. Jacksonville Beach adds a distinct coastal retail and hospitality submarket. Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Duval County through direct market relationships and the REMAX network in Jacksonville.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Duval County Commercial Real Estate Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Duval County is a market built on substance -- port activity, distribution networks, corporate relocations, and downtown
            revitalization. Jacksonville is Florida&apos;s largest city by area and one of the Southeast&apos;s most important logistics
            hubs. The commercial real estate market here is diversified in a way that few Florida markets match: you have institutional-grade
            industrial tied to genuine port infrastructure, Class A office serving real corporate demand, and mixed-use development
            driven by a revitalization agenda that is producing actual transactions rather than just plans.
          </p>
          <p>
            For comparison within the broader northeast Florida corridor, see the{" "}
            <Link href="/markets/clay" className="font-semibold text-black underline">Clay County market</Link>{" "}
            -- Jacksonville&apos;s suburban neighbor -- and{" "}
            <Link href="/markets/bradford" className="font-semibold text-black underline">Bradford County</Link>{" "}
            further west along I-10. Duval is the core; adjacent counties absorb residential and light commercial spillover.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
            alt="Commercial logistics and warehouse corridor in Jacksonville, Florida"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Duval County&apos;s industrial market is anchored by JAXPORT -- one of the Southeast&apos;s most significant port and logistics engines.
          </p>
        </div>
      </section>

      {/* Key Corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key CRE Corridors in Duval County</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">Downtown Jacksonville -- Riverfront Mixed-Use</h3>
              <p className="mt-2">
                Downtown is the epicenter of mixed-use activity in northeast Florida. Revitalization along the St. Johns River has produced
                adaptive reuse projects, residential conversions, restaurant and retail activation, and corporate{" "}
                <Link href="/commercial/office-space" className="font-semibold text-black underline">office repositioning</Link>.
                The riverfront corridor is a focal point for institutional investment and local developer interest. Urban office with
                character, ground-floor retail with genuine foot traffic, and multifamily targeting young professionals have all found
                real traction here. Fundamentals are tightening as supply of desirable downtown space remains constrained.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Arlington -- Class A Office Corridor</h3>
              <p className="mt-2">
                Arlington houses the lion&apos;s share of Class A office space in Duval County. This corridor historically anchors corporate
                headquarters and major back-office operations. Accessible, professionally built out, and still the go-to for tenants
                requiring substantial{" "}
                <Link href="/commercial/office-space" className="font-semibold text-black underline">office footprint</Link>{" "}
                with modern amenities. Demand drivers here are steady corporate relocations and expansions from the Southeast looking
                for Florida presence at pricing below Miami-Dade or Broward.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">JAXPORT Industrial Corridor</h3>
              <p className="mt-2">
                JAXPORT is one of the most significant logistics engines in the Southeast, driving an enormous{" "}
                <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">warehouse, distribution, and light manufacturing</Link>{" "}
                presence throughout Duval County. Industrial zones east of downtown and along major freight corridors attract
                third-party logistics providers, freight forwarders, and regional distributors. If you are shipping containerized goods,
                perishables, or breakbulk cargo, proximity to JAXPORT is non-negotiable. Warehouse space here commands attention
                from national logistics operators and regional players alike.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Jacksonville Beach and Coastal Communities</h3>
              <p className="mt-2">
                Jacksonville Beach, Atlantic Beach, and Neptune Beach form a distinct coastal market. Mixed-use hospitality, vacation
                rental platforms,{" "}
                <Link href="/commercial/retail-space" className="font-semibold text-black underline">retail</Link>,
                and growing multifamily development characterize this submarket. Tourism-oriented CRE, second-home investors, and
                lifestyle retail operators are the primary participants. Demand drivers here differ from inland Duval -- seasonal
                occupancy patterns and younger demographic migration shape the opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Active Property Types and Investment Themes</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Industrial and Warehouse",
              body: "Industrial is the market&apos;s workhorse. JAXPORT dependency means steady, consistent demand for warehouse, cross-dock, and distribution-ready space. This sector attracts both local and national institutional capital. Tight vacancy and rising rents across Tampa Bay have pushed some investors to evaluate Jacksonville&apos;s more accessible pricing.",
            },
            {
              title: "Office -- Class A and Urban",
              body: "Duval County houses substantial office inventory in Arlington and downtown. Corporate relocations and expansions continue to drive leasing. Medical office near major healthcare systems and professional service office in walkable urban nodes add depth to the market.",
            },
            {
              title: "Multifamily",
              body: "New apartment construction is active in urban infill and suburban peripheral markets. Demand comes from young professionals relocating to Florida, corporate transferees, and empty-nesters. Coastal areas continue attracting investment-grade multifamily projects.",
            },
            {
              title: "Retail and Mixed-Use",
              body: "Downtown and Jacksonville Beach see experiential, dining-focused, and service retail. Suburban strips and power centers serve neighborhood demand. Mixed-use projects blending residential, office, and retail are increasingly common in revitalization zones.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
              <p className="font-bold text-black">{item.title}</p>
              <p className="mt-2 text-[#666666]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demand Drivers */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Drives the Duval County Commercial Market</h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666] list-disc pl-6">
            <li>
              <strong className="text-black">JAXPORT Activity:</strong> Port throughput, containerized cargo growth, and logistics hub
              expansion keep industrial and warehouse demand robust. Port access and freight corridor proximity are non-negotiable for
              logistics tenants.
            </li>
            <li>
              <strong className="text-black">Corporate Relocation and Expansion:</strong> Southeast-based companies and out-of-region
              firms continue moving headquarters or significant operations into Jacksonville. Lower cost-of-doing-business compared to
              larger Florida metros makes Duval attractive.
            </li>
            <li>
              <strong className="text-black">Downtown Revitalization:</strong> Mixed-use projects, retail activation, and residential
              conversion are generating real transaction activity. Institutional and local investment is backing these plays.
            </li>
            <li>
              <strong className="text-black">Healthcare and Institutional Growth:</strong> Major healthcare systems are expanding,
              creating demand for medical office, specialized facilities, and campus-adjacent commercial space.
            </li>
            <li>
              <strong className="text-black">Tourism and Coastal Demand:</strong> Beach corridors attract hospitality, vacation rental
              operators, and lifestyle retail. Distinct seasonality and tenant profiles require market-specific analysis.
            </li>
          </ul>
        </div>
      </section>

      {/* Barrett Services */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Works in Duval County</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience, holding designations
            including e-PRO, MRP, SRS, and REMAX Hall of Fame. He works Duval County through direct market relationships and the REMAX
            network in Jacksonville -- drawing on current data and decades of transactional experience across Florida&apos;s commercial markets.
          </p>
          <p>
            Whether you are an investor scouting{" "}
            <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">industrial assets near JAXPORT</Link>,
            a corporate tenant looking for Class A{" "}
            <Link href="/commercial/office-space" className="font-semibold text-black underline">office in Arlington</Link>,
            a developer targeting mixed-use downtown opportunities, or an investor evaluating{" "}
            <Link href="/commercial/multifamily" className="font-semibold text-black underline">multifamily</Link>{" "}
            in Jacksonville&apos;s growth corridors, Barrett provides the analysis and introductions to make it happen.
          </p>
          <p>
            For investors comparing Duval County to Tampa Bay markets, Barrett can build side-by-side analyses factoring cap rates,
            tenant profiles, and long-term demand drivers. See also the{" "}
            <Link href="/blog/how-to-calculate-commercial-property-roi" className="font-semibold text-black underline">commercial ROI calculator</Link>{" "}
            and{" "}
            <Link href="/blog/what-makes-a-good-commercial-investment" className="font-semibold text-black underline">investment evaluation framework</Link>{" "}
            for context on how to compare markets effectively.
          </p>
          <p>
            <Link href="/contact" className="font-semibold text-black underline">Contact Barrett directly</Link> at (813) 733-7907.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About Duval County CRE</h2>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      <RelatedLinks heading="Explore Related Markets and Services" links={relatedLinks} />

      <CTASection
        heading="Ready to Talk Duval County Commercial Real Estate?"
        body="Whether you are leasing, buying, selling, or investing in Jacksonville -- from JAXPORT industrial to downtown office to coastal retail -- Barrett Henry has the network and 23+ years of Florida CRE experience to help you navigate this market with clarity and precision."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
