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
 * Polk County Market Page
 * Lakeland, Winter Haven — Central FL logistics hub, I-4 corridor
 * warehousing, and emerging downtown revitalization.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Polk County Commercial Real Estate | Barrett Henry, REMAX Collective",
  description:
    "Polk County CRE market — I-4 corridor logistics, Lakeland downtown revitalization, Winter Haven retail growth. Barrett Henry, CRE Advisor. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/polk" },
  openGraph: {
    title: "Polk County Commercial Real Estate | Barrett Henry, REMAX Collective",
    description:
      "Explore Polk County's CRE market — Central Florida's logistics powerhouse along the I-4 corridor.",
    url: "https://hencre.com/markets/polk",
  },
};

/* FAQ items specific to Polk County CRE */
const faqs = [
  {
    question: "Why is Polk County a top market for industrial and logistics real estate?",
    answer:
      "Polk County sits directly on the I-4 corridor between Tampa and Orlando, giving it access to two major metropolitan areas and their consumer bases. The county offers large tracts of developable land at lower costs than either metro core, making it ideal for warehouse, distribution, and fulfillment operations. Several major logistics operators have established regional hubs here, and speculative industrial development continues along the I-4 corridor.",
  },
  {
    question: "What is happening in downtown Lakeland commercially?",
    answer:
      "Downtown Lakeland has seen meaningful revitalization over the past several years. Historic buildings are being repurposed for boutique retail, restaurants, and creative office space. The Lakeland Downtown Development Authority has driven investment in streetscape improvements and mixed-use projects. While the downtown market is still maturing, it is attracting entrepreneurs and small businesses that value a walkable, character-rich environment.",
  },
  {
    question: "What commercial property types are active in Polk County?",
    answer:
      "Industrial and logistics properties dominate transaction volume, with large-format warehouses and distribution centers along I-4 being the primary asset type. Retail is active in growth areas around Lakeland, Winter Haven, and Davenport. Medical office is expanding as healthcare systems follow population growth. Office demand is more modest but present in downtown Lakeland and along key corridors.",
  },
  {
    question: "How does Barrett Henry help CRE clients in Polk County?",
    answer:
      "Barrett provides buyer and seller representation, tenant and landlord lease negotiation, investment analysis, land acquisition for developers, and disposition strategy. He works with industrial users seeking I-4 corridor logistics space, retailers looking for outparcels in growth areas, and investors evaluating the county's value-oriented pricing compared to the Tampa and Orlando metros.",
  },
  {
    question: "How does Polk County industrial pricing compare to Tampa Bay?",
    answer:
      "Polk County typically offers lower industrial rents and land prices than the core Tampa Bay submarkets, reflecting its position as a secondary market with significant land supply. For large-footprint users who need lower occupancy costs or longer-term lease flexibility, Polk County's I-4 corridor provides a compelling value proposition while still offering excellent regional distribution reach.",
  },
];

/* JSON-LD: LocalBusiness + Service + FAQPage */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Polk County.",
      telephone: "(813) 733-7907",
      email: "barrett@hencre.com",
      url: "https://hencre.com/markets/polk",
      areaServed: { "@type": "AdministrativeArea", name: "Polk County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "Commercial Real Estate Advisor" },
    },
    {
      "@type": "Service",
      name: "Polk County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Polk County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Polk County, Florida" },
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
  { title: "Manatee County", href: "/markets/manatee", description: "Bradenton CRE market" },
  { title: "Pasco County", href: "/markets/pasco", description: "Wesley Chapel growth corridor" },
  { title: "Sarasota County", href: "/markets/sarasota", description: "Sarasota CRE market" },
];

export default function PolkMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }, { label: "Polk County", href: "/markets/polk" }]} />

      <Hero
        title="Polk County Commercial Real Estate"
        subtitle="Central Florida's logistics powerhouse — where the I-4 corridor meets vast developable land and a workforce positioned between Tampa and Orlando."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Polk County is the geographic center of Florida and the bridge between the <a href="/markets/hillsborough" className="text-accent underline">Tampa
              Bay</a> and Orlando metropolitan areas. That strategic position, combined with the
              I-4 corridor running through the county&apos;s heart, has made Polk one of the
              state&apos;s most important commercial real estate markets for <a href="/commercial/industrial-warehouse" className="text-accent underline">industrial and
              logistics users</a>. The county offers what neither Tampa nor Orlando can at scale:
              large, affordable parcels of land with direct interstate access and a labor pool
              that draws from both metros.
            </p>
            <p>
              Lakeland, the county&apos;s largest city, serves as the economic and civic center.
              Its downtown has experienced a genuine revival, with new restaurants, creative
              businesses, and mixed-use projects reshaping a core that was quiet for decades.
              Winter Haven, the county&apos;s second city, benefits from proximity to the LEGOLAND
              Florida resort and a growing base of <a href="/commercial/retail-space" className="text-accent underline">retail</a> and medical office users. The southern
              tier of the county around Davenport and Haines City draws tourism-adjacent commercial
              demand from its position near Walt Disney World. For more detail on the warehouse market, see <a href="/blog/lakeland-warehouse-industrial-growth" className="text-accent underline">Lakeland warehouse and industrial growth</a>.
            </p>
            <p>
              Polk County is also one of Florida&apos;s largest agricultural counties, and the
              transition of agricultural land to commercial and industrial use creates a steady
              pipeline of developable acreage. Phosphate mining legacy lands add to the supply
              of sites that can be entitled for large-scale commercial development, particularly
              along the I-4 and US-98 corridors.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&h=500&fit=crop"
          alt="large warehouse and distribution facility along the I-4 corridor in Polk County Florida"
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
              <strong className="text-black">I-4 Industrial Corridor</strong> — The primary
              logistics artery stretching from Lakeland through Plant City and east toward
              Orlando. Large-format distribution centers, cold storage, and third-party
              logistics facilities cluster near interchanges. This corridor attracts
              national tenants who need central Florida distribution capability. <a href="/services/investment-sales" className="text-accent underline">Investment sales</a> here
              involve some of the largest single-asset deals in the region.
            </p>
            <p>
              <strong className="text-black">Downtown Lakeland</strong> — A revitalizing
              urban core with adaptive-reuse <a href="/commercial/office-space" className="text-accent underline">office</a>, boutique retail, and restaurant space.
              Munn Park and the surrounding streets have become the focal point for small
              businesses and creative professionals. New mixed-use projects are adding
              density and foot traffic.
            </p>
            <p>
              <strong className="text-black">US-98 / Bartow Road</strong> — A busy commercial
              corridor connecting Lakeland to Bartow and points south. Strip retail, auto
              services, medical office, and flex/industrial space line this highway.
              <a href="/services/tenant-representation" className="text-accent underline"> Tenant representation</a> is active here for medical and service-oriented businesses
              seeking well-priced corridor locations.
            </p>
            <p>
              <strong className="text-black">US-27 Corridor</strong> — Running north-south
              through the county, US-27 serves the communities of Haines City, Davenport,
              and Lake Wales. This corridor has seen growing retail and hospitality demand
              driven by tourism spillover from the theme park region to the east.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&h=500&fit=crop"
          alt="downtown Lakeland streetscape representing the revitalization of Polk County's urban core"
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
              <strong className="text-black">Industrial &amp; Logistics</strong> — The
              dominant property type. Polk County offers the space and pricing that allow
              large-format users to build or lease facilities that would be cost-prohibitive
              in Tampa or Orlando. Distribution centers exceeding 100,000 square feet are
              common along the I-4 corridor. Many are structured as <a href="/insights/nnn-lease-explained" className="text-accent underline">NNN leases</a> with
              creditworthy national tenants.
            </p>
            <p>
              <strong className="text-black">Retail</strong> — Growth-driven retail follows
              the expanding residential footprint around Lakeland, Winter Haven, and the
              US-27 corridor. National credit tenants continue to enter the market as
              rooftop counts increase. <a href="/commercial/retail-space" className="text-accent underline">Retail space</a> along US-27 near the Orlando tourist
              corridor sees additional demand from hospitality-adjacent uses.
            </p>
            <p>
              <strong className="text-black">Office</strong> — Office demand is modest
              compared to the coastal markets, but downtown Lakeland&apos;s revitalization
              is creating new demand for professional and creative <a href="/commercial/office-space" className="text-accent underline">office space</a>. Medical
              office is also active near hospitals and health system campuses.
            </p>
            <p>
              <strong className="text-black">Land</strong> — Large entitled and agricultural
              parcels available for commercial conversion make Polk one of the most
              active <a href="/commercial/land-development" className="text-accent underline">land markets</a> in Central Florida. Build-to-suit and speculative
              development opportunities abound along the interstate and major highway
              corridors. Use our <a href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</a> to evaluate
              land development deals in this market.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=900&h=500&fit=crop"
          alt="industrial and logistics facility representing the dominant CRE asset class in Polk County"
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
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective who works
              with logistics operators, retailers, investors, and developers in Polk County.
              Whether you need to secure I-4 corridor warehouse space, find a retail outparcel
              in a growth area, or evaluate a land parcel for commercial development, Barrett
              provides the analysis and negotiation expertise to get the deal done.
            </p>
            <p>
              Services include <Link href="/services/investment-sales" className="text-accent underline">buyer and seller representation</Link>,
              <Link href="/services/tenant-representation" className="text-accent underline"> tenant and landlord lease negotiation</Link>,
              <Link href="/services/cre-valuation" className="text-accent underline"> investment underwriting</Link>, site selection, land acquisition, and
              <Link href="/services/dispositions" className="text-accent underline"> disposition strategy</Link>.
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
            Polk County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Need I-4 Corridor Logistics Space or Polk County CRE?"
        body="Barrett Henry can help you find the right property, negotiate the best terms, and close with confidence."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
