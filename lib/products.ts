import type { StartFaithPathSlug } from "@/lib/faith-paths";
import type { SymbolSlug } from "@/app/jewelry/symbol-data";

// Platform-agnostic product catalog. Holds the verified starter SKUs from the
// sourcing brief (docs/SOURCING-BRIEF.md), mapped to Faith Quiz intentions.
// Customer-facing fields are separate from internal `sourcing` data. This can
// feed a custom shop page or be synced to Shopify later. Nothing is purchasable
// yet — every product is "coming-soon" until fulfillment + a provider are wired.

export type ProductStatus = "coming-soon" | "active" | "draft";

export type ProductAudience = "general" | "latin-catholic" | "both";

export type FulfillmentChannel =
  | "us-warehouse"
  | "pod-engraving"
  | "overseas"
  | "tbd";

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  id: string;
  label: string;
  priceCents: number;
  compareAtCents?: number;
  sku?: string;
};

export type ProductSourcing = {
  channel: FulfillmentChannel;
  supplierRef?: string;
  wholesaleCostCents?: number;
  moq?: number;
  notes?: string;
};

export type Product = {
  slug: string;
  name: string;
  shortLabel: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  audience: ProductAudience;
  /** Faith Quiz intentions this keepsake is offered for. */
  intentions: readonly StartFaithPathSlug[];
  relatedSymbol?: SymbolSlug;
  scriptureReference?: string;
  material: string;
  /** "From" price for the default variant, in USD cents. */
  priceCents: number;
  compareAtCents?: number;
  currency: "USD";
  variants?: readonly ProductVariant[];
  images: readonly ProductImage[];
  /** Internal only — never render to customers. */
  sourcing: ProductSourcing;
  /** Brand-integrity line: a keepsake that points to faith, never a charm. */
  boundaryNote: string;
  /** Shopify product handle; defaults to slug when omitted. */
  shopifyHandle?: string;
};

/**
 * Base URL of the Shopify store, e.g. https://shop.hopebible.com.
 * Set NEXT_PUBLIC_SHOPIFY_URL in Vercel once the store exists.
 */
export const STORE_URL = (process.env.NEXT_PUBLIC_SHOPIFY_URL || "").replace(
  /\/$/,
  "",
);

/** Customer-facing product URL on Shopify, or null until the store is set. */
export function productUrl(product: Product): string | null {
  if (!STORE_URL) return null;
  return `${STORE_URL}/products/${product.shopifyHandle ?? product.slug}`;
}

const KEEPSAKE_BOUNDARY =
  "An optional keepsake meant to point back to Scripture and prayer. It is not a charm and carries no power or guarantee.";

// Catholic devotional medals carry real meaning within Catholic tradition, where
// a blessed medal is a sacramental, not a trinket. We honor that rather than
// flattening it — while keeping Selah's core line that hope rests in Christ.
const CATHOLIC_KEEPSAKE_NOTE =
  "A devotional medal offered with respect for Catholic tradition, where a blessed medal is a meaningful sacramental that encourages prayer and trust in God. As with every keepsake here, it is a reminder that points to Christ and prayer — not a charm, and not a guarantee of any outcome.";

export const products = {
  "cross-necklace": {
    slug: "cross-necklace",
    name: "Engraved Cross Necklace",
    shortLabel: "Cross Necklace",
    tagline: "A reminder of grace, kept close.",
    description:
      "A simple 316L stainless steel cross on an everyday chain — a quiet cue to return to the mercy of Christ and take one faithful next step.",
    status: "coming-soon",
    audience: "both",
    intentions: ["hope", "strength", "forgiveness"],
    relatedSymbol: "cross",
    scriptureReference: "Luke 9:23",
    material: "316L stainless steel",
    priceCents: 3900,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "us-warehouse",
      wholesaleCostCents: 250,
      moq: 5,
      notes: "Alamode TK316 or Alibaba 316L; verify grade with sample.",
    },
    boundaryNote: KEEPSAKE_BOUNDARY,
  },
  "verse-bar-necklace": {
    slug: "verse-bar-necklace",
    name: "Personalized Scripture Necklace",
    shortLabel: "Verse Necklace",
    tagline: "Carry the verse for what you are carrying.",
    description:
      "An engraved bar necklace personalized with the Scripture from your Faith Quiz result — the keepsake version of the path you began.",
    status: "coming-soon",
    audience: "both",
    intentions: ["peace", "guidance", "gratitude"],
    scriptureReference: "Psalm 119:105",
    material: "316L stainless steel",
    priceCents: 4400,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "pod-engraving",
      notes:
        "Print-on-demand engraving; confirm fulfillment time + cost directly (ShineOn 2-5 day claim unverified).",
    },
    boundaryNote: KEEPSAKE_BOUNDARY,
  },
  "mustard-seed-necklace": {
    slug: "mustard-seed-necklace",
    name: "Mustard Seed Necklace",
    shortLabel: "Mustard Seed",
    tagline: "Small faith, patient beginnings.",
    description:
      "A real mustard seed set in a 316L bezel — a reminder that a small, faithful step can matter without needing to look impressive.",
    status: "coming-soon",
    audience: "general",
    intentions: ["hope", "strength"],
    relatedSymbol: "mustard-seed",
    scriptureReference: "Matthew 17:20",
    material: "316L stainless steel + sealed seed",
    priceCents: 3200,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "overseas",
      wholesaleCostCents: 200,
      moq: 10,
      notes: "Sample to confirm bezel seal quality (seed must not loosen).",
    },
    boundaryNote: KEEPSAKE_BOUNDARY,
  },
  "spinner-ring": {
    slug: "spinner-ring",
    name: "Cross Spinner Ring",
    shortLabel: "Spinner Ring",
    tagline: "A small motion to pause and pray.",
    description:
      "A 316L spinning band engraved with a cross — a quiet, tactile cue to slow down, name one concern, and pray instead of spiraling.",
    status: "coming-soon",
    audience: "general",
    intentions: ["anxiety", "peace"],
    relatedSymbol: "cross",
    scriptureReference: "Philippians 4:6",
    material: "316L stainless steel",
    priceCents: 3400,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "overseas",
      wholesaleCostCents: 250,
      moq: 10,
      notes: "Offer multiple band sizes as variants.",
    },
    boundaryNote: KEEPSAKE_BOUNDARY,
  },
  "dove-pendant": {
    slug: "dove-pendant",
    name: "Dove Pendant",
    shortLabel: "Dove Pendant",
    tagline: "A cue toward peace and gentleness.",
    description:
      "A 316L dove pendant — a reminder to pause before reacting, pray honestly, and practice gentleness in a restless moment.",
    status: "coming-soon",
    audience: "general",
    intentions: ["peace", "healing"],
    relatedSymbol: "dove",
    scriptureReference: "John 14:27",
    material: "316L stainless steel",
    priceCents: 3600,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "us-warehouse",
      wholesaleCostCents: 220,
      moq: 5,
    },
    boundaryNote: KEEPSAKE_BOUNDARY,
  },
  "san-judas-medal": {
    slug: "san-judas-medal",
    name: "San Judas Tadeo Medal",
    shortLabel: "San Judas",
    tagline: "Medalla de San Judas Tadeo.",
    description:
      "A gold-finished medal of St Jude (San Judas Tadeo) — a reminder to pray with courage and seek wise, safe support in hard situations.",
    status: "coming-soon",
    audience: "latin-catholic",
    intentions: ["protection", "strength"],
    scriptureReference: "Psalm 121",
    material: "Gold PVD over 316L stainless steel",
    priceCents: 4200,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "tbd",
      wholesaleCostCents: 300,
      moq: 10,
      notes:
        "Verify 316L grade + PVD wear with sample. Do NOT market as 'waterproof / 10-year' (refuted). Confirm correct iconography.",
    },
    boundaryNote: CATHOLIC_KEEPSAKE_NOTE,
  },
  "guadalupe-medal": {
    slug: "guadalupe-medal",
    name: "Virgen de Guadalupe Medal",
    shortLabel: "Guadalupe",
    tagline: "Medalla de la Virgen de Guadalupe.",
    description:
      "A gold-finished medal of the Virgen de Guadalupe — a meaningful reminder to pray for family, comfort, and care.",
    status: "coming-soon",
    audience: "latin-catholic",
    intentions: ["protection", "family", "healing"],
    scriptureReference: "Psalm 34:18",
    material: "Gold PVD over 316L stainless steel",
    priceCents: 4200,
    currency: "USD",
    images: [],
    sourcing: {
      channel: "tbd",
      wholesaleCostCents: 300,
      moq: 10,
      notes:
        "Confirm approved Guadalupe iconography for a devout audience. Sample-verify plating.",
    },
    boundaryNote: CATHOLIC_KEEPSAKE_NOTE,
  },
} as const satisfies Record<string, Product>;

export type ProductSlug = keyof typeof products;

export const productSlugs = Object.keys(products) as ProductSlug[];

export const allProducts: readonly Product[] = Object.values(products);

export function getProduct(slug: string): Product | undefined {
  return products[slug as ProductSlug];
}

export function getProductsByIntention(
  intention: StartFaithPathSlug,
): Product[] {
  return allProducts.filter((product) =>
    product.intentions.includes(intention),
  );
}

export function formatPrice(cents: number, currency: "USD" = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}
