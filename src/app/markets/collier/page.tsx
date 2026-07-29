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
  title: "Collier County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Collier County, FL: Naples Class A office, luxury retail, medical, and investment land. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/collier" },
  openGraph: {
    title: "Collier County Commercial Real Estate | HenCRE",
    description:
      "Naples Class A office, luxury retail, Marco Island, and Immokalee development land. Expert Collier County CRE guidance from Barrett Henry at REMAX Collective.",
    url: "https://hencre.com/markets/collier",
  },
};

const faqs = [
  {
    question: "Is Collier County still a seller&apos;s market for Class A office?",
    answer:
      "Naples Class A office maintains strong fundamentals due to affluent tenant demand and limited new supply. Quality assets in prime US 41 locations continue to attract investor capital. It is not a frothy market -- it is selective. Well-positioned buildings trade; older or poorly located assets sit.",
  },
  {
    question: "What is the investment case for eastern Collier County land?",
    answer:
      "Agricultural land in eastern Collier -- particularly near Ave Maria and Immokalee -- represents long-term development optionality. This is patient capital territory. You are betting on infrastructure maturation, residential absorption, and regional growth over 10-plus years. It is not a flip play.",
  },
  {
    question: "How does Marco Island compare to Naples for retail investment?",
    answer:
      "Marco Island is more isolated and seasonally driven, but that creates premium positioning for quality retail. Supply is tighter than Naples, and the island&apos;s exclusivity supports pricing power. For luxury or resort-oriented retail, Marco warrants evaluation. For year-round professional services retail, Naples offers more depth.",
  },
  {
    question: "What is driving medical real estate demand in Collier County?",
    answer:
      "Demographics. Collier&apos;s mature, affluent population drives consistent demand for medical office, senior living, and wellness facilities. This is structural demand -- not cyclical. Healthcare real estate attracts both institutional capital and owner-operators seeking stability.",
  },
  {
    question: "How does Barrett Henry work in the Collier County market?",
    answer:
      "Barrett works Collier County through referral partnerships with local REMAX and independent brokers who maintain direct market presence. He connects clients with verified specialists, provides regional strategy consultation, and facilitates deal introductions -- drawing on 23-plus years of Florida CRE relationships to get the right people talking.",
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
        { "@type": "ListItem", position: 3, name: "Collier County", item: "https://hencre.com/markets/collier" },
      ],
    },
    {
      "@type": "Service",
      name: "Collier County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "Collier County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory, referral partnerships, and investment analysis for Collier County, Florida -- serving Naples, Marco Island, and eastern Collier development markets.",
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
    title: "Charlotte County Commercial Real Estate",
    href: "/markets/charlotte",
    description: "Southwest Florida commercial market connecting Collier to the broader Gulf Coast corridor.",
  },
  {
    title: "Sarasota Commercial Real Estate",
    href: "/markets/sarasota",
    description: "Comparable Gulf Coast wealth market with active retail and office investment.",
  },
  {
    title: "Office Space Advisory",
    href: "/commercial/office-space",
    description: "Class A office investment and tenant representation across Florida.",
  },
  {
    title: "NNN Net Lease Investments",
    href: "/commercial/nnn-net-lease",
    description: "Triple-net lease investment strategy for Florida commercial assets.",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description: "Commercial investment acquisition and disposition across Florida markets.",
  },
  {
    title: "CRE Valuation",
    href: "/services/cre-valuation",
    description: "Commercial property valuation and cap rate analysis for Florida investors.",
  },
];

export default function CollierMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Collier County", href: "/markets/collier" },
        ]}
      />

      <Hero
        title="Collier County Commercial Real Estate"
        subtitle="Naples Class A office, luxury retail, Marco Island, and long-term development land -- Florida&apos;s premier wealth market served by Barrett Henry at REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Collier County is Southwest Florida&apos;s premier wealth market. Naples anchors it with Class A office, luxury retail,
            and trophy properties. Marco Island adds resort-oriented commercial demand. Eastern Collier -- Ave Maria and Immokalee --
            represents long-term development optionality for patient capital. Barrett Henry, Broker Associate at REMAX Collective
            with 23+ years of real estate experience, works Collier County through referral partnerships with verified local brokers.
          </p>
        </div>
      </section>

      {/* Market overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Collier County Commercial Real Estate Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Collier County is Southwest Florida&apos;s premier wealth market, and it has matured into one of the state&apos;s most selective
            and resilient commercial real estate landscapes. Naples anchors this market -- it is where high-net-worth individuals invest
            in Class A office, luxury retail, and trophy properties. The fundamentals here are straightforward: affluent demand, limited
            supply, and investor capital that does not chase trends.
          </p>
          <p>
            As a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience, Barrett works Collier County primarily
            through referral partnerships with local brokers and investor networks. If you are operating in Naples, Marco Island, or
            evaluating long-term development opportunities in Immokalee or Ave Maria, Barrett connects you with verified specialists
            who know the regulatory environment and buyer appetite in this market.
          </p>
          <p>
            For comparison markets immediately adjacent to Collier, see the
            {" "}<Link href="/markets/charlotte" className="font-semibold text-black underline">Charlotte County CRE market</Link>{" "}
            and the broader{" "}
            <Link href="/markets/sarasota" className="font-semibold text-black underline">Sarasota commercial market</Link>{" "}
            along the Gulf Coast.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
            alt="Commercial development aerial view in Southwest Florida"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Naples and Collier County represent Florida&apos;s most selective commercial real estate market, with affluent demand, limited supply, and trophy-quality assets.
          </p>
        </div>
      </section>

      {/* Key corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Commercial Corridors and Submarkets</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">Naples -- US 41 and Tamiami Trail Corridor</h3>
              <p className="mt-2">
                This is Collier&apos;s heavyweight commercial corridor. US 41 runs through the heart of Naples carrying the premium{" "}
                <Link href="/commercial/office-space" className="font-semibold text-black underline">office</Link>{" "}
                and{" "}
                <Link href="/commercial/retail-space" className="font-semibold text-black underline">retail</Link>{" "}
                inventory that defines the market. Class A office space commands strong rents, and luxury-positioned retail performs
                exceptionally well. Financial services firms, law offices, medical practices, and high-end retail anchor this spine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Marco Island</h3>
              <p className="mt-2">
                Marco Island operates as a secondary but distinct market. It is luxury-focused across all asset types -- office, retail,
                and hospitality. The island&apos;s isolation and exclusivity attract investors seeking premium positioning and limited
                competition. Supply constraints are tighter here than mainland Naples, which supports pricing power for quality assets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Immokalee and Ave Maria</h3>
              <p className="mt-2">
                Eastern Collier County represents a different investment thesis entirely. Ave Maria&apos;s master-planned community framework
                and Immokalee&apos;s continued development create long-term optionality for{" "}
                <Link href="/commercial/land-development" className="font-semibold text-black underline">commercial land development</Link>.
                These areas appeal to patient capital and developers evaluating 10-plus year hold strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Active Property Types and Demand Drivers</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Class A Office",
              body: "Professional services, wealth management, and healthcare drive consistent Naples office demand. Tenants prioritize location and finishes. Class B and C space faces headwinds without aggressive pricing or accessible node positioning.",
            },
            {
              title: "Luxury and Lifestyle Retail",
              body: "Bifurcated market: luxury and lifestyle retail perform strongly along US 41 and in established centers. Service retail -- dental, medical, professional services -- maintains steady demand.",
            },
            {
              title: "Medical and Wellness",
              body: "Healthcare real estate is exceptionally active. Collier&apos;s age demographics and affluent population support medical office, assisted living, and wellness facilities. This asset class continues to attract institutional and owner-operator capital.",
            },
            {
              title: "Land and Development",
              body: "Long-term development land -- especially in the Ave Maria corridor and eastern Immokalee -- represents significant optionality. These holdings appeal to developers and institutional investors betting on infrastructure expansion over the next decade.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
              <p className="font-bold text-black">{item.title}</p>
              <p className="mt-2 text-[#666666]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demand drivers */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Drives Collier County Commercial Demand</h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666] list-disc pl-6">
            <li>
              <strong className="text-black">High-Net-Worth Population:</strong> Naples consistently ranks among Florida&apos;s wealthiest communities.
              This affluence sustains premium office rents, luxury retail, and Class A services across the market.
            </li>
            <li>
              <strong className="text-black">Professional Services Concentration:</strong> Wealth management, law, accounting, and investment firms
              cluster in Naples to serve the client base -- creating secondary demand for quality{" "}
              <Link href="/commercial/office-space" className="font-semibold text-black underline">office space</Link>.
            </li>
            <li>
              <strong className="text-black">Tourism and Seasonal Migration:</strong> Naples draws significant winter migration, supporting hospitality,
              retail, and service businesses. Marco Island benefits disproportionately from this dynamic.
            </li>
            <li>
              <strong className="text-black">Healthcare Demographics:</strong> Collier&apos;s mature population profile drives consistent demand for
              medical office, senior living, and wellness facilities -- structural and durable demand.
            </li>
            <li>
              <strong className="text-black">Limited Supply and Land Constraints:</strong> Naples proper has limited development land and strict growth
              management policies. This scarcity supports pricing power for existing quality assets.
            </li>
          </ul>
        </div>
      </section>

      {/* Barrett services */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Works in Collier County</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience, holding designations
            including e-PRO, MRP, SRS, and REMAX Hall of Fame. He does not maintain a direct office in Collier -- it is a referral
            territory served through partnerships with verified REMAX and independent brokers throughout Naples, Marco Island, and
            eastern Collier County.
          </p>
          <p>
            If you need a connection to local specialists for{" "}
            <Link href="/services/investment-sales" className="font-semibold text-black underline">buyer or seller representation</Link>,
            market intelligence on Class A office or medical positioning,{" "}
            <Link href="/services/cre-valuation" className="font-semibold text-black underline">property valuation</Link>,
            or analysis of development land opportunities in Ave Maria or Immokalee, Barrett connects you with the right broker and
            facilitates the deal. His value is network access and 23+ years of Florida CRE relationships.
          </p>
          <p>
            For investors considering Collier County as part of a broader Southwest Florida strategy, Barrett also advises on{" "}
            <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="font-semibold text-black underline">1031 exchange replacement properties</Link>{" "}
            and{" "}
            <Link href="/blog/how-to-calculate-commercial-property-roi" className="font-semibold text-black underline">commercial property ROI calculations</Link>{" "}
            to help you evaluate acquisitions with clarity.
          </p>
          <p>
            <Link href="/contact" className="font-semibold text-black underline">Contact Barrett directly</Link> at (813) 733-7907.
            He will assess your situation and make the right introduction.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About Collier County CRE</h2>
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
        heading="Ready to Talk Collier County Commercial Real Estate?"
        body="Whether you are leasing, buying, selling, or investing in Naples, Marco Island, or eastern Collier -- Barrett Henry has the network and 23+ years of Florida CRE experience to connect you with the right specialists and get it done right."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
