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
  title: "St. Johns County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in St. Johns County, FL -- St. Augustine, Nocatee, Ponte Vedra Beach, and the CR-210 growth corridor. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/st-johns" },
  openGraph: {
    title: "St. Johns County Commercial Real Estate | HenCRE",
    description:
      "St. Johns County is Florida&apos;s fastest-growing large county -- historic St. Augustine tourism, Nocatee residential growth, and Ponte Vedra upscale retail. Barrett Henry, REMAX Collective.",
    url: "https://hencre.com/markets/st-johns",
    siteName: "HenCRE",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What drives commercial real estate demand in St. Johns County?",
    answer:
      "St. Johns County has ranked as Florida&apos;s fastest-growing large county by percentage for several consecutive years. The primary driver is Jacksonville spillover -- high-income households relocating south from Duval County seeking top-ranked schools, lower density, and newer housing. Nocatee, one of the nation&apos;s best-selling master-planned communities, has generated sustained retail and service commercial demand along the CR-210 corridor. Historic St. Augustine anchors a year-round tourism economy that drives hospitality, restaurant, and specialty retail demand distinct from any other Florida coastal market. Ponte Vedra Beach and the A1A corridor attract upscale retail, professional services, and medical office serving high-income residential.",
  },
  {
    question: "What are the most active commercial areas in St. Johns County?",
    answer:
      "The CR-210 corridor (Nocatee area) between I-95 and the St. Johns River is the county&apos;s fastest-growing commercial corridor -- major retail anchors, medical office, restaurants, and service commercial following Nocatee&apos;s residential buildout. US-1 through St. Augustine and the historic district support tourism hospitality and specialty retail year-round. The A1A/Ponte Vedra Beach corridor has high-end retail, professional services, and golf-adjacent commercial. The World Golf Village area on SR-16 near I-95 supports hospitality and golf-tourism retail. The US-1 corridor south of St. Augustine toward Flagler County is an emerging logistics and light industrial corridor.",
  },
  {
    question: "What property types perform best in St. Johns County?",
    answer:
      "Necessity retail and service commercial along CR-210 and US-1 in the Nocatee growth zone is the county&apos;s most active category -- strip centers, medical offices, fast food, and professional services following rooftop growth. Hospitality and tourism retail in historic St. Augustine is stable and durable -- the oldest city in the United States generates consistent leisure travel demand regardless of broader economic conditions. Upscale restaurant and retail in Ponte Vedra Beach serves one of the highest-income demographic concentrations in Northeast Florida. Medical office near Flagler Hospital and new healthcare campuses along the growth corridors is expanding with the residential base. Commercial land at developing intersections along CR-210 and I-95 is the county&apos;s primary early-entry opportunity.",
  },
  {
    question: "How does St. Johns County compare to Flagler County as an investment market?",
    answer:
      "St. Johns County is more mature than Flagler County, with the Nocatee corridor already generating institutional-scale retail demand, while Flagler County (Palm Coast) is still in an earlier residential formation stage. Both markets benefit from I-95 connectivity and Northeast Florida population growth. St. Johns has a more diverse commercial profile -- combining historic tourism, upscale coastal retail, and growth-stage suburban commercial in a single county. Flagler offers lower land basis and earlier-stage opportunity for investors willing to wait for commercial formation. For buyers seeking existing cash-flowing commercial assets, St. Johns has more inventory; for land and development, Flagler County offers more opportunity at lower entry cost.",
  },
  {
    question: "How does Barrett Henry approach commercial real estate in St. Johns County?",
    answer:
      "Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He approaches St. Johns County as part of his statewide Florida commercial practice, providing market analysis, investment support, and professional introductions for clients with commercial interests in St. Augustine, the Nocatee/CR-210 corridor, or Ponte Vedra Beach. He serves all 67 Florida counties.",
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
        { "@type": "ListItem", position: 3, name: "St. Johns County", item: "https://hencre.com/markets/st-johns" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Real Estate Services -- St. Johns County, FL",
      description:
        "Commercial real estate brokerage in St. Johns County, Florida. Retail, hospitality, medical office, and land from Barrett Henry, Broker Associate at REMAX Collective.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "St. Johns County, Florida" },
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
  { href: "/markets/flagler", title: "Flagler County Commercial Real Estate" },
  { href: "/markets/volusia", title: "Volusia County Commercial Real Estate" },
  { href: "/markets/seminole", title: "Seminole County Commercial Real Estate" },
  { href: "/commercial/retail-space", title: "Retail Space" },
  { href: "/commercial/land-development", title: "Land Development" },
  { href: "/services/investment-sales", title: "Investment Property Sales" },
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
          { label: "St. Johns County", href: "/markets/st-johns" },
        ]}
      />
      <Hero
        title="St. Johns County Commercial Real Estate"
        subtitle="Florida&apos;s fastest-growing large county combines historic St. Augustine tourism, Nocatee&apos;s master-planned growth corridor, and Ponte Vedra&apos;s upscale coastal retail into a commercial market unlike any other in the state. Barrett Henry, REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 not-prose">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer: What defines St. Johns County&apos;s commercial real estate market?</h2>
          <p className="text-blue-800 text-sm leading-relaxed">
            St. Johns County runs three commercial economies simultaneously: historic St. Augustine&apos;s year-round tourism,
            Nocatee&apos;s rapid residential-driven suburban commercial formation, and Ponte Vedra Beach&apos;s upscale coastal
            retail and professional services. It is the fastest-growing large county in Florida, which means commercial
            formation is happening faster here than almost anywhere else in the state -- creating both early-entry land
            opportunity and stable existing-inventory demand.
          </p>
        </section>

        <section>
          <h2>St. Johns County Commercial Real Estate Market Overview</h2>
          <p>
            St. Johns County occupies a unique position in Florida&apos;s commercial real estate landscape as a county where
            three completely distinct commercial economies coexist within one political boundary. The northern corridor
            adjacent to Duval County is a high-growth residential market where Nocatee -- consistently one of the
            nation&apos;s best-selling master-planned communities -- has generated suburban commercial formation at a pace
            that rivals markets twice its population. The central corridor around St. Augustine is anchored by the oldest
            city in the United States, generating durable year-round tourism demand for hospitality, specialty retail,
            and food-and-beverage. The coastal A1A corridor through Ponte Vedra Beach represents a third economy entirely --
            one of the wealthiest ZIP codes in Northeast Florida, driving upscale retail, professional services, and
            golf-adjacent commercial.
          </p>
          <div className="my-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80"
              alt="St. Johns County Florida coastal commercial corridor and historic district"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <p>
            What makes St. Johns County unusual among Florida growth markets is the quality of the residential base
            driving commercial demand. The county consistently ranks at or near the top of Florida counties for median
            household income, school quality, and in-migration from high-earning Jacksonville professionals. Compare
            this demographic profile to <Link href="/markets/flagler">Flagler County</Link> to the south -- which is
            growing rapidly from a lower base -- and the difference in commercial demand quality is significant.
            St. Johns buyers and tenants carry more purchasing power, which supports medical office, upscale retail,
            and professional services at price points that suburban Florida markets rarely see.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-200 p-6 my-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Commercial Areas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Nocatee / CR-210 Corridor</h3>
              <p className="text-gray-700 text-sm mt-1">
                The county&apos;s fastest-growing commercial corridor. Major retail anchors, strip centers, medical offices,
                restaurants, and service commercial following Nocatee&apos;s continued residential buildout. The CR-210
                interchange at I-95 has attracted the county&apos;s most active new development pipeline.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Historic St. Augustine (US-1 / King Street)</h3>
              <p className="text-gray-700 text-sm mt-1">
                Tourism hospitality, boutique retail, specialty restaurants, and bed-and-breakfast operators serving the
                oldest city in the United States. Year-round demand from domestic and international visitors creates
                durable commercial demand that is not correlated to the local residential economy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Ponte Vedra Beach (A1A / US-1 Corridor)</h3>
              <p className="text-gray-700 text-sm mt-1">
                High-income residential base supporting upscale retail, professional services, medical office, and
                golf-adjacent commercial. One of Northeast Florida&apos;s strongest demographics for luxury retail
                and specialty restaurant investment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">World Golf Village (SR-16 / I-95)</h3>
              <p className="text-gray-700 text-sm mt-1">
                Golf tourism destination with hospitality, resort retail, and conference-oriented commercial. The
                World Golf Hall of Fame drives destination traffic beyond purely local demand.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Active Property Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              {
                title: "Retail & Service Commercial",
                desc: "Necessity and convenience retail along CR-210 and US-1 following residential growth. Strip centers, fast food pads, and service commercial in Nocatee&apos;s commercial nodes are the most active new-build category.",
              },
              {
                title: "Hospitality & Tourism Retail",
                desc: "St. Augustine&apos;s hotel market, bed-and-breakfast properties, and tourism retail along the historic district. Year-round occupancy from domestic and international visitors stabilizes performance through seasonal variation.",
              },
              {
                title: "Medical Office & Healthcare",
                desc: "Flagler Hospital and new healthcare campuses along the CR-210 corridor anchor medical office demand that is growing with the residential base. Urgent care, specialist practices, and ancillary care are expanding rapidly.",
              },
              {
                title: "Commercial Land",
                desc: "Pad sites and undeveloped commercial land at developing intersections along CR-210, SR-16, and I-95. Early-entry land in the path of Nocatee&apos;s buildout is the county&apos;s primary development opportunity.",
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

          <h3>Jacksonville Spillover and Population Growth</h3>
          <p>
            St. Johns County has been a top-five fastest-growing large county in Florida for several consecutive years,
            driven by high-income Jacksonville professionals relocating south for school quality, lower density, and
            newer housing. That residential formation -- particularly in Nocatee -- is the engine behind the county&apos;s
            commercial development activity. For investors in <Link href="/commercial/retail-space">retail</Link> or
            medical office, tracking residential permitting in Nocatee and the CR-210 corridor is the clearest forward
            demand signal available.
          </p>

          <h3>Historic St. Augustine Tourism</h3>
          <p>
            St. Augustine is the oldest European-established city in the United States, and its historical and
            architectural character generates year-round leisure travel that is more durable than beach tourism and
            less correlated to weather cycles. Hospitality assets in the historic district and the A1A beachside
            corridor benefit from this consistent visitation pattern. Compare St. Augustine&apos;s tourism base to
            the event-driven model in <Link href="/markets/volusia">Volusia County</Link> (Daytona Beach motorsport
            and Bike Week) and the durability advantage becomes clear -- St. Augustine visitors come every month,
            not just during peak event windows.
          </p>

          <h3>I-95 Connectivity and Logistics Growth</h3>
          <p>
            St. Johns County&apos;s I-95 corridor connects it to Jacksonville&apos;s port and logistics infrastructure to the
            north and <Link href="/markets/flagler">Flagler County&apos;s</Link> emerging industrial corridor to the south.
            As <Link href="/commercial/land-development">commercial land</Link> at I-95 interchanges appreciates with
            residential growth, early-entry industrial and logistics positioning along the US-1 corridor south of
            St. Augustine is an underappreciated opportunity relative to the better-known Nocatee retail story.
          </p>
        </section>

        <section>
          <h2>How Barrett Henry Works St. Johns County</h2>
          <p>
            Barrett approaches St. Johns County as part of his statewide Florida commercial practice, with 23+ years of
            experience as a Broker Associate at REMAX Collective. He provides market analysis, land and retail investment
            support, and professional introductions for clients evaluating the Nocatee corridor, St. Augustine hospitality,
            or Ponte Vedra commercial opportunities.
          </p>
          <ul>
            <li>
              <strong>Retail and Land Acquisition:</strong> Identifying commercial land and retail development opportunities
              in the path of St. Johns County&apos;s growth. See <Link href="/commercial/land-development">land development</Link>.
            </li>
            <li>
              <strong>Investment Sales:</strong> Connecting buyers and sellers of St. Johns County commercial assets through
              <Link href="/services/investment-sales"> investment sales services</Link>.
            </li>
            <li>
              <strong>Northeast Florida Context:</strong> Placing St. Johns opportunities within the broader market
              including <Link href="/markets/flagler">Flagler</Link> and <Link href="/markets/volusia">Volusia County</Link>.
            </li>
          </ul>
          <p>
            Contact Barrett at (813) 733-7907 or through the <Link href="/contact">contact page</Link>.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions: St. Johns County Commercial Real Estate</h2>
          <FAQAccordion items={faqItems} />
        </section>

        <section id="lead-form" className="my-10">
          <h2>Talk to Barrett About St. Johns County</h2>
          <p>
            Whether you are evaluating retail land in Nocatee, hospitality in St. Augustine, or upscale commercial in
            Ponte Vedra Beach, Barrett provides professional guidance and statewide Florida context. Fill out the form
            and he will follow up directly.
          </p>
          <LeadForm />
        </section>

        <RelatedLinks links={relatedLinks} />

        <p className="text-sm text-gray-500 mt-8">Last updated: August 2026</p>
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate in St. Johns County?"
        body="Barrett Henry brings 23+ years of commercial real estate experience and Florida-wide market context to retail, hospitality, land, and investment opportunities in Florida&apos;s fastest-growing county."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
