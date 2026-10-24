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
 * Blog: International Plaza Tampa — Simon's $250M Bet and Westshore
 * Retail CRE 2026
 * Simon Property refinanced at $551M in Dec 2025 and committed to
 * a 50K SF open-air expansion in 2026. What the investment signals
 * for the surrounding Westshore retail corridor.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "International Plaza Tampa: Simon's $250M Redevelopment and Westshore Retail CRE 2026 | HenCRE",
  description:
    "Simon Property Group is investing more than $250 million to redevelop International Plaza in Tampa's Westshore district, adding 50,000 SF of open-air retail and overhauling outdoor storefronts and restaurants. Here is what the investment signals for Westshore retail tenants and investors in 2026.",
  alternates: { canonical: "https://hencre.com/blog/international-plaza-tampa-simon-westshore-retail-cre-2026" },
  openGraph: {
    title: "International Plaza Tampa: Simon's $250M Redevelopment and Westshore Retail CRE 2026",
    description:
      "Simon Property committed to a $250M+ redevelopment of International Plaza — 50K SF open-air expansion, outdoor storefront overhaul — anchored by $1,539/SF inline sales. What it means for Tampa Bay retail tenants and investors in 2026.",
    url: "https://hencre.com/blog/international-plaza-tampa-simon-westshore-retail-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern luxury retail mall exterior in Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is Simon Property Group doing with International Plaza in Tampa?",
    answer:
      "Simon Property Group, acting through its Taubman Realty Group subsidiary, is investing more than $250 million to redevelop International Plaza as part of a broader three-property flagship redevelopment program announced in early 2026. For International Plaza specifically, the plan calls for a 50,000-square-foot open-air expansion and a comprehensive overhaul of existing outdoor storefronts and restaurant frontages. The expansion adds a new open-air retail and dining wing that capitalizes on the property's already-strong food-and-beverage and experiential tenancy, and the storefront overhaul is intended to bring the property's exterior presentation in line with its internal performance. The investment follows a December 2025 refinancing of the property at $551.25 million — a transaction that replaced a prior $477 million mortgage, extracted roughly $81.5 million in cash, and locked in a fixed rate of 4.913% for five years. The refinancing itself was a market signal: Goldman Sachs, JPMorgan Chase, and Wells Fargo collectively originated more than half a billion dollars against a single mall at a rate that reflected genuine institutional confidence in the asset's forward cash flow, not a distressed refinancing at punitive terms. The two events together — the institutional refinancing and the announced capital investment — signal that International Plaza is on an expansion trajectory, not a stabilization or exit one.",
  },
  {
    question: "Why is International Plaza so valuable compared to other malls?",
    answer:
      "International Plaza is one of the highest-performing shopping centers in the country by the metric that matters most to retail real estate investors: sales per square foot. Inline tenants at International Plaza generate approximately $1,539 per square foot in annualized sales — a figure that puts the property well above the national average for enclosed regional malls and in the company of a small group of top-tier assets in gateway markets like New York, Los Angeles, and Chicago. In a market where the national mall narrative has been dominated by closures, anchor departures, and distressed sales at steep discounts to replacement cost, International Plaza represents the divergent story that practitioners in high-quality retail have been pointing to for years: well-located, well-curated luxury and premium retail, anchored by genuine demand and strong market demographics, continues to perform and attract institutional capital. The property's outperformance relative to peers is not a temporary anomaly — it reflects the structural advantage of its location in Tampa's Westshore Business District, surrounded by one of the highest concentrations of office employment in the state, dense residential population, and proximity to Tampa International Airport. That trade area, and the purchasing power of the people within it, is what drives $1,539/SF in sales and what justifies a $551M refinancing and a $250M+ capital investment from the country's largest mall operator.",
  },
  {
    question: "What does International Plaza's redevelopment mean for the surrounding Westshore retail market?",
    answer:
      "International Plaza's redevelopment is a significant positive signal for the entire Westshore retail corridor and for Tampa Bay retail investment broadly. When the country's largest mall operator commits more than $250 million to expand and upgrade a property, it is making a statement about the trade area's long-term demographic and purchasing-power trajectory — and the ripple effects extend well beyond the mall's property lines. The businesses, hotels, restaurants, and retailers that cluster around high-performing malls benefit directly from the foot traffic, visibility, and consumer spending patterns that a mall of International Plaza's caliber generates. The 50,000-square-foot open-air expansion adds new retail and dining in a format that complements rather than competes with the surrounding corridor — the synergy between an open-air expansion and adjacent street-level retail is a rising tide. For owners of retail property within the immediate Westshore trade area, the International Plaza investment is a market-wide vote of confidence in the corridor's durability and growth trajectory. Strip centers, outparcel net-lease properties, and neighborhood retail along the Westshore Boulevard, Boy Scout Boulevard, and Kennedy Boulevard corridors all benefit from being in the shadow of one of the country's strongest retail assets.",
  },
  {
    question: "Is the surrounding Westshore retail corridor a good investment in 2026?",
    answer:
      "Westshore retail remains one of the most compelling investment corridors in Tampa Bay and in Florida more broadly. The combination of factors that make Westshore a dominant retail trade area — the highest concentration of office employment in Hillsborough County, one of the densest residential populations in the metro, Tampa International Airport foot traffic, and proximity to both South Tampa and the Westshore Business District — has not changed, and Simon's capital commitment reinforces the durability of that demand base. Strip centers and outparcel net-lease properties within a half-mile to two-mile radius of International Plaza benefit from the same trade area dynamics. Vacancy in well-located Westshore retail is minimal — the same sub-4% metro retail vacancy that characterizes Tampa Bay broadly is even tighter in this corridor where supply has been constrained for decades. Net-lease investors acquiring outparcel and pad properties near International Plaza are buying into a location that institutional capital has just reaffirmed at $551M in refinancing and $250M-plus in new investment. That is a powerful comp for any appraisal conversation and a durable underpin for long-term hold assumptions. Investors considering the broader Tampa Bay net-lease retail landscape should also review the tax-advantaged exit structures available when selling appreciated retail property, including 1031 exchange strategies covered at our guide to 1031 exchanges in Tampa Bay commercial real estate.",
  },
  {
    question: "What should retail tenants know about leasing space near International Plaza in 2026?",
    answer:
      "Tenants seeking retail space in the Westshore corridor — whether street-level storefronts, strip center units, or outparcel positions — should approach the market with urgency. The corridor's sub-4% vacancy reflects genuine structural scarcity: there is very little new retail construction delivering in Westshore, the existing inventory turns over slowly, and the trade area's demographics make it one of the most desirable retail addresses in the Tampa Bay metro. Tenants who find available space and delay negotiations risk losing the opportunity to a competing user or facing a meaningfully higher asking rent in the next cycle. The International Plaza redevelopment is likely to tighten the surrounding corridor further — a 50,000-square-foot open-air expansion draws more foot traffic to the trade area, which drives more demand for adjacent retail space, which reduces vacancy and pushes rents higher. For tenants evaluating the Westshore corridor, the strategic calculation is straightforward: this is one of the best-located retail corridors in Florida, and the forward supply-demand dynamic is moving against you. Acting in Q4 2026 means negotiating against a backdrop of elevated vacancy metro-wide that is compressing; waiting means the market that is already strong gets stronger.",
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
          name: "International Plaza Tampa: Simon's $250M Redevelopment and Westshore Retail CRE 2026",
          item: "https://hencre.com/blog/international-plaza-tampa-simon-westshore-retail-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "International Plaza Tampa: Simon's $250M Redevelopment and Westshore Retail CRE 2026",
      description:
        "Simon Property Group is investing more than $250 million to redevelop International Plaza in Tampa's Westshore district. What the investment signals for retail tenants and investors across the Westshore corridor in 2026.",
      datePublished: "2026-10-22",
      dateModified: "2026-10-24",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/international-plaza-tampa-simon-westshore-retail-cre-2026",
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
    title: "WestShore Plaza Redevelopment: CRE Impact Tampa 2026",
    href: "/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026",
    description: "The dead-mall redevelopment next door — Third Lake Partners' 8.1M SF mixed-use vision for the 54-acre WestShore Plaza site.",
  },
  {
    title: "Tampa Bay Retail Market Q4 2026",
    href: "/blog/tampa-bay-retail-market-q4-2026",
    description: "Metro-wide retail vacancy below 4% — why Tampa Bay remains one of the tightest retail markets in the country.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "The office employment density that underpins Westshore retail demand — vacancy trends and tenant activity in the towers.",
  },
  {
    title: "Tampa Bay Grocery-Anchored Retail Investment 2026",
    href: "/blog/tampa-bay-grocery-anchored-retail-investment-2026",
    description: "The most resilient retail investment category — why grocery-anchored centers in Tampa Bay continue to attract institutional capital.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate ranges across net-lease retail categories in Tampa Bay — QSR, pharmacy, auto, and more.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "The commercial corridor adjacent to Westshore — office, retail, and mixed-use trends in South Tampa.",
  },
];

export default function InternationalPlazaTampaWestshoreRetailCRE2026() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "International Plaza Tampa: Simon's $250M Redevelopment and Westshore Retail CRE 2026", href: "/blog/international-plaza-tampa-simon-westshore-retail-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop"
        title="International Plaza Tampa: Simon's $250M Bet on Westshore Retail"
        subtitle="Simon Property Group is expanding International Plaza with 50,000 SF of open-air retail — backed by a $551M institutional refinancing and $1,539/SF inline sales. Here is what it signals for Westshore tenants and investors in 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          In a retail real estate landscape that has spent years sorting winners from losers, International Plaza in Tampa&apos;s Westshore Business District sits unambiguously in the winner column — and Simon Property Group has put more than $250 million behind that thesis. The country&apos;s largest mall operator announced in early 2026 that it would redevelop three of its flagship centers, with International Plaza receiving a 50,000-square-foot open-air expansion and a comprehensive overhaul of existing outdoor storefronts and restaurant frontages. The announcement followed a December 2025 refinancing in which Simon, through its Taubman Realty Group unit, closed a $551.25 million loan at a fixed rate of 4.913% — an institutional-quality execution that extracted $81.5 million in cash and replaced a floating-rate mortgage at more favorable terms. For Tampa Bay retail tenants and investors trying to read the market, the International Plaza story is one of the clearest signals available: when institutional capital allocates at this scale, it is making a decades-long statement about a trade area.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Simon Property Group Investing in International Plaza Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The honest answer is that the investment is both confirmation and forward bet. International Plaza is already performing at the level that justifies it: inline tenants at the property are generating approximately $1,539 per square foot in annualized sales, a figure that puts International Plaza in the company of the country&apos;s top-performing luxury and premium retail centers. That sales productivity is the foundation of the refinancing economics — Goldman Sachs, JPMorgan Chase, and Wells Fargo did not collectively originate more than half a billion dollars against this asset because they were doing Simon a favor. They did it because the property&apos;s cash flow coverage, trade area demographics, and forward demand trajectory justified the exposure at institutional underwriting standards.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The redevelopment investment builds on that foundation by adding product in the format that is outperforming across the retail sector nationally: open-air and outdoor dining. The shift in consumer preference toward experiential retail and food-and-beverage — a trend accelerated by the pandemic and entrenched by changing demographics — has been captured in the performance data for years. Centers with strong outdoor dining environments, accessible storefronts, and genuine activation of public space are outperforming enclosed-only formats in virtually every market. Simon is investing $250 million-plus because the data on that format preference is unambiguous, and because the Westshore trade area — dense, affluent, airport-adjacent — is exactly the consumer base that drives the highest returns from that format.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The timing also reflects a favorable construction cost environment relative to where costs were in 2022 and 2023 at the peak of the post-pandemic construction boom. Developers who paused capital-intensive retail renovation programs during that period are now executing in a more rational cost environment, which improves the return math on the same physical program.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does International Plaza Compare to WestShore Plaza in the Same Corridor?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The juxtaposition of International Plaza and WestShore Plaza — two enclosed malls within roughly a mile of each other in Tampa&apos;s Westshore district — is one of the most instructive case studies in contemporary retail real estate. The two properties represent the bifurcation of the mall sector as clearly as any pair of assets in the country.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          WestShore Plaza was acquired in July 2026 by Third Lake Partners for approximately $135 million — a number that would have seemed optimistic to some buyers given the property&apos;s trajectory. Third Lake inherited development entitlements totaling more than 8.1 million square feet and has since filed to rezone the 54-acre site into 14 development blocks, contemplating up to 1,765 residential units, 902,000 square feet of retail, 500,000 square feet of office and medical office space, and 240 hotel rooms. The mall structures can be demolished in phases. WestShore Plaza&apos;s future is almost certainly as mixed-use urban land, not as a functioning retail center. Our{" "}
          <Link href="/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026" className="text-accent underline">WestShore Plaza redevelopment guide</Link>{" "}
          covers the Third Lake plan in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          International Plaza is the polar opposite trajectory: not a conversion candidate, not a redevelopment-to-residential story, but a performing retail asset that is being actively upgraded and expanded by its institutional owner. The contrast reinforces a lesson that experienced retail investors have internalized over the past decade: the top quartile of regional malls, particularly those anchored by luxury and premium tenancy in high-purchasing-power trade areas, are not threatened by the structural headwinds that have claimed the bottom quartile. The divergence between the two is not narrowing — it is widening.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the International Plaza Investment Signal for Westshore Retail Tenants?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants considering retail space anywhere in the Westshore corridor — from outparcel positions adjacent to the mall to strip centers along Westshore Boulevard, Boy Scout Boulevard, and Kennedy Boulevard — the International Plaza investment is one of the strongest endorsements a trade area can receive. Simon Property does not commit $250 million to an expansion unless its proprietary consumer data on the surrounding trade area — demographic trends, household formation, income growth, spending patterns — supports a multi-decade hold thesis.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The open-air expansion specifically is a rising-tide event for adjacent retail. A 50,000-square-foot addition of activated outdoor retail and dining draws incremental foot traffic to the immediate area, which flows into adjacent properties through the natural consumer behavior patterns of a contiguous commercial district. Tenants who have been evaluating Westshore versus competing corridors — Dale Mabry, South Howard Avenue, Kennedy Boulevard further east — should weigh the International Plaza investment as a material differentiator.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The supply picture in Westshore retail amplifies this dynamic. There is essentially no new retail construction delivering in the corridor at meaningful scale — the development pipeline consists of mixed-use projects with retail as a component, not standalone retail. In a market where new supply is absent and institutional demand for the corridor is being reinforced by one of the sector&apos;s most sophisticated operators, the structural logic for tenants is to secure space now, at terms that still reflect the current vacancy environment, before the expansion opens and demand for adjacent positions intensifies. Our overview of the{" "}
          <Link href="/blog/tampa-bay-retail-market-q4-2026" className="text-accent underline">Tampa Bay retail market entering Q4 2026</Link>{" "}
          provides the metro-wide context for this corridor-level analysis.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Westshore Retail a Good Investment Opportunity in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For retail investors, the Westshore corridor offers a combination of characteristics that is increasingly rare in the current market: genuine trade area strength, institutional validation, constrained supply, and meaningful near-term catalysts. The $551M refinancing and $250M+ redevelopment of International Plaza are not abstract signals — they directly affect the investment mathematics for every retail property in the surrounding area.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Strip center and multi-tenant retail</strong> within a one-to-two-mile radius of International Plaza benefits from the same trade area demographics that drive $1,539/SF in inline sales at the mall. A well-located strip center with credit-quality or regional tenants in this corridor — particularly one with food-and-beverage, medical, service, or fitness tenants that are not direct substitutes for mall merchandise — is positioned to outperform through any retail cycle because it serves the daily needs of the same consumer who generates the mall&apos;s sales productivity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Outparcel and net-lease pad sites</strong> adjacent to or near International Plaza represent some of the most defensible retail real estate in Florida. National QSR, pharmacy, auto service, and financial service operators pay premium rents for Westshore corridor positions because the traffic counts, demographics, and co-tenancy support their unit economics. Net-lease investors acquiring these positions today are buying institutional-quality real estate at pricing that, in many cases, still reflects 2024&apos;s cap rate environment rather than the tightening that the International Plaza investment is likely to accelerate. Our guide to{" "}
          <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rates in 2026</Link>{" "}
          covers the current pricing environment across net-lease categories.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors considering the retail investment landscape more broadly should also note that the office employment base in the Westshore Business District — covered in detail in our{" "}
          <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore office market analysis</Link>{" "}
          — provides a daytime population layer that is additive to residential consumer demand, a dynamic that does not exist in purely residential suburban retail corridors. The combination of daytime office worker spending, evening and weekend residential population spending, and airport visitor spending creates a demand stack that is difficult to replicate elsewhere in the metro.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors looking to recycle capital from appreciated retail assets through a 1031 exchange into higher-quality Westshore positions, the current window offers a constructive combination of available inventory and favorable basis. Our{" "}
          <Link href="/blog/1031-exchange-tampa-bay-commercial-real-estate-2026" className="text-accent underline">guide to 1031 exchanges in Tampa Bay commercial real estate</Link>{" "}
          covers the identification timeline, qualified intermediary requirements, and how to structure an exchange efficiently in the current market. For retail owners who may be better served by a direct exit — whether the asset is stabilized, tenant-occupied, or in need of repositioning — <a href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">fastselleasysale.com</a> covers commercial retail and investment property disposition strategies including cash sale options that can simplify a transition.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does the International Plaza Story Fit Tampa Bay&apos;s Broader Retail Narrative in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay retail entered 2026 as one of the tightest retail markets in the country by vacancy, and it has maintained that position through Q4. Metro-wide retail vacancy is running below 4% — a figure that puts Tampa Bay in the top tier of major markets nationally for retail scarcity. The structural drivers of that scarcity are not complicated: population growth that has consistently exceeded projections, household income growth driven by in-migration of higher-earning households, and a regulatory and permitting environment that has kept new retail supply constrained relative to demand growth.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Against that backdrop, the International Plaza expansion adds 50,000 square feet of high-quality retail to the market — but it does so in the form of open-air and experiential format that is complementary to, rather than competitive with, the neighborhood and strip retail that serves daily consumer needs. The expansion adds a destination-retail and dining component to the Westshore node without displacing the service and convenience retail that surrounding properties house.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The broader regional picture reinforces Tampa Bay&apos;s position. CoStar ranked Tampa second nationally in its 2025 retail market analysis — a ranking driven by exactly the combination of trade area growth, supply constraint, and institutional investment that the International Plaza story exemplifies. In a national retail landscape where market selection is as important as asset selection, Tampa Bay and Westshore specifically offer the rare combination of population growth runway, limited future supply, and proven institutional validation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on International Plaza and Westshore Retail CRE in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Simon Property Group does not commit $551 million in refinancing capital and $250 million-plus in redevelopment investment to assets it is not confident in. The International Plaza investment — the 50,000-square-foot open-air expansion, the outdoor storefront overhaul, the institutional-quality refinancing at favorable fixed-rate terms — is one of the strongest endorsements a Tampa Bay retail trade area has received from a major operator in recent memory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants, the message is to secure Westshore corridor positions now, before the expansion opens and competition for adjacent retail space intensifies. For investors, the message is that the trade area comps just got meaningfully stronger, and that the structural supply constraint in the corridor means that well-located retail assets here are likely to appreciate further as the demand Simon is reinforcing continues to compound. For landlords of existing Westshore retail inventory, the Simon investment is a market-wide rising tide.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of experience in Tampa Bay commercial real estate at REMAX Collective, I help retail tenants evaluate and negotiate space across the metro&apos;s major corridors and help investors evaluate retail acquisitions from single-tenant net-lease to multi-tenant strip centers and anchored centers. Whether you are seeking space in Westshore or evaluating the investment case for Tampa Bay retail assets in any corridor, I bring the market knowledge and transactional experience to get you to the right decision.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            International Plaza Tampa and Westshore Retail CRE 2026 — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial markets. He helps retail tenants find and negotiate space and helps investors evaluate retail acquisitions — from net-lease outparcels to multi-tenant strip centers — across the Westshore corridor and the broader Tampa Bay metro. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Looking for Retail Space or a Retail Investment in the Westshore Corridor?"
        body="I help businesses find and negotiate retail space in Tampa's Westshore district and across the broader Tampa Bay metro, and help investors evaluate retail acquisitions from single-tenant net-lease to multi-tenant strip centers. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
