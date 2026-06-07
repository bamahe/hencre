import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Dispositions — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Dispositions | REMAX Commercial Florida",
  description:
    "Maximize proceeds when selling commercial real estate in Florida. Barrett Henry provides strategic pricing, targeted marketing, and deal structuring for optimal results.",
  openGraph: {
    title: "Dispositions | REMAX Commercial Florida",
    description:
      "Sell your commercial property for maximum value. Strategic pricing, marketing, and negotiation across Florida.",
    url: "https://hencre.com/services/dispositions",
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
        { "@type": "ListItem", position: 3, name: "Dispositions", item: "https://hencre.com/services/dispositions" },
      ],
    },
    {
      "@type": "Service",
      name: "Dispositions",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Commercial property dispositions — strategic pricing, marketing, buyer qualification, and deal structuring.",
      areaServed: { "@type": "State", name: "Florida" },
    },
  ],
};

export default function DispositionsPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-slate-brand">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">Dispositions</li>
        </ol>
      </nav>

      <Hero
        title="Dispositions"
        subtitle="Maximize proceeds when it is time to exit. Positioning, marketing, and deal structuring for optimal results."
        ctaText="Sell Your Property"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Exit at the Right Time, at the Right Price</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
          <p>
            As a REMAX Commercial broker, Barrett taps the largest real estate referral network on the planet to reach qualified buyers for your asset. Selling a commercial property is not like listing a house. The buyer pool
            is smaller, more sophisticated, and more analytical. You need a broker who
            speaks their language — who can present your property with institutional-
            quality materials, price it based on real income data, and negotiate with
            buyers who know exactly what they are doing.
          </p>
          <p>
            I start with a comprehensive broker opinion of value (BOV) based on
            comparable sales, income analysis, and market trends. From there, I develop
            a pricing strategy designed to generate competitive interest without
            leaving money on the table.
          </p>
          <p>
            My marketing approach is targeted, not generic. I identify the most likely
            buyer profiles for your asset — 1031 exchangers, private equity, local
            operators, or owner-users — and reach them through direct outreach, broker
            networks, and curated marketing campaigns. The goal is competitive tension
            that drives best-and-final offers.
          </p>
          <p>
            Through due diligence, negotiation, and closing, I manage every detail.
            You focus on your next move while I maximize your proceeds on this one.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-slate-brand sm:grid-cols-2">
            {[
              "Property owners ready to sell and harvest gains",
              "Investors rebalancing or exiting a portfolio",
              "Estate trustees managing inherited commercial property",
              "Business owners selling owner-occupied buildings",
              "Partnerships dissolving and distributing assets",
              "Owners facing lease expirations or declining occupancy",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-accent-blue font-bold">&#10003;</span>
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
              { step: "Valuation", desc: "Broker opinion of value based on comps, income, and market conditions." },
              { step: "Pricing Strategy", desc: "Set asking price and deal structure to maximize proceeds and speed." },
              { step: "Marketing", desc: "Professional materials, targeted buyer outreach, and broker network activation." },
              { step: "Buyer Qualification", desc: "Proof of funds, financing pre-approval, and background verification." },
              { step: "Negotiation", desc: "Offer review, counter-offers, and best-and-final structuring." },
              { step: "Due Diligence & Closing", desc: "Manage inspections, title, survey, and coordinate a clean closing." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-navy">{item.step}</p>
                  <p className="mt-1 text-slate-brand">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Considering a Sale?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get a broker opinion of value with no obligation. Know what your property
            is worth before you decide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-remax-red px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-remax-red/90 hover:no-underline">
              Request a BOV
            </Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-navy">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/investment-sales" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
