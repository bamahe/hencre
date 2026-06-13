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
  title: "Pinellas County CRE | REMAX Commercial Real Estate — St. Petersburg & Clearwater",
  description:
    "Pinellas County CRE market insights covering St. Petersburg, Clearwater, and the beaches. Office, retail, hospitality, and industrial opportunities. Barrett Henry, Commercial Real Estate Advisor at REMAX Collective.",
  openGraph: {
    title: "Pinellas County Commercial Real Estate | REMAX Commercial Real Estate",
    description:
      "Explore St. Petersburg and Clearwater commercial real estate — coastal market with surging office demand and tourism-driven retail.",
    url: "https://hencre.com/markets/pinellas",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Pinellas County.",
      telephone: "(813) 733-7907",
      email: "barrett@nowtb.com",
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
  ],
};

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
];

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

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Pinellas County", href: "/markets/pinellas" },
        ]}
      />

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
              The economy is anchored by healthcare systems — BayCare, Johns Hopkins All
              Children&apos;s Hospital, and Empath Health — alongside financial services firms,
              defense contractors at nearby MacDill AFB, and a rapidly expanding technology
              sector that has made downtown St. Petersburg one of the most talked-about startup
              hubs in the Southeast. Tourism, centered on the beach communities and powered by
              Clearwater Beach&apos;s national profile, adds a hospitality and retail layer that
              few Florida counties outside Miami-Dade can match.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Key Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Key CRE Corridors and Districts</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Downtown St. Petersburg</strong> — The
              Innovation District and the broader downtown core have attracted national
              attention for their concentration of tech startups, venture capital firms,
              and creative office users. New construction and major renovations have added
              Class A office inventory, while ground-floor retail benefits from heavy foot
              traffic generated by residents and tourists alike. The area around the new
              Tropicana Field redevelopment site is expected to drive the next wave of
              mixed-use development.
            </p>
            <p>
              <strong className="text-black">Gateway / Carillon</strong> — Located near
              the Bayside Bridge and St. Pete-Clearwater International Airport, this
              suburban office park is one of the largest in the county. It serves national
              and regional tenants in financial services, insurance, and technology. The
              area also benefits from proximity to retail along Ulmerton Road and Roosevelt
              Boulevard.
            </p>
            <p>
              <strong className="text-black">US-19 Corridor</strong> — Running the length
              of the county from St. Petersburg north through Clearwater and Tarpon Springs,
              US-19 is the primary commercial artery for big-box retail, auto dealerships,
              and service-oriented businesses. Strip centers and outparcels along this
              corridor serve the county&apos;s dense suburban population.
            </p>
            <p>
              <strong className="text-black">Clearwater / Gulf-to-Bay</strong> — Downtown
              Clearwater is seeing renewed investment driven by institutional buyers and
              redevelopment activity. The Gulf-to-Bay corridor connecting Clearwater to
              US-19 hosts a mix of medical office, retail, and flex space. The beach
              communities to the west generate strong hospitality and short-term rental
              demand.
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
              <strong className="text-black">Office</strong> — Downtown St. Petersburg leads
              office demand with creative, tech-oriented spaces. Gateway/Carillon handles
              traditional corporate users. Medical office is active countywide, fueled by
              the concentration of healthcare providers.
            </p>
            <p>
              <strong className="text-black">Retail</strong> — High population density
              supports strong retail fundamentals. Well-located neighborhood centers rarely
              have extended vacancies. Tourism-adjacent retail on the beaches and in downtown
              St. Pete commands premium rents.
            </p>
            <p>
              <strong className="text-black">Hospitality</strong> — Hotels and hospitality
              assets along Clearwater Beach and St. Pete Beach are among the highest-performing
              in Florida. Demand for boutique hotels and experiential hospitality concepts
              continues to grow in downtown St. Petersburg.
            </p>
            <p>
              <strong className="text-black">Industrial</strong> — Warehouse and flex space
              is extremely limited in Pinellas due to land constraints. Existing industrial
              buildings in areas like Pinellas Park and Largo carry significant value and
              rarely stay on the market long.
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
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective who
              provides commercial real estate brokerage services across Pinellas County.
              Whether you are a tech company seeking creative office space in downtown St.
              Petersburg, a retailer looking for a high-traffic US-19 location, or an
              investor evaluating hospitality assets on the beaches, Barrett brings the
              market knowledge and deal experience to help you execute.
            </p>
            <p>
              Services include buyer and seller representation, tenant and landlord lease
              negotiation, investment underwriting and analysis, site selection, and
              disposition strategy across all commercial property types.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Lead Form ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
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
    </>
  );
}
