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
 * Blog: Tampa Bay Auto Dealership Commercial Real Estate 2026
 * Franchised new-car lots, EV dealers (Tesla/Rivian), ground leases,
 * NNN investment, Dale Mabry corridor, due diligence
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Bay Auto Dealership Commercial Real Estate 2026 | HenCRE",
  description:
    "Auto dealership properties are one of the most distinctive asset classes in Tampa Bay commercial real estate. From Dale Mabry's traditional auto row to Tesla and Rivian's new EV footprint, here is what investors and owners need to know in 2026.",
  alternates: {
    canonical:
      "https://hencre.com/blog/tampa-bay-auto-dealership-cre-2026",
  },
  openGraph: {
    title: "Tampa Bay Auto Dealership Commercial Real Estate 2026",
    description:
      "Auto dealership real estate in Tampa Bay is evolving fast. EV-only dealers are entering the market on long-term NNN leases while traditional franchises adapt their footprints. Here is the investor and owner guide for 2026.",
    url: "https://hencre.com/blog/tampa-bay-auto-dealership-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Auto dealership commercial real estate Tampa Bay Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question:
      "What makes auto dealership commercial real estate a unique investment in Tampa Bay?",
    answer:
      "Auto dealership properties occupy a distinctive niche in Tampa Bay commercial real estate for several reasons that separate them from typical retail or industrial investments. First, the sites themselves are specialized: dealerships require high-visibility, high-traffic frontage, outdoor display lots typically ranging from one to five acres, climate-controlled showroom space, service bays with lifts and drainage infrastructure, and Parts and Service operations that generate recurring customer traffic independent of new-vehicle sales. These physical requirements create a replacement-cost premium and limit the number of qualifying locations, which supports long-term land values. Second, dealership tenants — whether a franchised operator running a Toyota, Ford, or BMW point, or an EV-only brand like Tesla or Rivian — sign long-term leases because their business model depends on a specific location and substantial investment in signage, equipment, and customer relationships tied to that address. Lease terms of ten to twenty years with multiple renewal options are standard. Third, Tampa Bay's sustained population growth — the metro now exceeds 3.2 million residents — supports durable new and used vehicle demand, which translates into stable site-level performance across the economic cycle. Buyers of dealership real estate in Tampa Bay are acquiring long-term income streams anchored by businesses that have every incentive to stay.",
  },
  {
    question:
      "What cap rates do auto dealership properties trade at in Tampa Bay in 2026?",
    answer:
      "Auto dealership cap rates in Tampa Bay in 2026 vary significantly based on tenant type, lease structure, site quality, and remaining lease term. For high-credit EV manufacturer-direct leases — such as a Tesla or Rivian corporate-lease structure with a long remaining term and fixed annual rent escalations — cap rates compress toward the 5.0% to 5.75% range, reflecting the tenant credit and the specialized site value. For franchised new-car dealer properties where the tenant is an operating dealer group rather than a corporate manufacturer, cap rates typically range from 5.75% to 6.75%, reflecting the franchisee credit rather than an investment-grade corporate guarantee. Ground lease structures — where the land owner leases the ground to the dealer who constructs improvements — typically carry lower cap rates, in the 4.5% to 5.5% range, because the land appreciates and the ground lessor has no building depreciation exposure. Properties with short remaining lease terms or operators with smaller balance sheets see cap rates widen to 7.0% and above, pricing in the re-tenanting risk. Compared to the broader NNN retail market, strong dealership assets trade at a modest premium to QSR or pharmacy NNN investments, reflecting the site specificity and the institutional-quality nature of long-term auto manufacturer relationships.",
  },
  {
    question:
      "How is the EV revolution changing auto dealership real estate in Tampa Bay?",
    answer:
      "The shift toward electric vehicles is reshaping dealership real estate in Tampa Bay in real time as of 2026. Tesla's model — factory-direct sales through company-owned or company-leased showrooms and service centers rather than independent franchises — has produced a new category of commercial real estate transaction in the market. Tesla signed a long-term lease on a nearly 46,000-square-foot former EchoPark auto site on North Dale Mabry Highway, investing approximately $500,000 in renovations to create a combined sales-and-service facility. The property represents the kind of high-traffic, access-controlled site Tesla targets: major arterial frontage, ample service bay capacity, and proximity to a dense customer base. Rivian, similarly, has executed a net-lease transaction on a 2.75-acre site at 701 North Dale Mabry — a reported acquisition by Automotive Properties REIT for approximately $13.5 million — with a long-term lease carrying fixed annual rent increases and renewal options. These EV-direct transactions differ from traditional franchise deals in one important respect: the tenant is typically the manufacturer itself or a manufacturer-affiliated entity, carrying corporate credit rather than franchisee credit. For investors, the distinction matters considerably — a Tesla or Rivian corporate guarantee is structurally similar to a McDonald's or CVS corporate guarantee in terms of credit quality. The broader effect on the market is increased competition for premium auto corridor sites, particularly along Dale Mabry, US 19, and US 41, as EV brands need the same high-visibility, high-traffic frontage that traditional dealers have occupied for decades.",
  },
  {
    question:
      "What due diligence is required when buying a Tampa Bay auto dealership property?",
    answer:
      "Due diligence on a Tampa Bay auto dealership property is more intensive than on a typical retail NNN investment for several reasons. Environmental assessment is the most critical additional layer. Vehicle service operations generate petroleum waste, used motor oil, transmission fluid, coolant, and in some cases underground or above-ground storage tank contamination that must be identified and quantified before closing. A Phase I Environmental Site Assessment is the minimum standard; many dealership acquisitions require a Phase II with soil and groundwater sampling if the Phase I identifies recognized environmental conditions. Buyers should check the Florida Department of Environmental Protection's OCULUS database for any open or closed cleanup cases on the property. Beyond environmental review, lease analysis for dealership assets requires confirming the franchise agreement's survival in a sale — some franchise arrangements create landlord obligations or require manufacturer consent to property transfers. For manufacturer-direct EV leases, reviewing any early termination rights, brand exclusivity clauses, and whether the lease is to the corporate entity or a subsidiary matters to credit analysis. Physical due diligence should include a structural review of service bay floors (concrete thickness for lift loads, drainage compliance), HVAC for showrooms and parts storage, and the condition of the display lot surface. Title review should confirm any use restrictions, easements, or covenants that could limit alternate use if the dealership vacates. Financing dealership real estate often requires a lender experienced with the asset class; SBA 504 and USDA Business programs can be viable for owner-users acquiring their own store's real estate.",
  },
  {
    question:
      "What is the difference between buying dealership real estate fee simple versus a ground lease investment?",
    answer:
      "Auto dealership properties in Tampa Bay trade in two primary structures: fee simple ownership, where the buyer acquires land and improvements outright, and ground lease investment, where the buyer acquires only the land and leases it to the dealership operator who owns or builds the improvements. Each structure has different risk-return characteristics that investors should understand clearly. Fee simple ownership of a dealership property carries both land and building depreciation benefits, full control over the asset, and exposure to improvement obsolescence as service bay technology and EV charging infrastructure requirements evolve. Ground lease investment provides a cleaner, longer-duration income stream — typical ground leases run 30 to 50 years — with no building expense exposure. The ground lessor receives a land rent that escalates over time and benefits from land appreciation as the surrounding market grows. At lease expiration or termination, the improvements typically revert to the ground owner. For investors in Tampa Bay seeking passive income with minimal management, ground lease structures on dealership sites along Dale Mabry, Fletcher Avenue, or US 19 offer institutional-quality income with lower operating involvement than fee simple ownership. For investors who want flexibility to redevelop or reposition the asset at lease expiration, fee simple structures provide that optionality. Barrett Henry and the HenCRE team work with buyers and sellers on both structures and can help identify which approach aligns with your investment horizon and tax position.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hencre.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://hencre.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tampa Bay Auto Dealership Commercial Real Estate 2026",
          item: "https://hencre.com/blog/tampa-bay-auto-dealership-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Bay Auto Dealership Commercial Real Estate 2026",
      description:
        "Auto dealership properties are one of the most distinctive asset classes in Tampa Bay commercial real estate. From Dale Mabry's traditional auto row to Tesla and Rivian's new EV footprint, here is what investors and owners need to know in 2026.",
      datePublished: "2026-10-14",
      dateModified: "2026-10-16",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: {
        "@type": "Organization",
        name: "HenCRE",
        url: "https://hencre.com",
      },
      url: "https://hencre.com/blog/tampa-bay-auto-dealership-cre-2026",
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
    description:
      "Tampa's most active commercial corridor — where dealerships, NNN retail, and mixed-use compete for the best sites.",
  },
  {
    title: "Tampa Bay Auto Parts & Auto Service NNN Investment 2026",
    href: "/blog/tampa-bay-auto-parts-service-nnn-investment-2026",
    description:
      "AutoZone, O'Reilly, Jiffy Lube, and Mavis Tire as NNN investments — the service-adjacent category that complements dealership real estate.",
  },
  {
    title: "Tampa Bay Car Wash CRE Investment 2026",
    href: "/blog/tampa-bay-car-wash-cre-investment-2026",
    description:
      "Express car wash NNN investments — another auto-adjacent category with strong Tampa Bay demand fundamentals.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description:
      "Current cap rate benchmarks across NNN retail categories in Tampa Bay, including auto-related assets.",
  },
  {
    title: "Tampa Bay Convenience Store & Fuel Retail NNN Investment 2026",
    href: "/blog/tampa-bay-convenience-store-fuel-retail-nnn-investment-2026",
    description:
      "How fuel and convenience NNN investments compare to dealership real estate in risk and return.",
  },
  {
    title: "What Is a Triple-Net (NNN) Lease and Why Investors Love It",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description:
      "The fundamentals of NNN leases — the dominant structure in auto dealership and single-tenant retail investment.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description:
      "How 1031 exchanges apply to selling dealership properties and acquiring replacement NNN investments.",
  },
  {
    title: "Tampa Bay CRE Market Outlook Q4 2026",
    href: "/blog/tampa-bay-cre-market-outlook-q4-2026",
    description:
      "The broader commercial real estate context for dealership and single-tenant investment in Tampa Bay entering Q4 2026.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description:
      "A step-by-step timeline for completing due diligence on a dealership or any commercial real estate acquisition.",
  },
  {
    title: "Tampa Bay Retail Market Q3 2026",
    href: "/blog/tampa-bay-retail-market-q3-2026",
    description:
      "Retail market fundamentals driving traffic and site selection across Tampa Bay auto corridors.",
  },
];

export default function TampaBayAutoDealershipCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Tampa Bay Auto Dealership CRE 2026",
            href: "/blog/tampa-bay-auto-dealership-cre-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=900&fit=crop"
        title="Tampa Bay Auto Dealership Commercial Real Estate 2026"
        subtitle="From Dale Mabry's traditional franchise row to Tesla and Rivian's growing EV footprint, auto dealership properties are one of Tampa Bay's most distinctive and durable commercial real estate asset classes."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Most commercial real estate conversations in Tampa Bay circle around
          office vacancies, industrial absorption, and multifamily cap rates. Auto
          dealership real estate rarely makes the headline, yet it represents one
          of the most specialized, durable, and now rapidly evolving asset classes
          in the market. From the traditional franchise rows on North Dale Mabry
          and US Highway 19 to Tesla&apos;s new 46,000-square-foot sales and
          service center and Rivian&apos;s net-lease acquisition by a Canadian
          REIT, dealership properties are seeing institutional capital take notice
          in 2026. This guide covers what makes dealership real estate distinctive,
          how the EV revolution is reshaping the asset class, what investors need
          to know about cap rates and due diligence, and why Barrett Henry has
          represented clients on some of Tampa Bay&apos;s most complex
          dealership-adjacent transactions over his 23-plus-year career.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Makes Auto Dealership Real Estate Different From Other Commercial
          Property?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Auto dealerships are not just retail — they are heavy-use industrial
          operations housed in a retail wrapper. A single franchised dealership
          combines showroom space, an F&amp;I (finance and insurance) office,
          parts storage, service bays with hydraulic lifts and drainage systems,
          a body shop in many cases, outdoor vehicle display and inventory
          storage, employee parking, and customer staging lanes. These physical
          requirements mean that qualifying sites are genuinely scarce, and the
          replacement cost to replicate a fully equipped service department is
          substantial.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Tampa Bay, the most established auto corridors concentrate on{" "}
          <Link href="/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026" className="text-accent underline">North Dale Mabry Highway</Link>{" "}
          in Tampa, US Highway 19 through Clearwater and{" "}
          <Link href="/markets/pinellas" className="text-accent underline">Pinellas County</Link>, and Fletcher Avenue near the University of South
          Florida. These corridors developed because they offer high average daily
          traffic counts — typically 40,000 to 85,000 vehicles per day — combined
          with access to surface road networks that allow test drives without
          navigating complex interchange systems. Once established, a dealership
          corridor tends to be self-reinforcing: customers shopping for vehicles
          visit multiple stores in a single trip, so being near competing dealers
          is a feature rather than a drawback.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The franchise agreement itself shapes the real estate transaction.
          Major manufacturer franchises — Toyota, Ford, GM, BMW, Mercedes-Benz —
          impose brand standards for facility size, lighting, signage, and
          customer experience that require periodic capital investment in the
          building. These standards are enforced through franchise renewals and
          can create landlord obligations if the dealer operator lacks capital
          for improvements. Sophisticated owners of dealership real estate
          understand this dynamic and structure leases to clarify which party is
          responsible for manufacturer-mandated facility updates.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Why Is the EV Revolution Driving New Dealership CRE Transactions in
          Tampa Bay?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The arrival of electric vehicle manufacturers as direct tenants in
          Tampa Bay is generating a new and distinct category of dealership real
          estate transaction. Unlike traditional franchise dealers who lease or
          own their own sites independently, Tesla and Rivian operate on a
          direct-to-consumer model that requires the manufacturer itself — or a
          manufacturer-controlled entity — to control the real estate.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tesla signed a long-term lease on a nearly 46,000-square-foot former
          EchoPark automotive site on North Dale Mabry Highway in Tampa, investing
          approximately $500,000 in renovations to create a combined sales and
          service facility. The location gives Tesla premier visibility on one of
          Tampa&apos;s highest-traffic commercial corridors, direct access to the
          dense residential population in South Tampa and the surrounding suburbs,
          and the service bay infrastructure needed to support its growing Tampa Bay
          customer base. The property owner, JT Dale Mabry Holdings LLC, benefits
          from a corporate-backed lease with a tenant whose credit profile differs
          fundamentally from a local franchisee.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Rivian&apos;s transaction on the same corridor is a textbook example
          of institutional capital pursuing EV real estate exposure. Automotive
          Properties REIT — a Canadian real estate investment trust specializing
          in dealership properties — acquired the 2.75-acre site at 701 North
          Dale Mabry at a reported price of approximately $13.5 million
          inclusive of closing costs. The site carries a long-term net lease with
          fixed annual rent escalations and renewal options. The acquisition
          demonstrates that EV manufacturer leases are already trading at
          institutional cap rates in Tampa Bay and drawing cross-border capital
          that would not previously have considered the market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Beyond Tesla and Rivian, the broader EV transition is pressuring
          traditional franchise dealerships to invest in charging infrastructure,
          service technician training for high-voltage systems, and showroom
          reconfigurations that can accommodate both combustion-engine and
          electric-vehicle sales. These capital requirements are accelerating
          consolidation among dealer groups, with larger operators acquiring
          smaller family-owned points and remodeling to manufacturer standards.
          For real estate investors, consolidation among dealer operators
          generally means better-capitalized tenants and more disciplined lease
          negotiations, both of which support asset quality.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Does Tampa Bay&apos;s Population Growth Support Dealership Real
          Estate?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s vehicle market is a direct function of its population
          dynamics, and those dynamics remain among the strongest of any major
          metro in the Southeast. The region has added well over 100,000 net new
          residents annually for the past several years, driven by in-migration
          from high-cost coastal markets, retirees choosing the Gulf Coast, and
          remote workers relocating for lifestyle and cost advantages.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Unlike Manhattan or Chicago, where transit infrastructure allows
          significant car-free household formation, Tampa Bay is a fundamentally
          vehicle-dependent metro. Public transit serves a fraction of commute
          trips, and suburban growth corridors in Pasco, Hillsborough, and Manatee
          Counties are designed around the automobile. Every net new household
          entering the market represents demand for at least one vehicle
          purchase or lease, service visits, and eventually a replacement
          transaction. Auto dealers in Tampa Bay are not fighting a structural
          volume problem — they are managing mix, margin, and EV transition
          against a backdrop of growing underlying demand.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The fastest-growing submarkets —{" "}
          <Link href="/blog/wesley-chapel-pasco-county-commercial-real-estate-2026" className="text-accent underline">Wesley Chapel</Link>,{" "}
          <Link href="/blog/riverview-fl-commercial-real-estate-2026" className="text-accent underline">Riverview</Link>, Parrish in
          Manatee County, and{" "}
          <Link href="/blog/land-o-lakes-pasco-county-commercial-real-estate" className="text-accent underline">Land O&apos; Lakes</Link> — are each generating enough
          household formation to support satellite service centers and new dealer
          points. Toyota, Ford, and Hyundai have all evaluated or opened
          additional Tampa Bay locations in response to growth corridor demand in
          recent years. For real estate investors, the growth corridor dynamic
          creates a second tier of dealership investment opportunity beyond the
          established Dale Mabry and US 19 corridors: newer, lower-cost sites in
          higher-growth submarkets where long-term demand fundamentals are sound
          even if current traffic counts are lower.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Are the Investment Structures for Auto Dealership Real Estate?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dealership properties in Tampa Bay trade in several distinct structures,
          each with different risk and return characteristics.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Fee simple{" "}
          <Link href="/blog/sale-leaseback-commercial-real-estate-tampa-bay" className="text-accent underline">sale-leaseback</Link>:</strong> A dealership operator who
          owns the land and building sells both to an investor and simultaneously
          executes a long-term lease back at market rent. The operator converts
          real estate equity into operating capital while the investor acquires a{" "}
          <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">NNN-leased asset</Link> with a creditworthy tenant. For well-established
          Tampa Bay dealer groups, sale-leaseback transactions are a practical
          recapitalization tool that avoids dilutive equity raises. Investors
          benefit from immediate occupancy, a known tenant, and lease terms
          negotiated to reflect the operator&apos;s business needs and tenure.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Ground lease investment:</strong> The land owner leases the
          ground to the dealer group or manufacturer who constructs and owns the
          improvements. Ground leases on dealership properties in Tampa Bay
          typically carry initial terms of 30 to 50 years, rent escalations tied
          to CPI or fixed percentage increases, and improvement reversion to the
          ground owner at lease expiration. Cap rates for ground leases
          compress below fee simple because the investor carries no building
          depreciation, maintenance obligation, or obsolescence risk. For
          long-term investors prioritizing simplicity and land appreciation, a
          dealership ground lease on Dale Mabry or US 19 is a compelling
          alternative to other{" "}
          <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN structures</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Vacant dealership repositioning:</strong> As consolidation
          continues and some smaller franchise points close, vacant dealership
          properties represent repositioning opportunities for investors who
          understand the alternative use market. Service bay buildings
          convert well to light industrial, fleet service, or emergency vehicle
          maintenance uses. High-visibility corner sites with large lots attract
          drive-through retail, EV charging stations, or convenience and fuel
          concepts. Tampa Bay&apos;s active redevelopment environment makes
          former dealership sites attractive for mixed-use infill where zoning
          allows, particularly along corridors where residential demand has
          penetrated deep into formerly commercial zones.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For owners who need to sell quickly — whether exiting a family
          business, settling an estate, or responding to a franchise termination —{" "}
          <a
            href="https://fastselleasysale.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8A97E] hover:underline"
          >
            FastSellEasySale.com
          </a>{" "}
          is a resource Barrett Henry maintains specifically for commercial
          property owners who need a faster, simpler exit on dealership land,
          business real estate, or vacant commercial sites.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Should Buyers Check in Dealership Due Diligence?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Environmental review tops the list for any dealership acquisition.
          Service bays generate petroleum waste, hydraulic fluid, battery acid,
          and refrigerants that can create subsurface contamination over decades
          of operation. A{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">Phase I Environmental Site Assessment</Link>{" "}
          is mandatory for any lender and should be standard practice for all-cash buyers as
          well. Where the Phase I identifies recognized environmental conditions
          — former underground storage tanks, documented spills, adjacent
          contaminated parcels — a Phase II with soil and groundwater sampling is
          warranted before committing to close. Florida&apos;s Department of
          Environmental Protection maintains the OCULUS database where
          petroleum storage tank and cleanup records are publicly searchable;
          checking the target property and adjacent parcels before engaging an
          environmental consultant is a sensible first step.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Franchise agreement review is the second critical layer. The
          manufacturer franchise agreement governs the dealer&apos;s right to
          operate and defines facility standards the property must meet. Some
          franchise agreements include provisions that affect property transfers,
          require manufacturer consent for landlord changes, or impose facility
          upgrade timelines that the new owner will be responsible for enforcing
          or funding. A real estate attorney with dealership transaction
          experience should review the franchise agreement in conjunction with
          the lease for any seller-leaseback or occupied acquisition.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Physical inspection of the service infrastructure — floor thickness and
          condition for lift loads, drainage systems and compliance, HVAC serving
          paint booths and body shops, and the capacity of electrical systems for
          EV charging infrastructure — should be performed by a qualified
          commercial inspector experienced with automotive facilities, not a
          general property inspector.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Title review should confirm zoning for automotive use, any deed
          restrictions on vehicle sales or service, easements affecting display
          lot areas, and the chain of title for any lot expansions or adjacent
          parcel acquisitions over the dealership&apos;s history. Many Tampa Bay
          dealerships have assembled their sites over decades from multiple
          original parcels, and each assembly may carry its own title history.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Barrett Henry Approaches Dealership and Auto-Adjacent CRE
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry is a Broker Associate with REMAX Collective with 23-plus
          years of commercial real estate experience across Tampa Bay. Barrett has
          worked with dealer operators, investor-landlords, and institutional
          buyers on dealership acquisitions, sale-leasebacks, ground lease
          negotiations, and the repositioning of former auto sites for alternate
          uses. His familiarity with Tampa Bay&apos;s automotive corridors —
          including North Dale Mabry, Fletcher Avenue, and US Highway 19 — gives
          buyers and sellers a meaningful advantage in understanding site-specific
          nuances that generic broker coverage misses.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Whether you are a dealer operator evaluating a sale-leaseback, an
          investor pursuing your first dealership NNN acquisition, or an owner of
          a vacant former dealership site exploring redevelopment options, Barrett
          brings the market knowledge, transaction experience, and professional
          network to move your deal forward efficiently.
        </p>

        <FAQAccordion items={faqItems} />

        <div className="mt-12 rounded-lg bg-[#F5F0E8] p-6">
          <h3 className="text-lg font-semibold text-black">
            Thinking About Buying or Selling a Tampa Bay Dealership Property?
          </h3>
          <p className="mt-2 text-[#666666]">
            Auto dealership real estate requires a broker who understands
            franchise agreements, environmental exposure, and the EV shift that
            is reshaping every automotive corridor in Tampa Bay. Barrett Henry
            has that expertise and the market relationships to move your
            transaction.
          </p>
          <p className="mt-3 font-semibold text-black">
            Call or text Barrett Henry:{" "}
            <a
              href="tel:+18139998191"
              className="text-[#C8A97E] hover:underline"
            >
              (813) 999-8191
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-[#C8A97E] hover:underline">send a message online</Link>.
          </p>
          <p className="mt-1 text-sm text-[#666666]">
            Broker Associate · REMAX Collective · 23+ years Tampa Bay CRE
          </p>
        </div>
        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      <RelatedLinks links={relatedLinks} />

      <CTASection
        heading="Ready to Explore Auto Dealership CRE in Tampa Bay?"
        subheading="Barrett Henry specializes in single-tenant net-lease investments, dealership properties, and commercial land across Tampa Bay. Contact him today to discuss your goals."
        buttonText="Contact Barrett Henry"
        buttonHref="/contact"
      />
    </>
  );
}
