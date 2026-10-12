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
 * Blog: St. Pete EDGE District CRE 2026
 * Edge Collective Phase 2 ($125M construction loan, 330 units, 19K SF
 * retail) signals developer and lender confidence returning to St. Pete
 * mixed-use. Covers what it means for CRE investors and tenants.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "St. Pete EDGE District Commercial Real Estate 2026 | HenCRE",
  description:
    "PTM Partners secured a $125M construction loan for the 20-story Edge Collective Phase 2 in St. Petersburg's EDGE District — 330 apartments and 19,000 SF of ground-floor retail. Here's what it means for commercial real estate investors and tenants in 2026.",
  alternates: { canonical: "https://hencre.com/blog/st-pete-edge-district-cre-2026" },
  openGraph: {
    title: "St. Pete EDGE District: What the $125M Edge Collective Phase 2 Means for CRE Investors",
    description:
      "A 20-story, 330-unit mixed-use tower just secured $125M in construction financing in St. Pete's EDGE District. What does it mean for retail tenants, neighboring property values, and investors watching Tampa Bay's secondary urban core?",
    url: "https://hencre.com/blog/st-pete-edge-district-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "St. Petersburg Florida urban mixed-use district at dusk",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the EDGE District in St. Petersburg, Florida?",
    answer:
      "The EDGE District is a roughly half-mile stretch along Central Avenue between roughly 9th and 13th Streets in St. Petersburg, Florida. It emerged over the past decade as one of the most dynamic mixed-use corridors in the Tampa Bay metro — an eclectic mix of independent restaurants, craft breweries, boutique retail, art studios, and creative office tenants that drew foot traffic and developer attention well before the current construction wave. The district's name stands for 'Emerging District for Growth and Enterprise,' a designation that reflects how city planners and the real estate community view it: not as a finished product but as an ongoing, intentional transformation of a historically industrial urban corridor into a live-work-play neighborhood. From a commercial real estate perspective, the EDGE District matters because it represents the urban density story that institutional developers now see as viable in St. Pete — a market that was long dismissed as a secondary submarket compared to Tampa but has materially outperformed expectations on multifamily absorption, retail vitality, and office-user demand since 2020.",
  },
  {
    question: "What is Edge Collective Phase 2 and why does the $125M financing matter?",
    answer:
      "Edge Collective Phase 2 is a 20-story mixed-use tower being developed by PTM Partners in St. Petersburg's EDGE District, consisting of 330 apartments and approximately 19,000 square feet of ground-floor retail. In early October 2026, PTM Partners closed a $125 million, three-year floating-rate construction loan arranged by Berkadia, with an affiliate of General Investment and Development (GID) providing the debt. Construction is targeted for completion in 2028 to 2029. The financing matters for two reasons. First, a $125 million construction loan in today's market is a signal of lender confidence — not just in PTM Partners as a sponsor, but in St. Petersburg as a market. GID and Berkadia are institutional-grade counterparties who do not deploy that level of capital into a market they are uncertain about. Second, the deal pairs with Phase 1 — the Moxy St. Petersburg hotel, a 163-key Marriott-branded property that opened in 2024 — to create a genuine mixed-use campus in the EDGE District. A hotel, a multifamily tower, and ground-floor retail in a single walkable block represents exactly the density that urban commercial real estate investors have been trying to replicate across secondary Sun Belt cities for the past five years.",
  },
  {
    question: "What does the Edge Collective development mean for retail tenants in the EDGE District?",
    answer:
      "For retail tenants considering the EDGE District, the Edge Collective Phase 2 announcement should accelerate their timeline. The delivery of 330 apartment units and a hotel in close proximity to Central Avenue adds a meaningful, captive customer base to an already active retail corridor. The 19,000 square feet of ground-floor retail in the Edge Collective tower itself will compete for some tenant categories, but the broader effect is additive: more residents and hotel guests generate demand for food and beverage, personal services, fitness, and experiential retail that benefits the entire corridor. The cautionary note for tenants is that the EDGE District was already experiencing rent pressure before Phase 2 broke ground. Vacancy along Central Avenue in the EDGE District has been single-digit for the better part of three years, and asking rents for quality ground-floor retail space have risen in step with the district's profile. The window to secure below-market long-term leases in the EDGE District — while it existed at all — has largely closed. Tenants who want a presence in this corridor should expect to pay market rate and should work with a tenant rep broker who has existing relationships with EDGE District landlords.",
  },
  {
    question: "Is St. Petersburg commercial real estate a good investment compared to Tampa in 2026?",
    answer:
      "St. Petersburg has quietly closed the gap with Tampa as a commercial real estate investment market over the past four to five years, and in certain asset classes it is now a peer rather than a secondary alternative. The Pinellas County unemployment rate has tracked within 30 to 50 basis points of Hillsborough County's throughout 2026, and population growth — while modestly slower than in the high-growth suburban corridors of Pasco and Manatee — has sustained consumer demand across retail, multifamily, and hospitality. The EDGE District is the highest-profile example of St. Pete's urban investment story, but it is not the only one: Downtown St. Petersburg has attracted institutional-grade multifamily development, the Pier District has drawn hospitality investment, and the medical corridor anchored by Bayfront Health has generated office and medical office demand. For investors comparing Tampa and St. Pete, the relevant variable is usually product type. Tampa's Westshore Business District and Downtown Tampa offer more office product, larger industrial corridors, and a deeper NNN retail transaction market. St. Pete is stronger for urban multifamily, experiential retail, and boutique mixed-use — the asset classes where walkability and urban amenity premiums are most pronounced. CBRE ranked Tampa as the seventh-most-targeted commercial real estate investment market in the United States for 2026, and the investment case covers both sides of the bay.",
  },
  {
    question: "How should CRE investors think about mixed-use development as an investment in Tampa Bay?",
    answer:
      "Mixed-use development — projects that combine residential, retail, hotel, and office uses on a single site — has been the dominant development form in Tampa Bay's urban cores for the past decade, and the Edge Collective project is a current example of why. The investment thesis for mixed-use is that density creates a self-reinforcing demand loop: residents generate retail spending, retail generates foot traffic, foot traffic makes the neighborhood more desirable to the next wave of residents. That loop is proven in the Water Street Tampa corridor, the Channelside district, and now the EDGE District in St. Pete. For investors who do not develop ground-up projects, mixed-use development matters because it changes the value of adjacent and nearby commercial properties. A new 330-unit residential tower with ground-floor retail drives rent growth and reduces vacancy for the existing retail, office, and mixed-use properties within walking distance. The best positioned investors in St. Pete's EDGE District right now are those who acquired multitenant retail or mixed-use buildings along Central Avenue two to four years ago at pre-development pricing and are now watching those assets reprice upward as the district builds density. The challenge entering late 2026 is that the density premium is largely priced in for the most visible EDGE District properties — the opportunity, if there is one, is in the transitional blocks immediately adjacent to the established corridor.",
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
          name: "St. Pete EDGE District CRE 2026",
          item: "https://hencre.com/blog/st-pete-edge-district-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "St. Pete's EDGE District: What the $125M Edge Collective Phase 2 Means for CRE Investors and Tenants",
      description:
        "PTM Partners secured a $125M construction loan for a 20-story mixed-use tower in St. Petersburg's EDGE District in October 2026. Here is what it means for commercial real estate investors, retail tenants, and the broader St. Pete market.",
      datePublished: "2026-10-10",
      dateModified: "2026-10-12",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/st-pete-edge-district-cre-2026",
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
    title: "St. Petersburg Commercial Real Estate 2026",
    href: "/blog/st-petersburg-commercial-real-estate-2026",
    description: "The full St. Pete market overview — office, retail, multifamily, and industrial — for investors and tenants.",
  },
  {
    title: "St. Petersburg Office Market 2026",
    href: "/blog/st-petersburg-office-market-2026",
    description: "How St. Pete's office market is performing as urban demand reshapes the downtown and corridor submarkets.",
  },
  {
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description: "Supply absorption, rent trends, and investment outlook for Tampa Bay apartments heading into year-end.",
  },
  {
    title: "Tampa Bay Experience & Entertainment CRE 2026",
    href: "/blog/tampa-bay-experience-entertainment-cre-2026",
    description: "How experiential retail and entertainment tenants are driving foot traffic and anchoring mixed-use districts.",
  },
  {
    title: "Tampa Mall Redevelopment: Mixed-Use CRE Guide 2026",
    href: "/blog/tampa-mall-redevelopment-mixed-use-2026",
    description: "The broader wave of mixed-use redevelopment reshaping Tampa Bay's largest retail sites.",
  },
  {
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "Where multifamily cap rates stand across Tampa Bay's urban and suburban submarkets in 2026.",
  },
  {
    title: "Tampa Bay Commercial Mortgage Rates 2026",
    href: "/blog/tampa-bay-commercial-mortgage-rates-2026",
    description: "Current construction and permanent financing conditions for CRE acquisitions and development across Tampa Bay.",
  },
  {
    title: "Tampa Bay Retail Market Q3 2026",
    href: "/blog/tampa-bay-retail-market-q3-2026",
    description: "Vacancy below 4%, rents rising — the supply-demand picture behind Tampa Bay retail's continued outperformance.",
  },
  {
    title: "North Pinellas: Dunedin & Tarpon Springs CRE 2026",
    href: "/blog/north-pinellas-dunedin-tarpon-springs-commercial-real-estate-2026",
    description: "How Pinellas County's northern corridor is evolving for commercial tenants and investors.",
  },
  {
    title: "Historic Gas Plant District: St. Pete CRE 2026",
    href: "/blog/historic-gas-plant-district-st-pete-cre-2026",
    description: "The massive Gas Plant District redevelopment and what it means for St. Pete commercial real estate.",
  },
];

export default function StPeteEDGEDistrictCRE2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "St. Pete EDGE District CRE 2026", href: "/blog/st-pete-edge-district-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1600&h=900&fit=crop"
        title="St. Pete's EDGE District and the $125M Edge Collective Phase 2"
        subtitle="PTM Partners just closed a $125 million construction loan for a 20-story mixed-use tower in St. Pete's most dynamic commercial corridor. Here is what it signals for the market — and what it means for retail tenants and CRE investors in 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          In early October 2026, PTM Partners closed a $125 million construction loan for the second phase of their Edge Collective mixed-use development in St. Petersburg&apos;s EDGE District. The deal — a three-year, floating-rate loan arranged by Berkadia and funded by an affiliate of General Investment and Development (GID) — finances a 20-story tower that will add 330 apartments and approximately 19,000 square feet of ground-floor retail to a corridor that has become one of the most closely watched urban commercial real estate stories on either side of Tampa Bay. For investors and tenants trying to read the signal in that transaction, this post breaks down what it means, why the EDGE District matters for commercial real estate, and how to position in a market that is moving faster than most underwriters anticipated.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the EDGE District and Why Does It Matter for Commercial Real Estate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The EDGE District — Emerging District for Growth and Enterprise — runs along Central Avenue between roughly 9th and 13th Streets in St. Petersburg. Over the past decade it evolved from a light-industrial and arts corridor into one of the most active mixed-use streets in the Tampa Bay metro: independent restaurants, craft breweries, boutique retail, creative office tenants, and a steady calendar of events that generate foot traffic on nights and weekends at a level most suburban corridors can only approximate.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          From a commercial real estate perspective, the district matters because it demonstrated something important about St. Petersburg as a market: urban density can work here. Unlike many secondary Sun Belt cities that have tried and failed to build genuine walkable mixed-use districts, the EDGE District achieved organic retail vitality before institutional developers arrived. That sequencing — grassroots district formation followed by capital investment — is the healthiest version of urban CRE development, and it is the reason that projects like Edge Collective are attracting $125 million in institutional construction debt rather than speculative developer equity hoping that amenities will follow.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context on the broader St. Pete commercial market that the EDGE District sits within, our{" "}
          <Link href="/blog/st-petersburg-commercial-real-estate-2026" className="text-accent underline">St. Petersburg CRE overview for 2026</Link>{" "}
          covers the full picture across office, retail, multifamily, and industrial. The EDGE District is the most prominent single example of the urban investment thesis, but it is not the only one.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Edge Collective Phase 2 and What Does the $125M Financing Signal?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Edge Collective Phase 2 is a 20-story mixed-use tower that PTM Partners is developing in partnership with St. Petersburg-based Echelon. The project will deliver 330 apartments above approximately 19,000 square feet of ground-floor retail, with construction targeted for completion in 2028 to 2029 depending on the source. The $125 million construction loan was arranged by Berkadia and provided by an affiliate of GID — both institutional counterparties whose participation confirms that this is not a speculative or undercapitalized venture.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Phase 1, the Moxy St. Petersburg hotel, opened in 2024 with 163 keys and established the Edge Collective brand in the EDGE District. A Marriott-affiliated hotel opening in a mixed-use development is itself a market signal: Marriott&apos;s brand standards require a minimum market confidence level before they license their flag to a project, and the Moxy brand specifically is designed for urban, walkable, experiential neighborhoods — exactly what the EDGE District has become.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The broader financing signal is as important as the project specifics. Institutional construction lenders pulled back from many multifamily projects in 2023 and 2024 as interest rates climbed and absorption uncertainty increased in supply-heavy Sun Belt markets. A $125 million construction loan closing in October 2026 — in St. Petersburg, on a project with a 2028 to 2029 completion — says that at least one major institutional lender is confident enough in St. Pete&apos;s multifamily fundamentals to deploy significant capital against a forward delivery. For investors tracking the broader{" "}
          <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market</Link>,{" "}
          that confidence is consistent with absorption data showing the 2024 and 2025 supply wave being worked through faster than expected.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Edge Collective Development Mean for Retail Tenants in the EDGE District?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Retail tenants considering the EDGE District need to understand that this development accelerates a trend that was already well underway: the addition of 330 apartment units and a hotel to a corridor that was already under-supplied in retail space means the demand-supply imbalance for street retail in the EDGE District will tighten further over the next two to three years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 19,000 square feet of new ground-floor retail in the Edge Collective tower will absorb some tenant demand that might otherwise have gone to existing buildings, but the net effect of the residential density addition will be positive for the corridor as a whole. More residents and hotel guests mean more consumer spending on food and beverage, fitness, personal services, and experiential retail — categories that fill from the neighborhood up rather than requiring destination traffic.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants who have been watching the EDGE District and waiting for a correction in asking rents, the Edge Collective Phase 2 announcement is a reason to stop waiting. Vacancy along the core Central Avenue blocks of the EDGE District has been in the single digits for several years, and the pipeline of new residential density coming online will support — not undermine — landlord pricing power. The tenants who move now will negotiate from a stronger position than the tenants who wait until the new supply has been absorbed.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Our{" "}
          <Link href="/blog/tampa-bay-retail-market-q3-2026" className="text-accent underline">Tampa Bay retail market Q3 2026 update</Link>{" "}
          provides the broader supply-demand context: overall retail vacancy across Tampa Bay is below 4%, among the tightest readings in the country, and the EDGE District is at the tightest end of that already-tight market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is St. Petersburg a Strong CRE Investment Market Compared to Tampa in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The answer to this question five years ago was clear: Tampa was the institutional-grade CRE market, and St. Pete was a secondary market that offered value plays for investors willing to accept lower liquidity and thinner transaction volume. In 2026, that framing is outdated.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CBRE ranked the Tampa Bay metro — both sides of the bay — as the seventh-most-targeted commercial real estate investment market in the United States for 2026, its first-ever appearance in the CBRE top ten. The ranking reflects what institutional investors have increasingly recognized: Tampa Bay&apos;s population growth, employment base diversification, infrastructure investment, and business-friendly regulatory environment generate demand across asset classes in a way that only a handful of other Sun Belt metros can match.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg&apos;s contribution to that story is concentrated in urban multifamily, experiential retail, boutique hospitality, and the creative-office segment. The EDGE District, Downtown St. Pete, and the Pier District have absorbed institutional development capital that previously would have defaulted to Tampa&apos;s more established submarkets. The Historic Gas Plant District redevelopment — among the largest urban mixed-use projects in Florida history — will add another major demand generator to St. Pete&apos;s urban core over the coming decade. Our{" "}
          <Link href="/blog/historic-gas-plant-district-st-pete-cre-2026" className="text-accent underline">Gas Plant District CRE overview</Link>{" "}
          covers that project in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors comparing Tampa and St. Pete on a purely mechanical basis, the relevant variables are: Tampa offers larger industrial corridors, a deeper NNN retail transaction market, and more institutional-grade office product. St. Pete offers urban multifamily at lower per-unit pricing than comparable Tampa submarkets, a more established walkable retail story, and exposure to mixed-use density plays that are still in mid-execution. Both deserve a place in a diversified Tampa Bay CRE portfolio.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Should CRE Investors Think About Adjacent Properties Near a Major Mixed-Use Development?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most actionable investment insight from the Edge Collective Phase 2 announcement is not the project itself — institutional development projects at that scale are typically not available to private investors — but what happens to the surrounding properties as density increases.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The pattern in urban mixed-use corridors is well documented: the delivery of a major residential or mixed-use tower in a corridor where retail vacancy is already tight drives rent growth in the surrounding blocks before the building even opens. Landlords who own street retail within walking distance of the Edge Collective site can expect tenant inquiries to increase as the project&apos;s profile rises, and those landlords have growing pricing power against existing tenants at lease renewal.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, the opportunity in this environment is the transitional blocks — the Central Avenue blocks just outside the established EDGE District core, or the perpendicular streets that will see increased foot traffic as the district builds density. These blocks are not yet priced for the EDGE District premium, but they will be as the quarter-mile radius around the Edge Collective site activates. The challenge is that those blocks are also smaller, less liquid, and require more intensive local market knowledge to evaluate correctly. This is precisely the kind of submarket-specific investment where 23+ years of Tampa Bay CRE experience — and the relationships that come with it — make a material difference in outcome.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors researching the{" "}
          <Link href="/blog/tampa-bay-commercial-mortgage-rates-2026" className="text-accent underline">commercial financing environment</Link>{" "}
          for acquisitions in the St. Pete corridor: permanent and bridge financing for well-located retail and mixed-use properties in the EDGE District is available and competitive, though lenders are underwriting asset quality and location premium carefully. Properties with below-market leases, near-term rollover, or value-add upside are getting financed, but the underwriting process is rigorous.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the full Pinellas County commercial real estate context surrounding the EDGE District, our{" "}
          <Link href="/markets/pinellas" className="text-accent underline">Pinellas County CRE market guide</Link>{" "}
          covers investment and leasing activity across St. Petersburg, Clearwater, and the broader county.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on the EDGE District and Edge Collective Phase 2</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The $125 million construction loan for Edge Collective Phase 2 is a data point, but it is the kind of data point that carries weight: institutional lenders and institutional developers do not deploy that level of capital into a submarket they are uncertain about. St. Petersburg&apos;s EDGE District has earned that confidence through a decade of organic retail vitality, disciplined mixed-use development, and sustained demand from residents, visitors, and creative-economy tenants who have chosen walkability over suburban sprawl.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For commercial real estate investors and tenants watching the{" "}
          <Link href="/blog/why-tampa-bay-cre-is-booming" className="text-accent underline">Tampa Bay market</Link>,{" "}
          the EDGE District story is a case study in how secondary urban cores can reach institutional investment quality when the fundamentals support it. St. Petersburg is no longer a secondary market on any of the dimensions that matter most: population growth, urban retail vitality, multifamily absorption, or the attention of major development capital. The question heading into 2027 is not whether the district will continue to build density, but whether the investors and tenants who act now will look back on 2026 as the last year they could have acquired or leased in the corridor before the full institutional premium was priced in.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay. He advises{" "}
          <Link href="/services/tenant-representation" className="text-accent underline">tenants</Link>{" "}
          and investors on both sides of the bay, including the St. Pete urban core and the Pinellas County markets where mixed-use and multifamily investment is accelerating.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            St. Pete EDGE District CRE — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial markets. He advises tenants on leasing strategy and investors on acquisitions in St. Petersburg, Tampa, and throughout the region. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating Commercial Real Estate in St. Petersburg or Tampa Bay?"
        body="Whether you are leasing retail space in the EDGE District, evaluating a mixed-use acquisition in Pinellas County, or looking for investment opportunities on either side of the bay, I bring 23+ years of Tampa Bay CRE experience at REMAX Collective. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
