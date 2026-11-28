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
 * Blog: Tampa Bay LEED Green Building Commercial Real Estate 2026
 * LEED certification, Florida's commercial green-building mandates,
 * and how sustainability is shaping tenant demand and asset values.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay LEED & Green Building CRE 2026: Investor & Tenant Guide | HenCRE",
  description:
    "LEED certification requirements, Florida green-building mandates, and tenant demand for sustainable space are reshaping Tampa Bay commercial real estate in 2026. Here is what investors, landlords, and tenants need to know.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-leed-green-building-commercial-real-estate-2026" },
  openGraph: {
    title: "Tampa Bay LEED & Green Building CRE 2026: What Investors and Tenants Need to Know",
    description:
      "LEED certification, Florida's commercial green-building mandates, and corporate sustainability requirements are changing who leases what in Tampa Bay commercial real estate. Full investor and tenant guide.",
    url: "https://hencre.com/blog/tampa-bay-leed-green-building-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern green commercial office building with sustainable design representing LEED certification in Tampa Bay",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Is LEED certification required for commercial buildings in Tampa?",
    answer:
      "Full LEED certification is not universally required for all commercial buildings in Tampa, but the City of Tampa does require commercial construction projects larger than 5,000 square feet to register with a recognized third-party green-building rating system, either LEED or the Florida Green Building Coalition (FGBC) standard, as a condition of permit approval. Registration is not the same as full certification, but it means every sizable new commercial project in the city is at minimum engaging with sustainability criteria from the start of design. Projects that pursue full LEED certification can access Tampa's Green Fast Track permitting program, which offers expedited review and can shorten overall project delivery timelines by several months on larger builds. For office and medical office tenants with corporate ESG commitments, full LEED certification, not just registration, is increasingly a prerequisite in their lease requirements.",
  },
  {
    question: "Does LEED certification actually increase a commercial property's value or rent?",
    answer:
      "The research consistently shows yes, particularly for office and medical office assets in markets with significant corporate tenant demand. LEED-certified office buildings in major Sun Belt metros command rent premiums of 5% to 20% over comparable non-certified properties, and vacancy rates for certified buildings tend to run 2 to 5 percentage points below the market average. In Tampa Bay, the premium is clearest in the Westshore and downtown submarkets, where corporate users negotiating multi-year leases increasingly include LEED status in their decision criteria alongside floor plate efficiency and parking ratios. For industrial properties, the premium is narrower but growing: large-format distribution users with public sustainability commitments, including several of the largest e-commerce and retail operators leasing in Tampa Bay, now specify LEED or equivalent certification in their build-to-suit requirements. The certification cost, typically $50,000 to $250,000 depending on building size and documentation complexity, is almost always recovered through faster lease-up and reduced concessions on the first full lease cycle.",
  },
  {
    question: "What is the Florida Green Building Coalition and how does it differ from LEED?",
    answer:
      "The Florida Green Building Coalition (FGBC) is a Florida-specific alternative to LEED that is recognized by the City of Tampa and many other Florida municipalities for commercial permitting compliance. The FGBC commercial standard is designed around Florida's specific climate, construction practices, and energy-efficiency challenges, particularly hurricane resilience, humidity management, and the state's heavy reliance on air conditioning. FGBC certification is generally less expensive and somewhat faster to obtain than LEED certification for smaller commercial projects, and it places particular emphasis on water conservation, indoor air quality in a humid climate, and construction waste management. LEED, administered by the U.S. Green Building Council, carries stronger national and international brand recognition and is more frequently required by corporate tenants with national ESG reporting obligations. Many Tampa Bay developers choose to pursue both certifications simultaneously, using the FGBC standard for local permitting compliance while pursuing LEED for tenant marketing. The practical difference for landlords comes down to tenant mix: local and regional tenants are often satisfied with FGBC, while national corporate tenants typically require LEED.",
  },
  {
    question: "What LEED improvements deliver the best ROI for existing commercial buildings in Tampa Bay?",
    answer:
      "For existing commercial buildings in Tampa Bay pursuing LEED certification or recertification, the highest-ROI improvements tend to cluster in three categories. First, HVAC and mechanical systems upgrades: in Tampa's climate, cooling accounts for the largest share of a commercial building's energy cost, and replacing or rebalancing aging air handling units with high-efficiency systems typically provides both the strongest point contribution to LEED's Energy and Atmosphere credits and the fastest payback through utility savings. Second, lighting retrofits to LED with occupancy-based controls: these deliver reliable energy savings, qualify for utility rebates through Duke Energy Florida and TECO, and are relatively low-cost to implement. Third, water efficiency measures including low-flow fixtures and smart irrigation controls: Tampa Bay's water management districts have tightened consumptive use requirements, and water credits are among the most accessible LEED points for existing buildings. Landlords considering a certification push should commission a full LEED gap analysis before investing in any single system improvement, as the optimal upgrade path depends on where the building currently sits relative to each credit threshold.",
  },
  {
    question: "How does green certification affect lease negotiations in Tampa Bay?",
    answer:
      "Green certification has become a standard line item in lease negotiations for class A office and medical office space in Tampa Bay. Corporate tenants with public ESG commitments, particularly in finance, healthcare, law, and technology, now routinely request LEED status documentation as part of their due diligence alongside floor plans, ADA compliance records, and parking ratios. Some national tenants include LEED certification as a lease condition, meaning the landlord must maintain certification for the lease term or the tenant gains termination rights. For landlords without certification, the absence of a green credential is increasingly a filtering criterion that removes their building from consideration before a site tour. Beyond initial leasing, green certification affects operating expense pass-throughs: LEED buildings typically carry lower energy and water utility costs, which reduces CAM charges for tenants in gross or modified-gross leases and makes the net effective rent more competitive. Investors evaluating office acquisitions in Tampa Bay should treat LEED status and the age of core building systems as directly linked value factors rather than separate considerations.",
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
          name: "Tampa Bay LEED Green Building CRE 2026",
          item: "https://hencre.com/blog/tampa-bay-leed-green-building-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay LEED & Green Building CRE 2026: What Investors and Tenants Need to Know",
      description:
        "LEED certification requirements, Florida green-building mandates, and corporate sustainability requirements are reshaping Tampa Bay commercial real estate in 2026.",
      datePublished: "2026-11-27",
      dateModified: "2026-11-27",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-leed-green-building-commercial-real-estate-2026",
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
    title: "Tampa Bay Office Market Q4 2026",
    href: "/blog/tampa-bay-office-market-q4-2026",
    description: "Current vacancy, rent trends, and tenant demand in Tampa Bay's office submarkets.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "The submarket where LEED certification most directly affects lease competitiveness.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description: "Healthcare tenants are among the most active sustainability-credential seekers in Tampa Bay.",
  },
  {
    title: "Tampa Bay Spec Suites Office 2026",
    href: "/blog/tampa-bay-spec-suites-office-2026",
    description: "How landlords are deploying spec suites in certified buildings to accelerate lease-up.",
  },
  {
    title: "Tampa Bay Industrial Market Q4 2026",
    href: "/blog/tampa-bay-industrial-market-q4-2026",
    description: "Large-format industrial users increasingly require green certification in build-to-suit requirements.",
  },
  {
    title: "Tampa Bay Tenant Improvement Allowance Guide 2026",
    href: "/blog/tampa-bay-tenant-improvement-allowance-guide-2026",
    description: "TI structures in LEED buildings often include energy-system upgrade allowances.",
  },
  {
    title: "Tampa Bay Commercial Lease Renewal Strategy 2026",
    href: "/blog/tampa-bay-commercial-lease-renewal-strategy-2026",
    description: "Green certification status is a growing factor in renewal leverage for both landlords and tenants.",
  },
  {
    title: "Florida Business Rent Tax Repeal",
    href: "/blog/florida-business-rent-tax-repeal",
    description: "Florida&apos;s commercial real estate tax environment context for lease and investment decisions.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Sustainability credentials are now part of the institutional-quality checklist.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "LEED status verification belongs in every commercial due diligence process.",
  },
];

export default function TampaBayLEEDGreenBuildingCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay LEED Green Building CRE 2026", href: "/blog/tampa-bay-leed-green-building-commercial-real-estate-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="Tampa Bay LEED & Green Building CRE 2026"
        subtitle="Sustainability requirements, tenant ESG mandates, and Florida&apos;s commercial green-building rules are reshaping which buildings command premium rents and which sit vacant."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Green building certification is no longer a marketing afterthought for Tampa Bay commercial real estate. In 2026, it is a leasing prerequisite for a growing share of corporate office tenants, a build-to-suit requirement from major industrial users, and a formal step in the City of Tampa&apos;s commercial permitting process for all new projects over 5,000 square feet. For investors, landlords, and tenants navigating this market, understanding how LEED and Florida&apos;s green-building standards work, and what they mean for asset values and lease negotiations, is essential.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Driving Tampa Bay&apos;s Green Building Momentum in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Three forces are converging. First, regulatory requirements have tightened. The City of Tampa now requires all commercial construction projects over 5,000 square feet to register with a recognized green-building rating system, either LEED or the Florida Green Building Coalition (FGBC) standard, as a condition of permit approval. Tampa&apos;s Green Fast Track program rewards buildings that pursue full LEED certification with expedited permitting review, a material advantage in a market where construction timelines are under pressure from labor and material costs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Second, the city&apos;s own buildings are setting the standard. Tampa City Center, the city&apos;s 161,000-square-foot municipal administration complex, became the only Florida building to receive a USGBC Local Leadership Award in 2026, one of the U.S. Green Building Council&apos;s highest project recognition honors. The Tampa Convention Center achieved LEED Silver certification for Building Operations and Maintenance. When public buildings at this scale achieve certification, it accelerates private-sector adoption and raises tenant expectations for the market overall.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Third, and most directly consequential for investors, corporate tenants are driving demand. ESG reporting requirements for publicly traded companies and large private firms have converted sustainability credentials from a preference to a requirement for a meaningful portion of Tampa Bay&apos;s largest potential office tenants. For a broader look at how these tenant dynamics are playing out in the office market, our{" "}
          <Link href="/blog/tampa-bay-office-market-q4-2026" className="text-accent underline">Tampa Bay office market Q4 2026 overview</Link>{" "}
          provides current submarket data alongside demand trends.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Commercial Submarkets Feel the Green Certification Premium Most?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The LEED premium is sharpest in Westshore and downtown Tampa, where the concentration of corporate office tenants with active ESG programs is highest. Westshore, Tampa Bay&apos;s largest office submarket, has seen landlords accelerate building system upgrades and certification pursuits as trophy and class A buildings compete for a narrower pool of large corporate requirements. For detail on how that competition is playing out,{" "}
          <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">our Westshore office market post</Link>{" "}
          covers the specific buildings that have invested in sustainability upgrades and how those investments are affecting their lease terms and vacancy.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Medical office is the other submarket where green certification is becoming nearly mandatory. Healthcare systems, led by Tampa General Hospital and BayCare Health System, have adopted formal sustainability criteria for the outpatient and medical office buildings they occupy and develop. Smaller healthcare practices that are part of larger system networks often inherit these requirements through their affiliation agreements. Our post on{" "}
          <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">Tampa Bay medical office real estate</Link>{" "}
          covers the development pipeline and tenant demand patterns in this sector.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Industrial is the fastest-growing segment for green certification adoption, even if the absolute penetration rate remains lower than office. National logistics and e-commerce operators leasing large-format distribution space in Tampa Bay&apos;s suburban markets are increasingly specifying LEED certification or equivalent in their build-to-suit and site-selection criteria. The{" "}
          <Link href="/blog/tampa-bay-industrial-market-q4-2026" className="text-accent underline">Tampa Bay industrial market Q4 2026</Link>{" "}
          report details how this is shaping developer decisions in the spec pipeline.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Much Does LEED Certification Cost and What Does the Process Look Like?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          LEED certification for a commercial building involves registration with the U.S. Green Building Council, documentation of compliance across the LEED credit categories, third-party review, and ongoing reporting for recertification every five years. Total cost depends heavily on building size and whether the project is a new construction pursuit or a certification of an existing building.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For new construction, LEED-related design and documentation costs typically run 1% to 3% of total construction cost on larger projects, though that percentage falls as building size increases and design teams with LEED experience manage the process efficiently. Registration and review fees from the USGBC run from roughly $3,000 for the smallest commercial projects to $22,500 or more for large portfolios. The certification premium on new construction cost is often partially offset by reduced energy and water utility costs during operations, available utility rebates from Duke Energy Florida and TECO for qualifying efficiency improvements, and potentially faster lease-up.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For existing buildings, the cost depends on where the building currently sits relative to LEED thresholds. A well-maintained class A office building built in the last decade may need relatively modest upgrades, primarily documentation, an HVAC commissioning study, and low-flow fixture retrofits, to achieve LEED Silver. An older building with aging mechanical systems faces a more substantial investment. Landlords considering a certification push should commission a LEED gap analysis from a certified LEED consultant before committing to a certification timeline. This analysis typically costs $5,000 to $20,000 and identifies exactly which credits are within reach and which system upgrades would yield the most points per dollar invested.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If HVAC systems are a bottleneck, that is both a certification issue and a pre-sale preparation issue. Well-maintained mechanical systems are a standard item in commercial due diligence, and{" "}
          <a href="https://bestbayservices.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Best Bay Services</a>,{" "}
          a Tampa Bay HVAC and handyman services company, handles commercial system maintenance and improvements that landlords often need before pursuing certification or listing a property for sale.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Specific LEED Credit Categories That Matter Most in Florida&apos;s Climate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          LEED evaluates buildings across eight credit categories: Location and Transportation, Sustainable Sites, Water Efficiency, Energy and Atmosphere, Materials and Resources, Indoor Environmental Quality, Innovation, and Regional Priority. In Tampa Bay&apos;s climate, three categories carry disproportionate weight for both point accumulation and practical impact.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Energy and Atmosphere</strong> is the highest-weight category and reflects the dominant cost driver in Florida commercial buildings: cooling. HVAC systems account for 40% to 60% of a typical Tampa Bay commercial building&apos;s energy cost, and high-efficiency systems, demand-controlled ventilation, and building automation that optimizes setpoints based on occupancy and outdoor conditions deliver both significant LEED points and rapid utility savings. Buildings that earn Energy Star certification, which requires a score above 75 on the EPA&apos;s 1-to-100 building performance scale, are automatically eligible for maximum points in this category.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Water Efficiency</strong> is a category where Tampa Bay buildings can often earn substantial points at relatively low cost. The Southwest Florida Water Management District has implemented increasingly strict water use requirements, and commercial buildings that install low-flow plumbing fixtures, smart irrigation controllers, and water-efficient cooling tower equipment typically exceed the baseline LEED water efficiency thresholds with modest capital investment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Indoor Environmental Quality</strong> matters enormously for office and medical office tenants in a humid climate where indoor air quality, mold prevention, and ventilation performance are both LEED credit opportunities and genuine tenant health concerns. Buildings with strong Indoor Environmental Quality performance often find this is the certification attribute that tenants in healthcare and professional services value most in their occupancy decisions.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Investors Evaluate When Acquiring a Green-Certified Commercial Property?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Green certification adds a layer to the standard commercial acquisition due diligence process that many buyers underestimate. The certification itself needs to be verified against the USGBC&apos;s public project database, and the specific certification level, whether LEED Certified, Silver, Gold, or Platinum, should be confirmed along with the certification date and next recertification deadline.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Recertification is not automatic. LEED for Existing Buildings requires recertification every five years, and buildings that have let certification lapse may be marketed as &quot;previously LEED certified&quot; without disclosing the lapse. Any lease clause that conditions tenancy on LEED status represents a legal obligation that must be verified against current certification status before closing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          During due diligence, review the building&apos;s actual utility consumption data for at least the past 24 months alongside the LEED documentation. Well-managed certified buildings should show energy and water intensity metrics that are meaningfully below comparable non-certified properties. A wide gap between certification documentation and actual consumption data warrants deeper investigation into systems maintenance practices and potential deferred capital needs. Our{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence timeline</Link>{" "}
          provides a step-by-step framework that includes building systems assessment as a standard component.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Selling a Non-Certified Building in Tampa Bay Getting Harder?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For class A and class B office assets, yes, it is becoming harder to achieve institutional pricing without certification or a credible path to certification. Institutional buyers and REITs underwriting Tampa Bay office acquisitions are now routinely applying a discount to non-certified buildings that reflects both the anticipated cost of achieving certification and the risk of vacancy during a lease-up period where corporate tenants self-select into certified inventory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For class C office and most retail and industrial product, the certification premium is less acute, and buyers and tenants in these segments are generally not filtering on LEED status. However, as tenant requirements evolve and institutional ownership of Tampa Bay commercial inventory increases, this is a floor that is likely to rise over time.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Owners of non-certified buildings who are considering a sale in the next two to four years should evaluate whether a targeted certification push ahead of marketing would be value-accretive. In many cases it is, particularly for office assets in Westshore and downtown Tampa where the buyer pool is most sensitive to sustainability credentials. For owners who want to sell quickly and are not positioned to invest in a certification process,{" "}
          <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Fast Sell Easy Sale</a>{" "}
          provides options for selling commercial properties, businesses, and land quickly for cash in Tampa Bay. The right path depends on asset quality, hold period, and capital availability.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line for Tampa Bay Commercial Real Estate in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Green certification has moved from a differentiator to a prerequisite in meaningful segments of Tampa Bay&apos;s commercial market. Office landlords competing for class A corporate tenants, medical office developers building for health system occupants, and industrial developers pursuing large-format logistics users all face a market where LEED status directly affects the size and quality of their potential tenant pool. The investment required to achieve certification is real, but in most cases it is smaller than the value of a lease signed with a corporate tenant who would not have considered a non-certified building.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors evaluating acquisitions in Tampa Bay&apos;s office and medical office markets, LEED status and core building system age are now inseparable value factors. For landlords managing existing assets, understanding where their buildings sit relative to certification thresholds, and what a targeted improvement program would cost and yield, is a planning question that belongs on every asset management agenda in 2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of experience across Tampa Bay&apos;s commercial markets, I help investors and landlords evaluate assets with the full picture, including sustainability credentials, building system condition, and tenant demand dynamics. Whether you are evaluating a potential acquisition, managing an existing office asset, or considering a sale, let&apos;s talk through where the market is headed and what it means for your property.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: November 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay LEED & Green Building CRE 2026, Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial and office markets. He helps investors and landlords navigate asset positioning, acquisitions, and dispositions across the region. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Is Your Commercial Building Keeping Up With Green Standards?"
        body="If you own or are evaluating office, medical office, or industrial property in Tampa Bay and want to understand how green certification affects your asset&apos;s value and leasing competitiveness, let&apos;s talk. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
