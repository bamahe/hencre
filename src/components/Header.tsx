"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/* -------------------------------------------------------------------
 * Header — sticky dark charcoal bar with REMAX Commercial® logo and
 * responsive nav. Black/white brand. Client component for mobile menu.
 * ----------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Property Types", href: "/commercial" },
  { label: "Markets", href: "/markets" },
  { label: "Insights", href: "/insights" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ---- REMAX Commercial® logo + Barrett Henry secondary text ---- */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline hover:no-underline"
        >
          {/* Actual REMAX Commercial® white logo for dark background */}
          <Image
            src="/images/remax-commercial-white.png"
            alt="REMAX Commercial®"
            width={180}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
          <span className="hidden text-[10px] font-semibold tracking-widest text-white/70 uppercase leading-tight sm:block">
            Barrett Henry | Tampa Bay
          </span>
        </Link>

        {/* ---- Desktop nav ---- */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/90 no-underline transition-colors hover:text-white hover:no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ---- Mobile hamburger button ---- */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ---- Mobile menu panel ---- */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#1a1a1a] lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-semibold text-white/90 no-underline transition-colors hover:bg-white/10 hover:text-white hover:no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
