import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Refer a Deal Page — referral process, benefits, FAQ.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Refer a Commercial Deal | REMAX Commercial Florida",
  description:
    "Got a commercial real estate deal outside your lane? Refer it to Barrett Henry and earn a competitive referral fee. Licensed agents across Florida welcome.",
  openGraph: {
    title: "Refer a Deal | REMAX Commercial Florida",
    description:
      "Licensed agents: refer commercial deals to Barrett Henry and earn a referral fee. Simple process, transparent communication.",
    url: "https://hencre.com/refer-a-deal",
  },
};

const BENEFITS = [
  {
    title: "Competitive Referral Fees",
    description:
      "Industry-standard referral fees paid at closing. No surprises, no ambiguity — the terms are agreed upfront.",
  },
  {
    title: "You Stay in the Loop",
    description:
      "I keep you informed at every milestone. Your client, your relationship — I respect that.",
  },
  {
    title: "Expert Execution",
    description:
      "23+ years of real estate experience backing your referral. Your client gets top-tier CRE service.",
  },
  {
    title: "All Property Types",
    description:
      "Office, retail, industrial, multifamily, NNN, and land. If it is commercial, I can handle it.",
  },
] as const;

const REFERRAL_FAQS = [
  {
    q: "Who can refer a deal?",
    a: "Any licensed real estate agent or broker in Florida. If your client has a commercial need that falls outside your expertise, send it my way.",
  },
  {
    q: "What is the referral fee?",
    a: "Referral fees are negotiated per deal, but I pay competitive industry-standard rates. We agree on terms before I engage with your client.",
  },
  {
    q: "How does the process work?",
    a: "Fill out the referral form with your client's details. I will contact you within one business day to discuss the opportunity, agree on referral terms, and take it from there. You stay informed throughout.",
  },
  {
    q: "Will you try to take my client?",
    a: "No. Your client is your client. I handle the commercial transaction and pay the agreed referral fee. I do not poach relationships — that is not how I operate.",
  },
  {
    q: "What if the deal does not close?",
    a: "If the deal does not close, no fee is owed. Referral fees are paid at closing only.",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Refer a Deal", item: "https://hencre.com/refer-a-deal" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: REFERRAL_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function ReferADealPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Refer a Deal</li>
        </ol>
      </nav>

      <Hero
        title="Got a Commercial Deal Outside Your Lane?"
        subtitle="Refer it to me. Earn a fee. Keep your client happy."
        ctaText="Submit a Referral"
        ctaHref="#referral-form"
      />

      {/* ---- How it works ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Referrals Work</h2>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          You are great at what you do — but commercial real estate is a different
          animal. Powered by the REMAX Commercial referral network — the largest in real estate — your
          client gets institutional-quality CRE service while you earn a competitive referral
          fee at closing. If your client needs office space, wants to sell a retail center, or
          is looking at an investment property, you do not have to turn them away.
        </p>

        <ol className="mt-8 space-y-4">
          {[
            "Submit the referral form below with your client's details.",
            "I contact you within one business day to discuss the opportunity.",
            "We agree on referral terms in writing before I engage your client.",
            "I handle the commercial transaction with full transparency.",
            "Referral fee is paid to you at closing.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-[#666666]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Benefits ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Why Refer to Barrett?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-lg border border-[#E5E5E5] p-6">
                <h3 className="text-lg font-bold text-black">{b.title}</h3>
                <p className="mt-2 text-[#666666]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Referral form placeholder ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="referral-form">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Submit a Referral</h2>
          <p className="mt-3 text-[#666666]">
            Fill out the form and I will reach out within one business day.
          </p>
          {/* ReferralForm component will be mounted here */}
          <div className="mt-8 rounded-lg border border-[#E5E5E5] bg-white p-8">
            <p className="text-[#666666]">Referral form loading...</p>
            <p className="mt-4 text-sm text-[#666666]">
              Or call{" "}
              <a href="tel:+18137337907" className="font-semibold text-black">
                (813) 733-7907
              </a>{" "}
              directly.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Referral FAQ ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Referral FAQ
          </h2>
          <dl className="mt-10 space-y-6">
            {REFERRAL_FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-[#E5E5E5] pb-6">
                <dt className="text-lg font-semibold text-black">{faq.q}</dt>
                <dd className="mt-2 text-[#666666]">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
