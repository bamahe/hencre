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
  title: "Alachua County Commercial Real Estate | HenCRE",
  description:
    "Gainesville and Alachua County CRE: University of Florida anchor demand, medical office, student housing, mixed-use, and research park opportunities. Call Barrett Henry at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/alachua" },
  openGraph: {
    title: "Alachua County Commercial Real Estate | HenCRE",
    description:
      "University of Florida drives unique CRE demand in Alachua County — medical office, student housing, mixed-use, and innovation district opportunities in Gainesville.",
    url: "https://hencre.com/markets/alachua",
  },
};

const faqItems = [
  {
    question: "Is Alachua County a good market for student housing investors?",
    answer:
      "Yes. University of Florida enrollment stability and graduate program growth create strong, consistent demand for student-focused housing. The market supports both traditional multifamily and purpose-built student housing. Returns depend on understanding local absorption, occupancy patterns, and university enrollment trends — all factors worth modeling with a local advisor before committing capital.",
  },
  {
    question: "What commercial property types are most active in Gainesville?",
    answer:
      "Medical office, student and conventional multifamily, mixed-use retail in the Midtown corridor, and research/innovation office near UF campus are the most active categories. Traditional Class A and B office serves professional services and university-adjacent tenants. Light industrial and flex space is present but limited — this is not a logistics hub market.",
  },
  {
    question: "How does University of Florida research activity affect commercial real estate?",
    answer:
      "UF's research programs and innovation initiatives attract biotech, life sciences, and specialized research tenants to innovation districts near campus. This creates demand for lab space, research-grade office, and specialized facilities. It is a smaller but growing segment of the Alachua County commercial market worth watching for long-term investors.",
  },
  {
    question: "Are there redevelopment opportunities in downtown Gainesville?",
    answer:
      "Yes. Downtown Gainesville is experiencing genuine mixed-use redevelopment momentum. Older retail properties are being repositioned, adaptive reuse opportunities exist, and new ground-up mixed-use development is delivering. Activity is fundamentally driven by student demographics, local business growth, and the broader Gainesville community's demand for walkable urban amenities.",
  },
  {
    question: "How does Alachua County differ from other Florida CRE markets?",
    answer:
      "The university-anchored economic base creates fundamentally different demand drivers than coastal Florida markets. Alachua County is driven by institutional tenant activity, student demographics, medical and research demand — not coastal tourism, retiree migration, or pure population growth. It is less competitive than Tampa Bay or South Florida markets, rewarding investors who understand institutional demand patterns and are willing to take a longer-term view.",
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
        { "@type": "ListItem", position: 3, name: "Alachua County", item: "https://hencre.com/markets/alachua" },
      ],
    },
    {
      "@type": "Service",
      name: "Alachua County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Alachua County, Florida.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        telephone: "(813) 733-7907",
        email: "barrett@hencre.com",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "Alachua County, Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const relatedLinks = [
  { title: "Bradford County CRE", href: "/markets/bradford", description: "Rural North Florida market adjacent to Alachua County" },
  { title: "Columbia County CRE", href: "/markets/columbia", description: "Lake City and I-10 corridor commercial opportunities" },
  { title: "Clay County CRE", href: "/markets/clay", description: "Fleming Island and Orange Park in Northeast Florida" },
  { title: "Multifamily Investment in Tampa Bay", href: "/blog/multifamily-investment-tampa-bay-guide", description: "Multifamily investment fundamentals applicable to university markets" },
  { title: "Tenant Representation Services", href: "/services/tenant-representation", description: "Barrett advocates for tenants in lease negotiations statewide" },
  { title: "Investment Sales Advisory", href: "/services/investment-sales", description: "Acquisition and disposition strategy for Florida CRE investors" },
  { title: "Cap Rate Calculator", href: "/calculators/cap-rate", description: "Free tool to analyze cap rates on Florida commercial properties." },
  { title: "Commercial Due Diligence Timeline", href: "/blog/commercial-property-due-diligence-timeline", description: "Step-by-step due diligence process for commercial real estate buyers." },
  { title: "What Makes a Good Commercial Investment?", href: "/blog/what-makes-a-good-commercial-investment", description: "Investment criteria and how to evaluate CRE opportunities." },
  { title: "Florida Markets Overview", href: "/markets", description: "Browse all Florida commercial real estate markets Barrett Henry covers." },
];

export default function AlachiuaPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Alachua County", href: "/markets/alachua" },
        ]}
      />

      <Hero
        title="Alachua County Commercial Real Estate"
        subtitle="Gainesville&apos;s University of Florida anchor creates unique CRE demand: medical office, student housing, mixed-use, and innovation tenants unlike any other Florida market."
        ctaText="Talk to Barrett"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Alachua County CRE Market Overview</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Alachua County is one of North Central Florida&apos;s most distinctive commercial markets, operating on fundamentals that differ fundamentally from coastal Florida submarkets. The University of Florida anchors this entire region — everything from multifamily absorption to medical office leasing to research park activity radiates outward from UF&apos;s campus and its economic ecosystem. If you&apos;re evaluating Alachua County, you&apos;re looking at a market driven by institutional demand, student demographics, and innovation tenants not found in comparable volume anywhere else in Florida.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Alachua County as referral territory — connecting investors, owner-occupants, and institutional clients with opportunities across Gainesville, Alachua, Newberry, and High Springs.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Key Commercial Corridors in Alachua County</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-black">Gainesville — The Market Hub</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Gainesville is the dominant market center, home to UF&apos;s main campus, a sprawling medical complex, and downtown redevelopment reshaping the retail and hospitality landscape. The <strong>Midtown corridor</strong> continues to attract <Link href="/commercial/retail-space" className="text-accent underline">mixed-use development</Link> — retail, office, and residential stacked together. This is where most institutional capital and small business activity concentrates.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Southwest Gainesville — Archer Road Corridor</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Southwest Gainesville along Archer Road and SW 34th Street has been the traditional commercial spine. <Link href="/commercial/office-space" className="text-accent underline">Office parks</Link>, service retail, and automotive uses dominate — bread-and-butter commercial real estate serving both the university community and the broader residential population.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Innovation Districts Near UF</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Biotech firms, life sciences tenants, and research-focused companies are taking space close to UF&apos;s infrastructure and talent pipeline. This submarket is growing and represents specialized demand for lab space and research-grade <Link href="/commercial/office-space" className="text-accent underline">office space</Link> that does not exist in most Florida counties.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">High Springs and Newberry</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              High Springs has seen boutique retail and hospitality interest tied to recreational tourism. Newberry remains more traditional commercial and agricultural. Both represent smaller nodes with compelling land cost advantages for the right operator.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Inline image ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=75"
          alt="Gainesville Alachua County commercial office and medical real estate near University of Florida"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">University of Florida&apos;s medical complex and research programs drive consistent institutional demand for office, lab, and medical space throughout Alachua County.</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Active Property Types and Demand Drivers</h2>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-black">Multifamily and Student Housing</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              This is the backbone of Alachua County CRE. UF enrollment, graduate programs, and international student influx create strong demand for student-focused housing. The market supports traditional garden apartments, mid-rise residential, and purpose-built student housing. This segment moves with university enrollment cycles and institutional housing investment patterns. For a broader multifamily framework, see our <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">multifamily investment guide</Link>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Medical Office</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              UF&apos;s College of Medicine and affiliated medical center drive concentrated medical office demand. Specialty practices, healthcare tenants, and clinical spaces cluster near the university&apos;s health sciences campus — institutional-grade demand that is steady, not speculative. The regional trends are covered in our post on <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">Florida medical office real estate in 2026</Link>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Retail and Mixed-Use</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Downtown Gainesville is experiencing mixed-use redevelopment momentum. Older <Link href="/commercial/retail-space" className="text-accent underline">retail stock</Link> is being repositioned; new mixed-use projects targeting both the student demographic and the broader Gainesville community are delivering. Experiential retail — restaurants, entertainment, local services — performs well in this market.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Office</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Traditional Class A and B office serves the university administrative market, professional services (law, accounting, consulting), and smaller corporate tenants. Demand is tied to UF&apos;s operational footprint and white-collar employment. Use our <Link href="/calculators/office-space" className="text-accent underline">office space calculator</Link> to estimate your footprint before beginning a search.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Industrial and Flex</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Limited but present. <Link href="/commercial/industrial-warehouse" className="text-accent underline">Light industrial, warehousing, and flex space</Link> serve local distribution and service needs. Alachua County is not a logistics hub, but the market supports functional industrial properties at cost advantages well below Tampa Bay or Jacksonville pricing.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-black">Why Alachua County Matters for CRE Investors</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This market rewards investors who understand institutional demand patterns. It is not a high-velocity trading market, but it is stable, predictable, and underpinned by durable economic fundamentals. Student housing and <Link href="/services/investment-sales" className="text-accent underline">medical office investors</Link> can find consistent opportunities. Owner-occupants in professional services, healthcare, and specialized office can build long-term operations here.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Alachua County is also less competitive than coastal Florida markets. Investors who understand university-anchored markets can position ahead of capital that does not. Before acquiring any Florida commercial property, review our <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence timeline</Link> and use the <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> to run your numbers. Our <Link href="/insights/how-to-value-commercial-property" className="text-accent underline">commercial property valuation guide</Link> covers the income approach that applies directly to student housing and medical office assets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors considering a 1031 exchange into Alachua County assets can find a stable, low-competition market that provides genuine diversification from coastal Florida exposure. See our <Link href="/insights/1031-exchange-basics" className="text-accent underline">1031 exchange basics</Link> and the <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">Florida 1031 exchange guide</Link> for the full picture.
        </p>
      </section>

      <section
        id="lead-form"
        className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-black">Inquire About Alachua County CRE</h2>
          <p className="mt-2 text-[#666666]">
            Barrett works Alachua County as referral territory and brings institutional-grade market intelligence to every engagement. Call <strong>(813) 733-7907</strong> or send a message below.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Alachua County CRE: Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <RelatedLinks heading="Explore Related Markets and Resources" links={relatedLinks} />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>

      <CTASection
        heading="Considering Alachua County Commercial Real Estate?"
        body="Barrett Henry, Broker Associate at REMAX Collective, works institutional and investor clients across all 67 Florida counties. With 23+ years of real estate experience, he brings real market intelligence to Alachua County engagements. Call (813) 733-7907 to start the conversation."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
