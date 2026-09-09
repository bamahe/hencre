import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay Pharmacy & Drug Store NNN Investment 2026
 * Walgreens went private in 2025 — how that reshapes pharmacy NNN for
 * Tampa Bay investors evaluating CVS, Walgreens, and alternatives.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Pharmacy & Drug Store NNN Investment 2026 | HenCRE",
  description:
    "Walgreens went private in August 2025 and CVS is now the only investment-grade pharmacy NNN option. Here is what Tampa Bay investors holding or buying pharmacy net lease properties need to know in 2026.",
  alternates: {
    canonical:
      "https://hencre.com/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
  },
  openGraph: {
    title: "Tampa Bay Pharmacy & Drug Store NNN Investment 2026",
    description:
      "Walgreens went private, CVS is closing underperformers, and pharmacy NNN cap rates are resetting. Here is what Tampa Bay investors need to know about drug store net lease in 2026.",
    url: "https://hencre.com/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pharmacy storefront with large parking lot — net lease drug store investment",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Is Walgreens still a good NNN investment after going private in 2025?",
    answer:
      "Walgreens closing is no longer investment grade after Sycamore Partners took the company private in August 2025 and ratings agencies withdrew their ratings (which sat at sub-investment-grade BB-/Ba3 before withdrawal). That means Walgreens properties no longer qualify for institutional NNN portfolios that require investment-grade credit, reducing the buyer pool and compressing values. Cap rates on Walgreens net lease assets traded in the 7.5% to 9.5% range in early 2026, hundreds of basis points wider than comparable CVS assets. Walgreens may still pencil for private investors seeking yield, but the credit risk profile has changed materially and exit liquidity is lower than it was before 2025.",
  },
  {
    question: "What cap rates are pharmacy NNN properties trading at in Tampa Bay in 2026?",
    answer:
      "CVS properties — the only investment-grade pharmacy NNN option in 2026 — traded at approximately 6.0% to 6.9% cap rates across Florida in early-to-mid 2026, with an average near 6.44%. Well-located Tampa Bay CVS stores with long primary term remaining command the lower end of that range. Walgreens assets that trade at all are moving at 7.5% to 9.5% cap rates, with a median near 8.0%, reflecting the credit risk premium buyers demand after the privatization. Rite Aid, which has been through restructuring, trades at 9% to 11%+ depending on location quality and lease term remaining.",
  },
  {
    question: "What should I look for when evaluating a pharmacy NNN property in Tampa Bay?",
    answer:
      "The most important factors are: (1) Tenant credit — CVS (BBB/Baa3, investment grade) is the preferred tenant; Walgreens (now private, sub-investment-grade) requires a higher yield premium to justify the risk. (2) Primary lease term remaining — the closer to zero, the larger the re-leasing or dark-building risk if the pharmacy closes. Target 10-plus years of primary term for a core hold. (3) Store-level sales performance — pharmacies that fill high prescription volumes and have pharmacy-anchored foot traffic are dramatically stickier tenants than retail-heavy stores facing online competition. Ask for store-level prescription data where available. (4) Location and trade area — a CVS or Walgreens on a hard-corner in a dense suburban Tampa Bay trade area with no direct pharmacy competitor within two miles is far more defensible than a weaker-corner location with Publix, Winn-Dixie, or a competing pharmacy nearby. (5) Lease structure — true absolute NNN or landlord-responsible roof and structure matters for total return calculation.",
  },
  {
    question: "What happens if my Walgreens or CVS closes and goes dark?",
    answer:
      "A dark pharmacy building — one where the tenant still pays rent but has vacated — is a landlord's near-term best case in a closure scenario. The real risk is non-renewal at lease expiration, which leaves the owner with a large-format standalone building (typically 10,000 to 14,000 square feet on a 1- to 2-acre outparcel) that is difficult to re-tenant as-is. Redevelopment or subdivision is often the path to value recovery: the hard-corner outparcel location that made it a good pharmacy site makes it attractive for urgent care, dental, QSR drive-thru, bank, or medical-adjacent tenants. Tampa Bay's strong healthcare and service retail demand means dark pharmacy outparcels can redevelop successfully, but it takes time and capital. Before acquiring any pharmacy NNN, understand the building's re-leasing optionality if the brand closes the store.",
  },
  {
    question: "Are there pharmacy NNN alternatives worth considering in Tampa Bay?",
    answer:
      "Yes. As traditional drug store chains restructure, several alternative pharmacy-adjacent asset types are worth evaluating: (1) Urgent care NNN — major chains like CareNow, MD Now, and AdventHealth GoHealth are expanding across Tampa Bay on long NNN leases, offering investment-grade or near-investment-grade credit in a high-demand healthcare service. (2) Medical office — outpatient medical buildings are one of the strongest-performing asset classes in Tampa Bay, driven by the region's aging population and healthcare system expansion. (3) Grocery-anchored retail — Publix, Winn-Dixie, and Aldi-anchored centers give investors pharmacy-adjacent foot traffic and grocery tenants that have proved far more e-commerce resistant than drug stores. (4) QSR and drive-thru NNN — nationally branded quick-service restaurants on absolute NNN leases offer investment-grade credit and growing drive-thru demand, with cap rates and lease terms comparable to pharmacy product.",
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
          name: "Tampa Bay Pharmacy & Drug Store NNN Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Pharmacy & Drug Store NNN Investment 2026",
      description:
        "Walgreens went private in August 2025 and CVS is now the only investment-grade pharmacy NNN option. What Tampa Bay investors holding or buying drug store net lease properties need to know in 2026.",
      datePublished: "2026-09-08",
      dateModified: "2026-09-08",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
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
    title: "What Is a Triple-Net (NNN) Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "The full primer on NNN lease structures, why investors love them, and what to watch out for.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Cap rate benchmarks across NNN property types in Tampa Bay — from QSR to big-box retail.",
  },
  {
    title: "Tampa Bay QSR & Drive-Thru NNN Investment 2026",
    href: "/blog/tampa-bay-qsr-drive-thru-nnn-investment-2026",
    description: "How drive-thru quick-service restaurants compare to pharmacy NNN as an investment alternative.",
  },
  {
    title: "Tampa Bay Grocery-Anchored Retail Investment 2026",
    href: "/blog/tampa-bay-grocery-anchored-retail-investment-2026",
    description: "Why Publix and Winn-Dixie anchored centers remain among the most sought-after retail investments in Florida.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description: "How outpatient medical and urgent care NNN compares to traditional pharmacy investment.",
  },
  {
    title: "Florida 1031 Exchange — What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to use a 1031 exchange to trade out of a pharmacy asset and into a better-credit NNN investment.",
  },
  {
    title: "Tampa Bay Retail Market Q2 2026",
    href: "/blog/tampa-bay-retail-market-q2-2026",
    description: "Broader retail market context for pharmacy and outparcel investments across Tampa Bay.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Framework for underwriting pharmacy NNN acquisitions including vacancy risk and dark-building scenarios.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step due diligence checklist for NNN and net lease acquisitions.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors buy and sell NNN and net lease properties across Tampa Bay.",
  },
];

export default function TampaBayPharmacyNNNPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Tampa Bay Pharmacy & Drug Store NNN Investment 2026",
            href: "/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&h=900&fit=crop"
        title="Tampa Bay Pharmacy & Drug Store NNN Investment 2026"
        subtitle="Walgreens went private. CVS is closing underperformers. Cap rates are resetting. Here is what Tampa Bay investors need to know about drug store net lease in 2026 before buying or selling."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          For decades, pharmacy net lease properties — CVS, Walgreens, and Rite Aid buildings on long NNN leases — were
          considered some of the safest investments in commercial real estate. Long primary terms, absolute NNN structures,
          investment-grade tenants, hard-corner real estate. That narrative has gotten significantly more complicated.
          Walgreens closed its run as a public company in August 2025 when Sycamore Partners took it private at
          sub-investment-grade credit ratings. Rite Aid is restructuring. CVS is closing weaker stores while expanding its
          healthcare footprint. For Tampa Bay investors holding or evaluating pharmacy NNN assets, 2026 requires a much more
          nuanced read than the asset class demanded a decade ago.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Does Walgreens Going Private Mean for Tampa Bay NNN Investors?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          When Sycamore Partners completed the take-private of Walgreens Boots Alliance in August 2025, it created an
          immediate and lasting problem for the commercial real estate market: Walgreens lost its investment-grade credit
          rating. Before the privatization, Walgreens ratings had already slipped to BB-/Ba3 — sub-investment-grade — and
          once the company went private, ratings agencies withdrew their ratings entirely, leaving no public credit metric
          to anchor underwriting.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The practical consequences for investors who own Tampa Bay Walgreens properties are significant. Institutional
          buyers — REITs, pension funds, and life insurance companies — that require investment-grade tenant credit in their
          NNN portfolios effectively left the Walgreens buyer pool. That reduction in demand pushed cap rates into the 7.5%
          to 9.5% range for Walgreens assets by early 2026, with the median near 8.0%. Properties with shorter remaining
          lease terms or weaker locations trade at the top of that range or simply do not trade at all.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For Tampa Bay investors who own a Walgreens property, the question is whether to hold, refinance, or sell. Holding
          works if the store is performing, the lease is long, and you do not need the capital. Selling now captures a buyer
          pool that, while smaller than it was in 2022, is still active among private investors seeking the yield premium.
          Waiting five years to sell into a shorter-term Walgreens lease is a worse outcome. If you are considering
          repositioning out of a Walgreens asset, a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">
            1031 exchange into a higher-credit NNN property
          </Link>{" "}
          is often the most tax-efficient path. You can also explore a cash sale and reinvestment option through{" "}
          <a
            href="https://fastselleasysale.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            Fast Sell Easy Sale
          </a>{" "}
          if speed of execution matters more than maximizing net proceeds.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Is CVS Still a Reliable NNN Investment in Tampa Bay in 2026?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CVS Health is the last investment-grade pharmacy chain standing in the U.S. NNN market as of 2026. Rated BBB/Baa3
          by the major agencies, CVS qualifies for institutional NNN portfolios that require investment-grade credit — a
          fact that has kept demand for CVS-leased properties strong even as Walgreens exited the investment-grade universe.
          Cap rates for CVS stores in Florida traded in the 6.0% to 6.9% range in mid-2026, with an average near 6.44% —
          meaningfully tighter than Walgreens assets and consistent with how the market is pricing the credit differential.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          That said, CVS is not without risk. The company has been closing underperforming retail-heavy stores as it pivots
          its footprint toward HealthHUB locations with expanded clinical services, MinuteClinics, and pharmacy-focused
          operations. Stores in weaker trade areas — low prescription volumes, heavy front-end retail exposure, competing
          pharmacies nearby — are candidates for closure or non-renewal. Before acquiring a CVS-leased property in Tampa Bay,
          investors should assess store-level health indicators as thoroughly as the lease structure itself.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The best CVS NNN investments in Tampa Bay share several characteristics: hard-corner locations on high-traffic
          arterials, dense residential trade areas with 20,000 or more people within one mile, primary lease terms of ten or
          more years remaining, and no competing pharmacy within one to two miles. In the Tampa Bay market, locations along
          Dale Mabry Highway, US-19, State Road 60, and the major suburban arterials in Hillsborough, Pinellas, and Pasco
          Counties tend to check these boxes. To understand how{" "}
          <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">
            pharmacy cap rates compare to other NNN asset types
          </Link>{" "}
          across Tampa Bay, our broader NNN cap rate guide benchmarks the full range of net lease product.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Do You Properly Underwrite a Tampa Bay Pharmacy NNN Acquisition?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Pharmacy NNN underwriting requires more scrutiny than a standard single-tenant fast food or auto parts NNN because
          the risk of dark-building or non-renewal is meaningfully higher in the current environment. A thorough underwrite
          starts with the{" "}
          <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">
            lease structure itself
          </Link>{" "}
          — is this a true absolute NNN, or does the landlord carry roof, structure, or other significant expenses? Pharmacy
          chains have historically leased on terms that appear NNN but require landlord maintenance of the building shell,
          which can be a significant liability on a 14,000-square-foot stand-alone building.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Beyond the lease, here is the framework for underwriting Tampa Bay pharmacy NNN properties:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Tenant credit.</strong> As of 2026, CVS (BBB/Baa3) is the only investment-grade pharmacy tenant.
            Walgreens (private, former BB-) and Rite Aid (restructuring) require a materially higher yield premium to
            compensate for credit risk. Know exactly what you are buying.
          </li>
          <li>
            <strong>Primary term remaining.</strong> A pharmacy NNN with five years of primary term and no renewal options
            exercised is a near-term vacancy risk. Target a minimum of ten years of primary term for a core hold, or price
            the re-leasing risk into a short-term acquisition at a significantly higher cap rate.
          </li>
          <li>
            <strong>Renewal options and rent bumps.</strong> Most pharmacy leases have ten-plus years of renewal options
            in five-year increments, often at flat rent or with modest 5% to 10% bumps per option period. Unlike QSR or
            auto-parts leases that sometimes carry annual 1.5% to 2% rent bumps, pharmacy leases have historically been
            flat — which means inflation erodes the real return over time unless bumps are negotiated into the structure.
          </li>
          <li>
            <strong>Store-level prescription volume.</strong> A pharmacy that fills 2,000-plus prescriptions per week is
            far more likely to renew than one filling 800. While this data is not always disclosed, it can often be
            inferred from traffic counts, proximity to hospitals and physician offices, and age demographics of the
            surrounding trade area.
          </li>
          <li>
            <strong>Dark-building re-leasing optionality.</strong> Ask yourself: if this pharmacy goes dark tomorrow, what
            is the best alternative use for the building and site? A hard-corner outparcel with drive-through capability in
            a dense Tampa Bay suburb has strong re-leasing options — urgent care, dental, QSR, bank, medical retail. A
            weaker suburban strip-adjacent location has far fewer. This analysis belongs in every underwrite.
          </li>
          <li>
            <strong>Cap rate vs. going-in yield.</strong> The cap rate at acquisition is only part of the return picture.
            Model the full hold — including potential rent flat-lining through renewal options, re-leasing costs if the
            pharmacy vacates, and exit cap rate assumptions at the end of your hold period. Our guide to{" "}
            <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">
              calculating commercial property ROI
            </Link>{" "}
            walks through this framework in detail.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Pharmacy NNN Alternatives Are Performing Well in Tampa Bay?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The challenges facing traditional drug store chains have pushed many Tampa Bay NNN investors toward alternative
          pharmacy-adjacent asset types that offer similar lease structures with stronger credit profiles or more defensible
          demand drivers.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Urgent care and outpatient medical NNN</strong> is the most direct pharmacy NNN alternative. Tampa Bay has
          seen aggressive expansion from urgent care chains including CareNow, MD Now, and AdventHealth GoHealth, many of
          which are taking long NNN leases on stand-alone or pad-site buildings in the same high-traffic suburban locations
          where pharmacies operate. Credit quality ranges from institutional health system-backed (very strong) to private
          franchise operators (higher risk), so tenant analysis matters. Our post on{" "}
          <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">
            Tampa Bay medical office real estate
          </Link>{" "}
          covers the broader outpatient medical investment opportunity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Grocery-anchored retail</strong> gives investors pharmacy-adjacent foot traffic with a far more defensible
          anchor tenant. Publix — the dominant grocery operator in Florida — has never closed a store in its history, makes
          its pharmacy an integral part of store operations, and consistently commands the tightest cap rates among
          grocery-anchored retail. Our analysis of{" "}
          <Link href="/blog/tampa-bay-grocery-anchored-retail-investment-2026" className="text-accent underline">
            grocery-anchored retail investment in Tampa Bay
          </Link>{" "}
          explains why Publix and Winn-Dixie centers remain among the most sought-after NNN assets in Florida.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>QSR and drive-thru NNN</strong> trades at comparable cap rates to pharmacy product in Tampa Bay, often
          with stronger rent growth (annual bumps of 1.5% to 2% versus pharmacy flat-rent structures) and investment-grade
          or near-investment-grade tenant credit from the major fast food franchisors. Our post on{" "}
          <Link href="/blog/tampa-bay-qsr-drive-thru-nnn-investment-2026" className="text-accent underline">
            Tampa Bay QSR and drive-thru NNN investment
          </Link>{" "}
          covers this asset type in depth.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Should Tampa Bay Pharmacy Property Owners Do Right Now?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you own a Walgreens, CVS, or Rite Aid NNN property in Tampa Bay, the strategic decision depends on how much
          primary lease term remains and how well the specific location performs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Long-term CVS properties (ten-plus years of primary term)</strong> in well-located Tampa Bay trade areas
          are performing assets. CVS&apos;s investment-grade credit, combined with Florida&apos;s demographic growth and
          aging population driving prescription demand, supports holding these assets for income while monitoring store-level
          health indicators. Refinancing is feasible, though lenders will underwrite conservatively on any pharmacy NNN
          given the sector-level risk narrative.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Short-term Walgreens properties (fewer than seven years of primary term)</strong> are candidates for sale
          now while a buyer pool still exists and the store is occupied and paying rent. Waiting for the lease to shorten
          further concentrates risk and reduces value. A{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">
            1031 exchange
          </Link>{" "}
          allows the proceeds to move into a higher-credit NNN property — QSR, medical, or grocery-anchored — without
          triggering a capital gains tax event. Our{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">
            due diligence checklist
          </Link>{" "}
          covers what buyers will scrutinize on any pharmacy acquisition.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Dark or about-to-go-dark pharmacy buildings</strong> require a redevelopment analysis. In most Tampa Bay
          suburban markets, the underlying land and hard-corner location retain significant value. Repositioning for urgent
          care, dental, or QSR use — or land banking for ground lease to a credit tenant — can recover substantial value
          from what appears to be a distressed situation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          The Tampa Bay Advantage for Pharmacy NNN Investors
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Despite the sector-level headwinds from chain restructuring, Tampa Bay remains one of the strongest markets in the
          country for pharmacy-backed and healthcare-adjacent NNN investment. The region&apos;s population has grown past
          3.2 million people, with one of the fastest-aging demographics in Florida — a state that already skews older than
          the national average. An aging, growing population drives prescription volume, primary care visits, and demand for
          all forms of outpatient healthcare services.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Well-located pharmacy properties in Tampa Bay — the kind that anchor busy suburban retail nodes in Hillsborough,
          Pinellas, Pasco, and Manatee Counties — serve real community prescription demand that does not disappear because a
          national chain restructures. The tenant may change; the underlying demand for pharmaceutical services and
          healthcare access at that location will not.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of experience in Tampa Bay commercial real estate, I have worked with investors across every cycle
          of the NNN market — when pharmacy product was considered risk-free and when, as now, sector credit has become a
          primary underwriting question. The right answer for your pharmacy NNN holding depends entirely on the specific
          asset, its location, and your investment objectives.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Pharmacy NNN Investment 2026 — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
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
            <p className="text-sm text-[#666666]">
              Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay.
              He helps NNN investors evaluate acquisitions, identify 1031 exchange options, and navigate the repositioning of
              challenged single-tenant assets. Learn more about{" "}
              <Link href="/about" className="text-accent underline">
                Barrett&apos;s background
              </Link>{" "}
              or explore{" "}
              <Link href="/services" className="text-accent underline">
                his services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating a Pharmacy NNN Property in Tampa Bay?"
        body="Whether you are buying, selling, or repositioning a drug store NNN asset, I help investors navigate the credit risk, cap rate, and redevelopment questions that define pharmacy net lease in 2026. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
