import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Land & Development — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Land & Development | REMAX Commercial® Florida",
  description:
    "Buy or sell commercial land in Florida. Entitled, raw, and development-ready parcels for commercial, industrial, and mixed-use projects. Barrett Henry, REALTOR® at REMAX Collective.",
  openGraph: {
    title: "Land & Development | REMAX Commercial® Florida",
    description: "Commercial and development land across Florida. Entitled, raw, and shovel-ready parcels.",
    url: "https://hencre.com/commercial/land-development",
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
        { "@type": "ListItem", position: 3, name: "Land & Development", item: "https://hencre.com/commercial/land-development" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Land & Development in Florida",
      url: "https://hencre.com/commercial/land-development",
    },
  ],
};

export default function LandDevelopmentPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Land &amp; Development</li>
        </ol>
      </nav>

      <Hero
        title="Land & Development"
        subtitle="Entitled and raw land for commercial, industrial, and mixed-use development. Florida's growth creates opportunity."
        ctaText="Find Land Parcels"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Land Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s sustained population and job growth drive continuous demand
            for new commercial development. Developers, builders, and investors are
            actively acquiring land for retail pads, industrial parks, multifamily
            communities, medical facilities, and mixed-use projects across the state.
          </p>
          <p>
            Land transactions are complex. Zoning, entitlements, environmental
            assessments, utility availability, flood zones, and future land use
            designations all factor into value and feasibility. A broker who
            understands these variables can save you months of wasted time and hundreds
            of thousands in avoidable costs.
          </p>
          <p>
            REMAX Commercial® agents bring development expertise and land brokerage resources to every engagement. I work with buyers to identify sites that match their development vision
            and with sellers to position land for maximum value. Whether you are
            looking for a shovel-ready outparcel or a 50-acre assemblage, I bring the
            local knowledge and network to get the deal done.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Land</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Zoning & Entitlements", desc: "Current zoning determines what you can build today. Entitlement status determines how close you are to breaking ground. I verify zoning and research the entitlement path before you make an offer." },
              { title: "Environmental", desc: "Phase I and Phase II environmental assessments identify contamination risk. Wetlands, flood zones, and protected habitats can limit buildable area. I flag environmental concerns early." },
              { title: "Utilities & Access", desc: "Water, sewer, electric, and road access must be confirmed. Impact fees in Florida can be substantial — I help you estimate total site development costs." },
              { title: "Future Land Use", desc: "The county comprehensive plan dictates long-term land use. I review future land use maps to confirm your intended development is consistent with the plan." },
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
            Have a Development Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me what you are building and where. I will identify available parcels
            and evaluate feasibility.
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
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
          </div>
        </div>
      </section>
    </>
  );
}
