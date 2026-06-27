import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import { ScrollReveal } from "./components/ScrollReveal";
import { organizationSchema, websiteSchema, SITE_URL } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Selah | Free Bible Reading and Prayer Guidance",
    template: "%s | Selah",
  },
  description:
    "Free Bible reading, prayer guidance, and Christian faith reflections for Scripture, prayer, and meaningful faith reminders.",
  applicationName: "Selah",
  openGraph: {
    title: "Selah | Free Bible Reading and Prayer Guidance",
    description:
      "Free Bible reading, prayer guidance, and Christian faith reflections for Scripture, prayer, and meaningful faith reminders.",
    url: "/",
    siteName: "Selah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selah | Free Bible Reading and Prayer Guidance",
    description:
      "Free Bible reading, prayer guidance, and Christian faith reflections.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#203d30",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-green-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream-fg focus:shadow-[0_14px_34px_rgba(40,71,55,0.25)]"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ScrollReveal />
        {children}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </body>
    </html>
  );
}
