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
 * Blog: Tampa Bay Rays New Ballpark – Dale Mabry CRE Impact 2026
 * $2.36B stadium approved August 2026 at HCC Dale Mabry campus.
 * What stadium-anchored development means for CRE investors and tenants
 * along the Dale Mabry corridor and North Tampa.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Rays Ballpark: Dale Mabry CRE Impact 2026 | HenCRE",
  description:
    "The $2.36B Tampa Bay Rays ballpark at the Dale Mabry campus was approved in August 2026 with Opening Day 2029. Here is what stadium-anchored development means for commercial real estate investors and tenants along the Dale Mabry corridor and North Tampa.",
  alternates: { canonical: "https://hencre.com/blog/tampa-rays-ballpark-dale-mabry-cre-2026" },
  openGraph: {
    title: "Tampa Rays Ballpark: Dale Mabry CRE Impact 2026",
    description:
      "$2.36B ballpark approved. Opening Day 2029. The Dale Mabry corridor is positioned for stadium-anchored commercial development — restaurants, hotels, entertainment, and mixed-use. Here's the CRE investor and tenant breakdown.",
    url: "https://hencre.com/blog/tampa-rays-ballpark-dale-mabry-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Baseball stadium surrounded by mixed-use commercial development and entertainment district",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Tampa Bay Rays new ballpark deal approved in 2026?",
    answer:
      "The Tampa Bay Rays new ballpark is a $2.36 billion project approved by the Hillsborough County Commission and Tampa City Council in August 2026. The Rays are contributing approximately $1.37 billion, Hillsborough County is investing $796 million, and the City of Tampa is contributing $80 million. The ballpark will seat approximately 31,000 and is designed to anchor a broader mixed-use district. The project schedule calls for substantial completion by the end of 2028 and final completion in March 2029 for Opening Day. This is a separate project from the Hines–Rays redevelopment of the historic Tropicana Field site in St. Petersburg, which is an 86-acre mixed-use development of the old stadium site — the two projects represent the Rays' dual-market footprint across Tampa Bay.",
  },
  {
    question: "Where will the new Tampa Bay Rays ballpark be located?",
    answer:
      "The new Tampa Bay Rays ballpark will be located at the Hillsborough Community College Dale Mabry campus in North Tampa. The site sits along the Dale Mabry Highway corridor, one of Tampa's highest-traffic commercial arteries, with direct access from Interstate 275 and proximity to the Westshore Business District, Stadium area, and the densely developed retail and restaurant corridor stretching north through Carrollwood and Northdale. The Dale Mabry address positions the ballpark at the intersection of Tampa's established commercial density and the population growth corridors expanding northward through Land O'Lakes and Wesley Chapel in Pasco County.",
  },
  {
    question: "What commercial real estate opportunities does the Rays ballpark create in Tampa?",
    answer:
      "Stadium-anchored development creates commercial real estate demand in four primary categories. First, food and beverage: a 31,000-seat venue hosting 81 regular-season home games per year generates extraordinary demand for restaurants, bars, and entertainment venues within walking distance. Pre-game and post-game traffic in a destination-less corridor can be the entire business model for a well-located restaurant or sports bar. Second, hotel and hospitality: game-day and event demand for hotel rooms is consistent and predictable, and hoteliers underwriting properties near sports venues use a stadium-driven occupancy premium as a baseline in their proformas. Third, retail and entertainment: experience-oriented retail — sports merchandise, family entertainment, fitness, personal services — clusters around major entertainment venues where foot traffic is high and dwell times are long. Fourth, mixed-use residential and commercial: the city and county approval of a $2.36B stadium signals that infrastructure, zoning support, and public investment will follow, creating the conditions for broader mixed-use development in the immediate vicinity over the next five to ten years.",
  },
  {
    question: "When will the new Tampa Bay Rays stadium open and what is the development timeline?",
    answer:
      "The project schedule filed with the city and county calls for substantial completion of the ballpark by the end of 2028 and final completion in March 2029 for Opening Day of the 2029 season. Construction is expected to begin in 2026, following the completion of land preparation and HCC campus relocation planning. For commercial real estate investors and tenants, the practical implication is a two-to-three-year window to acquire or lease positions in the corridor before stadium-driven traffic reaches its first full season. Properties that trade at pre-stadium pricing in 2026 and 2027 will reflect none of the foot traffic, retail demand, or hospitality premium that a fully operational 31,000-seat venue brings. Investors who waited for the Amalie Arena to prove out before buying in the Channel District learned that lesson; the Dale Mabry stadium window is the same dynamic, compressed into a shorter construction timeline.",
  },
  {
    question: "Should investors buy commercial real estate near the new Rays stadium now or wait?",
    answer:
      "The economic case for acting before the stadium opens rather than after is straightforward: cap rate compression and price appreciation happen in anticipation of a stadium catalyst, not after it delivers. Markets that have studied the effect — Cumberland, Georgia around Truist Park; Arlington, Texas around Globe Life Field; Nashville-area stadium development — all show the same pattern: values in the immediately surrounding half-mile to mile radius begin rising when public approvals are in place, not when the first game is played. The Dale Mabry corridor approvals are in place as of August 2026. The three-year construction window before Opening Day 2029 is the investor entry point. Tenants signing 5- to 10-year leases in the corridor now will lock in pre-stadium rents; the same space will command materially higher rents once 81 games a year of incremental foot traffic is established. Whether the opportunity is outright acquisition of a restaurant pad, a retail strip, or a hospitality parcel, or a long-term lease for a food-and-beverage concept — acting in 2026 or 2027 captures the catalyst before the market prices it in.",
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
          name: "Tampa Rays Ballpark: Dale Mabry CRE Impact 2026",
          item: "https://hencre.com/blog/tampa-rays-ballpark-dale-mabry-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Rays Ballpark: Dale Mabry CRE Impact 2026",
      description:
        "The $2.36B Tampa Bay Rays ballpark at HCC Dale Mabry was approved August 2026 with Opening Day 2029. What stadium-anchored development means for commercial real estate investors and tenants along the Dale Mabry corridor — restaurants, hotels, entertainment, and mixed-use.",
      datePublished: "2026-10-07",
      dateModified: "2026-10-08",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-rays-ballpark-dale-mabry-cre-2026",
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
    title: "Dale Mabry Corridor Commercial Real Estate Tampa 2026",
    href: "/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026",
    description: "The full CRE picture along Tampa's highest-traffic commercial artery — before the stadium opens.",
  },
  {
    title: "North Tampa USF Corridor Commercial Real Estate 2026",
    href: "/blog/north-tampa-usf-corridor-commercial-real-estate-2026",
    description: "How the growing North Tampa corridor positions investors and tenants for the decade ahead.",
  },
  {
    title: "Tampa Bay Restaurant and Food & Beverage Space 2026",
    href: "/blog/tampa-bay-restaurant-food-beverage-space-2026",
    description: "The restaurant and F&B leasing market across Tampa Bay — where demand is strongest and rents are rising.",
  },
  {
    title: "Tampa Bay Hospitality and Hotel CRE 2026",
    href: "/blog/tampa-bay-hospitality-hotel-cre-2026",
    description: "How the hotel and hospitality sector is performing across Tampa Bay's major submarkets.",
  },
  {
    title: "Tampa Bay Experience and Entertainment CRE 2026",
    href: "/blog/tampa-bay-experience-entertainment-cre-2026",
    description: "The entertainment-use commercial real estate market — sports bars, axe throwing, bowling, escape rooms — and where it is expanding.",
  },
  {
    title: "Midtown Tampa Commercial Real Estate 2026",
    href: "/blog/midtown-tampa-commercial-real-estate-2026",
    description: "How Tampa's newest mixed-use district is maturing — and what it signals for stadium-adjacent development.",
  },
  {
    title: "Historic Gas Plant District St. Pete CRE 2026",
    href: "/blog/historic-gas-plant-district-st-pete-cre-2026",
    description: "The 86-acre Hines–Rays redevelopment of the Tropicana Field site — a separate, parallel CRE story across the bay.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Where net lease cap rates stand for retail, restaurant, and hospitality properties across Tampa Bay.",
  },
  {
    title: "Tampa Bay CRE Market Outlook Q4 2026",
    href: "/blog/tampa-bay-cre-market-outlook-q4-2026",
    description: "A cross-sector view of Tampa Bay commercial real estate entering the final quarter of 2026.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "The established commercial corridors of South Tampa and how they compare to the emerging stadium district.",
  },
];

export default function TampaBallparkDaleMabryCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Rays Ballpark: Dale Mabry CRE Impact 2026", href: "/blog/tampa-rays-ballpark-dale-mabry-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=1600&h=900&fit=crop"
        title="Tampa Rays Ballpark: What the $2.36B Stadium Means for Dale Mabry Commercial Real Estate"
        subtitle="Approved August 2026. Opening Day 2029. The three-year window before a 31,000-seat venue reshapes the Dale Mabry corridor is the commercial real estate opportunity investors and tenants need to understand now."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          The Tampa Bay Rays&apos; new $2.36 billion ballpark at the Dale Mabry campus of Hillsborough Community College was approved by the Hillsborough County Commission and Tampa City Council in August 2026 — and the commercial real estate story it sets in motion is one of the most significant catalyst opportunities in Tampa Bay in the past decade. A 31,000-seat venue hosting 81 regular-season home games per year, plus playoffs, concerts, and events, becomes the anchor tenant for an entirely new commercial ecosystem: restaurants, bars, hotels, entertainment concepts, retail, and mixed-use development that did not exist in the corridor before. This post breaks down what the approval means, where the development opportunity is concentrated, and why the two-to-three-year window before Opening Day 2029 is the investor and tenant entry point — before the market prices the stadium in.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Did Tampa Approve and Why Does It Matter for CRE?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The deal approved in August 2026 involves three parties: the Rays, Hillsborough County, and the City of Tampa. The Rays are contributing approximately $1.37 billion of the $2.36 billion total. Hillsborough County is investing $796 million and the city is contributing $80 million. The ballpark will seat approximately 31,000 — smaller than many legacy MLB stadiums but calibrated for Tampa Bay&apos;s market — and will anchor what the development team describes as a broader mixed-use district on the former HCC Dale Mabry campus.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial real estate significance of that approval is not primarily the ballpark itself. Stadiums are not commercial real estate investments in the traditional sense. The significance is what a major public-private investment of this scale signals: infrastructure will follow, zoning will support denser mixed-use development in the surrounding area, and the economic activity associated with 81 home games plus events will generate consistent, predictable commercial demand for decades. When Hillsborough County commits $796 million to a single location, the county&apos;s infrastructure investment — road access, utilities, transit — follows that commitment. That is the foundation on which restaurant operators, hoteliers, entertainment developers, and mixed-use investors build their underwriting.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a full picture of the commercial corridor that surrounds this site today, our{" "}
          <Link href="/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026" className="text-accent underline">Dale Mabry corridor CRE guide</Link>{" "}
          covers the existing inventory, vacancy rates, and tenant demand along one of Tampa&apos;s most active commercial arteries. The stadium development will layer on top of an already-active market, not build from nothing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Where Is the New Rays Stadium and Why Does the Location Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The approved site — Hillsborough Community College&apos;s Dale Mabry campus — sits along the Dale Mabry Highway corridor in North Tampa. Dale Mabry is one of the most traffic-intensive commercial corridors in the Tampa metro, running north from the Westshore Business District through the Carrollwood and Northdale suburbs and continuing into rapidly growing communities in Pasco County. Interstate 275 provides direct regional access.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The location is particularly interesting from a CRE perspective because it sits at the junction of established commercial density — an existing restaurant, retail, and office corridor that has been maturing for decades — and the population growth vectors expanding northward. Fans driving from Wesley Chapel, Land O&apos;Lakes, New Port Richey, and the broader Pasco County growth corridor will use Dale Mabry as their primary route to the stadium. That northbound catchment area represents one of the fastest-growing population concentrations in the state.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The distinction between this site and other Tampa Bay major projects is worth stating clearly. This is not the Historic Gas Plant District project in St. Petersburg — the 86-acre Hines–Rays mixed-use redevelopment of the old Tropicana Field site, which is a{" "}
          <Link href="/blog/historic-gas-plant-district-st-pete-cre-2026" className="text-accent underline">separate, parallel CRE story on the Pinellas side of the bay</Link>.{" "}
          These two projects represent the Rays&apos; dual-market footprint: a new ballpark in Tampa anchoring stadium-adjacent development on the Hillsborough side, and the largest mixed-use development in St. Petersburg history on the Pinellas side. For investors and tenants, they are distinct geographic opportunities with different tenant profiles, infrastructure timelines, and surrounding market characteristics.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What CRE Categories Benefit Most From a 31,000-Seat Stadium?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Stadium-anchored commercial development follows a consistent pattern across major league cities, and the categories that benefit most are well-established.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Food and beverage.</strong> This is the highest-conviction category for stadium-adjacent commercial real estate. A 31,000-seat venue hosting 81 regular-season games generates pre-game dining demand on a scale that most commercial corridors never experience. Restaurants, sports bars, and casual dining concepts within walking distance of the ballpark — roughly a quarter-mile to half-mile radius — will see game-day incremental revenue that can represent 20% to 30% of annual sales concentrated in three-hour windows. The operators who win in stadium corridors are not the ones who wait until the first game is played; they sign leases one to two years before opening so they can build out, get established, and capture Opening Day buzz. Our post on{" "}
          <Link href="/blog/tampa-bay-restaurant-food-beverage-space-2026" className="text-accent underline">Tampa Bay restaurant and food and beverage commercial space</Link>{" "}
          covers the broader leasing market, but stadium-adjacent F&B along Dale Mabry will be its own micro-market within that context.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Hotel and hospitality.</strong> Game-day hotel demand is consistent, predictable, and hard to displace — it is driven by visiting team fans, family travel for out-of-market games, and event demand from concerts and non-baseball events. Hotels within one to two miles of a stadium carry a demonstrated RevPAR premium over comparable properties outside the stadium catchment. For hospitality investors evaluating sites along the Dale Mabry corridor between the ballpark site and Interstate 275, the 2029 Opening Day is the catalyst that underwrites a development or acquisition today. Our{" "}
          <Link href="/blog/tampa-bay-hospitality-hotel-cre-2026" className="text-accent underline">Tampa Bay hotel and hospitality CRE overview</Link>{" "}
          provides the submarket context for how hospitality is performing across the metro.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Entertainment and experience retail.</strong> Sports bars, axe throwing, bowling, escape rooms, arcade concepts, and experiential retail cluster around sports venues because the same consumer who attends a game is predisposed toward additional entertainment spending. The Dale Mabry corridor already has a mix of entertainment uses, and the stadium will make that corridor a regional entertainment destination in a way it is not today. Tenants with experience-based concepts looking for North Tampa locations should be evaluating Dale Mabry now, before the stadium&apos;s opening elevates both demand and rental rates. See our{" "}
          <Link href="/blog/tampa-bay-experience-entertainment-cre-2026" className="text-accent underline">Tampa Bay experience and entertainment CRE guide</Link>{" "}
          for where this tenant category is expanding across the metro.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Mixed-use office and residential.</strong> The stadium itself will be embedded in a mixed-use district per the developer&apos;s plans. Office tenants seeking identity and amenity — professional services, financial services, media and entertainment companies — are drawn to stadium-adjacent mixed-use for the same reason they cluster in other high-activity districts: visibility, walkable amenity, and a built-in energy that traditional suburban office parks cannot replicate. Mixed-use residential demand in stadium corridors is driven by young professionals who want urban walkability without downtown density and pricing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Timeline, and Why Does the Entry Window Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The project schedule submitted to the city and county calls for substantial completion by the end of 2028 and final completion in March 2029 — just before Opening Day of the 2029 season. Construction is expected to begin in 2026, following land preparation and HCC campus transition planning.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial real estate entry window this creates is a two-to-three-year period — roughly 2026 through 2028 — during which properties and leases in the surrounding corridor can be acquired or negotiated at pre-stadium pricing. The pattern in comparable markets is consistent: cap rate compression and rental rate appreciation in stadium-adjacent corridors begin to accelerate once construction is visibly underway and a specific opening date is public. By the time the first home game is played, the best-positioned assets have already traded at stadion-premium pricing. The investors and tenants who wait for proof of concept — waiting until Opening Day 2029 to act — pay stadium-proven pricing on everything they acquire.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Owners of commercial properties in the immediate Dale Mabry corridor who may be considering an exit should understand this timing dynamic as well. A property that trades in 2027 at market-rate pricing reflects some stadium anticipation premium but not full delivery premium. If selling is part of a larger strategy — portfolio repositioning, estate planning, a 1031 exchange into a different asset class — the window when a stadium catalyst supports elevated pricing without the seller having to wait for 2029 delivery is now through mid-2028. For owners evaluating a sale or disposition strategy,{" "}
          <Link href="/services/dispositions" className="text-accent underline">Barrett&apos;s disposition services</Link>{" "}
          can help you structure an exit that captures maximum value before the stadium opens.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does This Fit Into Tampa Bay&apos;s Broader CRE Story?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Rays ballpark approval is the latest in a series of major public and private investments that are reshaping Tampa Bay commercial real estate geography. Water Street Tampa brought institutional-quality mixed-use development to the downtown core. Midtown Tampa created a walkable mixed-use district mid-corridor on N. Dale Mabry and Cypress. Third Lake Partners&apos; $135 million acquisition and 14-block redevelopment of WestShore Plaza is remapping the Westshore Business District&apos;s retail spine.{" "}
          <Link href="/blog/midtown-tampa-commercial-real-estate-2026" className="text-accent underline">Midtown Tampa</Link>{" "}
          is already demonstrating the demand for walkable mixed-use along the Dale Mabry axis — the Rays stadium extends that axis north and gives it a major entertainment anchor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The cumulative effect of these investments is a Tampa Bay commercial real estate market that is adding major catalysts faster than it is adding commodity supply. That is the fundamental condition that makes the metro compelling for investors: demand-driving infrastructure and development investment is outpacing undifferentiated speculative supply, which is the opposite of the dynamic that plagued many Sun Belt markets in 2023 and 2024. The Rays ballpark approval adds another demand anchor to a metro that is already benefiting from population growth, employment diversification, and infrastructure investment. For the full cross-sector view of how Tampa Bay CRE is positioned entering Q4 2026, our{" "}
          <Link href="/blog/tampa-bay-cre-market-outlook-q4-2026" className="text-accent underline">Q4 2026 CRE market outlook</Link>{" "}
          covers industrial, retail, office, and multifamily in context.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Investors and Tenants Do Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The practical action items differ by role.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>For investors</strong> evaluating the Dale Mabry corridor: the priority is identifying the properties within the half-mile to one-mile radius of the stadium site that will be most directly impacted by game-day and event foot traffic. Restaurant pads with drive-through capability and strong visibility to Dale Mabry, hotel sites with interstate access and proximity to the stadium, and entertainment-use buildings that can accommodate high-dwell-time concepts are the most direct plays. Working with a broker who knows the specific parcel history, ownership, and leasing situation in the corridor — rather than underwriting from a market report — is the difference between identifying the right acquisition before it comes to market and competing on the open market after it does.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>For tenants</strong> — restaurant operators, sports bar concepts, entertainment businesses, service retailers, fitness concepts — the stadium approval is the trigger to begin a Dale Mabry site search now, not in 2028. The most desirable positions within walking distance of the ballpark are finite. Landlords who own those positions know what is coming. The tenants who sign 7- to 10-year leases in 2026 and 2027 will lock in rents that reflect today&apos;s corridor value, not 2029&apos;s stadium-proven value. That is a real rent differential in a corridor that will absorb significant new demand over the next three to five years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>For existing property owners</strong> in the corridor: the stadium approval is a meaningful valuation event. Understanding where your property sits relative to the likely catchment radius, what the highest-and-best-use of your parcel becomes in a stadium-adjacent environment, and whether holding or trading makes more financial sense over your specific time horizon requires a current market valuation and a clear-eyed read on the development pipeline. That is a conversation worth having now, when you have time to be strategic, rather than after the stadium opens when the market has already moved.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on the Rays Ballpark and Dale Mabry CRE</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The $2.36 billion Tampa Bay Rays ballpark at Dale Mabry is one of the largest commercial real estate catalysts in Tampa Bay in a decade. The approval is in place. The construction timeline is public. Opening Day 2029 is a concrete target. The three-year window between now and that opening is the period in which stadium-adjacent commercial real estate can be acquired, leased, or repositioned at pre-delivery pricing — before the market fully prices in 81 annual games of incremental foot traffic, hotel demand, restaurant revenue, and entertainment spending.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors and tenants who understand how stadium-anchored development creates commercial real estate value — and who act with specificity on the best positions in the Dale Mabry corridor — will be the ones who look back on 2026 and 2027 as the entry point. I have worked Tampa Bay commercial real estate for 23+ years at REMAX Collective. I know which properties in this corridor are positioned for this catalyst and which ones are not. If you are evaluating a stadium-adjacent investment, a food-and-beverage lease opportunity, or a disposition in the corridor, call me directly.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Rays Ballpark and Dale Mabry CRE — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial markets. He advises investors on acquisitions and tenants on leasing strategy in high-growth corridors including the Dale Mabry axis, Westshore, and the emerging stadium district. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating Commercial Real Estate Near the New Rays Ballpark?"
        body="The Dale Mabry corridor will look materially different in 2029 than it does today. I help investors identify the right acquisition targets and tenants find the right lease positions — before the stadium opens and the market prices in the catalyst. With 23+ years of experience in Tampa Bay commercial real estate at REMAX Collective, I know this corridor in depth. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
