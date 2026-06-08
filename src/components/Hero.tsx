import Link from "next/link";

/* -------------------------------------------------------------------
 * Hero — background video with dark overlay, white text, white CTA.
 * Video from collectiverr.com. Falls back to solid dark background.
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
    <section className="relative overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 py-24 text-center sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-lg text-white/90 sm:text-xl">{subtitle}</p>
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
      </div>
    </section>
  );
}
