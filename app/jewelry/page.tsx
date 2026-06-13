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
import {
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";
import { jewelryIntentions } from "./intentions";
import {
  groupedSymbols,
  type FaithSymbol,
  type SymbolIconKey,
} from "./symbol-data";

export const metadata: Metadata = {
  title: "Christian Faith Symbols and Daily Reminders",
  description:
    "Learn about Christian symbols as daily reminders of Scripture, prayer, and faith. Symbols are reminders, not guarantees or sources of spiritual power.",
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

const featuredSymbolSlugs = [
  "cross",
  "dove",
  "anchor",
  "open-bible",
] as const;

export default function JewelryPage() {
  const featuredSymbols = featuredSymbolSlugs.map((slug) =>
    groupedSymbols.flatMap((group) => group.symbols).find((symbol) => symbol.slug === slug),
  );

  return (
    <PageShell active="jewelry">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={Gem}
          eyebrow="Faith Symbols"
          title="Christian Faith Symbols and Daily Reminders"
          subtitle="A focused library of Christian symbols explained as reminders of Scripture, prayer, faith, humility, hope, and gratitude."
        />
        <StatusNote>
          Symbols can help some people remember what they are praying through
          in ordinary moments. They are not charms, guarantees, or sources of
          spiritual power.
        </StatusNote>
      </div>

      <section className="mt-9 border-y border-[#dfcfb2] py-8 sm:py-10">
        <div className="grid gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Start with meaning
            </p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Symbols are small signs for remembering larger truths.
            </h2>
          </div>
          <div className="space-y-3 text-base leading-7 text-[#625b51]">
            <p>
              A cross, dove, anchor, or open Bible can become a cue to pause,
              pray, return to Scripture, or take one faithful next step.
            </p>
            <p>
              The meaning is not in the object itself. Hope Bible explains
              symbols as memory aids for faith and reflection, never as
              spiritual force, status, luck, or a way to control outcomes.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <SecondaryButton href="/guides/christian-symbols">
                Read the Symbols Guide
              </SecondaryButton>
              <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
              <SecondaryButton href="/content-boundaries">
                Content Boundaries
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid gap-7 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Featured reminders
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Four symbols to begin with.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              These common symbols show how a reminder can connect back to
              Scripture, prayer, and the Faith Quiz without becoming a promise
              or a product.
            </p>
          </div>

          <div className="grid gap-0 border-y border-[#dfcfb2] md:grid-cols-2">
            {featuredSymbols.map((symbol) =>
              symbol ? <FeaturedSymbol key={symbol.slug} symbol={symbol} /> : null,
            )}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid gap-5 lg:grid-cols-[0.36fr_1fr] lg:items-end">
          <div>
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Symbol index
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Explore all fifteen symbols.
          </h2>
          </div>
          <p className="text-base leading-7 text-[#625b51]">
            Each entry includes a meaning, a Scripture reference, a reminder,
            and a clear boundary so the symbol does not become a substitute for
            faith, prayer, or wisdom.
          </p>
        </div>

        <div className="mt-7 space-y-7">
          {groupedSymbols.map((group) => (
            <section
              key={group.key}
              className="grid gap-4 border-t border-[#dfcfb2] pt-6 lg:grid-cols-[0.32fr_1fr]"
            >
              <div>
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#625b51]">
                  {group.description}
                </p>
              </div>
              <div className="grid gap-x-5 gap-y-0 md:grid-cols-3">
                {group.symbols.map((symbol) => (
                  <SymbolIndexLink key={symbol.slug} symbol={symbol} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-12 border-y border-[#dfcfb2] py-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Explore by Faith Path
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Connect a reminder with Scripture and prayer.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              If a symbol is meaningful, let it point back to the Faith Quiz
              result: Scripture, prayer, reflection, and one careful next step.
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
                    className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
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

      <section className="mt-10 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Free guidance first
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              No physical reminder is required.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              The Bible readings, prayers, guides, and Faith Quiz stand on their
              own. A symbol can be helpful only as a humble reminder of prayer,
              Scripture, and careful living.
            </p>
          </div>
          <Link
            href="/guides/christian-symbols"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
          >
            Learn how symbols work
            <BookOpenText size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <div className="mt-7 max-w-5xl">
        <StatusNote>
          Faith symbols are reminders of prayer, Scripture, and belief. They
          are not guarantees of protection, healing, blessing, luck, salvation,
          or spiritual results.
        </StatusNote>
      </div>
    </PageShell>
  );
}

function FeaturedSymbol({ symbol }: { symbol: FaithSymbol }) {
  const Icon = iconMap[symbol.icon];

  return (
    <Link
      href={`/jewelry/symbols/${symbol.slug}`}
      className="group min-w-0 border-b border-[#dfcfb2] py-5 transition hover:bg-[#fffaf1]/70 md:border-r md:px-5 md:odd:pl-0 md:even:border-r-0 lg:first:pl-0 lg:last:pr-0"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <h3 className="mt-4 break-words font-serif text-3xl font-semibold leading-tight text-[#241f19]">
        {symbol.name}
      </h3>
      <p className="mt-3 break-words text-sm leading-6 text-[#625b51]">
        {symbol.reminder}
      </p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#254737]">
        Read meaning <ArrowRight size={15} strokeWidth={1.8} />
      </p>
    </Link>
  );
}

function SymbolIndexLink({ symbol }: { symbol: FaithSymbol }) {
  const Icon = iconMap[symbol.icon];

  return (
    <Link
      href={`/jewelry/symbols/${symbol.slug}`}
      className="group flex min-w-0 items-start gap-3 border-t border-[#e2d4ba] py-4 transition hover:border-[#c49c52]"
    >
      <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
        <Icon size={17} strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block break-words font-serif text-xl font-semibold leading-tight text-[#241f19]">
          {symbol.name}
        </span>
        <span className="mt-1 block break-words text-sm leading-6 text-[#625b51]">
          {symbol.scriptureReference}
        </span>
      </span>
    </Link>
  );
}
