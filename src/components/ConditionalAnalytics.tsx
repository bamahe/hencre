"use client";

/**
 * ConditionalAnalytics — loads GA4 and Microsoft Clarity ONLY if the user
 * accepted tracking via the CookieConsent banner.
 * Checks localStorage for "cookie-consent" === "accepted".
 */
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ConditionalAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Check initial consent state
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") setAccepted(true);

    // Listen for consent changes (fired by CookieConsent component)
    function onConsentUpdate() {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        setAccepted(true);
      }
    }
    window.addEventListener("cookie-consent-updated", onConsentUpdate);
    return () =>
      window.removeEventListener("cookie-consent-updated", onConsentUpdate);
  }, []);

  if (!accepted) return null;

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
