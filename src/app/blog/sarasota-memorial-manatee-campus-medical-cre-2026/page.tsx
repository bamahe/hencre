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
 * Blog: Sarasota Memorial Manatee Campus & Medical CRE 2026
 * SMH boards $60M, 120-acre SR 64 / I-75 site for future hospital campus.
 * What it means for medical office, NNN, and commercial real estate
 * in Manatee County's fastest-growing corridor.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Sarasota Memorial Manatee Campus: $60M Land Deal CRE Impact",
  description:
    "Sarasota Memorial Health Care System approved a $60 million purchase of 120 acres near SR 64 and I-75 in Manatee County for a future hospital campus. Here is what investors and tenants need to know about the commercial real estate opportunity this creates.",
  alternates: {
    canonical:
      "https://hencre.com/blog/sarasota-memorial-manatee-campus-medical-cre-2026",
  },
  openGraph: {
    title: "Sarasota Memorial Manatee Campus: What the $60M Land Deal Means for CRE",
    description:
      "SMH approved a $60M, 120-acre land buy near SR 64 and I-75 in Manatee County. A freestanding ER comes first, then physician practices, imaging, and eventually a full hospital. Here is the commercial real estate opportunity this creates.",
    url: "https://hencre.com/blog/sarasota-memorial-manatee-campus-medical-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern medical office and hospital campus exterior",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What did Sarasota Memorial buy in Manatee County in 2026?",
    answer:
      "On September 22, 2026, the Sarasota County Public Hospital Board approved a nearly $60 million purchase of approximately 120 acres in Manatee County, east of I-75 along the SR 64 corridor. The system had separately approved a 10-acre parcel with direct SR 64 access in July 2026, and that smaller parcel is earmarked for the first phase of development: a freestanding emergency department. The 120-acre acquisition is the broader platform for what Sarasota Memorial envisions as a multi-phased medical campus serving Manatee County residents. No construction cost estimates or projected opening date have been released, and the deal remains contingent on rezoning approvals from Manatee County. The land was previously proposed in 2024 for approximately 1,400 housing units, underscoring the intensity of development pressure on this corridor.",
  },
  {
    question: "What will the Sarasota Memorial Manatee campus include?",
    answer:
      "The first phase will be a freestanding emergency department on the 10-acre SR 64 access parcel — a standalone ER that can be built and operational well before the full campus is finished. From there, the system's announced plans call for primary and specialty physician practices, pediatric specialty care, imaging and diagnostic services, laboratory services, and other medical buildings. The long-term vision is a full-service hospital campus, though no opening timeline has been confirmed. For commercial real estate purposes, each phase matters independently: the freestanding ER alone will generate demand for urgent care, pharmacy, medical supply, and support retail in the immediate area. As the campus scales to physician practices and specialty care, the medical office demand footprint expands substantially, and a full hospital is among the most powerful commercial anchors any commercial corridor can attract.",
  },
  {
    question: "Why is Sarasota Memorial expanding into Manatee County?",
    answer:
      "The numbers leave little ambiguity. Manatee County residents accounted for more than 185,000 patient visits to Sarasota Memorial in 2025 — approximately 25% of the system's overall patient volume. Roughly 30% of SMH's workforce lives in Manatee County. The system is effectively operating a major regional hospital whose largest service area is a county with no SMH facility. Manatee County's population growth rate is among the fastest in Florida, driven by the buildout of communities like Parrish, Lakewood Ranch, and Ellenton. The demographics are favorable for healthcare demand: an older-skewing population migrating from the Northeast and Midwest, combined with a growing young family population in master-planned communities. From a commercial real estate perspective, the demand driver is simple: a hospital system does not spend $60 million on land unless it believes the patient population growth justifies the investment.",
  },
  {
    question: "What commercial real estate opportunities does the Manatee campus create?",
    answer:
      "Hospital campuses generate some of the most durable commercial real estate demand of any anchor type. The immediate corridor effect: urgent care centers, pharmacies, medical labs, imaging centers, and medical supply companies all cluster within a quarter to half mile of a hospital campus. Retail demand for restaurants, coffee, convenience, and services follows the employee and patient foot traffic. Medical office buildings — both on-campus and in the adjacent corridor — are among the most sought-after net lease investments in the country, with triple-net leases from medical practice tenants producing predictable, credit-backed income streams. The SR 64 and I-75 interchange area in Manatee County is positioned to become one of the region's most active medical office corridors over the next 10 to 15 years, tracking the phased buildout of the SMH campus. Investors who identify and acquire land or buildings in this corridor before the campus opens will be ahead of the demand curve.",
  },
  {
    question: "Is the SR 64 and I-75 corridor in Manatee County a good commercial real estate investment?",
    answer:
      "The SR 64 / I-75 corridor in Manatee County is one of the more compelling commercial corridors in the Tampa Bay–Sarasota region heading into the late 2020s. The fundamentals stack up on multiple dimensions: population growth in eastern Manatee County is accelerating, the Sarasota Memorial campus will be a major medical anchor generating employment and foot traffic, and the corridor connects two of Florida's fastest-growing communities — Bradenton and Lakewood Ranch — with direct interstate access. Investors should note that the campus approval is subject to rezoning, which introduces a development timeline variable. But the system's $60 million land commitment makes the project's eventual realization highly likely. Commercial investors focused on medical office, NNN retail, and land in the corridor should be doing their diligence now, not after the rezoning is granted and the market has already re-priced the opportunity.",
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
          name: "Sarasota Memorial Manatee Campus: What the $60M Land Deal Means for CRE",
          item: "https://hencre.com/blog/sarasota-memorial-manatee-campus-medical-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline:
        "Sarasota Memorial Manatee Campus: What the $60M Land Deal Means for CRE",
      description:
        "Sarasota Memorial Health Care System approved a $60 million purchase of 120 acres near SR 64 and I-75 in Manatee County for a future hospital campus. A freestanding ER comes first, then a full medical campus. Here is the commercial real estate opportunity investors and tenants need to understand.",
      datePublished: "2026-10-18",
      dateModified: "2026-10-20",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/sarasota-memorial-manatee-campus-medical-cre-2026",
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
    title: "Bradenton & Manatee County Commercial Real Estate 2026",
    href: "/blog/bradenton-manatee-county-commercial-real-estate-2026",
    description:
      "The broader commercial real estate market in Manatee County — industrial, retail, office, and investment.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description:
      "Why medical office is one of the most resilient commercial real estate asset classes in Tampa Bay.",
  },
  {
    title: "Tampa Bay Urgent Care & Medical Clinic NNN Investment 2026",
    href: "/blog/tampa-bay-urgent-care-medical-clinic-nnn-investment-2026",
    description:
      "Urgent care and medical clinic NNN leases — cap rates, tenant credit, and why they cluster near hospital campuses.",
  },
  {
    title: "Parrish, FL Commercial Real Estate 2026",
    href: "/blog/parrish-fl-commercial-real-estate-2026",
    description:
      "Parrish is one of the fastest-growing communities in Manatee County — a corridor now anchored by major healthcare investment.",
  },
  {
    title: "Sarasota Office Market Trends 2026",
    href: "/blog/sarasota-office-market-trends-2026",
    description:
      "The Sarasota–Manatee office market context for medical office tenants and investors.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description:
      "Current cap rates across net lease asset types in Tampa Bay — including healthcare and medical retail.",
  },
  {
    title: "Tampa Bay Senior Housing & CRE Investment 2026",
    href: "/blog/tampa-bay-senior-housing-cre-investment-2026",
    description:
      "Senior housing demand tracks healthcare demand — the same demographics driving SMH's Manatee expansion.",
  },
  {
    title: "Florida Live Local Act & Tampa Bay CRE 2026",
    href: "/blog/florida-live-local-act-tampa-bay-cre-2026",
    description:
      "How Florida's density and mixed-use legislation intersects with major anchor developments like this campus.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description:
      "Fundamentals of underwriting a medical office or NNN investment near a healthcare anchor.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description:
      "Anchor proximity, population growth, and demand durability — the factors that make the Manatee corridor compelling.",
  },
];

export default function SarasotaMemorialManateeCampusCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Sarasota Memorial Manatee Campus & CRE 2026",
            href: "/blog/sarasota-memorial-manatee-campus-medical-cre-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&h=900&fit=crop"
        title="Sarasota Memorial's $60M Manatee County Land Deal: What It Means for Commercial Real Estate"
        subtitle="On September 22, 2026, Sarasota Memorial's board approved a $60 million purchase of 120 acres near SR 64 and I-75 in Manatee County. A freestanding ER is the first phase. A full hospital campus is the long-term vision. Here is what investors and tenants need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When a hospital system commits $60 million to a 120-acre land purchase, it is not making a speculative bet — it is planting a flag. On September 22, 2026, the Sarasota County Public Hospital Board approved Sarasota Memorial Health Care System&apos;s purchase of approximately 120 acres east of I-75 along the SR 64 corridor in Manatee County, setting in motion what will become one of the most consequential commercial real estate developments in the Bradenton–Sarasota area over the next decade. The deal follows a July 2026 approval of a separate 10-acre parcel with direct SR 64 access — the site earmarked for the first phase of development: a freestanding emergency department. For commercial real estate investors and tenants in Manatee County, the question is not whether this campus will change the commercial landscape along the SR 64 / I-75 corridor. It will. The question is whether you are positioned ahead of that change or behind it.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Why Did Sarasota Memorial Buy 120 Acres in Manatee County?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The answer is in the patient data. Manatee County residents accounted for more than 185,000 patient visits to Sarasota Memorial in 2025 — approximately 25% of the system&apos;s total patient volume. About 30% of SMH&apos;s workforce lives in Manatee County. The system has been serving a massive Manatee County patient population for years without a single Manatee County facility, which means patients are crossing the county line to access care at the system&apos;s existing Sarasota campuses.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The demand picture is only getting stronger. Manatee County is one of Florida&apos;s fastest-growing counties, driven by the continued buildout of master-planned communities — Lakewood Ranch, Parrish, Ellenton — attracting both retiring Baby Boomers and young families relocating from the Northeast, Midwest, and out of state. That demographic mix produces outsized healthcare utilization: an older population driving higher per-capita hospital visits, and a growing workforce population driving demand for occupational medicine, pediatric care, and urgent care services. The system&apos;s board is not speculating on that growth — they are following it with a capital commitment large enough to make the direction unmistakable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context on the commercial real estate environment in which this acquisition is happening, our overview of{" "}
          <Link href="/blog/bradenton-manatee-county-commercial-real-estate-2026" className="text-accent underline">
            Manatee County&apos;s commercial real estate market in 2026
          </Link>{" "}
          covers the broader market conditions — industrial, retail, office, and investment — across the county.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Will the Sarasota Memorial Manatee Campus Look Like?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The development will unfold in phases, and the sequencing matters for understanding the commercial real estate opportunity at each stage.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Phase 1 — Freestanding Emergency Department.</strong> The 10-acre SR 64 access parcel approved in July is the first build site, and the announced first use is a freestanding emergency department. Freestanding ERs are among the most commercially potent single-use medical facilities a corridor can attract — they operate 24 hours a day, generate significant employee and visitor foot traffic, and serve as a visible signal that healthcare services have arrived in a market. The SR 64 frontage location will maximize both visibility and access from the growing eastern Manatee communities.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Middle phases — Physician practices, specialty care, imaging.</strong> The 120-acre campus is planned to include primary and specialty physician practices, pediatric specialty care, imaging and diagnostic services, and laboratory services. This is the phase where the medical office real estate opportunity is most direct: physician practice space, either on the campus itself or in nearby medical office buildings on the SR 64 corridor, will be in demand as SMH recruits providers and establishes services in Manatee County. The{" "}
          <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">
            Tampa Bay medical office real estate market
          </Link>{" "}
          gives context for how medical office demand and investment dynamics work across the broader region.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Long-term — Full-service hospital campus.</strong> The system&apos;s long-term vision is a full-service inpatient hospital. No construction cost estimate or opening timeline has been released for this phase, and the entire development remains subject to Manatee County rezoning approval — which the system is actively pursuing. But a $60 million land commitment represents a level of financial commitment that makes the eventual realization highly probable. Hospital systems do not acquire land at this scale unless the board, administration, and financial team have a viable path to development.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Does a Hospital Campus Do to the Commercial Real Estate Corridor Around It?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Hospital campuses are among the most powerful commercial anchors in any real estate market. Unlike retail anchors, which generate foot traffic primarily during shopping hours, a hospital campus generates consistent traffic and employment 24 hours a day, 365 days a year. The commercial ecosystem that develops around a major hospital campus is both predictable and durable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Medical office and ancillary healthcare tenants</strong> cluster within walking distance or a short drive of the campus: urgent care centers, specialty practice offices, physical therapy, pharmacy, imaging, laboratory, and medical supply operations all prefer hospital-adjacent locations because they capture patient referral traffic and benefit from proximity to the hospital&apos;s physician staff. Our post on{" "}
          <Link href="/blog/tampa-bay-urgent-care-medical-clinic-nnn-investment-2026" className="text-accent underline">
            urgent care and medical clinic NNN investment in Tampa Bay
          </Link>{" "}
          covers the investment characteristics of these tenants in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Retail and service demand</strong> follows the workforce. A mid-size hospital campus employs hundreds of people — nurses, physicians, administrators, technicians, housekeeping, food service. Those employees need food, coffee, childcare, banking, dry cleaning, and convenience services. Restaurants and quick-service food concepts specifically target hospital-adjacent sites because the employment density and predictable meal patterns create consistent, high-volume sales. Fast food operators, coffee chains, and casual dining concepts pay close attention to new hospital campus announcements.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Senior housing and assisted living</strong> also tend to locate near hospital campuses, drawn by the care coordination advantages of proximity to acute care. The same demographic driving healthcare demand in Manatee County — the aging Baby Boomer migration from the Northeast — is the primary demand source for senior housing. For CRE investors tracking both sectors, there is meaningful overlap. Our post on{" "}
          <Link href="/blog/tampa-bay-senior-housing-cre-investment-2026" className="text-accent underline">
            Tampa Bay senior housing CRE investment
          </Link>{" "}
          covers the asset class in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Land values in the corridor</strong> re-price on hospital campus news. The SR 64 / I-75 corridor in eastern Manatee County was already attracting development attention based on population growth alone. A confirmed hospital system land acquisition — especially one involving $60 million and 120 acres — is the kind of anchor announcement that changes the trajectory of land pricing along the entire corridor. Investors who act on this news before the rezoning is resolved and the phased buildout begins are working with information that the market has not yet fully priced into land and commercial values.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          Where Exactly Is the SR 64 / I-75 Corridor, and Why Does the Location Matter?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          State Road 64 connects Bradenton on the west to Lakewood Ranch and eastern Manatee County on the east, crossing I-75 at one of the most active interchanges in the Sarasota–Manatee metro area. The I-75 / SR 64 interchange is the primary gateway to eastern Manatee County — the fastest-growing part of the county — and the corridor east of the interchange is experiencing the most intense residential development in the region. Lakewood Ranch, which straddles the Manatee–Sarasota county line, is consistently one of the best-selling master-planned communities in the United States. The residential buildout of the SR 64 corridor has outpaced commercial development, creating a supply gap in retail, services, and healthcare that SMH&apos;s campus is directly targeting.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors familiar with the broader Parrish and eastern Manatee development story, this campus is the healthcare anchor that the corridor has been waiting for. The growth in Parrish — another rapidly expanding Manatee County community — has attracted retail and industrial attention on its own merits, and our post on{" "}
          <Link href="/blog/parrish-fl-commercial-real-estate-2026" className="text-accent underline">
            Parrish commercial real estate in 2026
          </Link>{" "}
          covers that market segment. The SMH campus adds a healthcare anchor to the Manatee County commercial story in a way that will reverberate across the county&apos;s commercial real estate market for the next decade.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          How Should Commercial Real Estate Investors Think About This Development?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The investment opportunity here operates on multiple timelines depending on the investor&apos;s strategy and hold horizon.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Near-term (1–3 years): land and entitled commercial sites.</strong> The highest-upside play — and the highest-execution-risk play — is land on or adjacent to the SR 64 corridor near the campus site. The rezoning outcome will materially affect land pricing: approval unlocks the commercial development potential fully, while a delay extends the timeline but does not eliminate the thesis. Investors with experience in Florida land entitlement and the risk tolerance to hold through the rezoning process have the most upside available right now. The rule of thumb in commercial real estate corridors: land within a quarter to half mile of a major hospital campus trades at a significant premium to land a mile out, and that premium compresses over time as the market prices in what is already known.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Mid-term (3–7 years): medical office and NNN.</strong> As the freestanding ER opens and the physician practice phases begin to develop, demand for nearby medical office building space will emerge. Medical office buildings leased to physician practices, imaging centers, and outpatient specialty care under long-term leases are among the most stable commercial real estate asset classes — they carry low vacancy risk because medical tenants invest heavily in space build-out and relocate infrequently, and their leases are typically triple-net with escalators. For investors seeking income-producing medical real estate in the Manatee County corridor, the window to acquire or develop at pre-campus pricing is now. Our post on{" "}
          <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">
            NNN cap rates in Tampa Bay for 2026
          </Link>{" "}
          provides the current pricing context for net lease medical assets across the region.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Long-term (7+ years): full campus ecosystem.</strong> A full-service inpatient hospital campus transforms its surrounding corridor permanently. The commercial real estate ecosystem of hotels (patient families, medical vendors), senior housing, retail, and services that develops around a regional hospital produces sustained, diversified demand that is largely recession-resistant. For long-hold commercial investors — whether in NNN, retail, or mixed-use — the Manatee campus is a generational anchor announcement in a market that already had strong fundamentals.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Are the Key Risks Investors Should Understand?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          No development of this scale proceeds without execution risk, and investors should underwrite the key variables with clear eyes.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Rezoning uncertainty.</strong> The land acquisition was approved contingent on Sarasota Memorial working with Manatee County on rezoning and future development. Florida rezoning processes are not automatic, and county board decisions on major healthcare-anchor projects involve community input, infrastructure analysis, and political dynamics that can extend timelines. A rezoning denial or significant condition is unlikely given the system&apos;s financial commitment and the county&apos;s stated interest in healthcare access, but investors should treat it as a scenario to model.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Construction timeline ambiguity.</strong> SMH has not released construction cost estimates or projected opening dates for any phase beyond the freestanding ER on the 10-acre parcel. Healthcare construction timelines are long — a freestanding ER from groundbreaking to opening is typically 18 to 24 months; a full hospital campus is a 10-to-15-year project. Investors modeling cash flows from corridor commercial real estate need to use conservative timeline assumptions.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Competition from existing healthcare providers.</strong> HCA Healthcare has facilities in the Sarasota–Manatee market, and the SMH campus will enter a market that is not without healthcare competition. The competitive dynamics do not change the commercial real estate thesis — a second or third healthcare provider in a market simply intensifies the corridor&apos;s attractiveness to medical tenants and ancillary services — but they are relevant context for investors tracking the healthcare landscape.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Interest rate and financing conditions.</strong> Commercial real estate acquisition and development in the current rate environment requires careful attention to debt costs. Our post on{" "}
          <Link href="/blog/tampa-bay-commercial-mortgage-rates-2026" className="text-accent underline">
            Tampa Bay commercial mortgage rates in 2026
          </Link>{" "}
          covers the current financing landscape and what buyers and developers should expect when securing capital for acquisitions in corridors like SR 64.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          What Should Commercial Tenants Know About This Corridor?
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants considering locating in the SR 64 / I-75 corridor in Manatee County, the Sarasota Memorial announcement strengthens the case for earlier entry. Commercial landlords on the corridor are aware of the campus news, and lease rates in the area will likely rise as the market absorbs the significance of the healthcare anchor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Medical practices — particularly those with a referral or care coordination relationship with SMH — should be in active conversation with a commercial real estate broker about space in the corridor now. The window to secure space at pre-campus pricing is open, but it is narrowing. A practice that delays a location decision until after the rezoning is resolved and the freestanding ER is under construction will find a materially different leasing market than the one that exists today.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For non-medical tenants — retail, services, restaurants — the analysis is similar but the timeline is slightly longer. The freestanding ER is the first meaningful foot traffic and employment generator, and corridor retail demand will intensify as that phase nears completion. Tenants who want to be co-located with the first wave of hospital-adjacent foot traffic should be targeting spaces within half a mile of the SR 64 interchange area now.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are considering selling a property in this corridor to take advantage of the anticipated value increase, <a href="https://fastselleasysale.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">fastselleasysale.com</a> provides an option for sellers who want to move quickly on land or commercial property before the market fully reprices around the campus announcement.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">
          The Bottom Line: Why This Deal Matters for Manatee County CRE
        </h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Sarasota Memorial&apos;s $60 million land buy is the most significant healthcare real estate commitment in Manatee County&apos;s history. It validates what population growth data has been saying for years: Manatee County is no longer a secondary market in the Tampa Bay–Sarasota corridor. It is a primary growth market with primary-market infrastructure needs — and a major hospital system has put $60 million on the line to meet them.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For commercial real estate investors, the opportunity is in the corridor. Medical office, NNN retail, land, and senior housing along the SR 64 / I-75 axis in eastern Manatee County will all benefit as the campus phases develop. The investors and tenants who act on this announcement before the market fully reprices will have the advantage of entry pricing that does not yet reflect a fully realized hospital anchor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants — medical and non-medical alike — the corridor is becoming more valuable every month. The question is whether to act now, while lease rates and purchase prices reflect today&apos;s corridor, or to wait until the hospital is open and pricing reflects what the corridor has become.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across the Tampa Bay and Sarasota–Manatee markets, I help investors identify and evaluate opportunities like this corridor before the market catches up — and I help medical practices and other tenants find space in emerging markets before they become competitive. Whether you are looking to invest in the Manatee County corridor, lease medical or commercial space near the SMH campus site, or evaluate what this development means for a property you already own, reach out.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Sarasota Memorial Manatee Campus & CRE 2026 — Frequently Asked Questions
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay and the Sarasota–Manatee corridor. He helps investors identify emerging commercial opportunities and helps tenants find space in growth markets. Learn more about{" "}
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
        heading="Interested in Commercial Real Estate in Manatee County or the SR 64 Corridor?"
        body="The Sarasota Memorial campus announcement is reshaping the commercial real estate opportunity in eastern Manatee County. I help investors evaluate medical office, NNN, and land opportunities in emerging corridors — and help tenants find space before the market reprices. Call (813) 733-7907 or reach out below."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
