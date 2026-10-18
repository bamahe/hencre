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
 * Blog: Clearwater Landings Sports Complex & Pinellas CRE 2026
 * The proposed $180M sports and recreation development at the Landings
 * Golf Course and what it means for commercial real estate investors,
 * landlords, and tenants in North Clearwater and Pinellas County.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Clearwater Landings Sports Complex CRE Impact Pinellas 2026 | HenCRE",
  description:
    "A developer is proposing a $180M sports complex at Clearwater's Landings Golf Course with 13 multipurpose fields, pickleball courts, restaurants, and a water attraction. Here is what it means for commercial real estate investors and landlords in Pinellas County.",
  alternates: { canonical: "https://hencre.com/blog/clearwater-landings-sports-complex-cre-pinellas-2026" },
  openGraph: {
    title: "Clearwater Landings Sports Complex: What the $180M Development Means for Pinellas CRE | HenCRE",
    description:
      "Sunshine Recreational and Entertainment LLC is proposing a $180M sports and recreation complex at the 77-acre Landings Golf Course near Clearwater Airpark. Clearwater City Council voted unanimously to continue the public-private partnership process. Here is the CRE investment picture.",
    url: "https://hencre.com/blog/clearwater-landings-sports-complex-cre-pinellas-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sports fields and recreational complex aerial view representing the Clearwater Landings Sports Complex proposal",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Clearwater Landings Sports Complex proposal and where is it located?",
    answer:
      "The Clearwater Landings Sports Complex is a proposed $180 million sports and recreation development at the 77-acre Landings Golf Course near Clearwater Airpark, located at 1875 Airport Drive in North Clearwater. The developer, Sunshine Recreational and Entertainment LLC, is proposing 13 multipurpose sports fields, pickleball and sand volleyball courts, restaurants, a water attraction, and walking and biking trails. In August 2026, Clearwater City Council voted unanimously to continue the public-private partnership process for the city-owned property. That vote does not approve construction or a final lease - it advances the formal evaluation and negotiation phase. The developer&apos;s financing plan includes approximately $108 million in private debt, $26.9 million in equity, and roughly $45 million in hoped-for Pinellas County tourist development tax funds. The city&apos;s independent financial review found that private loan commitments and county funding had not yet been secured, and flagged a proposed long-term lease with significant early-year rent abatements and no proposed revenue-sharing arrangement with Clearwater.",
  },
  {
    question: "How do sports complexes typically affect nearby commercial real estate values and demand?",
    answer:
      "Large-scale sports and recreation complexes function as commercial real estate anchors in much the same way that major retailers once did - they generate sustained, predictable foot traffic that creates demand for surrounding retail, food-and-beverage, hotel, and service tenants. The commercial real estate impact of a major sports complex typically plays out in three phases. In the pre-construction and announcement phase, land values within a half-mile to one mile of the project tend to appreciate as developers, hotel operators, and restaurant groups position themselves for proximity to the new demand generator. During construction, industrial-adjacent and flex space near the site often tightens as subcontractors, equipment vendors, and temporary operations absorb space. Post-opening, the most durable beneficiaries are limited-service and extended-stay hotel properties within two to five miles, quick-service and casual dining restaurants along primary access corridors, and retail centers anchored by sporting goods, sports medicine, and family-oriented tenants that align with the visitor profile. For a regional sports complex with tournament programming, the overnight visitor and weekend travel component is particularly valuable - tournament attendees typically book one to three nights and eat every meal off-site, creating hotel and restaurant demand that is genuinely incremental rather than simply redistributed from elsewhere in the market.",
  },
  {
    question: "What types of commercial real estate investments benefit most from a nearby sports complex?",
    answer:
      "The commercial real estate categories that historically benefit most from proximity to a major sports complex are hotels, quick-service and casual restaurants, sports medicine and physical therapy clinics, and retail centers with youth and family sporting goods tenants. Hotel properties within two to five miles of a tournament-grade sports complex are the strongest direct beneficiaries - tournament weekends create predictable occupancy spikes that allow hotel operators to charge premium rates, and a well-managed extended-stay or limited-service property near a large sports complex can outperform the broader market on RevPAR by 15 to 25 percent on tournament weekends. Restaurant and food-and-beverage space within a half-mile to one mile of the complex benefits from the meal volume generated by visiting teams, parents, coaches, and spectators who are unfamiliar with the local market and default to the most visible and convenient options near the venue. Retail centers anchored by sporting goods, sports apparel, and athletic footwear tenants see increased foot traffic from visiting families outfitting players. Medical and physical therapy tenants benefit from the sustained demand generated by local youth sports participants, and location visibility to sports complex traffic is a meaningful marketing advantage for these operators. Industrial and flex space near the site benefits modestly from contractor and operational demand during the construction phase.",
  },
  {
    question: "What risks should commercial real estate investors consider before betting on the Landings complex?",
    answer:
      "Investors considering commercial real estate positions near the proposed Clearwater Landings Sports Complex should weigh three categories of risk carefully. Execution risk is the most immediate concern: the city&apos;s independent financial review found that neither the private loan commitments nor the Pinellas County tourist development tax funding had been secured as of mid-2026. A project that depends on $45 million in county TDT funds for a facility that primarily serves local residents rather than overnight tourists faces a real credentialing challenge with county administrators, who typically require documentation of overnight visitor generation to approve TDT allocations. Neighbor and political opposition is a secondary risk - residents near Clearwater Airpark have raised concerns about parking, traffic congestion, noise, and drainage, and these concerns reached City Council during the summer 2026 review process. While the council vote was unanimous to continue the process, opposition-driven permitting delays, environmental review requirements, and design modifications could extend the timeline significantly. Finally, there is market risk: sports complex operators compete for tournament business from a national pool of similar venues, and Pinellas County&apos;s existing Tropicana Field site redevelopment and the Phillies&apos; spring training infrastructure at BayCare Ballpark already give Clearwater a sports venue identity that could complement or compete with the Landings concept depending on how it positions itself.",
  },
  {
    question: "How can a commercial real estate broker help investors position themselves near a proposed sports complex?",
    answer:
      "A commercial real estate broker with local Pinellas County market knowledge can add significant value for investors evaluating opportunities near the proposed Clearwater Landings Sports Complex at several stages. In the current pre-approval phase, a broker can identify land parcels and commercial properties within the likely impact radius that are priced before the project&apos;s commercial upside has been fully reflected in asking prices - a window that typically closes once a groundbreaking is announced and project coverage intensifies. For existing commercial property owners near the site, a broker can evaluate whether repositioning, re-tenanting, or a near-term sale makes more sense given the holding cost and timeline uncertainty of the project. For hotel and restaurant investors specifically, a broker can model the hotel supply pipeline within three to five miles of the Airpark and assess whether the existing supply, combined with the Landings-driven demand increment, justifies a new development or acquisition. And for investors who want to participate in the area&apos;s growth without direct exposure to the complex&apos;s execution risk, the broader North Clearwater and Countryside corridors offer retail and flex opportunities that benefit from the area&apos;s population density regardless of the sports complex&apos;s outcome.",
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
          name: "Clearwater Landings Sports Complex: CRE Impact for Pinellas 2026",
          item: "https://hencre.com/blog/clearwater-landings-sports-complex-cre-pinellas-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Clearwater Landings Sports Complex: What the $180M Development Means for Pinellas County Commercial Real Estate",
      description:
        "A $180M sports complex is proposed for Clearwater&apos;s Landings Golf Course. Here is how sports complexes affect CRE values, which investment categories benefit most, and the risks investors should weigh before positioning near this project.",
      datePublished: "2026-10-15",
      dateModified: "2026-10-18",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/clearwater-landings-sports-complex-cre-pinellas-2026",
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
    title: "Clearwater Pinellas County Commercial Real Estate 2026",
    href: "/blog/clearwater-pinellas-county-commercial-real-estate-2026",
    description: "The full picture on Clearwater&apos;s office, retail, industrial, and investment market heading into 2026.",
  },
  {
    title: "Tampa Bay Hotel & Hospitality CRE 2026",
    href: "/blog/tampa-bay-hotel-hospitality-cre-2026",
    description: "How limited-service and extended-stay hotels near demand generators like sports complexes are performing across Tampa Bay.",
  },
  {
    title: "Tampa Bay Experiential & Entertainment CRE 2026",
    href: "/blog/tampa-bay-experience-entertainment-cre-2026",
    description: "Pickleball clubs, food halls, and indoor sports venues reshaping Tampa Bay retail - context for the Landings concept.",
  },
  {
    title: "Clearwater Retail Space Guide",
    href: "/blog/clearwater-retail-space-guide",
    description: "Retail leasing fundamentals for Clearwater and North Pinellas - key for tenants positioning near the Landings site.",
  },
  {
    title: "North Pinellas Commercial Real Estate 2026",
    href: "/blog/north-pinellas-dunedin-tarpon-springs-commercial-real-estate-2026",
    description: "Dunedin and Tarpon Springs commercial market data - context for the broader North Pinellas investment picture.",
  },
  {
    title: "Pinellas County Industrial CRE 2026",
    href: "/blog/pinellas-county-industrial-cre-2026",
    description: "Industrial and flex space availability in Pinellas - relevant for construction-phase demand near the Airpark.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Cap rate benchmarks for net-lease retail and restaurant investments near major demand generators in Tampa Bay.",
  },
  {
    title: "Clearwater Office Space: Professional Services Guide",
    href: "/blog/clearwater-office-space-professional-services-firms",
    description: "Office leasing in Clearwater - including sports medicine, physical therapy, and wellness tenants drawn to recreation anchors.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "The financial fundamentals for evaluating CRE investments near a major new development anchor.",
  },
  {
    title: "Do You Need a Commercial Real Estate Broker?",
    href: "/blog/do-you-need-a-commercial-real-estate-broker",
    description: "Why local market expertise matters most when positioning around a pre-approval development with execution risk.",
  },
];

export default function ClearwaterLandingsSportsComplexCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Clearwater Landings Sports Complex: CRE Impact 2026", href: "/blog/clearwater-landings-sports-complex-cre-pinellas-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&h=900&fit=crop"
        title="Clearwater Landings Sports Complex: What the $180M Development Means for Pinellas County CRE"
        subtitle="A developer is proposing a $180 million sports and recreation complex at Clearwater&apos;s 77-acre Landings Golf Course near Clearwater Airpark. Clearwater City Council voted unanimously to advance the public-private partnership process. Here is what commercial real estate investors, landlords, and tenants near the site need to understand right now."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          In August 2026, Clearwater City Council voted unanimously to continue a public-private partnership process for a proposed $180 million sports and recreation complex at the city-owned Landings Golf Course near Clearwater Airpark. The developer, Sunshine Recreational and Entertainment LLC, is proposing 13 multipurpose sports fields, pickleball and sand volleyball courts, restaurants, a water attraction, and walking and biking trails across the 77-acre site at 1875 Airport Drive. The project is not approved - no construction permit, no final lease - but the unanimous council vote signals a serious evaluation process that commercial real estate investors, landlords, and business owners in North Clearwater and Pinellas County should be watching closely.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Major sports and recreation complexes are among the most powerful commercial real estate demand generators a submarket can attract. They create sustained hotel occupancy, drive restaurant and retail traffic on weekends that would otherwise be quiet, and attract sports medicine and wellness tenants who want proximity to a built-in patient and client base. For investors who recognize a pre-announcement window and position correctly, the upside can be meaningful. For those who wait until a groundbreaking press release to act, the opportunity has largely been priced in.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is Being Proposed at the Landings Golf Course?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Landings Golf Course is a 77-acre city-owned property at 1875 Airport Drive, adjacent to Clearwater Airpark in North Clearwater. Sunshine Recreational and Entertainment LLC is proposing to replace the golf course with a multi-sport recreational complex featuring 13 multipurpose turf fields, dedicated pickleball and sand volleyball courts, a water attraction, food and beverage operations, and extensive trail infrastructure. The developer&apos;s stated fiscal impact includes more than $2 million annually in property taxes and $600,000 to $700,000 in annual contributions to Clearwater&apos;s general fund.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The financing structure is important context for evaluating the project&apos;s execution timeline. The developer&apos;s plan calls for approximately $108 million in private debt, $26.9 million in equity, and roughly $45 million in Pinellas County tourist development tax funds - the last of which had not been committed as of the city&apos;s independent financial review. That review also flagged a proposed long-term lease with significant early-year rent abatements and no proposed revenue-sharing arrangement with the city. These are material open items in the negotiation process, not minor technical details. Until private financing commitments are in hand and county TDT eligibility is confirmed, the project remains a proposal with strong political support rather than a funded construction initiative.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Neighbor opposition in the Airport Drive corridor has focused on traffic, parking, drainage, and noise - concerns that are structurally typical for recreational complexes of this scale. The council&apos;s unanimous vote to continue the process suggests the political will to work through these issues, but permitting timelines for a 77-acre recreational development with substantial site work requirements can extend well beyond initial projections.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do Sports Complexes Change Commercial Real Estate in Their Immediate Market Area?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The commercial real estate impact of a major regional sports complex is well-documented across comparable markets. Tournament-grade multi-sport facilities create a category of demand that is genuinely incremental: visiting teams, parents, coaches, and spectators arrive from outside the local market, stay overnight, eat every meal off-site, and spend on retail and services they would not have purchased at home. For the commercial properties near the venue, this means new demand that does not compete with existing local spending - it adds to it.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most direct beneficiaries in the immediate half-mile to two-mile radius are typically hotel properties. Limited-service and extended-stay hotels within five minutes of a major sports complex routinely outperform the broader market on tournament weekends by significant margins - RevPAR premiums of 15 to 25 percent on peak weekends are common in comparable markets like Kissimmee&apos;s ESPN Wide World of Sports area, Myrtle Beach, and the Sanford Sports Complex north of Orlando. The Clearwater Airpark corridor currently has limited hotel supply, which means a project approval would likely accelerate hotel development proposals for the sites along Airport Drive and the US-19 corridor within a five-minute drive of the complex.
        </p>
        <p className="mt-4 text-[#666660] leading-relaxed">
          Restaurant and quick-service food-and-beverage space along the primary access corridors benefits from the visitor traffic pattern: tournament families arriving from Tampa, Orlando, or out of state for a weekend of games default to the most visible and convenient dining options near the venue. A well-positioned restaurant within walking distance of the complex or on the primary traffic route between the complex and nearby hotels is positioned to capture a meaningful share of that incremental meal volume every tournament weekend - typically 15 to 20 weekends per year for a well-booked multi-sport facility.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context on the broader Clearwater commercial real estate market, including retail vacancy and leasing activity in the North Pinellas corridor, see our{" "}
          <Link href="/blog/clearwater-pinellas-county-commercial-real-estate-2026" className="text-accent underline">
            Clearwater and Pinellas County commercial real estate 2026 analysis
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Property Types Near the Landings Site Are Worth Watching?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The North Clearwater area around Clearwater Airpark sits in a corridor defined by US-19 to the west and Drew Street to the south - a mix of light industrial, retail strip centers, single-tenant commercial, and office properties that have not historically commanded significant premiums. That relative underpricing relative to the South Clearwater and Gulf-to-Bay corridors is part of what makes the current pre-announcement window relevant for investors.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Hotel development sites within a half-mile to two miles of 1875 Airport Drive are the highest-conviction opportunity if the project advances. There is no existing limited-service hotel product within immediate proximity of the Landings site, and the typical development timeline for a new-build hotel - 18 to 24 months from groundbreaking - means that a developer who secures a site and begins permitting now could be open for business at or near the complex&apos;s opening date. The constraint here is land: the Airport Drive corridor is a mix of existing commercial uses and low-density industrial that would require assemblage or repositioning.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Retail and restaurant-zoned land along the US-19 corridor between Drew Street and Gulf-to-Bay Boulevard is the second category. The US-19 corridor in this stretch carries significant traffic volumes, and restaurant pad sites and inline retail space that can be repositioned toward sports-and-family-oriented tenants - sporting goods, sports apparel, sports medicine, smoothie and nutrition concepts - would benefit from the Landings traffic on tournament weekends in addition to their existing customer base. For investors already looking at Pinellas County retail opportunities, the Landings proposal is a meaningful upside variable that is not yet priced into corridor asking rates.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Industrial and flex space near Clearwater Airpark is worth monitoring as a construction-phase opportunity. A $180 million development project generates significant subcontractor, materials, and equipment storage demand in the 18 to 24 months before and during construction, and flex space within a short drive of the site will absorb some of that temporary demand. That is a short-duration benefit, not a structural long-term play - but it can improve near-term occupancy for flex landlords in the area. For the broader Pinellas industrial picture, see our{" "}
          <Link href="/blog/pinellas-county-industrial-cre-2026" className="text-accent underline">
            Pinellas County industrial CRE 2026 market overview
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does the Landings Proposal Fit into Clearwater&apos;s Broader Sports and Recreation CRE Story?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Clearwater already has a meaningful sports and recreation commercial real estate identity through BayCare Ballpark and the Philadelphia Phillies&apos; spring training complex. The Phillies organization purchased a 13-acre site adjacent to BayCare Ballpark in 2022 - a move that reflects the franchise&apos;s long-term commitment to Clearwater as a sports anchor. The Ballpark district in downtown Clearwater is a distinct commercial cluster from the Landings site, which sits in North Clearwater near the Airpark, but the two projects together reinforce Clearwater&apos;s position as one of the most sports-active commercial submarkets in Pinellas County.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Landings proposal targets a different market segment than BayCare Ballpark: year-round youth and adult recreational sports rather than professional baseball spring training. Tournament-grade multi-sport facilities generate 12-month revenue rather than the 6-week spring training window, and they attract a fundamentally different visitor profile - families with youth athletes rather than baseball tourists and retirees. That distinction matters for the commercial real estate impact thesis, because year-round tournament operations create more durable demand for hotels, restaurants, and sports-adjacent retail than a seasonal spring training venue alone.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For Tampa Bay&apos;s growing experience and recreation commercial real estate sector more broadly, see our{" "}
          <Link href="/blog/tampa-bay-experience-entertainment-cre-2026" className="text-accent underline">
            Tampa Bay experiential and entertainment CRE 2026 analysis
          </Link>
          , which covers how pickleball clubs, indoor sports venues, and recreational anchors are reshaping leasing demand across the region.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you&apos;re considering commercial or residential investments near the North Clearwater area, the team at{" "}
          <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            NowTB.com
          </a>{" "}
          tracks neighborhood-level market data across Tampa Bay, which can be useful context for understanding the full investment picture beyond the commercial layer.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Investors and Landlords Do Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Clearwater Landings Sports Complex is in a pre-approval phase where the commercial real estate opportunity and the execution risk are both elevated. That combination favors investors who can underwrite the position on its standalone fundamentals - the North Clearwater corridor&apos;s existing traffic volumes, population density, and commercial vacancy profile - while treating the Landings project as a meaningful but not guaranteed upside variable rather than the primary investment thesis.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors who buy a retail pad on the US-19 corridor because the fundamentals support it and the Landings project makes it better are positioned correctly. Investors who buy the same pad solely because the Landings project will transform the corridor are taking on project execution risk that the financial review suggests is not fully resolved. The difference is in how you underwrite the deal - and a commercial real estate broker with active Pinellas County market knowledge can help you see the difference clearly.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For property owners in the corridor who are considering selling in the current pre-announcement window, the question is whether waiting for a project approval and groundbreaking will produce a materially higher price, or whether the certainty of today&apos;s market conditions is worth more than a speculative premium that may take two to three years to materialize - and that depends on execution risk that is still genuinely open. If a quick sale of a commercial property in the Clearwater area makes more sense for your situation,{" "}
          <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            FastSellEasySale.com
          </a>{" "}
          offers an alternative exit path worth exploring.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry has been working commercial real estate transactions across Pinellas County for more than 23 years and holds a Broker Associate license with REMAX Collective. Whether you are evaluating land near the Landings site, repositioning a commercial property along the US-19 corridor, or looking for hotel or restaurant pad opportunities in North Clearwater, the conversations happening in this market right now - before a formal approval - are the ones that tend to produce the best positions.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions About the Clearwater Sports Complex and CRE</h2>
        <FAQAccordion items={faqItems} />

        <h2 className="mt-10 text-2xl font-bold text-black">Related Clearwater and Pinellas County Commercial Real Estate Resources</h2>
        <RelatedLinks links={relatedLinks} />
      </article>

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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Pinellas County and the broader Tampa Bay commercial market. He helps investors, landlords, and tenants navigate development-driven CRE opportunities. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Positioning Near Clearwater&apos;s Next Major Development Anchor?"
        subheading="Barrett Henry - Broker Associate, REMAX Collective - has worked commercial real estate transactions in Pinellas County for more than 23 years. Whether you are evaluating land near the Landings Golf Course site, looking for hotel or restaurant pad opportunities along the US-19 corridor, or assessing the right time to sell a commercial property in North Clearwater, call now for a direct conversation about what the market looks like today."
        primaryCta={{ label: "Talk to Barrett Henry", href: "/contact" }}
      />
    </>
  );
}
