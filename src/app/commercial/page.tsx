import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Commercial Index — overview of all 6 property types.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "REMAX Commercial Real Estate | Property Types — Office, Retail, Industrial & More",
  description:
    "Explore commercial property types in Florida: office, retail, industrial/warehouse, multifamily, NNN net lease, and land/development. Barrett Henry, Commercial Real Estate Advisor at REMAX Collective.",
  openGraph: {
    title: "Property Types | REMAX Commercial Real Estate",
    description:
      "Office, retail, industrial, multifamily, NNN, and land — every CRE asset class across Florida.",
    url: "https://hencre.com/commercial",
  },
};

const PROPERTY_TYPES = [
  {
    title: "Office Space",
    href: "/commercial/office-space",
    description:
      "Class A, B, and C office — from single-tenant buildings to multi-story towers. Leasing, sales, and investment opportunities.",
  },
  {
    title: "Retail Space",
    href: "/commercial/retail-space",
    description:
      "Strip centers, standalone pads, outparcels, and mixed-use retail. High-traffic locations across Florida markets.",
  },
  {
    title: "Industrial & Warehouse",
    href: "/commercial/industrial-warehouse",
    description:
      "Distribution centers, flex space, manufacturing facilities, and cold storage. Florida's logistics corridor is booming.",
  },
  {
    title: "Multifamily",
    href: "/commercial/multifamily",
    description:
      "Apartment complexes and multi-unit residential investments. Strong fundamentals driven by Florida's population growth.",
  },
  {
    title: "NNN / Net Lease",
    href: "/commercial/nnn-net-lease",
    description:
      "Triple-net investments with stable, long-term cash flow. Corporate-guaranteed tenants and passive income.",
  },
  {
    title: "Land & Development",
    href: "/commercial/land-development",
    description:
      "Entitled and raw land for commercial, industrial, and mixed-use development. Florida's growth creates opportunity.",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Property Types", item: "https://hencre.com/commercial" },
      ],
    },
    {
      "@type": "WebPage",
      name: "Commercial Property Types",
      description: "Overview of commercial real estate property types served by REMAX Commercial Real Estate across Florida.",
      url: "https://hencre.com/commercial",
    },
  ],
};

export default function CommercialIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Property Types</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Property Types"
        subtitle="Every asset class. One broker who knows them all. Explore the property types I work with across Florida."
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((pt) => (
            <Link
              key={pt.href}
              href={pt.href}
              className="group rounded-lg border border-[#E5E5E5] bg-white p-8 no-underline transition-shadow hover:shadow-lg hover:no-underline"
            >
              <h2 className="text-xl font-bold text-black group-hover:text-black">
                {pt.title}
              </h2>
              <p className="mt-3 text-[#666666]">{pt.description}</p>
              <p className="mt-4 text-sm font-semibold text-black">
                Learn more &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me what you are looking for and I will guide you to the right property
            type and market. No obligation.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
