import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * About Page — Barrett Henry bio, CRE expertise, designations.
 * First-person voice, confident but approachable.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "About Barrett Henry | Broker Associate, REMAX",
  description:
    "Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience. e-PRO, MRP, SRS designations, REMAX Hall of Fame. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/about" },
  openGraph: {
    title: "About Barrett Henry | Broker Associate, REMAX",
    description:
      "Broker Associate at REMAX Collective with 23+ years of real estate experience. REMAX Hall of Fame. Serving Florida commercial real estate clients with integrity and results.",
    url: "https://hencre.com/about",
  },
};

/* -- Person schema -- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://hencre.com/about" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://hencre.com/#person",
      name: "Barrett Henry",
      jobTitle: "Broker Associate",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "REMAX Collective",
      },
      memberOf: {
        "@type": "Organization",
        name: "REMAX Commercial",
        url: "https://www.remaxcommercial.com",
      },
      url: "https://hencre.com/about",
      telephone: "+1-813-733-7907",
      email: "barrett@hencre.com",
      dateModified: "2026-07-31",
      knowsAbout: [
        "Commercial Real Estate",
        "Tenant Representation",
        "Landlord Leasing",
        "Investment Sales",
        "CRE Valuation",
        "Dispositions",
        "Commercial Property Management",
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "e-PRO" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "MRP" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "SRS" },
      ],
      award: "REMAX Hall of Fame",
      sameAs: [
        "https://www.remaxcommercial.com",
        "https://nowtb.com",
        "https://barretthenry.remax.com",
        "https://vivipm.com",
        "https://valricopropertymgmt.com",
        "https://hencre.com",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <Hero
        title="About Barrett Henry"
        subtitle="Broker Associate at REMAX Collective. 23+ years of real estate experience across Florida."
      />

      {/* ---- Bio section ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Who I Am</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            I am Barrett Henry, a licensed Broker Associate at REMAX
            Collective, with 23+ years of real estate experience. I hold the e-PRO,
            MRP (Military Relocation Professional), and SRS (Seller Representative
            Specialist) designations, and I have been inducted into the REMAX Hall of
            Fame.
          </p>
          <p>
            My career has spanned residential and commercial transactions, but my focus
            today is{" "}
            <Link href="/commercial" className="font-semibold text-black underline">
              commercial real estate across Florida
            </Link>
            . I handle{" "}
            <Link href="/services/tenant-representation" className="font-semibold text-black underline">
              tenant representation
            </Link>
            ,{" "}
            <Link href="/services/landlord-leasing" className="font-semibold text-black underline">
              landlord leasing
            </Link>
            ,{" "}
            <Link href="/services/investment-sales" className="font-semibold text-black underline">
              investment sales
            </Link>
            ,{" "}
            <Link href="/services/dispositions" className="font-semibold text-black underline">
              dispositions
            </Link>
            , and{" "}
            <Link href="/services/cre-valuation" className="font-semibold text-black underline">
              broker opinions of value
            </Link>{" "}
            , the full spectrum of{" "}
            <Link href="/services" className="font-semibold text-black underline">
              CRE services
            </Link>
            . On the residential side, I continue to serve Tampa Bay buyers and sellers
            through{" "}
            <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-black underline">
              The NOW Team at REMAX Collective
            </a>.
          </p>
          <p>
            Beyond brokerage, I also manage commercial and residential rental
            properties through{" "}
            <a href="https://vivipm.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-black underline">
              ViVi Property Management
            </a>{" "}
            and{" "}
            <a href="https://valricopropertymgmt.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-black underline">
              Valrico Property Management
            </a>{" "}
            , giving investors a single point of contact from acquisition through
            ongoing management. For investors who prefer to keep everything under one
            roof, I also offer{" "}
            <Link href="/services/commercial-property-management" className="font-semibold text-black underline">
              commercial property management
            </Link>{" "}
            services.
          </p>
          <p>
            Based in Tampa Bay, serving commercial clients across Florida through
            the REMAX Commercial network. I operate from three REMAX Collective
            offices in Tampa, Largo, and Brandon. For deals anywhere else in the
            state, I leverage a network of trusted brokers in all 67 Florida
            counties. You get local expertise no matter where the property sits.
            My primary markets include{" "}
            <Link href="/markets/hillsborough" className="font-semibold text-black underline">
              Hillsborough County
            </Link>
            ,{" "}
            <Link href="/markets/pinellas" className="font-semibold text-black underline">
              Pinellas County
            </Link>
            ,{" "}
            <Link href="/markets/pasco" className="font-semibold text-black underline">
              Pasco County
            </Link>
            , and{" "}
            <Link href="/markets/polk" className="font-semibold text-black underline">
              Polk County
            </Link>
            , but I cover{" "}
            <Link href="/markets" className="font-semibold text-black underline">
              all Florida markets
            </Link>{" "}
            through the REMAX referral network.
          </p>
        </div>
      </section>

      {/* ---- Services Grid ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Commercial Real Estate Services
          </h2>
          <p className="mt-4 text-lg text-[#666666]">
            I offer the full range of commercial real estate services for buyers, sellers,
            tenants, landlords, and investors across Florida.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tenant Representation", href: "/services/tenant-representation", desc: "Find the right space at the right terms." },
              { title: "Landlord Leasing", href: "/services/landlord-leasing", desc: "Fill vacancies faster with qualified tenants." },
              { title: "Investment Sales", href: "/services/investment-sales", desc: "Data-driven acquisition and portfolio strategy." },
              { title: "Dispositions", href: "/services/dispositions", desc: "Maximize proceeds when exiting a commercial asset." },
              { title: "CRE Valuation", href: "/services/cre-valuation", desc: "Broker opinions of value and comp analysis." },
              { title: "Property Management", href: "/services/commercial-property-management", desc: "Full-service management from lease to renewal." },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="rounded-lg border border-[#E5E5E5] p-4 no-underline transition-shadow hover:shadow-md hover:no-underline"
              >
                <p className="font-bold text-black">{svc.title}</p>
                <p className="mt-1 text-sm text-[#666666]">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why REMAX Commercial (moved above CRE expertise for brand prominence) ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why REMAX Commercial?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              The REMAX name is the most recognized in real estate worldwide, and
              REMAX Commercial is the division built specifically for commercial
              property professionals. Founded in 1973, REMAX has spent over 50 years
              growing into a network of 145,000+ agents across 9,000+ offices in 120+
              countries and territories. That is not just brand recognition. It is
              infrastructure.
            </p>
            <p>
              I chose REMAX because the network gives my clients access to tools,
              market data, and referral relationships that independent brokerages
              simply cannot match. I use MAXRefer, an AI-powered platform that
              matches referrals across the entire REMAX network, to connect clients
              with the right specialist in any market. RealNex Marketplace gives my
              listings exposure to qualified buyers and tenants nationwide. And REMAX
              University keeps me sharp with commercial-focused training, including
              discounted CCIM courses and monthly Commercial Pro sessions.
            </p>
            <p>
              Unlike traditional CRE firms that restrict brokers to a single asset
              class, the REMAX Commercial model gives me the flexibility to handle
              any property type:{" "}
              <Link href="/commercial/office-space" className="font-semibold text-black underline">office</Link>
              ,{" "}
              <Link href="/commercial/retail-space" className="font-semibold text-black underline">retail</Link>
              ,{" "}
              <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">industrial</Link>
              ,{" "}
              <Link href="/commercial/multifamily" className="font-semibold text-black underline">multifamily</Link>
              ,{" "}
              <Link href="/commercial/land-development" className="font-semibold text-black underline">land</Link>
              , and{" "}
              <Link href="/commercial/nnn-net-lease" className="font-semibold text-black underline">NNN net lease</Link>
              {" "}assets. Commercial real estate is
              not residential with bigger numbers. It requires different skills,
              different analysis, and a different mindset.
            </p>
            <p>
              Beyond business, REMAX has maintained a 32+ year partnership with
              Children's Miracle Network Hospitals, proof that the brand stands
              for more than transactions.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/remax-commercial"
              className="text-black font-semibold no-underline hover:underline"
            >
              Learn more about REMAX Commercial &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ---- CRE expertise ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why Commercial Real Estate?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Commercial real estate is where strategy matters most. Residential deals
              are emotional. Commercial deals are analytical. You need a broker who
              can read a rent roll, model cash-on-cash returns, negotiate tenant
              improvement allowances, and still pick up the phone on a Saturday.
            </p>
            <p>
              That is what I bring to every deal. I am not a big-box brokerage with
              layers of bureaucracy. I am one REMAX Commercial broker with deep experience, modern
              tools, and a bias toward action. When you call me, you get me, not an
              assistant, not a junior agent, not a voicemail.
            </p>
            <p>
              Whether you are a business owner searching for your first commercial
              lease, an investor evaluating a{" "}
              <Link href="/commercial/nnn-net-lease" className="font-semibold text-black underline">
                NNN net lease
              </Link>{" "}
              acquisition, or a landlord trying to fill a vacancy in a competitive
              market, I bring the same depth of attention to every client.
              Have questions? Check the{" "}
              <Link href="/faq" className="font-semibold text-black underline">
                CRE FAQ page
              </Link>{" "}
              or read the latest analysis on the{" "}
              <Link href="/blog" className="font-semibold text-black underline">
                HenCRE blog
            </Link>.
            </p>
          </div>

          {/* Designations grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "e-PRO", desc: "Digital marketing certified" },
              { label: "MRP", desc: "Military Relocation Professional" },
              { label: "SRS", desc: "Seller Representative Specialist" },
              { label: "Hall of Fame", desc: "REMAX Hall of Fame inductee" },
            ].map((d) => (
              <div
                key={d.label}
                className="rounded-lg border border-[#E5E5E5] p-4 text-center"
              >
                <p className="text-lg font-bold text-black">{d.label}</p>
                <p className="mt-1 text-sm text-[#666666]">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Markets covered ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Florida Markets I Cover
          </h2>
          <p className="mt-4 text-lg text-[#666666]">
            I serve all 67 Florida counties, with deep expertise across the Tampa Bay
            and Central Florida region. Key market pages:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { name: "Hillsborough County", href: "/markets/hillsborough" },
              { name: "Pinellas County", href: "/markets/pinellas" },
              { name: "Pasco County", href: "/markets/pasco" },
              { name: "Polk County", href: "/markets/polk" },
              { name: "Manatee County", href: "/markets/manatee" },
              { name: "Sarasota County", href: "/markets/sarasota" },
              { name: "Hernando County", href: "/markets/hernando" },
              { name: "Citrus County", href: "/markets/citrus" },
            ].map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="rounded-full border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-black hover:text-white transition-colors"
              >
                {m.name}
              </Link>
            ))}
            <Link
              href="/markets"
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-[#333] transition-colors"
            >
              All Markets &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s Talk About Your Deal
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you are buying, selling, leasing, or just exploring your options,
            I am here to help. No pressure, no obligation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
