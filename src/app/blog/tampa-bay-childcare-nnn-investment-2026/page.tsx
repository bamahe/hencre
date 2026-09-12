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
 * Blog: Tampa Bay Childcare Center NNN Investment 2026
 * Growing sector, recession-resistant demand, national operators.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Childcare Center NNN Investment 2026 | HenCRE",
  description:
    "Childcare centers are one of the fastest-growing NNN investment categories in Tampa Bay. With KinderCare public, Bright Horizons expanding, and Tampa Bay adding 270,000 residents in five years, here is what investors need to know.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-childcare-nnn-investment-2026" },
  openGraph: {
    title: "Tampa Bay Childcare Center NNN Investment 2026",
    description:
      "Childcare centers are recession-resistant, net-leased, and in short supply across Tampa Bay's fast-growing suburbs. Here is what NNN investors need to know about this emerging asset class.",
    url: "https://hencre.com/blog/tampa-bay-childcare-nnn-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Childcare center exterior in a suburban Tampa Bay neighborhood",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Are childcare centers a good NNN investment in Tampa Bay?",
    answer:
      "Yes, for investors who understand the asset class. Childcare centers leased to national or regional operators on long-term NNN leases offer predictable passive income, recession-resistant demand, and low management burden. Tampa Bay's ongoing population growth — the metro added more than 270,000 residents over the past five years — continues to generate new household formation and childcare demand in suburban markets like Wesley Chapel, Riverview, Brandon, and Parrish. The key underwriting variable is tenant quality: a KinderCare or Bright Horizons lease with corporate guarantee trades at a meaningfully tighter cap rate than a small regional operator with limited financial backing.",
  },
  {
    question: "What cap rates are childcare NNN properties trading at in 2026?",
    answer:
      "In 2026, childcare NNN properties leased to national investment-grade tenants such as KinderCare Learning Companies (NYSE: KLC) and Bright Horizons are trading in the 5.5% to 6.5% cap rate range in Florida markets. Regional operators with strong financials trade in the 6.5% to 7.5% range. Smaller independent operators typically require cap rates of 7.5% or higher to compensate for the elevated tenant risk. Tampa Bay primary-market locations command cap rates 50 to 100 basis points tighter than tertiary Florida submarkets. These rates have compressed since KinderCare's 2024 IPO raised institutional awareness of the sector.",
  },
  {
    question: "What makes childcare centers recession resistant?",
    answer:
      "Childcare was designated an essential service during the COVID-19 pandemic, and that designation reflected economic reality: dual-income households cannot easily reduce childcare spending without one parent leaving the workforce entirely. Unlike discretionary retail categories, licensed childcare enrollment is driven by necessity — work schedules, not consumer confidence. National operators like KinderCare and Bright Horizons maintained near-full occupancy through the 2008 recession and the COVID-19 disruptions. Enrollment is sticky: families that select a center rarely switch unless they move, and moving a child is itself a cost that reinforces tenant retention.",
  },
  {
    question: "What lease terms are typical for childcare NNN properties?",
    answer:
      "Primary lease terms for national childcare operators typically run 15 to 20 years, with multiple five-year renewal options. NNN structures shift property taxes, insurance, and most maintenance to the tenant. Rental escalations are typically 1.5% to 2.0% annually or at fixed 10% bumps every five years. Corporate guarantees from the parent company — as opposed to single-entity guarantees — are the standard for KinderCare and Bright Horizons and represent a key distinction from franchisee-operated concepts where the guarantor is only as strong as the individual franchisee.",
  },
  {
    question: "How do I find childcare NNN investment properties in Tampa Bay?",
    answer:
      "Most sale-leaseback transactions and existing-property dispositions by national operators are conducted off-market or through broker networks before reaching public listing platforms. Working with a commercial real estate broker who tracks NNN investment inventory across Tampa Bay — including sale-leasebacks, portfolio dispositions, and 1031 exchange opportunities — is the most effective way to access deals before they are broadly marketed. Barrett Henry at REMAX Collective tracks NNN investment opportunities across Tampa Bay's high-growth submarkets and can be reached directly at (813) 733-7907.",
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
          name: "Tampa Bay Childcare Center NNN Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-childcare-nnn-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Childcare Center NNN Investment 2026",
      description:
        "Childcare centers are one of the fastest-growing NNN investment categories in Tampa Bay. With KinderCare public, Bright Horizons expanding, and Tampa Bay adding 270,000 residents in five years, here is what investors need to know.",
      datePublished: "2026-09-11",
      dateModified: "2026-09-11",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-childcare-nnn-investment-2026",
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
    title: "What Is a Triple-Net (NNN) Lease and Why Investors Love It",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "The foundation every NNN investor needs before evaluating any single-tenant asset.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate benchmarks across NNN asset classes in the Tampa Bay market.",
  },
  {
    title: "Tampa Bay Pharmacy & Drugstore NNN Investment 2026",
    href: "/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
    description: "How childcare NNN cap rates compare to Walgreens, CVS, and Rite Aid in Tampa Bay.",
  },
  {
    title: "Tampa Bay QSR & Drive-Thru NNN Investment 2026",
    href: "/blog/tampa-bay-qsr-drive-thru-nnn-investment-2026",
    description: "Fast food NNN investments — another recession-adjacent, high-traffic tenant category.",
  },
  {
    title: "Florida 1031 Exchange — What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Childcare NNN properties are a common 1031 exchange upgrade from multifamily or retail.",
  },
  {
    title: "Tampa Bay Convenience Store & Fuel Retail NNN 2026",
    href: "/blog/tampa-bay-convenience-store-fuel-retail-nnn-investment-2026",
    description: "Comparing childcare NNN to the essential-service convenience store asset class.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Underwriting framework for any NNN acquisition, including childcare centers.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step due diligence checklist — essential reading before any NNN acquisition.",
  },
  {
    title: "Wesley Chapel Commercial Real Estate 2026",
    href: "/blog/wesley-chapel-commercial-real-estate-2026",
    description: "Wesley Chapel is one of Tampa Bay's fastest-growing childcare demand submarkets.",
  },
  {
    title: "Riverview FL Commercial Real Estate 2026",
    href: "/blog/riverview-fl-commercial-real-estate-2026",
    description: "South Hillsborough's family-dense growth corridor and its childcare supply gap.",
  },
];

export default function TampaBayChildcareNNNPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Childcare Center NNN Investment 2026", href: "/blog/tampa-bay-childcare-nnn-investment-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1600&h=900&fit=crop"
        title="Tampa Bay Childcare Center NNN Investment 2026"
        subtitle="One of the fastest-growing NNN categories in Tampa Bay — recession-resistant demand, long leases, national operators, and a metro that keeps adding families. Here is what investors need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When investors think of NNN investments in Tampa Bay, dollar stores, pharmacies, and quick-service restaurants dominate the conversation. Childcare centers rarely get the same attention — yet the sector has quietly become one of the most competitive NNN categories among institutional and private investors alike. KinderCare Learning Companies went public on the New York Stock Exchange in October 2024, bringing institutional-grade transparency to the sector&apos;s largest operator. Tampa Bay&apos;s population has grown by more than 270,000 people in five years. And the licensed childcare supply in the metro&apos;s fastest-growing suburbs has not kept pace with household formation. For NNN investors willing to do the underwriting, Tampa Bay childcare represents a compelling combination of durable demand, long lease terms, and operator credit that is often overlooked in favor of more familiar tenant categories.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Childcare Centers Becoming a More Prominent NNN Asset Class?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The childcare sector&apos;s ascent in the NNN investment market traces back to two inflection points: the COVID-19 pandemic and KinderCare&apos;s IPO. During the pandemic, licensed childcare was designated an essential service — a classification that held in most jurisdictions throughout the crisis and that fundamentally changed how institutional investors categorize the sector. Essential-service tenants, alongside pharmacies and dollar stores, are now viewed as structurally different from discretionary retail tenants, and that distinction is reflected in cap rate compression.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          KinderCare&apos;s October 2024 IPO accelerated the institutional awareness curve. With KinderCare Learning Companies (NYSE: KLC) trading publicly, analysts and real estate investors gained access to standardized financial disclosures, enrollment data, and real estate strategy detail that was previously unavailable for a privately-held operator. Bright Horizons Family Solutions (NYSE: BFAM) has traded publicly since 2013. The combination of two publicly-traded national operators has created a comparable set that NNN investors can underwrite with the same rigor they apply to pharmacy or fast-food chains.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The result: cap rates on corporate-guaranteed KinderCare and Bright Horizons net leases have compressed to ranges that overlap with other investment-grade NNN categories. For context on how childcare NNN yields compare across the Tampa Bay single-tenant market, see our overview of{" "}
          <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rates in 2026</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Makes Childcare Demand in Tampa Bay Structurally Durable?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s population dynamics create a structural demand tailwind for childcare that differs from what you see in slower-growth markets. The metro added more than 270,000 residents over the past five years, reaching roughly 3.4 million people. While net migration has moderated from its 2022 peak, the household formation created by that growth wave is still working its way through the childcare enrollment funnel. Families who moved to Riverview, Wesley Chapel, Parrish, and Land O&apos; Lakes in 2021 and 2022 are now raising children who will need licensed childcare through the late 2020s and into the 2030s.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The childcare demand dynamic is also structurally different from most retail categories because it is driven by necessity rather than preference. Dual-income households — which represent the majority of Tampa Bay&apos;s working-age family units — cannot simply reduce childcare spending when economic conditions soften. The alternative to paying for licensed childcare is one parent exiting the workforce, a cost that typically far exceeds the tuition. This necessity-driven demand is why childcare occupancy held up through the 2008 recession and the 2020 COVID disruptions, while retail categories dependent on discretionary spending saw dramatic enrollment drops.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The supply side reinforces the investment case. Opening a licensed childcare center in Florida requires regulatory approval, a dedicated facility footprint, and a location that meets state capacity and outdoor space requirements. These barriers to entry mean new supply cannot respond quickly to demand gaps, particularly in fast-growing suburban submarkets where suitable sites are competing against residential, retail, and medical users. The childcare supply constraint in Tampa Bay&apos;s growth corridors is a structural feature, not a temporary condition.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Evaluate the Tenant Credit in a Childcare NNN Deal?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tenant credit evaluation is the most important underwriting variable in any childcare NNN acquisition, and it requires more nuance than comparable categories. The childcare NNN market includes operators that span from publicly-traded investment-grade corporations to single-location owner-operators — and the cap rate range reflects that spread. Understanding where a specific deal falls on that spectrum is the foundation of sound underwriting.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At the top of the credit stack are KinderCare Learning Companies and Bright Horizons Family Solutions. Both are publicly-traded, with accessible financial statements, corporate-guaranteed leases, and institutional real estate teams managing their sale-leaseback and lease renewal programs. Properties leased to these operators with corporate guarantees, long remaining lease terms (15+ years), and rent-to-revenue ratios below 12% represent the most institutional-quality childcare NNN product available.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The middle tier includes regional operators such as Learning Care Group (which operates multiple brands including La Petite Academy and Tutor Time), Goddard Systems, and The Learning Experience. These operators vary meaningfully in financial strength and guarantee structure. A franchisee-operated Goddard School, for instance, carries the credit of the individual franchisee rather than the Goddard Systems corporate entity — a distinction that materially affects underwriting and pricing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At the base of the credit stack are independent and small regional operators. These deals often trade at 7.5% to 8.5%+ cap rates precisely because the tenant&apos;s financial resilience is not independently verifiable and the re-tenanting risk on a purpose-built childcare facility is meaningful. Before committing to any childcare NNN acquisition, completing thorough{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence</Link>{" "}
          — including operator financial review, enrollment trend analysis, and licensure status — is non-negotiable.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Submarkets Offer the Best Childcare NNN Opportunities?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s fastest-growing family submarkets represent the most compelling childcare NNN locations from both a demand and re-tenanting risk perspective. The logic is straightforward: a childcare center with 80%+ enrollment utilization in a submarket with growing household formation is a defensible asset even if the current tenant were replaced.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Wesley Chapel and New Tampa (Pasco and Hillsborough Counties).</strong> Among the fastest-growing suburban submarkets in the Southeast. New residential development continues to outpace childcare supply, creating a structural enrollment advantage for existing facilities. Wesley Chapel&apos;s{" "}
            <Link href="/blog/wesley-chapel-commercial-real-estate-2026" className="text-accent underline">commercial real estate market</Link>{" "}
            is one of the most active in the metro for all tenant categories.
          </li>
          <li>
            <strong>Riverview, Brandon, and South Hillsborough.</strong> High family-formation density along US-301 and SR-60. The{" "}
            <Link href="/blog/riverview-fl-commercial-real-estate-2026" className="text-accent underline">Riverview commercial real estate market</Link>{" "}
            has absorbed significant retail and service growth as the residential population expanded, and childcare demand has tracked residential growth closely.
          </li>
          <li>
            <strong>Parrish and Palmetto (Manatee County).</strong> One of the most active residential build-out corridors in the metro. Childcare supply in this submarket has lagged population growth, creating the type of supply-demand imbalance that generates strong enrollment and pricing power for existing operators.
          </li>
          <li>
            <strong>Land O&apos; Lakes and Zephyrhills (Pasco County).</strong> Northern Pasco has seen sustained single-family construction activity for five consecutive years. Like Wesley Chapel to its south, the childcare supply-demand gap in this corridor favors existing licensed facilities.
          </li>
          <li>
            <strong>Citrus Park, Westchase, and Carrollwood (Northwest Hillsborough).</strong> Established family neighborhoods with high household incomes and demonstrated willingness to pay premium tuition for high-quality early education. National operator presence is strongest in this submarket.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Childcare NNN Compare to Other Single-Tenant Categories in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors frequently compare childcare NNN to the more familiar categories:{" "}
          <Link href="/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026" className="text-accent underline">pharmacy and drugstore NNN</Link>,{" "}
          <Link href="/blog/tampa-bay-qsr-drive-thru-nnn-investment-2026" className="text-accent underline">QSR and drive-thru NNN</Link>, and{" "}
          <Link href="/blog/tampa-bay-convenience-store-fuel-retail-nnn-investment-2026" className="text-accent underline">convenience store and fuel retail NNN</Link>. Each category has distinct characteristics, and childcare occupies a specific position in the risk-return spectrum.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Compared to pharmacies, childcare NNN offers higher cap rates (typically 50 to 100 basis points wider for comparable credit quality) because the childcare sector carries more operator-specific risk and a narrower pool of potential replacement tenants if the primary lease ends. A standalone Walgreens building can be re-tenanted by dozens of user categories; a purpose-built childcare center is primarily re-tenantable by another childcare operator. That re-tenanting risk is real and should be reflected in how investors price lease expiration timing relative to building remaining useful life.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Compared to QSR and fast food, childcare NNN often offers longer primary lease terms — 15 to 20 years versus 10 to 15 years for QSR — and the corporate guarantee structure at national operators is directly comparable. The QSR market has more active 1031 exchange buyers, which compresses QSR cap rates relative to childcare in comparable markets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors using a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link>{" "}
          to trade out of multifamily, retail centers, or industrial property often find that childcare NNN offers a favorable combination of long lease terms, corporate guarantees, and cap rate yield relative to more-crowded NNN categories. Understanding how to properly model the returns using a sound{" "}
          <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">commercial property ROI framework</Link>{" "}
          — including realistic lease-end scenarios and re-tenanting cost assumptions — is essential before any single-tenant acquisition.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Key Risks in Childcare NNN Investing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          No NNN investment is risk-free, and childcare has specific risks that investors should understand before committing capital:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Purpose-built re-tenanting risk.</strong> A standalone childcare building designed for 150 or more children — with fenced outdoor play areas, age-differentiated classroom layouts, and commercial kitchen facilities — is a specialized asset. If the tenant vacates at lease expiration or defaults, the replacement tenant universe is narrower than for a standard retail shell. Locations in high-traffic family submarkets with documented enrollment demand mitigate this risk; isolated or demographically declining locations amplify it.
          </li>
          <li>
            <strong>Regulatory and licensure exposure.</strong> Licensed childcare is subject to state regulatory oversight that can affect a facility&apos;s ability to operate. Florida&apos;s Department of Children and Families licenses childcare centers and conducts regular inspections. An operator with a history of licensure violations or deficiencies is a due diligence red flag that can indicate operational problems affecting enrollment stability.
          </li>
          <li>
            <strong>Lease expiration and rent-to-revenue alignment.</strong> A childcare center with a lease expiring in five years requires a different underwriting posture than one with a 15-year term. Equally important is whether the current rent is sustainable relative to the operator&apos;s enrollment revenue — a facility paying above-market rent relative to its enrollment capacity will face renewal resistance or lease workout risk at expiration.
          </li>
          <li>
            <strong>Operator-specific versus corporate guarantee.</strong> As discussed above, the distinction between a corporate-guaranteed lease from KinderCare Learning Companies and a franchisee-guaranteed lease from a smaller regional operator is a fundamental credit underwriting variable. Never assume corporate creditworthiness without reviewing the actual lease guarantee language.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors considering a childcare NNN acquisition while simultaneously selling another property, exploring a fast-sale option on the departing asset can simplify the exchange timeline.{" "}
          <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">FastSellEasySale.com</a>{" "}
          offers Tampa Bay sellers an expedited cash-offer path for commercial and investment properties when exchange timing requires it.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Childcare NNN Investing in Tampa Bay</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s population trajectory, the essential-service nature of childcare, and the improved transparency created by KinderCare&apos;s IPO have combined to make childcare NNN one of the more compelling single-tenant investment categories available in the metro today. Cap rates offer a yield premium over pharmacies and comparable credit QSR deals, lease terms are long, and demand in the metro&apos;s growth corridors is structurally supported by household formation that will continue driving enrollment for years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The sector rewards investors who do the underwriting properly: matching tenant credit to cap rate expectations, verifying lease guarantee structure, confirming enrollment sustainability relative to rent, and selecting locations where the demographic demand base supports the asset even through a tenancy transition. Skipping any of these steps in favor of a headline cap rate number is how investors end up with a vacant purpose-built facility in a submarket that cannot support a replacement operator.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience and active focus on NNN investment across Tampa Bay, I help investors identify childcare NNN opportunities, evaluate operator credit, and structure acquisitions — including 1031 exchange transactions — that align with their income and risk objectives. If you are evaluating a childcare NNN deal or looking for yield in a category that most Tampa Bay investors overlook, reach out directly.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Childcare NNN Investment — Frequently Asked Questions
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
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience in Tampa Bay. He specializes in NNN investment acquisitions, 1031 exchanges, and commercial tenant representation across Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Looking for Childcare NNN or Single-Tenant Investment Properties in Tampa Bay?"
        body="I track NNN investment opportunities across Tampa Bay&apos;s growth corridors — including childcare, pharmacy, QSR, and essential-service categories. Call (813) 733-7907 or reach out below to discuss your investment criteria."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
