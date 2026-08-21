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
 * Blog: Historic Gas Plant District – St. Petersburg CRE 2026
 * Hines + Rays break ground on an 86-acre, $6.5B mixed-use megaproject
 * at the Tropicana Field site. What it means for St. Pete CRE investors
 * and tenants — and the ripple effects across Pinellas County.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Historic Gas Plant District: St. Pete CRE 2026 | HenCRE",
  description:
    "The Rays and Hines are transforming 86 acres at Tropicana Field into 8 million sq ft of office, retail, hotel, and apartments. Here is what St. Petersburg CRE investors and tenants need to know about the most consequential mixed-use project in Tampa Bay history.",
  alternates: { canonical: "https://hencre.com/blog/historic-gas-plant-district-st-pete-cre-2026" },
  openGraph: {
    title: "Historic Gas Plant District: St. Pete CRE 2026",
    description:
      "86 acres, $6.5B in investment, 8 million sq ft of mixed-use development — the Historic Gas Plant District is the biggest CRE story in St. Petersburg's history. What investors and tenants need to know.",
    url: "https://hencre.com/blog/historic-gas-plant-district-st-pete-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565129566188-40bca2a86f0a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "St. Petersburg Florida downtown skyline and waterfront district",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Historic Gas Plant District redevelopment?",
    answer:
      "The Historic Gas Plant District redevelopment is an 86-acre, mixed-use megaproject on the former Tropicana Field site in downtown St. Petersburg. The Rays and Houston-based developer Hines serve as 50/50 general partners and plan to invest more than $6.5 billion over 20 years to create nearly 8 million square feet of residential, office, retail, hotel, entertainment, and civic space — along with a new ballpark for the Tampa Bay Rays targeting a 2028–2029 opening.",
  },
  {
    question: "What commercial space will be built in the Gas Plant District?",
    answer:
      "The master plan calls for 1.4 million square feet of Class A office and medical space, 750,000 square feet of retail, 750 hotel rooms, a 4,000-to-6,000-seat entertainment and concert venue, the new Woodson African American Museum of Florida, and 14 acres of publicly accessible green space. The 5,400 residential units will bring a built-in live-work population that is expected to generate consistent foot traffic for ground-floor retail and dining from day one of each phase.",
  },
  {
    question: "Who are the builder and developer for the Gas Plant District?",
    answer:
      "Hines — a global real estate investment and development firm with more than $90 billion in assets under management — serves as the lead developer alongside the Rays. The two entities are 50/50 general partners for each asset class venture within the masterplan. AECOM Hunt was selected in August 2026 as the builder overseeing stadium construction, with a target of substantial completion by December 31, 2028, followed by final completion by March 1, 2029.",
  },
  {
    question: "How will the Gas Plant District affect CRE values in downtown St. Petersburg?",
    answer:
      "Projects of this scale — Hines-caliber institutional development anchored by a live sports venue — typically compress cap rates and lift asking rents in a half-mile to one-mile radius as demand for adjacent retail, office, and multifamily increases. Downtown St. Pete's existing trophy office product and Central Avenue retail corridor are already near full occupancy; the Gas Plant District's activation of the 86-acre site adds a catalytic demand driver that should support rent growth across the submarket for the remainder of the decade.",
  },
  {
    question: "When will the Gas Plant District be complete?",
    answer:
      "The project is phased over approximately 20 years. The new Rays ballpark is targeting substantial completion by December 31, 2028, and final completion by March 1, 2029. Commercial and residential phases will be delivered in tranches as each building is financed and leased up — similar to how Water Street Tampa has rolled out in phases since 2019. Investors and tenants should plan around a long development cycle rather than waiting for full buildout before making decisions.",
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
          name: "Historic Gas Plant District: St. Pete CRE 2026",
          item: "https://hencre.com/blog/historic-gas-plant-district-st-pete-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline:
        "Historic Gas Plant District: What the Rays-Hines $6.5B Redevelopment Means for St. Petersburg CRE",
      description:
        "The Rays and Hines are transforming 86 acres at Tropicana Field into 8 million sq ft of office, retail, hotel, and apartments. What St. Petersburg CRE investors and tenants need to know.",
      datePublished: "2026-08-17",
      dateModified: "2026-08-21",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/historic-gas-plant-district-st-pete-cre-2026",
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
    description: "Market fundamentals, vacancy rates, and investment conditions across St. Pete's CRE submarkets.",
  },
  {
    title: "Port Tampa Bay Fourth Cruise Terminal & Channel District CRE",
    href: "/blog/port-tampa-bay-fourth-cruise-terminal-channel-district-cre",
    description: "How another mega-infrastructure project is reshaping nearby commercial demand.",
  },
  {
    title: "Water Street Tampa: 33-Story Tower & Downtown CRE",
    href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    description: "What Water Street's phased development model teaches investors about megaproject CRE cycles.",
  },
  {
    title: "Pinellas County Industrial CRE 2026",
    href: "/blog/pinellas-county-industrial-cre-2026",
    description: "Industrial and flex-space conditions across Pinellas County.",
  },
  {
    title: "Tampa Bay Hospitality & Hotel CRE 2026",
    href: "/blog/tampa-bay-hospitality-hotel-cre-2026",
    description: "Hotel demand and investment conditions across Tampa Bay — including markets adjacent to major anchors.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "How triple-net retail cap rates are pricing near high-foot-traffic anchors in Tampa Bay.",
  },
  {
    title: "Multifamily Investment Tampa Bay Guide",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "Multifamily fundamentals for investors evaluating residential projects adjacent to major mixed-use developments.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "A framework for evaluating commercial acquisitions adjacent to long-cycle megaprojects.",
  },
];

export default function HistoricGasPlantDistrictCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Historic Gas Plant District: St. Pete CRE 2026",
            href: "/blog/historic-gas-plant-district-st-pete-cre-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1565129566188-40bca2a86f0a?w=1600&h=900&fit=crop"
        title="Historic Gas Plant District: St. Petersburg's $6.5B CRE Catalyst"
        subtitle="86 acres. 8 million square feet. A ballpark, 1.4 million sq ft of office, 750,000 sq ft of retail, and 5,400 apartments — all rising on the former Tropicana Field site."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          On August 17, 2026, AECOM Hunt and Turner were selected to oversee construction of the Tampa Bay Rays&apos; new ballpark — the clearest signal yet that the Historic Gas Plant District redevelopment has moved from planning into execution. For CRE investors and commercial tenants tracking St. Petersburg&apos;s market, the project represents the most consequential mixed-use development in Tampa Bay history. Understanding what is being built, when it will deliver, and what it means for surrounding commercial submarkets is no longer optional due diligence — it is table stakes for anyone making a real estate decision in Pinellas County over the next decade.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is the Historic Gas Plant District Redevelopment?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Historic Gas Plant District is an 86-acre site in downtown St. Petersburg — the former home of Tropicana Field — that the Tampa Bay Rays and global development firm Hines are transforming into a mixed-use urban district. The two organizations serve as 50/50 general partners across each asset class venture within the masterplan, with more than $1.8 billion in committed equity between them (including more than $180 million directly from Hines and the Rays themselves) and a total project cost expected to exceed $6.5 billion over a 20-year buildout.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The master plan — designed by Gensler — envisions nearly 8 million square feet of development, including a new Rays ballpark targeting a 2028–2029 opening, 5,400 residential units, 1.4 million square feet of Class A office and medical space, 750,000 square feet of retail, 750 hotel rooms, a 4,000-to-6,000-seat live entertainment venue, the new Woodson African American Museum of Florida, and 14 acres of public green space woven through the site. The economic impact projection from AECOM runs to $34 billion over 30 years with nearly 11,900 jobs created across construction, operations, and induced activity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The comparison most analysts reach for is Water Street Tampa — the Strategic Property Partners development adjacent to Amalie Arena that has systematically transformed downtown Tampa&apos;s CRE market since 2019. The Gas Plant District mirrors that model: an institutional developer with a long-term hold thesis, a sports anchor, a phased delivery schedule, and an explicit goal of activating an underutilized urban land block. The key difference in scale: the Gas Plant District&apos;s 86 acres are larger than Water Street, and the office component — 1.4 million square feet — would represent a meaningful share of St. Petersburg&apos;s entire existing office inventory. For a broader look at how St. Pete&apos;s existing commercial market is positioned entering this cycle, see the <Link href="/blog/st-petersburg-commercial-real-estate-2026" className="text-accent underline">St. Petersburg commercial real estate guide for 2026</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Commercial Space Will Be Built — and in What Order?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Gas Plant District is a phased project, not a single-delivery development. The new Rays ballpark is the anchor and the most advanced phase — AECOM Hunt was selected as builder on August 17, 2026, targeting substantial completion by December 31, 2028. Subsequent commercial phases will be delivered as each building is financed, pre-leased, and permitted — a process that in projects of this complexity typically runs in rolling 18-to-36-month cycles.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial components investors and tenants should track most closely:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>1.4 million sq ft of Class A office and medical space.</strong> This is the category with the most direct impact on St. Petersburg&apos;s commercial real estate absorption. Downtown St. Pete currently has a limited Class A office inventory; adding 1.4 million square feet over a decade would roughly double the market&apos;s trophy office supply and fundamentally reshape where companies consider locating. For context, this is comparable in size to a full Water Street office campus delivered in a single submarket.
          </li>
          <li>
            <strong>750,000 sq ft of retail.</strong> Retail at this scale — combined with a ballpark generating 81 home games per season plus concerts and events — creates a sustained foot traffic engine. Ground-floor retail and restaurant operators in the district will have a captive audience in the tens of thousands on event nights. The ripple effects extend outward to Central Avenue, which is already one of the strongest retail corridors in Pinellas County.
          </li>
          <li>
            <strong>750 hotel rooms.</strong> Hotel supply additions of this magnitude near a major venue can temporarily compress RevPAR in the submarket during the delivery window, but stabilize at stronger rates once the full amenity base of the district is activated. Investors in existing St. Pete hotels should model for a two-to-three-year period of elevated competition after the district&apos;s hotel components open — then expect absorption as the Gas Plant District&apos;s event calendar matures.
          </li>
          <li>
            <strong>5,400 residential units.</strong> The residential component is the largest single use by unit count and will anchor the live-work-play ecosystem that makes ground-floor retail viable without relying entirely on event traffic. Rooftop amenities, proximity to the waterfront, and the urban energy of a new ballpark district will position Gas Plant District apartments as premium product in the St. Pete rental market. For investors evaluating nearby multifamily, see the <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">Tampa Bay multifamily investment guide</Link>.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Will the Gas Plant District Affect Surrounding CRE Submarkets?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Projects of this scale — institutional capital, sports anchor, 20-year buildout — create a defined investment thesis for surrounding properties that plays out in three phases:
        </p>
        <p className="mt-4 font-semibold text-black">Phase 1: Announcement and early construction (now through 2027–2028).</p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is typically the best window for investors who want to acquire properties within a half-mile to one-mile radius before the project&apos;s impact is fully priced into the market. Land pricing and asking rents for adjacent commercial space already reflect some premium, but the full lift does not arrive until the ballpark opens and foot traffic materializes. Investors who move during construction — accepting the uncertainty that the traffic has not yet been proven — have historically captured the most appreciation in comparable projects.
        </p>
        <p className="mt-4 font-semibold text-black">Phase 2: Ballpark opens and anchor retail activates (2029–2032).</p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Once the venue opens, demand for ground-floor retail, food-and-beverage, and entertainment space in the surrounding blocks will be immediately legible. Landlords within walking distance of the stadium will see stronger leasing velocity and shorter vacancy periods. This is the window where existing retail owners in the immediate vicinity — including properties on 1st Avenue South and the blocks south of Central Avenue — will see the most direct rent appreciation.
        </p>
        <p className="mt-4 font-semibold text-black">Phase 3: Office and hotel stabilization (2030 and beyond).</p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 1.4 million square feet of office will take years to lease up and will be delivered in multiple buildings rather than all at once. Existing downtown St. Pete office landlords should expect increased leasing competition from Gas Plant District product when those buildings deliver, but the flipside is that the district will bring office users to St. Pete who have not historically considered it — companies that want a true live-work-play environment with a sports anchor and entertainment district within walking distance. That is a different demand pool, not a zero-sum competition with Sundial or the existing downtown towers.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors who own commercial property in neighboring submarkets — particularly the Channel District in Tampa and the downtown St. Pete waterfront — the Gas Plant District reinforces the macro trend of institutional capital concentrating in walkable, mixed-use urban districts across Tampa Bay. See how a similar dynamic is playing out in Tampa at the <Link href="/blog/port-tampa-bay-fourth-cruise-terminal-channel-district-cre" className="text-accent underline">Port Tampa Bay fourth cruise terminal and Channel District CRE post</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does This Mean for CRE Investors Near the Gas Plant District?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The investment thesis around a project of this scale is not complicated in its fundamentals — it is the execution and timing that matter. Here is how to frame a rational investment decision in the Gas Plant District&apos;s influence zone:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Buy proximity, not the project itself.</strong> The Gas Plant District&apos;s commercial space will be delivered by Hines — you are not competing with them, you are benefiting from them. The investment opportunity is in adjacent properties — retail, office, multifamily, and mixed-use buildings within a half-mile radius — that will be lifted by the demand the district generates but are still available at pre-buildout pricing. The closer the proximity, the more direct the benefit.
          </li>
          <li>
            <strong>Underwrite conservatively for phase delivery.</strong> A 20-year buildout means the full economic impact is not realized for a long time. Model your acquisition around what the submarket supports today with a reasonable pro forma for year-5 to year-10 rent growth — do not assume Gas Plant District uplift pays for a stretched acquisition price in year 1. The <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">commercial property ROI framework</Link> applies here: the numbers have to work without the megaproject uplift, and the megaproject is the accelerant.
          </li>
          <li>
            <strong>Consider NNN retail near the site.</strong> Ground-floor retail and food-and-beverage tenants that benefit from a captive stadium audience often sign NNN leases. Properties in this zone with existing NNN tenants — or with the potential to attract them — may see cap rate compression as the stadium&apos;s opening approaches. See our post on <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">Tampa Bay NNN cap rates in 2026</Link> for current benchmarks.
          </li>
          <li>
            <strong>Watch the hotel sector carefully.</strong> The 750-room hotel component of the Gas Plant District will take several years to deliver. Investors in existing St. Pete hotel product near the site should account for new competitive supply in their long-range NOI projections, while those considering acquiring hotel assets further from the site may benefit from the district&apos;s overall boost to St. Pete tourism without facing direct new supply competition.
          </li>
          <li>
            <strong>Selling land or buildings near the site.</strong> If you own commercial or mixed-use land within a half-mile of the Gas Plant District, the period during active construction and pre-opening hype is historically the window of strongest buyer demand. Institutional and regional developers will be actively underwriting assemblages in this zone through 2027–2028. Property owners who have been waiting for the right moment to exit should consider their options now. <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Fast Sell Easy Sale</a> works with landowners and commercial property owners across Tampa Bay who want to move quickly and cleanly.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Thorough due diligence on any acquisition near an active redevelopment site is especially important — zoning changes, easement grants, and construction traffic can all affect a property during the buildout window. Review our <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial property due diligence timeline</Link> before committing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Commercial Tenants Know About the Gas Plant District Timeline?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For businesses considering leasing in or near the Gas Plant District, the timing question is the central issue. Here is a practical framework:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Do not wait for the district to deliver.</strong> The best lease opportunities near the Gas Plant District — in adjacent buildings, not in the Hines-delivered product — will be competed for by the time the ballpark opens. If your business would benefit from proximity to a sports and entertainment district, begin evaluating locations now, while construction is underway and before the speculative premium on nearby space fully materializes.
          </li>
          <li>
            <strong>Understand the construction disruption window.</strong> Active construction of this magnitude generates noise, traffic, and staging impacts in the surrounding blocks from now through 2028. Businesses that require a calm, accessible environment for daily walk-in customers may want to time their lease start for after the most disruptive construction phases conclude. Businesses that serve the construction trades — supply houses, equipment rentals, food service — may actually benefit from the construction workforce during this window.
          </li>
          <li>
            <strong>For office tenants: start your search early.</strong> The 1.4 million square feet of Class A office in the Gas Plant District will not deliver immediately — it will come in phases, likely beginning in the early 2030s. Office tenants who want to be in the district itself should expect to be among the first tenants to pre-lease a building, which typically requires 36-to-48 months of lead time before a target occupancy date. Businesses that need space in the next two to four years should focus on existing St. Pete office inventory while monitoring Gas Plant District pre-leasing announcements. See our <Link href="/blog/clearwater-office-space-professional-services-firms" className="text-accent underline">Clearwater office space guide</Link> for additional Pinellas County options in the near term.
          </li>
          <li>
            <strong>For retail and restaurant tenants: the adjacency play is compelling.</strong> Rather than waiting for Gas Plant District ground-floor retail to deliver, food-and-beverage and retail operators who secure positions on the blocks immediately surrounding the site — within a three-to-five-minute walk of the stadium entrance — will be positioned to benefit from event traffic from day one of the 2029 season without paying in-district rent premiums.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are relocating your business to St. Petersburg or searching for commercial space in Pinellas County, understanding how the Gas Plant District will reshape the submarket over the coming decade is essential context for any lease decision you make today. Employees and principals who will be working at or near the district will also be looking for housing — <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">nowtb.com</a> provides full neighborhood guides and listing search across St. Petersburg and the surrounding Tampa Bay area to help your team find homes close to work.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line: Why the Gas Plant District Is the Most Important CRE Story in Tampa Bay</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Historic Gas Plant District is not a hypothetical — it is a funded, permitted, builder-selected project with a credible 2028–2029 delivery timeline for its anchor phase. Hines is one of the most experienced mixed-use developers in the world. The Rays have a committed equity stake. AECOM Hunt was selected less than a week ago. The project is happening.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For CRE investors, the question is not whether the Gas Plant District will transform downtown St. Petersburg&apos;s commercial market — it will — but how to position in advance of that transformation in a way that generates returns during the transition, not just at the end of a 20-year development cycle. The most compelling opportunities are in adjacent properties available today at prices that do not yet reflect the full stadium and district premium.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants, the window to get ahead of the market is narrower than it might appear. The blocks nearest the site are already attracting attention. The time to make a well-informed location decision is before the construction cranes are down and the stadium is open — not after.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience across Tampa Bay&apos;s commercial market, I work with investors evaluating acquisitions and businesses finding commercial space across Hillsborough, Pinellas, and Pasco Counties. If you are thinking about a real estate decision in the Gas Plant District&apos;s orbit, let&apos;s talk while the best positions are still available.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Historic Gas Plant District — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay. He helps investors identify commercial acquisitions and businesses find the right space in Pinellas, Hillsborough, and Pasco Counties. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Investing or Leasing Near the Historic Gas Plant District?"
        body="The Gas Plant District redevelopment is the defining CRE story in St. Petersburg — and the best opportunities to position around it are available now, not after the stadium opens. Let&apos;s talk about your options."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
