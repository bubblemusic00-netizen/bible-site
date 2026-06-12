import type { MetadataRoute } from "next";
import { startFaithPathSlugs } from "@/lib/faith-paths";
import { supportedBibleChapters } from "./bible/bible-data";
import { jewelryIntentionKeys } from "./jewelry/intentions";
import { prayerPathKeys } from "./prayer/prayer-paths";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

const lastModified = new Date("2026-06-08");

const coreRoutes = [
  { path: "/", priority: 1 },
  { path: "/bible", priority: 0.9 },
  { path: "/prayer", priority: 0.9 },
  { path: "/start", priority: 0.9 },
  { path: "/jewelry", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/editorial-principles", priority: 0.64 },
  { path: "/content-boundaries", priority: 0.64 },
  { path: "/contact", priority: 0.6 },
  { path: "/disclosures", priority: 0.6 },
  { path: "/privacy", priority: 0.5 },
  { path: "/terms", priority: 0.5 },
  { path: "/shipping", priority: 0.4 },
  { path: "/returns", priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const startRoutes = startFaithPathSlugs.map((slug) => ({
    path: `/start/${slug}`,
    priority: 0.72,
  }));

  const bibleReadingRoutes = supportedBibleChapters.map((chapter) => ({
    path: chapter.href,
    priority: 0.74,
  }));

  const prayerRoutes = prayerPathKeys.map((slug) => ({
    path: `/prayer/${slug}`,
    priority: 0.73,
  }));

  const symbolRoutes = jewelryIntentionKeys.map((slug) => ({
    path: `/jewelry/${slug}`,
    priority: 0.64,
  }));

  return [
    ...coreRoutes,
    ...bibleReadingRoutes,
    ...prayerRoutes,
    ...startRoutes,
    ...symbolRoutes,
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
