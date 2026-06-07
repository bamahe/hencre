"use client";

import { useEffect, useRef, useCallback } from "react";

/* -------------------------------------------------------------------
 * TurnstileWidget — renders a Cloudflare Turnstile challenge.
 * Loads the Turnstile script once, then renders the widget into a div.
 * Passes the verification token back to the parent via onVerify.
 * ----------------------------------------------------------------- */

interface TurnstileWidgetProps {
  /** Called with the Turnstile token string after the user passes */
  onVerify: (token: string) => void;
}

/* Extend the window type so TypeScript knows about turnstile */
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
        }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

/* The script URL for Cloudflare Turnstile */
const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export default function TurnstileWidget({ onVerify }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  /* Stable reference to the callback so re-renders don't break it */
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  const renderWidget = useCallback(() => {
    /* Only render if the container exists and we haven't already rendered */
    if (!containerRef.current || widgetIdRef.current) return;
    if (!window.turnstile) return;

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      console.warn("TurnstileWidget: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set.");
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onVerifyRef.current(token),
    });
  }, []);

  useEffect(() => {
    /* If the Turnstile script is already loaded, render right away */
    if (window.turnstile) {
      renderWidget();
      return;
    }

    /* Otherwise, load the script */
    const existing = document.querySelector(
      `script[src="${TURNSTILE_SCRIPT_URL}"]`
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = TURNSTILE_SCRIPT_URL;
      script.async = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      /* Script tag exists but hasn't loaded yet — wait for it */
      existing.addEventListener("load", renderWidget);
    }

    /* Cleanup: remove the widget when this component unmounts */
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return (
    <div
      ref={containerRef}
      className="mt-2"
      aria-label="Security verification"
    />
  );
}
