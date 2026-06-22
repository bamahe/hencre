import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";
import ROICalculator from "./ROICalculator";

/* -------------------------------------------------------------------
 * Commercial Property ROI Calculator Page
 * Cap rate, cash-on-cash, annual cash flow, 5yr & 10yr projections.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Property ROI Calculator | Investment Return Analysis",
  description:
    "Analyze commercial real estate ROI — cash-on-cash return, cap rate, annual cash flow, and 5-year and 10-year total return projections. Free tool from Barrett Henry, REMAX Commercial. (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/calculators/roi" },
  openGraph: {
    title: "Commercial Property ROI Calculator | Investment Returns",
    description:
      "Calculate cash-on-cash return, cap rate, cash flow, and multi-year projections for commercial real estate investments.",
    url: "https://hencre.com/calculators/roi",
  },
};

/* -- BreadcrumbList schema -- */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hencre.com/calculators" },
    { "@type": "ListItem", position: 3, name: "ROI Calculator", item: "https://hencre.com/calculators/roi" },
  ],
};

/* -- FAQPage schema -- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cash-on-cash return in commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cash-on-cash return measures the annual pre-tax cash flow relative to the total cash you invested (down payment plus closing costs). If you put $375,000 down and the property generates $30,000 in annual cash flow after debt service, your cash-on-cash return is 8%. It is the most practical measure of how hard your actual dollars are working.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good ROI for commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most CRE investors target a cash-on-cash return of 8% to 12% for stabilized properties. Value-add deals may show lower initial returns but aim for 15%+ after improvements. The 'right' ROI depends on your risk tolerance, market conditions, and investment timeline. Always compare CRE returns against alternative investments on a risk-adjusted basis.",
      },
    },
    {
      "@type": "Question",
      name: "How does appreciation affect commercial property ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Appreciation increases your total return by building equity beyond the cash flow the property generates. Commercial property values are driven primarily by NOI growth (raising rents, reducing expenses) rather than comparable sales like residential. A 3% annual appreciation on a $1.5M property adds $45,000 in equity the first year alone.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between cap rate and cash-on-cash return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cap rate is an unlevered metric — it divides NOI by the full property price regardless of how you finance it. Cash-on-cash return is a levered metric — it divides your actual cash flow (after debt service) by your actual cash invested. Leverage amplifies returns: a 7% cap rate property can deliver a 10%+ cash-on-cash return with the right financing.",
      },
    },
  ],
};

export default function ROIPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          { label: "ROI Calculator", href: "/calculators/roi" },
        ]}
      />

      {/* Page content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Commercial Property ROI Calculator
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          Every commercial investment decision comes down to one question: what is my return?
          This calculator goes beyond simple cap rate to give you the full picture — cash-on-cash
          return, annual cash flow after debt service, and projected total returns over 5 and 10
          years including appreciation. These are the same metrics I analyze with my clients
          before writing an offer on any income-producing property.
        </p>

        {/* Calculator component */}
        <div className="mt-10">
          <ROICalculator />
        </div>

        {/* Educational content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">What Metrics Matter Most for CRE Investments?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            Commercial real estate investors should evaluate deals using multiple metrics, not just one:
          </p>
          <ul className="mt-3 space-y-2 text-[#666666] list-disc list-inside">
            <li><strong>Cap Rate</strong> — unlevered return; compares properties regardless of financing</li>
            <li><strong>Cash-on-Cash Return</strong> — actual return on your cash invested; accounts for leverage</li>
            <li><strong>Net Operating Income (NOI)</strong> — the property&apos;s income after expenses but before debt service</li>
            <li><strong>Debt Service Coverage Ratio (DSCR)</strong> — NOI divided by annual debt service; lenders require 1.20-1.30x minimum</li>
            <li><strong>Internal Rate of Return (IRR)</strong> — time-weighted return that accounts for the timing of all cash flows</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">How Does Leverage Amplify Returns?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            The difference between cap rate and cash-on-cash return is <strong>leverage</strong>. When you finance 75%
            of a purchase and the property&apos;s cap rate exceeds your mortgage rate, you earn a spread on borrowed
            money. That is why a 7% cap rate deal with 75% LTV financing at 6.5% can deliver a 10%+ cash-on-cash return.
            The reverse is also true — if your mortgage rate exceeds the cap rate, leverage works against you.
            This calculator shows you both sides so you can evaluate the deal with eyes open.
          </p>

          <h2 className="mt-10 text-2xl font-bold">Why Do 5-Year and 10-Year Projections Matter?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            Year-one returns only tell part of the story. Appreciation, rent escalations, and
            mortgage paydown all compound over time. A property that looks modest in year one
            can deliver exceptional total returns by year ten. The multi-year projections in this
            calculator help you evaluate the full investment arc — which is exactly how institutional
            investors and seasoned operators think about deals.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Commercial ROI FAQ</h2>
          <dl className="mt-6 space-y-6">
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is cash-on-cash return in commercial real estate?</dt>
              <dd className="mt-2 text-[#666666]">
                Cash-on-cash return measures the annual pre-tax cash flow relative to the total cash you invested.
                If you put $375,000 down and the property generates $30,000 in annual cash flow after debt service,
                your cash-on-cash return is 8%. It is the most practical measure of how hard your dollars are working.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is a good ROI for commercial real estate?</dt>
              <dd className="mt-2 text-[#666666]">
                Most CRE investors target a cash-on-cash return of 8% to 12% for stabilized properties. Value-add
                deals may show lower initial returns but aim for 15%+ after improvements. The right ROI depends
                on risk tolerance, market conditions, and timeline.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">How does appreciation affect commercial property ROI?</dt>
              <dd className="mt-2 text-[#666666]">
                Appreciation builds equity beyond cash flow. Commercial property values are driven primarily by NOI
                growth — raising rents, reducing expenses — rather than comparable sales. A 3% annual appreciation
                on a $1.5M property adds $45,000 in equity the first year alone.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is the difference between cap rate and cash-on-cash return?</dt>
              <dd className="mt-2 text-[#666666]">
                Cap rate divides NOI by the full property price — ignoring financing. Cash-on-cash divides actual
                cash flow (after debt service) by actual cash invested. Leverage amplifies returns: a 7% cap rate
                property can deliver 10%+ cash-on-cash with the right financing.
              </dd>
            </div>
          </dl>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">More CRE Calculators</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/calculators/cap-rate" className="text-black font-semibold no-underline hover:underline">
                Cap Rate Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/calculators/commercial-mortgage" className="text-black font-semibold no-underline hover:underline">
                Commercial Mortgage Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/calculators/office-space" className="text-black font-semibold no-underline hover:underline">
                Office Space Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/insights/how-to-value-commercial-property" className="text-black font-semibold no-underline hover:underline">
                How to Value Commercial Property &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services/cre-valuation" className="text-black font-semibold no-underline hover:underline">
                CRE Valuation Services &rarr;
              </Link>
            </li>
          </ul>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Evaluating a Commercial Investment?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            A calculator gives you the math. I give you the market context — tenant quality,
            lease rollover risk, submarket trends, and deal structure. Let me help you underwrite
            your next acquisition.
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
