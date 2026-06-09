import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Landlord Leasing — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Landlord Leasing | REMAX Commercial® Florida",
  description:
    "Landlord leasing services across Florida. Barrett Henry markets your commercial property, screens tenants, and negotiates leases that protect your investment.",
  openGraph: {
    title: "Landlord Leasing | REMAX Commercial® Florida",
    description:
      "Fill commercial vacancies faster with qualified tenants. Strategic marketing and lease negotiation across Florida.",
    url: "https://hencre.com/services/landlord-leasing",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "Landlord Leasing", item: "https://hencre.com/services/landlord-leasing" },
      ],
    },
    {
      "@type": "Service",
      name: "Landlord Leasing",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Commercial landlord leasing — property marketing, tenant screening, lease negotiation, and vacancy reduction.",
      areaServed: { "@type": "State", name: "Florida" },
    },
  ],
};

export default function LandlordLeasingPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Landlord Leasing</li>
        </ol>
      </nav>

      <Hero
        title="Landlord Leasing"
        subtitle="Fill vacancies faster with qualified tenants. I market, screen, and negotiate so your property performs."
        ctaText="List Your Space"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Vacancy Costs You Money Every Day</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            As a REMAX Commercial® broker, Barrett leverages the largest real estate network in the world to fill your vacancies faster. Every month your commercial space sits empty, you are paying carrying costs
            with zero income. Taxes, insurance, maintenance, and debt service do not
            pause because the space is vacant. You need a broker who treats your
            vacancy with the same urgency you feel.
          </p>
          <p>
            I create a leasing strategy tailored to your property — competitive pricing
            based on real market data, professional marketing materials, and targeted
            outreach to active tenants and tenant reps in the market. I do not just
            post your listing and wait. I work the phones, tap my network, and drive
            qualified prospects to your door.
          </p>
          <p>
            When prospects show interest, I handle showings, qualify tenants, negotiate
            LOIs, and work through lease execution. I structure terms that protect your
            interests — favorable escalations, appropriate TI exposure, personal
            guarantees when warranted, and clear default provisions.
          </p>
          <p>
            My goal is simple: get your space leased to a creditworthy tenant at market
            rates, as fast as possible.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Commercial property owners with vacant space",
              "Investors who need professional leasing representation",
              "Property management companies seeking leasing support",
              "Landlords with expiring leases who need renewals or replacements",
              "Owners of multi-tenant properties with ongoing turnover",
              "Developers with newly constructed commercial space",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-black font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">The Process</h2>
          <ol className="mt-8 space-y-6">
            {[
              { step: "Property Assessment", desc: "I tour your property, review financials, and assess market positioning." },
              { step: "Pricing Strategy", desc: "Comp analysis to set competitive asking rent and concession packages." },
              { step: "Marketing Launch", desc: "Professional materials, online listings, broker outreach, and sign installation." },
              { step: "Prospect Qualification", desc: "I screen tenants for creditworthiness and business viability." },
              { step: "Negotiation", desc: "LOI drafting, term negotiation, and TI/concession structuring." },
              { step: "Lease Execution", desc: "Attorney coordination through executed lease and tenant onboarding." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-black">{item.step}</p>
                  <p className="mt-1 text-[#666666]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stop Losing Money to Vacancy
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let me put a leasing plan together for your property. Free consultation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Contact Barrett
            </Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Representation</Link>
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
