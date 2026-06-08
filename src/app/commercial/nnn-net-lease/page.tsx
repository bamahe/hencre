import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * NNN / Net Lease — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "NNN Net Lease | REMAX Commercial Florida",
  description:
    "Buy or sell NNN net lease properties in Florida. Triple-net investments with stable, long-term cash flow and corporate-guaranteed tenants. Barrett Henry, REALTOR® at REMAX Collective.",
  openGraph: {
    title: "NNN / Net Lease | REMAX Commercial Florida",
    description: "Triple-net investment properties across Florida. Stable cash flow, minimal landlord responsibility.",
    url: "https://hencre.com/commercial/nnn-net-lease",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Property Types", item: "https://hencre.com/commercial" },
        { "@type": "ListItem", position: 3, name: "NNN / Net Lease", item: "https://hencre.com/commercial/nnn-net-lease" },
      ],
    },
    {
      "@type": "WebPage",
      name: "NNN Net Lease Properties in Florida",
      url: "https://hencre.com/commercial/nnn-net-lease",
    },
  ],
};

export default function NNNNetLeasePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">NNN / Net Lease</li>
        </ol>
      </nav>

      <Hero
        title="NNN / Net Lease"
        subtitle="Triple-net investments with stable, long-term cash flow. Corporate-guaranteed tenants and passive income."
        ctaText="Explore NNN Deals"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Is a NNN Net Lease?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            In a triple-net (NNN) lease, the tenant pays base rent plus all three
            operating expenses: property taxes, building insurance, and common area
            maintenance. The landlord collects rent with minimal management
            responsibility. It is as close to passive income as commercial real estate
            gets.
          </p>
          <p>
            NNN properties are popular among investors, retirees, and 1031 exchange
            buyers who want predictable cash flow without the headaches of active
            property management. The best NNN deals feature investment-grade tenants
            (think national pharmacy chains, quick-service restaurants, dollar stores)
            on long-term leases with built-in rent escalations.
          </p>
          <p>
            REMAX Commercial agents bring specialized NNN expertise and investor relationships to every transaction. Florida is one of the most active NNN markets in the country, driven by
            population growth, strong retail fundamentals, and investor demand. I help
            buyers source quality NNN assets and sellers position properties for
            maximum value.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for NNN Investing</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Tenant Credit", desc: "Investment-grade tenants (S&P rated) offer the lowest risk. Franchisee-operated locations may carry higher cap rates but more credit risk. I help you evaluate the difference." },
              { title: "Lease Term", desc: "Longer remaining lease terms command lower cap rates (higher prices). Properties with 5+ years left on a corporate lease are the most liquid. Short-term leases introduce renewal risk." },
              { title: "Rent Escalations", desc: "Built-in annual increases (flat or CPI-linked) protect against inflation. A 2% annual bump compounds significantly over a 15-year lease. I model total return over your hold period." },
              { title: "Location Quality", desc: "Even with a strong tenant, location matters. A well-located property retains value and re-leases more easily if the tenant departs. I evaluate both the tenant and the real estate." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in NNN Investments?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your investment criteria — cap rate target, budget, tenant
            preference — and I will source matching opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">Contact Barrett</Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">Call (813) 733-7907</a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Industrial &amp; Warehouse</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
          </div>
        </div>
      </section>
    </>
  );
}
