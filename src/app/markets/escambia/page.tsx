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
  title: "Escambia County Commercial Real Estate | Pensacola | HenCRE",
  description:
    "Commercial real estate in Escambia County, FL: NAS Pensacola-anchored market, defense tech office, I-10 industrial, and Gulf Coast hospitality. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/escambia" },
  openGraph: {
    title: "Escambia County Commercial Real Estate | Pensacola | HenCRE",
    description:
      "Pensacola CRE: NAS-anchored stability, defense tech and cybersecurity office, I-10 industrial corridor, and Gulf Coast hospitality. Expert guidance from Barrett Henry at REMAX Collective.",
    url: "https://hencre.com/markets/escambia",
  },
};

const faqs = [
  {
    question: "How does NAS Pensacola affect the local commercial real estate market?",
    answer:
      "Naval Air Station Pensacola is a generational anchor employer and economic stabilizer for Escambia County. Its presence creates steady demand for office space serving defense contractors, logistics and support services, manufacturing facilities, and professional services catering to military personnel and their families. NAS demand is anti-cyclical -- when commercial markets weaken, military-adjacent demand holds. That stability makes Escambia County attractive to investors who want less exposure to economic cycles.",
  },
  {
    question: "Is Pensacola&apos;s downtown and tech corridor real or just hype?",
    answer:
      "It is real and gaining momentum. Downtown Pensacola -- particularly the 9th Avenue and Palafox District corridor -- has seen genuine adaptive reuse activity, new creative office and startup incubator build-out, and government contractor services growth. The cybersecurity and defense tech cluster forming around NAS decision-makers is not hype -- it is active recruitment and organic cluster formation tied to federal investment. For investors and tenants, this corridor offers office with character and a growing professional tenant base.",
  },
  {
    question: "What types of commercial investment perform best in Escambia County?",
    answer:
      "Industrial and logistics space along the I-10 corridor performs consistently, driven by port activity and military contractor demand. Office in downtown Pensacola and the NAS corridor attracts defense tech and government contractor tenants. Gulf Coast hospitality and retail along Pensacola Beach and US-98 benefit from strong tourism demand. Mixed-use in the Palafox District is gentrifying with real investment behind it. Across all types, Escambia offers less competition from institutional investors than Tampa Bay or Jacksonville, which can mean better pricing and negotiating leverage.",
  },
  {
    question: "How does Escambia County compare to the Emerald Coast markets?",
    answer:
      "Escambia County (Pensacola) operates as a year-round, employer-anchored market -- distinct from the heavily tourism-dependent Emerald Coast markets to the east such as Walton and Okaloosa counties. Pensacola has more diversified demand anchored by NAS and the emerging defense tech sector. The Emerald Coast has higher seasonal peaks but more volatile fundamentals. For investors wanting stability over upside volatility, Escambia is the better fit.",
  },
  {
    question: "How does Barrett Henry work in the Escambia County market?",
    answer:
      "Barrett works Escambia County through referral partnerships and direct client engagement, drawing on REMAX network connections in Pensacola and 23+ years of Florida CRE relationships. He provides corridor-by-corridor analysis, competitive positioning guidance, and connections to verified local specialists for tenant representation, landlord advisory, and investment sales. Everything is hands-on -- Barrett assesses your situation directly and connects you with the right people for execution.",
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
        { "@type": "ListItem", position: 3, name: "Escambia County", item: "https://hencre.com/markets/escambia" },
      ],
    },
    {
      "@type": "Service",
      name: "Escambia County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "Escambia County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory, referral partnerships, and investment guidance for Escambia County, Florida -- serving Pensacola office, I-10 industrial, and Gulf Coast hospitality markets.",
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
    title: "Bay County Commercial Real Estate",
    href: "/markets/bay",
    description: "Panama City and the Panhandle military/tourism market east of Escambia.",
  },
  {
    title: "Duval County Commercial Real Estate",
    href: "/markets/duval",
    description: "Jacksonville -- Northeast Florida&apos;s commercial hub with JAXPORT industrial and downtown mixed-use.",
  },
  {
    title: "Industrial and Warehouse Advisory",
    href: "/commercial/industrial-warehouse",
    description: "Industrial and logistics space investment across Florida&apos;s freight corridors.",
  },
  {
    title: "Office Space Advisory",
    href: "/commercial/office-space",
    description: "Office leasing, investment, and tenant representation across Florida markets.",
  },
  {
    title: "Tenant Representation",
    href: "/services/tenant-representation",
    description: "Expert tenant representation for businesses leasing commercial space anywhere in Florida.",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description: "Florida commercial investment acquisition and disposition services.",
  },
  {
    title: "Gadsden County Commercial Real Estate",
    href: "/markets/gadsden",
    description: "Capital-region spillover, I-10 logistics, and adaptive reuse near Tallahassee -- north of Escambia County.",
  },
  {
    title: "Gulf County Commercial Real Estate",
    href: "/markets/gulf",
    description: "Coastal Panhandle market in Port St. Joe -- boutique hospitality and small commercial.",
  },
  {
    title: "Holmes County Commercial Real Estate",
    href: "/markets/holmes",
    description: "Rural Panhandle county with agricultural and small commercial opportunities.",
  },
  {
    title: "1031 Exchange in Florida",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How Florida commercial investors can defer capital gains and reposition into Pensacola metro assets.",
  },
];

export default function EscambiaMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Escambia County", href: "/markets/escambia" },
        ]}
      />

      <Hero
        title="Escambia County Commercial Real Estate"
        subtitle="Pensacola -- NAS-anchored stability, defense tech and cybersecurity office, I-10 industrial, and Gulf Coast hospitality. Barrett Henry, Broker Associate at REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />

      {/* Quick Answer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Escambia County is anchored by Naval Air Station Pensacola -- a generational employer that provides anti-cyclical stability few Florida markets can match. Layered on top of that base is a growing defense tech and cybersecurity cluster, a consistent I-10 industrial market, and Gulf Coast tourism demand driving hospitality and retail. Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Escambia County through referral partnerships and direct client engagement.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Escambia County Commercial Real Estate Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Escambia County&apos;s commercial real estate fundamentals rest on three pillars: Naval Air Station Pensacola, the emerging
            cybersecurity and defense tech sector, and Gulf Coast tourism. These three anchors work together rather than competing --
            NAS creates baseline employer demand, the tech sector adds a growing professional workforce, and the beach corridor drives
            retail, restaurant, and hospitality investment.
          </p>
          <p>
            Investors and tenants often overlook Escambia because it is not Miami, Tampa, or Orlando. That is actually an advantage.
            Fewer institutional players, less hype-driven pricing, and clearer underwriting are characteristics of this market. For
            investors comparing northwest Florida to other markets, see also the{" "}
            <Link href="/markets/bay" className="font-semibold text-black underline">Bay County market</Link>{" "}
            east along the Panhandle, and note how Escambia&apos;s year-round employer base differentiates it from the more tourism-dependent
            Emerald Coast communities. Closer to Tampa Bay,{" "}
            <Link href="/markets/hillsborough" className="font-semibold text-black underline">Hillsborough County</Link>{" "}
            remains the region&apos;s most liquid CRE market for investors seeking higher transaction volume.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80"
            alt="Professional office interior representing Pensacola defense tech and CRE market"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Downtown Pensacola&apos;s tech and defense contractor office corridor is attracting genuine tenant demand tied to NAS Pensacola and federal investment.
          </p>
        </div>
      </section>

      {/* Key Corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Commercial Corridors in Escambia County</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">Downtown Pensacola -- 9th Avenue and Palafox District</h3>
              <p className="mt-2">
                This is where the tech and{" "}
                <Link href="/commercial/office-space" className="font-semibold text-black underline">office</Link>{" "}
                action concentrates. Adaptive reuse conversion activity, new build-out in creative office and startup incubators, and
                government contractor services have transformed this corridor. Property owners are investing in infrastructure and tenants
                are coming because of the talent pool and proximity to NAS decision-makers. The Palafox District adds restaurant and
                retail activation that sustains foot traffic and supports multifamily investment nearby.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">I-10 Industrial Corridor -- Cantonment to Brent</h3>
              <p className="mt-2">
                The spine of Escambia County&apos;s logistics and light{" "}
                <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">industrial market</Link>.
                This corridor serves the port, the military, and regional distribution. Tenants seek functional warehousing, cross-dock
                facilities, and manufacturing support. Lease rates are lower than coastal Florida but occupancy patterns are solid,
                driven by port activity and contractor demand. For investors comparing Florida industrial markets, Escambia offers more
                accessible entry pricing than Tampa Bay or Jacksonville at similar occupancy fundamentals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Pensacola Beach and US-98 Tourism Corridor</h3>
              <p className="mt-2">
                Hospitality, restaurant, and service{" "}
                <Link href="/commercial/retail-space" className="font-semibold text-black underline">retail</Link>{" "}
                dominate. Hotel development, F&amp;B leasing, and tourism-support commercial space drive this submarket. For investors
                targeting seasonal or year-round hospitality real estate, this corridor offers genuine demand with established traffic
                patterns. Pensacola Beach&apos;s location on a barrier island also constrains supply, supporting pricing power for
                well-positioned assets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Cantonment -- Emerging Suburban Retail</h3>
              <p className="mt-2">
                North of I-10, Cantonment is an emerging secondary corridor. Retail, fast-casual dining, and service tenants serve a
                growing residential population. More suburban feel, more affordable rents, and a good entry point for smaller investors
                or tenants seeking value without sacrificing tenant credit or visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Active Property Types and Demand Drivers</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Office -- Tech and Defense",
              body: "Tech startups, government contractors, engineering firms, and professional services anchor demand. Downtown is moving upscale; outlying areas offer value-oriented flex and traditional office. NAS-related tenants drive small-to-mid-size leasing activity across the corridor.",
            },
            {
              title: "Industrial and Logistics",
              body: "Port-adjacent and I-10-corridor industrial concentrates tenant velocity. Manufacturing support, logistics, cross-dock, and contractor storage all have consistent demand. Reliable utilities, good highway access, and reasonable rents make Escambia competitive against larger Florida industrial markets.",
            },
            {
              title: "Retail and Hospitality",
              body: "Coastal retail (F&B, hospitality support, tourist retail) and suburban retail (fast casual, service, convenience) perform consistently. Anchor tenants include national chains and regional operators. Less competitive bidding pressure than Tampa Bay or Jacksonville markets.",
            },
            {
              title: "Mixed-Use and Medical",
              body: "Hotel, resort, and multi-tenant hospitality development drives significant activity along the coast and downtown. Medical office near NAS healthcare facilities and the growing local population creates consistent owner-user and investment demand.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
              <p className="font-bold text-black">{item.title}</p>
              <p className="mt-2 text-[#666666]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Escambia Matters */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Escambia County Matters for CRE Investors</h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666] list-disc pl-6">
            <li>
              <strong className="text-black">Diversified Demand:</strong> Military, tech, tourism, logistics, and light manufacturing
              create overlapping demand across multiple property types. You are not chasing one tenant type or one economic driver.
            </li>
            <li>
              <strong className="text-black">Lower Competition:</strong> Fewer institutional players, fewer out-of-state investors,
              less hype-driven pricing. Better negotiating position and clearer underwriting compared to Tampa Bay or Jacksonville.
            </li>
            <li>
              <strong className="text-black">Strategic Geography:</strong> Escambia is the northwest anchor of Florida. Port access,
              I-10 connectivity, and regional distribution significance matter for logistics tenants serving the Southeast.
            </li>
            <li>
              <strong className="text-black">Anti-Cyclical Stability:</strong> NAS is not going anywhere. When commercial markets
              weaken, military-adjacent demand holds. When they strengthen, you have upside from tech growth and tourism recovery.
              That combination is rare in Florida CRE.
            </li>
          </ul>
        </div>
      </section>

      {/* Barrett Services */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Works in Escambia County</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience, holding designations
            including e-PRO, MRP, SRS, and REMAX Hall of Fame. He works Escambia County primarily through referral relationships and
            direct client engagement, drawing on REMAX network connections in Pensacola and decades of Florida CRE relationships.
          </p>
          <p>
            Barrett handles{" "}
            <Link href="/services/tenant-representation" className="font-semibold text-black underline">tenant representation</Link>,{" "}
            <Link href="/services/landlord-leasing" className="font-semibold text-black underline">landlord advisory</Link>,{" "}
            <Link href="/services/investment-sales" className="font-semibold text-black underline">investment sales</Link>,
            and market intelligence work across office, industrial, and retail. For investors considering Escambia County as part of
            a broader Florida strategy, he can build comparative analyses against active markets like{" "}
            <Link href="/markets/hillsborough" className="font-semibold text-black underline">Hillsborough</Link>{" "}
            or{" "}
            <Link href="/markets/pinellas" className="font-semibold text-black underline">Pinellas</Link>{" "}
            -- factoring cap rates, tenant profiles, and long-term demand drivers. See the{" "}
            <Link href="/calculators/cap-rate" className="font-semibold text-black underline">cap rate calculator</Link>{" "}
            and{" "}
            <Link href="/blog/what-makes-a-good-commercial-investment" className="font-semibold text-black underline">commercial investment evaluation guide</Link>{" "}
            as starting points.
          </p>
          <p>
            <Link href="/contact" className="font-semibold text-black underline">Contact Barrett directly</Link> at (813) 733-7907.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About Escambia County CRE</h2>
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
        heading="Ready to Talk Escambia County Commercial Real Estate?"
        body="Whether you are leasing office space near NAS, evaluating industrial along I-10, investing in Gulf Coast hospitality, or comparing Pensacola to other Florida markets -- Barrett Henry has the network and 23+ years of experience to help you get it done right."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
