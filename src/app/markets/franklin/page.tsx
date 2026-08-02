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
  title: "Franklin County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Franklin County, FL: coastal hospitality, specialty retail, and marine-related commercial in Apalachicola and Carrabelle. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/franklin" },
  openGraph: {
    title: "Franklin County Commercial Real Estate | HenCRE",
    description:
      "Apalachicola historic downtown, coastal hospitality, and specialty commercial in Franklin County, FL. Expert guidance from Barrett Henry, Broker Associate at REMAX Collective.",
    url: "https://hencre.com/markets/franklin",
  },
};

const faqs = [
  {
    question: "Is Franklin County a good commercial real estate investment market?",
    answer:
      "Franklin County suits a specific investor profile -- patient capital, stable income, and appreciation tied to the scarcity value of a deliberately constrained coastal market rather than growth velocity. Environmental regulations and local government policy actively limit new commercial development, which means existing well-positioned commercial properties face less competition from new supply than comparable assets in growth-mode Florida markets. Tourism is stable, the oyster industry has cultural and economic staying power, and the communities here have collectively chosen slow growth -- which is a feature for the right operator, not a limitation.",
  },
  {
    question: "What types of commercial properties are available in Franklin County?",
    answer:
      "The active commercial segments are hospitality and tourism-focused properties, specialty retail and food service in Apalachicola&apos;s historic downtown, marine and aquaculture service facilities in Carrabelle and Eastpoint, and small professional and medical offices serving the local population. New development is constrained by environmental regulations, so most transactions involve existing buildings -- often historic structures with adaptive reuse potential. Inventory is thin and rarely hits the open market. Many of the best opportunities trade through local networks and relationships rather than formal listings.",
  },
  {
    question: "What makes Apalachicola commercial real estate distinctive?",
    answer:
      "Apalachicola has one of the most intact historic commercial districts in the Florida Panhandle -- Victorian-era structures, 100-year-old brick buildings, and a waterfront setting that attracts tourism and preservation-minded operators. The built environment is irreplaceable and difficult to replicate, which gives existing downtown properties a scarcity value that newer markets cannot offer. Historic tax credits can cover significant rehabilitation costs for qualifying buildings, making adaptive reuse financially viable for the right project and the right operator.",
  },
  {
    question: "Does Barrett Henry work directly in Franklin County?",
    answer:
      "Franklin County is a referral territory for Barrett&apos;s practice. He does not maintain a daily office presence in Apalachicola, but he has professional relationships with local brokers and community stakeholders who do. If you are serious about a Franklin County transaction -- whether it is acquiring a downtown commercial building, representing a business seeking a location, or selling a hospitality asset -- Barrett connects you with verified local representation while providing strategic guidance and ensuring professional standards throughout.",
  },
  {
    question: "Are there development opportunities in Franklin County given the environmental restrictions?",
    answer:
      "New ground-up development is limited by environmental regulations and deliberate local policy. Adaptive reuse is the primary development pathway -- converting existing historic structures to new commercial uses, particularly hospitality and specialty retail. These projects require patience, local relationships, and sometimes creative financing using historic tax credits. The scarcity of developable sites and the limits on new supply actually improve the economics of well-executed rehabilitation projects, since you are not competing with new-construction alternatives.",
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
        { "@type": "ListItem", position: 3, name: "Franklin County", item: "https://hencre.com/markets/franklin" },
      ],
    },
    {
      "@type": "Service",
      name: "Franklin County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "Franklin County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory for Franklin County, Florida -- coastal hospitality, specialty retail, and marine-related commercial in Apalachicola, Carrabelle, and Eastpoint.",
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
    title: "Escambia County Commercial Real Estate",
    href: "/markets/escambia",
    description: "Pensacola and the western Florida Panhandle -- a larger Panhandle CRE market with more transaction volume.",
  },
  {
    title: "Bay County Commercial Real Estate",
    href: "/markets/bay",
    description: "Panama City and the central Panhandle -- Gulf Coast commercial market recovering and growing post-Hurricane Michael.",
  },
  {
    title: "Calhoun County Commercial Real Estate",
    href: "/markets/calhoun",
    description: "Rural North Florida Panhandle market -- agricultural and rural commercial adjacent to Franklin County.",
  },
  {
    title: "Investment Sales Advisory",
    href: "/services/investment-sales",
    description: "Florida commercial investment acquisition and disposition services.",
  },
  {
    title: "CRE Valuation Services",
    href: "/services/cre-valuation",
    description: "Broker opinion of value for thin-transaction Florida coastal markets.",
  },
  {
    title: "Commercial Due Diligence Checklist",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to verify before closing on a commercial property in Florida -- especially critical in limited-data markets.",
  },
];

export default function FranklinMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Franklin County", href: "/markets/franklin" },
        ]}
      />

      <Hero
        title="Franklin County Commercial Real Estate"
        subtitle="Apalachicola, Carrabelle, and Florida&apos;s Forgotten Coast -- a distinctive coastal market built on heritage industries, tourism, and environmental stewardship. Barrett Henry, Broker Associate at REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />

      {/* Quick Answer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Franklin County is one of Florida&apos;s most distinctive coastal commercial markets -- small, deliberately constrained by environmental policy, and built around heritage industries including oystering, commercial fishing, and eco-tourism. Apalachicola is the commercial center, with a historic downtown that attracts boutique hospitality and specialty retail operators. Transaction volume is thin and most opportunities trade through local relationships rather than formal listings. Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Franklin County through referral partnerships with local brokers who maintain direct community presence.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Franklin County Commercial Real Estate Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Franklin County sits on Florida&apos;s Gulf Coast in the Panhandle -- a three-municipality coastal market centered on Apalachicola, Carrabelle, and Eastpoint. This is not a high-velocity commercial corridor like Tampa Bay or Jacksonville. It is a specialized market where real estate decisions are driven by fishing heritage, oyster aquaculture, eco-tourism, and a preservation-minded local culture that has chosen to manage growth carefully. The Apalachicola National Forest and the Apalachicola Bay National Estuarine Research Reserve frame much of the county&apos;s geography, limiting development sites and reinforcing the scarcity value of existing commercial inventory.
          </p>
          <p>
            What makes Franklin County relevant to investors and business owners is precisely what limits it: controlled growth. Strict environmental regulations, limited new development capacity, and strong local preference for preserving the character of these communities means existing well-positioned commercial properties face less competition from new supply than comparable assets in growth-mode Florida markets. For investors seeking stability and scarcity-driven value rather than velocity, this dynamic creates opportunity. Compare this to the more active Panhandle markets to the east:{" "}
            <Link href="/markets/bay" className="font-semibold text-black underline">Bay County</Link>{" "}
            (Panama City) has significantly more transaction volume and a recovering development market post-Hurricane Michael, while{" "}
            <Link href="/markets/escambia" className="font-semibold text-black underline">Escambia County</Link>{" "}
            (Pensacola) offers a larger, more liquid market with military-driven demand and an active office sector.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80"
            alt="Coastal Florida commercial corridor representing Franklin County's waterfront market environment"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Franklin County&apos;s commercial real estate is defined by its coastal setting, historic building stock, and environmental constraints -- factors that limit supply and preserve the scarcity value of existing assets.
          </p>
        </div>
      </section>

      {/* Key Corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Primary Commercial Corridors</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">Apalachicola Historic Downtown</h3>
              <p className="mt-2">
                The commercial heart of Franklin County. The historic downtown corridor offers small-format{" "}
                <Link href="/commercial/retail-space" className="font-semibold text-black underline">retail</Link>,{" "}
                <Link href="/commercial/office-space" className="font-semibold text-black underline">office</Link>, and hospitality spaces in Victorian-era structures and historic brick buildings that attract antique dealers, specialty retail, restaurants, bed-and-breakfasts, and boutique hotel operators. Foot traffic is seasonal and tourism-dependent. Downtown revitalization has created interest from hospitality entrepreneurs, though inventory turnover is measured and most opportunities are relationship-driven.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Carrabelle and the Working Waterfront</h3>
              <p className="mt-2">
                Carrabelle functions as a working waterfront town with marine-related commercial uses -- chandleries, seafood processing, boat services, and casual dining tied to the commercial fishing industry. Commercial real estate here is primarily single-tenant or owner-occupied properties that rarely hit the open market. When they do, they attract operators who understand the value of marine-adjacent locations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Eastpoint and Aquaculture Commerce</h3>
              <p className="mt-2">
                Eastpoint serves a similar role to Carrabelle with emphasis on oyster aquaculture and bay-related commerce. The oyster industry remains a genuine economic driver here -- commercial properties supporting aquaculture, seafood processing, and marine equipment are rarely available and command premium attention from industry participants who understand their scarcity value.
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
              title: "Hospitality and Tourism Properties",
              body: "The growth sector in Franklin County. Eco-tourism, heritage tourism, and fishing tourism drive seasonal demand for small hotels, vacation rentals, restaurants, and activity operators. If you are acquiring or leasing hospitality real estate here, understand that the market is seasonal with distinct peaks and revenue variation. Boutique adaptive reuse projects -- converting historic buildings to hospitality uses -- are the most active development format.",
            },
            {
              title: "Specialty Retail and Food Service",
              body: "Antique shops, art galleries, seafood restaurants, casual dining, and gift shops populate the retail landscape. These tenants are attracted to authentic waterfront character and tourist foot traffic. Owner-operator businesses dominate -- people relocating to run a specific business rather than national chains testing secondary markets. This category is thin but stable and consistent with the community's character.",
            },
            {
              title: "Marine and Aquaculture Services",
              body: "Commercial properties supporting oystering, seafood processing, marine equipment, and fishing services exist but are rarely available. When they are, they command premium attention from industry participants. This is the most specialized and least liquid segment of the Franklin County commercial market.",
            },
            {
              title: "Professional and Medical Office",
              body: "Limited but consistent demand from local professionals -- healthcare, legal, accounting, and consulting. These tenants operate on stability and established patient and client bases rather than growth velocity. Office space that works here is functional, affordable, and accessible to the local community. This is not a speculative office market.",
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
          <h2 className="text-2xl font-bold sm:text-3xl">What Drives the Franklin County Economy</h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666] list-disc pl-6">
            <li>
              <strong className="text-black">Oyster Industry:</strong> The Apalachicola Bay oyster harvest has been among the most celebrated in the country. Restoration efforts following a multi-year closure are ongoing, and the aquaculture and seafood industry remains a defining economic and cultural identity for the county.
            </li>
            <li>
              <strong className="text-black">Commercial Fishing:</strong> Gulf Coast proximity brings fishing-related commerce. Dock services, charter boats, seafood processing, and marine equipment serve a consistent base. Seasonal activity affects the local economy&apos;s rhythm.
            </li>
            <li>
              <strong className="text-black">Eco-Tourism and Heritage Tourism:</strong> National interest in small coastal communities with authentic character and preserved historic downtowns is growing. As larger Florida markets face congestion and loss of character, Apalachicola&apos;s deliberate approach to growth is increasingly seen as an asset. Tourism spending supports the hospitality and specialty retail commercial sectors.
            </li>
            <li>
              <strong className="text-black">Government and Local Employment:</strong> County and municipal jobs provide the most stable employer base. Schools, courts, and county services are the largest employers -- the anti-cyclical anchor of the local economy.
            </li>
          </ul>
        </div>
      </section>

      {/* Barrett Services */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Works in Franklin County</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of Florida commercial real estate experience. Franklin County is a referral territory -- he does not maintain a daily office presence in Apalachicola, but he has professional relationships with local brokers and operators who do. If you are serious about a Franklin County transaction, Barrett connects you with verified local representation while providing strategic guidance and ensuring professional standards throughout the process.
          </p>
          <p>
            For buyers evaluating Franklin County commercial property, Barrett provides market guidance and realistic expectation-setting for this thin-data market, where{" "}
            <Link href="/services/cre-valuation" className="font-semibold text-black underline">comparable sales analysis</Link>{" "}
            requires extra care. For sellers, Barrett positions your property accurately for the buyer pool that makes sense -- hospitality entrepreneurs, specialty retail operators, local owner-users -- and manages realistic expectations about Franklin County&apos;s unique value proposition and market pace.
          </p>
          <p>
            For investors considering Franklin County as part of a broader Florida coastal strategy, Barrett can help you understand how this market compares to more active Gulf Coast markets like{" "}
            <Link href="/markets/bay" className="font-semibold text-black underline">Bay County</Link>{" "}
            or{" "}
            <Link href="/markets/escambia" className="font-semibold text-black underline">Escambia County</Link>{" "}
            in terms of yield, liquidity, and investment strategy fit. Use the{" "}
            <Link href="/calculators/roi" className="font-semibold text-black underline">ROI calculator</Link>{" "}
            to model returns for specific Franklin County scenarios.{" "}
            <Link href="/contact" className="font-semibold text-black underline">Contact Barrett directly</Link>{" "}
            at (813) 733-7907 for a candid conversation about whether this market fits your investment strategy.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About Franklin County CRE</h2>
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
        heading="Ready to Talk Franklin County Commercial Real Estate?"
        body="Whether you are evaluating a downtown Apalachicola commercial property, exploring a hospitality acquisition on the Forgotten Coast, or need an honest assessment of whether this thin market fits your strategy -- Barrett Henry has 23+ years of Florida CRE experience and the REMAX Collective network to guide you."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
