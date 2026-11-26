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
 * Blog: Tampa Bay Defense & Aerospace CRE — MacDill AFB 2026
 * MacDill hosts SOCOM and CENTCOM and anchors a $34B+ Florida defense
 * economy. This post explains how that defense spending drives
 * demand for office, industrial, and specialized CRE across Tampa Bay.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Defense & Aerospace CRE 2026: MacDill AFB Impact | HenCRE",
  description:
    "MacDill Air Force Base hosts SOCOM and CENTCOM and anchors Florida's $34B+ defense economy. Learn how defense spending drives commercial real estate demand for office, flex, and industrial space across Tampa Bay.",
  alternates: {
    canonical: "https://hencre.com/blog/tampa-bay-defense-aerospace-cre-macdill-2026",
  },
  openGraph: {
    title: "Tampa Bay Defense & Aerospace CRE 2026: How MacDill AFB Drives Commercial Real Estate",
    description:
      "Florida ranks fourth nationally in DoD contract awards at $34.8B. MacDill AFB's SOCOM and CENTCOM missions anchor a defense economy that shapes Tampa Bay office, industrial, and flex real estate demand.",
    url: "https://hencre.com/blog/tampa-bay-defense-aerospace-cre-macdill-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aerial view of Tampa Bay representing defense and aerospace commercial real estate growth",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What kinds of businesses lease commercial space because of MacDill AFB?",
    answer:
      "MacDill hosts United States Central Command (CENTCOM) and United States Special Operations Command (SOCOM), two of the most significant military commands in the country. This generates consistent commercial real estate demand from a wide range of contractors and service providers. Defense prime contractors and their subcontractors require Class A and Class B office space in South Tampa and the Westshore district for proposal teams, program management offices, and cleared personnel. Intelligence, surveillance, and reconnaissance technology firms need flex industrial or specialized office space with the ability to build Sensitive Compartmented Information Facilities, known as SCIFs. Cybersecurity and IT services firms, logistics and supply-chain management companies supporting overseas operations, healthcare and medical services contractors, and legal, finance, and HR firms specializing in federal contracts all maintain Tampa Bay offices due to MacDill's presence. This ecosystem of defense-related tenants provides a demand floor for South Tampa and Westshore commercial real estate that is relatively independent of private-sector economic cycles.",
  },
  {
    question: "What is a SCIF and how does it affect commercial leasing near MacDill?",
    answer:
      "A Sensitive Compartmented Information Facility, or SCIF, is a specially constructed space that meets U.S. government standards for processing and storing classified information. Defense contractors who handle classified programs are required to operate from accredited SCIFs. Building a SCIF in a commercial space requires significant tenant improvement investment, including reinforced walls, floors, and ceilings, controlled access systems, RF shielding, and strict construction oversight by cleared personnel. For commercial landlords, a SCIF tenant brings both opportunity and complexity. These tenants require longer lease terms to amortize the SCIF construction cost, typically five to ten years or longer, and they will pay premium rents in exchange for the right space and landlord cooperation with the accreditation process. South Tampa and Westshore office buildings that have hosted SCIF-capable tenants before carry a significant advantage in attracting the next cleared tenant, since the structural improvements often carry over and the building has a known accreditation history. For investors evaluating office assets in these submarkets, the presence of an existing cleared tenant is a durable occupancy signal.",
  },
  {
    question: "How does Florida's defense economy rank nationally and what does that mean for Tampa Bay CRE?",
    answer:
      "Florida ranked fourth in the United States in Department of Defense contract awards in fiscal year 2024, receiving approximately $34.8 billion in obligated DoD spending. That places Florida behind only California, Virginia, and Texas in terms of defense economic activity. Tampa Bay captures a disproportionate share of Florida's defense activity because of MacDill's outsized command presence: SOCOM oversees all U.S. special operations forces globally, and CENTCOM manages military operations across a 20-country area of responsibility covering the Middle East and Central Asia. The practical commercial real estate implication is that Tampa Bay's defense-driven office and industrial demand does not contract and expand with the local private-sector economy the way traditional commercial demand does. When technology companies or financial services firms pull back on office space, defense contractors are still expanding. The inverse is also true during defense spending downturns, but the recent trajectory of federal defense appropriations suggests continued growth through the late 2020s.",
  },
  {
    question: "Is South Tampa the only submarket that benefits from MacDill, or does the defense economy affect other areas?",
    answer:
      "MacDill's direct tenancy spillover is most concentrated in South Tampa and the Westshore business district, which offer the proximity, Class A infrastructure, and parking ratios that large government contractors require for cleared-facility operations. However, the defense supply chain extends across a much broader geography. Aerospace and defense manufacturing and maintenance, repair, and overhaul firms occupy industrial and flex space in Pinellas County, particularly around the St. Pete-Clearwater Airport and along the US-19 corridor. Defense technology and cybersecurity firms have expanded into the USF Research Park corridor in New Tampa and East Pasco County, where lower rents, newer flex product, and proximity to University of South Florida engineering talent provide an alternative to South Tampa office rates. The Westshore Marina District and the broader Bayshore Boulevard corridor are also absorbing residential density from defense-sector workers, which strengthens the retail and service-commercial real estate in those areas. Investors should not limit their defense-adjacent analysis to the zip codes immediately surrounding MacDill.",
  },
  {
    question: "What should a commercial landlord know about leasing to a defense contractor?",
    answer:
      "Leasing to a defense contractor tenant differs meaningfully from a standard commercial lease negotiation in several ways. First, timeline: government contractors must often comply with federal contracting vehicle requirements before committing to a lease, and the approval chain for large prime contractors can take significantly longer than a corporate tenant. Build in extra time for lease execution. Second, tenant improvement complexity: if the tenant anticipates building a SCIF or any cleared space, you will need to cooperate with the GSA or relevant government agency's review process and may be asked to sign non-disclosure agreements regarding the tenant's work. Third, security considerations: some defense tenants require restrictions on building visitor access, exterior signage, and even the identities of co-tenants in the same building. These requirements are negotiable but need to be addressed before the lease is signed. Fourth, credit quality: large defense prime contractors are typically investment-grade or near-investment-grade credits with multi-year government contracts that backstop their lease obligations, making them highly desirable tenants from a credit perspective. The complexity of leasing to a defense contractor is real, but it is manageable with experienced legal counsel and a broker who understands the sector.",
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
          name: "Tampa Bay Defense & Aerospace CRE MacDill 2026",
          item: "https://hencre.com/blog/tampa-bay-defense-aerospace-cre-macdill-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline:
        "Tampa Bay Defense & Aerospace CRE 2026: How MacDill AFB Drives Commercial Real Estate",
      description:
        "MacDill Air Force Base hosts SOCOM and CENTCOM and anchors Florida's $34.8B defense economy. Learn how defense spending shapes Tampa Bay office, flex, and industrial commercial real estate demand.",
      datePublished: "2026-11-20",
      dateModified: "2026-11-26",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-defense-aerospace-cre-macdill-2026",
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
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "South Tampa is the primary submarket for defense contractor office tenants near MacDill.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "Class A office inventory and leasing trends in the market's top defense-adjacent submarket.",
  },
  {
    title: "Tampa Bay Office Market Q4 2026",
    href: "/blog/tampa-bay-office-market-q4-2026",
    description: "Current vacancy, absorption, and rent trends across all Tampa Bay office submarkets.",
  },
  {
    title: "Tampa Bay Life Sciences CRE 2026",
    href: "/blog/tampa-bay-life-sciences-cre-2026",
    description: "Life sciences and defense medical research share USF and Westshore infrastructure demand.",
  },
  {
    title: "Tampa Bay Data Center CRE 2026",
    href: "/blog/tampa-bay-data-center-cre-2026",
    description: "Defense tech and AI intersect: how cybersecurity and AI infrastructure are reshaping Tampa Bay CRE.",
  },
  {
    title: "Tampa Bay Small-Bay Industrial Flex 2026",
    href: "/blog/tampa-bay-small-bay-industrial-flex-2026",
    description: "Defense supply-chain contractors and MRO firms fill small-bay flex across Pinellas and Hillsborough.",
  },
  {
    title: "Tampa Bay Corporate HQ Relocations & Office CRE 2026",
    href: "/blog/tampa-bay-corporate-hq-relocations-office-cre-2026",
    description: "Defense contractor divisions relocating to Tampa Bay are part of the broader corporate migration story.",
  },
  {
    title: "North Tampa USF Corridor Commercial Real Estate 2026",
    href: "/blog/north-tampa-usf-corridor-commercial-real-estate-2026",
    description: "Defense tech and cybersecurity firms expanding into the USF Research Park and Pasco County.",
  },
  {
    title: "Tampa Bay Opportunity Zones CRE 2026",
    href: "/blog/tampa-bay-opportunity-zones-cre-2026",
    description: "Some defense-corridor industrial areas overlap with Opportunity Zones offering tax advantages.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Essential checklist for investors evaluating office or flex assets with cleared-facility tenants.",
  },
];

export default function TampaBayDefenseAerospaceCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Tampa Bay Defense & Aerospace CRE MacDill 2026",
            href: "/blog/tampa-bay-defense-aerospace-cre-macdill-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=1600&h=900&fit=crop"
        title="Tampa Bay Defense & Aerospace CRE 2026"
        subtitle="MacDill Air Force Base is home to SOCOM and CENTCOM — two of the most powerful military commands on Earth. Here is how their presence shapes commercial real estate demand across South Tampa, Westshore, and beyond."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Every commercial real estate market has anchors — large, stable demand drivers that fill space and generate economic activity regardless of what the broader economy is doing. For Tampa Bay, MacDill Air Force Base is one of the most consequential anchors in the entire market, and it is one that most commercial investors either underestimate or overlook entirely. Florida ranked fourth nationally in Department of Defense contract awards in fiscal year 2024, capturing approximately $34.8 billion in obligated DoD spending. A substantial share of that spending flows through the commands headquartered at MacDill, and the contractors, technology firms, and professional services companies supporting those missions occupy a significant footprint of South Tampa and Westshore commercial real estate. Understanding this dynamic is not optional for any serious investor or landlord in those submarkets.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Why Does MacDill Air Force Base Matter for Tampa Bay Commercial Real Estate?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          MacDill is not a standard Air Force installation. It is home to two Unified Combatant Commands: United States Central Command, which manages all U.S. military operations across a 20-country area covering the Middle East and Central Asia, and United States Special Operations Command, which oversees all U.S. special operations forces globally. These are among the largest and most mission-critical headquarters in the American military, and they draw a contractor ecosystem that is unmatched by any other installation in Florida.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          When a command of this size is permanently based in a metro area, the commercial real estate effect is both direct and durable. Direct: defense prime contractors, their subcontractors, and the full range of professional services firms supporting cleared missions all need commercial space near the base. Durable: unlike private-sector tenants whose space requirements fluctuate with revenue cycles, defense contractors working on multi-year government contracts maintain stable headcounts and office footprints through economic downturns that would otherwise erode demand.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The national defense spending trend amplifies this stability. The U.S. defense sector is undergoing its fastest expansion in decades as geopolitical competition drives increases in appropriations for the kinds of special operations, intelligence, and logistics capabilities that SOCOM and CENTCOM command. That spending flows to the contractors based near MacDill, and those contractors need space to grow. For a broader look at how this intersects with Tampa Bay&apos;s overall commercial office picture, see our{" "}
          <Link href="/blog/tampa-bay-office-market-q4-2026" className="text-accent underline">
            Tampa Bay office market Q4 2026 overview
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Types of Commercial Space Does the Defense Ecosystem Demand?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The defense contractor ecosystem around MacDill creates demand across multiple commercial property types, each with different characteristics that investors should understand.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Class A and Class B Office — South Tampa and Westshore:</strong> Large defense prime contractors and their major subcontractors require professional office environments that can accommodate program management offices, proposal teams, and senior cleared personnel. South Tampa and the Westshore business district are the dominant locations for this demand. The proximity to MacDill, the availability of Class A office inventory, and the established cleared-workforce talent pool in these submarkets make them the natural home base for large defense contractor offices. For current market conditions in these submarkets, our{" "}
          <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">
            Westshore Tampa office market 2026 analysis
          </Link>{" "}
          covers vacancy, rent trends, and notable tenants in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Flex Industrial with Cleared-Facility Capability:</strong> Intelligence, surveillance, and reconnaissance technology firms, cybersecurity companies, and defense electronics contractors require space that combines office functionality with the ability to build SCIFs and specialized testing or integration areas. This creates demand for flex industrial and R&D space with high ceilings, reinforced construction, controlled access, and high power capacity. The{" "}
          <Link href="/blog/tampa-bay-small-bay-industrial-flex-2026" className="text-accent underline">
            small-bay and flex industrial segment
          </Link>{" "}
          in South Tampa and Pinellas County is particularly well-positioned to absorb this demand.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Logistics and Industrial — Defense Supply Chain:</strong> SOCOM&apos;s global operations require an extensive logistics and supply chain infrastructure that includes maintenance, repair, and overhaul facilities, parts warehousing, and equipment staging. This generates industrial demand along the Port Tampa Bay corridor and in Pinellas County near the St. Pete-Clearwater Airport, one of the region&apos;s primary general aviation and military charter gateways.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Defense Tech and Cybersecurity — USF Corridor and East Pasco:</strong> A newer segment of the defense ecosystem, technology and cybersecurity firms that support classified digital infrastructure and AI-driven surveillance systems, is expanding beyond traditional defense submarkets. The{" "}
          <Link href="/blog/north-tampa-usf-corridor-commercial-real-estate-2026" className="text-accent underline">
            USF Research Park corridor
          </Link>{" "}
          and East Pasco County are absorbing these firms, drawn by lower rents, newer flex and office product, and proximity to the University of South Florida&apos;s engineering and computer science talent pipeline.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Does Defense Spending Stability Affect Commercial Investment Risk?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors evaluating office or flex industrial assets in South Tampa and Westshore often underweight the value of a defense-anchored tenant base when underwriting acquisition risk. The conventional commercial real estate framework focuses on private-sector absorption trends, remote work impacts, and corporate cost rationalization, all of which are real pressures. But defense contractor tenants are largely insulated from these forces.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A defense prime contractor with a five-year government contract cannot unilaterally shrink its office footprint by 30% because a new CEO decides to embrace remote work. Classified work cannot be done from home. SCIF space requires a physical environment that meets federal standards. The cleared-workforce talent base in Tampa Bay, built over decades, is not easily replicated elsewhere, which further anchors defense tenants to their existing spaces. The practical implication for investors is that an office building with a significant defense contractor anchor tenant has lower rollover risk and more predictable cash flows than a comparably sized building filled with private-sector corporate tenants responding to the same remote-work pressures affecting most of the market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This risk profile has not gone unnoticed by institutional capital. Buildings with strong defense contractor rosters in Northern Virginia, the country&apos;s most mature defense real estate market, trade at material premiums to comparable private-sector office assets. Tampa Bay has not yet seen that pricing differential fully expressed, which may represent an opportunity for investors who understand the asset class before the institutional discovery cycle catches up.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Is the SOCOM and CENTCOM Expansion Story and Why Does It Matter Now?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Both SOCOM and CENTCOM are in periods of organizational growth driven by evolving national security requirements. Special operations forces are increasingly central to U.S. military strategy across the full spectrum of conflict, from counterterrorism to great-power competition, and that expansion has translated into larger civilian contractor workforces supporting SOCOM&apos;s Tampa operations. CENTCOM&apos;s operational portfolio has expanded as well, adding new responsibilities that require additional contractor support in areas including artificial intelligence integration, cyber operations, and logistics modernization.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Concurrently, Space Force&apos;s STARCOM command presence in Florida is growing. While STARCOM is not headquartered at MacDill, its expansion at other Florida installations creates additional cleared-workforce demand that flows into the Tampa Bay commercial real estate market as contractors follow talent and proximity to mission.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For commercial real estate investors, this institutional expansion means that defense-driven demand for South Tampa and Westshore office space is not static. It is growing, and the pipeline of government contracting awards directed at MacDill-adjacent missions is long-dated enough to provide confidence that the demand driving tenants into these submarkets will persist through the planning horizons of most commercial acquisitions. This is a meaningful counterweight to the softer private-sector office demand described in our{" "}
          <Link href="/blog/tampa-bay-office-sublease-market-2026" className="text-accent underline">
            Tampa Bay office sublease market overview
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Does the Defense Economy Affect Surrounding Residential and Mixed-Use CRE?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s defense economy employs tens of thousands of people, from active-duty and retired military personnel to civilian government employees and private-sector contractors. This workforce concentrates in and around South Tampa, Westshore, and the nearby residential corridors of Bayshore Boulevard, Hyde Park, and New Tampa. The purchasing power and housing stability of this workforce has a direct positive effect on retail, restaurant, and service commercial real estate in the surrounding areas.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Defense workers are, as a group, relatively recession-resistant tenants for residential properties and reliable customers for the retail and food-and-beverage commercial spaces near their homes and offices. Retail investors evaluating properties in South Tampa and the Westshore area benefit from this demand floor in a way that is not fully captured by conventional retail market analysis, which focuses on private-sector employment trends.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are selling a commercial property in a defense-adjacent corridor and want to understand how defense-workforce demand factors into your property&apos;s value positioning, explore <Link href="/services/dispositions" className="text-accent underline">Barrett&apos;s disposition advisory services</Link> for a structured, expert-guided path to market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Should Investors and Landlords Do to Position for Defense-Adjacent CRE?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you own commercial property in South Tampa, Westshore, Pinellas County near St. Pete-Clearwater Airport, or the USF corridor, understanding whether your asset is positioned to attract cleared or defense-adjacent tenants is worth a focused analysis. Buildings that have never hosted a cleared tenant may have renovation or structural upgrade requirements before they can accommodate a SCIF, and understanding those requirements before a prospective defense tenant tours is an important step in qualifying the opportunity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors evaluating acquisitions, properties in these submarkets with existing defense contractor tenants deserve a different underwriting framework than a standard office asset. The lease term, credit quality, tenant improvement investment, and renewal likelihood of a defense contractor tenant are all structurally different from a comparable private-sector tenant, and those differences typically support a more aggressive acquisition valuation than a comparable private-sector-tenanted building in the same submarket.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors looking for entry points into the defense corridor that do not require large-format office capital can also look at small-bay flex industrial in Pinellas County, where defense supply-chain, maintenance, and technology tenants represent a stable and growing share of demand. Our{" "}
          <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">
            commercial ROI framework
          </Link>{" "}
          and{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">
            due diligence checklist
          </Link>{" "}
          both apply to these acquisitions, with the additional note that cleared-facility requirements need to be addressed in the structural and legal review phases.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line for Tampa Bay CRE Investors in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          MacDill Air Force Base and the defense economy it anchors represent one of Tampa Bay&apos;s most durable and underappreciated commercial real estate demand drivers. Florida&apos;s $34.8 billion annual DoD contract economy, the expanding missions of SOCOM and CENTCOM, and the growing defense technology and cybersecurity sector create steady, credit-quality tenancy for South Tampa and Westshore office, Pinellas flex industrial, and USF corridor R&D space — tenancy that does not contract when private-sector demand softens.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors who incorporate the defense-economy lens into their market analysis will find that certain assets that appear to be conventional office or industrial plays are actually premium, mission-critical facilities with tenant profiles that compare favorably to triple-net retail in terms of credit quality and lease stability. For landlords, understanding how to market to, lease to, and retain defense contractor tenants is a competitive advantage in markets where that knowledge is still rare.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of experience in Tampa Bay commercial real estate and deep familiarity with South Tampa, Westshore, and the emerging defense-tech corridors along the USF and Pasco corridors, I help investors and landlords identify where defense-driven demand creates opportunity — and structure transactions that capture that value. Whether you are evaluating an acquisition, marketing a property with a cleared-facility history, or simply want to understand how MacDill&apos;s presence affects your existing portfolio, let&apos;s talk.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: November 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Defense & Aerospace CRE 2026, Frequently Asked Questions
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
            <p className="text-sm text-[#666666]">
              Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate
              experience across Tampa Bay&apos;s commercial and industrial markets. He works with
              investors, landlords, and tenants across South Tampa, Westshore, Pinellas County, and
              the broader Tampa Bay metro. Learn more about{" "}
              <Link href="/about" className="text-accent underline">
                Barrett&apos;s background
              </Link>{" "}
              or explore{" "}
              <Link href="/services" className="text-accent underline">
                his services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Own Commercial Property Near MacDill or in a Defense Corridor?"
        body="Whether you own office or flex industrial property in South Tampa, Westshore, or the Pinellas defense corridor and want to understand how defense-driven demand affects your asset&apos;s value and leasing strategy, let&apos;s talk. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
