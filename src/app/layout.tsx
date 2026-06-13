import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

/* Load Inter with the weights we need: 400 (normal), 600 (semibold), 700 (bold) */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "REMAX Commercial\u00AE | HenCRE Florida Commercial Real Estate Advisors",
    template: "%s | HenCRE \u2014 REMAX Commercial\u00AE Florida",
  },
  description:
    "REMAX Commercial Real Estate — A better way in commercial real estate. Barrett Henry, Commercial Real Estate Advisor at REMAX Collective. Full-service CRE brokerage serving all 67 Florida counties. Tenant rep, landlord leasing, investment sales, and dispositions backed by the world\u2019s most recognized real estate brand.",
  metadataBase: new URL("https://hencre.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "REMAX Commercial\u00AE | HenCRE Florida Commercial Real Estate Advisors",
    images: [
      {
        url: "https://hencre.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "HenCRE — REMAX Commercial Real Estate Florida | Barrett Henry",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* Sticky site header */}
        <Header />

        {/* Main content area — grows to fill available space */}
        <main className="flex-1">{children}</main>

        {/* Site footer */}
        <Footer />
      </body>
    </html>
  );
}
