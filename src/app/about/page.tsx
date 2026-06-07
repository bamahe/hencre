import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * About Page — Barrett Henry bio, CRE expertise, designations.
 * First-person voice, confident but approachable.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "About Barrett Henry | Commercial Real Estate Broker",
  description:
    "Barrett Henry — REALTOR®, Broker Associate at REMAX Collective. 23+ years of real estate experience, e-PRO, MRP, SRS designations, REMAX Hall of Fame. Commercial real estate across Florida.",
  openGraph: {
    title: "About Barrett Henry | HenCRE",
    description:
      "23+ years of real estate experience. Broker Associate at REMAX Collective. Serving Florida commercial real estate clients with integrity and results.",
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
        "https://nowtb.com",
        "https://barretthenry.remax.com",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-slate-brand">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">About</li>
        </ol>
      </nav>

      <Hero
        title="About Barrett Henry"
        subtitle="Broker Associate at REMAX Collective. REALTOR® with 23+ years of real estate experience."
      />

      {/* ---- Bio section ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Who I Am</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
          <p>
            I am Barrett Henry — a licensed REALTOR® and Broker Associate at REMAX
            Collective, with 23+ years of real estate experience. I hold the e-PRO,
            MRP (Military Relocation Professional), and SRS (Seller Representative
            Specialist) designations, and I have been inducted into the REMAX Hall of
            Fame.
          </p>
          <p>
            My career has spanned residential and commercial transactions, but my focus
            today is commercial real estate across Florida. I handle tenant
            representation, landlord leasing, investment sales, dispositions, and
            broker opinions of value — the full spectrum of CRE services.
          </p>
          <p>
            I am anchored in Tampa Bay with three REMAX Collective offices in Tampa,
            Largo, and Brandon. For deals anywhere else in the state, I leverage a
            network of trusted brokers in all 67 Florida counties. You get local
            expertise no matter where the property sits.
          </p>
        </div>
      </section>

      {/* ---- CRE expertise ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why Commercial Real Estate?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
            <p>
              Commercial real estate is where strategy matters most. Residential deals
              are emotional — commercial deals are analytical. You need a broker who
              can read a rent roll, model cash-on-cash returns, negotiate tenant
              improvement allowances, and still pick up the phone on a Saturday.
            </p>
            <p>
              That is what I bring to every deal. I am not a big-box brokerage with
              layers of bureaucracy. I am one broker with deep experience, modern
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
                className="rounded-lg border border-gray-200 p-4 text-center"
              >
                <p className="text-lg font-bold text-navy">{d.label}</p>
                <p className="mt-1 text-sm text-slate-brand">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
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
              className="inline-block rounded-lg bg-accent-blue px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-accent-blue/90 hover:no-underline"
            >
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
