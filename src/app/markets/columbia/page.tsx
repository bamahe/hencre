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
  title: "Columbia County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Columbia County, FL: I-75 and I-10 logistics hub, Lake City retail, VA Medical Center anchor, and distribution industrial. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/columbia" },
  openGraph: {
    title: "Columbia County Commercial Real Estate | HenCRE",
    description:
      "Lake City and Columbia County sit at the I-75/I-10 convergence -- a North Florida logistics hub with strong highway retail, industrial, and VA-anchored medical demand.",
    url: "https://hencre.com/markets/columbia",
  },
};

const faqs = [
  {
    question: "What makes Columbia County a logistics node in North Florida?",
    answer:
      "The intersection of I-75 (north-south) and I-10 (east-west) creates a geographic advantage for distribution and cross-dock operations. Companies moving goods through the Southeast need staging points; Lake City provides efficient access to regional and through traffic. It is not about local population -- it is about interstate commerce flow.",
  },
  {
    question: "How stable is medical office demand in Lake City?",
    answer:
      "The VA Medical Center anchors medical office demand and provides non-cyclical revenue stability. Medical practitioners, outpatient services, and ancillary healthcare businesses depend on that institutional customer base. This demand driver is not subject to retail cycles or economic volatility the way general retail is.",
  },
  {
    question: "What is the difference between highway retail and downtown retail in Columbia County?",
    answer:
      "Highway retail along I-75 and I-10 captures through traffic and regional demand based on visibility and access. Downtown Lake City retail serves the local population and traditional main street uses. Highway retail has higher throughput but depends on traffic volume; downtown retail depends on local residential and office worker spending.",
  },
  {
    question: "What industrial property types perform best in Columbia County?",
    answer:
      "Distribution-oriented industrial performs well due to the I-75/I-10 convergence. Warehousing, cross-dock facilities, and light industrial spaces designed for fast product movement attract tenant interest. This is not heavy manufacturing -- it is logistics infrastructure serving Southeast commerce corridors.",
  },
  {
    question: "Does Barrett Henry directly broker deals in Columbia County?",
    answer:
      "Barrett works Columbia County through referrals and client-driven opportunities. It is not his primary market focus, but he has the relationships and market knowledge to handle transactions effectively. He also connects clients with trusted North Florida specialists when dedicated local presence is needed.",
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
        { "@type": "ListItem", position: 3, name: "Columbia County", item: "https://hencre.com/markets/columbia" },
      ],
    },
    {
      "@type": "Service",
      name: "Columbia County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "Columbia County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory, tenant representation, and investment analysis for Columbia County, Florida -- serving Lake City, the I-75/I-10 logistics corridor, and VA Medical Center-anchored commercial demand.",
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
    title: "Alachua County Commercial Real Estate",
    href: "/markets/alachua",
    description: "Gainesville market -- university-anchored commercial demand north of I-75 in North Florida.",
  },
  {
    title: "Bradford County Commercial Real Estate",
    href: "/markets/bradford",
    description: "Adjacent rural market connecting Columbia County to Northeast Florida corridors.",
  },
  {
    title: "Industrial and Warehouse Space",
    href: "/commercial/industrial-warehouse",
    description: "Industrial investment and leasing strategy for Florida logistics and distribution.",
  },
  {
    title: "Lakeland Warehouse and Industrial Growth",
    href: "/blog/lakeland-warehouse-industrial-growth",
    description: "How the I-4 corridor industrial market compares to North Florida logistics hubs like Lake City.",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description: "Commercial investment acquisition and disposition advisory across Florida.",
  },
  {
    title: "Tenant Representation",
    href: "/services/tenant-representation",
    description: "Lease negotiation and site selection for commercial tenants across Florida markets.",
  },
];

export default function ColumbiaMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Columbia County", href: "/markets/columbia" },
        ]}
      />

      <Hero
        title="Columbia County Commercial Real Estate"
        subtitle="Lake City sits at the I-75 and I-10 convergence -- North Florida&apos;s logistics crossroads, with VA-anchored medical demand and highway retail driving steady commercial activity."
        ctaText="Talk to Barrett Henry"
        ctaHref="/contact"
      />

      {/* Quick Answer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Columbia County&apos;s commercial market is anchored by the I-75/I-10 intersection -- creating a natural logistics and
            distribution hub -- plus the VA Medical Center, which drives stable medical office demand. Highway retail, distribution
            industrial, and medical properties are the primary active asset classes. Barrett Henry, Broker Associate at REMAX Collective
            with 23+ years of real estate experience, works this market through referral relationships and direct client engagements.
          </p>
        </div>
      </section>

      {/* Market overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Columbia County Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Lake City and Columbia County sit at one of North Florida&apos;s most strategically valuable intersections -- where I-75 and
            I-10 converge. That positioning is why this market has quietly become a logistics and distribution hub, and why it warrants
            serious attention from investors and operators looking beyond the Tampa Bay and Jacksonville cores.
          </p>
          <p>
            The fundamentals here are solid. The I-75/I-10 convergence creates a genuine logistics advantage for distribution operators.
            The VA Medical Center anchors medical office demand with non-cyclical institutional strength. Highway-oriented retail captures
            significant through traffic volume from regional and interstate travelers. And labor costs remain reasonable compared to
            coastal Florida markets, which matters to operators managing thin margins.
          </p>
          <p>
            For investors exploring North Florida corridors, Columbia County offers a meaningful contrast to the headline growth of
            {" "}<Link href="/markets/hillsborough" className="font-semibold text-black underline">Hillsborough County</Link>{" "}
            or the resort dynamics of coastal markets -- value exists for the right buyer in the right asset type.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
            alt="Interstate highway logistics corridor in North Florida near Lake City"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            The I-75 and I-10 convergence at Lake City creates a natural logistics node for distribution operators serving the Southeast.
          </p>
        </div>
      </section>

      {/* Key corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">The Corridors That Matter</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">I-75 Corridor (North-South Trade)</h3>
              <p className="mt-2">
                This is the spine of Columbia County commercial activity. Highway-oriented retail, quick-service restaurants, and gas
                convenience clusters follow the interstate. What drives it is traffic volume from regional and through traffic, not just
                local capture. Established chains and regional operators compete for visibility and accessibility along this spine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">I-10 Corridor (East-West Distribution)</h3>
              <p className="mt-2">
                Where I-10 intersects with I-75, you have a natural point for{" "}
                <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">industrial and logistics activity</Link>.
                The convergence creates a logistics node where companies need last-mile distribution, warehousing, and cross-dock
                operations to serve the broader Southeast efficiently. This corridor is where real estate fundamentals show up in
                rental rates and occupancy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Downtown Lake City and Medical District</h3>
              <p className="mt-2">
                Lake City&apos;s downtown has traditional main street retail and service uses. The medical office demand in the area
                stems from the VA Medical Center -- a reliable, non-cyclical demand driver. Medical practitioners, outpatient services,
                and healthcare-adjacent businesses cluster around this anchor. It is a smaller footprint than major metros, but stable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Active Property Types</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Highway Retail",
              body: "The dominant commercial asset class in Columbia County. Pad sites, small retail centers, and drive-through compatible spaces command consistent interest. Traffic counts and throughput justify retail investment here in ways they might not in slower secondary markets.",
            },
            {
              title: "Industrial and Distribution",
              body: "Light industrial, warehousing, and distribution facilities represent a growing segment. The I-75/I-10 intersection creates competitive advantages for logistics operators. Tenants need space with direct interstate access for efficient product movement.",
            },
            {
              title: "Medical Office",
              body: "The VA Medical Center anchors medical office demand. Smaller medical plazas, dental offices, and outpatient facilities cluster in accessible locations. Secular tailwinds -- aging demographics and stable institutional demand -- keep utilization steady.",
            },
            {
              title: "Multi-Tenant Retail Centers",
              body: "Community-oriented retail centers serve the local population. These are working assets with tenant diversity that perform well when anchored by grocery, pharmacy, or healthcare uses.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
              <p className="font-bold text-black">{item.title}</p>
              <p className="mt-2 text-[#666666]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Barrett services */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Works Columbia County</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Columbia County is a referral territory for Barrett -- he takes on opportunities when clients ask or when deals align
              with his portfolio approach. He does not maintain a dedicated presence the way he does in{" "}
              <Link href="/markets/hillsborough" className="font-semibold text-black underline">Hillsborough</Link>{" "}
              or the Tampa Bay area, but he has market knowledge and broker relationships to execute effectively.
            </p>
            <p>
              Services Barrett provides in Columbia County include market analysis and positioning, buyer advisory for investors and
              owner-operators, <Link href="/services/tenant-representation" className="font-semibold text-black underline">tenant representation</Link>{" "}
              for businesses needing space, seller advisory for property owners considering disposition, and referrals to local operators
              and service providers through REMAX Collective and regional relationships.
            </p>
            <p>
              For investors considering a 1031 exchange into a North Florida distribution asset or retail property, Barrett advises on
              {" "}<Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="font-semibold text-black underline">Florida 1031 exchange strategy</Link>{" "}
              and{" "}
              <Link href="/insights/what-is-a-cap-rate" className="font-semibold text-black underline">cap rate analysis</Link>{" "}
              to help you evaluate Columbia County acquisitions in context.
            </p>
            <p>
              <Link href="/contact" className="font-semibold text-black underline">Contact Barrett</Link> at (813) 733-7907 to discuss
              your Columbia County needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About Columbia County CRE</h2>
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
        heading="Ready to Talk Columbia County Commercial Real Estate?"
        body="Whether you are a logistics operator, investor, or retail tenant evaluating Lake City and the I-75/I-10 corridor -- Barrett Henry brings 23+ years of Florida CRE experience and the REMAX Collective network to move your deal forward."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
