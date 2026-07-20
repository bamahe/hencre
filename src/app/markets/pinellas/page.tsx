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
 * Pinellas County Market Page
 * St. Petersburg, Clearwater — coastal CRE market with growing
 * tech/office scene, tourism, and established retail corridors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Pinellas County Commercial Real Estate | Barrett Henry, REMAX Collective",
  description:
    "Pinellas County CRE market insights — St. Petersburg, Clearwater, and the beaches. Office, retail, hospitality, and industrial. Call Barrett Henry at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/pinellas" },
  openGraph: {
    title: "Pinellas County Commercial Real Estate | Barrett Henry, REMAX Collective",
    description:
      "Explore St. Petersburg and Clearwater commercial real estate — coastal market with surging office demand and tourism-driven retail.",
    url: "https://hencre.com/markets/pinellas",
  },
};

/* FAQ items specific to Pinellas County CRE */
const faqs = [
  {
    question: "What makes downtown St. Petersburg attractive for commercial tenants?",
    answer:
      "Downtown St. Petersburg has undergone a significant transformation, becoming one of Florida's most desirable urban office and retail markets. A walkable street grid, waterfront parks, a growing technology and creative sector, and an influx of restaurants and cultural venues create an environment that helps businesses attract and retain talent. Demand for Class A and creative office space has steadily increased as companies relocate from larger metros.",
  },
  {
    question: "What commercial property types are most active in Pinellas County?",
    answer:
      "Hospitality and tourism-driven retail lead the beaches and Gulf Boulevard corridor. Office demand is strongest in downtown St. Petersburg and the Gateway/Carillon area near the Bayside Bridge. Retail centers along US-19 and Ulmerton Road serve the county's dense population base. Industrial space is limited due to land constraints, making existing warehouse inventory particularly valuable.",
  },
  {
    question: "Is Pinellas County a good fit for CRE investment?",
    answer:
      "Pinellas County offers strong fundamentals for investors — high population density, limited developable land which protects existing asset values, a diversified economy anchored by healthcare, financial services, and technology, and a tourism sector that generates consistent retail and hospitality revenue. The scarcity of land also means well-located commercial properties tend to hold value even during broader market softening.",
  },
  {
    question: "What CRE services does Barrett Henry offer in Pinellas County?",
    answer:
      "Barrett provides buyer and seller representation, tenant and landlord lease negotiation, investment analysis, and disposition strategy across all commercial property types in Pinellas County. Whether you are looking for office space in downtown St. Pete, a retail location along US-19, or an investment property near the beaches, Barrett can guide you through the process.",
  },
  {
    question: "How does Pinellas County's industrial market differ from other Tampa Bay counties?",
    answer:
      "Pinellas County has almost no remaining land for new industrial development, which makes it fundamentally different from Hillsborough, Pasco, or Polk counties. Existing warehouse and flex space in areas like Pinellas Park and Largo commands a premium because supply cannot meaningfully grow. Investors holding industrial assets in Pinellas benefit from structural scarcity that supports occupancy and rent levels over time.",
  },
];

/* JSON-LD: LocalBusiness + Service + FAQPage */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Pinellas County.",
      telephone: "(813) 733-7907",
      email: "barrett@hencre.com",
      url: "https://hencre.com/markets/pinellas",
      areaServed: { "@type": "AdministrativeArea", name: "Pinellas County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "Commercial Real Estate Advisor" },
    },
    {
      "@type": "Service",
      name: "Pinellas County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Pinellas County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Pinellas County, Florida" },
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
  { title: "Hillsborough County", href: "/markets/hillsborough", description: "Tampa CRE market" },
  { title: "Pasco County", href: "/markets/pasco", description: "Wesley Chapel & SR 54/56 corridor" },
  { title: "Manatee County", href: "/markets/manatee", description: "Bradenton CRE market" },
  { title: "Sarasota County", href: "/markets/sarasota", description: "Sarasota retail & office" },
];

export default function PinellasMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }, { label: "Pinellas County", href: "/markets/pinellas" }]} />

      <Hero
        title="Pinellas County Commercial Real Estate"
        subtitle="From downtown St. Petersburg's tech-fueled office boom to Clearwater's tourism corridor, Pinellas County delivers CRE opportunity on Florida's most densely populated peninsula."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Pinellas County occupies the peninsula between Tampa Bay and the Gulf of Mexico,
              making it one of the most geographically constrained — and therefore most valuable —
              commercial real estate markets in Florida. With limited undeveloped land, existing
              commercial properties carry a premium, and adaptive reuse and redevelopment drive
              much of the new supply. The county is home to roughly one million residents across
              cities including St. Petersburg, Clearwater, Largo, Dunedin, and a string of
              beach communities from Treasure Island to Indian Rocks Beach.
            </p>
            <p>
              The economy is anchored by healthcare systems, alongside financial services firms,
              defense contractors, and a rapidly expanding technology sector that has made
              downtown St. Petersburg one of the most talked-about startup hubs in the Southeast.
              Tourism, centered on the beach communities and powered by Clearwater Beach&apos;s
              national profile, adds a hospitality and <a href="/commercial/retail-space" className="text-accent underline">retail</a> layer that few Florida counties
              can match. The county&apos;s proximity to <a href="/markets/hillsborough" className="text-accent underline">Tampa</a> means businesses can access
              both urban amenities and a highly educated workforce without leaving the peninsula.
            </p>
            <p>
              Because land is essentially built out, the Pinellas <a href="/commercial/industrial-warehouse" className="text-accent underline">industrial market</a> is
              one of the tightest in the state. Investors holding warehouse and flex space
              benefit from structural scarcity that has consistently supported occupancy and
              rent levels. For buyers evaluating these assets, our <a href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</a> can
              help you underwrite the value proposition relative to other submarkets.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&h=500&fit=crop"
          alt="downtown St. Petersburg waterfront representing the urban commercial market in Pinellas County"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

      {/* ---- Key Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Key CRE Corridors and Districts</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Downtown St. Petersburg</strong> — The
              Innovation District and the broader downtown core have attracted national
              attention for their concentration of tech startups, venture capital firms,
              and creative <a href="/commercial/office-space" className="text-accent underline">office users</a>. New construction and major renovations have added
              Class A office inventory, while ground-floor <a href="/commercial/retail-space" className="text-accent underline">retail</a> benefits from heavy foot
              traffic generated by residents and tourists alike. The area around the Tropicana
              Field redevelopment site is expected to drive the next wave of mixed-use
              development. <a href="/services/tenant-representation" className="text-accent underline">Tenant representation</a> in this submarket requires understanding
              which buildings are truly Class A and which are repositioned product.
            </p>
            <p>
              <strong className="text-black">Gateway / Carillon</strong> — Located near
              the Bayside Bridge and St. Pete-Clearwater International Airport, this
              suburban office park is one of the largest in the county. It serves national
              and regional tenants in financial services, insurance, and technology. The
              area also benefits from proximity to retail along Ulmerton Road and Roosevelt
              Boulevard. <a href="/services/investment-sales" className="text-accent underline">Investment sales</a> in the Gateway area tend to attract institutional
              buyers who value the scale and suburban office fundamentals.
            </p>
            <p>
              <strong className="text-black">US-19 Corridor</strong> — Running the length
              of the county from St. Petersburg north through Clearwater and Tarpon Springs,
              US-19 is the primary commercial artery for big-box retail, auto dealerships,
              and service-oriented businesses. Strip centers and outparcels along this
              corridor serve the county&apos;s dense suburban population. Understanding
              <a href="/insights/nnn-lease-explained" className="text-accent underline"> NNN lease structures</a> is critical for investors evaluating single-tenant
              retail along this corridor.
            </p>
            <p>
              <strong className="text-black">Clearwater / Gulf-to-Bay</strong> — Downtown
              Clearwater is seeing renewed investment driven by institutional buyers and
              redevelopment activity. The Gulf-to-Bay corridor connecting Clearwater to
              US-19 hosts a mix of medical office, retail, and flex space. The beach
              communities to the west generate strong hospitality demand and retail traffic.
              <a href="/services/dispositions" className="text-accent underline"> Disposition strategy</a> in this corridor benefits from careful timing relative
              to redevelopment cycles.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=500&fit=crop"
          alt="suburban office park representing the Gateway and Carillon commercial district in Pinellas County"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

      {/* ---- Property Types ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Active Property Types</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Office</strong> — Downtown St. Petersburg leads
              office demand with creative, tech-oriented <a href="/commercial/office-space" className="text-accent underline">office space</a>. Gateway/Carillon handles
              traditional corporate users. Medical office is active countywide, fueled by
              the concentration of healthcare providers.
            </p>
            <p>
              <strong className="text-black">Retail</strong> — High population density
              supports strong retail fundamentals. Well-located neighborhood centers rarely
              have extended vacancies. Tourism-adjacent <a href="/commercial/retail-space" className="text-accent underline">retail space</a> on the beaches and in
              downtown St. Pete commands premium rents. Use our <a href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rate guide</a> when
              evaluating retail investment opportunities here.
            </p>
            <p>
              <strong className="text-black">Hospitality</strong> — Hotels and hospitality
              assets along Clearwater Beach and St. Pete Beach are among the highest-performing
              in Florida. Demand for boutique hotels and experiential hospitality concepts
              continues to grow in downtown St. Petersburg.
            </p>
            <p>
              <strong className="text-black">Industrial</strong> — Warehouse and flex space
              is extremely limited in Pinellas due to land constraints. Existing <a href="/commercial/industrial-warehouse" className="text-accent underline">industrial
              buildings</a> in areas like Pinellas Park and Largo carry significant value and
              rarely stay on the market long. This scarcity makes Pinellas industrial assets
              compelling long-term holds for investors.
            </p>
            <p>
              <strong className="text-black">Land</strong> — Redevelopment <a href="/commercial/land-development" className="text-accent underline">land</a> and
              assemblage opportunities are rare but emerge periodically, particularly in
              transitional areas of Clearwater and along the US-19 corridor where older
              commercial uses are being repositioned for higher-density development.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=500&fit=crop"
          alt="retail corridor in Pinellas County showing the dense suburban commercial environment along US-19"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

      {/* ---- Services ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            How Barrett Henry Serves This Market
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective who
              provides commercial real estate brokerage services across Pinellas County.
              Whether you are a tech company seeking creative office space in downtown St.
              Petersburg, a retailer looking for a high-traffic US-19 location, or an
              investor evaluating industrial assets with strong scarcity value, Barrett
              brings the market knowledge and deal experience to help you execute.
            </p>
            <p>
              Services include <Link href="/services/investment-sales" className="text-accent underline">buyer and seller representation</Link>,
              <Link href="/services/tenant-representation" className="text-accent underline"> tenant and landlord lease negotiation</Link>,
              <Link href="/services/cre-valuation" className="text-accent underline"> investment underwriting and analysis</Link>, site selection, and
              <Link href="/services/dispositions" className="text-accent underline"> disposition strategy</Link> across all commercial property types.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Lead Form ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="lead-form">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl">
            Pinellas County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Looking for CRE in Pinellas County?"
        body="Barrett Henry can help you navigate this high-demand coastal market — whether you are leasing, buying, selling, or investing."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
