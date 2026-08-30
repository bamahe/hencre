import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: North Tampa / USF Corridor Commercial Real Estate 2026
 * Fletcher District, Tampa Rithm, and what the campus boom means for CRE.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "North Tampa & USF Corridor Commercial Real Estate 2026 | HenCRE",
  description:
    "The North Tampa / USF corridor is undergoing a generational transformation in 2026 — Fletcher District, Tampa Rithm, and Moffitt's expansion are reshaping the market for investors and tenants alike.",
  alternates: { canonical: "https://hencre.com/blog/north-tampa-usf-corridor-commercial-real-estate-2026" },
  openGraph: {
    title: "North Tampa & USF Corridor Commercial Real Estate 2026",
    description:
      "North Tampa's commercial real estate market is being reshaped by three massive projects: the 138-acre Fletcher District, the 100-acre Tampa Rithm redevelopment of University Mall, and continued growth around Moffitt Cancer Center. Here's what it means for investors and tenants.",
    url: "https://hencre.com/blog/north-tampa-usf-corridor-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "University campus with commercial development in North Tampa Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=630&fit=crop"],
  },
};

const faqItems = [
  {
    question: "What is the Fletcher District and how does it affect North Tampa commercial real estate?",
    answer:
      "The Fletcher District is a 138-acre mixed-use development on a former golf course just north of the USF Tampa campus. Hillsborough County committed $24 million to the project in March 2026, which will deliver student and multifamily housing, retail, restaurants, a hotel and conference center, an academic research building, and recreation space. Phase 1 is targeted to open in fall 2028. For CRE investors and tenants, the Fletcher District represents a significant addition of built-in daytime population and spending power to a corridor that has been underserved by quality commercial amenities for decades. Retail and service tenants serving university-adjacent populations — coffee, fitness, medical, financial services, quick-service food — should be evaluating the corridor now, before delivery drives rents upward.",
  },
  {
    question: "What is Tampa Rithm and why does it matter for commercial investors?",
    answer:
      "Tampa Rithm is a four-phase, 100-acre mixed-use redevelopment of the former University Mall site on Fowler Avenue led by RD Management. At full build-out, Tampa Rithm is planned to include approximately 5,000 student beds alongside multifamily housing, hospitality, retail, and entertainment uses. The former University Mall had functioned as a struggling enclosed mall for years; its conversion to a dense, walkable mixed-use district will fundamentally change the commercial real estate equation on Fowler Avenue. Retail investors should watch for NNN pad site and anchored outparcel opportunities as the project phases forward. Multifamily investors looking at the North Tampa submarket should track absorption data from the student and workforce housing portions of the project as a leading indicator of long-term demand.",
  },
  {
    question: "Is North Tampa / Fowler Avenue a good area for retail or restaurant tenants in 2026?",
    answer:
      "Yes — and the timing matters. The USF corridor has historically been underretailed relative to its population base, partly because the university population skewed toward students who spent off-campus and partly because the surrounding neighborhoods lacked the household income profile that national retailers target. Both of those dynamics are shifting. The Fletcher District and Tampa Rithm will bring thousands of new residents and visitors to the corridor. Income demographics in North Tampa have improved significantly as Tampa Bay's overall growth has pushed northward. Tenants who sign leases in the corridor in 2025–2026 — before the major projects deliver — will secure significantly better rental rates than tenants who wait until occupancy is established. That is the classic early-mover advantage in an emerging commercial district.",
  },
  {
    question: "How does Moffitt Cancer Center's growth affect the North Tampa CRE market?",
    answer:
      "Moffitt Cancer Center, one of the nation's premier cancer research and treatment facilities, anchors the USF Health corridor on Bruce B. Downs Boulevard adjacent to the main USF campus. Moffitt's continued expansion and research program creates a sustained draw of medical professionals, researchers, clinical trial patients, and biotech/pharmaceutical spinout activity. That healthcare anchor drives demand for medical office space, lab and life sciences facilities, extended-stay hotel rooms, and the full ecosystem of services that follows a major academic medical center. The North Tampa corridor already has a meaningful concentration of medical office along Bearss Avenue and Bruce B. Downs; Moffitt's growth trajectory makes that a long-term structural demand driver. For a broader view of the life sciences opportunity in Tampa Bay, see our guide to <a href='/blog/tampa-bay-life-sciences-cre-2026'>Tampa Bay life sciences commercial real estate in 2026</a>.",
  },
  {
    question: "What types of commercial properties are available in the North Tampa / USF area?",
    answer:
      "The North Tampa market offers a wide range of commercial property types at a variety of price points. On the office side, Class B and Class C product along Fletcher Avenue, Fowler Avenue, and Bruce B. Downs Boulevard is generally available at $18 to $26 per square foot full-service — significantly below Westshore and Midtown Tampa rates. Medical office, particularly on the Bearss–Bruce B. Downs corridor, is tighter and trades at a premium due to proximity to Moffitt and USF Health. Retail in the corridor has been historically fragmented — mostly strip centers and pad sites — but that is changing as the Fletcher District and Tampa Rithm deliver anchored, walkable retail environments. Industrial and flex space is available along the USF 301 and I-275 corridors, targeting light manufacturing, distribution, and university-adjacent service businesses.",
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
          name: "North Tampa & USF Corridor Commercial Real Estate 2026",
          item: "https://hencre.com/blog/north-tampa-usf-corridor-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "North Tampa & USF Corridor Commercial Real Estate 2026",
      description:
        "The North Tampa / USF corridor is undergoing a generational transformation — Fletcher District, Tampa Rithm, and Moffitt's expansion are reshaping the market for investors and tenants in 2026.",
      datePublished: "2026-08-29",
      dateModified: "2026-08-29",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/north-tampa-usf-corridor-commercial-real-estate-2026",
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
    title: "Tampa Hillsborough County Commercial Real Estate 2026",
    href: "/blog/tampa-hillsborough-county-commercial-real-estate-2026",
    description:
      "North Tampa is part of Hillsborough County — this comprehensive guide covers the full county commercial market across all property types.",
  },
  {
    title: "Tampa Bay Life Sciences CRE 2026",
    href: "/blog/tampa-bay-life-sciences-cre-2026",
    description:
      "Moffitt Cancer Center's growth feeds directly into Tampa Bay's life sciences commercial real estate pipeline — learn who is absorbing that space.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description:
      "Medical office is one of the most active sectors in North Tampa — here's how the broader Tampa Bay medical office market is performing.",
  },
  {
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description:
      "The student and workforce housing pipeline in North Tampa connects directly to the broader multifamily market — see what the data shows.",
  },
  {
    title: "Wesley Chapel Pasco County Commercial Real Estate 2026",
    href: "/blog/wesley-chapel-pasco-county-commercial-real-estate-2026",
    description:
      "Immediately north of the USF corridor, Wesley Chapel is one of Tampa Bay's fastest-growing commercial submarkets — a natural pairing with North Tampa.",
  },
  {
    title: "Tampa Bay Retail Market Q2 2026",
    href: "/blog/tampa-bay-retail-market-q2-2026",
    description:
      "Tampa Bay retail vacancy held at 3.8% in Q2 2026 — see how the emerging North Tampa corridor fits into the broader supply picture.",
  },
  {
    title: "Tampa Bay Build-to-Rent CRE 2026",
    href: "/blog/tampa-bay-build-to-rent-cre-2026",
    description:
      "Build-to-rent product is expanding into North Tampa submarkets — this guide explains the investment thesis.",
  },
  {
    title: "How Commercial Leases Differ from Residential",
    href: "/blog/how-commercial-leases-differ-from-residential",
    description:
      "If you are a business considering the USF corridor for the first time, start here before you engage a space or sign anything.",
  },
  {
    title: "SBA 504 Loan: Commercial Real Estate Tampa Bay",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description:
      "SBA 504 financing is particularly relevant for owner-users buying commercial space near growing university corridors.",
  },
  {
    title: "Tampa Bay Opportunity Zones CRE 2026",
    href: "/blog/tampa-bay-opportunity-zones-cre-2026",
    description:
      "Parts of the North Tampa corridor intersect with designated Opportunity Zones — investors should understand the tax implications.",
  },
];

export default function BlogPost() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "North Tampa & USF Corridor Commercial Real Estate 2026",
            href: "/blog/north-tampa-usf-corridor-commercial-real-estate-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=630&fit=crop"
        title="North Tampa & USF Corridor Commercial Real Estate 2026"
        subtitle="Fletcher District, Tampa Rithm, and Moffitt's research expansion are driving a generational transformation in North Tampa's commercial market — here's what investors and tenants need to understand before Phase 1 delivers."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is the North Tampa / USF Corridor Suddenly Getting So Much Attention From CRE Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For most of the past two decades, North Tampa's commercial real estate market was defined by what it lacked rather than what it had. Fowler Avenue and Fletcher Avenue corridor had the density — University of South Florida enrolls more than 50,000 students, making it one of the largest universities in the country — but the commercial infrastructure never matched the captive population. Strip centers with high turnover, an aging enclosed mall that stopped drawing national tenants, and medical office product that served the USF Health ecosystem without much retail or hospitality to support it. Investors and brokers who knew the area understood it as a market to watch, not a market to move into.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          That calculation is changing in 2026, and it is changing because of the simultaneous arrival of three projects of a scale that the corridor has never seen before. The Fletcher District — a 138-acre mixed-use development on a former golf course immediately north of the USF campus — received a $24 million Hillsborough County commitment in March 2026 and is moving from planning to construction. Tampa Rithm, the 100-acre redevelopment of the former University Mall site on Fowler Avenue, is progressing through its phased delivery with 5,000 student beds and a full complement of retail, hospitality, and entertainment planned at build-out. And Moffitt Cancer Center continues to expand its research and clinical enterprise at the southern end of the corridor, creating sustained demand for medical office, lab space, and the service ecosystem around an academic medical center. See our broader <a href="/blog/tampa-hillsborough-county-commercial-real-estate-2026">Hillsborough County commercial real estate guide</a> for context on how this corridor fits into the full Tampa market picture.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Fletcher District and What Does It Mean for Commercial Real Estate North of USF?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Fletcher District is the most consequential single project in North Tampa's commercial real estate market right now, and it is worth understanding in detail. The site — approximately 138 acres of former golf course land located north of Fletcher Avenue and east of North 46th Street, directly adjacent to the USF campus — was dormant for years before the university and county aligned on a redevelopment vision. The plan calls for a dense mixed-use district with student and multifamily housing, retail, restaurants, an academic research building, a hotel and conference center, and recreation amenities. Phase 1 is targeted to open in fall 2028.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Hillsborough County's $24 million commitment, announced in March 2026, was the financial confirmation that this project has real government backing behind it — not just a developer's proposal. That level of public-private coordination matters for CRE investors assessing execution risk. It also means the corridor's infrastructure investment will follow, which historically drives private capital into adjacent commercial real estate at a faster pace than purely private developments.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants, the Fletcher District creates an early-mover opportunity that is genuinely rare in the Tampa Bay market. Retail, food and beverage, fitness, medical, and service tenants who execute leases in the surrounding corridor in 2026 or 2027 — before Phase 1 delivers — will do so at rents that do not yet reflect the additional daytime and residential population the district will bring. Once Phase 1 opens in fall 2028 and the market can observe actual foot traffic and sales, rents in the immediate area will reset upward. The window for below-market positioning is now, not after delivery.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Tampa Rithm and How Does the University Mall Redevelopment Change the Fowler Avenue Corridor?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Rithm is the project name for RD Management's four-phase, 100-acre redevelopment of the former University Mall site on Fowler Avenue. University Mall had been one of Tampa Bay's major enclosed regional malls in its heyday but had suffered years of declining occupancy, anchor departures, and the structural obsolescence that has afflicted enclosed malls across the United States. Its redevelopment into a dense, mixed-use district is part of the same national wave of mall-to-mixed-use conversions that is reshaping retail commercial real estate from Tampa to Phoenix to Dallas.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At full build-out, Tampa Rithm is planned to include approximately 5,000 student beds — creating one of the largest university-adjacent housing communities in Florida — alongside multifamily units, hotel rooms, retail and restaurant space, and entertainment uses. The scale matters. A 100-acre site with 5,000 residents, a hotel, and active retail creates an entirely different commercial gravity for the Fowler Avenue corridor than a half-empty enclosed mall. Investors tracking NNN outparcel opportunities, anchored strip center acquisitions, or ground lease structures in the area should be watching Tampa Rithm's phasing schedule closely.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For comparison, look at what happened to the commercial real estate along Fowler Avenue near the former Sears anchor in the years after that box went dark versus what happened at mixed-use university-adjacent redevelopments in markets like Tempe, Gainesville, and Tallahassee after their comparable projects delivered. Retail rents in the trade area moved 20 to 35 percent higher within three to four years of substantial occupancy being established. That is the market dynamic at play in North Tampa. For more on Tampa Bay's broader retail investment environment, see our <a href="/blog/tampa-bay-retail-market-q2-2026">Q2 2026 Tampa Bay retail market report</a>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Moffitt Cancer Center Drive Commercial Real Estate Demand in the North Tampa Corridor?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Moffitt Cancer Center occupies a unique position in Tampa Bay's commercial real estate ecosystem. As one of only 56 National Cancer Institute-designated Comprehensive Cancer Centers in the United States and Florida's only NCI-designated center, Moffitt functions as an anchor institution — the kind of large, recession-resistant employer and patient-draw that creates self-sustaining commercial demand in a 2-to-3-mile trade area around its campus on USF Magnolia Drive.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial real estate implications of a major academic medical center are well-documented in markets across the country. Medical office space within a mile of Moffitt commands rent premiums of 15 to 25 percent over comparable office space without that proximity — physicians, clinical researchers, pharmaceutical company representatives, and healthcare administrators all want to be close. Extended-stay and select-service hotel product near major cancer centers performs above its competitive set because patients traveling for treatment and their families generate sustained, non-leisure demand. Specialty pharmacy, infusion, behavioral health, and related medical services cluster around cancer center campuses because that is where their patient population is.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In the North Tampa corridor, that dynamic plays out along Bruce B. Downs Boulevard and the Bearss Avenue spine, where a meaningful concentration of medical office product already exists. Moffitt's continued research expansion — the center has been growing its clinical trial volume and biotech spinout activity — adds life sciences lab demand to the picture, which is a higher-value commercial use that drives stronger rents than conventional medical office. Our <a href="/blog/tampa-bay-life-sciences-cre-2026">Tampa Bay life sciences CRE guide</a> covers that sector in detail, including where in the metro the most active absorption is occurring.
        </p>

        {/* ---- Inline image ---- */}
        <div className="my-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
            alt="Mixed-use development construction near a major university campus in Tampa Florida"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            The 138-acre Fletcher District and 100-acre Tampa Rithm projects are reshaping the commercial real estate equation along Fowler and Fletcher avenues in North Tampa.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are Office and Retail Rents Doing in North Tampa in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The North Tampa / USF corridor sits at a significant rent discount to Tampa's premier office and retail submarkets, which is precisely why it represents an opportunity for cost-sensitive tenants and value-add investors. Class B office along Fletcher Avenue and Fowler Avenue is available in the $18 to $26 per square foot range on a full-service gross basis — compared to $45 to $49 per square foot in the Westshore core or $34 to $42 per square foot for Class A Westshore product. For a professional services firm, a healthcare practice, or a technology operation that does not need a Westshore or downtown Tampa address to support its brand, North Tampa's rent profile can translate to a meaningful cost advantage over a ten-year lease term.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Retail rents in the corridor have historically lagged behind Tampa Bay's stronger submarkets, partly because of the enclosed mall's drag on the trade area's retail brand. As Tampa Rithm phases forward and the Fletcher District delivers, the lower-end of the retail rent range should compress. Service retail — dental, chiropractic, urgent care, nail salons, barbershops, specialty food — along the immediate Fowler and Fletcher corridors is currently leasing in the $22 to $32 per square foot triple-net range. Pad sites and outparcel ground leases near the Tampa Rithm site are attracting more attention from QSR and fast-casual operators who are running site analysis models that anticipate the residential population delivery from Phase 1 and Phase 2. Those operators move early — by the time a project delivers, the best outparcel sites are typically committed.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors evaluating the corridor, the cap rate environment is broadly consistent with the broader Tampa Bay market — compressed for stabilized product with credit tenancy, with more opportunity in value-add acquisitions that require lease-up or renovation. If you are evaluating specific assets in North Tampa, Barrett Henry can provide a current market analysis and comparable transactions. Call <a href="tel:8137337907">(813) 733-7907</a> to get started.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Makes the North Tampa Corridor Attractive for Multifamily Investors in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The student housing pipeline in North Tampa is the largest it has been in years, driven by USF's enrollment growth and the shift away from on-campus housing toward purpose-built off-campus product. The Mark Tampa — a six-story luxury student housing development with more than 800 beds by Landmark Properties — broke ground near USF and is targeting a 2027–2028 opening. Tampa Rithm's 5,000-bed component is delivering in phases over several years. The Fletcher District adds another several hundred to a thousand student and multifamily units depending on the final program.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a conventional multifamily investor, the student housing pipeline creates a nuanced picture. The new supply will compete for the same 18-to-24-year-old renter base that conventional apartments near USF have historically served, which could push vacancy upward in older garden-style apartments that have not been renovated to compete with modern amenity packages. Value-add investors targeting those older assets should model the lease-up competition from purpose-built student housing carefully. On the other side of the ledger, the overall population growth the corridor is projecting — residents, staff, medical workers, and university employees attracted by the Fletcher District's amenities — will drive workforce housing demand that student-specific product does not capture. For a broader multifamily read, our <a href="/blog/tampa-bay-multifamily-market-mid-2026">Tampa Bay multifamily market mid-2026 guide</a> covers the full metro supply and demand picture.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors relocating capital to Tampa Bay or buying their first income-producing property in the region should note that North Tampa's price-per-unit on older multifamily product remains well below what comparable vintage product commands in South Tampa or the Westshore corridor. That gap is a function of the historically weaker commercial amenity base — and one of the outcomes the Fletcher District and Tampa Rithm are designed to close. If you are interested in multifamily options across Tampa Bay and want to understand where the best risk-adjusted returns may lie, Barrett Henry works with investors across all of Hillsborough County. If you are also weighing whether to sell an existing income-producing property and reinvest into a growing corridor, <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer">Fast Sell Easy Sale</a> offers a direct cash path for investment properties that need to move quickly.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should a Tenant or Investor Do Before the Fletcher District and Tampa Rithm Deliver?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The strategic window for North Tampa is narrow and it is open right now. Projects of the scale of the Fletcher District and Tampa Rithm do not deliver quietly — once Phase 1 is open and foot traffic is quantifiable, landlords reprice to match the new demand environment. The tenants and investors who capture the best economics in emerging corridors are almost always the ones who moved before delivery, not after.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants: start your site search on the Fowler and Fletcher corridors now if you serve a population that would benefit from proximity to a 50,000-student university, a major cancer center, and two of the largest mixed-use deliveries in Hillsborough County's recent history. Medical, dental, urgent care, fitness, food and beverage, and professional services operators are the best fits for the near-term pipeline. Bring a tenant representative into the process before you make any calls to landlords — in a corridor where supply is still fragmented and landlords are dealing with a mix of local owners and institutional buyers, having expert representation protects your negotiating position and typically costs you nothing as the tenant. Our guide on <a href="/blog/do-you-need-a-commercial-real-estate-broker">working with a commercial real estate broker</a> explains how that relationship works.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors: focus on two categories. First, properties in the immediate trade area of Tampa Rithm and the Fletcher District that are currently priced to their existing (underperforming) income rather than their prospective income after the surrounding demand generators deliver. Strip centers with below-market rents, pad sites with short-term leases rolling soon, and underutilized commercial land with entitlements in place are all worth underwriting in the 2026 acquisition environment. Second, medical office and lab space near the Moffitt campus on Bruce B. Downs and Bearss, where Moffitt's research growth creates structural demand that is not dependent on the student housing cycle at all. Barrett Henry has 23+ years of experience with investment acquisition and tenant representation across all of Hillsborough County through REMAX Collective. Call <a href="tel:8137337907">(813) 733-7907</a> or visit our <a href="/contact">contact page</a> to discuss what you are looking for.
        </p>

        {/* ---- Mid-article CTA ---- */}
        <div className="my-10 rounded-lg bg-[#1a1a1a] p-8 text-center text-white">
          <p className="text-lg font-bold">Evaluating North Tampa Before the Corridor Reprices?</p>
          <p className="mt-2 text-white/80">
            Call Barrett Henry at{" "}
            <a href="tel:8137337907" className="underline">
              (813) 733-7907
            </a>{" "}
            or{" "}
            <a href="/contact" className="underline">
              send a message
            </a>
            . Tenant representation costs you nothing.
          </p>
        </div>
      </article>

      {/* ---- FAQ Section ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

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
            <p className="text-sm text-[#666666]">
              Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett has 23+ years of real estate experience helping tenants and investors navigate emerging and established commercial markets across Tampa Bay. He serves all 67 Florida counties from offices in Tampa, Largo, and Brandon.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Market data cited reflects publicly available sources as of mid-2026. Project timelines and program details are subject to change. Consult qualified professionals before making real estate decisions.
        </p>
        <p className="mt-2 text-xs text-[#999999]">Last updated: August 2026</p>
      </section>

      <CTASection
        heading="North Tampa Is Repricing — Move Before the Fletcher District and Tampa Rithm Change the Math"
        body="Barrett Henry has 23+ years of experience identifying emerging commercial corridors across Hillsborough County before rents reflect the demand. Call (813) 733-7907 to discuss tenant representation or investment acquisition in the North Tampa / USF corridor."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
