import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Tampa Bay CRE Debt Maturity Wall 2026 | HenCRE",
  description:
    "Nearly $875 billion in commercial mortgages mature nationally in 2026. Tampa Bay property owners facing loan maturities need to know their options before the clock runs out.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-cre-debt-maturity-wall-2026" },
  openGraph: {
    title: "The CRE Debt Maturity Wall: What Tampa Bay Property Owners Must Know in 2026",
    description:
      "Loans originated at 3–4% in 2019–2021 are now maturing into a 6–7% rate environment. Here is what Tampa Bay owners and investors need to understand.",
    url: "https://hencre.com/blog/tampa-bay-cre-debt-maturity-wall-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Commercial real estate loan documents representing CRE debt maturity wall 2026 Tampa Bay",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the CRE debt maturity wall and why does 2026 matter?",
    answer:
      "The CRE debt maturity wall refers to the wave of commercial mortgage loans — originated in 2019, 2020, and 2021 at historically low interest rates — that are now coming due for repayment or refinancing in 2026 and 2027. The Mortgage Bankers Association estimates that roughly $875 billion in commercial and multifamily mortgage debt matures in 2026 alone. The problem is structural: those loans were underwritten at 3% to 4% interest rates, and refinancing them today means accepting rates in the 5.75% to 7% range depending on property type and loan-to-value. For properties that have not grown NOI significantly since 2021, the higher debt service can create negative cash flow or fail lender debt service coverage ratio tests.",
  },
  {
    question: "Which types of Tampa Bay commercial properties are most at risk?",
    answer:
      "Office properties carry the most concentrated risk, particularly suburban office buildings where occupancy has not recovered to pre-2020 levels. A Tampa Bay office building that was 90% occupied in 2019, financed at 4%, and is now 75% occupied faces a double squeeze: lower NOI and dramatically higher refinancing costs. Retail properties in secondary corridors with anchor tenant attrition face similar challenges. By contrast, well-located industrial, NNN retail with strong tenants, and multifamily in high-demand submarkets are generally refinancing without distress — their NOI has grown enough to support higher debt service costs.",
  },
  {
    question: "What options does a Tampa Bay property owner have when their commercial loan matures?",
    answer:
      "There are four primary paths: (1) Refinance conventionally — if the property's current NOI supports a DSCR of 1.20x or better at today's rates, this is straightforward; gather financials 90 days before maturity. (2) Negotiate a loan modification or extension — many lenders prefer to extend a performing loan at a slightly higher rate rather than take back a property through foreclosure; 'extend and pretend' was common in 2024 and 2025, and lenders are still extending selectively in 2026. (3) Recapitalize with equity — bring in a partner or inject new capital to pay down the loan balance to a level where refinancing works; this dilutes ownership but preserves the asset. (4) Sell — if refinancing is not viable and recapitalization is not an option, a controlled sale typically produces a better outcome than a lender-forced sale or foreclosure.",
  },
  {
    question: "Can a Tampa Bay commercial property owner still get an SBA loan to refinance?",
    answer:
      "Yes, under certain conditions. SBA 504 loans are specifically designed for owner-occupied commercial real estate and can be used to refinance existing debt if the property is owner-occupied, the business is eligible under SBA size standards, and refinancing will result in a 10% or greater reduction in debt payments. The 504 loan structure provides long-term fixed-rate financing (typically 10 or 25 years) at below-market rates, which can be highly advantageous for owner-users facing conventional loan maturity. USDA Business & Industry loans offer similar alternatives for properties in rural or semi-rural areas of the Tampa Bay region. Barrett works with clients across all financing structures and can connect you with SBA lenders.",
  },
  {
    question: "Are there buying opportunities created by the maturity wall in Tampa Bay?",
    answer:
      "Yes — the maturity wall is creating a class of motivated sellers who are not distressed in the traditional sense but are facing a financing math problem with no clean solution. These owners may be willing to negotiate on price to achieve a clean exit rather than fight a difficult refinancing or recapitalization. The best opportunities are in the office sector, where pricing has already softened materially, and in secondary-corridor retail. For buyers with capital and patience, Tampa Bay office assets priced at replacement cost or below — and industrial conversions in particular — represent opportunities that were not available during the 2019–2022 run-up. Contact Barrett to discuss off-market opportunities created by current market conditions.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tampa Bay CRE Debt Maturity Wall 2026",
          item: "https://hencre.com/blog/tampa-bay-cre-debt-maturity-wall-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "The CRE Debt Maturity Wall: What Tampa Bay Property Owners Must Know in 2026",
      description:
        "Nearly $875 billion in commercial mortgages mature nationally in 2026. Tampa Bay property owners facing loan maturities need to understand their options before time runs out.",
      datePublished: "2026-08-27",
      dateModified: "2026-08-30",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: {
        "@type": "Organization",
        name: "HenCRE",
        url: "https://hencre.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://hencre.com/blog/tampa-bay-cre-debt-maturity-wall-2026",
      },
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

const relatedLinks = [
  {
    title: "Tampa Bay Office Market Q2 2026",
    href: "/blog/tampa-bay-office-market-q2-2026",
    description: "Current occupancy trends, rent benchmarks, and submarket conditions.",
  },
  {
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "How cap rate expansion is reshaping the refinancing and acquisition math.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Net lease valuations and where distressed NNN assets are trading.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate in Tampa Bay",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "Owner-occupied refinancing options using SBA 504 program.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to reposition capital out of a troubled asset without a tax hit.",
  },
  {
    title: "Selling a Tenant-Occupied Investment Property in Florida",
    href: "/blog/selling-tenant-occupied-investment-property-florida",
    description: "What to know when selling a cash-flowing property mid-lease.",
  },
  {
    title: "Sale-Leaseback in Tampa Bay Commercial Real Estate",
    href: "/blog/sale-leaseback-commercial-real-estate-tampa-bay",
    description: "How owner-operators unlock equity while retaining occupancy.",
  },
  {
    title: "Florida Insurance Crisis and Investment Properties",
    href: "/blog/florida-insurance-crisis-investment-properties",
    description: "Insurance cost escalation and its effect on NOI and refinancing viability.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "The Tampa submarket with the highest concentration of maturing office debt.",
  },
  {
    title: "Commercial Real Estate Investment Services",
    href: "/services/investment-sales",
    description: "Barrett Henry helps Tampa Bay investors buy, sell, and reposition commercial assets.",
  },
];

export default function TampaBayCREDebtMaturityWall2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay CRE Debt Maturity Wall 2026", href: "/blog/tampa-bay-cre-debt-maturity-wall-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop"
        title="The CRE Debt Maturity Wall: What Tampa Bay Property Owners Must Know in 2026"
        subtitle="Nearly $875 billion in commercial mortgages mature nationally in 2026. If your loan is among them, your options — and your window to act — are more limited than most owners realize."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Between 2019 and 2021, commercial real estate was financed at interest rates the industry had never seen. Five-year loans closed at 3.25%. Ten-year fixed-rate deals were done in the low 4s. Bridge loans that would have priced at 6% a decade earlier cleared at 4.5%. Lenders competed aggressively, underwriting standards relaxed, and enormous amounts of capital poured into commercial real estate at valuations that assumed those rates — or something close to them — would persist.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          They did not. And now those loans are coming due.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Mortgage Bankers Association estimates that roughly $875 billion in commercial and multifamily mortgage debt matures in 2026, with another $652 billion following in 2027. For Tampa Bay commercial property owners whose loans fall in this wave, the math is stark: a loan originated at 3.5% is now refinancing into an environment where rates for commercial real estate run 5.75% to 7% or higher, depending on property type, occupancy, and loan-to-value. For many owners — especially in the{" "}
          <Link href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">office sector</Link>{" "}
          and secondary retail — NOI has not grown enough to absorb that payment shock. The result is a maturity wall: a structural collision between legacy loan terms and today&apos;s capital markets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is not a theoretical risk for Tampa Bay. It is a present condition shaping deal flow, pricing, and lender behavior across the market right now.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Did This Problem Accumulate in Commercial Real Estate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Commercial real estate loans are not typically structured like 30-year residential mortgages. Most are written on five- or ten-year terms with a balloon payment at maturity — the borrower pays interest (and sometimes some principal) for the loan term, then must either sell the property or refinance the remaining balance when the term ends. During the zero-rate era of 2019–2021, that structure created no obvious problem: even if a borrower needed to refinance, money was cheap and readily available.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Federal Reserve&apos;s aggressive rate-hiking cycle that began in 2022 changed that assumption entirely. Five-year loans originated in 2019 and 2020 began maturing in 2024 and 2025, arriving at renewal just as rates peaked. Many lenders chose to grant short extensions — six months, twelve months — rather than force borrowers to refinance at the worst possible moment, hoping rates would fall. That relief was partial. Rates did come down from their 2023 peaks, but not to the levels borrowers needed to make the math work cleanly. A meaningful portion of those extended loans are now hitting their hard deadlines in 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Property Types Are Under the Most Pressure?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The maturity wall affects different property types very differently, depending on how NOI has evolved since the loan was originated:
        </p>

        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-3">
          <li>
            <strong>Office — highest distress concentration.</strong> Tampa Bay office occupancy in many submarkets remains below 2019 levels, particularly in suburban corridors. A{" "}
            <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore office building</Link>{" "}
            financed at 4% in 2020 with 88% occupancy may be running at 72% today. The NOI decline, combined with the rate increase, can make conventional refinancing mathematically impossible without a loan paydown. Office delinquency rates on matured, unresolved loans are running above 80% nationally. Tampa Bay is not immune.
          </li>
          <li>
            <strong>Secondary retail — selective pressure.</strong> Strip centers and neighborhood retail with strong, credit-tenanted anchor leases are refinancing without significant difficulty — their rent rolls have grown and demand for that product type is high. The problem is concentrated in older properties with vacancy, anchor attrition, or below-market leases that cannot support higher debt service. Several Hillsborough and Pinellas retail owners are facing exactly this scenario.
          </li>
          <li>
            <strong>Multifamily — mixed picture.</strong> Apartments in high-demand Tampa Bay submarkets have seen enough rent growth to offset much of the rate increase, and lenders have been more willing to work with multifamily borrowers because the underlying asset quality remains strong. Newer deliveries in oversupplied corridors — particularly eastern Hillsborough and parts of Pasco — face more competition and slower lease-up, which can complicate refinancing if occupancy is below lender thresholds. The broader picture for{" "}
            <Link href="/blog/tampa-bay-multifamily-cap-rates-2026" className="text-accent underline">Tampa Bay multifamily</Link>{" "}
            is more constructive than office or secondary retail.
          </li>
          <li>
            <strong>Industrial and NNN retail — least affected.</strong> Tampa Bay industrial rents have risen significantly since 2020, and{" "}
            <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">NNN properties</Link>{" "}
            with long-term leases to creditworthy tenants have seen enough NOI growth to absorb higher debt service. Most owners in these categories are refinancing successfully, though at higher rates than they had hoped.
          </li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
            alt="Tampa Bay commercial office building representing CRE debt maturity refinancing pressure"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">
            Tampa Bay office properties originated in the 2019–2021 zero-rate window face the steepest refinancing math — lower occupancy plus dramatically higher rates.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Real Numbers Behind the Refinancing Gap?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A concrete example illustrates why the maturity wall is a genuine problem rather than an abstract concern:
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Scenario: Tampa Bay suburban office building, 2020 loan</strong>
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>Original loan balance (2020): $4,000,000 at 4.0%, 25-year amortization</li>
          <li>Annual debt service: approximately $253,000</li>
          <li>NOI at origination (88% occupied): $340,000</li>
          <li>Original DSCR: 1.34x — well within lender requirements</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Fast forward to 2026 maturity:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>Remaining loan balance: approximately $3,650,000</li>
          <li>Current NOI (72% occupied, higher insurance): $265,000</li>
          <li>Refinance rate available: 6.5%</li>
          <li>New annual debt service on $3,650,000 at 6.5%: approximately $294,000</li>
          <li>New DSCR: 0.90x — well below the 1.20x minimum most lenders require</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          To make the refinancing work, the borrower would need to pay down the loan balance to approximately $2,890,000 — a cash injection of roughly $760,000 — or accept that conventional refinancing is not available and evaluate alternative paths. This scenario is playing out across hundreds of Tampa Bay commercial properties right now.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Note that{" "}
          <Link href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">Florida insurance cost escalation</Link>{" "}
          is a significant hidden factor in these calculations — many owners who modeled NOI in 2020 are running $15,000 to $40,000 higher annual insurance premiums per property today, which directly reduces the NOI available to service debt.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Options for Tampa Bay Owners Facing Loan Maturity?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          There is no universally correct answer — the right path depends on the property&apos;s specific cash flow, the lender relationship, the owner&apos;s balance sheet, and their long-term goals. The four primary options:
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">1. Conventional Refinancing</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          If the property&apos;s current NOI supports a DSCR of 1.20x or better at today&apos;s prevailing rate — typically 5.75% to 6.5% for well-occupied commercial properties in Tampa Bay — conventional refinancing is still the cleanest path. The key is starting the process early: gather rent rolls, trailing-12 financials, and rent comps at least 90 to 120 days before maturity. Lenders are processing applications more slowly in the current environment, and waiting until 60 days out creates risk of a technical default.
        </p>
        <p className="mt-2 text-[#666666] leading-relaxed">
          For owner-occupied commercial real estate, an{" "}
          <Link href="/blog/sba-504-loan-commercial-real-estate-tampa-bay" className="text-accent underline">SBA 504 loan</Link>{" "}
          offers a long-term fixed-rate refinancing option that can substantially reduce debt service compared to conventional commercial loans. Eligibility requires the borrower&apos;s business to occupy at least 51% of the building, but for qualifying owner-users, the SBA 504 is one of the most powerful tools available to navigate the maturity wall.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">2. Loan Modification or Extension</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Lenders — particularly community banks and regional lenders common in the Tampa Bay market — generally prefer to modify or extend a performing loan rather than initiate foreclosure proceedings. Foreclosure is expensive, slow under Florida law, and results in the lender owning a property it does not want to manage. If the borrower has been current on payments, has a track record with the lender, and can present a credible plan to stabilize the property or bring in additional equity, a 12- to 24-month extension is a realistic outcome.
        </p>
        <p className="mt-2 text-[#666666] leading-relaxed">
          This is not indefinite relief — lenders are increasingly reluctant to grant third or fourth extensions without meaningful evidence of a path to repayment. But for owners who need time to execute a lease-up, complete a sale, or secure a permanent financing commitment, a negotiated extension buys the runway.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">3. Equity Recapitalization</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          If the refinancing gap is the problem — the loan balance is too high relative to current NOI — injecting equity to pay down the loan to a refinanceable level is a viable solution for owners who believe strongly in the long-term value of the asset. This can take the form of personal capital, a joint venture partner who contributes cash in exchange for an equity stake, or preferred equity from a private lender.
        </p>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Recapitalization dilutes ownership but preserves the asset. For owners whose basis is well below current market value — and who may owe significant capital gains taxes on a sale — it can make more economic sense to bring in a partner and retain a smaller ownership stake than to sell, trigger the gain, and redeploy into a different asset at current prices. A{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link>{" "}
          is worth considering if a sale is ultimately the outcome.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">4. Controlled Sale</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          For owners who cannot refinance conventionally, cannot inject equity, and are not receiving lender flexibility, a controlled sale — selling the property on the open market before the lender forces a resolution — almost always produces a better outcome than waiting. A proactive sale lets the owner control timing, marketing, and price discovery. A lender-driven sale (foreclosure, deed in lieu, note sale) happens on the lender&apos;s terms and timeline, typically at a steep discount.
        </p>
        <p className="mt-2 text-[#666666] leading-relaxed">
          The Tampa Bay market has a population of buyers who specifically seek commercial assets being sold due to financing pressure -- they know the seller has motivation and they compete for that deal flow. Pricing a property correctly and marketing it to that buyer population is a different process than a traditional listing, and it moves faster. Barrett has helped owners navigate exactly this situation and can coordinate a fast, confidential process when needed. For owners who need to move quickly, his{" "}
          <Link href="/services/dispositions" className="text-accent underline">disposition services</Link>{" "}
          provide the structure to execute a fast, confidential commercial sale.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Opportunities Is the Maturity Wall Creating for Tampa Bay Buyers?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Every distressed seller is a potential opportunity for a well-capitalized buyer. The maturity wall is creating a category of motivated sellers who are not financially ruined — they have been competent operators who simply face a financing structure problem with no clean solution at current rates. Those sellers are frequently willing to negotiate price, terms, or seller financing in ways that would not have been available in the 2019–2022 environment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most compelling opportunities in Tampa Bay&apos;s 2026 maturity wall environment:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Office assets at replacement cost or below.</strong> Some Tampa Bay suburban office buildings are trading at prices that make the conversion math interesting — or simply represent good value for buyers who believe in the office thesis long-term. Buyers with cash or conservative leverage can acquire properties at yields that simply were not available four years ago.</li>
          <li><strong>Off-market retail properties.</strong> Motivated retail owners who want to avoid a public listing are increasingly approaching brokers directly for quiet processes. This is where relationships matter — Barrett is actively receiving inquiries from owners in this situation.</li>
          <li><strong>Note purchases.</strong> Sophisticated investors are acquiring distressed commercial real estate loans directly from lenders at discounts to face value, then either negotiating a discounted payoff with the borrower or foreclosing to take title. This strategy requires legal and financial sophistication but offers the ability to acquire assets at below-market basis.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett evaluates{" "}
          <Link href="/services/investment-sales" className="text-accent underline">Tampa Bay commercial acquisitions</Link>{" "}
          on behalf of buyers actively seeking maturity-driven deal flow. If you are looking for properties where seller motivation is genuine and price reflects current market conditions rather than 2021 peak assumptions, this is the environment to be looking.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tampa Bay Property Owners Do Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The single most important action is to know your maturity date and start working backward from it — today, not six months from now. The owners who are navigating the maturity wall successfully are the ones who started the process early enough to have real options. The ones who are struggling are typically those who waited for conditions to improve, extended once or twice, and are now facing hard deadlines with narrowing choices.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>Pull your loan documents and confirm the exact maturity date and any extension options remaining.</li>
          <li>Run a current-rate DSCR test on your property&apos;s trailing-12 NOI — if it does not clear 1.20x at a 6.25% rate, you have a gap to close.</li>
          <li>Contact your current lender now, even if maturity is 12 months out, to understand their appetite for modification or extension.</li>
          <li>Get current broker opinion of value on the asset so you understand what a controlled sale would yield relative to your loan balance and basis.</li>
          <li>Talk to an SBA lender if you occupy the property — the 504 program is underutilized by qualifying owners who could substantially reduce their financing costs.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of commercial real estate experience across multiple market cycles. He works with Tampa Bay property owners facing loan maturity to evaluate options, model outcomes, and execute the appropriate strategy — whether that is a conventional refinancing, a quiet sale to a motivated buyer, or a recapitalization that lets the owner retain the asset. Call Barrett at <a href="tel:+18138801220" className="text-accent underline">(813) 880-1220</a> to discuss your specific situation.
        </p>

        <p className="mt-8 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <Image
            src="/images/barrett-henry-headshot.jpg"
            alt="Barrett Henry, Broker Associate at REMAX Collective"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett has 23+ years of real estate experience serving commercial investors and property owners across Tampa Bay. He helps clients navigate refinancing decisions, debt restructuring, and disposition opportunities throughout all 67 Florida counties.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <FAQAccordion items={faqItems} />
      </section>

      <CTASection
        heading="Facing a Commercial Loan Maturity in Tampa Bay?"
        body="Barrett Henry works with property owners navigating the 2026 refinancing wall — evaluating options, modeling outcomes, and executing the right strategy for your situation."
        buttonText="Talk to Barrett"
        buttonHref="/contact"
      />

      <RelatedLinks links={relatedLinks} />
    </>
  );
}
