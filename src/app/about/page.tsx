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
  title: "About Barrett Henry | CRE Advisor, REMAX Hall of Fame",
  description:
    "Barrett Henry — Commercial Real Estate Advisor at REMAX Collective with 23+ years of real estate experience. e-PRO, MRP, SRS designations, REMAX Hall of Fame. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/about" },
  openGraph: {
    title: "About Barrett Henry | CRE Advisor, REMAX Hall of Fame",
    description:
      "REMAX Commercial Real Estate Advisor with 23+ years of real estate experience. REMAX Hall of Fame. Serving Florida commercial real estate clients with integrity and results.",
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
      jobTitle: "Commercial Real Estate Advisor",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "REMAX Collective",
      },
      memberOf: {
        "@type": "Organization",
        name: "REMAX Commercial®",
        url: "https://www.remaxcommercial.com",
      },
      url: "https://hencre.com/about",
      telephone: "+1-813-733-7907",
      email: "barrett@nowtb.com",
      knowsAbout: [
        "Commercial Real Estate",
        "Tenant Representation",
        "Landlord Leasing",
        "Investment Sales",
        "CRE Valuation",
        "Dispositions",
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
        subtitle="Commercial Real Estate Advisor at REMAX Collective. REALTOR® with 23+ years of real estate experience."
      />

      {/* ---- Bio section ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Who I Am</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            I am Barrett Henry — a licensed Commercial Real Estate Advisor at REMAX
            Collective, with 23+ years of real estate experience. I hold the e-PRO,
            MRP (Military Relocation Professional), and SRS (Seller Representative
            Specialist) designations, and I have been inducted into the REMAX Hall of
            Fame.
          </p>
          <p>
            My career has spanned residential and commercial transactions, but my focus
            today is commercial real estate across Florida. I handle tenant
            representation, landlord leasing, investment sales, dispositions, and
            broker opinions of value — the full spectrum of CRE services. On the
            residential side, I continue to serve Tampa Bay buyers and sellers
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
            — giving investors a single point of contact from acquisition through
            ongoing management.
          </p>
          <p>
            Based in Tampa Bay, serving commercial clients across Florida through
            the REMAX Commercial® network. I operate from three REMAX Collective
            offices in Tampa, Largo, and Brandon. For deals anywhere else in the
            state, I leverage a network of trusted brokers in all 67 Florida
            counties. You get local expertise no matter where the property sits.
          </p>
        </div>
      </section>

      {/* ---- Why REMAX Commercial® (moved above CRE expertise for brand prominence) ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why REMAX Commercial®?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              The REMAX name is the most recognized in real estate worldwide — and
              REMAX Commercial® is the division built specifically for commercial
              property professionals. Founded in 1973, REMAX has spent over 50 years
              growing into a network of 145,000+ agents across 9,000+ offices in 120+
              countries and territories. That is not just brand recognition — it is
              infrastructure.
            </p>
            <p>
              I chose REMAX because the network gives my clients access to tools,
              market data, and referral relationships that independent brokerages
              simply cannot match. I use MAXRefer — an AI-powered platform that
              matches referrals across the entire REMAX network — to connect clients
              with the right specialist in any market. RealNex Marketplace gives my
              listings exposure to qualified buyers and tenants nationwide. And REMAX
              University keeps me sharp with commercial-focused training, including
              discounted CCIM courses and monthly Commercial Pro sessions.
            </p>
            <p>
              Unlike traditional CRE firms that restrict brokers to a single asset
              class, the REMAX Commercial® model gives me the flexibility to handle
              any property type — office, retail, industrial, multifamily, land,
              hospitality, and specialty assets. Commercial real estate is
              not residential with bigger numbers — it requires different skills,
              different analysis, and a different mindset. The REMAX model attracts
              brokers who think that way.
            </p>
            <p>
              Beyond business, REMAX has maintained a 32+ year partnership with
              Children&apos;s Miracle Network Hospitals — proof that the brand stands
              for more than transactions.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/remax-commercial"
              className="text-black font-semibold no-underline hover:underline"
            >
              Learn more about REMAX Commercial® &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ---- CRE expertise ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why Commercial Real Estate?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Commercial real estate is where strategy matters most. Residential deals
              are emotional — commercial deals are analytical. You need a broker who
              can read a rent roll, model cash-on-cash returns, negotiate tenant
              improvement allowances, and still pick up the phone on a Saturday.
            </p>
            <p>
              That is what I bring to every deal. I am not a big-box brokerage with
              layers of bureaucracy. I am one REMAX Commercial® broker with deep experience, modern
              tools, and a bias toward action. When you call me, you get me — not an
              assistant, not a junior agent, not a voicemail.
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

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s Talk About Your Deal
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you are buying, selling, leasing, or just exploring your options —
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
