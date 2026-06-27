import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Use the shared SITE_URL resolver (NEXT_PUBLIC_SITE_URL → Vercel prod URL →
// localhost) so the sitemap line matches the canonical/sitemap host on Vercel
// even when NEXT_PUBLIC_SITE_URL is not set — never points crawlers at localhost.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
