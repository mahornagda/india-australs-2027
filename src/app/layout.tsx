import type { Metadata } from "next";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.longName}`,
    template: `%s — ${site.name}`,
  },
  description: `The Australasian Intervarsity Debating Championship comes to India. ${site.datesLabel}, at ${site.venue}, ${site.city}.`,
  openGraph: {
    title: `${site.name}`,
    description: `${site.longName}. ${site.datesLabel}, ${site.venue}, ${site.city}.`,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="theme-color" content="#1f3969" />
      </head>
      <body style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
