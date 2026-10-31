import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay EV Charging Commercial Real Estate 2026
 * EV charging infrastructure as an investment, amenity, and NNN tenant
 * category reshaping commercial properties across Tampa Bay.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay EV Charging Commercial Real Estate 2026 | HenCRE",
  description:
    "Electric vehicle charging infrastructure is reshaping commercial real estate across Tampa Bay. From NNN charging station investments to amenity upgrades that command rent premiums, here is what investors and property owners need to know.",
  alternates: { canonical: "https://hencre.com/blog/tampa-bay-ev-charging-commercial-real-estate-2026" },
  openGraph: {
    title: "Tampa Bay EV Charging Commercial Real Estate 2026",
    description:
      "EV charging is moving from amenity to necessity across Tampa Bay commercial properties. What investors, landlords, and tenants need to know about the real estate implications.",
    url: "https://hencre.com/blog/tampa-bay-ev-charging-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Electric vehicle charging station at a commercial property",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Do EV charging stations actually increase commercial property value in Tampa Bay?",
    answer:
      "The evidence is building and trending positive. Commercial real estate data compiled through 2025 and 2026 shows that properties with installed Level 2 and DC fast charging consistently report 8% to 12% rent premiums on leases signed after installation, particularly in retail, office, and mixed-use properties. The mechanism is straightforward: tenants — especially professional services firms, medical groups, and retail operators — are increasingly competing for a customer and employee base that drives EVs and expects charging where they park. Tampa Bay is among Florida's fastest-growing EV registration markets, and Florida ranks third nationally in total registered EVs. A property that cannot offer charging is already starting to look dated to certain tenant profiles. That said, the value uplift is not automatic — poorly designed charging installations, inadequate electrical infrastructure, and subpar maintenance contracts can create liability rather than value. A commercial real estate broker experienced with tenant amenity negotiations can help owners structure charging upgrades in a way that maximizes lease value rather than just adding hardware.",
  },
  {
    question: "Can I lease my commercial property or parking lot to an EV charging operator as a NNN tenant?",
    answer:
      "Yes, and this is one of the more interesting emerging investment structures in commercial real estate. Charging network operators — including EVgo, Blink Charging, ChargePoint, and others — execute ground leases and license agreements on commercial parking locations, paying the property owner a base rent and sometimes a revenue share on charging sessions. The deal economics vary significantly by location type, traffic volume, and proximity to highway corridors. A well-located pad site on a high-traffic Tampa Bay arterial with good I-4 or I-75 access can generate meaningful supplemental income from a charging agreement. Highway-adjacent truck stop and fuel retail locations are seeing the most aggressive interest from operators, as evidenced by the $24.7 million upgrade planned for the Plant City I-4 truck stop, which includes the addition of six high-capacity EV chargers designed to serve the commercial fleet market. Pure charging station investments — where the entire parcel is leased to a charging operator on an absolute NNN basis — are beginning to appear as standalone acquisition opportunities, though the cap rates and tenant credit profiles vary widely. Investors should approach these with the same diligence rigor applied to any specialty NNN asset.",
  },
  {
    question: "What is the difference between Level 2 and DC fast charging, and why does it matter for commercial real estate?",
    answer:
      "Level 2 chargers deliver 10 to 30 miles of range per hour and are appropriate for commercial properties where vehicles are parked for extended periods — office parks, medical campuses, hotels, multifamily parking structures, and retail destinations where dwell time exceeds 30 minutes. Level 2 installation is relatively inexpensive, typically $2,000 to $8,000 per station installed depending on electrical panel capacity and trenching requirements, and is well-suited to landlord-funded amenity upgrades. DC fast chargers (DCFC) deliver 100 to 350 miles of range per hour and are designed for locations where customers want to charge quickly — highway corridors, gas station replacements, grocery-anchored retail, and convenience store destinations where dwell time is 15 to 45 minutes. DCFC installation is substantially more expensive, ranging from $25,000 to over $150,000 per stall depending on power capacity and site work, and typically requires a utility upgrade. For most Tampa Bay commercial landlords, Level 2 chargers represent the practical entry point: manageable installation cost, meaningful tenant and customer satisfaction improvement, and eligibility for federal tax incentives under the Alternative Fuel Vehicle Refueling Property Credit. DCFC investments are better suited to purpose-built charging destinations and highway-facing commercial sites.",
  },
  {
    question: "What financing and tax incentive programs apply to commercial EV charging in Florida?",
    answer:
      "Several layered incentive programs are available to Tampa Bay commercial property owners investing in EV charging infrastructure. The federal Alternative Fuel Vehicle Refueling Property Credit (IRS Form 8911) provides a credit of up to 30% of the cost of installing qualified charging equipment at commercial properties, subject to prevailing wage requirements for projects over $100,000 in credit value. The Inflation Reduction Act extended and expanded this credit through 2032. At the state level, Tampa Electric (TECO) has received Florida Public Service Commission approval for a commercial EV charging pilot program that includes rebates and infrastructure cost-sharing for commercial and industrial customers installing on-site charging. Duke Energy Florida offers parallel programs in the eastern portions of the greater Tampa Bay region. Property owners should also explore USDA Rural Energy for America Program (REAP) grants for qualifying rural commercial properties — relevant for commercial sites in Pasco, Hernando, and Polk Counties. SBA 504 loans, which are a common financing vehicle for commercial real estate improvements in Tampa Bay, can include EV charging infrastructure as part of an eligible capital project when the charging installation is integrated into a broader building improvement. Engage an accountant familiar with commercial real estate tax incentives — and a broker who understands how incentive-funded improvements translate to lease value — before committing to a project budget.",
  },
  {
    question: "Which types of Tampa Bay commercial properties have the strongest case for adding EV charging?",
    answer:
      "The strongest business case runs through four property categories. First, office and medical office parks with long-term corporate tenants are seeing charging become a standard amenity expectation at lease renewal — tenants representing companies with sustainability commitments or professional staff demographics that skew toward EV adoption are negotiating charging provisions into new leases. Second, grocery-anchored and power center retail properties benefit from the dwell time match: a grocery stop takes 20 to 45 minutes, which aligns well with Level 2 charging speed. Centers with charging attract EV drivers intentionally, increasing foot traffic quality. Third, hotel and hospitality properties — particularly limited-service and extended-stay hotels — are seeing EV charging move from differentiator to expected standard, especially as business traveler and rental fleet electrification accelerates. Fourth, industrial and flex properties with fleet operator tenants face growing demand from logistics and delivery operators transitioning vehicles to electric. Warehouses near the Port Tampa Bay expansion corridor and the Wesley Chapel and Plant City industrial nodes are increasingly fielding tenant inquiries about three-phase power availability and charging infrastructure capacity. Properties that can accommodate fleet charging without expensive infrastructure upgrades carry a genuine leasing advantage.",
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
          name: "Tampa Bay EV Charging Commercial Real Estate 2026",
          item: "https://hencre.com/blog/tampa-bay-ev-charging-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay EV Charging Commercial Real Estate 2026",
      description:
        "Electric vehicle charging infrastructure is reshaping commercial real estate across Tampa Bay. From NNN investments to amenity upgrades commanding rent premiums, what investors and property owners need to know.",
      datePublished: "2026-10-30",
      dateModified: "2026-10-30",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-ev-charging-commercial-real-estate-2026",
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
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate benchmarks for NNN investments across Tampa Bay asset classes.",
  },
  {
    title: "Tampa Bay Industrial Market Q4 2026",
    href: "/blog/tampa-bay-industrial-market-q4-2026",
    description: "Fleet electrification is reshaping industrial leasing. What industrial tenants are asking for in 2026.",
  },
  {
    title: "Tampa Bay Retail Market Q4 2026",
    href: "/blog/tampa-bay-retail-market-q4-2026",
    description: "How amenity-driven retail destinations are outperforming commodity centers across Tampa Bay.",
  },
  {
    title: "Tampa Bay Office Market Q4 2026",
    href: "/blog/tampa-bay-office-market-q4-2026",
    description: "What tenants are requiring in office lease renewals — including amenity and sustainability provisions.",
  },
  {
    title: "What Is a Triple Net NNN Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "How NNN lease structures work for specialty asset investments including charging stations.",
  },
  {
    title: "SBA 504 Loan Commercial Real Estate Tampa Bay",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "How 504 loans can finance EV charging infrastructure as part of a broader commercial improvement.",
  },
  {
    title: "Port Tampa Bay Expansion Industrial CRE Investors",
    href: "/blog/port-tampa-bay-expansion-industrial-cre-investors",
    description: "The logistics and fleet corridor driving electrification demand in Tampa Bay industrial real estate.",
  },
  {
    title: "Tampa Bay Car Wash CRE Investment 2026",
    href: "/blog/tampa-bay-car-wash-cre-investment-2026",
    description: "Another auto-oriented asset class where infrastructure investment drives NNN lease value.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors evaluate and acquire commercial properties with value-add potential across Tampa Bay.",
  },
  {
    title: "Commercial Property Dispositions",
    href: "/services/dispositions",
    description: "Selling a commercial property with EV charging improvements? Position the infrastructure as a lease value driver.",
  },
];

export default function TampaBayEVChargingCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Bay EV Charging CRE 2026", href: "/blog/tampa-bay-ev-charging-commercial-real-estate-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&h=900&fit=crop"
        title="Tampa Bay EV Charging Commercial Real Estate 2026"
        subtitle="Electric vehicle charging infrastructure has moved from optional amenity to lease-negotiation line item across Tampa Bay commercial properties. What investors, landlords, and tenants need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          A few years ago, EV charging stations on commercial property were a novelty — a single Level 2 pedestal in the back corner of the parking lot that sat idle most of the day. In 2026, that picture looks very different across Tampa Bay. Corporate tenants are writing charging provisions into office lease renewals. Grocery-anchored shopping centers are installing DC fast chargers as foot-traffic drivers. Industrial landlords near the Wesley Chapel and Plant City corridors are fielding questions about three-phase power capacity from logistics operators transitioning their fleets. And charging network operators are executing ground leases on well-located commercial parcels, paying landlords base rent plus a share of session revenue for the privilege of access.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          Florida ranks third in the nation for total registered electric vehicles, and Tampa Bay sits near the top of the state&apos;s EV adoption curve. That adoption rate is now large enough to move commercial real estate economics — not in every asset class, and not all at once, but across enough property types that investors and owners who ignore the trend are starting to make decisions they will revisit at the next lease cycle.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Why Is EV Charging Infrastructure Becoming a Commercial Real Estate Issue?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The shift is not primarily about sustainability signaling. It is about tenant and customer behavior changing faster than most landlords anticipated.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In the office sector, companies with hybrid work policies are competing for talent in a market where EV ownership skews strongly toward higher-income, professional demographics — exactly the workforce segment that office tenants are trying to attract and retain. An employee who charges at home overnight can use charging at the office as a genuine daily convenience rather than a statement. When two office buildings in Westshore or the Sarasota office corridor are competing for the same tenant, the one with convenient, well-designed Level 2 charging in covered parking has a tangible advantage. That advantage is increasingly translating into a rent premium at lease renewal that exceeds the amortized cost of the charging installation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In retail, the dynamic is different but equally real. A grocery or drug store visit runs 20 to 40 minutes — precisely the window where a Level 2 charger adds 5 to 10 miles of range, a small but psychologically meaningful amount. More importantly, EV drivers actively seek out charging-enabled retail destinations when planning stops, and charging network apps route drivers toward locations where they can charge while they shop. A grocery-anchored center in Brandon or Land O&apos; Lakes with four Level 2 chargers appears on those routing apps and draws a customer segment that would otherwise have driven past. This is a new form of traffic generation that did not exist five years ago and is becoming quantifiable in 2026 foot-traffic data.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In industrial real estate, the driver is fleet electrification. Major delivery operators, courier companies, and last-mile logistics tenants are mid-transition to electric vehicles at various speeds. An industrial or flex building that cannot accommodate fleet charging — either because of inadequate electrical service or physical constraints on installing charging equipment — is increasingly a harder lease to sign with certain tenant profiles. This dynamic is particularly visible near the <Link href="/blog/port-tampa-bay-expansion-industrial-cre-investors" className="text-accent underline">Port Tampa Bay expansion corridor</Link> and the major I-4 and I-75 industrial nodes in Hillsborough and Pasco Counties.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Tampa Bay Infrastructure Projects Are Shaping the EV Charging Landscape?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Several local developments signal how quickly charging infrastructure is moving from peripheral to central in Tampa Bay commercial corridors.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Plant City I-4 truck stop is undergoing a $24.7 million upgrade that includes the addition of six high-capacity EV chargers positioned to serve commercial fleets on the I-4 corridor between Tampa and Orlando. This is not a retrofit of a gas station with two pedestals in the back — it is a deliberate infrastructure investment at a high-volume commercial transit node, reflecting the expectation that commercial fleet electrification will materially change how fuel retail and truck stop real estate generates revenue over the next decade. Highway-facing commercial properties along I-4 and I-75 should pay attention to this project as a leading indicator of the infrastructure investment that landlords in those corridors will be asked about.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Electric (TECO) received Florida Public Service Commission approval for a commercial EV charging pilot that moves the utility from passive power supplier to active participant in on-site charging infrastructure. Under the pilot, TECO purchases, installs, and maintains charging equipment at commercial and industrial customer sites, with the customer paying a service fee rather than bearing the upfront installation cost. For Tampa Bay commercial property owners, this program meaningfully changes the capital math on charging installation — instead of a $50,000 to $150,000 infrastructure project, the landlord can access professionally installed and maintained equipment with a utility-backed service model.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Charging network operators are also aggressively expanding their Tampa Bay footprint. EVgo, ChargePoint, and Blink Charging have all executed or are pursuing site agreements at high-traffic retail, hospitality, and mixed-use locations across the metro. For property owners with the right location characteristics — high daily traffic, adequate electrical capacity, and a tenant or customer base with EV adoption — leasing parking area to a charging network operator provides a revenue stream with minimal management burden. The structure parallels the billboard ground lease or ATM placement agreement in that the property owner provides space and electrical access while the operator manages all customer-facing operations.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Should Tampa Bay Commercial Property Owners Evaluate a Charging Infrastructure Investment?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The business case for installing EV charging depends on property type, tenant mix, location characteristics, and how the owner structures the investment. A one-size-fits-all approach produces poor results. The right framework starts with understanding which problem charging is solving for your specific property.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Tenant retention and rent growth.</strong> For office and medical office landlords with lease expirations in the next two to four years, the relevant question is whether charging availability will factor into the renewal negotiation. If your tenant roster includes companies with stated sustainability commitments, professional service firms, healthcare groups, or technology tenants, the answer is almost certainly yes. Installing Level 2 charging before the renewal conversation — and documenting it in lease marketing materials — positions the landlord favorably. The cost per stall for Level 2 chargers is modest relative to other tenant improvement costs, and the amortization period is well within most lease terms. Pre-listing repair contractors like{" "}
          <a href="https://bestbayservices.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            Best Bay Services
          </a>{" "}
          can assist with the electrical panel assessments and conduit work that are typically the first steps in a Level 2 charging installation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Customer traffic generation for retail.</strong> Retail property owners evaluating charging should map their center&apos;s position on major EV routing apps and assess whether installing chargers would place the property on recommended charging routes for drivers traveling Tampa Bay&apos;s primary commercial corridors. Centers near I-75, US-19, SR-56, or the Dale Mabry Corridor with adequate electrical capacity have the strongest case for high-visibility DC fast charging that generates incremental customer traffic. The capital requirement for DCFC is higher, but the traffic generation upside — and the potential for a revenue-sharing agreement with the charging operator — may justify the investment for well-located retail properties.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Industrial and flex leasing advantage.</strong> For industrial properties, the investment calculus is less about amenity and more about infrastructure readiness. A building that already has adequate electrical service capacity — or that can be cost-effectively upgraded — is marketing a genuine operational advantage to fleet operators. Landlords who invest in three-phase electrical upgrades and rough-in conduit for future charging installation are acquiring a leasing advantage that will compound as fleet electrification accelerates. In a market like Wesley Chapel or the East Tampa US-301 corridor where <Link href="/blog/east-tampa-us-301-industrial-corridor-2026" className="text-accent underline">industrial vacancy is tight</Link>, infrastructure readiness is already factoring into tenant selection decisions.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Are the Investment Risks in Tampa Bay EV Charging Real Estate?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The EV charging category is maturing rapidly but is not without risks that commercial real estate investors should think through carefully.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Operator credit risk.</strong> The charging network sector has seen significant operator instability. Several regional charging companies have gone through restructuring or ceased operations over the past three years, leaving landlords with orphaned equipment and broken revenue-sharing agreements. Before executing a charging ground lease or licensing agreement, investors should evaluate the operator&apos;s financial backing — utility-affiliated programs like the TECO pilot carry significantly lower counterparty risk than venture-backed startups with aggressive growth timelines and uncertain unit economics. National operators with scale and brand recognition (ChargePoint, EVgo) present a more established credit profile than regional entrants, though their deal terms tend to be less landlord-favorable as a result.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Technology obsolescence.</strong> EV charging technology is evolving faster than most real estate investment cycles. Level 2 equipment installed today may be adequate for current vehicles but could be displaced by higher-power standards within five to eight years. DC fast charging equipment has an even faster technology cycle — 150kW chargers that were state-of-the-art in 2023 are already below the minimum specification for some current EV platforms. Investors should structure charging agreements with equipment upgrade provisions, or ensure that ground leases require the operator to maintain current-generation equipment, rather than assuming a static installation will serve a full 10-year lease term.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Utility capacity constraints.</strong> Not every commercial site has the electrical infrastructure to support DC fast charging without a costly utility upgrade. Large DCFC installations can require new transformer capacity, upgraded service panels, and potentially new utility easements. In some Tampa Bay submarkets, TECO and Duke Energy Florida are managing significant load growth from residential and commercial development, and utility upgrade timelines for new large-service applications can run 12 to 24 months. Property owners should obtain a utility feasibility assessment before committing to DCFC investment or signing a charging operator agreement that assumes an installation timeline the utility may not be able to support.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Owners who decide the EV charging investment does not fit their current property — or who are approaching a disposition — should factor in how buyer pools are beginning to price charging-ready versus non-charging-ready properties. At{" "}
          <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            Fast Sell Easy Sale
          </a>
          , commercial properties including land and industrial assets can be evaluated quickly for buyers who want infrastructure-ready sites, including those positioned for EV charging development.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Does the EV Charging Buildout Mean for Tampa Bay Commercial Real Estate Values?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The clearest near-term value impact is playing out in the lease market, not the investment sales market. Tenants are beginning to make location decisions with charging availability as a factor, and the gap between charging-equipped and non-charging-equipped properties is widening for certain tenant profiles. For the office and medical office segments, charging is increasingly a factor in retention negotiations. For retail, the differentiation is emerging more gradually but is directionally consistent with the thesis that physical destinations must offer services that online channels cannot replicate — and charging is, by definition, a physical-world service.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At the investment sales level, the capitalization of charging infrastructure value is still inconsistent — appraisers and buyers are not yet applying a uniform framework to value charging-enabled properties at a premium over non-charging comparables. That inconsistency is itself an opportunity: investors who install charging ahead of the appraisal community&apos;s methodology catching up may be adding lease value that is not yet fully reflected in purchase prices. As the Tampa Bay office and <Link href="/blog/tampa-bay-retail-market-q4-2026" className="text-accent underline">retail markets</Link> move through the current cycle, properties with built-in charging infrastructure will likely command both tighter vacancy rates and more defensible cap rate compression relative to comparable non-charging assets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Tampa Bay commercial real estate market rewards investors who read infrastructure trends early and position ahead of the mainstream. Port-adjacent industrial investment, medical office development near hospital expansion corridors, and grocery-anchored retail have all rewarded early movers in this market. EV charging infrastructure is following a similar curve — still early enough that properties equipped with it stand out, but late enough that the trend is clearly structural rather than speculative.
        </p>
      </article>

      <p className="mx-auto max-w-3xl px-4 pt-2 pb-6 text-xs text-[#666666] sm:px-6 lg:px-8">Last updated: October 2026</p>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Bay EV Charging CRE — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial and investment property market. He helps investors, landlords, and tenants navigate infrastructure decisions — including amenity investments that affect lease value — throughout Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
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
        heading="Questions About EV Charging and Your Tampa Bay Commercial Property?"
        body="Whether you&apos;re evaluating a charging infrastructure investment, negotiating a lease that includes charging provisions, or considering how EV-readiness affects your property&apos;s value, I can help you think through the real estate implications. Let&apos;s talk."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
