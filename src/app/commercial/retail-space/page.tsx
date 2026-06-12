import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Retail Space — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Retail Space | REMAX Commercial Real Estate",
  description:
    "Find, lease, or invest in retail space across Florida. Strip centers, standalone pads, outparcels, and mixed-use. Barrett Henry, REALTOR® at REMAX Collective.",
  openGraph: {
    title: "Retail Space | REMAX Commercial Real Estate",
    description: "Commercial retail leasing, sales, and investment across Florida.",
    url: "https://hencre.com/commercial/retail-space",
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
        { "@type": "ListItem", position: 3, name: "Retail Space", item: "https://hencre.com/commercial/retail-space" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Retail Space in Florida",
      url: "https://hencre.com/commercial/retail-space",
    },
  ],
};

export default function RetailSpacePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Retail Space</li>
        </ol>
      </nav>

      <Hero
        title="Retail Space"
        subtitle="Strip centers, standalone pads, outparcels, and mixed-use retail. High-traffic locations across Florida."
        ctaText="Find Retail Space"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Retail Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s retail market benefits from strong population growth,
            year-round tourism, and no state income tax. Retail vacancy rates in major
            metros remain tight, and tenant demand continues to outpace new
            construction in high-traffic corridors.
          </p>
          <p>
            From neighborhood strip centers to regional power centers, the retail
            landscape offers diverse opportunities for tenants, landlords, and
            investors. REMAX Commercial Real Estate advisors bring deep retail expertise to every deal. I work with restaurant operators, medical practices, service
            businesses, and national brands to secure high-visibility locations with
            strong traffic counts and favorable lease terms.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Retail</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Traffic Counts", desc: "Daily vehicle and pedestrian traffic directly impacts revenue. I provide traffic data and demographic analysis for every location." },
              { title: "Co-Tenancy", desc: "Who are the neighboring tenants? A strong anchor tenant drives foot traffic. I evaluate co-tenancy clauses and tenant mix." },
              { title: "Lease Structure", desc: "NNN is standard for retail, but percentage rent, CAM caps, and exclusivity clauses are all negotiable. I protect your interests on every point." },
              { title: "Visibility & Signage", desc: "Frontage, pylon signs, and monument signs impact your brand exposure. Zoning and landlord approval for signage should be confirmed early." },
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
            Need Retail Space in Florida?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your concept, size requirements, and target market. I will find the
            right location.
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
            <Link href="/commercial/industrial-warehouse" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Industrial &amp; Warehouse</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/land-development" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Land &amp; Development</Link>
          </div>
        </div>
      </section>
    </>
  );
}
