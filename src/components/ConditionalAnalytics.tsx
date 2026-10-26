"use client";

/**
 * ConditionalAnalytics — loads GA4 and Microsoft Clarity unless the visitor
 * opted OUT via the CookieConsent banner.
 *
 * This used to require "cookie-consent" === "accepted", so anyone who ignored
 * the banner was never counted. On a site where most sessions are a single
 * page view off a search result, that is the large majority, which made the
 * reported numbers a biased sample of the most engaged visitors.
 *
 * Flip back to opt-in if this site ever targets EU visitors — GDPR requires
 * consent BEFORE loading, which is exactly what the old behavior did.
 *
 * `null` means "haven't read localStorage yet". Starting at `true` would
 * render the Script tags for one pass before the effect could see a decline.
 */
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ConditionalAnalytics() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const read = () =>
      setAccepted(localStorage.getItem("cookie-consent") !== "declined");
    read();
    // Re-read on either answer so a decline unmounts the tags immediately
    // rather than waiting for the next page load.
    window.addEventListener("cookie-consent-updated", read);
    return () => window.removeEventListener("cookie-consent-updated", read);
  }, []);

  if (accepted !== true) return null;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
      {clarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      )}
    </>
  );
}
