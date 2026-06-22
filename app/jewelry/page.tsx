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
      {/* Hero — emotional hook: identity and memory, not fear. */}
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_82%_12%,rgba(239,204,139,0.22),transparent_46%),radial-gradient(circle_at_12%_88%,rgba(255,250,240,0.08),transparent_40%),linear-gradient(135deg,#16241c_0%,#203d30_52%,#101510_100%)] px-5 py-12 text-[#fffaf0] shadow-[0_28px_90px_rgba(37,65,50,0.22)] ring-1 ring-[#e9c985]/15 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-[#e9c985]">
            <Gem size={15} strokeWidth={1.8} />
            Faith Symbols
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.04] text-[#fffaf0] sm:text-6xl">
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
      <section data-reveal className="mt-14 sm:mt-16">
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

      {/* Integrity as a brand value, not a buried disclaimer. */}
      <section className="mt-14 rounded-[1.5rem] border border-[#dfcfb2] bg-[#fffaf1]/70 p-7 text-center shadow-[0_18px_44px_rgba(71,55,35,0.05)] sm:mt-16 sm:p-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6220]">
            A reminder, never a charm
          </p>
          <p className="mt-4 font-serif text-xl leading-relaxed text-[#2b251d] sm:text-2xl">
            A symbol points to faith; it never replaces it. Nothing we make will
            ever promise protection, healing, luck, or spiritual power — and we
            will always say so plainly.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#625b51]">
            The meaning is never in the object. It is in the Scripture, the
            prayer, and the God it quietly points you back to.
          </p>
        </div>
      </section>

      {/* Waitlist — the honest conversion step. */}
      <section className="mt-14 overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top_right,rgba(233,201,133,0.16),transparent_46%),linear-gradient(135deg,#203d30,#15241b)] p-7 text-[#fffaf0] shadow-[0_28px_80px_rgba(40,71,55,0.22)] sm:mt-16 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
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
      <section data-reveal id="symbols" className="mt-14 scroll-mt-24 sm:mt-16">
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

          <div className="grid gap-x-6 gap-y-0 sm:grid-cols-2">
            {Object.values(jewelryIntentions).map((intention) => (
              <Link
                key={intention.slug}
                href={`/jewelry/${intention.slug}`}
                className="group border-t border-[#dfcfb2] py-4 transition hover:border-[#c49c52]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-[#241f19]">
                    {intention.relatedTheme}
                  </h3>
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 text-[#8f6220] transition group-hover:translate-x-1"
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

function MomentCard({
  symbol,
}: {
  symbol: (typeof momentSymbols)[number];
}) {
  const Icon = symbol.icon;

  return (
    <Link
      href={`/jewelry/symbols/${symbol.slug}`}
      className="group relative flex flex-col rounded-2xl border border-[#e4d6bd] bg-[#fffaf1]/75 p-6 shadow-[0_16px_40px_rgba(71,55,35,0.06)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_24px_56px_rgba(71,55,35,0.1)] sm:p-7"
    >
      <span className="relative grid size-16 place-items-center rounded-full border border-[#e9c985]/55 bg-[radial-gradient(circle,#fffaf1,#f1e8d4)] text-[#254737] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_24px_rgba(71,55,35,0.1)]">
        <Icon size={26} strokeWidth={1.6} />
      </span>
      <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
        {symbol.moment}
      </h3>
      <p className="mt-3 text-base leading-7 text-[#625b51]">{symbol.craft}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e4d6bd] pt-4">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6220]">
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
      className="group flex min-w-0 items-center gap-3.5 rounded-xl border border-[#e4d6bd] bg-[#fffaf1]/70 px-4 py-3.5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_14px_30px_rgba(71,55,35,0.08)]"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#e9c985]/45 bg-[radial-gradient(circle,#fffaf1,#f1e8d4)] text-[#254737] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
        <Icon size={18} strokeWidth={1.7} />
      </span>
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
