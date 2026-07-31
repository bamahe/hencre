import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";

/* -------------------------------------------------------------------
 * Commercial Index — overview of all 6 property types.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Property Types | Office, Retail, Industrial FL",
  description:
    "Explore commercial property types in Florida: office, retail, industrial, multifamily, NNN net lease, and land. Barrett Henry, Broker Associate at REMAX Collective. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/commercial" },
  openGraph: {
    title: "Property Types | REMAX Commercial Real Estate",
    description:
      "Office, retail, industrial, multifamily, NNN, and land: every CRE asset class across Florida.",
    url: "https://hencre.com/commercial",
  },
};

const PROPERTY_TYPES = [
  {
    title: "Office Space",
    href: "/commercial/office-space",
    description:
      "Class A, B, and C office, from single-tenant buildings to multi-story towers. Leasing, sales, and investment opportunities across Tampa Bay and Florida.",
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

const faqItems = [
  {
    question: "What are the main types of commercial real estate in Florida?",
    answer:
      "The six major commercial property types in Florida are: office space (Class A, B, C buildings), retail space (strip centers, pad sites, regional malls), industrial and warehouse (distribution, flex, manufacturing), multifamily (5+ unit apartment complexes), NNN net lease (single-tenant triple-net investments), and land and development sites. Each type has different valuation methods, lease structures, tenant profiles, and investment characteristics. Barrett Henry handles all six property types across Florida through the REMAX Commercial network.",
  },
  {
    question: "What commercial property type has the strongest demand in Tampa Bay right now?",
    answer:
      "Industrial and warehouse space has posted the strongest fundamentals across Tampa Bay in recent years, driven by e-commerce logistics, population growth, and limited new supply relative to demand. Retail has also tightened considerably, with availability rates well below historical averages in quality corridors. Office is more bifurcated: Class A buildings in amenity-rich locations like Midtown Tampa are fully leased, while older Class B and C suburban product faces elevated vacancy. Multifamily fundamentals remain solid, particularly in high-growth suburban corridors like Wesley Chapel, Riverview, and Lakewood Ranch.",
  },
  {
    question: "How do I decide which commercial property type to invest in?",
    answer:
      "The right property type depends on your investment horizon, risk tolerance, capital position, and management bandwidth. NNN net lease properties offer minimal landlord responsibilities and predictable cash flow but typically carry compressed cap rates. Industrial properties offer stronger rent growth potential in Florida's logistics-driven market. Multifamily provides inflation protection through annual lease renewals. Use our cap rate calculator and ROI calculator to model returns across property types before committing to one category. Barrett Henry provides custom investment analysis for clients evaluating specific acquisitions.",
  },
  {
    question: "What is the difference between NNN and gross lease commercial property?",
    answer:
      "In a NNN (triple-net) lease, the tenant pays base rent plus property taxes, insurance, and common area maintenance, shifting operating expenses from the landlord to the tenant. In a gross lease, the landlord pays most operating expenses and the tenant pays a single all-inclusive rent. Modified gross leases split expenses in various ways between landlord and tenant. Most investment-grade retail and industrial properties in Florida use NNN or modified gross structures. Office buildings often use full-service gross leases in competitive submarkets.",
  },
  {
    question: "Does Barrett Henry handle commercial real estate outside Tampa Bay?",
    answer:
      "Yes. While Barrett&apos;s core market is Tampa Bay with direct coverage of Hillsborough, Pinellas, Pasco, Polk, Manatee, Sarasota, Hernando, and Citrus counties, he coordinates commercial transactions across all 67 Florida counties through the REMAX Commercial referral network. For markets like Broward, Collier, Brevard, Alachua, and beyond, Barrett connects clients with the right local REMAX Commercial specialist, providing clients with statewide access while maintaining a single point of contact.",
  },
  {
    question: "What resources does Barrett provide for commercial property investors?",
    answer:
      "Barrett Henry provides broker opinions of value, comparable sales analysis, investment pro formas, and market positioning reports for clients evaluating commercial acquisitions. The HenCRE website also offers free tools: a cap rate calculator, commercial ROI calculator, commercial mortgage calculator, and office space planning calculator. The CRE insights hub covers valuation methods, lease structures, due diligence checklists, and 1031 exchange strategy. Contact Barrett directly for custom analysis on a specific property or market.",
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
      name: "Commercial Property Types, Florida",
      description:
        "Overview of commercial real estate property types served by Barrett Henry, Broker Associate at REMAX Collective, across Florida.",
      url: "https://hencre.com/commercial",
      dateModified: "2026-07-31",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function CommercialIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Property Types", href: "/commercial" }]} />

      <Hero
        title="Commercial Property Types"
        subtitle="Every asset class. One broker who knows them all. Explore the property types I work with across Florida."
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* ---- Intro ---- */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-4 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate
          experience across all major commercial property types. Whether you are evaluating
          an{" "}
          <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">
            industrial warehouse acquisition
          </Link>{" "}
          in{" "}
          <Link href="/markets/polk" className="font-semibold text-black underline">
            Polk County
          </Link>
          , looking to lease{" "}
          <Link href="/commercial/retail-space" className="font-semibold text-black underline">
            retail space
          </Link>{" "}
          in{" "}
          <Link href="/markets/hillsborough" className="font-semibold text-black underline">
            Hillsborough County
          </Link>
          , or researching{" "}
          <Link href="/commercial/nnn-net-lease" className="font-semibold text-black underline">
            NNN net lease investments
          </Link>{" "}
          across Florida, I provide the analysis and market access to get the deal done.
          Also useful:{" "}
          <Link href="/calculators" className="font-semibold text-black underline">
            CRE calculators
          </Link>
          ,{" "}
          <Link href="/insights" className="font-semibold text-black underline">
            investment guides
          </Link>
          , and{" "}
          <Link href="/services" className="font-semibold text-black underline">
            full brokerage services
          </Link>.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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

      {/* ---- FAQ section ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Commercial Property Types: FAQ
        </h2>
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me what you are looking for and I will guide you to the right property
            type and market. Call{" "}
            <a href="tel:+18137337907" className="underline text-white">(813) 733-7907</a>{" "}
            or use the form.
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
