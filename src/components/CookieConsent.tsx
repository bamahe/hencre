"use client";

/**
 * CookieConsent — bottom banner asking users to accept/decline tracking.
 * Stores choice in localStorage as "cookie-consent" = "accepted" | "declined".
 * Dismisses after either choice. Uses REMAX Commercial black/white brand colors.
 */
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if no choice has been made yet
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
    // If accepted, notify ConditionalAnalytics to load scripts
    if (choice === "accepted") {
      window.dispatchEvent(new Event("cookie-consent-updated"));
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-white/20 bg-[#1a1a1a] px-4 py-4 shadow-lg sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/80">
          We use cookies and analytics to improve your experience. You can accept
          or decline tracking.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => handleChoice("declined")}
            className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-white/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
