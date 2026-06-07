import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * REMAX Commercial Florida — dedicated landing page for SEO targeting.
 * Targets "REMAX Commercial Florida" and related keyword variations.
 * Includes full network writeup, stats, services, FAQ, and schema.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "REMAX Commercial Florida — Barrett Henry, Broker Associate | HenCRE",
  description:
    "REMAX Commercial Florida — Barrett Henry, REALTOR® & Broker Associate at REMAX Collective. Access 140,000+ agents across 110+ countries. Commercial real estate services including tenant rep, landlord leasing, investment sales, and dispositions across all 67 Florida counties.",
  keywords: [
    "REMAX Commercial Florida",
    "REMAX Commercial",
    "REMAX Commercial agent Florida",
    "REMAX Commercial broker Florida",
    "commercial real estate Florida",
    "Barrett Henry REMAX",
    "REMAX Collective commercial",
    "Florida commercial real estate broker",
  ],
  openGraph: {
    title: "REMAX Commercial Florida — Barrett Henry, Broker Associate",
    description:
      "REMAX Commercial agent serving all 67 Florida counties. Tenant rep, landlord leasing, investment sales, and dispositions backed by the world's most recognized real estate brand.",
    url: "https://hencre.com/remax-commercial",
    type: "website",
  },
};

/* -- FAQ data for this page -- */
const FAQS = [
  {
    q: "What is REMAX Commercial?",
    a: "REMAX Commercial is the commercial real estate division of REMAX, the world's most recognized real estate brand. Founded in 1973, REMAX Commercial provides agents with specialized training, tools, and a global referral network focused exclusively on commercial property transactions — including office, retail, industrial, multifamily, land, and hospitality assets.",
  },
  {
    q: "How is REMAX Commercial different from other commercial real estate brokerages?",
    a: "REMAX Commercial agents operate within the largest real estate network on the planet — 140,000+ agents across 9,000+ offices in 110+ countries and territories. This gives REMAX Commercial agents access to a referral network, listing exposure, and market data that boutique or regional brokerages cannot match. Each REMAX office is independently owned and operated, which means you get local expertise backed by global infrastructure.",
  },
  {
    q: "Does REMAX Commercial operate in Florida?",
    a: "Yes. REMAX Commercial agents operate across all 67 Florida counties. Barrett Henry is a REMAX Commercial Broker Associate at REMAX Collective, with offices in Tampa, Largo, and Brandon. He handles commercial transactions throughout the state, and for markets outside his core area, he leverages the REMAX referral network to connect clients with local commercial specialists.",
  },
  {
    q: "What types of properties does REMAX Commercial handle?",
    a: "REMAX Commercial agents specialize in all major commercial property types: office space, retail space, industrial and warehouse properties, multifamily apartment complexes, vacant land and development sites, hospitality properties, NNN (triple-net) investments, and specialty assets such as marinas. Whatever the asset class, REMAX Commercial has an agent who specializes in it.",
  },
  {
    q: "How do I find a REMAX Commercial agent in Florida?",
    a: "You are already in the right place. Barrett Henry is a REMAX Commercial Broker Associate serving all 67 Florida counties from his base in Tampa Bay. Contact Barrett directly at (813) 733-7907 or barrett@nowtb.com to discuss your commercial real estate needs. For transactions outside Florida, Barrett can connect you with REMAX Commercial agents in any state or country through the global referral network.",
  },
  {
    q: "What is the REMAX Commercial referral network?",
    a: "The REMAX referral network is the largest in real estate — connecting 140,000+ agents across 110+ countries. When a REMAX Commercial agent in Florida has a client looking to buy, sell, or lease commercial property in another market, they can refer that client to a local REMAX Commercial specialist. This ensures clients get local expertise no matter where the deal is, while maintaining continuity through their trusted agent.",
  },
  {
    q: "Is Barrett Henry a REMAX Commercial agent?",
    a: "Yes. Barrett Henry is a licensed REALTOR® and Broker Associate at REMAX Collective, operating under the REMAX Commercial division for commercial property transactions. He has 23+ years of real estate experience, holds e-PRO, MRP, and SRS designations, and has been inducted into the REMAX Hall of Fame. Barrett serves all 67 Florida counties with a focus on the Tampa Bay market.",
  },
] as const;

/* -- Schema.org structured data: Organization + RealEstateAgent + FAQPage -- */
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
          name: "REMAX Commercial",
          item: "https://hencre.com/remax-commercial",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://hencre.com/remax-commercial/#organization",
      name: "REMAX Commercial",
      alternateName: "REMAX Commercial Florida",
      url: "https://www.remaxcommercial.com",
      description:
        "REMAX Commercial is the commercial real estate division of REMAX, the world's most recognized real estate brand. Founded in 1973 with 140,000+ agents across 110+ countries.",
      foundingDate: "1973",
      parentOrganization: {
        "@type": "Organization",
        name: "REMAX",
        url: "https://www.remax.com",
      },
      sameAs: [
        "https://www.remaxcommercial.com",
        "https://www.remax.com",
      ],
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://hencre.com/remax-commercial/#agent",
      name: "Barrett Henry",
      jobTitle: "Broker Associate",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "REMAX Collective",
      },
      memberOf: {
        "@type": "Organization",
        name: "REMAX Commercial",
        url: "https://www.remaxcommercial.com",
      },
      url: "https://hencre.com",
      telephone: "+1-813-733-7907",
      email: "barrett@nowtb.com",
      award: "REMAX Hall of Fame",
      sameAs: [
        "https://www.remaxcommercial.com",
        "https://nowtb.com",
        "https://barretthenry.remax.com",
      ],
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
      knowsAbout: [
        "Commercial Real Estate",
        "REMAX Commercial",
        "Tenant Representation",
        "Landlord Leasing",
        "Investment Sales",
        "Dispositions",
        "CRE Valuation",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://hencre.com/remax-commercial/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function RemaxCommercialPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
      >
        <ol className="flex text-sm text-slate-brand">
          <li>
            <Link href="/" className="hover:underline no-underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">
            REMAX Commercial
          </li>
        </ol>
      </nav>

      {/* ---- Hero ---- */}
      <Hero
        title="REMAX Commercial Florida"
        subtitle="Barrett Henry, REALTOR® & Broker Associate at REMAX Collective. Commercial real estate backed by the world's most recognized brand."
        ctaText="Contact Barrett"
        ctaHref="/contact"
      />

      {/* ---- The REMAX Commercial Network ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          The REMAX Commercial Network
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
          <p>
            REMAX Commercial is a division of REMAX — the world&apos;s most
            recognized real estate brand. Since its founding in Denver, Colorado
            in 1973, REMAX has grown into a global powerhouse with 140,000+ agents
            operating out of 9,000+ offices across 110+ countries and territories.
            No other real estate brand comes close to that reach.
          </p>
          <p>
            The REMAX Commercial division was created to bring that same level of
            brand recognition, agent quality, and network infrastructure to the
            commercial real estate space. REMAX Commercial agents do not dabble in
            commercial property on the side — they specialize in it. Office space,
            retail centers, industrial warehouses, multifamily complexes, vacant
            land, hospitality assets, marinas, and NNN investments are all within
            the scope of what REMAX Commercial handles every day.
          </p>
          <p>
            The tagline says it all: &ldquo;A better way in commercial real
            estate.&rdquo; REMAX Commercial agents have access to proprietary
            tools, global listing databases, commercial-specific training
            programs, and the most powerful referral network in the industry. When
            a REMAX Commercial agent in Tampa needs to place a client in a Dallas
            industrial property, they pick up the phone and connect with a
            specialist who already knows that market.
          </p>
        </div>
      </section>

      {/* ---- 50+ Years of Leadership ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Over 50 Years of Real Estate Leadership
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
            <p>
              REMAX was founded in 1973 by Dave and Gail Liniger with a simple
              idea: attract the best agents by offering them the highest possible
              commission splits and the freedom to run their businesses their way.
              That model disrupted the entire real estate industry and created a
              brand that has endured for over half a century.
            </p>
            <p>
              Today, REMAX is the largest real estate franchise by agent count,
              with a presence in more countries than any competitor. The company
              generated $307 million in revenue in 2024 and operates the largest
              corporate fleet of hot air balloons in the world — a marketing icon
              that has made the REMAX brand instantly recognizable to consumers
              everywhere.
            </p>
            <p>
              REMAX has also maintained a 32+ year partnership with Children&apos;s
              Miracle Network Hospitals, raising hundreds of millions of dollars for
              children&apos;s healthcare. It is a brand built on performance,
              entrepreneurship, and community commitment.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Network Stats Grid ---- */}
      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            REMAX Commercial by the Numbers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "50+", label: "Years in Business", detail: "Founded 1973" },
              { stat: "140,000+", label: "Agents Worldwide", detail: "Largest agent network" },
              { stat: "9,000+", label: "Offices Globally", detail: "Independently owned" },
              { stat: "110+", label: "Countries & Territories", detail: "Global reach" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-3xl font-bold text-accent-blue">{item.stat}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs text-white/50">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why REMAX Commercial Agents Are Different ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Why REMAX Commercial Agents Are Different
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
            <p>
              Not every agent who handles a commercial deal is a commercial real
              estate specialist. REMAX Commercial agents are. They receive
              commercial-specific training, have access to commercial listing
              platforms and market analytics, and operate within a network where
              commercial expertise is valued and rewarded.
            </p>
            <p>
              REMAX operates on a model that attracts top producers. Agents pay for
              their desk and keep the highest splits in the industry — which means
              only serious, productive agents stick around. The result is a network
              of highly motivated professionals who treat real estate as a career,
              not a hobby.
            </p>
            <p>
              The referral network is where REMAX Commercial truly separates itself.
              A traditional independent broker can only serve their local market. A
              REMAX Commercial agent can connect clients with specialists in any
              market, any state, any country — and maintain a relationship throughout
              the process. That is how multi-market investors build portfolios, and
              it is how REMAX Commercial agents deliver value that others cannot.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Barrett's Connection to REMAX Commercial ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Barrett Henry — REMAX Commercial in Florida
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-brand">
            <p>
              Barrett Henry is a licensed REALTOR® and Broker Associate at REMAX
              Collective, operating under the REMAX Commercial division for all
              commercial property transactions in Florida. With 23+ years of real
              estate experience, Barrett brings a depth of knowledge that covers
              both residential and commercial markets — but his focus today is
              exclusively on commercial real estate.
            </p>
            <p>
              Barrett holds the e-PRO (digital marketing), MRP (Military
              Relocation Professional), and SRS (Seller Representative Specialist)
              designations. He has been inducted into the REMAX Hall of Fame —
              a recognition reserved for agents who have achieved exceptional
              career production milestones within the REMAX network.
            </p>
            <p>
              Operating from three REMAX Collective offices in Tampa, Largo, and
              Brandon, Barrett covers the Tampa Bay metro area directly and serves
              all 67 Florida counties through the REMAX referral network. His
              commercial services include tenant representation, landlord leasing,
              investment sales, dispositions, and broker opinions of value.
            </p>
            <p>
              When you work with Barrett, you are not just hiring a broker — you
              are accessing the entire REMAX Commercial ecosystem. Listings get
              exposure across the REMAX network. Buyers get access to off-market
              opportunities through referral channels. And every deal benefits from
              the tools, training, and brand recognition that only REMAX Commercial
              can provide.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Services Through REMAX Commercial in Florida ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            REMAX Commercial Services in Florida
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-brand">
            Full-service commercial real estate — backed by the REMAX Commercial network.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tenant Representation",
                desc: "Find the right commercial space at the right terms. REMAX Commercial tools and market data give you an edge in every negotiation.",
                href: "/services/tenant-representation",
              },
              {
                title: "Landlord Leasing",
                desc: "Fill vacancies faster with qualified tenants. REMAX Commercial listing exposure reaches more prospects than any local brokerage.",
                href: "/services/landlord-leasing",
              },
              {
                title: "Investment Sales",
                desc: "Acquire income-producing properties with data-driven analysis. REMAX Commercial connects you with opportunities across Florida and beyond.",
                href: "/services/investment-sales",
              },
              {
                title: "Dispositions",
                desc: "Maximize proceeds when exiting a commercial asset. REMAX Commercial marketing reaches qualified buyers nationwide.",
                href: "/services/dispositions",
              },
              {
                title: "CRE Valuation",
                desc: "Broker opinion of value, comp analysis, and market positioning backed by REMAX Commercial data and analytics.",
                href: "/services/cre-valuation",
              },
              {
                title: "Referral Network",
                desc: "Deals outside Florida? Barrett connects you with REMAX Commercial specialists in any market, any state, any country.",
                href: "/refer-a-deal",
              },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-lg border border-gray-200 p-6 no-underline transition-shadow hover:shadow-md hover:no-underline"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-accent-blue">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-slate-brand">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FAQ Section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            REMAX Commercial — Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <dt className="text-lg font-semibold text-navy">{faq.q}</dt>
                <dd className="mt-2 text-slate-brand">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Work with a REMAX Commercial Agent in Florida
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you are buying, selling, leasing, or investing in commercial
            property — Barrett Henry and the REMAX Commercial network are ready
            to deliver results. No pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent-blue px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-accent-blue/90 hover:no-underline"
            >
              Contact Barrett
            </Link>
            <a
              href="https://www.remaxcommercial.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
            >
              Visit remaxcommercial.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
