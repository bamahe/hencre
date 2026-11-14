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
 * Blog: Tampa Bay Charter School & Education Commercial Real Estate 2026
 * Growing niche: school campuses, faith-based buyers, NNN operators.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Charter School & Education Commercial Real Estate 2026 | HenCRE",
  description:
    "Charter schools, private academies, and faith-based education operators are actively acquiring commercial property across Tampa Bay. Recent deals topped $12M–$14M. Here is what investors and buyers need to know.",
  alternates: {
    canonical:
      "https://hencre.com/blog/tampa-bay-charter-school-education-commercial-real-estate-2026",
  },
  openGraph: {
    title: "Tampa Bay Charter School & Education Commercial Real Estate 2026",
    description:
      "Education-related commercial real estate is quietly one of the most active buyer categories in Tampa Bay. From former mall conversions to purpose-built campuses, here is what is driving demand and where opportunities exist.",
    url: "https://hencre.com/blog/tampa-bay-charter-school-education-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "School campus building in a Tampa Bay suburban neighborhood",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What types of commercial properties work for charter schools in Tampa Bay?",
    answer:
      "Charter schools in Tampa Bay have converted a wide range of commercial buildings, including former retail boxes, vacant big-box anchors, office buildings, and purpose-built educational campuses. The key requirements under Florida law are adequate gross square footage (typically 100 to 150 SF per student for core instructional space), outdoor recreation space meeting state standards, ADA-compliant restroom ratios, commercial kitchen capacity if the school participates in federal meal programs, and zoning that permits educational use. Many suburban Hillsborough, Pasco, and Pinellas parcels zoned for community facilities or institutional use are well-suited for charter conversion. Former big-box retail buildings, particularly those with large surface parking lots that can be fenced for outdoor recreation, are among the most cost-effective conversion candidates in today's Tampa Bay market.",
  },
  {
    question: "Are charter school operators good commercial tenants for NNN leases?",
    answer:
      "Charter school operators range from nationally managed nonprofits with strong balance sheets to single-campus operators with thin financial reserves. National or regionally scaled charter management organizations, such as KIPP, Step Up For Students-affiliated schools, or large Florida charter networks, offer the most creditworthy tenancy for NNN investors. Smaller single-campus charters present higher credit risk but often sign long initial lease terms (10 to 20 years) because relocating an enrolled student body is operationally difficult. The key due diligence items for charter school NNN underwriting are: the operator's charter renewal history with the Florida Department of Education, enrollment trends relative to authorized capacity, and whether the lease has a corporate or multi-campus guarantee versus a single-entity guarantee. Florida charter schools operate under five-year charter renewals, so a lease term that extends through multiple renewal cycles is more valuable than one that expires near a renewal decision point.",
  },
  {
    question: "How does Florida's education funding affect charter school real estate in Tampa Bay?",
    answer:
      "Florida funds charter schools on a per-student basis through the Florida Education Finance Program (FEFP), allocating a portion of the per-pupil allotment to capital facilities. Charter schools in Florida receive a capital outlay allocation (currently around $200 to $300 per student annually) that can be applied to facilities costs. This creates a direct link between enrollment and the school's ability to service lease or mortgage obligations. A Tampa Bay charter school with 800 enrolled students has a meaningfully different facilities budget than one with 300 students. Investors and owners considering charter school tenants should evaluate the school's current enrollment against its authorized capacity and its historical enrollment trajectory. Florida also offers the Charter School Capital Outlay program, which some operators use to finance facility construction or acquisition, reducing their dependence on lease financing.",
  },
  {
    question: "What are typical cap rates for education-use NNN properties in Florida?",
    answer:
      "Education-use NNN properties in Florida trade across a wide cap rate range depending on tenant credit, lease structure, and location. National charter management organizations or faith-based school networks with strong balance sheets and long lease terms can trade in the 6.5% to 7.5% cap rate range in well-located Tampa Bay submarkets. Smaller regional or single-campus operators typically require cap rates of 7.5% to 9.0% to reflect the elevated credit and re-tenanting risk. Purpose-built K-12 campus properties sold with long-term leaseback agreements to established schools can trade closer to the institutional NNN range. The re-tenanting universe for a purpose-built school campus is narrower than for a standard commercial shell, which is why investors demand a yield premium over comparable square footage in retail or office. As a point of comparison, see current benchmarks across all Tampa Bay single-tenant categories in our overview of Tampa Bay NNN cap rates in 2026.",
  },
  {
    question: "Who is buying education-use commercial properties in Tampa Bay right now?",
    answer:
      "The active buyer universe for education commercial properties in Tampa Bay in 2026 includes charter school management organizations acquiring campuses they previously leased, faith-based schools executing campus expansions or relocations, private equity-backed education operators seeking to control real estate as a competitive barrier, and individual investors and family offices purchasing campus properties for leaseback to established school operators. The September 2026 acquisition of the former Floriland Mall site in Tampa by Tampa Bay Christian Academy for approximately $12.8 million, and the Bayshore Christian acquisition of a South Tampa campus for $14.6 million, illustrate that faith-based education operators have become some of the most active buyers of large commercial sites in the metro. These transactions represent a materially different buyer category than traditional retail or office purchasers and are reshaping how some under-utilized commercial properties in Tampa Bay are repriced and repositioned.",
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
          name: "Tampa Bay Charter School & Education Commercial Real Estate 2026",
          item: "https://hencre.com/blog/tampa-bay-charter-school-education-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Charter School & Education Commercial Real Estate 2026",
      description:
        "Charter schools, private academies, and faith-based education operators are actively acquiring commercial property across Tampa Bay. Recent deals topped $12M–$14M. Here is what investors and buyers need to know.",
      datePublished: "2026-11-13",
      dateModified: "2026-11-13",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-charter-school-education-commercial-real-estate-2026",
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
    title: "Tampa Bay Childcare Center NNN Investment 2026",
    href: "/blog/tampa-bay-childcare-nnn-investment-2026",
    description: "Education-adjacent NNN category with similar demand drivers and tenant structures.",
  },
  {
    title: "Tampa Bay Big-Box Retail Conversion 2026",
    href: "/blog/tampa-bay-big-box-retail-conversion-2026",
    description: "Charter schools are among the most active converters of vacant big-box retail in Tampa Bay.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate benchmarks for single-tenant assets across the Tampa Bay market.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description: "Medical and education are two institutional-use categories reshaping Tampa Bay's commercial landscape.",
  },
  {
    title: "Florida 1031 Exchange, What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Education-use NNN properties are increasingly used as 1031 exchange replacement properties.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Essential due diligence checklist before acquiring any education-use commercial property.",
  },
  {
    title: "Tampa Bay Life Sciences CRE 2026",
    href: "/blog/tampa-bay-life-sciences-cre-2026",
    description: "Life sciences and education campuses are both driven by Tampa Bay's research university growth.",
  },
  {
    title: "Wesley Chapel Commercial Real Estate 2026",
    href: "/blog/wesley-chapel-commercial-real-estate-2026",
    description: "One of Tampa Bay's fastest-growing charter school demand submarkets.",
  },
];

export default function TampaBayCharterschoolCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Tampa Bay Charter School & Education Commercial Real Estate 2026",
            href: "/blog/tampa-bay-charter-school-education-commercial-real-estate-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop"
        title="Tampa Bay Charter School & Education Commercial Real Estate 2026"
        subtitle="Faith-based schools, charter operators, and private academies are quietly among the most active commercial property buyers in Tampa Bay. Recent campus deals have topped $12M to $14M. Here is what investors, sellers, and operators need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          In September 2026, Tampa Bay Christian Academy paid approximately $12.8 million for the former Floriland Mall site in Tampa, a property that sat underutilized for years before finding its highest and best use as a school campus. Around the same time, Bayshore Christian acquired a South Tampa campus in a $14.6 million transaction. These deals were not anomalies. Across Tampa Bay, charter school operators, faith-based academies, and private education organizations are emerging as one of the most consequential and least-discussed buyer categories in the commercial real estate market. For investors holding under-utilized commercial properties, and for education operators seeking to control their real estate rather than lease it, understanding how this segment of the market operates has become increasingly important.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Why Are Education Operators Becoming Major Commercial Property Buyers in Tampa Bay?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s population growth is the fundamental driver. The metro has added more than 270,000 residents over the past five years, with the fastest household formation concentrated in suburban corridors where public school capacity has struggled to keep pace with residential growth. That supply-demand gap in public K-12 education creates a persistent enrollment base for charter schools and private academies, which in turn creates the economic justification for education operators to invest in long-term real estate.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The strategic calculus for education operators acquiring their own campuses rather than leasing has also shifted. Lease rates on commercial property in Tampa Bay have risen significantly since 2020, compressing the cost advantage of leasing relative to ownership. A charter school or private academy that owns its campus eliminates rent escalation exposure, gains the ability to customize the facility without landlord approval, and builds institutional equity that can support future capital raises or expansions. For faith-based education operators in particular, owning the campus is often a mission-driven priority that transcends the pure financial comparison.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Simultaneously, the available inventory of large commercial properties suited for educational conversion has improved. The continuing rationalization of big-box retail, former mall anchor spaces, and over-built suburban office parks has created a category of properties, well-located, large-footprint, with ample parking, that are difficult to re-tenant as retail or office but well-suited for school campuses. Tampa Bay&apos;s{" "}
          <Link href="/blog/tampa-bay-big-box-retail-conversion-2026" className="text-accent underline">
            big-box retail conversion market
          </Link>{" "}
          is active across multiple tenant categories, and education is one of the fastest-growing conversion use cases.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Commercial Property Types Are Being Converted for School Use in Tampa Bay?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The range of commercial properties being acquired and converted for educational use in Tampa Bay spans several building categories, each with distinct advantages and challenges:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Former mall anchors and retail boxes.</strong> The Floriland Mall acquisition is a prominent example of a larger trend. Single-story retail buildings with 50,000 to 150,000 square feet, large surface parking fields, and suburban locations near residential density are increasingly attractive to charter and private school operators. The parking field, which is structurally excess for most retail replacement uses, provides the outdoor recreational space that Florida education licensing requires. Conversion costs vary significantly based on existing mechanical systems, restroom capacity, and structural condition.
          </li>
          <li>
            <strong>Office buildings and suburban office parks.</strong> Multi-story office buildings present more complex conversion challenges due to floor plate configurations, restroom ratios, and the difficulty of creating compliant outdoor spaces, but single-story suburban office buildings near residential neighborhoods have been successfully converted to private school and tutoring center use across the metro. Floor plate flexibility and existing HVAC infrastructure make single-story office a more workable starting point than multi-story product.
          </li>
          <li>
            <strong>Purpose-built educational campuses.</strong> Existing school campus properties, including former private school campuses, former charter school facilities, and educational facilities built for operators that relocated, represent the most straightforward conversion path. A campus at 13901 Sheldon Road in Tampa, for example, was listed in 2026 offering approximately 48,841 square feet on roughly 12.55 acres with 40 classrooms, a gymnasium, commercial kitchen, and athletic fields. Purpose-built campuses command premium pricing precisely because the conversion work is minimal or complete. For buyers seeking a turnkey educational facility, these properties command a scarcity premium in the Tampa Bay market.
          </li>
          <li>
            <strong>Industrial flex and warehouse conversions.</strong> Less common but increasingly considered, particularly in suburban markets where large contiguous sites are available. Single-story flex buildings with clear heights of 16 to 20 feet can be cost-effectively converted to classroom space, particularly for vocational education, special needs schools, or technical training programs that benefit from open, adaptable floor plans.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Zoning and Regulatory Hurdles Do Education Operators Face in Hillsborough and Pinellas Counties?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Zoning is a critical gating factor in any educational conversion project in Tampa Bay, and the regulatory landscape varies meaningfully between Hillsborough, Pinellas, and Pasco Counties. Understanding the entitlement path before committing to a purchase is essential, since a commercially zoned property may require a conditional use permit, a rezoning, or a Florida Department of Education charter school application review before the educational use is permissible.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Hillsborough County, public and private schools are generally permitted uses in residential, office, and community facility zoning categories, but require conditional use approval in many commercial zones. The conditional use process involves a public hearing and typically takes 60 to 90 days, though complex projects with neighbor opposition can extend timelines significantly. Sites pre-zoned for institutional or community facility use, as well as parcels zoned Planned Development with educational use specifically permitted, offer the fastest path to occupancy.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Charter school operators in Florida must also navigate the state charter application process, which involves approval by the local school district and, in some cases, appeals to the state Board of Education. The charter approval timeline is separate from and parallel to the real estate entitlement process, and experienced charter operators plan their real estate acquisitions with sufficient flexibility to accommodate charter approval timing. For investors considering education-use NNN properties, verifying that the tenant holds an active, renewably-current charter is a fundamental due diligence step, as important as reviewing any other aspect of the lease. For a full due diligence framework, see our{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">
            commercial property due diligence timeline
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Which Tampa Bay Submarkets Are Seeing the Most Education-Use Activity?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Education-use commercial real estate activity in Tampa Bay is concentrated in submarkets where residential growth has outpaced public school capacity and where large commercial sites are available at prices that pencil for educational buyers:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>North Tampa and the USF Corridor.</strong> The{" "}
            <Link href="/blog/north-tampa-usf-corridor-commercial-real-estate-2026" className="text-accent underline">
              North Tampa USF corridor
            </Link>{" "}
            has historically been the densest concentration of private and charter school activity in the metro, driven by proximity to the University of South Florida and the high-education-attainment demographic of surrounding neighborhoods. Demand from both operators and students remains strong.
          </li>
          <li>
            <strong>Wesley Chapel and New Tampa (Pasco and Hillsborough Counties).</strong>{" "}
            <Link href="/blog/wesley-chapel-commercial-real-estate-2026" className="text-accent underline">
              Wesley Chapel&apos;s explosive residential growth
            </Link>{" "}
            has created structural gaps in K-12 school capacity. Charter schools have proliferated in the submarket, and both acquisition and leasing activity for educational commercial space in Wesley Chapel has been among the highest in the metro in 2025 and 2026.
          </li>
          <li>
            <strong>Riverview, Brandon, and Southeast Hillsborough.</strong> Family density along the US-301 and SR-60 corridors, combined with available large-format commercial inventory, has made southeast Hillsborough an active market for charter school and private academy real estate. The{" "}
            <Link href="/blog/riverview-fl-commercial-real-estate-2026" className="text-accent underline">
              Riverview commercial market
            </Link>{" "}
            in particular has seen multiple educational use transactions as operators follow the residential build-out southward.
          </li>
          <li>
            <strong>South Tampa and the Bayshore Corridor.</strong> The Bayshore Christian acquisition and other high-profile faith-based school transactions reflect the premium that established private schools in South Tampa place on campus control in a market where available large sites are extremely limited.
          </li>
          <li>
            <strong>Parrish and East Manatee County.</strong> One of the highest-growth residential corridors in the entire metro, with charter school demand that has not yet been fully served by existing supply. Education operators are actively evaluating land and commercial conversion opportunities in this submarket.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Should Investors Know About Selling a Commercial Property to an Education Buyer?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Education buyers operate on different timelines and decision frameworks than retail or industrial buyers, and understanding those differences can help sellers structure a transaction that works for both parties. Charter schools and private academies are mission-driven organizations, and their acquisition decisions often involve board approvals, capital campaign timelines, and state regulatory processes that do not align neatly with standard 30 to 60-day commercial transaction timelines. Sellers who provide extended due diligence periods, flexible closing timelines, and willingness to engage with a buyer&apos;s board approval process are more likely to close successfully.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Education buyers are also often less price-sensitive on a per-square-foot basis than traditional commercial buyers, particularly when a property has specific site characteristics, location relative to the school&apos;s existing enrollment base, or facility features, gymnasiums, commercial kitchens, outdoor fields, that would be expensive to replicate. A property that is difficult to re-tenant as retail or office because of configuration or location may trade at a significant premium to a school buyer who values exactly those characteristics.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For sellers with under-utilized commercial properties in residential-adjacent Tampa Bay submarkets, the education buyer market is worth exploring before defaulting to a traditional commercial marketing process. If the property needs pre-sale repairs or systems updates to meet the inspection requirements that education buyers and their lenders typically require,{" "}
          <a href="https://bestbayservices.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            Best Bay Services
          </a>{" "}
          provides handyman and HVAC services across Tampa Bay that can address deferred maintenance before listing. If the goal is a faster sale without traditional listing timelines,{" "}
          <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            FastSellEasySale.com
          </a>{" "}
          provides direct acquisition options for commercial properties, land, and businesses across the Tampa Bay region.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          The Bigger Picture: Education as a Structural CRE Demand Driver in Tampa Bay
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The emergence of charter schools and private education operators as a significant commercial real estate buyer and tenant category in Tampa Bay reflects a broader structural shift that most market participants have not fully priced in. The metro&apos;s population growth has created persistent gaps in public education capacity that charter and private school operators are filling. Those operators, in turn, are increasingly seeking to control their real estate rather than lease it, which puts them in direct competition with traditional commercial buyers for the large-format, suburban-located properties that dominate the available inventory in Hillsborough, Pasco, and Pinellas Counties.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, the education segment of the NNN market represents a yield premium over more familiar categories like pharmacies or QSR, with the trade-off of a narrower re-tenanting universe if the primary tenant vacates. For sellers of under-utilized commercial properties, the education buyer category is an increasingly relevant demand source that can compete with or exceed what traditional buyers will pay for the right sites. And for education operators still leasing their campuses, the current commercial real estate market in Tampa Bay, with realistic pricing on some legacy retail and office product, may represent a rare window to transition from tenant to owner.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of real estate experience and active work across commercial investment, tenant representation, and owner-user acquisitions in Tampa Bay, I help education operators, investors, and commercial property owners navigate this segment of the market. Whether you are an education operator evaluating a campus acquisition, a property owner assessing whether a school buyer makes sense for your site, or an investor building a portfolio of education-use NNN properties, reach out directly for a confidential consultation.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: November 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay Charter School & Education CRE, Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience in Tampa Bay.
              He specializes in commercial investment acquisitions, NNN properties, owner-user transactions, and tenant
              representation across Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
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
        heading="Evaluating an Education-Use Commercial Property in Tampa Bay?"
        body="Whether you are a charter school operator considering a campus acquisition, a property owner assessing whether an education buyer is right for your site, or an investor researching education NNN opportunities, I can help. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
