// Centralized SEO helpers: site constants, absolute URLs, and schema.org
// JSON-LD builders. Builders return plain serializable objects rendered by the
// <JsonLd /> component as <script type="application/ld+json">.

export const SITE_NAME = "Selah";

export const SITE_DESCRIPTION =
  "Free Bible reading, prayer guidance, and Christian faith reflections for Scripture, prayer, and meaningful faith reminders.";

// Resolve the canonical base URL, in priority order:
// 1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is connected.
// 2. VERCEL_PROJECT_PRODUCTION_URL — auto-injected by Vercel (stable prod
//    domain, no protocol), so canonical/OG/sitemap are correct with no manual
//    env setup.
// 3. localhost — local development fallback.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/** Build a fully qualified URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) {
    return `${SITE_URL}/${path}`;
  }
  return `${SITE_URL}${path}`;
}

type JsonLdObject = Record<string, unknown>;

/** Organization schema for the publisher/brand. */
export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: absoluteUrl("/icon.png"),
  };
}

/** WebSite schema, enabling sitelinks/site name in search results. */
export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  /** Site-relative path, e.g. "/bible/john/1". */
  path: string;
};

/** BreadcrumbList schema for a content page's navigation trail. */
export function breadcrumbSchema(items: readonly BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  /** Site-relative path of the article page. */
  path: string;
  /** ISO date string. Defaults to a stable site date. */
  datePublished?: string;
  dateModified?: string;
};

const DEFAULT_CONTENT_DATE = "2026-06-08";

/** Article schema for guided readings, prayers, guides, and symbol pages. */
export function articleSchema(input: ArticleSchemaInput): JsonLdObject {
  const url = absoluteUrl(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en-US",
    datePublished: input.datePublished ?? DEFAULT_CONTENT_DATE,
    dateModified: input.dateModified ?? input.datePublished ?? DEFAULT_CONTENT_DATE,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.png"),
      },
    },
  };
}

/** ItemList schema for index/hub pages that list child content. */
export function itemListSchema(
  name: string,
  items: readonly BreadcrumbItem[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

/** FAQPage schema for pages structured as questions and answers. */
export function faqSchema(items: readonly FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
