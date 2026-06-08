import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Hope Bible | Free Bible Reading and Prayer Guidance",
    template: "%s | Hope Bible",
  },
  description:
    "Free Bible reading, prayer guidance, and Christian faith reflections for Scripture, prayer, and meaningful faith reminders.",
  applicationName: "Hope Bible",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hope Bible | Free Bible Reading and Prayer Guidance",
    description:
      "Free Bible reading, prayer guidance, and Christian faith reflections for Scripture, prayer, and meaningful faith reminders.",
    url: "/",
    siteName: "Hope Bible",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hope Bible | Free Bible Reading and Prayer Guidance",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
