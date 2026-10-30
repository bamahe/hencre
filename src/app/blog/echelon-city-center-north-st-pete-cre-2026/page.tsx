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
 * Blog: Echelon City Center North St. Pete CRE 2026
 * Third Lake Partners completes ClearView (363 units) at the $1B
 * Echelon City Center campus — what it means for CRE investors and
 * tenants in north St. Petersburg, Florida.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Echelon City Center: North St. Pete's $1B Mixed-Use CRE Story 2026 | HenCRE",
  description:
    "Third Lake Partners completed ClearView — 363 apartments and ground-floor retail — at Echelon City Center in north St. Petersburg in October 2026. Here's what the $1 billion, 20.5-acre campus means for commercial real estate investors and tenants in Pinellas County.",
  alternates: { canonical: "https://hencre.com/blog/echelon-city-center-north-st-pete-cre-2026" },
  openGraph: {
    title: "Echelon City Center: What the $1B North St. Pete Campus Means for CRE Investors and Tenants",
    description:
      "ClearView at Echelon City Center just opened 363 apartments in north St. Petersburg, marking a major milestone in a $1 billion mixed-use campus planned for up to 2,300 units and 150,000 SF of retail. What does it mean for the surrounding commercial market?",
    url: "https://hencre.com/blog/echelon-city-center-north-st-pete-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mixed-use residential and retail development in St. Petersburg Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is Echelon City Center in St. Petersburg, Florida?",
    answer:
      "Echelon City Center is a 20.5-acre, $1 billion mixed-use development located in north St. Petersburg, Florida, near the intersection of 3rd Street North and 31st Avenue North. Developed by Third Lake Partners in partnership with St. Petersburg-based Echelon, the campus is planned at full buildout to include up to 2,300 residential units across multiple phases, approximately 150,000 square feet of retail and restaurant space, office space, and a hotel. The site is partially built on and around the former UPC Insurance office campus, which Third Lake Partners acquired and is redeveloping. The first completed residential project on the campus, ClearView at Echelon City Center, delivered 363 apartments — including one-, two-, and three-bedroom units and three-bedroom townhomes with private garages — along with ground-floor retail. The project is significant for St. Petersburg's commercial real estate market because it represents the emergence of a major mixed-use hub in a part of the city that was predominantly suburban office and light commercial, transforming a previously underutilized campus into a high-density, walkable neighborhood with residential, retail, and future office and hospitality uses.",
  },
  {
    question: "What did the ClearView completion milestone signal for the broader Echelon City Center project?",
    answer:
      "Third Lake Partners announced the completion of ClearView at Echelon City Center on October 21, 2026, marking the delivery of the first major residential phase of the 20.5-acre campus. The milestone matters for three reasons. First, it proves the demand thesis: ClearView's first residents began moving in earlier in 2026, and the fact that the project progressed from groundbreaking to delivery without major interruptions signals that Third Lake Partners has the execution capability and capital backing to advance the broader campus. Second, the completion triggers the next phase — the developers have announced that 3rd & 3rd, a residential high-rise with ground-floor retail, is targeted for a first-quarter 2027 opening, meaning there is virtually no gap between ClearView's delivery and the next supply injection. Third, the ClearView completion validates the north St. Pete market as capable of absorbing luxury multifamily supply at this scale. North St. Petersburg has historically been viewed as a more suburban, lower-density alternative to downtown St. Pete, and the ClearView lease-up will inform institutional investors and lenders whether that part of the market can sustain the rent levels and absorption pace that a $1 billion campus investment requires.",
  },
  {
    question: "What does Echelon City Center mean for retail tenants looking at north St. Petersburg?",
    answer:
      "For retail tenants considering north St. Petersburg, the Echelon City Center development materially changes the supply-demand math in a part of the market that has historically underperformed the urban core on foot traffic and consumer density. At full buildout, the campus will add up to 2,300 residential units, 150,000 square feet of retail and restaurant space, a hotel, and office space — all within a walkable campus environment. The ground-floor retail in ClearView and in the upcoming 3rd & 3rd phase are the earliest opportunities, and they will be in the strongest competitive position: first movers in a new mixed-use campus benefit from the opening-month attention, the developer's marketing investment, and the captive demand of on-site and adjacent residents who will default to the most convenient retail options in their immediate walkable radius. The category fit for early Echelon City Center retail tenants is similar to other suburban-to-urban transition projects across Tampa Bay: food and beverage, fitness, personal services, and convenience-oriented retail that serves the residential population rather than relying on destination traffic. Tenants who require high-volume destination traffic should hold until the campus achieves full residential density, but tenants who are willing to grow with the neighborhood have a rare opportunity to anchor a campus that will be one of the largest mixed-use developments in Pinellas County history.",
  },
  {
    question: "How does Echelon City Center compare to other major mixed-use projects in St. Petersburg?",
    answer:
      "Echelon City Center is among the largest mixed-use projects underway in St. Petersburg by acreage and planned total investment, but it competes for investor and tenant attention with several other significant developments. The Historic Gas Plant District redevelopment — the largest urban mixed-use project in Florida history by many measures — is concentrated in downtown St. Pete and is anchored by the new Rays ballpark, which will be surrounded by retail, residential, hotel, and office development over the next decade. The EDGE District's Edge Collective Phase 2 added a $125 million construction loan in October 2026 for a 330-unit, 19,000-square-foot mixed-use tower on Central Avenue. Echelon City Center's differentiator is scale and campus format: rather than a single tower or a dense urban corridor, it is a 20.5-acre master-planned campus in a north St. Pete location that is accessible by car and by foot from surrounding residential neighborhoods. This campus format appeals to a different retail tenant profile than the urban EDGE District or the stadium-adjacent Gas Plant District — it is more comparable to a suburban town center than a walkable urban street. For investors, that format difference translates to different cap rate expectations, different tenant mix, and different risk profile. Campus retail in an emerging mixed-use development typically prices at a wider cap rate than established urban street retail but offers higher growth potential as the surrounding residential density builds.",
  },
  {
    question: "Is north St. Petersburg a good area to invest in commercial real estate in 2026?",
    answer:
      "North St. Petersburg has historically been overlooked by institutional commercial real estate investors in favor of downtown St. Pete and the Pinellas County industrial corridors, but the Echelon City Center development is accelerating a revaluation of the submarket. Several factors make north St. Pete a credible investment location entering 2027. Population density in north Pinellas County has continued to grow as in-migration to the Tampa Bay area fills in the established street grid between St. Pete and Clearwater. The former UPC Insurance campus redevelopment brings a significant new residential population to a submarket that was previously dominated by office workers rather than residents, changing the daytime-to-evening demand profile in a way that is favorable for retail and mixed-use investment. The 150,000 square feet of planned retail at Echelon City Center at full buildout is a supply addition, but it also functions as a demand generator: a curated retail and restaurant environment in a walkable campus setting draws visitors from beyond the immediate neighborhood. The risk factors are standard for an emerging mixed-use campus: absorption pace depends on execution quality and macro conditions, the 3rd & 3rd tower and future phases remain subject to financing and permitting, and the retail component is competitive with existing north St. Pete retail rather than purely additive. Investors entering north St. Pete in 2026 should focus on properties within the two-to-three-block influence zone around the Echelon City Center campus, where the residential density premium will be most directly felt before it spreads to surrounding blocks.",
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
          name: "Echelon City Center: North St. Pete CRE 2026",
          item: "https://hencre.com/blog/echelon-city-center-north-st-pete-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Echelon City Center: What the $1 Billion North St. Pete Mixed-Use Campus Means for CRE Investors and Tenants in 2026",
      description:
        "Third Lake Partners completed ClearView at Echelon City Center in October 2026, marking the first major residential delivery in a $1 billion, 20.5-acre mixed-use campus in north St. Petersburg. Here is what it means for commercial real estate investors and tenants in Pinellas County.",
      datePublished: "2026-10-28",
      dateModified: "2026-10-30",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/echelon-city-center-north-st-pete-cre-2026",
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
    description: "The full St. Pete market overview — office, retail, multifamily, and industrial — for 2026.",
  },
  {
    title: "St. Pete EDGE District CRE 2026",
    href: "/blog/st-pete-edge-district-cre-2026",
    description: "PTM Partners' $125M Edge Collective Phase 2 and what it means for the EDGE District's retail and mixed-use market.",
  },
  {
    title: "Historic Gas Plant District: St. Pete CRE 2026",
    href: "/blog/historic-gas-plant-district-st-pete-cre-2026",
    description: "The massive Gas Plant District redevelopment anchored by the new Rays ballpark — the largest urban mixed-use project in Florida history.",
  },
  {
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description: "Supply absorption, rent trends, and investment outlook for Tampa Bay apartments heading into year-end.",
  },
  {
    title: "Tampa Bay Multifamily Cap Rates 2026",
    href: "/blog/tampa-bay-multifamily-cap-rates-2026",
    description: "Where cap rates stand across Tampa Bay's urban and suburban multifamily submarkets.",
  },
  {
    title: "Tampa Bay Retail Market Q3 2026",
    href: "/blog/tampa-bay-retail-market-q3-2026",
    description: "Vacancy below 4%, rents rising — the supply-demand picture behind Tampa Bay retail's continued outperformance.",
  },
  {
    title: "Clearwater & Pinellas County CRE 2026",
    href: "/blog/clearwater-pinellas-county-commercial-real-estate-2026",
    description: "Pinellas County's commercial real estate market — office, retail, industrial — for investors and tenants in 2026.",
  },
  {
    title: "Tampa Bay Commercial Mortgage Rates 2026",
    href: "/blog/tampa-bay-commercial-mortgage-rates-2026",
    description: "Current construction and permanent financing conditions for CRE acquisitions across Tampa Bay.",
  },
  {
    title: "Florida Live Local Act: Tampa Bay CRE 2026",
    href: "/blog/florida-live-local-act-tampa-bay-cre-2026",
    description: "How Florida's Live Local Act is shaping mixed-use and multifamily development decisions across the region.",
  },
  {
    title: "Tampa Mall Redevelopment & Mixed-Use CRE 2026",
    href: "/blog/tampa-mall-redevelopment-mixed-use-2026",
    description: "The broader wave of mixed-use redevelopment reshaping Tampa Bay's largest retail and commercial sites.",
  },
];

export default function EchelonCityCenterNorthStPeteCRE2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Echelon City Center: North St. Pete CRE 2026", href: "/blog/echelon-city-center-north-st-pete-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop"
        title="Echelon City Center: What the $1 Billion North St. Pete Campus Means for CRE"
        subtitle="Third Lake Partners just completed ClearView — 363 apartments and ground-floor retail — at the 20.5-acre Echelon City Center campus in north St. Petersburg. At full buildout: 2,300 residential units, 150,000 SF of retail, a hotel, and office space. Here is what it means for commercial real estate investors and tenants in Pinellas County."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          On October 21, 2026, Third Lake Partners announced the completion of ClearView at Echelon City Center — a 363-unit apartment community with ground-floor retail in north St. Petersburg, Florida. It is the first major residential delivery in a $1 billion, 20.5-acre mixed-use campus that at full buildout will include up to 2,300 residential units, approximately 150,000 square feet of retail and restaurant space, office space, and a hotel. For commercial real estate investors and tenants watching the Pinellas County market, the ClearView completion is not just a construction milestone — it is the opening chapter of what may be the most significant commercial real estate catalyst in north St. Pete in a generation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Echelon City Center and Where Does It Fit in St. Petersburg&apos;s Growth Story?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Echelon City Center is a master-planned, campus-format mixed-use development on 20.5 acres in north St. Petersburg, developed by Third Lake Partners in partnership with St. Petersburg-based Echelon. The project is built on and around the former UPC Insurance office campus, which Third Lake Partners acquired and has been redeveloping into a walkable, high-density live-work-play neighborhood.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Unlike the urban street-level mixed-use projects concentrated in downtown St. Pete and the EDGE District, Echelon City Center is a campus format: a 20.5-acre site with multiple buildings, shared amenities, landscaped connections between uses, and a design intended to create a neighborhood-within-a-neighborhood feel. The residential buildings are surrounded by ground-floor retail and restaurant space, and future phases will add office and hotel uses to the mix.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The campus&apos;s north St. Pete location — near the intersection of 3rd Street North and 31st Avenue North — places it in a part of the city that sits between the urban density of downtown St. Pete and the suburban character of northern Pinellas County. That positioning is both the development&apos;s opportunity and its challenge: north St. Pete has a large, established residential population that is underserved by walkable retail and mixed-use options, creating real demand for the uses Echelon City Center will deliver. But it lacks the pre-existing foot traffic and urban energy of the{" "}
          <Link href="/blog/st-pete-edge-district-cre-2026" className="text-accent underline">EDGE District</Link>{" "}
          or downtown, which means the campus must create its own gravity rather than plug into an existing commercial ecosystem.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the broader{" "}
          <Link href="/blog/st-petersburg-commercial-real-estate-2026" className="text-accent underline">St. Petersburg commercial real estate market</Link>,{" "}
          Echelon City Center represents a second major mixed-use investment thesis running parallel to the downtown and EDGE District stories: a suburban-to-urban transition that bets on density and walkability as tools for capturing the spending power of existing north St. Pete households.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Did the ClearView Completion Milestone Signal About the Echelon Campus?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          ClearView at Echelon City Center delivered 363 apartments — one-, two-, and three-bedroom units plus three-bedroom townhomes with private garages — and ground-floor retail in October 2026, with first residents moving in earlier in the year. The community amenities include a resort-style pool, clubhouse, golf simulator, coworking space, and indoor and outdoor fitness facilities: the full package of urban lifestyle amenities that drives premium rents in Tampa Bay&apos;s competitive multifamily market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The completion milestone matters for what it signals about the pace of the overall campus development. Third Lake Partners has announced that the next phase — 3rd &amp; 3rd, a residential high-rise with ground-floor retail — is targeted for a first-quarter 2027 opening, meaning there is virtually no gap between ClearView&apos;s delivery and the next residential injection into the campus. A developer who delivers one phase and immediately advances the next is signaling both capital availability and market confidence, and those are the two variables that matter most for institutional investors and tenants deciding whether to commit to an emerging district.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors tracking the{" "}
          <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market</Link>,{" "}
          ClearView&apos;s delivery is also a data point on north St. Pete absorption. The Tampa Bay metro absorbed the 2024–2025 supply wave faster than most forecasters expected, and Echelon City Center&apos;s lease-up pace will be watched closely by institutional lenders and investors evaluating future phases of the $1 billion campus.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the 150,000-Square-Foot Retail Component Mean for Tenants?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At full buildout, Echelon City Center is planned to include approximately 150,000 square feet of retail and restaurant space — a meaningful supply addition to a part of north St. Pete that has historically been underserved by walkable, curated retail. For retail and food-and-beverage tenants, the campus presents a classic emerging-district opportunity: the ability to anchor a high-quality environment before the full residential density arrives, in exchange for the risk that lease-up takes longer than projected.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The ground-floor retail in ClearView and the upcoming 3rd &amp; 3rd phase are the earliest opportunities, and they come with a built-in advantage: the 363 existing residents of ClearView — plus the residents of future phases as they deliver — represent a captive consumer base that will default to the most convenient food, fitness, and personal services options within walking distance. Tenants who serve daily needs — coffee, casual dining, fitness, health services, convenience grocery — are the best fit for early-phase campus retail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The broader{" "}
          <Link href="/blog/tampa-bay-retail-market-q3-2026" className="text-accent underline">Tampa Bay retail market context</Link>{" "}
          is supportive: overall retail vacancy across the metro is below 4%, and tenant demand for quality, walkable retail space in new mixed-use environments exceeds available supply in most Pinellas County submarkets. Tenants who have been considering north St. Pete as a market should treat the ClearView completion as the starting gun for serious site selection in the Echelon City Center trade area.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          It is also worth noting for prospective buyers and residents considering the north St. Pete neighborhood that the{" "}
          <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Tampa Bay home search at nowtb.com</a>{" "}
          includes neighborhood guides and listings in the areas surrounding Echelon City Center, where single-family and condo values have been rising alongside the campus&apos;s development profile.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Echelon City Center Compare to Other Major St. Pete Mixed-Use Projects?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg is running multiple large-scale mixed-use plays simultaneously in 2026, and commercial real estate investors need to understand how Echelon City Center fits into that competitive landscape. Three projects define the current St. Pete mixed-use moment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The{" "}
          <Link href="/blog/historic-gas-plant-district-st-pete-cre-2026" className="text-accent underline">Historic Gas Plant District redevelopment</Link>{" "}
          is the most high-profile: the new Rays ballpark and surrounding mixed-use development will reshape downtown St. Pete&apos;s southern waterfront over the next decade and generate demand for retail, hospitality, and office space at a stadium-district scale. The Edge Collective Phase 2 — a 330-unit, 19,000-square-foot mixed-use tower in the EDGE District backed by a{" "}
          <Link href="/blog/st-pete-edge-district-cre-2026" className="text-accent underline">$125 million construction loan</Link>{" "}
          — represents the urban street retail play in St. Pete&apos;s most established mixed-use corridor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Echelon City Center&apos;s differentiator is campus format and north St. Pete location. At 20.5 acres and up to 2,300 units, it is larger than either of the downtown projects in terms of residential capacity, and its campus format creates a different investment profile: more comparable to a suburban town center than an urban street corridor. For investors, that means different cap rate expectations, different tenant mix, and a different timeline to full stabilization — but also exposure to a part of the Pinellas market that is in early stages of density-driven repricing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Investment Opportunities Created by the Echelon City Center Development?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most direct investment opportunities at Echelon City Center itself — the ground-floor retail in ClearView and upcoming phases — are developer-controlled and will be offered on lease terms that reflect the campus&apos;s institutional-grade positioning. But the broader investment opportunity created by the Echelon development extends well beyond the campus boundaries.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The pattern in every major mixed-use campus development is that the repricing effect radiates outward: the properties within two to four blocks of the campus boundary begin appreciating as the residential density builds and consumer spending increases in the surrounding area. North St. Pete has a stock of older retail strip centers, multifamily buildings, and mixed-use properties within that influence zone that are not yet priced for an Echelon City Center premium. Investors who can identify and acquire those properties at pre-development pricing — before the full campus density is delivered — are positioned to capture the appreciation as Echelon City Center&apos;s 2,300 units come online over the next several years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The financing environment for north St. Pete acquisitions reflects the current commercial mortgage market: rates have moderated from their 2023–2024 peaks, and institutional lenders are actively competing for well-located Pinellas County retail and multifamily transactions. Our{" "}
          <Link href="/blog/tampa-bay-commercial-mortgage-rates-2026" className="text-accent underline">Tampa Bay commercial mortgage rates overview for 2026</Link>{" "}
          covers the current lending environment in detail, including the gap between bridge and permanent financing for value-add acquisitions in emerging submarkets like north St. Pete.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors considering north St. Pete alongside other{" "}
          <Link href="/markets/pinellas" className="text-accent underline">Pinellas County commercial real estate</Link>{" "}
          opportunities, the Echelon City Center story is the strongest case for the submarket — but it requires local market knowledge to execute correctly. The influence zone is not equally valuable in all directions from the campus, and the specific blocks that will benefit most depend on pedestrian connectivity, existing retail void analysis, and the developer&apos;s own phasing plans.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Outlook for North St. Petersburg Commercial Real Estate Through 2027?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial real estate outlook for north St. Petersburg entering 2027 is the strongest it has been in the submarket&apos;s history, driven almost entirely by the Echelon City Center pipeline. With ClearView delivered, 3rd &amp; 3rd targeted for Q1 2027, and additional phases representing hundreds of additional units beyond that, the residential density story in north St. Pete is not speculative — it is permitted, financed, and under construction.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The retail and office components of the campus will follow residential delivery with a typical lag: ground-floor retail in new multifamily buildings absorbs within 12 to 18 months of residential delivery as the on-campus population builds, and freestanding retail and office uses require a higher threshold of pedestrian traffic before they stabilize. Investors and tenants should plan for Echelon City Center to be a two-to-four-year story for commercial uses, not a 2026 or 2027 overnight transformation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The macro tailwinds are favorable: Tampa Bay&apos;s population growth continues, Pinellas County&apos;s employment base in healthcare, finance, and technology generates the household income required to support luxury and mid-market retail, and the{" "}
          <Link href="/blog/florida-live-local-act-tampa-bay-cre-2026" className="text-accent underline">Florida Live Local Act</Link>{" "}
          creates additional mixed-use and multifamily development incentives that benefit projects like Echelon City Center at the entitlement and permitting stage. The bottom line for investors and tenants watching north St. Pete: the ClearView completion on October 21, 2026 is the first deliverable proof that Echelon City Center is executing. The question is not whether the campus will transform north St. Pete — it is whether the investors and tenants who move in 2026 and early 2027 will look back on this period as the last window to enter before the transformation is fully priced in.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay. He advises{" "}
          <Link href="/services/tenant-representation" className="text-accent underline">retail and commercial tenants</Link>{" "}
          and investors on acquisitions throughout Pinellas County, including north St. Petersburg and the emerging corridors shaped by major mixed-use campus developments.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Echelon City Center & North St. Pete CRE — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial markets. He advises tenants and investors in St. Petersburg, Tampa, and throughout the region. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Exploring Commercial Real Estate in North St. Petersburg or Pinellas County?"
        body="Whether you are leasing retail space near Echelon City Center, evaluating an investment in north St. Pete, or looking at Pinellas County opportunities more broadly, I bring 23+ years of Tampa Bay CRE experience at REMAX Collective. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
