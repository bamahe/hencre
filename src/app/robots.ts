import type { MetadataRoute } from "next";

/* -------------------------------------------------------------------
 * robots.ts — programmatic robots config for hencre.com.
 * Allows AI/answer-engine crawlers, blocks SEO spam bots.
 * ----------------------------------------------------------------- */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* Default: allow everything */
      {
        userAgent: "*",
        allow: "/",
      },
      /* AI / answer-engine crawlers — explicitly allowed */
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "GoogleOther",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      /* Spam / scraper bots — blocked */
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
    ],
    sitemap: "https://hencre.com/sitemap.xml",
  };
}
