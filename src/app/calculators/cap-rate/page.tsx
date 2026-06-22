import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";
import CapRateCalculator from "./CapRateCalculator";

/* -------------------------------------------------------------------
 * Cap Rate Calculator Page
 * Forward: NOI + Price → Cap Rate
 * Reverse: NOI + Target Cap Rate → Estimated Value
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Cap Rate Calculator | Free Commercial Real Estate Tool",
  description:
    "Calculate cap rate from NOI and property price, or reverse-engineer property value from a target cap rate. Free CRE tool from Barrett Henry, REMAX Commercial. (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/calculators/cap-rate" },
  openGraph: {
    title: "Cap Rate Calculator | Free CRE Tool",
    description:
      "Calculate capitalization rate or estimate property value from NOI and target cap rate. Free commercial real estate calculator.",
    url: "https://hencre.com/calculators/cap-rate",
  },
};

/* -- BreadcrumbList schema -- */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hencre.com/calculators" },
    { "@type": "ListItem", position: 3, name: "Cap Rate Calculator", item: "https://hencre.com/calculators/cap-rate" },
  ],
};

/* -- FAQPage schema -- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good cap rate for commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 'good' cap rate depends on the property type, location, and risk profile. In Tampa Bay, cap rates typically range from 5% to 8% for stabilized commercial properties. Lower cap rates (4-5%) indicate premium, lower-risk assets, while higher cap rates (8%+) suggest higher yield but potentially more risk.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate cap rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cap rate is calculated by dividing the Net Operating Income (NOI) by the property purchase price, then multiplying by 100 to get a percentage. For example, a property with $100,000 NOI and a $1,500,000 purchase price has a cap rate of 6.67%.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between cap rate and ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cap rate measures the unlevered return based on property price and NOI — it ignores financing. ROI (return on investment) accounts for your actual cash invested, including leverage from a mortgage. A property can have a 6% cap rate but deliver a 12%+ cash-on-cash ROI when financed.",
      },
    },
  ],
};

export default function CapRatePage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          { label: "Cap Rate Calculator", href: "/calculators/cap-rate" },
        ]}
      />

      {/* Page content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Cap Rate Calculator for Commercial Real Estate
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          Cap rate is the single most important number in commercial real estate investing.
          It tells you the expected return on an investment property based on its income —
          no financing, no speculation, just the property&apos;s ability to generate cash flow.
          I use cap rate analysis on every deal I advise on, and now you can run the same
          numbers yourself. Enter the NOI and price below, or flip it around to estimate what
          a property should be worth at your target cap rate.
        </p>

        {/* Calculator component */}
        <div className="mt-10">
          <CapRateCalculator />
        </div>

        {/* Educational content for SEO */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">How Is Cap Rate Calculated?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            The formula is straightforward: <strong>Cap Rate = Net Operating Income (NOI) / Property Price &times; 100</strong>.
            NOI is your gross rental income minus operating expenses (property taxes, insurance, maintenance, management fees) —
            but <em>before</em> debt service. This gives you an apples-to-apples comparison between properties regardless of
            how they are financed.
          </p>

          <h2 className="mt-10 text-2xl font-bold">What Is a Good Cap Rate in Tampa Bay?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            According to recent market data, Tampa Bay commercial cap rates generally fall between <strong>5% and 8%</strong> depending
            on property type and class. NNN retail and Class A office trend lower (5-6%), while value-add multifamily
            and industrial properties can trade at 6.5-8%+. Context matters — a 7-cap in Brandon is a very different
            risk profile than a 7-cap in a rural county. That is where broker expertise comes in.
          </p>

          <h2 className="mt-10 text-2xl font-bold">When Should You Use the Reverse Calculator?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            The reverse cap rate calculator is useful when you know a property&apos;s NOI and want to determine a
            fair purchase price based on your target return. If you require a 7% cap rate on a property generating
            $150,000 in NOI, the reverse calculator tells you the maximum price you should pay is approximately $2,142,857.
            It is a quick sanity check before you write an LOI.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Cap Rate FAQ</h2>
          <dl className="mt-6 space-y-6">
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is a good cap rate for commercial real estate?</dt>
              <dd className="mt-2 text-[#666666]">
                A &quot;good&quot; cap rate depends on the property type, location, and risk profile. In Tampa Bay,
                cap rates typically range from 5% to 8% for stabilized commercial properties. Lower cap rates (4-5%)
                indicate premium, lower-risk assets, while higher cap rates (8%+) suggest higher yield but potentially more risk.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">How do you calculate cap rate?</dt>
              <dd className="mt-2 text-[#666666]">
                Cap rate is calculated by dividing the Net Operating Income (NOI) by the property purchase price,
                then multiplying by 100 to get a percentage. For example, a property with $100,000 NOI and a
                $1,500,000 purchase price has a cap rate of 6.67%.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is the difference between cap rate and ROI?</dt>
              <dd className="mt-2 text-[#666666]">
                Cap rate measures the unlevered return based on property price and NOI — it ignores financing.
                ROI (return on investment) accounts for your actual cash invested, including leverage from a mortgage.
                A property can have a 6% cap rate but deliver a 12%+ cash-on-cash ROI when financed.
              </dd>
            </div>
          </dl>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">More CRE Calculators</h2>
          <ul className="mt-4 space-y-2">
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
              <Link href="/calculators/roi" className="text-black font-semibold no-underline hover:underline">
                Commercial Property ROI Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/insights/what-is-a-cap-rate" className="text-black font-semibold no-underline hover:underline">
                What Is a Cap Rate? (Full Guide) &rarr;
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
            Numbers Only Tell Part of the Story
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Cap rate gets you in the ballpark. Market knowledge, lease analysis, and deal
            structuring get you to the finish line. Let me help you evaluate your next
            commercial investment.
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
