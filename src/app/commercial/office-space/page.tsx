import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Office Space — property type detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Office Space | REMAX Commercial Real Estate",
  description:
    "Find, lease, or invest in office space across Florida. Class A, B, and C office buildings. Barrett Henry provides tenant rep, landlord leasing, and investment sales.",
  openGraph: {
    title: "Office Space | REMAX Commercial Real Estate",
    description: "Commercial office leasing, sales, and investment across Florida. Class A through C.",
    url: "https://hencre.com/commercial/office-space",
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
        { "@type": "ListItem", position: 3, name: "Office Space", item: "https://hencre.com/commercial/office-space" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Office Space in Florida",
      description: "Commercial office space leasing, sales, and investment across Florida.",
      url: "https://hencre.com/commercial/office-space",
    },
  ],
};

export default function OfficeSpacePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/commercial" className="hover:underline no-underline">Property Types</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Office Space</li>
        </ol>
      </nav>

      <Hero
        title="Office Space"
        subtitle="Class A, B, and C office — from single-tenant buildings to multi-story towers. Leasing, sales, and investment."
        ctaText="Find Office Space"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Florida Office Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s office market continues to evolve as companies relocate from
            high-tax states and remote work reshapes demand patterns. Tampa Bay, in
            particular, has seen strong net absorption in Class A suburban office as
            companies seek modern, amenity-rich workspaces that attract talent.
          </p>
          <p>
            Whether you need a 1,500 SF professional suite or a 50,000 SF corporate
            headquarters, the Florida office market offers options across every price
            point and submarket. REMAX Commercial Real Estate advisors specialize in office properties across every submarket. I help tenants find the right fit, landlords fill
            vacancies, and investors acquire performing office assets.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Considerations for Office Space</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Classification", desc: "Class A offers premium finishes and amenities. Class B is functional and well-maintained. Class C is budget-friendly but may need updates. The right class depends on your business image and budget." },
              { title: "Lease Structure", desc: "Full-service gross, modified gross, or NNN — each shifts expenses differently between tenant and landlord. I help you understand total occupancy cost, not just asking rent." },
              { title: "Location & Access", desc: "Proximity to talent, clients, and transportation matters. Consider highway access, parking ratios, walkability, and proximity to restaurants and amenities." },
              { title: "Build-Out & TI", desc: "Most office spaces require some customization. Negotiate tenant improvement allowances early — they can save tens of thousands over a lease term." },
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
            Looking for Office Space in Florida?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your requirements and I will start the market survey. No cost, no
            obligation.
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
          <h3 className="text-lg font-bold text-black">Explore Other Property Types</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
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
