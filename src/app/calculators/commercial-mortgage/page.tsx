import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";
import MortgageCalculator from "./MortgageCalculator";

/* -------------------------------------------------------------------
 * Commercial Mortgage Calculator Page
 * Monthly payment, total interest, total cost, term comparison.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Mortgage Calculator | Loan Payment Estimator",
  description:
    "Estimate commercial mortgage payments, total interest, and total cost. Compare loan terms side-by-side. Free CRE tool from Barrett Henry, REMAX Commercial. (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/calculators/commercial-mortgage" },
  openGraph: {
    title: "Commercial Mortgage Calculator | Loan Payment Estimator",
    description:
      "Calculate monthly payments, total interest, and compare different commercial loan terms. Free tool for CRE investors.",
    url: "https://hencre.com/calculators/commercial-mortgage",
  },
};

/* -- BreadcrumbList schema -- */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hencre.com/calculators" },
    { "@type": "ListItem", position: 3, name: "Commercial Mortgage Calculator", item: "https://hencre.com/calculators/commercial-mortgage" },
  ],
};

/* -- FAQPage schema -- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a typical commercial mortgage interest rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of mid-2026, commercial mortgage rates typically range from 6% to 9% depending on loan type, property class, borrower creditworthiness, and loan-to-value ratio. SBA 504 loans and agency multifamily loans tend to offer the most competitive rates. Rates change frequently — always verify with a lender before making decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between loan term and amortization period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The loan term is how long you have the loan before it matures (e.g., 10 years). The amortization period is the schedule used to calculate monthly payments (e.g., 25 years). If the term is shorter than the amortization, you will owe a balloon payment at maturity for the remaining balance.",
      },
    },
    {
      "@type": "Question",
      name: "What is a balloon payment in commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A balloon payment is the lump sum owed at the end of a commercial loan term when the loan has not been fully amortized. For example, a 10-year term with 25-year amortization means payments are calculated as if you had 25 years to pay, but the remaining balance comes due at year 10. Most borrowers refinance before the balloon date.",
      },
    },
  ],
};

export default function CommercialMortgagePage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          { label: "Commercial Mortgage Calculator", href: "/calculators/commercial-mortgage" },
        ]}
      />

      {/* Page content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Commercial Mortgage Calculator
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          Commercial financing works differently than residential. Terms are shorter, rates
          are higher, and amortization schedules often create balloon payments that catch
          buyers off guard. This calculator lets you model different loan structures so you
          know exactly what your monthly obligation looks like — and what happens when the
          loan matures. I use these same numbers when helping clients structure purchase offers
          and evaluate investment returns.
        </p>

        {/* Calculator component */}
        <div className="mt-10">
          <MortgageCalculator />
        </div>

        {/* Educational content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">How Do Commercial Mortgages Differ From Residential?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            Unlike a 30-year fixed residential mortgage, most commercial loans have a <strong>5 to 10 year term</strong> with
            a <strong>20 to 25 year amortization</strong>. That means your payments are calculated as if you had 25 years to pay,
            but the remaining balance comes due as a balloon payment at the end of the shorter term. Understanding this
            structure is critical before signing a loan commitment.
          </p>

          <h2 className="mt-10 text-2xl font-bold">What Affects Your Commercial Loan Rate?</h2>
          <ul className="mt-3 space-y-2 text-[#666666] list-disc list-inside">
            <li><strong>Loan-to-value ratio (LTV)</strong> — lower LTV typically means better rates</li>
            <li><strong>Debt service coverage ratio (DSCR)</strong> — lenders want NOI at least 1.25x the debt service</li>
            <li><strong>Property type and class</strong> — Class A office gets different terms than a value-add strip center</li>
            <li><strong>Borrower experience and credit</strong> — seasoned investors with strong financials get preferred terms</li>
            <li><strong>Loan type</strong> — SBA 504, conventional, CMBS, and bridge loans all have different rate structures</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">Why Does the Comparison Table Matter?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            The total cost difference between a 15-year and 30-year amortization can be hundreds of thousands of dollars.
            The comparison table shows you exactly how much you save in interest with a shorter amortization — and how
            much more your monthly payment will be. It is the tradeoff every commercial borrower needs to weigh.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Commercial Mortgage FAQ</h2>
          <dl className="mt-6 space-y-6">
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is a typical commercial mortgage interest rate?</dt>
              <dd className="mt-2 text-[#666666]">
                As of mid-2026, commercial mortgage rates typically range from 6% to 9% depending on loan type,
                property class, borrower creditworthiness, and loan-to-value ratio. SBA 504 loans and agency
                multifamily loans tend to offer the most competitive rates.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is the difference between loan term and amortization period?</dt>
              <dd className="mt-2 text-[#666666]">
                The loan term is how long you have the loan before it matures (e.g., 10 years). The amortization
                period is the schedule used to calculate monthly payments (e.g., 25 years). If the term is shorter
                than the amortization, you will owe a balloon payment at maturity.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is a balloon payment in commercial real estate?</dt>
              <dd className="mt-2 text-[#666666]">
                A balloon payment is the lump sum owed at the end of a commercial loan term when the loan has not
                been fully amortized. Most borrowers refinance before the balloon date to avoid paying the balance in cash.
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
              <Link href="/calculators/office-space" className="text-black font-semibold no-underline hover:underline">
                Office Space Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/calculators/roi" className="text-black font-semibold no-underline hover:underline">
                Commercial Property ROI Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/insights/leasing-vs-buying-commercial" className="text-black font-semibold no-underline hover:underline">
                Leasing vs. Buying Commercial Space &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services/investment-sales" className="text-black font-semibold no-underline hover:underline">
                Investment Sales Services &rarr;
              </Link>
            </li>
          </ul>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let Me Help You Structure the Right Deal
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Financing is one piece of the puzzle. I work with lenders, attorneys, and title
            companies every day to make sure your commercial acquisition closes smoothly.
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
