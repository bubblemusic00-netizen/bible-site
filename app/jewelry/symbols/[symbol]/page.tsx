import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
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
  BackButton,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "@/app/components/site-ui";
import {
  getFaithSymbol,
  symbolKeys,
  type FaithSymbol,
  type SymbolIconKey,
} from "../../symbol-data";

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

export function generateStaticParams() {
  return symbolKeys.map((symbol) => ({ symbol }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ symbol: string }>;
}): Promise<Metadata> {
  const { symbol } = await params;
  const details = getFaithSymbol(symbol);

  if (!details) {
    return {
      title: "Christian Symbol Meaning",
      description:
        "Learn about Christian symbols as reminders of Scripture, prayer, and faith.",
    };
  }

  return {
    title: `${details.shortLabel} Symbol Meaning`,
    description: `${details.name} explained as a Christian reminder of Scripture, prayer, and faith, with clear boundaries against treating symbols as guarantees or power.`,
  };
}

export default async function SymbolPage({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const details = getFaithSymbol(symbol);

  if (!details) {
    redirect("/jewelry");
  }

  const Icon = iconMap[details.icon];

  return (
    <PageShell active="jewelry">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={Icon}
          eyebrow="Christian symbol meaning"
          title={`${details.name} Symbol Meaning`}
          subtitle={details.meaning}
        />
        <StatusNote>
          This symbol is explained as a reminder of faith and practice. It is
          not a charm, guarantee, or source of spiritual power.
        </StatusNote>
      </div>

      <section className="mt-9 overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] shadow-[0_24px_70px_rgba(71,55,35,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid place-items-center border-b border-[#dfcfb2] bg-[#f2f5ee] p-8 lg:border-b-0 lg:border-r">
            <div className="grid size-28 place-items-center rounded-full border border-[#d8ddcf] bg-[#fffaf1] text-[#254737] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_20px_45px_rgba(40,71,55,0.1)]">
              <Icon size={46} strokeWidth={1.55} />
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-9">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              What it can remind someone of
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              A reminder for ordinary faithfulness.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#625b51]">
              {details.reminder}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase text-[#9a6a24]">
              Scripture reference
            </p>
            <p className="mt-2 text-base leading-7 text-[#625b51]">
              {details.scriptureReference}
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <RelatedPanel
          icon={BookOpenText}
          eyebrow="Related Bible reading"
          link={details.relatedBible}
        />
        <RelatedPanel
          icon={Heart}
          eyebrow="Related prayer"
          link={details.relatedPrayer}
        />
        <RelatedPanel
          icon={Gem}
          eyebrow="Related Faith Quiz path"
          link={details.relatedFaithPath}
        />
      </div>

      <section className="mt-8 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Boundary note
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              What this symbol does not mean.
            </h2>
          </div>
          <div className="space-y-3 text-base leading-7 text-[#625b51]">
            <p>{details.boundaryNote}</p>
            <p>
              A symbol can be meaningful when it points back to prayer,
              Scripture, humility, and wise action. It should never replace
              faith, repentance, community, care, or the work of actually
              following what Scripture teaches.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#e9c985]">
            Careful use
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Let the symbol point back to the practice.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
            {details.futureReminderUse} The symbol is only helpful if it keeps
            attention on Scripture, prayer, and one faithful next step.
          </p>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/jewelry" label="Back to Faith Symbols" />
        <SecondaryButton href="/guides/christian-symbols">
          Symbols Guide
        </SecondaryButton>
        <SecondaryButton href="/content-boundaries">
          Content Boundaries
        </SecondaryButton>
      </div>
    </PageShell>
  );
}

function RelatedPanel({
  icon: Icon,
  eyebrow,
  link,
}: {
  icon: LucideIcon;
  eyebrow: string;
  link: FaithSymbol["relatedBible"];
}) {
  return (
    <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)]">
      <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <p className="mt-5 text-sm font-semibold uppercase text-[#9a6a24]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
        {link.label}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#625b51]">
        {link.description}
      </p>
      <Link
        href={link.href}
        className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#9a6a24]"
      >
        Open
        <ArrowRight size={15} strokeWidth={1.8} />
      </Link>
    </section>
  );
}
