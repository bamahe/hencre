import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Glades County Commercial Real Estate | HenCRE",
  description: "Commercial real estate in Glades County, FL — Moore Haven, Lake Okeechobee, cattle ranching, and seasonal recreation. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/glades" },
  openGraph: {
    title: "Glades County Commercial Real Estate | HenCRE",
    description: "Commercial real estate in Glades County, FL — Moore Haven, Lake Okeechobee, cattle ranching, and seasonal recreation. Barrett Henry, REMAX Collective.",
    url: "https://hencre.com/markets/glades",
    siteName: "HenCRE",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What makes Glades County commercial real estate unique?",
    answer: "Glades County operates on two economic engines: agricultural production (cattle ranching and sugar cane) and Lake Okeechobee recreational tourism. Most Florida commercial markets chase retail density or office growth. Glades County is about function — serving ranchers, equipment operators, marinas, and seasonal fishermen. The market rewards operators who understand that dynamic, not those importing urban strategies to a rural setting.",
  },
  {
    question: "What property types are active in Glades County?",
    answer: "The active asset classes are agricultural land and operating properties, small retail and service buildings in Moore Haven, marina and waterfront hospitality facilities, and agricultural equipment and supply facilities. Office is minimal. Multi-tenant retail parks do not exist here. The scale and character of every asset type reflects the county&apos;s rural and agricultural identity.",
  },
  {
    question: "Is Lake Okeechobee recreational tourism a real commercial opportunity?",
    answer: "Yes — for the right operator. The lake generates consistent seasonal traffic from fishing, hunting, boating, and wildlife tourism, peaking in fall and winter months. Marinas, fish camps, lodges, and outfitter operations near lake access see genuine demand from this seasonal base. It is a hands-on operator market, not a passive investor play. Special-use zoning and seasonal cash flow require an owner who understands the business.",
  },
  {
    question: "How does Glades County compare to neighboring agricultural markets like Hendry County?",
    answer: "Both counties are agricultural-first markets with rural commercial character. Glades is smaller and more remote, anchored by Moore Haven and the lake rather than a larger city like Clewiston in Hendry. Glades has the lake-driven tourism component that Hendry lacks in comparable form. Hendry has more established sugar industry infrastructure. Both reward patient capital and relationship-driven deal-making over marketing-driven brokerage.",
  },
  {
    question: "How does Barrett Henry approach Glades County commercial real estate?",
    answer: "Barrett treats Glades County as a referral territory — he does not oversell the market and he does not force urban tactics onto rural assets. With 23+ years of Florida commercial real estate experience as a Broker Associate at REMAX Collective, he connects agricultural operators, marina and lodge investors, and small-town retail buyers with the right properties and counterparties. His value here is honest assessment, statewide market context, and qualified introductions.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hencre.com" },
        { "@type": "ListItem", "position": 2, "name": "Markets", "item": "https://hencre.com/markets" },
        { "@type": "ListItem", "position": 3, "name": "Glades County", "item": "https://hencre.com/markets/glades" },
      ],
    },
    {
      "@type": "Service",
      "name": "Commercial Real Estate Services — Glades County, FL",
      "description": "Commercial real estate brokerage in Glades County, Florida. Agricultural properties, Lake Okeechobee hospitality, and rural commercial from Barrett Henry, REMAX Collective.",
      "provider": {
        "@type": "Person",
        "name": "Barrett Henry",
        "jobTitle": "Broker Associate",
        "email": "barrett@hencre.com",
        "telephone": "+18137337907",
        "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Glades County, Florida",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    },
  ],
};

const relatedLinks = [
  { href: "/markets/hendry", title: "Hendry County Commercial Real Estate" },
  { href: "/markets/highlands", title: "Highlands County Commercial Real Estate" },
  { href: "/markets/charlotte", title: "Charlotte County Commercial Real Estate" },
  { href: "/commercial/land-development", title: "Land Development Services" },
  { href: "/services/investment-sales", title: "Investment Property Sales" },
  { href: "/markets", title: "All Florida Markets" },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Markets", href: "/markets" },
        { label: "Glades County", href: "/markets/glades" },
      ]} />
      <Hero
        title="Glades County Commercial Real Estate"
        subtitle="Agricultural Florida at its most authentic — cattle ranching, sugar cane, and Lake Okeechobee recreational tourism. Barrett Henry, REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">

        {/* Quick Answer */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 not-prose">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer: What is Glades County commercial real estate about?</h2>
          <p className="text-blue-800 text-sm leading-relaxed">
            Glades County is an agricultural-first market anchored by Moore Haven, Lake Okeechobee, and the cattle and sugar cane operations that
            define Southwest Florida&apos;s rural interior. Commercial real estate here is about function — serving ranchers, agricultural operators,
            seasonal fishermen, and the small local population. It rewards operators and patient investors, not speculators or those expecting
            urban-style growth.
          </p>
        </section>

        {/* Market Overview */}
        <section>
          <h2>Glades County Commercial Real Estate Market Overview</h2>
          <p>
            Glades County sits in the heart of <Link href="/markets">Southwest Florida&apos;s</Link> agricultural region, anchored by Lake Okeechobee
            and defined by one of the state&apos;s most distinctive rural economies. This is cattle ranching country and sugar cane production
            territory — authentic Old Florida, not a market chasing vertical development or trophy assets. But that does not mean there is no
            commercial real estate story here.
          </p>
          <div className="my-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80"
              alt="Agricultural landscape in rural South Florida near Lake Okeechobee"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <p>
            If you are operating in Glades County, you are either serving the agricultural backbone or capturing the seasonal and transient
            traffic around the lake. That is your actual demand. I work this market carefully because it requires a different lens than
            <Link href="/markets/hillsborough"> Tampa Bay</Link> or <Link href="/markets">Miami-Dade</Link> — and frankly, most
            brokers do not understand it. The county&apos;s remoteness is both limitation and advantage. Land is abundant and affordable.
            Competition from national operators is minimal. But your tenant pool and buyer profile are deeply local or agricultural-focused.
          </p>
          <p>
            You are not competing on location against forty similar properties. You are competing on fit — does this space serve ranchers,
            equipment dealers, marinas, hunting lodges, or seasonal tourism? That is the question that drives <Link href="/services/investment-sales">every
            commercial transaction</Link> in this market.
          </p>
        </section>

        {/* Active Commercial Areas */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 my-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Commercial Areas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Moore Haven Downtown & Periphery</h3>
              <p className="text-gray-700 text-sm mt-1">
                The county seat and primary commercial center. Retail, services, and small commercial along the main thoroughfares. Gas stations,
                restaurants, hardware suppliers, and general retail serving the local population and through traffic. This is where you find the
                highest concentration of <Link href="/services/landlord-leasing" className="text-blue-700 underline">small commercial retail</Link> inventory
                in the county.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Lake Okeechobee Waterfront & Seasonal Zones</h3>
              <p className="text-gray-700 text-sm mt-1">
                Marinas, fishing camps, lodge facilities, and hospitality-adjacent uses. Seasonal demand spikes are real here — fishing season peaks
                fall through winter, hunting season brings additional traffic. Property near water access or with lake proximity commands attention
                from a specific operator class. This is the tourism component of Glades County&apos;s commercial market.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Agricultural Service Belt</h3>
              <p className="text-gray-700 text-sm mt-1">
                Equipment dealers, feed suppliers, ranch services, and logistics infrastructure supporting cattle operations and crop production
                throughout the county. These are not glamorous assets, but they are the functional spine of the county&apos;s economy and generate
                the most consistent commercial demand in Glades County.
              </p>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section>
          <h2>Active Property Types & Use Categories</h2>
          <p>
            The Glades market operates on a limited but focused set of asset types. Do not look for suburban-style strip centers or Class A office —
            the demand simply is not there. What exists tends to be older, smaller-scale, and purpose-built for agricultural or rural hospitality use.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              {
                title: "Agricultural Land & Operating Properties",
                desc: "Ranch land, pasture, crop production acreage, and facilities supporting livestock or sugar production. These transactions are relationship-driven and often involve multi-generational operations or agricultural investors.",
              },
              {
                title: "Small Retail & Service Properties",
                desc: "Standalone buildings and small multi-tenant spaces in Moore Haven and surrounding town centers. Anchored by necessity — gas, food, hardware, local services. Tenant stability is decent because these fill genuine local needs.",
              },
              {
                title: "Marina & Waterfront Hospitality",
                desc: "Fish camps, boat launch facilities, small lodging, and tourism-oriented uses around Lake Okeechobee. Seasonal cash flow, special licensing considerations, and a hands-on owner profile.",
              },
              {
                title: "Equipment & Agricultural Supply Facilities",
                desc: "Dealer space for farm equipment, feed supply, fuel distribution, and logistics. Industrial character at rural scale — not a warehouse park, but a building that moves goods efficiently for agricultural operators.",
              },
            ].map((type) => (
              <div key={type.title} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demand Drivers */}
        <section>
          <h2>What Drives Demand in Glades County</h2>

          <h3>Agricultural Production</h3>
          <p>
            Cattle ranching and sugar cane dominate the economic landscape. Property demand flows from operational need — land, equipment storage,
            processing facilities, supply distribution. When agricultural commodity prices shift, investment appetite changes. But the structural
            demand for <Link href="/commercial/land-development">agricultural land and support facilities</Link> is durable — these operations have
            been here for generations and are not relocating.
          </p>

          <h3>Lake Okeechobee Recreation & Seasonal Tourism</h3>
          <p>
            The lake is a genuine commercial draw for fishing, hunting, boating, and seasonal leisure. Property with lake access or near recreational
            infrastructure sees consistent interest from lodge operators, marina owners, and hospitality investors. This is counter-cyclical to some
            markets — it peaks in fall and winter months when snowbirds and seasonal fishermen arrive. A <Link href="/services/investment-sales">hospitality
            property</Link> here is a different animal than a Tampa Bay hotel, and it requires an operator who understands that.
          </p>

          <h3>Local Operational Need</h3>
          <p>
            Small retail, services, and equipment facilities serve the resident population and the agricultural workforce. Demand is steady but
            not exciting — it is about necessity, not growth chasing. Compare this to <Link href="/markets/sarasota">Sarasota</Link> or
            <Link href="/markets/collier"> Collier County</Link>, where retail demand is driven by population growth and tourism spending.
            In Glades, the demand drivers are more fundamental but also more stable.
          </p>

          <h3>Agricultural Land Values & Investment</h3>
          <p>
            Institutional and family agricultural investors periodically look at Glades County land for long-term holding, tax strategy, or
            operational expansion. This is a slower-moving, more conservative buyer class than you see in urban Florida markets. Transactions
            are relationship-driven and often happen off-market through trusted <Link href="/contact">broker introductions</Link>.
          </p>
        </section>

        {/* How Barrett Works This Market */}
        <section>
          <h2>How Barrett Henry Works Glades County</h2>
          <p>
            Barrett treats Glades County as a referral territory with 23+ years of Florida commercial real estate experience as a Broker
            Associate at REMAX Collective. That is exactly why his approach works here. He does not oversell or overprice. He understands
            the difference between agricultural land transactions, seasonal hospitality properties, and small-town retail — and he respects
            the decision-making pace and priorities of agricultural operators and rural property owners.
          </p>
          <ul>
            <li>
              <strong>Agricultural Property Marketing:</strong> Connecting ranches, operating properties, and equipment facilities with
              qualified agricultural investors and operators. Barrett does not force urban marketing tactics on rural assets.
            </li>
            <li>
              <strong>Lake & Waterfront Hospitality:</strong> Marinas, fishing camps, and lodge properties need operators who understand
              seasonal cash flow and the specific buyer and tenant profile for Lake Okeechobee recreation. Barrett represents both landlords
              and operators through his <Link href="/services/investment-sales">investment sales services</Link>.
            </li>
            <li>
              <strong>Small-Scale Retail & Service Properties:</strong> Moore Haven and local commercial. Barrett helps owners understand
              their actual market, price realistically, and find tenants or buyers who fit the property&apos;s capability.
            </li>
            <li>
              <strong>Networking & Introductions:</strong> His value here is often relationship-building — connecting buyers, tenants, or
              operators who understand rural Florida agriculture and <Link href="/commercial/land-development">land-based investment</Link>.
            </li>
          </ul>
          <p>
            Barrett works across <Link href="/markets">all of Florida&apos;s commercial real estate markets</Link> and understands rural
            Southwest Florida at a depth most brokers do not. Contact him at (813) 733-7907 or through the <Link href="/contact">contact
            page</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions: Glades County Commercial Real Estate</h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Lead Form */}
        <section id="lead-form" className="my-10">
          <h2>Talk to Barrett About Glades County</h2>
          <p>
            Whether you are evaluating agricultural land, a marina property, or small retail in Moore Haven, Barrett provides honest market
            assessment and professional execution in Glades County. Fill out the form and he will follow up directly.
          </p>
          <LeadForm />
        </section>

        <RelatedLinks links={relatedLinks} />

        <p className="text-sm text-gray-500 mt-8">Last updated: August 2026</p>
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate?"
        body="Whether you&apos;re leasing, buying, selling, or investing — Barrett Henry has the experience and local knowledge to get it done right."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
