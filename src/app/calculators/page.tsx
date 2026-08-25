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

/* -- Combined @graph schema -- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hencre.com/calculators" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Commercial Real Estate Calculators",
      description: "Free CRE calculators for cap rate, mortgage, office space, and ROI analysis.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Cap Rate Calculator", url: "https://hencre.com/calculators/cap-rate" },
        { "@type": "ListItem", position: 2, name: "Commercial Mortgage Calculator", url: "https://hencre.com/calculators/commercial-mortgage" },
        { "@type": "ListItem", position: 3, name: "Office Space Calculator", url: "https://hencre.com/calculators/office-space" },
        { "@type": "ListItem", position: 4, name: "Commercial Property ROI Calculator", url: "https://hencre.com/calculators/roi" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a cap rate in commercial real estate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cap rate (capitalization rate) is the ratio of a property's net operating income to its purchase price. It measures the unlevered yield — what you would earn if you paid all cash. A higher cap rate indicates a higher yield but typically more risk. Cap rates in Tampa Bay typically range from 5% to 8% depending on property type and location.",
          },
        },
        {
          "@type": "Question",
          name: "How do you calculate commercial real estate ROI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Commercial real estate ROI is most commonly measured as cash-on-cash return: annual cash flow after debt service divided by total cash invested (down payment plus closing costs). A property with $30,000 in annual cash flow on a $375,000 cash investment yields an 8% cash-on-cash return. Multi-year ROI adds appreciation and principal paydown to the calculation.",
          },
        },
        {
          "@type": "Question",
          name: "How much office space does my business need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As a general rule, plan for 100-150 square feet per person for open-plan offices, 150-200 square feet for hybrid layouts, and 200-300 square feet for private office environments. Add 20-30% for shared amenities such as conference rooms, break rooms, and reception areas. Growth plans over the lease term (typically 3-7 years) are equally important to factor in.",
          },
        },
      ],
    },
  ],
};

export default function CalculatorsPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

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

      {/* Educational content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Why CRE Math Matters Before You Commit</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Commercial real estate decisions involve larger sums, longer timelines, and more complex financing than residential. A miscalculation on cap rate or debt service can mean the difference between a profitable investment and a cash-flow problem. These calculators give you institutional-grade analysis in seconds — the same metrics Barrett Henry uses when advising clients on acquisition decisions across Florida.
        </p>

        <h2 className="mt-10 text-2xl font-bold">How These Tools Work Together</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Start with the <Link href="/calculators/cap-rate" className="text-black font-semibold underline">cap rate calculator</Link> to evaluate whether a property is priced fairly relative to its income. Then use the <Link href="/calculators/commercial-mortgage" className="text-black font-semibold underline">commercial mortgage calculator</Link> to model your debt service under different terms. Feed those numbers into the <Link href="/calculators/roi" className="text-black font-semibold underline">ROI calculator</Link> to see your cash-on-cash return and 5- and 10-year projections. If you are evaluating office space for your business, the <Link href="/calculators/office-space" className="text-black font-semibold underline">office space calculator</Link> helps you right-size before you ever tour a building.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Commercial Real Estate FAQ</h2>
        <dl className="mt-6 space-y-6">
          <div className="border-b border-[#E5E5E5] pb-6">
            <dt className="text-lg font-semibold text-black">What is a cap rate in commercial real estate?</dt>
            <dd className="mt-2 text-[#666666]">
              Cap rate is the ratio of a property&apos;s net operating income to its purchase price. It measures the unlevered yield — what you would earn if you paid all cash. Tampa Bay cap rates typically range from 5% to 8% depending on property type and location.
            </dd>
          </div>
          <div className="border-b border-[#E5E5E5] pb-6">
            <dt className="text-lg font-semibold text-black">How do you calculate commercial real estate ROI?</dt>
            <dd className="mt-2 text-[#666666]">
              Cash-on-cash return is the most practical ROI metric: annual cash flow after debt service divided by total cash invested (down payment plus closing costs). Multi-year ROI adds appreciation and principal paydown to the calculation.
            </dd>
          </div>
          <div className="border-b border-[#E5E5E5] pb-6">
            <dt className="text-lg font-semibold text-black">How much office space does my business need?</dt>
            <dd className="mt-2 text-[#666666]">
              Plan for 100-150 square feet per person for open-plan offices, 150-200 for hybrid, and 200-300 for private office environments. Add 20-30% for shared amenities, and factor in where your headcount will be at the end of your lease term.
            </dd>
          </div>
        </dl>

        {/* Internal links */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">Related Guides and Resources</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/insights/what-is-a-cap-rate" className="text-black font-semibold no-underline hover:underline">
                What Is a Cap Rate? (Full Guide) &rarr;
              </Link>
            </li>
            <li>
              <Link href="/insights/how-to-value-commercial-property" className="text-black font-semibold no-underline hover:underline">
                How to Value Commercial Property &rarr;
              </Link>
            </li>
            <li>
              <Link href="/insights/leasing-vs-buying-commercial" className="text-black font-semibold no-underline hover:underline">
                Leasing vs. Buying Commercial Space &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-black font-semibold no-underline hover:underline">
                How to Calculate Commercial Property ROI &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/what-makes-a-good-commercial-investment" className="text-black font-semibold no-underline hover:underline">
                What Makes a Good Commercial Investment &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-black font-semibold no-underline hover:underline">
                Understanding CAM Charges: Tenant&apos;s Guide &rarr;
              </Link>
            </li>
            <li>
              <Link href="/blog/commercial-property-due-diligence-timeline" className="text-black font-semibold no-underline hover:underline">
                Commercial Due Diligence Timeline &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services/investment-sales" className="text-black font-semibold no-underline hover:underline">
                Investment Sales Services &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services/tenant-representation" className="text-black font-semibold no-underline hover:underline">
                Tenant Representation Services &rarr;
              </Link>
            </li>
            <li>
              <Link href="/markets/hillsborough" className="text-black font-semibold no-underline hover:underline">
                Hillsborough County CRE Market &rarr;
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-8 text-xs text-[#666666]">Last updated: August 2026</p>
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
