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

/* -------------------------------------------------------------------
 * Clay County Market Page
 * Orange Park, Fleming Island, Middleburg — suburban Jacksonville CRE.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Real Estate in Clay County, Florida | HenCRE",
  description:
    "Clay County CRE market — Orange Park, Fleming Island, and Middleburg retail, medical office, and professional space. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/clay" },
  openGraph: {
    title: "Commercial Real Estate in Clay County, Florida | HenCRE",
    description:
      "Explore Clay County commercial real estate — suburban Jacksonville retail, medical office, and investment opportunities along US-17 and Blanding Boulevard.",
    url: "https://hencre.com/markets/clay",
  },
};

const faqs = [
  {
    question: "Is Clay County experiencing significant new commercial development?",
    answer:
      "Yes, but selectively. Medical office and mixed-use projects are being greenlit, and retail development is active in well-located corridors. The pace is measured rather than frenetic, which is actually healthy. Overbuilt markets tend to struggle; Clay County's growth feels sustainable and tenant-driven rather than spec-driven.",
  },
  {
    question: "What is the typical tenant profile in Clay County commercial space?",
    answer:
      "Healthcare practitioners, neighborhood retail, service businesses, and professional offices. You are seeing physicians setting up satellite practices, franchise quick-service restaurants expanding into suburban markets, and professional service firms moving from Jacksonville to serve local clients at lower rent. The mix leans toward stability over high-growth speculative users.",
  },
  {
    question: "How does Clay County compare to Jacksonville's urban core for commercial investors?",
    answer:
      "Different risk-return profile. Jacksonville's core offers more density, institutional tenants, and higher visibility — but also higher entry costs and more competition. Clay County offers lower acquisition costs, less competition, and tenant demand supported by residential migration and military employment. For investors comfortable with suburban fundamentals and patient capital, Clay County can outperform on a risk-adjusted basis.",
  },
  {
    question: "What should I know before buying commercial property in Clay County?",
    answer:
      "Understand your tenant demand. Medical office and neighborhood retail work because they serve residential populations. Speculative office or commodity retail without strong co-tenancy or anchors struggle. Know your corridor — US-17 and Blanding Boulevard drive traffic and visibility. Evaluate infrastructure improvements, including First Coast Expressway connectivity. Work with a broker who understands local zoning, permitting, and tenant demand.",
  },
  {
    question: "What cap rates can investors expect for Clay County commercial properties?",
    answer:
      "Cap rates in Clay County generally run higher than in downtown Jacksonville, reflecting the market's suburban character and smaller investor pool. Medical office and neighborhood retail typically trade in the 6.5 to 8 percent range. Class B office in established corridors can trade at 7 to 8.5 percent. For investors seeking stronger yields than Jacksonville's urban core can offer, combined with stable suburban demand, Clay County offers a compelling value proposition.",
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
        { "@type": "ListItem", position: 3, name: "Clay County", item: "https://hencre.com/markets/clay" },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate advisory and brokerage services for Clay County.",
      telephone: "(813) 733-7907",
      email: "barrett@hencre.com",
      url: "https://hencre.com/markets/clay",
      areaServed: { "@type": "AdministrativeArea", name: "Clay County, Florida" },
      employee: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate, Commercial Real Estate",
      },
    },
    {
      "@type": "Service",
      name: "Clay County Commercial Real Estate Services",
      description:
        "CRE advisory, tenant and buyer representation, and investment analysis in Clay County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Clay County, Florida" },
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

const relatedMarkets = [
  { title: "All Florida Markets", href: "/markets", description: "Overview of every market Barrett Henry serves." },
  { title: "Investment Sales Services", href: "/services/investment-sales", description: "Buyer and seller representation for CRE investment." },
  { title: "Tenant Representation", href: "/services/tenant-representation", description: "Finding the right space for your business." },
  { title: "What Makes a Good Commercial Investment?", href: "/blog/what-makes-a-good-commercial-investment", description: "Investment criteria from a broker's perspective." },
  { title: "What Is a Cap Rate?", href: "/insights/what-is-a-cap-rate", description: "Understanding the core metric for CRE investment analysis." },
];

export default function ClayMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Markets", href: "/markets" },
          { label: "Clay County", href: "/markets/clay" },
        ]}
      />

      <Hero
        title="Commercial Real Estate in Clay County, Florida"
        subtitle="Orange Park, Fleming Island, and Middleburg offer suburban Jacksonville commercial real estate driven by residential growth, military employment, and healthcare expansion."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Clay County sits at a pivotal moment in Northeast Florida&apos;s commercial real estate
              evolution. As a suburban Jacksonville bedroom community with strengthening retail and
              medical office fundamentals, this market is attracting serious investor and tenant interest,
              particularly along the US-17 and Blanding Boulevard corridors. I have worked this territory
              long enough to see the infrastructure improvements and demographic tailwinds that are
              reshaping how developers and users view Clay County assets. For context on the full range of{" "}
              <Link href="/markets" className="text-accent underline">Florida markets</Link> Barrett Henry serves,
              see the markets overview.
            </p>
            <p>
              Clay County is not a speculative growth story; it is a fundamentals play. The county offers
              lower entry costs than downtown Jacksonville, stable tenant demand from healthcare and
              military-adjacent users, and infrastructure improvements that are making the market more
              accessible. Fleming Island and Orange Park continue attracting Jacksonville residents seeking
              suburban schools and lower density, and that residential base sustains retail, service, and
              medical office tenants through multiple economic cycles.
            </p>
            <p>
              NAS Jacksonville provides a structural employment and housing demand that buffers against
              broader economic volatility. Military households represent predictable users with steady
              income profiles — a demand driver that is underappreciated in Clay County commercial
              market discussions.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=1200&h=600&fit=crop"
              alt="Suburban commercial corridor in Orange Park, Clay County Florida"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
            <p className="mt-2 text-sm text-[#666666] italic">Clay County&apos;s suburban corridors serve a stable residential base anchored by Fleming Island, Orange Park, and Middleburg neighborhoods.</p>
          </div>
        </div>
      </section>

      {/* ---- Key Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Key Commercial Corridors</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">US-17 Corridor:</strong> The established{" "}
              <Link href="/commercial/retail-space" className="text-accent underline">retail</Link> and
              mixed-use spine through Orange Park. Traditional strip centers, quick-service restaurants,
              and specialty retail that rely on pass-through traffic and localized residential density.
              The corridor has matured infrastructure, which means easier permitting and lower build-out
              risk for operators.
            </p>
            <p>
              <strong className="text-black">Blanding Boulevard:</strong> This east-west artery is
              emerging as the growth vector for medical{" "}
              <Link href="/commercial/office-space" className="text-accent underline">office</Link> and
              professional services. The proximity to healthcare anchors and the corridor&apos;s ability
              to serve both Fleming Island and Middleburg makes it attractive to health systems and
              physician practices expanding beyond Jacksonville proper.
            </p>
            <p>
              <strong className="text-black">First Coast Expressway:</strong> Ongoing connectivity
              improvements are a significant catalyst for Clay County. Better highway access reduces
              commute times to downtown Jacksonville and makes Clay County more competitive for both
              office relocations and{" "}
              <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial users</Link>{" "}
              seeking suburban logistics proximity without downtown overhead costs.
            </p>
            <p>
              <strong className="text-black">Fleming Island:</strong> The higher-income residential
              enclave within Clay County supports demand for professional services, medical office,
              and upscale neighborhood retail that serves that demographic. Properties near Fleming
              Island&apos;s commercial nodes benefit from above-average household incomes relative
              to the rest of the county.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Property Types ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Active Property Types</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Medical Office and Healthcare Services:</strong> The
              strongest tenant demand story in Clay County. Physicians and health systems are actively
              seeking suburban medical office space to serve expanding residential populations. Clay
              County&apos;s demographic profile — stable household formation, aging population, military
              families — supports recurring healthcare demand. Medical office space commands stronger
              lease rates than commodity retail, and tenant credit quality tends to be institutional.
            </p>
            <p>
              <strong className="text-black">Retail and Restaurant:</strong> Conventional retail is
              selective, but neighborhood-anchored shopping centers with strong tenant mixes continue
              to perform. Quick-service restaurants, dental practices, and service retailers are seeking
              Clay County locations to capture the bedroom community user base. Centers with medical or
              grocer anchors and tight co-tenancy hold up well. Understand{" "}
              <Link href="/insights/cam-charges-explained" className="text-accent underline">CAM charge structures</Link>{" "}
              before comparing lease options across properties.
            </p>
            <p>
              <strong className="text-black">Professional Office:</strong> Suburban office demand has
              shifted since 2020, but service-oriented professional offices — accounting, insurance,
              real estate, legal — continue to lease suburban space. Tenants are right-sizing from
              downtown Jacksonville footprints and moving closer to residential populations and lower
              occupancy costs. Class B office in Clay County is competitive against Jacksonville&apos;s
              CBD for this tenant profile.
            </p>
            <p>
              <strong className="text-black">Investment Properties:</strong> For investors evaluating
              income-producing assets, Clay County offers{" "}
              <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rates</Link>{" "}
              that typically run higher than Jacksonville&apos;s urban core, reflecting the smaller
              investor pool and suburban character. Use the{" "}
              <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link>{" "}
              to evaluate specific deal returns before committing. For guidance on what distinguishes
              a sound acquisition, see{" "}
              <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">what makes a good commercial investment</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            How Barrett Henry Serves This Market
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Clay County is a referral territory for me, but I do not treat it casually. As a
              Broker Associate at REMAX Collective with 23+ years of real estate experience, I connect
              tenant prospects with available space, help property owners understand positioning and
              management strategies, and provide market intelligence for acquisitions or development
              feasibility.
            </p>
            <p>
              Services available for Clay County include{" "}
              <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link>{" "}
              for healthcare, retail, and office users;{" "}
              <Link href="/services/investment-sales" className="text-accent underline">investment acquisition support</Link>{" "}
              for buyers evaluating medical office, retail, or flex acquisitions;{" "}
              <Link href="/services/landlord-leasing" className="text-accent underline">landlord leasing strategy</Link>{" "}
              and positioning for multi-tenant retail and medical office; and market intelligence
              for corridor analysis and investment decision-making. For on-the-ground Clay County
              execution, I coordinate with local REMAX network partners who specialize in this market.
              Reach out through the{" "}
              <Link href="/contact" className="text-accent underline">contact page</Link>{" "}
              to discuss your goals.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Lead Form ---- */}
      <section id="lead-form" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl">
            Clay County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Exploring Clay County Commercial Real Estate?"
        body="Whether you are a tenant, investor, or property owner, I provide the market perspective and professional network to help you make the right move in Clay County."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
