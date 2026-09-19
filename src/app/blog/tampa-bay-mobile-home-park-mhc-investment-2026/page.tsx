import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import Image from "next/image";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay Mobile Home Park & MHC Investment 2026
 * Manufactured housing communities are emerging as one of Florida's
 * most resilient CRE asset classes amid an affordability crisis.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Mobile Home Park & MHC Investment 2026 | HenCRE",
  description:
    "Manufactured housing communities are delivering 5.5%–11% annual lot rent growth in Florida and trading at 4.5%–6% cap rates. Here is what Tampa Bay investors need to know about MHC commercial real estate in 2026.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-mobile-home-park-mhc-investment-2026" },
  openGraph: {
    title: "Tampa Bay Mobile Home Park & MHC Investment 2026",
    description:
      "Florida lot rents are growing faster than almost any other asset class. Tampa Bay investors are discovering that manufactured housing communities combine affordable-housing demand, low capex, and institutional-grade income. Here is the full picture.",
    url: "https://hencre.com/blog/tampa-bay-mobile-home-park-mhc-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Neat rows of manufactured homes in a Florida community",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Are mobile home parks a good commercial real estate investment in Tampa Bay?",
    answer:
      "Manufactured housing communities (MHCs) have proven to be one of the most resilient commercial real estate asset classes in Florida, supported by durable demand and structurally limited new supply. In Tampa Bay specifically, the combination of rapid population growth, a severe housing affordability crisis, and Florida's consistently strong lot rent growth makes MHCs a compelling investment consideration. Lot rents in premium Tampa Bay-area communities have exceeded $900 per month, and Florida statewide lot rent growth has run between 5.5% and 11% annually depending on submarket. The asset class is not without complexity — resident relations, regulatory scrutiny on rent increases, and infrastructure capital requirements deserve serious underwriting — but the income fundamentals are difficult to match in most other commercial real estate categories.",
  },
  {
    question: "What cap rates are manufactured housing communities trading at in Florida in 2026?",
    answer:
      "Well-located manufactured housing communities in Florida are trading at cap rates between 4.5% and 6.0% in 2026, reflecting the institutional demand that has entered the asset class over the past decade. Cap rates in the lower end of that range apply to large, amenity-rich communities with strong lot rent history and long waitlists in high-demand metros — including the Tampa Bay area. More rural locations, communities with significant deferred maintenance, or parks with a high percentage of park-owned homes (rather than tenant-owned homes on leased lots) typically command higher cap rates reflecting the additional operational complexity and capital requirements. As with all net lease and income-producing real estate, the spread between the going-in cap rate and your financing cost determines the leverage economics, and it is worth reviewing current commercial mortgage rate conditions alongside any acquisition analysis.",
  },
  {
    question: "How does the Florida manufactured housing law affect MHC investors and owners?",
    answer:
      "Florida has one of the most specific regulatory frameworks for manufactured housing communities in the United States, codified in Chapter 723 of the Florida Statutes (the Florida Mobile Home Act). Key provisions that directly affect investors include: lot rent increase notification requirements (45 days advance written notice for most increases); a statutory right for resident associations to purchase the community if the owner decides to sell; required disclosure of lot rent history at lease signing; and specific rules governing utility pass-throughs and infrastructure cost recovery. These are not merely technical compliance matters — a prospective buyer who does not understand the Chapter 723 framework going into a transaction may encounter significant surprises during due diligence or after closing. Engaging a Florida commercial real estate attorney with manufactured housing experience is not optional for MHC acquisitions; it is a baseline requirement before making an offer.",
  },
  {
    question: "What is the difference between a tenant-owned home (TOH) community and a park-owned home (POH) community?",
    answer:
      "This distinction is one of the most important structural differences in manufactured housing investing. In a tenant-owned home (TOH) community — also called a land-lease community — residents own their manufactured home outright and lease only the lot from the park owner. The park owner's responsibility is lot maintenance, common-area upkeep, and utilities; the resident bears all maintenance costs for the physical home. This is the institutional standard for MHC investing because it minimizes the park owner's capital requirements, eliminates the management complexity of maintaining individual homes, and creates sticky tenancy — moving a manufactured home is expensive and logistically difficult, so TOH residents rarely leave, even when lot rents increase. Park-owned home (POH) communities, where the operator also owns the physical homes and rents them to residents, carry higher revenue per site but require significantly more capital, maintenance staffing, and management infrastructure. Most institutional investors — and most experienced private MHC investors — prefer TOH communities or actively convert POH inventory to tenant-owned homes over time.",
  },
  {
    question: "How do I find mobile home parks for sale in Tampa Bay?",
    answer:
      "Mobile home park and manufactured housing community transactions in Tampa Bay rarely hit the public MLS. Most deals are structured through direct owner outreach, commercial broker networks, and specialized MHC listing platforms. Because the asset class has attracted significant institutional capital over the past decade, many park owners who might have sold quietly five years ago are now receiving proactive acquisition inquiries from private equity firms, regional syndication groups, and REITs. If you are a seller, this competitive buyer landscape is favorable — but navigating it without a commercial broker who understands MHC deal structure, valuation methodology, and Florida's Chapter 723 requirements can mean leaving money on the table or accepting terms that create post-closing problems. If you are a buyer, building direct relationships with owners — including through targeted outreach to communities not listed for sale — is typically more productive than waiting for marketed deals, which often represent assets with known challenges or seller price expectations that have already been filtered through multiple rounds of bidding.",
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
          name: "Tampa Bay Mobile Home Park & MHC Investment 2026",
          item: "https://hencre.com/blog/tampa-bay-mobile-home-park-mhc-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Mobile Home Park & MHC Investment 2026",
      description:
        "Manufactured housing communities are delivering 5.5%–11% annual lot rent growth in Florida and trading at 4.5%–6% cap rates. Here is what Tampa Bay investors need to know about MHC commercial real estate in 2026.",
      datePublished: "2026-09-19",
      dateModified: "2026-09-19",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-mobile-home-park-mhc-investment-2026",
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
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "A framework for evaluating income-producing CRE including manufactured housing communities.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Where net lease cap rates are trading across Tampa Bay — context for MHC valuation.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to defer capital gains when selling a mobile home park or other investment property.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate in Tampa Bay",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "Financing options for commercial real estate acquisitions including manufactured housing.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to expect at each phase of a commercial transaction — essential reading before acquiring an MHC.",
  },
  {
    title: "Tampa Bay Self-Storage CRE Investment",
    href: "/blog/tampa-bay-self-storage-cre-investment-2026",
    description: "Another alternative commercial asset class that performs well in Tampa Bay's high-growth environment.",
  },
  {
    title: "Florida Insurance Crisis & Investment Properties",
    href: "/blog/florida-insurance-crisis-investment-properties",
    description: "How Florida's property insurance market affects the underwriting of manufactured housing communities.",
  },
  {
    title: "Why Tampa Bay CRE Is Booming",
    href: "/blog/why-tampa-bay-cre-is-booming",
    description: "The macro population and economic drivers sustaining demand for manufactured housing in the region.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "First-principles framework for evaluating any income-producing commercial property.",
  },
  {
    title: "Hillsborough County Commercial Real Estate",
    href: "/markets/hillsborough",
    description: "Market overview for the county that includes some of Tampa Bay's most active MHC submarkets.",
  },
];

export default function TampaBayMobileHomeParkMHCPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay Mobile Home Park & MHC Investment 2026", href: "/blog/tampa-bay-mobile-home-park-mhc-investment-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&fit=crop"
        title="Tampa Bay Mobile Home Park & MHC Investment 2026"
        subtitle="Lot rents growing at up to 11% annually. Cap rates between 4.5% and 6%. Demand driven by Florida's housing affordability crisis. Here is what Tampa Bay investors need to know about manufactured housing communities."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          For most of commercial real estate&apos;s history, mobile home parks and manufactured housing communities occupied an overlooked corner of the investment universe — too unglamorous for institutional capital, too operationally intensive for passive investors, and too politically charged for anyone who wanted to avoid controversy. That narrative has changed materially over the past decade, and in Florida — where a housing affordability crisis has pushed tens of thousands of residents toward manufactured housing as the most viable path to stable, affordable shelter — the asset class has attracted serious attention from private investors, regional syndicators, and institutional capital alike. In Tampa Bay specifically, where lot rents are growing near the top of the state range and population growth is sustaining demand at a pace few markets can match, manufactured housing communities deserve consideration as a legitimate CRE investment category.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is Manufactured Housing Considered a Commercial Real Estate Asset Class?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Manufactured housing communities — also called mobile home parks, land-lease communities, or MHCs — are commercial real estate investments in which the owner holds the land and infrastructure while residents own their individual manufactured homes and lease the underlying lot. The park owner does not own the homes themselves (in the most institutionally preferred structure); the owner&apos;s income comes entirely from lot rent, utility pass-throughs, and common-area fees.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This structure gives MHCs several characteristics that distinguish them from nearly every other commercial real estate category. Tenant turnover is structurally suppressed: moving a manufactured home requires a specialized transport company, costs between $5,000 and $15,000, and may result in the home&apos;s depreciation or damage — making the effective switching cost for residents extremely high. As a result, MHC operators routinely report annual occupancy rates of 90% to 97%, with average tenancy duration measured in years rather than months. The landlord&apos;s capital obligations are comparatively modest — maintaining roads, utilities, and common areas — rather than maintaining the physical structures themselves. And demand is structurally supported by the housing affordability crisis, which has made manufactured housing one of the few remaining paths to non-subsidized affordable shelter for working-class and fixed-income households across Florida.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">what makes a good commercial investment</Link> starts with durable demand and limited new supply — and manufactured housing communities check both boxes in a way that very few asset classes do in 2026. For broader context on the macro forces driving Tampa Bay&apos;s real estate market, see our overview of <Link href="/blog/why-tampa-bay-cre-is-booming" className="text-accent underline">why Tampa Bay CRE is booming</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Driving Manufactured Housing Demand in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s housing affordability crisis is the most direct driver of MHC demand in the region. Median home prices in Hillsborough County have remained well above the historical affordability threshold relative to local incomes, and apartment rents — even after the modest corrections of 2024 and 2025 — remain out of reach for a substantial portion of the region&apos;s workforce. Manufactured housing fills a gap in the housing continuum that no other product type serves at scale: it offers stable, private shelter at lot rents that, even after recent increases, remain substantially below market-rate apartment rents for comparable bedroom counts.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa&apos;s population growth of approximately 1.9% year-over-year is adding households to this demand pool continuously. Retirees relocating from higher-cost Northern markets, working-class households priced out of conventional rental housing, and workers in Tampa Bay&apos;s logistics, healthcare, and service industries — all represent demand segments for quality manufactured housing that is not being met by new supply. New MHC development in Florida is essentially nonexistent: the entitlement process is slow, land costs have risen dramatically, and community opposition to manufactured housing is pervasive. The result is a supply constraint that industry analysts describe as structural rather than cyclical — conditions are not going to produce a wave of new MHC supply that would compress existing operators&apos; rents.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Florida is the hottest lot rent market in the country by most measures, with lot rents growing at 5.5% to 11% annually depending on submarket — with coastal metros like Tampa driving the upper end of that range. Average lot rents in premium Florida communities now exceed $900 per month in many markets. Even at those levels, manufactured housing remains the most affordable non-subsidized rental option available to many Tampa Bay households.
        </p>

        <div className="my-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80"
            alt="Well-maintained manufactured home community in Florida with landscaping and paved roads"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">Modern manufactured housing communities bear little resemblance to the aging &ldquo;trailer parks&rdquo; of popular imagination — quality communities command premium lot rents and strong institutional demand.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Investment Returns on Tampa Bay Mobile Home Parks?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Well-located manufactured housing communities in Florida are trading at cap rates between 4.5% and 6.0% in 2026 — reflecting both the income quality of the asset class and the institutional competition for available deals. The lower end of that range applies to large, well-maintained communities in high-demand submarkets like Hillsborough, Pinellas, and Pasco Counties, with long occupancy histories, low deferred maintenance, and strong waitlists. For context on how those cap rates compare across other net lease asset types in Tampa Bay, see our guide to <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rates in 2026</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most active deal segment in Florida MHC transactions is the $1 million to $10 million mid-market, where private investors and syndication groups are the primary buyers. Communities in this range typically have 40 to 150 sites, may include some mix of tenant-owned and park-owned homes, and represent an entry point accessible to accredited investors who cannot compete for the institutional-scale assets that private equity firms and public REITs like Sun Communities and Equity LifeStyle Properties are targeting. Florida is consistently one of the three most active states nationally for MHC transactions, and Tampa Bay is at the center of that activity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors evaluating the return profile, the framework in our guide to <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">how to calculate commercial property ROI</Link> applies directly. Key metrics include effective gross income (lot rents plus utility income minus vacancy), net operating income after management, maintenance, and infrastructure costs, and the leverage profile available through commercial financing. <Link href="/blog/sba-504-loan-commercial-real-estate-tampa-bay" className="text-accent underline">SBA 504 financing</Link> is available for owner-operator MHC acquisitions that meet the small business eligibility criteria — an option worth exploring for smaller parks where the buyer intends to manage operations directly.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Key Risks in Manufactured Housing Community Investment?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The investment case for MHCs is compelling, but several risks deserve direct engagement in any underwriting analysis:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Regulatory risk.</strong> Florida&apos;s Chapter 723 (the Florida Mobile Home Act) imposes specific requirements on lot rent increases, sale notices, and resident rights. Cities and counties have shown increasing willingness to impose additional restrictions on MHC conversions and rent increases in response to community advocacy. Investors should have a Florida commercial real estate attorney review the full regulatory framework before acquisition — this is not a box-checking step; it is material to underwriting.</li>
          <li><strong>Infrastructure capital requirements.</strong> Older communities — many of which were developed in the 1960s through 1980s — may have aging water, sewer, and road infrastructure that requires significant capital investment. Deferred maintenance on community infrastructure is difficult to recover from residents and is often a major source of post-closing surprise for first-time MHC buyers. Environmental due diligence, including a Phase I and potentially Phase II ESA, is essential.</li>
          <li><strong>Insurance costs.</strong> Florida&apos;s property insurance crisis affects manufactured housing communities as acutely as any other real estate category, and in some cases more so — windstorm coverage for manufactured housing carries higher per-unit premiums than site-built structures in coastal zones. Underwrite insurance costs conservatively and verify actual coverage availability before closing. Our coverage of the <Link href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">Florida insurance crisis and investment properties</Link> provides useful context.</li>
          <li><strong>Park-owned home complexity.</strong> Communities with a significant percentage of park-owned homes carry operational complexity and capital requirements that change the investment profile materially. Converting POH inventory to tenant-owned homes is a value-add strategy pursued by many institutional operators, but the execution timeline and cost require careful underwriting.</li>
          <li><strong>Reputation and political risk.</strong> The MHC industry has faced sustained public and legislative scrutiny around rent increases and the displacement of long-term residents. Operators who manage communities with a long-term ownership mindset — investing in infrastructure, maintaining community standards, and communicating clearly with residents — are better positioned to navigate the regulatory environment than those pursuing rapid rent maximization without commensurate investment.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Find Mobile Home Parks for Sale in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          MHC transactions in Tampa Bay rarely appear on the public MLS. Most deals are sourced through direct owner outreach, commercial broker networks, and specialized manufactured housing transaction platforms. The competitive landscape has intensified as institutional capital has entered the space — park owners in high-demand submarkets are increasingly receiving unsolicited acquisition inquiries from private equity firms and REITs before they ever consider listing a property.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For buyers, this means that waiting for marketed listings is rarely the best strategy. Building direct relationships with community owners — through targeted outreach, referrals from Florida commercial real estate attorneys and accountants who serve MHC owners, and networking within the manufactured housing industry — is how most successful acquisitions are sourced in this market. A commercial broker with active relationships in the Tampa Bay MHC community can accelerate that process significantly.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For sellers who own a manufactured housing community in <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>, <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link>, or <Link href="/markets/pasco" className="text-accent underline">Pasco</Link> County and are considering an exit, the current buyer competition means you may have more leverage than you realize — but only if your property is positioned correctly and marketed to the right buyer pool. Owners who want to sell quickly and without the complexity of a formal listing process may also find value in exploring off-market cash purchase options through services like <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Fast Sell Easy Sale</a>, which connects sellers of commercial real estate and land with cash buyers across Tampa Bay.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For sellers who want to maximize proceeds and preserve tax efficiency, a <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link> can allow you to defer capital gains on an MHC sale and reinvest into a different commercial property — an option worth exploring with your tax advisor well before you execute any sale agreement.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line for Tampa Bay MHC Investors</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Manufactured housing communities in Tampa Bay sit at the intersection of two powerful forces: a structural housing affordability crisis that is unlikely to resolve in the near term, and a supply constraint that makes it nearly impossible to build meaningful new MHC capacity. That combination — durable demand, limited new competition, and an operational model that suppresses tenant turnover — produces the kind of income resilience that commercial real estate investors consistently seek but rarely find.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The asset class is not without complexity. The Florida regulatory framework, the infrastructure capital requirements of older communities, and the reputational dynamics of operating affordable housing in a politically charged environment all require careful navigation. But for investors who approach MHC acquisitions with the same rigor they would apply to any other commercial real estate investment — thorough <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence</Link>, appropriate legal and tax counsel, and a realistic operational plan — Tampa Bay&apos;s manufactured housing market offers one of the more compelling risk-adjusted income profiles in the region&apos;s commercial real estate landscape in 2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience serving all 67 Florida counties from offices in Tampa, Largo, and Brandon, I work with investors across <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>, <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link>, and <Link href="/markets/pasco" className="text-accent underline">Pasco</Link> Counties who are evaluating manufactured housing communities alongside other commercial investment categories. If you are a buyer researching Tampa Bay MHCs, a seller considering your exit options, or an investor trying to understand where this asset class fits in your portfolio, let&apos;s have that conversation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
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
              Barrett has 23+ years of real estate experience serving all 67 Florida counties from offices in Tampa, Largo, and Brandon. He specializes in commercial real estate transactions including investment sales, net lease properties, and alternative asset classes.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Buying or Selling a Mobile Home Park in Tampa Bay?"
        body="Manufactured housing communities require specialized deal structure and Florida regulatory knowledge. Whether you are sourcing an acquisition or evaluating your exit options, let&apos;s talk through the market."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
