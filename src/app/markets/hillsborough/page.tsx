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
  title: "Hillsborough County Commercial Real Estate | HenCRE",
  description:
    "Hillsborough County commercial real estate market: Tampa Westshore, downtown mixed-use, I-75 industrial corridor. Barrett Henry, Broker Associate at REMAX Collective. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/hillsborough" },
  openGraph: {
    title: "Hillsborough County Commercial Real Estate | HenCRE",
    description:
      "Explore Tampa and Hillsborough County's commercial real estate landscape: office, industrial, retail, and investment opportunities.",
    url: "https://hencre.com/markets/hillsborough",
  },
};

const faqs = [
  {
    question: "What are the strongest commercial real estate submarkets in Hillsborough County?",
    answer:
      "The Westshore business district remains the largest suburban office market on Florida's west coast. Downtown Tampa continues to attract mixed-use and Class A office development. The I-75 corridor from Ybor City through Brandon and Riverview is one of the region's most active industrial zones, and the USF area near Fowler Avenue anchors a large retail and medical office node.",
  },
  {
    question: "What types of commercial properties are most active in Tampa?",
    answer:
      "Industrial warehouse and distribution space leads transaction volume, driven by e-commerce fulfillment demand and supply-chain diversification. Office leasing is active in Westshore and downtown. Retail thrives in high-traffic nodes like Brandon, South Tampa, and the Wiregrass corridor in northern Hillsborough. Multifamily and mixed-use investment sales also remain a significant part of the market.",
  },
  {
    question: "Is Hillsborough County a good market for commercial real estate investment?",
    answer:
      "Hillsborough County benefits from strong population growth, diverse industry drivers including healthcare, finance, technology, and defense, and improving infrastructure through projects like the I-275/Howard Frankland Bridge rebuild. These fundamentals support long-term demand across all property types. An experienced broker can help you identify the right submarket and asset class for your investment goals.",
  },
  {
    question: "What CRE services does Barrett Henry offer in Hillsborough County?",
    answer:
      "Barrett provides buyer and seller representation for commercial sales, tenant and landlord representation for leasing, investment property analysis, and disposition strategy. He works across all commercial property types: office, retail, industrial, land, and special-use throughout Hillsborough County.",
  },
  {
    question: "How does the Tampa CRE market compare to other Florida metros?",
    answer:
      "Tampa has emerged as one of the top commercial real estate markets in the Southeast. The region draws attention from institutional and private investors alike, thanks to business-friendly policies, no state income tax, a growing tech workforce, and a geographic position that serves both East Coast and Gulf Coast distribution networks.",
  },
  {
    question: "What should I look for when evaluating a commercial investment in Hillsborough County?",
    answer:
      "Focus on submarket dynamics first: industrial near I-75 and the Port, office in Westshore or downtown, retail along high-traffic corridors. Evaluate the tenant mix, lease terms, and cap rate relative to comparable sales. A local broker can help you understand which corridors are appreciating and where vacancy is tightening. Thorough due diligence on zoning, environmental, and title is essential before closing any deal.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description:
        "Commercial real estate brokerage serving Hillsborough County and the greater Tampa Bay region.",
      telephone: "(813) 733-7907",
      email: "barrett@hencre.com",
      url: "https://hencre.com/markets/hillsborough",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Hillsborough County, Florida",
      },
      employee: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate, Commercial Real Estate",
      },
    },
    {
      "@type": "Service",
      name: "Hillsborough County Commercial Real Estate Services",
      description:
        "CRE leasing, sales, investment analysis, and dispositions in Hillsborough County, Florida.",
      provider: {
        "@type": "RealEstateAgent",
        name: "Barrett Henry",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Hillsborough County, Florida",
      },
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
  { title: "Pinellas County", href: "/markets/pinellas", description: "St. Petersburg & Clearwater CRE" },
  { title: "Pasco County", href: "/markets/pasco", description: "Wesley Chapel & New Port Richey CRE" },
  { title: "Polk County", href: "/markets/polk", description: "Lakeland & I-4 corridor logistics" },
  { title: "Manatee County", href: "/markets/manatee", description: "Bradenton CRE market" },
  { title: "Sarasota County", href: "/markets/sarasota", description: "Sarasota retail, office & hospitality" },
];

export default function HillsboroughMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }, { label: "Hillsborough County", href: "/markets/hillsborough" }]} />

      <Hero
        title="Hillsborough County Commercial Real Estate"
        subtitle="Tampa is the commercial engine of Florida's west coast — from the Westshore skyline to the industrial warehouses lining I-75, this is where deals happen."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            Market Overview
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Hillsborough County is the anchor of the Tampa Bay metropolitan area and
              the largest commercial real estate market on Florida&apos;s Gulf Coast. With
              Tampa as its urban core, the county benefits from a diversified economy that
              spans financial services, healthcare systems, defense contracting, technology,
              higher education, and a rapidly expanding logistics sector. That economic
              breadth translates into consistent demand across every major property type:
              {" "}<Link href="/commercial/office-space" className="text-accent underline">office</Link>,{" "}
              <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial</Link>,{" "}
              <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>,
              multifamily, and special-use.
            </p>
            <p>
              The county&apos;s position at the junction of three interstate highways — I-275,
              I-4, and I-75 — gives it a transportation advantage that few Florida metros
              can match. The Port of Tampa, the state&apos;s largest bulk cargo port, further
              strengthens the industrial and distribution pipeline. Add Tampa International
              Airport, consistently rated among the best in the country, and you have a
              market that institutional investors, national retailers, and Fortune 500
              tenants actively target. Investors evaluating entry points can use our{" "}
              <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link>{" "}
              to benchmark returns against current market conditions.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop"
              alt="Commercial office buildings in Hillsborough County representing Westshore business district"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
            <p className="mt-2 text-sm text-[#666666] italic">Hillsborough County&apos;s commercial corridors support office, retail, and industrial users across the region.</p>
          </div>
        </div>
      </section>

      {/* ---- Key CRE Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            Key CRE Corridors and Districts
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Westshore Business District:</strong> The
              largest suburban{" "}
              <Link href="/commercial/office-space" className="text-accent underline">office market</Link>{" "}
              on Florida&apos;s west coast. Bounded by Tampa International Airport to the north and the Courtney Campbell Causeway to the
              west, Westshore draws major corporate tenants in finance, insurance, legal
              services, and tech. The district also contains a dense retail core along
              International Plaza and Boy Scout Boulevard, making it a true live-work-play
              node for companies seeking Class A and B office space with walkable amenities.
            </p>
            <p>
              <strong className="text-black">Downtown Tampa / Water Street:</strong> The
              city&apos;s central business district has transformed over the past decade. The
              Water Street Tampa development brought new Class A office towers, hotels,
              residential high-rises, and experiential{" "}
              <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>{" "}
              to the waterfront. Older
              office buildings along Kennedy Boulevard and Franklin Street continue to
              reposition for creative office and co-working users, while the Channel
              District and Ybor City attract a younger tenant demographic looking for
              adaptive-reuse spaces.
            </p>

            <div className="my-8">
              <Image
                src="https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200&h=600&fit=crop"
                alt="Downtown Tampa skyline and waterfront development"
                width={1200}
                height={600}
                className="rounded-lg w-full"
              />
              <p className="mt-2 text-sm text-[#666666] italic">Downtown Tampa and the Water Street corridor continue to attract Class A office and mixed-use development to Hillsborough County.</p>
            </div>

            <p>
              <strong className="text-black">I-75 Industrial Corridor:</strong> Stretching
              from the eastern edge of Tampa through Brandon, Riverview, and into southern
              Hillsborough, this corridor is the region&apos;s industrial backbone. Large-format
              distribution centers, cold storage facilities, and last-mile delivery hubs
              cluster near the I-75 / I-4 interchange and along US-301. Land availability
              in Riverview and Gibsonton continues to attract speculative industrial
              development and build-to-suit users who need proximity to both the Port of
              Tampa and the I-4 corridor to Orlando. Read our{" "}
              <Link href="/blog/tampa-industrial-market-outlook-2026" className="text-accent underline">Tampa industrial market outlook</Link>{" "}
              for current trends in this corridor.
            </p>
            <p>
              <strong className="text-black">North Tampa / USF Area:</strong> The corridor
              surrounding the University of South Florida along Fowler Avenue and Bruce B.
              Downs Boulevard is a major retail, medical office, and multifamily hub. H. Lee
              Moffitt Cancer Center and multiple hospital systems create steady demand for
              medical office and outpatient facilities, while the student population anchors
              a dense retail environment.
            </p>
            <p>
              <strong className="text-black">South Tampa:</strong> Known for high
              household incomes and limited land, South Tampa commands premium rents for
              neighborhood retail and boutique office space. The South Howard (SoHo)
              district and the Bayshore corridor are among the most desirable retail
              locations in the metro, though available inventory is tight and rarely turns
              over.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Property Types ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            Active Property Types
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Industrial &amp; Logistics:</strong> By far
              the most active asset class. E-commerce fulfillment, third-party logistics,
              cold storage, and last-mile delivery drive demand. New speculative development
              continues in the I-75 corridor and near the Port of Tampa, though rising
              construction costs have tempered some deliveries. Browse available{" "}
              <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial and warehouse listings</Link>.
            </p>
            <p>
              <strong className="text-black">Office:</strong> Westshore and downtown Tampa
              remain the primary office markets. Demand has shifted toward higher-quality
              spaces with modern amenities as employers compete for talent. Smaller suburban
              office pockets in Carrollwood, Westchase, and Brandon serve professional
              services firms and medical practices. Explore available{" "}
              <Link href="/commercial/office-space" className="text-accent underline">office space listings</Link>{" "}
              across Hillsborough County.
            </p>
            <p>
              <strong className="text-black">Retail:</strong> Retail follows rooftops, and
              Hillsborough County&apos;s population growth keeps leasing activity strong.
              Pad sites along major corridors command attention from national tenants, while
              neighborhood centers in high-income submarkets like South Tampa and Westchase
              maintain low vacancy through strong foot traffic. See available{" "}
              <Link href="/commercial/retail-space" className="text-accent underline">retail space listings</Link>.
            </p>
            <p>
              <strong className="text-black">Land &amp; Development:</strong> Entitled
              commercial land is increasingly scarce inside the urban core, pushing
              developers east and south toward Riverview, FishHawk, and Wimauma. Mixed-use
              entitlements are the most sought-after as municipalities push for walkable,
              transit-oriented development. View available{" "}
              <Link href="/commercial/land-development" className="text-accent underline">land and development sites</Link>.
            </p>
            <p>
              <strong className="text-black">Investment Properties:</strong> Hillsborough
              County is a deep market for income-producing investments. Whether you are
              pursuing a{" "}
              <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">triple net lease</Link>{" "}
              single-tenant property or a value-add multifamily asset, the county offers
              diverse options. Many investors use{" "}
              <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchanges</Link>{" "}
              to reposition capital from higher-cost markets into Hillsborough. See available{" "}
              <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN net lease properties</Link>{" "}
              and explore our{" "}
              <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">multifamily investment guide</Link>.
            </p>

            <div className="my-8">
              <Image
                src="https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1200&h=600&fit=crop"
                alt="Industrial warehouse and logistics facility along the I-75 corridor in Hillsborough County"
                width={1200}
                height={600}
                className="rounded-lg w-full"
              />
              <p className="mt-2 text-sm text-[#666666] italic">Industrial and logistics demand continues to drive new development in the I-75 corridor south and east of Tampa.</p>
            </div>
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
              Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate
              experience — backed by the REMAX Commercial network. He works with buyers, sellers,
              tenants, and landlords across every commercial property type in Hillsborough County.
              His approach starts with understanding your business objectives: whether you need to
              secure warehouse space near the port, find a downtown office that helps recruit talent,
              or sell an investment property at the right time in the market cycle.
            </p>
            <p>
              Services in Hillsborough County include{" "}
              <Link href="/services/investment-sales" className="text-accent underline">buyer and seller representation</Link>,{" "}
              <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link>,{" "}
              <Link href="/services/landlord-leasing" className="text-accent underline">landlord leasing</Link>,{" "}
              <Link href="/services/cre-valuation" className="text-accent underline">investment property analysis and valuation</Link>,
              site selection, and{" "}
              <Link href="/services/dispositions" className="text-accent underline">disposition strategy</Link>.
              Barrett works across the full spectrum of deal sizes and handles both on-market and
              off-market opportunities. Explore the{" "}
              <Link href="/markets" className="text-accent underline">full markets overview</Link>{" "}
              to see how Hillsborough fits into the broader{" "}
              <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link>,{" "}
              <Link href="/markets/pasco" className="text-accent underline">Pasco</Link>, and{" "}
              <Link href="/markets/polk" className="text-accent underline">Polk County</Link>{" "}
              markets he serves.
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
            Hillsborough County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ---- Related Markets ---- */}
      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      {/* ---- Final CTA ---- */}
      <CTASection
        heading="Ready to Move on a Hillsborough County Opportunity?"
        body="From Westshore office suites to I-75 warehouse space, Barrett can help you find, negotiate, and close the right deal. Call (813) 733-7907."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
