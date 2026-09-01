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
 * Blog: Tampa Bay Office-to-Residential Conversion & Adaptive Reuse 2026
 * Record national conversion wave, Tampa Bay vacancy context, investor guide.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Office-to-Residential Conversion 2026 | HenCRE",
  description:
    "Office-to-residential conversions hit a national record in 2026. Tampa Bay's elevated office vacancy is creating adaptive reuse opportunities in downtown Tampa, St. Pete, and Westshore — here is what investors and building owners need to know.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-office-to-residential-conversion-2026" },
  openGraph: {
    title: "Tampa Bay Office-to-Residential Conversion 2026",
    description:
      "90,000 units converted nationally in 2026 — a record. Tampa Bay office vacancy and city incentives are opening adaptive reuse opportunities. Here is the investor's guide to office conversions in the Tampa Bay market.",
    url: "https://hencre.com/blog/tampa-bay-office-to-residential-conversion-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Older office building in downtown Tampa Bay area being considered for adaptive reuse conversion",
      },
    ],
  },
};

const faqItems = [
  {
    question: "How much does an office-to-residential conversion cost per square foot in Florida?",
    answer:
      "Hard construction costs for office-to-residential conversions in Florida typically range from $120 to $200 per square foot, depending on building vintage, structural configuration, mechanical system condition, and the unit mix being created. Older 1960s to 1980s buildings with concrete construction and narrower floor plates tend to cost more to gut and reconfigure than 1990s or 2000s buildings with more flexible structural bays. In Tampa Bay, total project costs — including acquisition, hard construction, soft costs, and carrying costs — commonly run between $180 and $280 per square foot for the finished residential product. Compared to ground-up multifamily construction, which routinely exceeds $300 per square foot in the region, a conversion can pencil on the right building at the right basis. The acquisition price is the critical variable: overpaying for the office shell eliminates the conversion margin.",
  },
  {
    question: "What kinds of office buildings convert most easily to residential?",
    answer:
      "The best conversion candidates share three physical characteristics: a floor plate no wider than 65 to 85 feet from core to perimeter wall (so every unit can reach natural light), a structural system that accommodates new plumbing stacks without excessive cost, and existing mechanical, electrical, and plumbing systems nearing end of life (replacing them is not a penalty — it is an opportunity to right-size the systems for residential use). Buildings from the 1960s through the 1980s with concrete construction often have narrower floor plates than modern curtain-wall towers, making them naturally suited to apartment layouts. The worst conversion candidates are deep-floor-plate modern Class A towers where interior bays sit 120 or more feet from an exterior window — creating habitable units from that depth is prohibitively expensive.",
  },
  {
    question: "Are there tax incentives for office-to-residential conversions in Tampa Bay?",
    answer:
      "Several incentive layers are available for Tampa Bay adaptive reuse projects, though they vary by jurisdiction and project type. At the federal level, the Historic Tax Credit (HTC) provides a 20% credit on qualified rehabilitation expenses for certified historic structures — a meaningful offset for older office buildings in historically designated areas of downtown Tampa, Ybor City, and downtown St. Pete. At the state level, Florida has periodically offered state HTC match programs. At the local level, Tampa's Community Redevelopment Agencies (CRAs) and Hillsborough County's economic development programs offer gap financing, fee waivers, and density bonuses for projects that include affordable or workforce housing components. Pinellas County and St. Pete have similar tools available through their redevelopment frameworks. Qualifying for these programs adds complexity to a conversion project; an experienced commercial real estate broker and development attorney are essential for navigating the stack.",
  },
  {
    question: "How long does an office-to-residential conversion project take?",
    answer:
      "A typical Tampa Bay office-to-residential conversion runs 24 to 42 months from acquisition to certificate of occupancy, depending on project scale and whether significant entitlement changes are required. The timeline breaks roughly into four phases: acquisition and due diligence (1 to 3 months), design and entitlements (4 to 10 months, longer if rezoning is required), construction (12 to 24 months depending on building size and complexity), and lease-up (6 to 18 months post-delivery). Projects that require a change in use from commercial to residential, or that need historic designation review, add 3 to 6 months to the entitlement phase. Projects within existing mixed-use zones that allow residential as-of-right move faster. Compared to ground-up multifamily development, conversions are often faster to construction start — the shell exists — but the construction phase itself can be more unpredictable because building conditions revealed during demolition frequently generate scope changes.",
  },
  {
    question: "Is an office-to-residential conversion a good investment in Tampa Bay in 2026?",
    answer:
      "It can be — the fundamentals are more supportive now than at any point in the past decade. Tampa Bay's office vacancy is elevated (a motivated seller environment), residential rents remain strong relative to construction costs, and the national conversion wave means lenders, municipalities, and architects are all more experienced with these transactions than they were five years ago. The critical filters are acquisition basis, floor plate geometry, and the local residential market the finished product enters. A well-located mid-rise in downtown Tampa or St. Pete, acquired at an office building distress price, converted to market-rate studio and one-bedroom apartments, can generate returns competitive with ground-up multifamily at lower upfront capital risk. Workforce housing conversions that qualify for tax credits and CRA gap financing can outperform market-rate projects on a risk-adjusted basis. The deals that do not work are those where the office acquisition price was too high — underwriting at residential values from the start is essential.",
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
          name: "Tampa Bay Office-to-Residential Conversion 2026",
          item: "https://hencre.com/blog/tampa-bay-office-to-residential-conversion-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Office-to-Residential Conversion 2026",
      description:
        "Office-to-residential conversions hit a national record in 2026. Tampa Bay's elevated office vacancy is creating adaptive reuse opportunities — here is the investor's guide to office conversions in the Tampa Bay market.",
      datePublished: "2026-08-28",
      dateModified: "2026-09-01",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-office-to-residential-conversion-2026",
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
    description: "Current vacancy, absorption, and rent data for Tampa Bay's office market — the context behind the conversion opportunity.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "The Westshore submarket's office vacancy and what it means for adaptive reuse candidates.",
  },
  {
    title: "St. Petersburg Office Market 2026",
    href: "/blog/st-petersburg-office-market-2026",
    description: "St. Pete's downtown office conditions and the buildings most likely to see conversion interest.",
  },
  {
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description: "Residential demand fundamentals that adaptive reuse conversions are designed to serve.",
  },
  {
    title: "Multifamily Investment Tampa Bay Guide",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "How to underwrite and invest in multifamily assets — including converted office buildings.",
  },
  {
    title: "Tampa Mall Redevelopment & Mixed-Use 2026",
    href: "/blog/tampa-mall-redevelopment-mixed-use-2026",
    description: "How the adaptive reuse of retail anchors parallels the office conversion wave.",
  },
  {
    title: "Florida 1031 Exchange for Investors",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How office sellers can defer capital gains by rolling proceeds into a conversion project.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step due diligence checklist — essential for evaluating an office building conversion candidate.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "ROI frameworks that apply to adaptive reuse — how to model construction cost, rents, and stabilized value.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors identify, underwrite, and acquire commercial properties for conversion and repositioning.",
  },
];

export default function TampaBayOfficeToResidentialConversionPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Office-to-Residential Conversion 2026", href: "/blog/tampa-bay-office-to-residential-conversion-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="Tampa Bay Office-to-Residential Conversion 2026"
        subtitle="Office-to-apartment conversions hit a national record this year — 90,000 units and climbing. Tampa Bay's elevated office vacancy is creating the acquisition basis that makes these deals pencil. Here is what investors need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Office-to-residential adaptive reuse has gone from a niche strategy to one of the defining investment stories of 2026. Nationally, more than 90,000 apartment units were converted from office buildings this year — a 28% increase over 2025 and a record by any measure. Office conversions now account for nearly half of all adaptive reuse activity in the United States. Tampa Bay, with its combination of elevated office vacancy, strong residential demand, and city governments actively incentivizing housing creation, sits squarely in the path of this trend. This guide breaks down the opportunity — where it exists in Tampa Bay, what makes a building convertible, and how investors should think about underwriting and financing these projects.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Office-to-Residential Conversions Hitting Records in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Three forces converged in 2026 to push office conversion activity to record levels, and all three apply with particular force to Tampa Bay.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The first is office market distress. Remote and hybrid work permanently reduced the amount of office space many companies need, and the construction boom of the early 2020s delivered new supply into a market with structurally lower demand. The result is elevated vacancy across most U.S. office markets — including Tampa Bay, where vacancy in key submarkets like Westshore has climbed sharply since 2022. Buildings that cannot attract office tenants at rents that service their debt are increasingly coming to market at distressed prices. Those distressed acquisition prices are what make conversions financially feasible: the math rarely works when an office building is acquired at replacement cost.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The second force is residential demand. Tampa Bay&apos;s population continues to grow, apartment vacancy is low by historical standards, and the region faces a structural housing shortage that new construction alone cannot fill quickly enough. Converted office buildings in walkable downtown locations — downtown Tampa, Channel District, St. Pete&apos;s Edge District, Ybor City — offer a residential product that appeals to young professionals and empty-nesters who want urban density without the premium of a brand-new luxury tower.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The third force is policy support. Local governments across Tampa Bay have recognized adaptive reuse as a tool for simultaneously addressing office vacancy and housing scarcity. Tampa&apos;s Community Redevelopment Agencies have expanded gap financing tools. Hillsborough and Pinellas counties are streamlining permitting for conversion projects. And the federal Historic Tax Credit continues to stack with state and local incentives for buildings that qualify — making the financing structure for conversion projects more creative and layered than what is available for standard multifamily development. See our{" "}
          <Link href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">Tampa Bay office market Q2 2026 analysis</Link>{" "}
          for the vacancy context driving sellers to consider conversion pricing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Tampa Bay Office Buildings Are Candidates for Conversion?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not every office building converts — the physical characteristics of the shell largely determine whether the deal is buildable at a cost that makes sense. In Tampa Bay, the most convertible candidates cluster in a few vintage ranges and submarkets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Buildings from the 1960s through the 1980s are often the best starting point. These properties typically feature concrete construction, narrower floor plates (60 to 80 feet from core to exterior), and relatively low floor-to-floor heights that limit their appeal to modern office users but translate well to apartment layouts where every unit can access natural light. Many of these buildings in downtown Tampa and downtown St. Pete are also located in historically designated areas, making them eligible for the 20% federal Historic Tax Credit — a significant offset against conversion costs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          By submarket, the most active interest is concentrated in:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Downtown Tampa / Channel District.</strong> Older mid-rise office buildings within walking distance of Riverwalk and Water Street are attracting developer interest. The area&apos;s walkability score, proximity to Tampa Bay Lightning&apos;s Amalie Arena, and the energy created by the Water Street development make converted apartments here easy to lease.
          </li>
          <li>
            <strong>Downtown St. Petersburg.</strong> St. Pete&apos;s downtown office market has faced similar vacancy pressure, and the city&apos;s arts district, Beach Drive retail corridor, and proximity to the waterfront make it one of the most attractive residential locations in the Tampa Bay region. The{" "}
            <Link href="/blog/st-petersburg-office-market-2026" className="text-accent underline">St. Pete office market</Link>{" "}
            has buildings in the 4- to 8-story range with the floor plate geometries that convert most easily.
          </li>
          <li>
            <strong>Westshore.</strong> Tampa Bay&apos;s largest office submarket has been hit harder by hybrid work than downtown submarkets, with vacancy rates among the highest in the region. Some Westshore buildings are viable conversion candidates, though the suburban auto-oriented context creates a residential leasing challenge that downtown locations do not face. The best Westshore conversion candidates are those closest to walkable retail and transit access. Our analysis of the{" "}
            <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore office market</Link>{" "}
            covers the vacancy landscape in detail.
          </li>
          <li>
            <strong>Ybor City and Tampa Heights.</strong> These historically significant neighborhoods have buildings eligible for Historic Tax Credits and are benefiting from major mixed-use investment at GasWorx and Armature Works. Office buildings in these areas that convert to housing are positioned to serve the wave of residents attracted by the district&apos;s growing restaurant and arts scene.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The buildings to avoid as conversion candidates are the large-format, deep-floor-plate Class A towers of the 1990s and 2000s. These properties — common in Westshore and parts of downtown Tampa — were designed to maximize rentable area, which means interior floor depths of 100 feet or more from core to exterior wall. Converting those interior bays to habitable apartments requires adding light wells or accepting significant floor plan compromises, driving costs to levels where the economics rarely work.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Zoning and Entitlement Hurdles in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The regulatory path for a Tampa Bay office-to-residential conversion depends heavily on how the building and its parcel are currently zoned and what the local jurisdiction&apos;s approval process looks like for a change of use.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Tampa&apos;s downtown core and in designated mixed-use zones, residential is often already a permitted use as-of-right or requires only an administrative approval rather than a full rezoning. Projects in these zones can move to design and permitting more quickly than those that require Comprehensive Plan amendments or City Council votes. The City of Tampa has been actively supportive of adaptive reuse in its downtown CRA boundaries, and staff are experienced with the building code pathways — including Florida&apos;s Existing Building Code, which provides more flexibility for alterations to existing structures than the International Building Code&apos;s requirements for new construction.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Pinellas County and the City of St. Petersburg, the regulatory environment for conversions is similarly supportive in designated downtown and transit-adjacent zones. St. Pete has been advancing higher-density overlays along its major corridors, and the city&apos;s planning department has become more familiar with mixed-use and residential conversion approvals over the past three years of development activity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          One complexity specific to Florida: buildings that convert from commercial to residential use trigger new fire code requirements — sprinkler systems, egress configurations, and accessibility upgrades — that can add meaningful cost to older buildings that were not built to residential standards. Budgeting for these code-compliance items during due diligence, rather than discovering them mid-construction, is essential to keeping conversion projects on schedule and on budget. See our{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence timeline</Link>{" "}
          for a framework for uncovering these issues before closing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Finance an Office-to-Residential Conversion in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Financing a Tampa Bay office conversion typically involves stacking multiple capital sources — a complexity that experienced conversion developers are increasingly comfortable navigating, but that can intimidate first-time adaptive reuse investors.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The financing stack for a typical conversion project might include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Senior construction debt.</strong> Banks and debt funds active in Tampa Bay multifamily construction lending are increasingly willing to underwrite conversion projects, particularly those with strong downtown locations and experienced developer sponsors. Construction loan sizing is typically 60% to 70% of total project cost, with terms of 24 to 36 months.
          </li>
          <li>
            <strong>Historic Tax Credits (if applicable).</strong> For buildings that qualify as certified historic structures, the 20% federal HTC provides an equity-equivalent benefit that can cover 15% to 20% of qualified rehabilitation costs. HTC equity is raised through syndicators who sell the credits to institutional investors; the process adds complexity but can materially improve project returns. Florida has its own state HTC program that can stack with the federal credit for qualifying projects.
          </li>
          <li>
            <strong>CRA gap financing.</strong> Tampa Bay&apos;s Community Redevelopment Agencies — particularly in downtown Tampa and downtown St. Pete — offer subordinate financing, tax increment rebates, and fee waivers for projects that include workforce or affordable housing components or deliver other community benefits. These tools are competitive and discretionary; building a relationship with CRA staff early in the entitlement process is essential.
          </li>
          <li>
            <strong>Mezzanine or preferred equity.</strong> The gap between senior debt and the developer&apos;s own equity contribution is often filled with mezzanine debt or preferred equity from private lenders. In the current rate environment, mezzanine pricing typically runs 12% to 16%, making it expensive — but often necessary to get a deal to the required equity check size.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors considering an office conversion should understand how the project&apos;s stabilized value — the appraised value of the finished apartment building — relates to total project cost before proceeding. Our guide to{" "}
          <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">calculating commercial property ROI</Link>{" "}
          provides a framework for modeling this. Additionally, office building sellers who are exiting a struggling asset may benefit from{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">a 1031 exchange</Link>{" "}
          to defer capital gains while reinvesting into a conversion or other commercial property.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For office building owners who would rather sell than convert, Barrett&apos;s{" "}
          <Link href="/services/dispositions" className="text-accent underline">commercial property disposition services</Link>{" "}
          help owners exit strategically — a useful path when a conversion project is not feasible but holding a vacant office building is no longer sustainable.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Residential Demand Side Look Like for Tampa Bay Conversions?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The residential demand case for well-located Tampa Bay conversions is strong. Despite a surge of new multifamily supply in 2024 and 2025, Tampa Bay&apos;s apartment market retains fundamentals that support absorption of new inventory — including a growing population, a relatively young demographic profile, and an affordability gap between owning and renting that continues to push household formation toward rental housing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Converted office buildings in downtown locations tend to attract a specific renter profile: young professionals drawn by walkability and urban density, and older renters downsizing from suburban homes who want proximity to arts, dining, and the waterfront without the maintenance of a single-family home. The unit mix that performs best in Tampa Bay conversions skews toward studios and one-bedrooms — the floor plate geometry of most conversion candidates naturally limits the proportion of two-bedroom units — which aligns well with the income profile of the target renter.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a full picture of Tampa Bay&apos;s multifamily demand dynamics — including current vacancy, effective rent trends, and the neighborhoods where absorption is strongest — see our{" "}
          <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market mid-2026 update</Link>. Investors interested in the broader Tampa Bay residential picture can also explore our{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County market overview</Link>{" "}
          and <Link href="/markets/pinellas" className="text-accent underline">Pinellas County market page</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Investors Know Before Pursuing a Tampa Bay Office Conversion?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Adaptive reuse projects reward preparation and penalize assumptions. Before committing to an office building acquisition with conversion intent, investors should work through a due diligence process that addresses several conversion-specific risks beyond the standard commercial purchase checklist.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Floor plate geometry audit.</strong> Hire an architect experienced in residential conversion to assess the building&apos;s floor plate before signing a purchase agreement, not after. The difference between a building that converts efficiently and one that requires costly light wells or yields too many interior-facing units can only be evaluated by walking the floors with a residential layout in mind.
          </li>
          <li>
            <strong>Mechanical, electrical, and plumbing assessment.</strong> Office buildings have HVAC systems, electrical distribution, and plumbing configurations designed for commercial use. A residential conversion requires reconfiguring all three — and the condition of the existing systems determines whether replacement is a cost or a savings. Aged systems that need replacement anyway reduce the incremental conversion cost; systems with remaining useful life that must still be reconfigured for residential use are a pure added expense.
          </li>
          <li>
            <strong>Environmental investigation.</strong> Buildings from the 1960s to the 1980s may contain asbestos-containing materials in floor tiles, ceiling tiles, pipe insulation, and exterior siding. Lead-based paint may be present in any building constructed before 1978. Environmental remediation costs can be significant and can vary widely based on the extent of affected materials. A Phase I and Phase II environmental site assessment, plus a hazardous materials survey, are essential before any conversion commitment.
          </li>
          <li>
            <strong>Existing lease obligations.</strong> If the office building has any remaining tenants — even on month-to-month terms — their leases must be managed as part of the acquisition strategy. In Florida, commercial tenants have statutory rights that affect how and when they can be required to vacate. Buying a building with a plan to convert it while existing tenants remain adds timeline risk and potential legal cost.
          </li>
          <li>
            <strong>Comparable residential rents and absorption.</strong> The conversion&apos;s stabilized value depends entirely on achievable rents for the finished apartment product in that specific location. Underwriting to aspirational rents rather than actual market comparables is the most common error in conversion feasibility analysis. Use current leasing data from comparable downtown Tampa or St. Pete apartment buildings — adjusted for the unit size and amenity profile your conversion will deliver — to anchor your pro forma.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience across Tampa Bay&apos;s commercial and investment markets, I help investors identify office building acquisition candidates, evaluate conversion feasibility, and navigate the brokerage side of these transactions from acquisition through repositioning. Whether you are a first-time adaptive reuse investor or an experienced developer expanding into the Tampa Bay market, the office conversion opportunity in 2026 is real — but it rewards disciplined underwriting and deep local market knowledge.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Office-to-Residential Conversion — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial and investment property markets. He helps investors evaluate office acquisitions, conversion feasibility, and repositioning strategies. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating an Office Building Conversion in Tampa Bay?"
        body="I work with investors at every stage of the adaptive reuse process — from identifying distressed office acquisition candidates to evaluating conversion feasibility and navigating the transaction. Call (813) 733-7907 or reach out below to talk through your specific situation."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
