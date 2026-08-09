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
  title: "Orange County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Orange County, FL -- Orlando, Lake Nona, International Drive, Maitland Center, and Sand Lake Road. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/orange" },
  openGraph: {
    title: "Orange County Commercial Real Estate | HenCRE",
    description:
      "Orange County is Florida&apos;s most populous county and home to the Orlando metro CRE market. Barrett Henry, REMAX Collective.",
    url: "https://hencre.com/markets/orange",
    siteName: "HenCRE",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What drives commercial real estate demand in Orange County?",
    answer:
      "Orange County is the economic engine of Central Florida. Disney, Universal, and SeaWorld create massive hospitality and retail demand on and near International Drive. MCO (Orlando International Airport) drives logistics and office demand along the Beachline corridor. Lake Nona Medical City is one of the fastest-growing healthcare clusters in the Southeast, anchored by Nemours Children&apos;s Hospital, UCF College of Medicine, and the VA Lake Nona Medical Center. The Maitland Center and Sand Lake Road corridors provide the region&apos;s largest concentration of suburban office product.",
  },
  {
    question: "What are the most active commercial submarkets in Orange County?",
    answer:
      "International Drive (I-Drive) anchors the hospitality and tourist retail segment. Sand Lake Road and the Dr. Phillips corridor host major office parks and upscale retail. Maitland Center is Central Florida&apos;s most established suburban office park. Lake Nona is the fastest-growing mixed-use submarket, combining medical, office, retail, and residential. Downtown Orlando has seen renewed office and mixed-use activity. The OIA/Narcoossee Road corridor is growing for logistics and industrial uses near the airport.",
  },
  {
    question: "What property types perform best in Orange County?",
    answer:
      "Hospitality and hotel properties benefit from Orlando&apos;s position as the most visited destination in the US. Medical office and healthcare facilities are strong in Lake Nona and along SR-528. Suburban office parks in Maitland Center and Sand Lake Road maintain high occupancy from corporate and financial tenants. Industrial and logistics space near MCO is in strong demand. Retail follows population growth in suburban nodes including Horizon West, Windermere, and Ocoee.",
  },
  {
    question: "How does Orange County compare to neighboring Seminole and Osceola counties?",
    answer:
      "Orange County is the core -- the largest population base, the most diverse commercial inventory, and the deepest institutional investment. Seminole County (north) is a more established suburban office market centered on Lake Mary/Heathrow. Osceola County (south) is tourism-heavy, dominated by hotel, retail, and hospitality commercial near Disney and US-192. For investors, Orange County offers the broadest asset types and most liquidity; for operators, specific submarkets within Orange vary dramatically in character and demand profile.",
  },
  {
    question: "How does Barrett Henry approach commercial real estate in Orange County?",
    answer:
      "Barrett operates a statewide Florida commercial practice from his Tampa Bay base as a Broker Associate at REMAX Collective. For Orange County assignments, he provides honest market context, connects clients with qualified Central Florida operators and lenders, and handles statewide investment strategies that include Orlando-area assets. Complex Central Florida transactions often involve local specialists he can introduce -- his value is Florida-wide context and 23+ years of commercial real estate experience behind every conversation.",
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
        { "@type": "ListItem", position: 3, name: "Orange County", item: "https://hencre.com/markets/orange" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Real Estate Services -- Orange County, FL",
      description:
        "Commercial real estate brokerage in Orange County, Florida. Hospitality, office, medical, industrial, and retail from Barrett Henry, Broker Associate at REMAX Collective.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "Orange County, Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const relatedLinks = [
  { href: "/markets/seminole", title: "Seminole County Commercial Real Estate" },
  { href: "/markets/osceola", title: "Osceola County Commercial Real Estate" },
  { href: "/markets/lake", title: "Lake County Commercial Real Estate" },
  { href: "/markets/polk", title: "Polk County Commercial Real Estate" },
  { href: "/services/investment-sales", title: "Investment Property Sales" },
  { href: "/commercial/industrial-warehouse", title: "Industrial & Warehouse Properties" },
  { href: "/commercial/office-space", title: "Office Space" },
  { href: "/markets", title: "All Florida Markets" },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Orange County", href: "/markets/orange" },
        ]}
      />
      <Hero
        title="Orange County Commercial Real Estate"
        subtitle="Florida&apos;s most populous county is the Orlando metro CRE hub -- hospitality, medical, office, logistics, and retail all converge here. Barrett Henry, REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 not-prose">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer: What defines Orange County&apos;s commercial real estate market?</h2>
          <p className="text-blue-800 text-sm leading-relaxed">
            Orange County is the economic center of Florida&apos;s Orlando metro -- home to Walt Disney World, Universal Studios,
            SeaWorld, MCO (Orlando International Airport), and Lake Nona Medical City. Commercial real estate spans hospitality,
            suburban office, medical, logistics, and retail across a diverse mix of submarkets from International Drive to
            Maitland Center to fast-growing Horizon West. It is the most liquid and commercially diverse market in Central Florida.
          </p>
        </section>

        <section>
          <h2>Orange County Commercial Real Estate Market Overview</h2>
          <p>
            With over 1.4 million residents and the most-visited tourism destination in the United States, Orange County
            commands one of Florida&apos;s most dynamic and diverse commercial real estate markets. The county&apos;s economic
            base is deliberately diversified -- tourism and hospitality anchor one end; healthcare, technology, aerospace,
            and financial services anchor the other. This mix insulates the market from single-sector downturns and generates
            sustained demand across all property types.
          </p>
          <div className="my-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              alt="Orange County Florida commercial corridor with office towers and retail"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <p>
            Major employers include Disney, Universal, AdventHealth, Orlando Health, Lockheed Martin, and a growing technology
            sector drawn by University of Central Florida graduates and the region&apos;s quality of life. MCO -- one of the
            nation&apos;s top 10 busiest airports -- creates a logistics and commercial services layer that reinforces the
            airport corridor from the Beachline east to Lake Nona. Compare this depth with the more focused markets in
            <Link href="/markets/polk"> Polk County</Link> to the west or <Link href="/markets/brevard"> Brevard County</Link> to
            the east, and Orange County&apos;s scale becomes immediately apparent.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-200 p-6 my-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Commercial Submarkets</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">International Drive (I-Drive)</h3>
              <p className="text-gray-700 text-sm mt-1">
                Florida&apos;s most concentrated hospitality and tourist retail corridor. Hotels, resorts, restaurants,
                entertainment venues, and the Orange County Convention Center (second largest in the US) anchor this submarket.
                Commercial demand is driven by 75+ million annual visitors to the Orlando metro.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Sand Lake Road / Dr. Phillips</h3>
              <p className="text-gray-700 text-sm mt-1">
                Upscale suburban office, restaurant row, and mixed-use along Sand Lake Road. The Restaurant Row corridor on
                Sand Lake draws regional dining traffic. Office product ranges from Class A corporate parks to medical office
                buildings serving the adjacent hospital systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Maitland Center</h3>
              <p className="text-gray-700 text-sm mt-1">
                Central Florida&apos;s most established suburban office park, located along I-4 north of downtown Orlando.
                Financial services, technology, and professional services firms anchor this mature submarket with consistent
                Class A office demand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Lake Nona Medical City</h3>
              <p className="text-gray-700 text-sm mt-1">
                One of the fastest-growing healthcare and life science districts in the Southeast. Nemours Children&apos;s
                Hospital, UCF College of Medicine, the VA Lake Nona Medical Center, and UF Health anchor a mixed-use
                master plan with medical office, retail, multifamily, and hotel product.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Active Property Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              {
                title: "Hospitality & Hotel",
                desc: "The largest hotel market in the US by room count. Investment opportunities range from branded select-service hotels to resort and convention hotel product on and near I-Drive.",
              },
              {
                title: "Medical Office & Healthcare",
                desc: "Lake Nona and the SR-528 corridor drive healthcare real estate demand. UCF, Nemours, and the VA create anchor demand; specialist practices and ancillary services fill supporting product.",
              },
              {
                title: "Suburban Office",
                desc: "Maitland Center, Sand Lake Road, and the Millenia corridor host established office parks with corporate, financial, and professional services tenants. Vacancy has moderated post-pandemic.",
              },
              {
                title: "Industrial & Logistics",
                desc: "Near-airport industrial demand on the Beachline (SR-528) corridor and Narcoossee Road. MCO&apos;s cargo operations drive freight-related uses; fulfillment and last-mile logistics are growing.",
              },
              {
                title: "Retail",
                desc: "Tourist retail on I-Drive; neighborhood and power center retail in growth suburbs including Horizon West, Ocoee, and Apopka. Necessity-driven suburban retail benefits from strong population growth.",
              },
              {
                title: "Land Development",
                desc: "Horizon West and northwest Orange County continue absorbing residential and commercial land. Medical, retail, and multifamily land near Lake Nona commands premium pricing.",
              },
            ].map((type) => (
              <div key={type.title} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Demand Drivers</h2>

          <h3>Tourism and Hospitality</h3>
          <p>
            Disney World, Universal Studios, SeaWorld, and 75+ million annual visitors make the Orlando metro the world&apos;s
            top tourism destination. That volume sustains one of the nation&apos;s largest hotel markets, the Orange County
            Convention Center, and dense food-and-beverage retail on and near I-Drive. For investors in
            <Link href="/commercial/nnn-net-lease"> NNN retail</Link> or hospitality assets, Orange County&apos;s tourism
            base provides demand depth that most Florida markets cannot match.
          </p>

          <h3>Healthcare and Life Sciences</h3>
          <p>
            Lake Nona Medical City is transforming southeast Orange County into one of the Southeast&apos;s leading healthcare
            and life science clusters. Nemours Children&apos;s, the VA, UCF Health, and UF Health together represent billions
            in healthcare infrastructure investment. Medical office, healthcare-adjacent retail, and ancillary professional
            services all follow that anchor demand. For investors evaluating <Link href="/services/investment-sales">
            healthcare-anchored commercial acquisitions</Link>, Lake Nona is one of Florida&apos;s most compelling destinations.
          </p>

          <h3>Population Growth and Suburban Expansion</h3>
          <p>
            Orange County&apos;s western suburbs -- Horizon West, Winter Garden, and Ocoee -- are among the fastest-growing
            residential markets in the US, driving demand for <Link href="/commercial/retail-space">neighborhood retail</Link>,
            medical office, and light industrial. The county&apos;s population growth rate consistently outpaces Florida&apos;s
            already strong statewide average, and the residential pipeline sustains commercial demand for the next decade.
          </p>
        </section>

        <section>
          <h2>How Barrett Henry Works Orange County</h2>
          <p>
            Barrett approaches Orange County as part of his statewide Florida commercial practice, operating as a Broker
            Associate at REMAX Collective with 23+ years of experience. He provides market context, investor introductions,
            and transaction support for clients with Central Florida commercial interests. For complex Orlando-area
            assignments that benefit from local boots-on-ground expertise, he connects clients with vetted Orange County
            specialists through his statewide professional network.
          </p>
          <ul>
            <li>
              <strong>Investment Sales:</strong> Connecting buyers and sellers of Orange County commercial assets through
              <Link href="/services/investment-sales"> investment sales services</Link> with statewide market context.
            </li>
            <li>
              <strong>Tenant Representation:</strong> Helping office, medical, and retail tenants navigate the Orange County
              market from <Link href="/services/tenant-representation">initial search through lease execution</Link>.
            </li>
            <li>
              <strong>1031 Exchange Replacement:</strong> Orange County is a frequent destination for investors doing
              <Link href="/blog/florida-1031-exchange-what-investors-need-to-know"> 1031 exchanges</Link> from Tampa Bay
              and South Florida.
            </li>
          </ul>
          <p>
            Contact Barrett at (813) 733-7907 or through the <Link href="/contact">contact page</Link>.
            He serves all <Link href="/markets">67 Florida counties</Link>.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions: Orange County Commercial Real Estate</h2>
          <FAQAccordion items={faqItems} />
        </section>

        <section id="lead-form" className="my-10">
          <h2>Talk to Barrett About Orange County</h2>
          <p>
            Whether you are evaluating hospitality assets on I-Drive, office in Maitland Center, or medical real estate
            in Lake Nona, Barrett provides Florida-wide context and professional execution. Fill out the form and he will follow up directly.
          </p>
          <LeadForm />
        </section>

        <RelatedLinks links={relatedLinks} />

        <p className="text-sm text-gray-500 mt-8">Last updated: August 2026</p>
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate in Orange County?"
        body="Barrett Henry brings statewide Florida context and 23+ years of commercial real estate experience to every Orange County assignment -- hospitality, medical office, suburban office, industrial, and investment sales."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
