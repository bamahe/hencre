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
 * Blog: Westshore Tampa Office Market 2026
 * Where Tampa Bay's tightest office submarket stands heading into H2.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Westshore Tampa Office Market 2026 | HenCRE",
  description:
    "Westshore is Tampa Bay's largest and most active office submarket — with vacancy at 16%, rents at all-time highs, and landmark buildings nearly full. Here's what tenants and investors need to know in 2026.",
  alternates: { canonical: "https://hencre.com/blog/westshore-tampa-office-market-2026" },
  openGraph: {
    title: "Westshore Tampa Office Market 2026",
    description:
      "Vacancy down to 16%, asking rents at an all-time high, and several Class A towers with under 20,000 SF remaining — the Westshore office submarket is the tightest it has been since before the pandemic.",
    url: "https://hencre.com/blog/westshore-tampa-office-market-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Westshore Tampa office towers and skyline viewed from Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop"],
  },
};

const faqItems = [
  {
    question: "What is the office vacancy rate in Westshore Tampa in 2026?",
    answer:
      "The Westshore submarket recorded a vacancy rate of approximately 16.0% in Q2 2026, down from higher levels seen during the 2022–2024 correction. That is below the broader Tampa Bay metro average and reflects sustained demand from financial services, professional services, and corporate headquarters tenants. Class A availability at top-of-market buildings like SkyCenter One and 1001 Water Street has fallen even further, with some of those assets reporting fewer than 20,000 square feet of remaining availability.",
  },
  {
    question: "What are average office rents in the Westshore business district in 2026?",
    answer:
      "Full-service asking rents across Tampa Bay's office market reached a new all-time high of $30.30 per square foot in Q1 2026 — up 5.6 percent year over year. Within Westshore specifically, top-of-market Class A and trophy buildings command $45 to $49 per square foot on a full-service gross basis. Class B space in the submarket generally ranges from $24 to $32 per square foot depending on building quality, parking ratio, and proximity to the interstate interchange.",
  },
  {
    question: "Which buildings in Westshore are nearly fully leased?",
    answer:
      "Several of Westshore's most prominent office assets are approaching capacity as of mid-2026. SkyCenter One reported fewer than 5,000 square feet of remaining availability. 1001 Water Street had under 20,000 square feet available. Union East and Union West at Midtown Tampa are both fully leased, and Midtown West itself reached full occupancy. These are among the most sought-after addresses in the submarket, and tenants requiring large contiguous blocks are increasingly being directed toward suburban or secondary Westshore alternatives.",
  },
  {
    question: "What types of tenants are leasing office space in Westshore?",
    answer:
      "Westshore's tenant base skews toward financial services, insurance, professional services, and corporate headquarters operations. Philip Morris International signed a 56,000-square-foot lease in the submarket in early 2026, one of the largest office transactions in the Tampa Bay region that year. Financial firms, healthcare administration groups, and technology companies with significant back-office functions have also been among the more active tenants. The submarket draws tenants who need proximity to Tampa International Airport, easy access to I-275 and the Veterans Expressway, and a walkable amenity base.",
  },
  {
    question: "Is Westshore a good location for a business that needs to attract employees?",
    answer:
      "Yes — Westshore consistently ranks as one of Tampa Bay's most employee-friendly office locations. The combination of walkable restaurants and retail, access to Westshore Plaza, proximity to the airport for traveling employees, and strong highway connectivity from multiple directions makes it easy for employees commuting from Hillsborough, Pinellas, and Pasco counties. For companies focused on in-office attendance, a Westshore address reduces friction because it is genuinely convenient for a wide geographic employee base.",
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
          name: "Westshore Tampa Office Market 2026",
          item: "https://hencre.com/blog/westshore-tampa-office-market-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Westshore Tampa Office Market 2026",
      description:
        "Westshore is Tampa Bay's largest and most active office submarket — with vacancy at 16%, rents at all-time highs, and landmark buildings nearly full.",
      datePublished: "2026-08-07",
      dateModified: "2026-08-23",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/westshore-tampa-office-market-2026",
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
    description:
      "The full Tampa Bay office market picture — vacancy, absorption, Class A demand, and what the Q2 data means for tenants and investors.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description:
      "Barrett negotiates on behalf of office tenants to secure better rates, more TI, and stronger protections — at no cost to the tenant.",
  },
  {
    title: "Office Space Listings and Guidance",
    href: "/commercial/office-space",
    description:
      "Browse available office properties across Tampa Bay and learn how Barrett approaches office tenant and investor assignments.",
  },
  {
    title: "Hillsborough County Commercial Real Estate",
    href: "/markets/hillsborough",
    description:
      "Westshore sits within Hillsborough County — this market overview covers the full county investment and leasing landscape.",
  },
  {
    title: "Tampa Hillsborough Commercial Real Estate Guide 2026",
    href: "/blog/tampa-hillsborough-commercial-real-estate-guide-2026",
    description:
      "A deep dive into Tampa and Hillsborough County's commercial real estate market across all property types in 2026.",
  },
  {
    title: "How Commercial Leases Differ from Residential",
    href: "/blog/how-commercial-leases-differ-from-residential",
    description:
      "Essential reading before you sign your first office lease — what terms mean, what to negotiate, and where tenants lose money.",
  },
  {
    title: "Understanding CAM Charges: Tenant's Guide",
    href: "/blog/understanding-cam-charges-tenants-guide",
    description:
      "CAM, operating expenses, and gross-up provisions in office leases explained — including how Westshore landlords typically structure them.",
  },
  {
    title: "Do You Need a Commercial Real Estate Broker?",
    href: "/blog/do-you-need-a-commercial-real-estate-broker",
    description:
      "A straightforward look at what a CRE advisor does, how they are compensated, and when engaging one protects your interests.",
  },
  {
    title: "Tampa Bay Flex Office & Coworking 2026",
    href: "/blog/tampa-bay-flex-office-coworking-2026",
    description:
      "If a full traditional lease in Westshore is more than you need right now, this guide covers Tampa Bay's flex and coworking options.",
  },
  {
    title: "Midtown Tampa Commercial Real Estate 2026",
    href: "/blog/midtown-tampa-commercial-real-estate-2026",
    description:
      "Midtown Tampa sits adjacent to Westshore and is delivering fully-leased office product — learn what that means for tenants being priced out of core Westshore.",
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
            label: "Westshore Tampa Office Market 2026",
            href: "/blog/westshore-tampa-office-market-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop"
        title="Westshore Tampa Office Market 2026"
        subtitle="Tampa Bay's most active office submarket has vacancy at 16%, asking rents at all-time highs, and landmark buildings running out of space. Here's where tenants and investors stand heading into the second half of 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is the Westshore Business District Tampa's Most Watched Office Submarket?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Westshore has served as Tampa Bay's office anchor for decades — and in 2026, it is earning that title more definitively than at any point since the pre-pandemic era. The submarket consistently accounts for more than a third of total Tampa Bay office leasing volume, and through the first half of 2026, it has posted the strongest absorption numbers the market has seen in years. Vacancy fell to approximately 16.0% in Q2 2026, well below the broader metro average, driven by a sustained wave of financial services, professional services, and corporate tenants committing to long-term leases in the submarket's Class A inventory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What makes Westshore distinctive is not just its size — roughly the largest concentration of office product in the Tampa Bay region — but the quality of its tenant base and the geographic advantages that keep drawing occupiers here. The submarket sits at the confluence of I-275, the Veteran's Expressway, and Gandy Boulevard, within five minutes of Tampa International Airport. That transportation profile makes it a logical choice for companies that need to move executives across the country regularly and want employees commuting from Pinellas, Hillsborough, and Pasco counties to find the location genuinely convenient. For a deeper look at how Westshore's performance fits into the broader metro, see our <a href="/blog/tampa-bay-office-market-q2-2026">Tampa Bay Office Market Q2 2026 report</a>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does Westshore Office Vacancy Look Like in Mid-2026 — and Where Is Space Actually Available?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At roughly 16.0% as of Q2 2026, Westshore's vacancy rate represents a meaningful improvement from the 19–21% range the submarket touched in 2023 and 2024. The headline number, however, masks a deeper split. Trophy and four- and five-star Class A assets in the submarket are dramatically tighter than the overall figure suggests. SkyCenter One — one of the most sought-after office addresses near the airport — reported fewer than 5,000 square feet of remaining availability by mid-year. 1001 Water Street, the flagship of the extended Westshore/Midtown corridor, had under 20,000 square feet left. Union East, Union West, and Midtown West are all fully leased.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What that concentration of leased-up product means practically: if you are a tenant requiring a large contiguous block — 20,000 square feet or more — in a trophy building in core Westshore, your options as of August 2026 are thin. Tenants in that segment are being pushed into one of three outcomes: accepting a smaller footprint, considering sublease space released by tenants who have downsized their physical offices, or looking at adjacent submarkets including Midtown Tampa, Rocky Point, and the North Dale Mabry corridor. Smaller tenants in the 2,000–8,000 square foot range have more options, particularly in Class B inventory where vacancy remains higher and landlords are more willing to offer concessions. See our <a href="/commercial/office-space">office space listings page</a> for current availability across these corridors.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are Office Rents Doing in Westshore, and How Do They Compare Across Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Asking rents across Tampa Bay's office market reached a new all-time high of $30.30 per square foot on a full-service gross basis in Q1 2026 — a 5.6% increase year over year according to Avison Young's Q1 2026 Tampa Office Market Report. That marketwide figure is the average across all asset classes and submarkets, which means Westshore's top-of-market buildings sit meaningfully above it.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In the Westshore core, Class A and trophy product commands $45 to $49 per square foot on a full-service gross basis for direct leases in the best buildings. Class A product in secondary Westshore locations — slightly older buildings, less prominent addresses — typically ranges from $34 to $42 per square foot. Class B inventory in the submarket runs $24 to $32 per square foot, and landlords there are still offering some tenant improvement allowances and free rent to attract credit tenants. For context, suburban Class B office elsewhere in Hillsborough County can be found in the $22 to $28 range — representing the discount a tenant earns by moving away from Westshore's amenities and transit profile. Our <a href="/blog/tampa-hillsborough-commercial-real-estate-guide-2026">Hillsborough County CRE guide</a> covers how those suburban options compare for tenants with location flexibility.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Who Is Leasing Office Space in Westshore in 2026 — and What Can That Tell You About Your Deal?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The largest single office lease signed in Westshore in early 2026 was Philip Morris International's 56,000-square-foot commitment — one of the biggest corporate office transactions in Tampa Bay that year. That deal is notable not just for its size but for what it signals about the type of tenant Westshore continues to attract: well-capitalized, multinational corporations selecting the submarket as a strategic base of operations for their Florida or Southeast regional presence.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Below the headline transaction level, Westshore's tenant roster in 2026 is dominated by financial services firms, insurance companies, healthcare administration groups, and professional services practices. These are sectors that have consistently favored Westshore over lower-cost alternatives because their workforce and client expectations require a Class A professional environment. Several firms in the 10,000 to 30,000 square foot range — mid-size operations that are the lifeblood of any office submarket — have also executed lease renewals in 2026, reflecting confidence in Westshore as a long-term operating base rather than a temporary post-pandemic accommodation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a tenant negotiating in this environment, understanding who you are competing with matters. Landlords holding the tightest product are not under pressure to discount, and the most common concession packages in 2026 are landing in the $40 to $60 per square foot range for TI on new ten-year deals in Class A space — versus the $80 to $100 packages sometimes available during the pandemic correction. Barrett Henry represents tenants in exactly these negotiations, helping them build leverage from market data rather than accepting landlord-dictated terms. Call <a href="tel:8137337907">(813) 733-7907</a> to discuss your specific situation before you sign anything.
        </p>

        {/* ---- Inline image ---- */}
        <div className="my-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80"
            alt="Class A office interior in the Westshore business district, Tampa FL"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Westshore Class A office space commands $45–$49/SF full-service gross at top-of-market buildings in 2026.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should a Tenant Expect When Negotiating an Office Lease in Westshore Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The negotiating environment in Westshore has shifted materially since 2023, when landlords were offering aggressive concessions to fill space. In 2026, with vacancy at multi-year lows and several buildings at or near capacity, the balance of power has moved toward landlords in the best assets. That does not mean tenants have no leverage — it means leverage is earned through preparation rather than assumed from market conditions.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In practice, tenants negotiating in the current Westshore market should focus on four areas. First, start early -- 18 to 24 months before your current lease expires, not 6 months. The compression of available space in the best buildings means optionality disappears quickly. Second, understand the full cost of a lease, not just the base rent. CAM charges, insurance pass-throughs, and gross-up provisions can add meaningfully to your effective occupancy cost in a Westshore full-service or modified gross lease. Our <a href="/blog/understanding-cam-charges-tenants-guide">CAM charges guide</a> explains what to look for. Third, evaluate sublease opportunities alongside direct leases -- tenants who downsized out of premium Westshore space in 2022-2024 may have released quality space at below-market rates. Fourth, use a commercial broker who represents tenants specifically, not one who has a relationship with the building you are considering. See our <a href="/blog/do-you-need-a-commercial-real-estate-broker">guide on working with a commercial broker</a> to understand how that representation works and why it costs you nothing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Westshore a Good Bet for Office Investors in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Office investment nationally remains in a complex cycle, but Westshore's fundamentals put it in a noticeably different category from the distressed suburban office markets that have dominated headlines. Occupancy at the submarket's premier buildings is high and trending higher. The tenant base is creditworthy and signing long-term leases, not month-to-month holdovers. Rents are at all-time highs, not under deflationary pressure. For an investor willing to focus on the right asset type in the right location, Westshore offers a more defensible risk profile than most U.S. office submarkets in 2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The acquisition environment is more nuanced. Sellers of quality Westshore assets are not distressed, which means pricing reflects the submarket's strong fundamentals rather than the discount-driven environment that characterized 2022–2024 national office sales. Buyers need a clear view of their hold strategy — a value-add play in a Class B building that needs repositioning trades differently than a stabilized Class A acquisition with long-term in-place leases. If you are evaluating Westshore office as an investment, our <a href="/blog/how-to-calculate-commercial-property-roi">commercial property ROI guide</a> and <a href="/services/investment-sales">investment sales services page</a> are the right starting points. If you want to discuss specific assets or off-market opportunities in the submarket, call Barrett Henry directly at <a href="tel:8137337907">(813) 733-7907</a>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Westshore Compare to Adjacent Submarkets — Midtown Tampa, Rocky Point, and North Dale Mabry?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tenants being priced out of core Westshore or unable to find the contiguous block they need have three primary alternative submarkets to evaluate. Midtown Tampa, immediately to Westshore's east along N. Dale Mabry, has delivered new Class A product in recent years — but Union East, Union West, and Midtown West are fully leased, which means Midtown is nearly as tight as Westshore in its best product. Rents there are competitive with Westshore Class A, making it a lateral move in cost terms, though the live-work-play amenity base at Midtown itself is genuinely attractive for tenant recruitment. See our <a href="/blog/midtown-tampa-commercial-real-estate-2026">Midtown Tampa CRE guide</a> for more on that submarket.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Rocky Point, situated between Westshore and the Courtney Campbell Causeway, offers water-adjacent office product at rents that can run $5 to $10 per square foot below core Westshore's top-of-market figures. The trade-off is a smaller tenant amenity base and a location that works best for tenants whose workforce lives in Pinellas County. North Dale Mabry and the area around Carrollwood provide genuine suburban alternatives — Class B product at $22 to $28 per square foot full-service, better parking ratios, and more ground-floor visibility — but they serve a different business profile than a company that needs to project a Westshore-caliber address. For tenants with flexibility on location, those suburban corridors can represent significant cost savings over a five-to-ten-year lease term. If you are weighing those options, our <a href="/blog/tampa-bay-office-market-q2-2026">Q2 2026 Tampa Bay office market overview</a> provides comparative data across the full metro.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should You Do Before You Start Your Westshore Office Search in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Three things, in order. First, nail down your space requirement — not just square footage, but parking ratio, suite configuration (private offices versus open plan), signage requirements, and whether you need a dedicated entrance or a multi-tenant building setup. Westshore has product that fits a wide range of those requirements, but wasting time touring buildings that do not match your operational needs is expensive when available options are limited.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Second, understand your timeline. If your current lease expires in the next 12 months, you are already in a constrained position in Westshore's current market. If you have 18 to 24 months, you have the runway to tour properly, negotiate deliberately, and allow for a buildout without compressing your timeline so much that a landlord can leverage your urgency against you. Third, engage a tenant representative before you make any calls to landlords or respond to listings. Every landlord in Westshore has their own broker whose job is to maximize the landlord's outcome — you need someone in your corner whose fiduciary is exclusively to you. Barrett Henry has 23+ years of experience representing tenants across all of Tampa Bay through REMAX Collective, with offices in Tampa, Largo, and Brandon. There is no cost to you for that representation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are relocating a business or moving a team to Tampa from out of state, the same advice applies. Tampa Bay offers convenient access across <a href="/markets/hillsborough">Hillsborough</a>, <a href="/markets/pinellas">Pinellas</a>, and <a href="/markets/pasco">Pasco</a> counties -- so employees commuting from any direction will find Westshore genuinely accessible.
        </p>

        {/* ---- Mid-article CTA ---- */}
        <div className="my-10 rounded-lg bg-[#1a1a1a] p-8 text-center text-white">
          <p className="text-lg font-bold">Need Office Space in Westshore? Start Here.</p>
          <p className="mt-2 text-white/80">
            Call Barrett Henry at{" "}
            <a href="tel:8137337907" className="underline">
              (813) 733-7907
            </a>{" "}
            or{" "}
            <a href="/contact" className="underline">
              send a message
            </a>
            . Tenant representation is at no cost to you.
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
          <img
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
              Barrett has 23+ years of real estate experience helping office tenants and investors navigate Tampa Bay's most competitive submarkets. He serves all 67 Florida counties from offices in Tampa, Largo, and Brandon.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Market data cited reflects publicly available sources as of Q1–Q2 2026. Consult qualified professionals before making real estate decisions.
        </p>
        <p className="mt-2 text-xs text-[#999999]">Last updated: August 2026</p>
      </section>

      <CTASection
        heading="Westshore Office Space Is Tighter Than It Looks — Move Before Your Options Narrow Further"
        body="Barrett Henry has 23+ years of experience representing tenants and investors across Tampa Bay's most competitive office submarkets. Call (813) 733-7907 to get a current shortlist of available space in Westshore and adjacent submarkets before the window closes."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
