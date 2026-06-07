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
    default: "REMAX Commercial Florida | Barrett Henry, Broker Associate",
    template: "%s | REMAX Commercial Florida — Barrett Henry",
  },
  description:
    "REMAX Commercial Florida — A better way in commercial real estate. Barrett Henry, REALTOR\u00AE & Broker Associate at REMAX Collective. Full-service CRE brokerage serving all 67 Florida counties. Tenant rep, landlord leasing, investment sales, and dispositions backed by the world\u2019s most recognized real estate brand.",
  metadataBase: new URL("https://hencre.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "REMAX Commercial Florida",
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
