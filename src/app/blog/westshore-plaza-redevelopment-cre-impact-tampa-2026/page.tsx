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
  title: "WestShore Plaza Redevelopment: What It Means for CRE Investors and Tenants | HenCRE",
  description:
    "Third Lake Partners bought WestShore Plaza for $135M and filed a 14-block mixed-use plan. A second Westshore hotel site is becoming 398 apartments. Here is what the Westshore District's transformation means for commercial real estate investors and tenants in 2026.",
  alternates: { canonical: "https://hencre.com/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026" },
  openGraph: {
    title: "WestShore Plaza Redevelopment: What It Means for CRE Investors and Tenants",
    description:
      "Two major redevelopment projects are reshaping Tampa's Westshore corridor at the same time. WestShore Plaza's 54-acre site becomes a 14-block mixed-use district. A 1973 hotel becomes 398 apartments. Here is the investor and tenant guide.",
    url: "https://hencre.com/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Westshore Tampa skyline with office towers and commercial corridor",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Who bought WestShore Plaza and what are their plans?",
    answer:
      "Third Lake Partners, a Tampa-area real estate investment and development firm, acquired WestShore Plaza in July 2026 for approximately $135 million. The purchase included the roughly 54-acre site in Tampa's Westshore Business District. Third Lake inherited entitlements approved by the City of Tampa under the prior owner, Washington Prime Group, totaling more than 8.1 million square feet of development rights. The firm has since filed to rezone the site into 14 development blocks, a structure designed to allow individual sections of the project to advance independently. The plan contemplates up to 1,765 residential units, approximately 902,000 square feet of retail, 500,000 square feet of office and medical office space, and 240 hotel rooms. The existing mall structures can be demolished in phases as each development block is activated. No public demolition or groundbreaking timeline has been announced.",
  },
  {
    question: "What is happening with the Ramada Tampa Westshore hotel site?",
    answer:
      "At 1200 N. West Shore Blvd., Cardinal Point Management has filed plans to demolish the existing 1973 Ramada hotel and replace it with a 398-unit apartment building with approximately 7,500 square feet of ground-floor retail and a 701-space parking garage on the 4.3-acre site. This project is separate from the WestShore Plaza redevelopment but is happening in the same corridor at roughly the same time. The combination of these two projects - one a 54-acre mixed-use overhaul and one a hotel-to-residential conversion on a 4.3-acre site - signals a corridor-level transformation, not just a single property story.",
  },
  {
    question: "Will the WestShore Plaza redevelopment hurt or help nearby commercial property values?",
    answer:
      "Historically, major mixed-use redevelopments in established commercial corridors produce a positive effect on surrounding property values over the medium and long term, even if there is short-term disruption during demolition and construction. Adding 1,765 residential units to WestShore creates a captive consumer base for nearby retail, service, and restaurant businesses. Adding 500,000 square feet of office and medical office reinforces the district's role as a commercial hub. The net effect on a particular property depends on its location relative to the redevelopment, its tenant mix, and the specific phase timeline. Properties immediately adjacent to active construction may experience temporary access or visibility challenges; properties in the broader Westshore corridor stand to benefit from the increased density and walkability the project is intended to deliver.",
  },
  {
    question: "Should retail tenants currently in WestShore Plaza sign new leases?",
    answer:
      "No. Retail tenants currently operating in WestShore Plaza should not sign new long-term leases and should not assume their current space will be available beyond the near term. With 14 development blocks to be activated independently, individual areas of the mall could be demolished on a rolling basis over multiple years - and lease termination provisions in mall redevelopment situations give operators limited long-term security. Tenants who have invested significantly in their current space face real risk of displacement with limited notice. The prudent move is to begin exploring alternative locations in the Westshore corridor or adjacent submarkets now, before competing tenants displaced by the same project enter the market simultaneously and reduce available options.",
  },
  {
    question: "What commercial real estate investment opportunities does the WestShore redevelopment create?",
    answer:
      "The WestShore Plaza transformation and the simultaneous Ramada hotel conversion create several distinct investment angles. First, land banking: parcels immediately adjacent to the redevelopment footprint may appreciate as the mixed-use development delivers residential density and a refreshed retail environment - the same mechanism that drove land values near Water Street Tampa and the Heights. Second, retail strip and inline space: the redevelopment will displace existing mall tenants and absorb available retail space in the immediate corridor, putting upward pressure on asking rents for well-located strip retail nearby. Third, multifamily: the incoming residential units validate demand in a corridor that has historically been office- and retail-dominated; investors evaluating multifamily acquisitions in Westshore should view this as a structural demand signal. Fourth, office adjacent: the 500,000 square feet of planned office and medical office space inside the redevelopment will not deliver for years - meaning existing Westshore office assets face minimal new competition in the near term while benefiting from the corridor upgrade.",
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
          name: "WestShore Plaza Redevelopment: CRE Impact 2026",
          item: "https://hencre.com/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "WestShore Plaza Redevelopment: What It Means for CRE Investors and Tenants in Tampa",
      description:
        "Third Lake Partners acquired WestShore Plaza for $135M and filed a 14-block mixed-use plan. A second Westshore hotel site is converting to 398 apartments. This guide covers what both projects mean for investors and tenants in Tampa's Westshore corridor.",
      datePublished: "2026-10-11",
      dateModified: "2026-10-11",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026",
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
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "Vacancy at 16%, all-time high rents, and several towers with minimal availability — the Westshore office submarket in detail.",
  },
  {
    title: "Tampa Mall Redevelopment: Mixed-Use CRE Guide 2026",
    href: "/blog/tampa-mall-redevelopment-mixed-use-2026",
    description: "WestShore Plaza, Britton Plaza, and Tampa's broader mall-to-mixed-use conversion wave — what investors need to know.",
  },
  {
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description: "How Tampa Bay's apartment market is absorbing supply — and where rents are resuming growth heading into year-end.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "The commercial corridor closest to Westshore — office, retail, and mixed-use trends in South Tampa's dense urban market.",
  },
  {
    title: "Tampa Bay Retail Market Q3 2026",
    href: "/blog/tampa-bay-retail-market-q3-2026",
    description: "Vacancy below 4% metro-wide — why Tampa Bay retail remains one of the tightest markets in the country.",
  },
  {
    title: "Tampa Bay Opportunity Zones CRE 2026",
    href: "/blog/tampa-bay-opportunity-zones-cre-2026",
    description: "Where residential and commercial demand converge in Tampa Bay's Opportunity Zone corridors.",
  },
  {
    title: "Tampa Bay Owner-User Commercial Real Estate: Buy vs. Lease",
    href: "/blog/tampa-bay-owner-user-commercial-real-estate-buy-vs-lease",
    description: "When buying your own building beats leasing — analysis for business owners in Tampa Bay's current market.",
  },
  {
    title: "Water Street Tampa: 33-Story Tower and Downtown CRE 2026",
    href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    description: "How the Water Street Tampa development is reshaping commercial real estate in Downtown Tampa.",
  },
];

export default function WestShorePlazaRedevelopmentPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "WestShore Plaza Redevelopment: CRE Impact 2026", href: "/blog/westshore-plaza-redevelopment-cre-impact-tampa-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="WestShore Plaza Redevelopment: What It Means for CRE Investors and Tenants"
        subtitle="Third Lake Partners paid $135 million for the 54-acre site and filed a 14-block mixed-use plan. A second Westshore hotel site is converting to 398 apartments. Two simultaneous redevelopments are reshaping Tampa's most important commercial corridor."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Tampa&apos;s Westshore Business District is in the middle of a transformation that will take years to fully play out — and the commercial real estate implications are already significant. In July 2026, Third Lake Partners closed on the 54-acre WestShore Plaza site for approximately $135 million and subsequently filed plans to rezone the property into 14 independent development blocks, unlocking a program that could ultimately include 1,765 residential units, 902,000 square feet of retail, 500,000 square feet of office and medical office, and a 240-room hotel. A few blocks away, Cardinal Point Management is planning to demolish a 1973-era Ramada hotel at 1200 N. West Shore Blvd. and replace it with 398 apartments and 7,500 square feet of street-level retail. Two major properties, two simultaneous conversion projects, one corridor. This guide covers what both projects mean for investors currently active in Westshore and for the tenants who lease space there.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is the WestShore Plaza Redevelopment Plan?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          WestShore Plaza opened in 1967, making it one of Tampa&apos;s oldest enclosed regional malls. By the time Third Lake Partners acquired it in mid-2026, the mall had been declining for years — with store closures running at roughly five for every one new opening. The 54-acre site, located at the intersection of West Shore Boulevard and Kennedy Boulevard, sits in the heart of Tampa&apos;s most established commercial submarket, immediately adjacent to major office towers, direct airport access via the Westshore Airport Connector, and the I-275/Kennedy interchange. The location is genuinely excellent; the aging retail format had simply become the wrong product for it.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The redevelopment vision that Third Lake inherited was shaped under the prior owner, Washington Prime Group, which worked with the City of Tampa on entitlements before the sale. Those entitlements — approved before Third Lake&apos;s acquisition — total more than 8.1 million square feet of development rights across the site. Third Lake&apos;s current filing does not seek to increase those rights; it asks to redistribute them across 14 individually phased development blocks. That structure matters for investors and tenants: it means different portions of the site can break ground, deliver, and operate independently. The first blocks to develop could be delivering residential and street-level retail while other portions of the site still house the existing mall or surface parking lots.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The approved program includes up to 1,765 residential units — a substantial addition of housing density to a district that has historically been dominated by office and retail. It also includes approximately 902,000 square feet of retail and 500,000 square feet of office and medical office, the latter reflecting BayCare&apos;s ongoing expansion of healthcare facilities in the Westshore area. The 240-room hotel component rounds out what would become, in effect, a self-contained mixed-use district on the former mall footprint.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What Third Lake has not announced: any specific demolition timeline, phasing schedule, or groundbreaking date for the first development block. Officials have not confirmed a start date. This is not unusual for a project of this complexity and scale — entitlement, design, and financing for the first phase must be completed before any construction activity begins. Investors and tenants should plan on a multi-year development timeline with meaningful uncertainty in the near term.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Two Major Westshore Redevelopments Happening at the Same Time?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The simultaneous redevelopment activity in Westshore reflects a convergence of factors that have been building for several years. First, the structural case for adding residential density to the Westshore corridor has strengthened. Westshore is already Tampa&apos;s largest office submarket — with consistently tight vacancy and record asking rents — but it has functionally zero walkable housing inventory. Residents of the metro who work in Westshore drive in from South Tampa, Hyde Park, Channelside, or the suburbs. Adding thousands of residential units directly adjacent to the office towers creates a live-work dynamic that the submarket currently lacks entirely, and that dynamic is what institutional capital is underwriting. For a broader look at how Westshore&apos;s office market is performing as this transformation begins, our{" "}
          <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore Tampa office market guide</Link>{" "}
          covers the leasing and investment picture in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Second, the aging hotel and mall assets in Westshore have reached end-of-useful-life as their current uses while simultaneously representing some of the most valuable land in the Tampa metro on a per-acre basis. A 1973 Ramada hotel on a 4.3-acre parcel at the intersection of West Shore Boulevard and I-275 is not worth preserving as a hotel — it is worth demolishing and replacing with highest-and-best use. The same logic applies at a larger scale to the WestShore Plaza site. Both owners ran the analysis and reached the same conclusion at approximately the same point in the cycle.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Third, Tampa Bay&apos;s population growth gives both projects credible demand underwriting. The metro has absorbed net positive in-migration consistently since 2020, and that in-migration is the demand tailwind that makes adding 1,765 residential units to Westshore and 398 apartments to the hotel site a plausible, not speculative, thesis. Developers who can point to a growing population and a demonstrable housing undersupply have a stronger financing story than developers underwriting against a flat or declining demographic backdrop. Tampa Bay provides that story today — and both projects are pricing it in.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Westshore Transformation Mean for Current Retail Tenants?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For retail tenants currently operating inside WestShore Plaza, the situation demands proactive planning. The 14-block phased structure means that individual areas of the mall could face demolition on a rolling, unpredictable schedule. Mall redevelopment leases typically include landlord termination rights tied to the redevelopment program — meaning that a tenant who signs a new five-year lease today may have significantly less certainty about year three or four than the contract language alone implies. Store closures in WestShore were already outpacing openings; with the redevelopment plan now filed, the trajectory for the remaining tenant base is clear.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The strategic imperative for affected tenants is to begin exploring alternative locations now, before other displaced tenants enter the market simultaneously. Westshore&apos;s retail vacancy is already tight — the submarket benefits from the same supply constraints as the broader Tampa Bay retail market, which held below 4% vacancy metro-wide through Q2 2026. Tenants who wait until they receive a termination notice will compete for a limited pool of available space against other tenants who received the same notice at the same time. That is the worst possible negotiating position.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The good news for well-capitalized retailers: the Westshore corridor beyond WestShore Plaza itself has quality strip retail, outparcel buildings, and mixed-use storefronts. South Tampa retail along Kennedy Boulevard, Howard Avenue, and South Dale Mabry also represents logical relocation territory for tenants serving the Westshore-area customer base. Businesses considering a relocation strategy benefit from working with a broker who can identify available options before they hit the open market — exactly the kind of transaction where local market relationships produce better outcomes than searching CoStar alone. For a broader read on Tampa Bay retail availability, see our{" "}
          <Link href="/blog/tampa-bay-retail-market-q3-2026" className="text-accent underline">Tampa Bay retail market Q3 2026 update</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Should Westshore Office Tenants Think About the Redevelopment?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For office tenants in Westshore&apos;s towers — the established Class A buildings like SkyCenter One, Wells Fargo Center, and the other high-rises that make Westshore Tampa&apos;s largest office submarket — the WestShore Plaza transformation is a net positive signal over the medium term, and a source of near-term inconvenience to plan around.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The medium-term positive: adding 1,765 residential units directly adjacent to Westshore&apos;s office towers fundamentally changes the character of the district. It creates an amenity-rich, walkable mixed-use environment where office tenants can recruit employees who want to live close to work, walk to restaurants and retail at lunch, and access a range of services without a car. That environment is what corporate tenants have been paying a premium for in Water Street Tampa and Midtown Tampa — and it is coming to Westshore. Office buildings that have been competing primarily on rent and TI allowances will be competing on location quality, and the gap between Westshore and secondary office corridors will widen.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The near-term consideration: multi-year construction activity on a 54-acre site generates noise, dust, traffic rerouting, and visual disruption that affects the surrounding blocks. Office tenants with lease expirations in the next 18 to 36 months should model their renewal negotiations with this context in mind — a construction-adjacent location warrants meaningful concessions from landlords who would otherwise hold firm on rate. Our{" "}
          <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore office market analysis</Link>{" "}
          provides the submarket-level detail on where Westshore rents and vacancies stand today.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Investment Opportunities Does the Westshore Transformation Create?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For commercial real estate investors, two simultaneous major redevelopments in a single corridor create several distinct opportunity sets that play out on different timelines.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Adjacent retail and strip center investment.</strong> When the WestShore Plaza redevelopment begins displacing tenants and absorbing available inline retail space, the vacuum will temporarily increase demand for quality strip retail and outparcel buildings in the surrounding corridor. Retail investors who own or acquire well-located strip retail within one mile of the WestShore Plaza site are positioned to capture that displaced-tenant demand. Vacancy in this segment is already tight; it will tighten further as the redevelopment progresses.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Land banking near the redevelopment footprint.</strong> The precedent is clear from Water Street Tampa: land values adjacent to a major mixed-use development appreciate as the project delivers density, retail, and residential activity. Investors with patient capital and the ability to hold through the construction phase can acquire sites near the WestShore Plaza footprint at prices that have not yet fully priced in the corridor transformation. This is a higher-conviction, longer-duration trade than stabilized income property — but the upside on land near a delivering mixed-use district is meaningfully higher than buying into an already-transformed corridor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Multifamily in the Westshore area.</strong> The planned addition of 1,765 residential units at WestShore Plaza and 398 units at the former Ramada site validates residential demand in a corridor that has historically had almost no multifamily inventory. Multifamily investors looking at Westshore area acquisitions can point to this entitlement activity as market validation of the residential use case. For the broader multifamily picture across Tampa Bay, our{" "}
          <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market guide</Link>{" "}
          covers where cap rates and fundamentals stand today.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Existing Westshore office as a hold or add.</strong> The 500,000 square feet of planned office and medical office inside the WestShore Plaza redevelopment will not deliver for several years — meaning the corridor&apos;s existing office inventory faces no new competition in the near to medium term. Investors in existing Westshore office assets benefit from that supply constraint, plus the corridor upgrade effect as the mixed-use development delivers. The office market in Westshore already shows record rents and sub-16% vacancy; the redevelopment adds a long-term tailwind to a market that is already performing well. For more detail on the Westshore CRE market, sellers of businesses looking for fast capital can also explore options at{" "}
          <Link href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">FastSellEasySale.com</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does the Westshore Redevelopment Fit Into Tampa Bay&apos;s Broader CRE Story?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The WestShore Plaza transformation is one chapter in a larger story about Tampa Bay&apos;s built environment catching up with its economic and demographic growth. The metro has been adding population and employment faster than its commercial and residential inventory has expanded for the better part of a decade. The result is a market where retail vacancy is below 4%, industrial vacancy is stabilizing after a supply wave, and even suburban office is outperforming the national trend. New mixed-use development in established corridors — whether at WestShore, Water Street, the Heights, or Midtown Tampa — is the market&apos;s response to that demand signal: more density, more residential units, more walkable retail, and a built environment that matches the population it is trying to attract and retain.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a cross-sector view of Tampa Bay&apos;s commercial real estate entering Q4 2026 — industrial, retail, office, and multifamily together — our{" "}
          <Link href="/blog/tampa-bay-cre-market-outlook-q4-2026" className="text-accent underline">Tampa Bay CRE market outlook for Q4 2026</Link>{" "}
          provides the full picture. For investors researching specific transaction types — sale-leasebacks, 1031 exchanges, NNN investments — the related reading below covers the categories most relevant to the Westshore corridor context.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The WestShore District&apos;s transformation is a multi-year project, not a near-term catalyst. Investors and tenants who understand that timeline — and who position themselves ahead of the phases rather than reacting to them — will extract the most value from what is shaping up to be one of Tampa Bay&apos;s most significant commercial real estate stories of the decade.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line: What Should Investors and Tenants Do Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For retail tenants in WestShore Plaza: begin your relocation search now, before the displacement wave is fully in motion. For office tenants in surrounding towers: factor construction context into your upcoming lease negotiations and use it as leverage. For investors: the adjacent retail, land banking, and multifamily angles are the most actionable near-term plays in a corridor that is clearly in transformation. For everyone tracking Tampa Bay CRE: the WestShore District is adding a major new chapter to a market that was already one of the most compelling in the country for commercial real estate — and the investors and tenants who navigate it well will need local market expertise, not just headlines.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay&apos;s Westshore corridor and surrounding submarkets at REMAX Collective, I help investors identify acquisition targets and tenants negotiate leases in exactly this kind of transitional market. Whether you are a business owner assessing your options in WestShore or an investor evaluating adjacent opportunities, reach out to discuss the specifics.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            WestShore Plaza Redevelopment — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial markets, including the Westshore Business District and surrounding submarkets. He advises tenants on leasing strategy and investors on acquisitions across all major property types. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Navigating the Westshore District Transformation?"
        body="The WestShore Plaza redevelopment will reshape the Westshore corridor over the next several years — creating both risk for existing tenants and opportunity for investors who understand the timeline. With 23+ years of Tampa Bay commercial real estate experience at REMAX Collective, I help clients position ahead of market shifts like this one. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
