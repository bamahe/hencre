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
  title: "Dixie County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Dixie County, FL: land, rural retail, and timber assets along Florida's Nature Coast. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/dixie" },
  openGraph: {
    title: "Dixie County Commercial Real Estate | HenCRE",
    description:
      "Nature Coast land, rural commercial, and timber-related assets in Dixie County, FL. Expert guidance from Barrett Henry, Broker Associate at REMAX Collective.",
    url: "https://hencre.com/markets/dixie",
  },
};

const faqs = [
  {
    question: "Is Dixie County a good market for commercial real estate investment?",
    answer:
      "It depends on your strategy. If you are looking for appreciation, multi-tenant upside, or rapid value-add plays, this is not the market. If you are building a timber or conservation land portfolio, or you are an owner-operator seeking to purchase your own business location on Florida&apos;s Nature Coast, there is genuine opportunity here. The market is thin but stable, tied to fundamental economic drivers including forestry, fishing, and government employment.",
  },
  {
    question: "What types of commercial properties are available in Dixie County?",
    answer:
      "Availability is limited to small retail (typically owner-occupied), professional office space (medical, dental, legal), and land holdings including timber parcels, agricultural acreage, and conservation-eligible properties. You will not find traditional investment-grade multifamily, retail centers, or office parks here. Most commercial space is functional rather than speculative.",
  },
  {
    question: "Does Barrett Henry work directly in Dixie County?",
    answer:
      "Dixie County is a referral territory for Barrett&apos;s practice. He does not maintain a daily office presence there, but he has professional relationships with local brokers and operators in Cross City and Old Town who do. If you are serious about a Dixie County transaction, Barrett connects you with verified representation while providing strategic guidance and ensuring professional standards throughout the process.",
  },
  {
    question: "What is the biggest commercial opportunity in Dixie County?",
    answer:
      "Land. Timber parcels, conservation-eligible acreage, and rural properties represent the most active segment of the market. If you are building a portfolio tied to forestry operations, conservation easements, or long-term rural holdings, Dixie County offers availability and family-owned properties that larger markets do not. This is patient capital territory, not a fast-flip opportunity.",
  },
  {
    question: "How does Dixie County compare to Citrus and Columbia counties for rural land investment?",
    answer:
      "Dixie County is smaller and less active than either Citrus or Columbia counties. Citrus benefits from the Suncoast Parkway extension and stronger retail demand around Crystal River. Columbia County has a more established commercial base in Lake City along the I-75 corridor. Dixie is the most rural and niche of the three -- better suited to land and conservation strategies than operational commercial real estate.",
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
        { "@type": "ListItem", position: 3, name: "Dixie County", item: "https://hencre.com/markets/dixie" },
      ],
    },
    {
      "@type": "Service",
      name: "Dixie County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "Dixie County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory, referral partnerships, and land investment guidance for Dixie County, Florida -- serving Cross City, Old Town, and the Nature Coast corridor.",
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
    title: "Citrus County Commercial Real Estate",
    href: "/markets/citrus",
    description: "Nature Coast neighbor with stronger retail activity and the Suncoast Parkway corridor.",
  },
  {
    title: "Columbia County Commercial Real Estate",
    href: "/markets/columbia",
    description: "Lake City and the I-75 corridor -- a more active rural commercial market north of Dixie.",
  },
  {
    title: "Land and Development Advisory",
    href: "/commercial/land-development",
    description: "Commercial land strategy for Florida rural markets and development sites.",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description: "Florida commercial investment acquisition and disposition services.",
  },
  {
    title: "1031 Exchange Basics",
    href: "/insights/1031-exchange-basics",
    description: "How to use a 1031 exchange to defer taxes when repositioning rural Florida land holdings.",
  },
  {
    title: "CRE Valuation",
    href: "/services/cre-valuation",
    description: "Commercial property valuation for thin-transaction rural Florida markets.",
  },
];

export default function DixieMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Dixie County", href: "/markets/dixie" },
        ]}
      />

      <Hero
        title="Dixie County Commercial Real Estate"
        subtitle="Florida&apos;s Nature Coast land market -- timber parcels, rural commercial, and conservation-eligible acreage served by Barrett Henry, Broker Associate at REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />

      {/* Quick Answer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Dixie County is one of Florida&apos;s smallest and most rural commercial real estate markets. Cross City and Old Town serve as primary population centers, but transaction volume is minimal compared to Florida&apos;s major metros. The primary opportunity here is land -- timber parcels, conservation acreage, and rural property for patient-capital investors. Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Dixie County through referral partnerships with verified local brokers.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Dixie County Commercial Real Estate Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Dixie County sits on Florida&apos;s Nature Coast -- one of the state&apos;s most sparsely populated and least-developed regions.
            This is a market built on timber, commercial fishing, and government employment rather than corporate relocations or
            industrial logistics. If you are looking at Dixie County CRE, you are either a land investor building a conservation or
            timber portfolio, or you are a local operator with a specific need in the community. Barrett Henry will give you straight
            answers and connect you with the right brokers for either path.
          </p>
          <p>
            As a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience, Barrett works Dixie County through
            referral partnerships with local brokers in Cross City and Old Town who maintain direct market presence. Compare this
            market to the more active Nature Coast county immediately to the south:{" "}
            <Link href="/markets/citrus" className="font-semibold text-black underline">Citrus County</Link>{" "}
            has significantly more retail and commercial activity driven by the Suncoast Parkway extension and Crystal River&apos;s
            population base. Further north,{" "}
            <Link href="/markets/columbia" className="font-semibold text-black underline">Columbia County</Link>{" "}
            offers a more established commercial market anchored by Lake City and the I-75 corridor.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80"
            alt="Rural Florida commercial corridor and natural landscape"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Dixie County&apos;s commercial activity centers on land holdings, rural retail, and Nature Coast-related businesses rather than corporate or institutional CRE.
          </p>
        </div>
      </section>

      {/* Key Corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Primary Commercial Corridors</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">Cross City -- US 19 Corridor</h3>
              <p className="mt-2">
                The primary retail and service hub. Small-footprint commercial, limited vacancies, mostly owner-occupied or local operators.
                Unlike coastal markets, you will not find spec development or national tenant expansion here. What you will find is
                owner-occupied businesses and family-held properties serving the local population. The{" "}
                <Link href="/commercial/retail-space" className="font-semibold text-black underline">retail</Link>{" "}
                that exists here is functional -- service stations, grocery, healthcare, and government-adjacent services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Old Town -- Secondary Population Center</h3>
              <p className="mt-2">
                Minimal retail space. Government services dominate the employment landscape. Small{" "}
                <Link href="/commercial/office-space" className="font-semibold text-black underline">professional office</Link>{" "}
                space exists for local practitioners. This is not an investment-grade submarket but it does serve the local professional
                service base.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Timber and Agricultural Land -- The Primary Opportunity</h3>
              <p className="mt-2">
                The real estate story in Dixie County is land. Large acreage holdings, forestry operations, and rural property dominate
                deal flow. Timber parcels, conservation-eligible land, and agricultural acreage are where most investment and transaction
                activity concentrates. For investors evaluating{" "}
                <Link href="/commercial/land-development" className="font-semibold text-black underline">Florida land</Link>{" "}
                as part of a broader rural portfolio strategy, Dixie County offers availability and family-owned properties not found in
                more urbanized markets.
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
              title: "Rural Land and Timber",
              body: "The most active segment of the Dixie County market. Timber parcels, conservation land, and agricultural acreage attract patient capital from investors building rural portfolios. Prices reflect the limited economy, but availability and family ownership create opportunities.",
            },
            {
              title: "Small Retail and Services",
              body: "Single-tenant buildings, neighborhood strips, and owner-occupied commercial along US 19. Usually 1,500 to 5,000 SF. Primarily local tenants serving Cross City and Old Town residents with essential goods and services.",
            },
            {
              title: "Professional and Medical Office",
              body: "Government offices, dental, medical, and legal practices. Limited and typically owner-occupied. Owner-user buyers in particular can find value here -- purchasing your own building rather than leasing is often the right strategy in this thin market.",
            },
            {
              title: "Eco-Tourism and Hospitality",
              body: "The Nature Coast brand is gaining traction. Small hospitality concepts, fishing charter facilities, and eco-lodge development create niche opportunities. Scale is modest but the trend toward outdoor recreation is real and growing.",
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
          <h2 className="text-2xl font-bold sm:text-3xl">What Drives the Dixie County Economy</h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666] list-disc pl-6">
            <li>
              <strong className="text-black">Timber Industry:</strong> The backbone of the rural economy. Forestry operations, timber
              harvesting, and land management are primary economic drivers. Land value ties directly to timber cycles and forest management.
            </li>
            <li>
              <strong className="text-black">Commercial Fishing:</strong> Gulf Coast proximity brings fishing-related commerce. Dock services,
              seafood processing, and boat repairs serve a modest but consistent base. Seasonal activity affects the rhythm of the local economy.
            </li>
            <li>
              <strong className="text-black">Government Employment:</strong> County and municipal jobs provide the most stable employer base.
              Schools, courts, and county services are the largest employers -- the anti-cyclical anchor of the local economy.
            </li>
            <li>
              <strong className="text-black">Nature Coast Tourism:</strong> Eco-tourism, fishing charters, and outdoor recreation are
              growing demand drivers. The Nature Coast brand attracts visitors seeking springs, wildlife, and Gulf access -- creating
              niche retail and service opportunities at a scale appropriate to this market.
            </li>
          </ul>
        </div>
      </section>

      {/* Barrett Services */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Works in Dixie County</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience, holding designations
            including e-PRO, MRP, SRS, and REMAX Hall of Fame. Dixie County is a referral territory -- he does not maintain a daily
            presence there, but he has professional relationships with local brokers in Cross City and Old Town who do.
          </p>
          <p>
            Here is what Barrett offers for Dixie County clients: market guidance and realistic expectations for this limited market;
            connections to local brokers who understand the ownership patterns and transaction landscape; professional representation
            for buyers and sellers of land, business properties, or income-producing assets; and{" "}
            <Link href="/services/cre-valuation" className="font-semibold text-black underline">valuation guidance</Link>{" "}
            in a thin-data market where comparable sales analysis requires extra care.
          </p>
          <p>
            For investors considering Dixie County land as part of a broader rural Florida strategy, Barrett can also advise on{" "}
            <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="font-semibold text-black underline">1031 exchange positioning</Link>{" "}
            and the role rural land can play in a diversified CRE portfolio alongside more active markets like{" "}
            <Link href="/markets/hillsborough" className="font-semibold text-black underline">Hillsborough</Link>{" "}
            or{" "}
            <Link href="/markets/polk" className="font-semibold text-black underline">Polk County</Link>.
          </p>
          <p>
            <Link href="/contact" className="font-semibold text-black underline">Contact Barrett directly</Link> at (813) 733-7907.
            He will assess your situation and make the right introduction.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About Dixie County CRE</h2>
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
        heading="Ready to Talk Dixie County Commercial Real Estate?"
        body="Whether you are evaluating Nature Coast land, exploring a rural property sale, or need guidance on what this thin market can realistically deliver -- Barrett Henry has the network and 23+ years of Florida CRE experience to give you straight answers and connect you with the right specialists."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
