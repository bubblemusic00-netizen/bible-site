import {
  Bird,
  Cross,
  Flame,
  Flower2,
  ScrollText,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/lib/products";

// Per-product engraved keepsake medallion. Stands in for real product
// photography until the shop is live — but tied to each product's actual
// attributes (icon by slug/symbol, metal finish by material) so every card
// reads as a distinct piece, not a repeated placeholder glyph.

type Shape = "disc" | "ring" | "bar";

const iconBySlug: Record<string, LucideIcon> = {
  "cross-necklace": Cross,
  "verse-bar-necklace": ScrollText,
  "mustard-seed-necklace": Sprout,
  "spinner-ring": Cross,
  "dove-pendant": Bird,
  "san-judas-medal": Flame,
  "guadalupe-medal": Flower2,
};

const shapeBySlug: Record<string, Shape> = {
  "spinner-ring": "ring",
  "verse-bar-necklace": "bar",
};

function isGold(material: string) {
  return /gold/i.test(material);
}

export function ProductMedallion({ product }: { product: Product }) {
  const Icon = iconBySlug[product.slug] ?? Cross;
  const shape = shapeBySlug[product.slug] ?? "disc";
  const gold = isGold(product.material);

  // Metallic rim + face, finish-aware.
  const rim = gold
    ? "linear-gradient(135deg,#f6dea0 0%,#caa039 42%,#8a6418 68%,#ecd189 100%)"
    : "linear-gradient(135deg,#f1f4f7 0%,#bcc4cb 42%,#828b93 68%,#e2e7eb 100%)";
  const face = gold
    ? "radial-gradient(circle at 36% 28%,#fff4d4 0%,#e6c573 52%,#b98a2d 100%)"
    : "radial-gradient(circle at 36% 28%,#ffffff 0%,#d9dfe4 52%,#9ca5ad 100%)";
  const iconColor = gold ? "#6c4a10" : "#49525a";
  const glow = gold
    ? "radial-gradient(circle,rgba(201,160,57,0.22),transparent 70%)"
    : "radial-gradient(circle,rgba(120,134,146,0.2),transparent 70%)";

  // Engraved look: light catch on top edge, shadow on bottom.
  const engrave = {
    color: iconColor,
    filter:
      "drop-shadow(0 1px 0 rgba(255,255,255,0.55)) drop-shadow(0 -1px 0 rgba(0,0,0,0.22))",
  } as const;

  return (
    <div className="relative grid h-44 place-items-center overflow-hidden border-b border-line-200 bg-[radial-gradient(circle_at_30%_22%,#fbf8f0,#eef1e8)]">
      {/* ambient finish glow */}
      <div
        className="pointer-events-none absolute size-52 rounded-full"
        style={{ background: glow }}
      />
      {/* guide ring */}
      <div className="pointer-events-none absolute size-36 rounded-full border border-note-line/55" />

      {/* bail loop (necklaces + medals only) */}
      {shape !== "ring" ? (
        <div
          className="absolute top-7 size-4 rounded-full"
          style={{
            background: rim,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 4px rgba(40,30,10,0.18)",
          }}
        >
          <div className="absolute inset-[3px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fbf8f0,#e7e2d6)]" />
        </div>
      ) : null}

      {shape === "bar" ? (
        // Engravable verse bar
        <div
          className="relative mt-3 flex h-14 w-28 items-center justify-center rounded-full px-3"
          style={{
            background: rim,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.55), 0 14px 26px rgba(40,30,10,0.16)",
          }}
        >
          <div
            className="flex h-9 w-[6.5rem] items-center justify-center rounded-full"
            style={{ background: face }}
          >
            <span
              className="font-serif text-xs font-semibold tracking-wide"
              style={engrave}
            >
              {product.scriptureReference ?? "Your verse"}
            </span>
          </div>
        </div>
      ) : shape === "ring" ? (
        // Spinner ring — band with engraved cross
        <div
          className="relative mt-2 grid size-28 place-items-center rounded-full"
          style={{
            background: rim,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.55), 0 16px 30px rgba(40,30,10,0.16)",
          }}
        >
          <div className="grid size-[5.2rem] place-items-center rounded-full bg-[radial-gradient(circle_at_36%_30%,#fbf8f0,#eef1e8)]">
            <Icon size={30} strokeWidth={1.5} style={engrave} />
          </div>
        </div>
      ) : (
        // Standard medallion disc
        <div
          className="relative mt-3 grid size-28 place-items-center rounded-full"
          style={{
            background: rim,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.55), 0 16px 32px rgba(40,30,10,0.16)",
          }}
        >
          <div
            className="grid size-[5.6rem] place-items-center rounded-full"
            style={{ background: face }}
          >
            <Icon size={40} strokeWidth={1.4} style={engrave} />
          </div>
        </div>
      )}
    </div>
  );
}
