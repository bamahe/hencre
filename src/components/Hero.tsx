import Link from "next/link";

/* -------------------------------------------------------------------
 * Hero — dark background with white text.
 * Video background only on home page (pass showVideo prop).
 * All other pages get a clean solid dark background.
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
  /** Show background video — only use on the home page */
  showVideo?: boolean;
  /** Background image URL — used on blog posts. Image becomes the hero background with text overlay. */
  backgroundImage?: string;
  /** Optional children rendered below the subtitle (e.g., inline form) */
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, ctaText, ctaHref, showVideo = false, backgroundImage, children }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#1a1a1a]"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {/* Dark overlay for readability when image or video is present */}
      {(backgroundImage || showVideo) && (
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      )}

      {/* Background video — home page only */}
      {showVideo && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </>
      )}

      {/* Content — side-by-side when form is present, centered otherwise */}
      <div className="relative z-10 px-4 py-20 sm:py-28 lg:py-32">
        {children ? (
          /* Two-column: text left, form right */
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-left">
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
            <div className="max-w-lg lg:max-w-none">
              {children}
            </div>
          </div>
        ) : (
          /* Centered: no form */
          <div className="mx-auto max-w-3xl text-center">
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
        )}
      </div>
    </section>
  );
}
