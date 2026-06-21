import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

/* -------------------------------------------------------------------
 * Footer — REMAX Commercial® white logo, three offices, contact info,
 * tagline, and dynamic copyright year. Dark charcoal background.
 * Server component (no interactivity needed).
 * ----------------------------------------------------------------- */

const OFFICES = [
  {
    name: "REMAX Collective — Tampa",
    line1: "14310 N Dale Mabry Hwy Ste 100",
    line2: "Tampa, FL 33618",
  },
  {
    name: "REMAX Collective — Largo",
    line1: "11200 Seminole Blvd Ste 202",
    line2: "Largo, FL 33778",
  },
  {
    name: "REMAX Collective — Brandon",
    line1: "417 Lithia Pinecrest Rd",
    line2: "Brandon, FL 33511",
  },
] as const;

export default function Footer() {
  /* Build the year at render time on the server */
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* ---- REMAX Commercial® tagline bar ---- */}
      <div className="border-t border-white/10 py-6 text-center">
        {/* White REMAX Commercial® logo */}
        <div className="flex justify-center mb-3">
          <Image
            src="/images/remax-commercial-white.png"
            alt="REMAX Commercial®"
            width={200}
            height={44}
            className="h-10 w-auto"
          />
        </div>
        <p className="text-lg font-bold tracking-widest uppercase">
          A BETTER WAY IN COMMERCIAL REAL ESTATE
        </p>
        <p className="mt-1 text-xs text-white/60 tracking-wider uppercase">
          Tampa Bay Based &bull; Serving All of Florida
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ---- Office grid ---- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((office) => (
            <div key={office.name} className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/60" />
              <div>
                <p className="font-semibold">{office.name}</p>
                <p className="text-sm text-white/70">{office.line1}</p>
                <p className="text-sm text-white/70">{office.line2}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Contact & links ---- */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <Link href="/blog" className="no-underline hover:text-white hover:no-underline">Blog</Link>
            <Link href="/about" className="no-underline hover:text-white hover:no-underline">About</Link>
            <Link href="/contact" className="no-underline hover:text-white hover:no-underline">Contact</Link>
          </div>

          {/* Contact details */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="tel:+18137337907"
              className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
            >
              <Phone className="h-4 w-4" />
              (813) 733-7907
            </a>
            <a
              href="mailto:barrett@nowtb.com"
              className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
            >
              <Mail className="h-4 w-4" />
              barrett@nowtb.com
            </a>
            <a
              href="https://nowtb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
            >
              <ExternalLink className="h-4 w-4" />
              nowtb.com
            </a>
          </div>

          {/* REMAX Commercial® link */}
          <a
            href="https://www.remaxcommercial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
          >
            <ExternalLink className="h-4 w-4" />
            remaxcommercial.com
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/60">
            &copy; {year} REMAX Commercial&reg; Florida &mdash; Barrett Henry, REALTOR&reg; &amp;
            Commercial Real Estate Advisor at REMAX Collective. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-white/50 uppercase tracking-wider">
            Move with Confidence
          </p>
          <p className="mt-2 text-xs text-white/40">
            Each REMAX office is independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  );
}
