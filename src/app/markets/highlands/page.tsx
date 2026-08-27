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
  title: "Highlands County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Highlands County, FL — Sebring, Avon Park, Avon Park Air Force Range, the Sebring Raceway, lake-front hospitality, and healthcare-driven retail. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/highlands" },
  openGraph: {
    title: "Highlands County Commercial Real Estate | HenCRE",
    description:
      "Commercial real estate in Highlands County, FL — Sebring, Avon Park, Sebring Raceway, lake-front hospitality, and healthcare-driven retail. Barrett Henry, REMAX Collective.",
    url: "https://hencre.com/markets/highlands",
    siteName: "HenCRE",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What drives commercial real estate demand in Highlands County?",
    answer:
      "Highlands County&apos;s commercial demand stems from several distinct sources: a large and growing retirement and seasonal resident population that drives healthcare, retail, and service demand; the annual Twelve Hours of Sebring motorsport event that generates hospitality and food-and-beverage activity; agricultural operations (citrus, cattle, row crops) in the rural parts of the county; and the lake-oriented recreation economy around Lake Istokpoga, Lake Okeechobee access, and the many smaller lakes throughout the county.",
  },
  {
    question: "What property types are most active in Highlands County?",
    answer:
      "Healthcare and medical office is the fastest-growing category, driven by the county&apos;s aging demographic. Retail and service commercial in Sebring and Avon Park serves a steady residential base. Hospitality properties — hotels, lodges, and short-term rentals — see demand from the Sebring Raceway event calendar and lake-front tourism. Agricultural land (citrus, cattle) remains a significant transaction category in the rural parts of the county.",
  },
  {
    question: "Is the Sebring Raceway a meaningful commercial opportunity?",
    answer:
      "The Sebring International Raceway hosts the Twelve Hours of Sebring, one of the oldest and most prestigious sports car endurance races in North America, held annually in March. The event draws significant visitor traffic to Highlands County, generating short-term hospitality and food-and-beverage demand. Operators within the hospitality and tourism sector should factor this seasonal peak into their business planning. The raceway itself also generates year-round track rental and motorsport event activity beyond the annual main event.",
  },
  {
    question: "How does Highlands County compare to Polk County for commercial investment?",
    answer:
      "Polk County is significantly more commercially developed — Lakeland, Winter Haven, and the I-4 corridor provide a deeper market with more investor activity, higher transaction volume, and a broader range of commercial property types. Highlands County has a smaller market with tighter inventory, less competition for acquisitions, and a demographic profile (older, retirement-oriented) that suits healthcare, service retail, and hospitality investors specifically. Cap rates in Highlands County have historically been somewhat higher than Polk County given the smaller market and lower liquidity.",
  },
  {
    question: "How does Barrett Henry serve Highlands County commercial clients?",
    answer:
      "Barrett works Highlands County as part of his statewide Florida commercial practice. As a Broker Associate at REMAX Collective with 23+ years of experience, he helps investors evaluate healthcare-anchored retail, hospitality properties, and agricultural land in Highlands County. He also represents tenants and landlords in the Sebring and Avon Park commercial markets. His value is honest market assessment, statewide pricing context, and qualified buyer and tenant introductions.",
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
        { "@type": "ListItem", position: 3, name: "Highlands County", item: "https://hencre.com/markets/highlands" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Real Estate Services — Highlands County, FL",
      description:
        "Commercial real estate brokerage in Highlands County, Florida. Healthcare-driven retail, hospitality, agricultural land, and Sebring/Avon Park commercial. Barrett Henry, REMAX Collective.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Highlands County, Florida",
      },
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
  { href: "/markets/polk", title: "Polk County Commercial Real Estate", description: "Lakeland and Winter Haven — the nearest major commercial market to Highlands County." },
  { href: "/markets/glades", title: "Glades County Commercial Real Estate", description: "Rural agricultural market south of Highlands County along Lake Okeechobee." },
  { href: "/markets/hardee", title: "Hardee County Commercial Real Estate", description: "Agricultural and light-industrial market to the west of Highlands County." },
  { href: "/markets/desoto", title: "DeSoto County Commercial Real Estate", description: "Another central Florida agricultural county with comparable commercial investment characteristics." },
  { href: "/services/investment-sales", title: "Investment Property Sales", description: "How Barrett helps investors evaluate and acquire income-producing properties across Florida." },
  { href: "/blog/tampa-bay-medical-office-real-estate-2026", title: "Medical Office CRE 2026", description: "Healthcare real estate trends across Florida — directly relevant to Highlands County's retirement demographic." },
  { href: "/markets", title: "All Florida Markets", description: "Browse Barrett Henry's commercial coverage across all 47 Florida counties." },
  { href: "/blog/florida-1031-exchange-what-investors-need-to-know", title: "Florida 1031 Exchange Guide", description: "How to defer capital gains taxes when repositioning Highlands County investment properties." },
  { href: "/blog/what-makes-a-good-commercial-investment", title: "What Makes a Good Commercial Investment?", description: "Core criteria for evaluating any Florida commercial property acquisition." },
  { href: "/blog/how-to-calculate-commercial-property-roi", title: "How to Calculate Commercial Property ROI", description: "Cap rate, cash-on-cash, and total return metrics for Highlands County acquisitions." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Highlands County", href: "/markets/highlands" },
        ]}
      />
      <Hero
        title="Highlands County Commercial Real Estate"
        subtitle="Sebring and Avon Park — a lake-rich interior market driven by retirees, the Sebring Raceway, and agricultural land. Barrett Henry, REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 not-prose">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer: What is Highlands County commercial real estate about?</h2>
          <p className="text-blue-800 text-sm leading-relaxed">
            Highlands County is an inland Florida market anchored by Sebring (county seat) and Avon Park, with a commercial
            landscape driven by its large retirement and seasonal population, lake-oriented recreation, the Sebring International
            Raceway, and an agricultural economy. Healthcare-anchored retail, hospitality, and agricultural land are the primary
            commercial investment categories.
          </p>
        </section>

        <section>
          <h2>Highlands County Commercial Real Estate Market Overview</h2>
          <p>
            Highlands County occupies a distinctive position in central Florida&apos;s lake country. Surrounded by dozens of lakes
            — including access to Lake Istokpoga, one of Florida&apos;s largest — the county draws a substantial retirement and
            seasonal resident population that creates steady demand for healthcare services, retail, and hospitality. Sebring,
            the county seat, is the dominant commercial center; Avon Park provides a secondary commercial base to the north.
          </p>
          <div className="my-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80"
              alt="Scenic lakefront in central Florida near Sebring Highlands County"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <p>
            What makes Highlands County commercially interesting is the combination of a stable retirement demographic, a notable
            annual motorsport event that brings national visitors, and agricultural land at accessible price points compared to
            coastal Florida. Compare this to the larger commercial base in <Link href="/markets/polk">Polk County</Link> to the
            north, or the Gulf Coast markets of <Link href="/markets/sarasota">Sarasota</Link> and{" "}
            <Link href="/markets/charlotte">Charlotte County</Link> to the west, and you can see where Highlands fits:
            a quieter, more specialized market with specific niches that reward targeted investment.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-200 p-6 my-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Commercial Areas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Sebring — US-27 Corridor and Downtown</h3>
              <p className="text-gray-700 text-sm mt-1">
                The county seat contains Highlands County&apos;s strongest concentration of retail, medical office, and service
                commercial. US-27 is the primary commercial spine. The downtown Sebring circle (a distinctive roundabout-centered
                historic downtown) has seen some independent retail and food-and-beverage activity alongside established
                service businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Avon Park</h3>
              <p className="text-gray-700 text-sm mt-1">
                Secondary commercial center along US-27 to the north. Retail and services for the northern part of the county
                and the Avon Park Air Force Range community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Sebring International Raceway Zone</h3>
              <p className="text-gray-700 text-sm mt-1">
                Hotels and hospitality properties near the raceway benefit from the Twelve Hours of Sebring event in March and
                year-round track activity. This is a specific niche within the county&apos;s commercial market.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Agricultural Land Throughout the County</h3>
              <p className="text-gray-700 text-sm mt-1">
                Citrus groves (with the caveat of greening disease pressures), cattle pasture, and row crop land throughout
                the rural county. Lake-adjacent land commands premiums for residential and recreational uses.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Active Property Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              {
                title: "Healthcare & Medical Office",
                desc: "The retirement and aging population creates consistent demand for medical office, urgent care, specialist practices, and healthcare-anchored retail. This is the fastest-growing commercial category in Highlands County.",
              },
              {
                title: "Retail & Service Commercial",
                desc: "Grocery-anchored centers, strip centers, and standalone buildings along US-27 in Sebring and Avon Park serving the resident base. Demand is stable and driven by local necessity rather than population growth.",
              },
              {
                title: "Hospitality & Short-Term Rentals",
                desc: "Hotels, motels, and lodging properties benefit from the Sebring Raceway event calendar and lake-front recreation. Investors in this category need to understand the seasonal demand pattern.",
              },
              {
                title: "Agricultural & Recreational Land",
                desc: "Cattle pasture, citrus, and lake-adjacent land. Agricultural land at lower per-acre costs than coastal Florida, with recreational and lake-front parcels commanding meaningful premiums.",
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

          <h3>Retirement and Aging Population</h3>
          <p>
            Highlands County has consistently attracted retirees and seasonal residents seeking Florida&apos;s climate at lower
            cost than coastal markets. This demographic is the strongest driver of commercial demand — healthcare services,
            pharmacy, grocery, and personal care retail all see sustained demand from an aging population. For investors evaluating
            medical office, compare Highlands County to what is happening in the broader{" "}
            <Link href="/blog/tampa-bay-medical-office-real-estate-2026">Florida medical office market</Link>.
          </p>

          <h3>Sebring Raceway and Motorsport Tourism</h3>
          <p>
            The Twelve Hours of Sebring is one of the most storied endurance races in North American motorsport, held annually
            in March. It draws tens of thousands of spectators and participants to a county that has a small year-round population
            — generating significant hospitality, food-and-beverage, and service demand during the event window. Hospitality
            operators in Sebring benefit from this built-in annual traffic spike alongside their year-round base.
          </p>

          <h3>Lake-Oriented Recreation and Tourism</h3>
          <p>
            Highlands County&apos;s lakes — particularly Lake Istokpoga, one of Florida&apos;s top bass fishing destinations —
            generate recreation-driven commercial demand for outfitters, boat storage, lodging, and food-and-beverage. This
            is similar in character to the lake-driven demand in <Link href="/markets/glades">Glades County</Link> around
            Lake Okeechobee, though Highlands County has a more developed retail and service base supporting it.
          </p>

          <h3>Agricultural Land Investment</h3>
          <p>
            Citrus and cattle land in Highlands County represents an accessible entry point for agricultural land investors
            who want central Florida exposure at lower per-acre costs than coastal or Tampa Bay corridor markets. Greening
            disease has changed the citrus calculus significantly — buyers should conduct thorough due diligence on any
            grove properties. Pastoral land for cattle is generally more straightforward to underwrite.
          </p>
        </section>

        <section>
          <h2>How Barrett Henry Works Highlands County</h2>
          <p>
            Barrett approaches Highlands County with 23+ years of Florida commercial real estate experience as a Broker Associate
            at REMAX Collective. He evaluates healthcare-anchored retail, hospitality properties, and agricultural land with
            honest market assessment and statewide pricing context. His value is connecting buyers, sellers, and operators with
            the right opportunities — not inflating expectations in a market where depth is limited.
          </p>
          <ul>
            <li>
              <strong>Healthcare and Medical Office:</strong> Evaluating and marketing medical office and healthcare retail
              assets aligned with Highlands County&apos;s aging demographic demand through his{" "}
              <Link href="/services/investment-sales">investment sales services</Link>.
            </li>
            <li>
              <strong>Hospitality and Lake-Front Properties:</strong> Understanding the seasonal demand patterns and
              operator requirements for hotel and lodging assets near the raceway and on Highlands County lakes.
            </li>
            <li>
              <strong>Agricultural and Recreational Land:</strong> Connecting buyers and sellers in the cattle, citrus, and
              lake-adjacent land market through relationship-driven introductions.
            </li>
          </ul>
          <p>
            Barrett works across <Link href="/markets">all of Florida&apos;s commercial real estate markets</Link>. Contact
            him at (813) 733-7907 or through the <Link href="/contact">contact page</Link>.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions: Highlands County Commercial Real Estate</h2>
          <FAQAccordion items={faqItems} />
        </section>

        <section id="lead-form" className="my-10">
          <h2>Talk to Barrett About Highlands County</h2>
          <p>
            Whether you are evaluating medical office, a hospitality property near the Sebring Raceway, or agricultural land in
            Highlands County, Barrett provides honest market assessment and professional execution. Fill out the form and he will
            follow up directly.
          </p>
          <LeadForm />
        </section>

        <RelatedLinks links={relatedLinks} />

        <p className="text-sm text-gray-500 mt-8">Last updated: August 2026</p>
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate in Highlands County?"
        body="Barrett Henry brings statewide Florida context and market expertise to healthcare-anchored retail, hospitality, and agricultural land opportunities in Highlands County."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
