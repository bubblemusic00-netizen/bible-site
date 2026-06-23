import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Bird,
  BookOpenText,
  Circle,
  Cross,
  Crown,
  Fish,
  Gem,
  HandHeart,
  Heart,
  Lamp,
  Leaf,
  Shield,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { PageShell, StatusNote } from "../components/site-ui";
import { NewsletterSignup } from "../components/forms";
import { jewelryIntentions } from "./intentions";
import {
  groupedSymbols,
  type FaithSymbol,
  type SymbolIconKey,
} from "./symbol-data";

export const metadata: Metadata = {
  alternates: { canonical: "/jewelry" },
  title: "Christian Faith Symbols and Daily Reminders",
  description:
    "Faith symbols as something to keep close — a verse and a moment you carry into the day. Reminders, never charms or guarantees. Keepsakes coming soon.",
};

const iconMap: Record<SymbolIconKey, LucideIcon> = {
  anchor: Anchor,
  bird: Bird,
  book: BookOpenText,
  circle: Circle,
  cross: Cross,
  crown: Crown,
  fish: Fish,
  branch: Leaf,
  hands: HandHeart,
  heart: Heart,
  lamp: Lamp,
  leaf: Leaf,
  shield: Shield,
  sprout: Sprout,
};

// The few symbols people know best, framed as a moment a person is carrying —
// the felt need first, the object second. Verses are KJV-accurate references.
const momentSymbols = [
  {
    slug: "anchor",
    name: "The Anchor",
    moment: "For the season you are waiting through.",
    verse: "Hebrews 6:19",
    craft:
      "Hope as an anchor of the soul — a small, steadying weight to hold when the ground feels unsure.",
    icon: Anchor,
  },
  {
    slug: "dove",
    name: "The Dove",
    moment: "For the moment before you react.",
    verse: "John 14:27",
    craft:
      "Peace worn close to the collarbone — a quiet cue to pause, soften, and pray before you answer.",
    icon: Bird,
  },
  {
    slug: "cross",
    name: "The Cross",
    moment: "For when you need to begin again.",
    verse: "Luke 9:23",
    craft:
      "Mercy you can return to — humility, forgiveness, and a fresh start, kept where you will see it.",
    icon: Cross,
  },
  {
    slug: "open-bible",
    name: "The Open Bible",
    moment: "For carrying the Word into the day.",
    verse: "2 Timothy 3:16",
    craft:
      "A reminder to read slowly and let one true verse shape the very next step you take.",
    icon: BookOpenText,
  },
] as const;

export default function JewelryPage() {
  return (
    <PageShell active="jewelry">
      {/* Hero — a lit, textured surface with a single precious object. */}
      <section
        className="relative isolate overflow-hidden rounded-[2rem] px-5 py-20 text-[#fffaf0] shadow-[0_28px_90px_rgba(37,65,50,0.26)] ring-1 ring-[#e9c985]/15 sm:px-10 sm:py-28 lg:px-14"
        style={{
          background:
            "radial-gradient(120% 92% at 30% 0%, #304b3a 0%, #1c3026 54%, #10201a 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_40%_at_72%_6%,rgba(233,201,133,0.18),transparent_62%)]"
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Medallion icon={Cross} size={112} tone="dark" shimmer />
          </div>
          <p className="mt-8 inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-[#e9c985]">
            <Gem size={15} strokeWidth={1.8} />
            Faith Symbols
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.0] tracking-[-0.02em] text-[#fffaf0] sm:text-7xl">
            Keep what steadies you close.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f1eadf]/88 sm:text-lg">
            A verse worn at the collarbone. A small thing you can hold when the
            day gets loud. Not a charm — a reminder that brings your heart back
            to prayer in the middle of ordinary hours.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/start"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-7 py-3 text-sm font-semibold text-[#203d30] shadow-[0_18px_44px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0] hover:shadow-[0_22px_56px_rgba(233,201,133,0.3)]"
            >
              Find the verse you would keep close
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#symbols"
              className="group inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-[#f1eadf] transition hover:text-[#fffaf0]"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-[#f3dfb6]/70">
                Explore the symbols
              </span>
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3dfb6]/80">
            <span className="h-px w-6 bg-[#f3dfb6]/40" />
            Keepsakes crafted in small batches — coming soon
            <span className="h-px w-6 bg-[#f3dfb6]/40" />
          </p>
        </div>
      </section>

      {/* Felt need — make the need real before the object. */}
      <section className="mt-12 text-center sm:mt-16">
        <div data-reveal className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6220]">
            Why a reminder
          </p>
          <p className="mt-5 font-serif text-2xl leading-[1.45] text-[#2b251d] sm:text-[2rem] sm:leading-[1.4]">
            The verse you keep forgetting. The prayer you mean to carry. One
            small thing to hold on the hard afternoons — so faith is not only
            something you believe, but something you can reach for.
          </p>
        </div>
      </section>

      {/* Symbols as moments you are carrying — desire through specificity. */}
      <section className="mt-14 sm:mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6220]">
            A reminder for the moment you are in
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Start with what you are carrying.
          </h2>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {momentSymbols.map((symbol) => (
            <MomentCard key={symbol.slug} symbol={symbol} />
          ))}
        </div>
      </section>

      {/* Integrity as a brand creed, not a buried disclaimer. */}
      <section className="mt-14 rounded-[1.5rem] border border-[#e6d8bd] bg-[#fbf6ea] p-8 text-center shadow-[0_1px_2px_rgba(60,45,25,0.05),0_18px_40px_-18px_rgba(60,45,25,0.18),inset_0_1px_0_rgba(255,255,255,0.7)] sm:mt-16 sm:p-12">
        <div className="mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f6220]">
            <span className="h-px w-8 bg-[#d8c5a3]" />
            A reminder, never a charm
            <span className="h-px w-8 bg-[#d8c5a3]" />
          </p>
          <p className="mt-6 font-serif text-2xl font-medium leading-[1.45] text-[#2b251d] sm:text-[1.85rem]">
            A symbol points to faith; it never replaces it. Nothing we make will
            ever promise protection, healing, luck, or spiritual power — and we
            will always say so plainly.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#5f574a]">
            The meaning is never in the object. It is in the Scripture, the
            prayer, and the God it quietly points you back to.
          </p>
        </div>
      </section>

      {/* Waitlist — the honest conversion step, on the same lit surface as the hero. */}
      <section
        className="relative isolate mt-14 overflow-hidden rounded-[1.5rem] px-7 py-11 text-[#fffaf0] shadow-[0_28px_80px_rgba(40,71,55,0.24)] ring-1 ring-[#e9c985]/15 sm:mt-16 sm:px-10 sm:py-14"
        style={{
          background:
            "radial-gradient(120% 100% at 70% 0%, #304b3a 0%, #1c3026 56%, #10201a 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_44%_at_72%_4%,rgba(233,201,133,0.16),transparent_64%)]"
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e9c985]">
            The first pieces are being made
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Be the first to keep one close.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#fff8e8]/85">
            We are crafting the first faith-symbol keepsakes in small batches —
            solid, simple, made to last a lifetime of ordinary days. Leave your
            email to be the first to know when they are ready. No spam, ever.
          </p>
          <div className="mx-auto mt-7 max-w-md text-left">
            <NewsletterSignup
              heading="Join the first-access list"
              description="One quiet email when the first keepsakes are ready — nothing else."
              cta="Notify me first"
            />
          </div>
        </div>
      </section>

      {/* Browse the full library (SEO + exploration). */}
      <section id="symbols" className="mt-14 scroll-mt-24 sm:mt-16">
        <div className="grid gap-5 lg:grid-cols-[0.4fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
              The full library
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Fifteen symbols, each with its verse.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#625b51]">
            Every entry carries a meaning, a Scripture reference, a reminder,
            and a clear boundary — so the symbol points back to faith and never
            stands in for it.
          </p>
        </div>

        <div className="mt-10 space-y-12">
          {groupedSymbols.map((group) => (
            <div key={group.key}>
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                  {group.title}
                </span>
                <span className="h-px flex-1 bg-[#e4d6bd]" />
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#625b51]">
                {group.description}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.symbols.map((symbol) => (
                  <SymbolIndexLink key={symbol.slug} symbol={symbol} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect a reminder to Scripture + prayer (funnel to the quiz). */}
      <section className="mt-14 border-y border-[#dfcfb2] py-8 sm:mt-16 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
              Explore by Faith Path
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Let a reminder point back to Scripture and prayer.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              If a symbol is meaningful, let it lead to the Faith Quiz result:
              Scripture, prayer, reflection, and one careful next step.
            </p>
          </div>

          <div className="grid gap-x-4 gap-y-0 sm:grid-cols-2">
            {Object.values(jewelryIntentions).map((intention) => (
              <Link
                key={intention.slug}
                href={`/jewelry/${intention.slug}`}
                className="group rounded-xl border-t border-[#e4d6bd] px-4 py-5 transition duration-200 hover:border-transparent hover:bg-[#fbf6ea]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-[#241f19] transition-colors group-hover:text-[#7a5113]">
                    {intention.relatedTheme}
                  </h3>
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 text-[#c9b79a] transition group-hover:translate-x-1 group-hover:text-[#8f6220]"
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-[#625b51]">
                  {intention.reminderDirection}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 max-w-5xl">
        <StatusNote>
          Faith symbols are reminders of prayer, Scripture, and belief. They are
          not guarantees of protection, healing, blessing, luck, salvation, or
          spiritual results.
        </StatusNote>
      </div>
    </PageShell>
  );
}

// CSS-engraved gold medallion: a struck-metal feel without product photos.
// Conic-gradient rim (brushed-gold bevel) + recessed inner face + debossed glyph.
function Medallion({
  icon: Icon,
  size = 72,
  tone = "light",
  shimmer = false,
}: {
  icon: LucideIcon;
  size?: number;
  tone?: "light" | "dark";
  shimmer?: boolean;
}) {
  const face =
    tone === "dark"
      ? "radial-gradient(circle at 50% 32%, #294a39, #16271d)"
      : "radial-gradient(circle at 50% 32%, #fdf7e7, #ece0c4)";
  return (
    <span
      aria-hidden
      className="relative grid shrink-0 place-items-center rounded-full p-[2px] shadow-[0_12px_28px_rgba(71,55,35,0.22)]"
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 140deg, #a87f3c, #f3dca0, #c79a4d, #eaddae, #9c7333, #f0d99e, #a87f3c)",
      }}
    >
      <span
        className={`relative grid size-full place-items-center overflow-hidden rounded-full ${tone === "dark" ? "text-[#f0dca6]" : "text-[#6a5526]"} shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.8),inset_0_-2px_5px_rgba(120,95,45,0.3)]`}
        style={{ background: face }}
      >
        <Icon
          size={Math.round(size * 0.4)}
          strokeWidth={1.5}
          className={`relative z-10 ${
            tone === "dark"
              ? "drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
              : "drop-shadow-[0_1px_0_rgba(255,255,255,0.65)]"
          }`}
        />
        <span
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent motion-reduce:hidden ${
            shimmer
              ? "medallion-shimmer"
              : "-translate-x-[260%] -skew-x-[20deg] transition-transform duration-700 ease-out group-hover:translate-x-[460%]"
          }`}
        />
      </span>
    </span>
  );
}

function MomentCard({
  symbol,
}: {
  symbol: (typeof momentSymbols)[number];
}) {
  return (
    <Link
      href={`/jewelry/symbols/${symbol.slug}`}
      className="group relative flex flex-col rounded-[12px] border border-[#e6d8bd] bg-[#fbf6ea] p-7 shadow-[0_1px_2px_rgba(60,45,25,0.05),0_18px_38px_-16px_rgba(60,45,25,0.2),inset_0_1px_0_rgba(255,255,255,0.75)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#c9a86a] hover:shadow-[0_1px_2px_rgba(60,45,25,0.06),0_30px_56px_-18px_rgba(60,45,25,0.28),inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-9"
    >
      <Medallion icon={symbol.icon} size={78} />
      <h3 className="mt-7 font-serif text-[1.85rem] font-medium leading-[1.1] text-[#241f19]">
        {symbol.moment}
      </h3>
      <p className="mt-3 max-w-[34ch] text-base leading-7 text-[#5f574a]">
        {symbol.craft}
      </p>
      <div className="mt-7 flex items-center justify-between gap-3 border-t border-[#e0cfa8]/0 pt-5 [border-image:linear-gradient(90deg,transparent,#d8c5a3,transparent)_1]">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
          {symbol.name} &middot; {symbol.verse}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#254737]">
          Read its meaning
          <ArrowRight
            size={14}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

function SymbolIndexLink({ symbol }: { symbol: FaithSymbol }) {
  const Icon = iconMap[symbol.icon];

  return (
    <Link
      href={`/jewelry/symbols/${symbol.slug}`}
      className="group flex min-w-0 items-center gap-4 rounded-xl border border-[#e4d6bd] bg-[#fffaf1]/70 px-4 py-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_14px_30px_rgba(71,55,35,0.08)]"
    >
      <Medallion icon={Icon} size={54} />
      <span className="min-w-0">
        <span className="block break-words font-serif text-lg font-semibold leading-tight text-[#241f19]">
          {symbol.name}
        </span>
        <span className="mt-0.5 block break-words text-xs font-semibold uppercase tracking-[0.08em] text-[#8f6220]">
          {symbol.scriptureReference}
        </span>
      </span>
      <ArrowRight
        size={15}
        strokeWidth={1.8}
        className="ml-auto shrink-0 text-[#c9b79a] transition group-hover:translate-x-0.5 group-hover:text-[#8f6220]"
      />
    </Link>
  );
}
