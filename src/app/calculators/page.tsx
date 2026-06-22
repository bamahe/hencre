import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Calculators Hub — index page linking to all CRE calculators.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Real Estate Calculators | Free CRE Tools",
  description:
    "Free commercial real estate calculators — cap rate, commercial mortgage payment, office space estimator, and ROI analysis. Run the numbers before you commit. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/calculators" },
  openGraph: {
    title: "Commercial Real Estate Calculators | Free CRE Tools",
    description:
      "Free CRE calculators for cap rate, mortgage, office space, and ROI. Data-driven decisions start here.",
    url: "https://hencre.com/calculators",
  },
};

/* -- Calculator cards data -- */
const CALCULATORS = [
  {
    title: "Cap Rate Calculator",
    href: "/calculators/cap-rate",
    description:
      "Calculate capitalization rate from NOI and property price — or reverse it to estimate property value from a target cap rate. Essential for evaluating any income-producing commercial property.",
    icon: "%" ,
  },
  {
    title: "Commercial Mortgage Calculator",
    href: "/calculators/commercial-mortgage",
    description:
      "Estimate monthly payments, total interest, and total cost for commercial loans. Compare different term lengths side-by-side to find the best financing structure.",
    icon: "$",
  },
  {
    title: "Office Space Calculator",
    href: "/calculators/office-space",
    description:
      "Estimate how much square footage your business needs based on headcount, workspace style, and amenities. Includes Tampa Bay average lease rate estimates.",
    icon: "ft\u00B2",
  },
  {
    title: "Commercial Property ROI Calculator",
    href: "/calculators/roi",
    description:
      "Analyze cash-on-cash return, cap rate, annual cash flow, and projected 5-year and 10-year total returns on a commercial investment property.",
    icon: "\u2191",
  },
] as const;

/* -- BreadcrumbList schema -- */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hencre.com/calculators" },
  ],
};

export default function CalculatorsPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Breadcrumb navigation */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
        ]}
      />

      {/* Hero / intro */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Free Commercial Real Estate Calculators
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Good deals start with good numbers. These calculators give you quick,
            reliable estimates for the metrics that matter most in commercial real
            estate — cap rate, mortgage payments, space planning, and investment
            returns. Run the numbers, then call me when you are ready to move.
          </p>
        </div>
      </section>

      {/* Calculator cards grid */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {CALCULATORS.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group flex flex-col rounded-lg border border-[#E5E5E5] p-8 no-underline transition-shadow hover:shadow-lg hover:no-underline"
              >
                {/* Icon badge */}
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a] text-lg font-bold text-white">
                  {calc.icon}
                </span>
                <h2 className="text-xl font-bold text-black group-hover:text-black">
                  {calc.title}
                </h2>
                <p className="mt-3 flex-1 text-[#666666]">{calc.description}</p>
                <span className="mt-4 text-sm font-semibold text-black">
                  Open Calculator &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Help Interpreting the Numbers?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Calculators give you a starting point — context is what closes deals.
            Let me walk you through what these numbers mean for your specific situation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              Contact Barrett
            </Link>
            <a
              href="tel:+18137337907"
              className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
            >
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
