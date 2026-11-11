import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Stetson Law Tampa Riverfront Mixed-Use Redevelopment 2026
 * Bromley Companies + Stetson University: 440k sq ft office, 670 apartments,
 * 300 hotel keys on the Hillsborough River.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Stetson Law Tampa Riverfront Redevelopment: CRE Guide 2026 | HenCRE",
  description:
    "The Bromley Companies, the developer behind Midtown Tampa, is partnering with Stetson University to redevelop its 6.5-acre Tampa riverfront law center site into 440,000 sq ft of office, 670 apartments, 300 hotel keys, and 37,500 sq ft of retail. Here is what CRE investors and tenants need to know.",
  alternates: { canonical: "https://hencre.com/blog/stetson-law-tampa-riverfront-mixed-use-cre-2026" },
  openGraph: {
    title: "Stetson Law Tampa Riverfront Mixed-Use Redevelopment: CRE Investor & Tenant Guide 2026",
    description:
      "Bromley Companies, builder of Midtown Tampa, is transforming Stetson University's 6.5-acre Tampa riverfront site into a major mixed-use campus. What it means for office, multifamily, and retail investors in the Heights District corridor.",
    url: "https://hencre.com/blog/stetson-law-tampa-riverfront-mixed-use-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern mixed-use riverfront development in Tampa with office towers and riverside promenade",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Stetson Law Tampa riverfront redevelopment?",
    answer:
      "The Stetson Law Tampa riverfront redevelopment is a large-scale mixed-use project in which The Bromley Companies, the developer behind Midtown Tampa, has partnered with Stetson University to redevelop Stetson's 6.5-acre Tampa law school campus site along the Hillsborough River. The proposed program includes approximately 664 to 670 apartments, 300 hotel keys, 440,000 square feet of office space, and roughly 37,500 square feet of ground-floor retail, plus a newly constructed Stetson University law center building. Stetson retains ownership of the land and permanent access rights to the hotel and structured parking. As of late 2026, Bromley has filed a rezoning application with Tampa City Council and is awaiting approval before proceeding. Groundbreaking is targeted for late 2027 at the earliest.",
  },
  {
    question: "Where exactly is the Stetson Law Tampa site located?",
    answer:
      "Stetson University's Tampa Law Center is located on the east bank of the Hillsborough River in Tampa's urban core, positioned between the Heights District to the north, downtown Tampa to the south, and the Riverwalk to the west. The site sits at the convergence of several of Tampa's most active redevelopment corridors, making it one of the more strategically significant infill parcels to enter the development pipeline in Tampa in recent years. Its riverfront position is comparable in some respects to Water Street Tampa's relationship to the Garrison Channel, though the Stetson site is primarily office- and hotel-led rather than residential-first.",
  },
  {
    question: "Who is developing the Stetson Law Tampa project?",
    answer:
      "The Bromley Companies is the lead developer, in partnership with Stetson University, which owns the land and will occupy a new law center building that is the first phase of the project. Bromley has deep Tampa Bay credentials, the firm developed the $1 billion Midtown Tampa district along N. Dale Mabry Highway, which as of mid-2026 is fully leased on its office component and anchored by Whole Foods, REI, and a growing roster of lifestyle retailers. Bromley's choice to pursue a second major Tampa mixed-use project reinforces its bet on Tampa's urban core as a viable location for large-scale walkable development. No institutional equity partner has been publicly named for the Stetson project, though Bromley typically capitalizes projects with a combination of institutional equity and construction lending.",
  },
  {
    question: "When will the Stetson Law Tampa project break ground and deliver?",
    answer:
      "As of November 2026, Bromley Companies has filed a rezoning application with Tampa City Council, and council approval is pending. If rezoning is approved in early 2027 as expected, Phase 1, the new Stetson University law center building, could break ground in late 2027. Phase 2, which includes demolition of the existing law school building and construction of the office, residential, hotel, and retail components, would follow. Full project delivery is likely a 2029 to 2031 timeline depending on financing markets, construction costs, and pre-leasing velocity on the office component.",
  },
  {
    question: "How does the Stetson Law project affect CRE investors and businesses in the Heights and downtown Tampa corridors?",
    answer:
      "The Stetson Law redevelopment adds meaningful near-term and long-term pressure to commercial real estate values and demand along the Heights-downtown corridor. Near term, the announcement itself validates the investment thesis for the surrounding submarket: Bromley's decision to bring its institutional capital and development expertise to this site signals developer confidence in the corridor's absorption capacity. Long term, the project adds 440,000 square feet of Class A office, 670 rental apartments, and 300 hotel keys to a walkable riverfront location, a supply addition that will attract employers, workers, and visitors who will in turn support retail and service businesses in Tampa Heights, downtown Tampa, and the Channel District. Investors evaluating multifamily assets, retail strip centers, or flex office properties within a mile of the Stetson site should factor this project's delivery timeline into their hold-period underwriting.",
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
          name: "Stetson Law Tampa Riverfront Mixed-Use Redevelopment 2026",
          item: "https://hencre.com/blog/stetson-law-tampa-riverfront-mixed-use-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Stetson Law Tampa Riverfront Mixed-Use Redevelopment: CRE Investor & Tenant Guide 2026",
      description:
        "Bromley Companies is partnering with Stetson University to redevelop a 6.5-acre Tampa riverfront site into 440,000 sq ft of office, 670 apartments, 300 hotel keys, and 37,500 sq ft of retail. A CRE investor and tenant guide.",
      datePublished: "2026-11-09",
      dateModified: "2026-11-11",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/stetson-law-tampa-riverfront-mixed-use-cre-2026",
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
    title: "Midtown Tampa Commercial Real Estate 2026",
    href: "/blog/midtown-tampa-commercial-real-estate-2026",
    description: "Bromley's first Tampa project is 100% leased, here is what the Stetson project means by comparison.",
  },
  {
    title: "Tampa Heights Commercial Real Estate 2026",
    href: "/blog/tampa-heights-commercial-real-estate-2026",
    description: "The Heights District corridor is the immediate northern neighbor of the Stetson Law site.",
  },
  {
    title: "Tampa Bay Office Market Q4 2026",
    href: "/blog/tampa-bay-office-market-q4-2026",
    description: "How 440,000 square feet of new riverfront office fits into Tampa Bay's current office pipeline.",
  },
  {
    title: "Tampa Bay Multifamily Market Mid-2026",
    href: "/blog/tampa-bay-multifamily-market-mid-2026",
    description: "The apartment and multifamily context for 670 new riverfront units entering the pipeline.",
  },
  {
    title: "Water Street Tampa 33-Story Tower 2026",
    href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    description: "How the downtown Tampa mega-development compares to the Stetson riverfront project.",
  },
  {
    title: "Tampa Bay Hotel & Hospitality CRE 2026",
    href: "/blog/tampa-bay-hotel-hospitality-cre-2026",
    description: "The hotel market backdrop for 300 new keys coming to Tampa's urban riverfront.",
  },
  {
    title: "Tampa Bay Mixed-Use & Live Local Act 2026",
    href: "/blog/florida-live-local-act-tampa-bay-cre-2026",
    description: "Florida Live Local Act implications for the residential component of mixed-use projects like Stetson.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Core criteria for evaluating CRE acquisitions in Tampa Bay's high-growth urban corridors.",
  },
  {
    title: "Hillsborough County Market",
    href: "/markets/hillsborough",
    description: "Commercial real estate data and submarket trends across Hillsborough County.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "Barrett helps investors source and acquire properties near Tampa's urban redevelopment corridors.",
  },
];

export default function StetsonLawTampaRiverfrontMixedUseCRE2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Stetson Law Tampa Riverfront Mixed-Use Redevelopment 2026", href: "/blog/stetson-law-tampa-riverfront-mixed-use-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="Stetson Law Tampa Riverfront Mixed-Use Redevelopment 2026"
        subtitle="Bromley Companies, the developer behind Midtown Tampa, is partnering with Stetson University to transform a 6.5-acre riverfront site into 440,000 sq ft of office, 670 apartments, 300 hotel keys, and 37,500 sq ft of retail. Here is what CRE investors and tenants need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When The Bromley Companies built Midtown Tampa, the market verdict came back faster than almost anyone expected: the district&apos;s office tower reached 100% occupancy in under a year, and national retailers keep joining the tenant roster. Now Bromley is making a second major bet on Tampa&apos;s urban fabric, this time on the Hillsborough River, in partnership with Stetson University.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          The Stetson Law Tampa riverfront redevelopment proposes to transform a 6.5-acre law school site into a full mixed-use campus: 440,000 square feet of{" "}
          <Link href="/commercial/office-space" className="text-accent underline">Class A office space</Link>,
          664 to 670 apartments, 300 hotel keys, and roughly 37,500 square feet of ground-floor{" "}
          <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>{" "}
         , with Stetson University retaining land ownership and moving into a newly constructed law center building that anchors Phase 1. If approved and built on schedule, this project will be one of the most consequential additions to Tampa&apos;s urban riverfront since Water Street Tampa began delivering downtown.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          For CRE investors and business tenants tracking the{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>{" "}
          market, the Stetson project is both a near-term signal and a long-term demand driver. Here is what the numbers, the phasing, and the developer&apos;s track record tell us about where this project is headed.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is Bromley Companies Proposing at the Stetson Tampa Site?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Bromley Companies, developer of the $1 billion Midtown Tampa district, announced in mid-2026 a partnership with Stetson University to redevelop Stetson&apos;s Tampa Law Center campus. The site sits on 6.5 acres along the east bank of the Hillsborough River, positioned between Tampa Heights to the north and downtown Tampa to the south.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The proposed program includes:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>440,000 square feet of Class A office.</strong> This is the commercial anchor of the project, a major riverfront office component that, if Bromley replicates even a fraction of Midtown East&apos;s leasing velocity, would represent a significant new employment node for Tampa&apos;s urban core.</li>
          <li><strong>664 to 670 apartments.</strong> A substantial multifamily component that serves both Stetson&apos;s student and alumni community and the broader urban renter pool in the Heights-downtown corridor. Tampa Bay&apos;s apartment market has absorbed significant new supply in 2025 and 2026, but Class A riverfront product in walkable urban locations continues to command a rent premium. See our{" "}
            <Link href="/blog/tampa-bay-multifamily-market-mid-2026" className="text-accent underline">Tampa Bay multifamily market guide</Link>{" "}
            for the broader supply context.</li>
          <li><strong>300 hotel keys.</strong> A significant hospitality addition to Tampa&apos;s riverfront. Stetson retains permanent access to the hotel and structured parking as part of the land partnership agreement, ensuring the university benefits from the hospitality revenue stream while Bromley manages operations.</li>
          <li><strong>Approximately 37,500 square feet of ground-floor retail.</strong> Modest in the context of the total program, but strategically placed at the base of a riverfront development with direct Riverwalk access. Ground-floor retail in this location has the potential to serve office workers, hotel guests, apartment residents, and Riverwalk pedestrian traffic simultaneously.</li>
          <li><strong>A new Stetson University Law Center building.</strong> Phase 1 of the project. Stetson remains a full educational anchor on the site, the new law center is built before any existing structure is demolished, ensuring continuity of the law school&apos;s operations throughout the construction sequence.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Is the Bromley-Stetson Partnership Significant for the Heights and Downtown Tampa CRE Markets?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Bromley&apos;s decision to bring institutional capital and development expertise to the Stetson site sends a clear signal about developer sentiment toward Tampa&apos;s urban riverfront corridor. At Midtown Tampa, Bromley demonstrated that large-scale mixed-use development could work in a North Tampa corridor that was historically considered too car-dependent for walkable urban formats. At the Stetson site, the thesis is different, this is a walkable urban riverfront location that already has strong fundamentals, and the bet is that Class A office demand, urban multifamily absorption, and hospitality performance can all be sustained at the scale Bromley is proposing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the{" "}
          <Link href="/blog/tampa-heights-commercial-real-estate-2026" className="text-accent underline">Tampa Heights commercial real estate market</Link>,
          the Stetson project represents a demand-side catalyst. Tampa Heights has emerged as one of Tampa Bay&apos;s most active restaurant, entertainment, and boutique retail corridors, Armature Works, the Heights Public Market, and a growing number of independent operators have established the district&apos;s character. A 440,000-square-foot office building and 670-apartment complex a few blocks to the south would add thousands of daily workers and residents to the Heights trade area, potentially sustaining a second wave of retail and food-and-beverage investment in the district.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For downtown Tampa, the project adds institutional-quality office supply in a riverfront walkable location, something that the{" "}
          <Link href="/blog/tampa-bay-office-market-q4-2026" className="text-accent underline">Q4 2026 Tampa Bay office market</Link>{" "}
          shows is exactly the product category that is absorbing successfully while conventional suburban office struggles. The project would expand the effective downtown office campus northward along the river, reinforcing the corridor&apos;s role as Tampa&apos;s primary urban employment spine.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Timeline and What Approvals Are Still Needed?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          As of November 2026, Bromley Companies has filed a rezoning application with Tampa City Council. The existing Stetson Law Center site likely carries zoning that accommodates educational use but not the full density of the proposed mixed-use program, hence the need for council action. Tampa City Council has shown consistent willingness to approve high-density mixed-use projects in the urban core over the past several years, particularly those with riverfront activation and affordable housing components, so approval is widely anticipated.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If rezoning moves forward in early 2027 on the anticipated schedule:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Phase 1 (new law center building):</strong> Could break ground in late 2027. This phase has the most straightforward financing path, Stetson University is an established institutional borrower with a clear programmatic need for the building.</li>
          <li><strong>Phase 2 (demolition of existing building, construction of office, residential, hotel, and retail):</strong> Would follow Phase 1 completion, likely with construction starting in 2028 and delivery in the 2030 to 2031 range depending on financing markets, construction cost trajectory, and pre-leasing on the office component.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors evaluating property in the Stetson corridor should use a 2029 to 2031 delivery window as the working assumption for underwriting purposes, conservative enough to protect against construction delays but realistic enough to inform hold-period projections on nearby assets.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Should CRE Investors Position Themselves Around the Stetson Riverfront Project?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Unlike Water Street Tampa or Midtown Tampa, the Stetson Law redevelopment is still in its pre-construction phase, which means the investment opportunity in the surrounding submarket is at an earlier stage of the typical mixed-use halo cycle. That creates both more risk and more upside potential than purchasing near a stabilized project.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Retail and restaurant space in Tampa Heights.</strong> The Heights Public Market, the Armature Works corridor, and the emerging retail blocks along North Boulevard and Central Avenue are already generating strong traffic. A Stetson-scale development to the south adds a demand layer that would sustain a second wave of retail leasing. Investors acquiring retail or mixed-use buildings in Tampa Heights today are buying before the Stetson-driven demand materializes, which means they may be acquiring at prices that do not yet reflect the project&apos;s full impact.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Multifamily assets in the Heights-Seminole Heights corridor.</strong> The 670 apartment units in the Stetson project itself are future competition for nearby Class A rentals, but they are also a signal that the corridor can support urban rental housing at scale. Smaller multifamily assets in Tampa Heights, Seminole Heights, and the Ybor fringe that are well-positioned for urban renters will benefit from the employment density the Stetson project adds. Buyers considering multifamily assets in this corridor should work through the{" "}
          <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">Tampa Bay multifamily investment framework</Link>{" "}
          with attention to the Stetson project&apos;s delivery timing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Property owners along the river corridor considering exit timing.</strong> Owners of commercial or mixed-use parcels near the Stetson site who are evaluating whether to sell should consider that the project&apos;s approval and groundbreaking milestones are likely to push land values higher in this submarket over the next 18 to 24 months. Owners who want to maximize their exit price may benefit from holding through the rezoning approval before listing, while owners who prefer a clean, fast sale before the market gets more competitive can find institutional and private buyers today who are already pricing the Stetson project&apos;s impact into their offers. If you need a fast-close option, our <Link href="/services/dispositions" className="text-accent underline">dispositions service</Link>{" "}
          can help structure a fast sale for commercial or investment properties in the Tampa urban corridor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Office tenants planning a 2028 to 2030 lease decision.</strong> Businesses that are negotiating or renewing office leases in the 2024 to 2026 window with terms expiring around 2029 to 2031 should put the Stetson riverfront office component on their radar now. If Bromley can replicate Midtown Tampa&apos;s leasing velocity, and there is good reason to think they can, given the riverfront location and institutional quality of the program, the Stetson office component will be heavily pre-leased before it delivers. Businesses that want to be in consideration for anchor or early-mover tenant positions should start conversations with their broker well before the building breaks ground.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does the Stetson Project Compare to Other Major Tampa Riverfront Developments?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa&apos;s urban riverfront has become a development corridor in its own right, with several major projects reshaping the river&apos;s east and west banks. The Stetson Law project occupies a distinct position in that landscape:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Versus Water Street Tampa.</strong> Water Street is a residential-first mega-development anchored by luxury condos and a new hotel cluster, with retail and office as supporting uses. The{" "}
            <Link href="/blog/water-street-tampa-33-story-tower-downtown-cre-2026" className="text-accent underline">Water Street tower pipeline</Link>{" "}
            continues to deliver new product downtown. The Stetson project is office-first, the 440,000-square-foot Class A component is the commercial anchor, with multifamily and hospitality as complementary uses. That means the Stetson project serves a different tenant and investor profile than Water Street.
          </li>
          <li>
            <strong>Versus the Historic Gas Plant District.</strong> The{" "}
            <Link href="/blog/historic-gas-plant-district-st-pete-cre-2026" className="text-accent underline">Historic Gas Plant redevelopment in St. Petersburg</Link>{" "}
            is the region&apos;s largest entertainment-anchored mixed-use project. The Stetson project is Tampa-based and office-anchored, a different product and a different demand driver. Both projects are emblematic of Tampa Bay&apos;s sustained appetite for large-scale mixed-use development.
          </li>
          <li>
            <strong>Versus Midtown Tampa.</strong> Bromley&apos;s first Tampa project succeeded by bringing walkable urban amenities to a suburban North Tampa corridor that was underserved by that format. The Stetson project reverses the equation, it brings large-scale institutional development to an already-walkable urban riverfront location, layering commercial density onto a corridor that already has the walkability and amenity base in place.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Stetson Redevelopment Mean for Residential Buyers and Renters Near the Heights?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 670 apartments in the Stetson program are a future addition, but the development&apos;s approval and groundbreaking milestones have already begun to influence how residential buyers and renters think about the Heights and downtown-adjacent neighborhoods. The employment density that a fully-leased Stetson office campus would add to the river corridor is a long-term positive for residential demand in the surrounding neighborhoods.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Residents considering the Heights, Seminole Heights, Ybor City, or downtown Tampa neighborhoods can explore market context in our{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County market guide</Link>{" "}
          and our{" "}
          <Link href="/blog/tampa-heights-commercial-real-estate-2026" className="text-accent underline">Tampa Heights commercial real estate overview</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on the Stetson Law Tampa Riverfront Redevelopment</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Stetson Law Tampa riverfront redevelopment is the most significant mixed-use project to enter the Heights-downtown Tampa pipeline in 2026. Bromley Companies has the track record, Midtown Tampa is proof, and the site has the fundamentals: riverfront access, Riverwalk proximity, urban walkability, and a university institutional partner that provides both Phase 1 certainty and long-term anchor credibility.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For CRE investors, the question is not whether this project will get built, it almost certainly will, given Bromley&apos;s capitalization and Tampa City Council&apos;s consistent support for urban infill. The question is how to position in the surrounding submarket before the project&apos;s delivery milestones push values higher. Tampa Heights retail and mixed-use assets, urban multifamily in the Heights corridor, and office tenants planning a 2029-to-2031 lease decision all have actionable reasons to move sooner rather than later.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay, including deep knowledge of the Heights District, downtown Tampa, and the emerging mixed-use corridors along the Hillsborough River, I help investors identify well-positioned acquisitions before major projects deliver and tenants get in front of office and retail opportunities before pre-leasing is complete. If the Stetson riverfront project is relevant to a decision you are making in 2026 or 2027,{" "}
          <Link href="/contact" className="text-accent underline">let&apos;s connect</Link>{" "}
          before the market moves further.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors comparing this project to other mixed-use opportunities across Tampa Bay can use the{" "}
          <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link>{" "}
          and our{" "}
          <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">commercial investment evaluation guide</Link>{" "}
          to frame their underwriting. Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience and specializes in commercial real estate across all 67 Florida counties. He serves tenants, landlords, investors, and owners from offices in Tampa, Largo, and Brandon. He advises on{" "}
          <Link href="/services/investment-sales" className="text-accent underline">investment sales</Link>,{" "}
          <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link>,
          and{" "}
          <Link href="/services/landlord-leasing" className="text-accent underline">landlord representation</Link>{" "}
          across the{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>{" "}
          and{" "}
          <Link href="/markets/pinellas" className="text-accent underline">Pinellas County</Link>{" "}
          markets.{" "}
          <Link href="/contact" className="text-accent underline">Contact Barrett</Link>{" "}
          at (813) 733-7907.
        </p>
        <p className="mt-10 text-xs text-[#666666]">Last updated: November 2026</p>
      </article>

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
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett has 23+ years of real estate experience and specializes in commercial real estate across all 67 Florida counties. He serves tenants, landlords, investors, and owners from offices in Tampa, Largo, and Brandon. Learn more at <Link href="/about" className="underline">hencre.com/about</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Consult qualified professionals before making real estate decisions.
        </p>
      </section>

      <CTASection
        heading="Investing or Leasing Near the Stetson Tampa Riverfront Redevelopment?"
        body="I help investors identify well-positioned acquisitions in Tampa's urban corridors and tenants get ahead of office and retail opportunities before pre-leasing closes. Call or message today to get in front of this market."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
