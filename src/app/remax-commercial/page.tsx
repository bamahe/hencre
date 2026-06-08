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
    "REMAX Commercial Florida — Barrett Henry, Broker Associate | REMAX Commercial Florida",
  description:
    "REMAX Commercial Florida — Barrett Henry, REALTOR® & Broker Associate at REMAX Collective. Access 145,000+ agents across 120+ countries. Commercial real estate services including tenant rep, landlord leasing, investment sales, and dispositions across all 67 Florida counties.",
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
    a: "REMAX Commercial is the commercial real estate division of REMAX, the world's most recognized real estate brand. Led by Executive Director Kristie Kimnach, REMAX Commercial provides agents with specialized training, tools like MAXRefer and RealNex Marketplace, and a global referral network of 145,000+ agents across 120+ countries — focused exclusively on commercial property transactions including office, retail, industrial, multifamily, land, and hospitality assets.",
  },
  {
    q: "How is REMAX Commercial different from other commercial real estate brokerages?",
    a: "REMAX Commercial agents operate within the largest real estate network on the planet — 145,000+ agents across 9,000+ offices in 120+ countries and territories. Unlike traditional CRE firms that restrict brokers to specific asset classes, REMAX Commercial brokers are generalists who can sell or lease any property type. Each office is independently owned and operated, and REMAX does not dictate commission splits — offices have the freedom to set what works for them. Agents also get access to MAXRefer (AI-powered referral matching), RealNex Marketplace, REMAX University, and discounted CCIM courses.",
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
    a: "The REMAX referral network is the largest in real estate — connecting 145,000+ agents across 120+ countries. REMAX Commercial uses MAXRefer, an AI-powered platform that matches referrals across the entire network based on agent specialization and market expertise. When a REMAX Commercial agent in Florida has a client looking to buy, sell, or lease commercial property in another market, MAXRefer identifies the best local specialist. Agents also pitch listings live on the quarterly Global Deal Call — recent calls have featured opportunities like a $120M island off Tanzania. This ensures clients get local expertise no matter where the deal is.",
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
        "REMAX Commercial is the commercial real estate division of REMAX, the world's most recognized real estate brand. Founded in 1973 with 145,000+ agents across 120+ countries.",
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
        <ol className="flex text-sm text-[#666666]">
          <li>
            <Link href="/" className="hover:underline no-underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">
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
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            REMAX Commercial is a division of REMAX — the world&apos;s most
            recognized real estate brand. Since its founding in Denver, Colorado
            in 1973, REMAX has grown into a global powerhouse with 145,000+ agents
            operating out of 9,000+ offices across 120+ countries and territories.
            No other real estate brand comes close to that reach. Led by Executive
            Director Kristie Kimnach, REMAX Commercial attracts what she calls
            &ldquo;self-driven professionals with an entrepreneurial spirit who
            want to be a part of a like-minded network.&rdquo;
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
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
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
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            REMAX Commercial by the Numbers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "50+", label: "Years in Business", detail: "Founded 1973" },
              { stat: "145,000+", label: "Agents Worldwide", detail: "Largest agent network" },
              { stat: "9,000+", label: "Offices Globally", detail: "Independently owned" },
              { stat: "120+", label: "Countries & Territories", detail: "Global reach" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-3xl font-bold text-white">{item.stat}</p>
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
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              At most large CRE firms, brokers are restricted to a single asset
              class — you get an office broker or a retail broker, but not both.
              REMAX Commercial is different. Each office is independently owned and
              operated, which means brokers choose their own asset classes and
              serve clients across the full spectrum of commercial property types.
              REMAX does not dictate commission splits either — offices have the
              freedom to set what works for them. The result is a network of
              entrepreneurial brokers who are invested in their own success.
            </p>
            <p>
              REMAX Commercial agents receive commercial-specific training through
              REMAX University, which is adding 13 new commercial courses in 2026.
              They also have access to discounted CCIM (Certified Commercial
              Investment Member) courses and alignment with the Realtors Land
              Institute (RLI). The monthly Commercial Pro series delivers live
              educational sessions, keeping agents sharp on market trends and deal
              structures.
            </p>
            <p>
              The referral network is where REMAX Commercial truly separates itself.
              MAXRefer — an AI-powered referral matching platform — connects agents
              across the entire 145,000+ agent network based on specialization and
              market expertise. RealNex Marketplace gives agents a comprehensive
              platform to search, list, and transact commercial properties. And the
              quarterly Global Deal Call lets brokers pitch listings live to the
              entire network — recent calls have featured everything from Florida
              retail centers to a $120M island off Tanzania.
            </p>
            <p>
              REMAX Commercial agents also benefit from major industry events —
              the annual REMAX R4 conference in Las Vegas and the REMAX Global
              Commercial Symposium held each April bring together commercial
              brokers from around the world to share deals, build relationships,
              and sharpen their edge.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Tools & Resources ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            REMAX Commercial Tools &amp; Resources
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
            Barrett has access to every tool in the REMAX Commercial ecosystem.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "MAXRefer",
                desc: "AI-powered referral matching across the entire REMAX network. Connects clients with the right specialist based on market and asset class.",
              },
              {
                title: "RealNex Marketplace",
                desc: "Comprehensive commercial marketing platform for search, list, and transact — putting listings in front of qualified buyers and tenants.",
              },
              {
                title: "REMAX University",
                desc: "Commercial-focused training courses with 13 new programs launching in 2026. Continuous education that keeps agents ahead of the market.",
              },
              {
                title: "Commercial Pro Series",
                desc: "Monthly live educational sessions covering market trends, deal structures, and commercial best practices.",
              },
              {
                title: "CCIM & RLI Access",
                desc: "Discounted CCIM courses and alignment with the Realtors Land Institute — advanced commercial certifications at reduced cost.",
              },
              {
                title: "Global Deal Call",
                desc: "Quarterly live pitch sessions where brokers present listings to the entire REMAX network — from local retail to international assets.",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm text-white/70">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Barrett's Connection to REMAX Commercial ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Barrett Henry — REMAX Commercial in Florida
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
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
              exposure across the REMAX network through RealNex Marketplace and
              the quarterly Global Deal Call. Buyers get access to off-market
              opportunities through MAXRefer&apos;s AI-powered referral matching.
              And every deal benefits from the tools, training, and brand
              recognition that only REMAX Commercial can provide — including
              REMAX University courses, the Commercial Pro series, and connections
              built at events like the R4 conference and Global Commercial
              Symposium.
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
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#666666]">
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
                className="group rounded-lg border border-[#E5E5E5] p-6 no-underline transition-shadow hover:shadow-md hover:no-underline"
              >
                <h3 className="text-lg font-bold text-black group-hover:text-black">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-[#666666]">{svc.desc}</p>
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
              <div key={faq.q} className="border-b border-[#E5E5E5] pb-6">
                <dt className="text-lg font-semibold text-black">{faq.q}</dt>
                <dd className="mt-2 text-[#666666]">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
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
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
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
