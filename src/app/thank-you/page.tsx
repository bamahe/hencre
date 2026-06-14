import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Thank You Page — shown after form submission.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Thank You | Your Inquiry Has Been Received",
  description:
    "Thank you for contacting REMAX Commercial Real Estate. Barrett Henry will respond within one business day.",
  alternates: { canonical: "https://hencre.com/thank-you" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Thank You | REMAX Commercial Real Estate",
    url: "https://hencre.com/thank-you",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Thank You", item: "https://hencre.com/thank-you" },
  ],
};

export default function ThankYouPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Thank You</li>
        </ol>
      </nav>

      <Hero title="Thank You — We Have Received Your Inquiry" />

      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Happens Next</h2>
        <div className="mt-6 space-y-4 text-lg text-[#666666]">
          <p>
            I review every inquiry personally. You will hear back from me within one
            business day — usually much sooner.
          </p>
          <p>
            If your matter is time-sensitive, call me directly at{" "}
            <a href="tel:+18137337907" className="font-semibold text-black">
              (813) 733-7907
            </a>.
          </p>
        </div>

        {/* -- Quick links -- */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Link
            href="/services"
            className="rounded-lg border border-[#E5E5E5] p-4 text-center font-semibold text-black no-underline transition-shadow hover:shadow-md hover:no-underline"
          >
            Explore Services
          </Link>
          <Link
            href="/commercial"
            className="rounded-lg border border-[#E5E5E5] p-4 text-center font-semibold text-black no-underline transition-shadow hover:shadow-md hover:no-underline"
          >
            Property Types
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-[#E5E5E5] p-4 text-center font-semibold text-black no-underline transition-shadow hover:shadow-md hover:no-underline"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}
