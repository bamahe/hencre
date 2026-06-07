import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * CRE Valuation — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Valuation | REMAX Commercial Florida",
  description:
    "Know what your commercial property is worth. Barrett Henry provides broker opinions of value, comparable sales analysis, and market positioning for owners, investors, and lenders across Florida.",
  openGraph: {
    title: "CRE Valuation | REMAX Commercial Florida",
    description:
      "Broker opinion of value, comp analysis, and market positioning. Know what your commercial property is worth.",
    url: "https://hencre.com/services/cre-valuation",
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
        { "@type": "ListItem", position: 3, name: "CRE Valuation", item: "https://hencre.com/services/cre-valuation" },
      ],
    },
    {
      "@type": "Service",
      name: "CRE Valuation",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Broker opinion of value, comparable sales analysis, and commercial property valuation.",
      areaServed: { "@type": "State", name: "Florida" },
    },
  ],
};

export default function CREValuationPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-slate-brand">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">CRE Valuation</li>
        </ol>
      </nav>

      <Hero
        title="CRE Valuation"
        subtitle="Know what your property is worth before you act. Broker opinion of value, comp analysis, and market positioning."
        ctaText="Request a Valuation"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Accurate Valuation Drives Better Decisions</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
          <p>
            As a REMAX Commercial broker, Barrett delivers valuations backed by market data and institutional-level analysis. Before you sell, refinance, negotiate a lease renewal, or restructure a
            partnership, you need to know what your commercial property is actually
            worth. Not what you hope it is worth. Not what Zestimate says. What a
            sophisticated buyer or lender would pay based on income, comps, and market
            conditions.
          </p>
          <p>
            I provide broker opinions of value (BOVs) that give you a defensible
            market value range. My analysis considers three approaches: comparable
            sales, income capitalization, and replacement cost. I weight each approach
            based on what matters most for your specific property type and situation.
          </p>
          <p>
            A BOV is not a formal appraisal — it is a broker-level assessment based
            on real market data and professional judgment. It is faster, more
            affordable, and often more practically useful than a full appraisal. Banks,
            attorneys, and estate planners regularly request BOVs for decision-making.
          </p>
          <p>
            Whether you own a single retail pad or a multi-property portfolio, I
            deliver clear, well-supported valuations that help you make confident
            decisions.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-slate-brand sm:grid-cols-2">
            {[
              "Property owners considering a sale or refinance",
              "Investors evaluating acquisition targets",
              "Lenders needing third-party value confirmation",
              "Estate planners and trustees managing commercial assets",
              "Partners in ownership disputes needing fair market value",
              "Business owners assessing real property holdings",
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
          <h2 className="text-2xl font-bold sm:text-3xl">What a BOV Includes</h2>
          <ul className="mt-6 space-y-3 text-lg text-slate-brand">
            {[
              "Property description, photos, and site analysis",
              "Comparable sales analysis with adjustments",
              "Income approach using actual or market rents and cap rates",
              "Market conditions summary and trend analysis",
              "Estimated value range with supporting rationale",
              "Executive summary suitable for lenders and attorneys",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-accent-blue font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need to Know Your Property&apos;s Value?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Request a broker opinion of value. I will assess your property and deliver
            a clear, well-supported valuation.
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
            <Link href="/services/dispositions" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/investment-sales" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
