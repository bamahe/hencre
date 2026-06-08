import Link from "next/link";

/* -------------------------------------------------------------------
 * Hero — reusable hero section with heading, subheading, and optional
 * CTA button. Solid black/charcoal background. No gradients, no color.
 * Server component.
 * ----------------------------------------------------------------- */

interface HeroProps {
  /** Main headline */
  title: string;
  /** Supporting copy below the headline */
  subtitle?: string;
  /** CTA button label — button only renders when both ctaText and ctaHref are provided */
  ctaText?: string;
  /** CTA button destination */
  ctaHref?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="bg-[#1a1a1a] px-4 py-20 text-center sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg text-white/80 sm:text-xl">{subtitle}</p>
        )}

        {ctaText && ctaHref && (
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-black no-underline shadow-lg transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
