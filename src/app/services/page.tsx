import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Services Index — overview of all 5 CRE service areas.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "REMAX Commercial Services | CRE Leasing, Sales & Valuation in Florida",
  description:
    "Full-service commercial real estate brokerage: tenant representation, landlord leasing, investment sales, dispositions, and CRE valuation. Barrett Henry, REALTOR® serving all 67 Florida counties.",
  openGraph: {
    title: "CRE Services | REMAX Commercial Florida",
    description:
      "Tenant rep, landlord leasing, investment sales, dispositions, and valuation. Full-service CRE across Florida.",
    url: "https://hencre.com/services",
  },
};

const SERVICES = [
  {
    title: "Tenant Representation",
    href: "/services/tenant-representation",
    description:
      "I find the right space and negotiate your lease so you can focus on running your business. Market surveys, site tours, lease analysis, and negotiation — all handled.",
    who: "Business owners, relocating companies, expanding franchises",
  },
  {
    title: "Landlord Leasing",
    href: "/services/landlord-leasing",
    description:
      "Fill vacancies faster with qualified tenants. I position your property competitively, market it to the right audience, and negotiate leases that protect your investment.",
    who: "Property owners, investors, property managers",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description:
      "Whether you are buying your first investment property or adding to a portfolio, I provide data-driven analysis and negotiation to maximize your returns.",
    who: "Investors, family offices, 1031 exchange buyers",
  },
  {
    title: "Dispositions",
    href: "/services/dispositions",
    description:
      "When it is time to sell, I position your property for maximum value. Strategic pricing, targeted marketing, and deal structuring that delivers results.",
    who: "Owners ready to exit, portfolio rebalancers, estate trustees",
  },
  {
    title: "CRE Valuation",
    href: "/services/cre-valuation",
    description:
      "Broker opinion of value, comparable sales analysis, and market positioning. Know exactly what your property is worth before you make a move.",
    who: "Owners, investors, lenders, estate planners",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
      ],
    },
    {
      "@type": "Service",
      provider: { "@id": "https://hencre.com/#agent" },
      name: "Commercial Real Estate Services",
      description: "Full-service CRE brokerage across Florida.",
      areaServed: { "@type": "State", name: "Florida" },
    },
  ],
};

export default function ServicesIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-slate-brand">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">Services</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Real Estate Services"
        subtitle="Full-service CRE brokerage — from first showing to closing table. Here is how I help."
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* ---- Services grid ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {SERVICES.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group rounded-lg border border-gray-200 bg-white p-8 no-underline transition-shadow hover:shadow-lg hover:no-underline"
            >
              <h2 className="text-xl font-bold text-navy group-hover:text-accent-blue">
                {svc.title}
              </h2>
              <p className="mt-3 text-slate-brand">{svc.description}</p>
              <p className="mt-4 text-sm font-semibold text-accent-blue">
                Best for: {svc.who}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me about your situation and I will point you in the right direction.
            No obligation, no pressure.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-remax-red px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-remax-red/90 hover:no-underline"
            >
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
