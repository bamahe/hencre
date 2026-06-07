import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Manatee County Market Page
 * Bradenton — growing market between Tampa and Sarasota, Port
 * Manatee industrial, I-75 retail nodes, downtown revitalization.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Manatee County Commercial Real Estate — Bradenton CRE Market",
  description:
    "Manatee County CRE market insights. Bradenton's growing commercial corridors, Port Manatee industrial, I-75 interchange retail, and downtown revitalization. Barrett Henry, REALTOR® & Broker Associate at REMAX Collective.",
  openGraph: {
    title: "Manatee County Commercial Real Estate | HenCRE",
    description:
      "Explore Bradenton and Manatee County commercial real estate — a growing market between Tampa and Sarasota.",
    url: "https://hencre.com/markets/manatee",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "HenCRE — Barrett Henry",
      description: "Commercial real estate brokerage serving Manatee County.",
      telephone: "(813) 733-7907",
      email: "barrett@nowtb.com",
      url: "https://hencre.com/markets/manatee",
      areaServed: { "@type": "AdministrativeArea", name: "Manatee County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "REALTOR® & Broker Associate" },
    },
    {
      "@type": "Service",
      name: "Manatee County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Manatee County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Manatee County, Florida" },
    },
  ],
};

const faqs = [
  {
    question: "What makes Manatee County an attractive CRE market?",
    answer:
      "Manatee County benefits from its position between Tampa and Sarasota — two strong CRE metros — while offering lower land and lease costs than either. The county has experienced significant population growth, driving demand for retail, medical office, and industrial space. Port Manatee provides a unique industrial anchor, and the I-75 corridor creates high-visibility commercial nodes at every interchange.",
  },
  {
    question: "What is happening with Port Manatee and industrial real estate?",
    answer:
      "Port Manatee is one of the closest deep-water ports to the Panama Canal on Florida's Gulf Coast, making it strategically valuable for shipping and logistics operators. The port area supports warehouse, distribution, and cold storage demand, and surrounding industrial parks have attracted manufacturers and building materials companies. As supply chains continue to diversify, Port Manatee's profile as an industrial CRE hub continues to grow.",
  },
  {
    question: "What commercial property types are most active in Bradenton?",
    answer:
      "Retail leads transaction activity, driven by population growth and new residential communities near the I-75 interchanges at SR 64 and SR 70. Medical office is growing as healthcare systems follow residents into the county. Industrial and flex space near Port Manatee and along US-301 serves distribution, manufacturing, and trades-oriented businesses. Office demand centers on downtown Bradenton and the Lakewood Ranch corridor.",
  },
  {
    question: "How does Barrett Henry serve CRE clients in Manatee County?",
    answer:
      "Barrett provides buyer and seller representation, tenant and landlord lease negotiation, investment analysis, land acquisition, and disposition strategy across all commercial property types. He works with retailers seeking I-75 visibility, industrial users near Port Manatee, and investors looking for value in a growing market.",
  },
];

const relatedMarkets = [
  { title: "Hillsborough County", href: "/markets/hillsborough", description: "Tampa CRE market" },
  { title: "Sarasota County", href: "/markets/sarasota", description: "Sarasota CRE market" },
  { title: "Pinellas County", href: "/markets/pinellas", description: "St. Pete & Clearwater CRE" },
  { title: "Polk County", href: "/markets/polk", description: "Lakeland & I-4 logistics" },
];

export default function ManateeMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Manatee County", href: "/markets/manatee" },
        ]}
      />

      <Hero
        title="Manatee County Commercial Real Estate"
        subtitle="Positioned between Tampa and Sarasota, Manatee County offers growing retail corridors, a deep-water port, and a commercial market that is catching up to its rapid residential growth."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>
              Manatee County has emerged from Tampa&apos;s shadow as a commercial real estate
              market in its own right. The county seat of Bradenton anchors a growing metro
              that stretches from the beaches of Anna Maria Island east through Palmetto,
              Ellenton, and into the master-planned community of Lakewood Ranch — one of
              the top-selling master-planned communities in the country. That residential
              growth engine has pulled commercial development along with it, creating new
              retail nodes, medical campuses, and industrial facilities throughout the county.
            </p>
            <p>
              Port Manatee gives the county something most suburban markets lack: a
              deep-water port with direct access to international shipping lanes. The port
              and its surrounding industrial parks support distribution, cold storage,
              building materials, and manufacturing operations. Combined with I-75 access
              and proximity to both Tampa and Sarasota, Manatee County offers a logistics
              and commercial profile that punches above its weight.
            </p>
            <p>
              Downtown Bradenton has undergone a steady revitalization, with new restaurants,
              galleries, and small office users bringing life to a historic core. The Riverwalk
              and Village of the Arts districts have become draws for visitors and residents,
              creating a more vibrant commercial environment that supports ground-floor retail
              and boutique office space.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Key Corridors ---- */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">Key CRE Corridors and Districts</h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>
              <strong className="text-navy">I-75 Interchange Nodes</strong> — Each I-75
              interchange through Manatee County — at SR 64, US-301, SR 70, and University
              Parkway — creates a commercial hub. These nodes attract grocery-anchored
              retail, quick-service restaurants, gas stations, hotels, and pad-site users
              that benefit from high traffic counts and interstate visibility.
            </p>
            <p>
              <strong className="text-navy">Port Manatee / US-41 South</strong> — The
              industrial zone surrounding Port Manatee extends along US-41 and into the
              Palmetto area. Warehouses, distribution centers, and manufacturing facilities
              serve both port-related and domestic logistics operations.
            </p>
            <p>
              <strong className="text-navy">Lakewood Ranch</strong> — This large-scale
              master-planned community on the Manatee-Sarasota county line has created
              its own commercial ecosystem. Office space, medical campuses, retail centers,
              and hospitality properties serve a growing population of residents and
              businesses.
            </p>
            <p>
              <strong className="text-navy">Downtown Bradenton</strong> — A walkable
              downtown experiencing renewed investment. Small office, retail, and restaurant
              spaces in historic buildings attract local entrepreneurs and professional
              service firms.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Property Types ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">Active Property Types</h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>
              <strong className="text-navy">Retail</strong> — Population-driven retail
              demand remains strong, particularly near I-75 interchanges and in the
              Lakewood Ranch corridor. National retailers continue to enter the market.
            </p>
            <p>
              <strong className="text-navy">Industrial</strong> — Port Manatee and
              surrounding industrial parks support distribution, manufacturing, and
              cold storage. Trades-oriented flex space is also in demand along US-301
              and in Palmetto.
            </p>
            <p>
              <strong className="text-navy">Medical Office</strong> — Healthcare
              expansion follows residential growth. New outpatient campuses and
              specialty clinics are opening in Lakewood Ranch and along SR 64.
            </p>
            <p>
              <strong className="text-navy">Office</strong> — Lakewood Ranch leads
              office demand with professional and corporate tenants. Downtown Bradenton
              offers more affordable boutique office options.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">
            How Barrett Henry Serves This Market
          </h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>
              Barrett Henry is a REALTOR® and Broker Associate at REMAX Collective who
              helps buyers, sellers, tenants, and landlords navigate Manatee County&apos;s
              growing commercial real estate market. Whether you need retail space near
              I-75, industrial capacity near Port Manatee, or want to invest in a market
              with strong growth fundamentals, Barrett brings the deal execution and
              market knowledge to help you succeed.
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
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
            Manatee County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Interested in Manatee County Commercial Real Estate?"
        body="Barrett can help you find the right opportunity in this growing market between Tampa and Sarasota."
        buttonText="Let's Connect"
        buttonHref="/contact"
      />
    </>
  );
}
