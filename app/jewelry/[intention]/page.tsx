import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BookOpenText,
  Gem,
  Heart,
  Leaf,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import { FaithJourneyNav } from "@/app/components/FaithJourneyNav";
import { getFaithPathBySlug } from "@/lib/faith-paths";
import {
  BackButton,
  Breadcrumbs,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import {
  getJewelryIntention,
  jewelryIntentionKeys,
} from "../intentions";
import { getFaithSymbol } from "../symbol-data";
import { getStartFaithPathBySlug } from "@/lib/faith-paths";
import { JsonLd } from "@/app/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return jewelryIntentionKeys.map((intention) => ({ intention }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ intention: string }>;
}): Promise<Metadata> {
  const { intention } = await params;
  const details = getJewelryIntention(intention);

  if (!details) {
    return {
      title: "Faith Symbol Reminder",
      description:
        "Learn about Christian symbols as reminders of prayer, Scripture, and faith.",
    };
  }

  return {
    title: details.pageTitle,
    description: `${details.reminderDirection} Learn how Christian symbols can serve as reminders of Scripture and prayer, not guarantees or charms.`,
    alternates: {
      canonical: `/jewelry/${intention}`,
    },
  };
}

export default async function JewelryIntentionPage({
  params,
}: {
  params: Promise<{ intention: string }>;
}) {
  const { intention } = await params;
  const details = getJewelryIntention(intention);
  const startPath = getStartFaithPathBySlug(intention);
  const linkedFaithPath = startPath
    ? getFaithPathBySlug(startPath.linkedFaithPathSlug)
    : undefined;
  const relatedSymbols = details
    ? details.relatedSymbols.flatMap((symbolSlug) => {
        const symbol = getFaithSymbol(symbolSlug);
        return symbol ? [symbol] : [];
      })
    : [];

  if (!details || !startPath) {
    redirect("/jewelry");
  }

  return (
    <PageShell active="jewelry">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Faith Symbols", path: "/jewelry" },
            { name: details.relatedTheme, path: `/jewelry/${intention}` },
          ]),
          articleSchema({
            headline: details.pageTitle,
            description: details.intro,
            path: `/jewelry/${intention}`,
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Faith Symbols", path: "/jewelry" },
          { name: details.relatedTheme, path: `/jewelry/${intention}` },
        ]}
      />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro
          icon={Gem}
          eyebrow="Faith symbol reminder"
          title={details.pageTitle}
          subtitle={details.intro}
        />
        <StatusNote>
          Symbols can help some people remember prayer and Scripture. They are
          not promises, guarantees, charms, luck items, or sources of spiritual
          power.
        </StatusNote>
      </div>

      {linkedFaithPath && linkedFaithPath.slug === startPath.slug ? (
        <FaithJourneyNav pathSlug={linkedFaithPath.slug} currentStep="carry" />
      ) : null}

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-[#8f6220]">
            Symbol reminder explanation
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            {details.reminderDirection}
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            {details.represents}
          </p>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            In ordinary moments, this kind of reminder can gently point back to
            prayer, Scripture, and one faithful next step. The meaning belongs
            to faith and practice, not to the object itself.
          </p>
        </div>
      </section>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <InfoPanel
          icon={BookOpenText}
          eyebrow="Related Scripture"
          title={details.scriptureReference}
          body={`Use ${details.scriptureReference} as a starting reference for reflection. Read the surrounding passage with context and prayer.`}
          href={startPath.scriptureRoute}
          cta="Read related Scripture"
        />
        <InfoPanel
          icon={Heart}
          eyebrow="Prayer guidance"
          title={details.relatedTheme}
          body={details.prayerGuidance}
          href={startPath.prayerRoute}
          cta="Open related prayer"
        />
        <InfoPanel
          icon={PenLine}
          eyebrow="Reflection"
          title="A question to carry"
          body={details.reflectionPrompt}
          href={startPath.startRoute}
          cta="Return to Faith Path"
        />
      </div>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Clear boundary
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              A reminder, not a result.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              {details.symbolReminder} It should never be treated as a source
              of power, protection, healing, luck, blessing, or spiritual
              outcome.
            </p>
          </div>
          <Link
            href="/jewelry"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
          >
            Main Faith Symbols page
            <Gem size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.06)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#8f6220]">
              Related symbols
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Learn the reminders behind this path.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              These symbols are educational reminders only. Let them point back
              to Scripture, prayer, reflection, and wise care.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {relatedSymbols.map((symbol) => (
              <Link
                key={symbol.slug}
                href={`/jewelry/symbols/${symbol.slug}`}
                className="group rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 transition hover:border-[#c49c52] hover:bg-[#fffdf7]"
              >
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {symbol.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#625b51]">
                  {symbol.reminder}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#254737]">
                  Read meaning
                  <ArrowRight size={15} strokeWidth={1.8} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#8f6220]">
              Free guidance first
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Guidance stays free and content-first.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              A symbol can be meaningful as a reminder, but the Scripture,
              prayer, and reflection guidance stands on its own and does not
              depend on any physical object. The reminder is never the source
              of faith, care, wisdom, or spiritual results.
            </p>
          </div>
          <ShieldCheck className="size-10 text-[#254737]" strokeWidth={1.8} />
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/jewelry" label="Back to Faith Symbols" />
        <SecondaryButton href={startPath.startRoute}>
          Faith Quiz
        </SecondaryButton>
        <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
        <SecondaryButton href={startPath.prayerRoute}>
          Prayer Guide
        </SecondaryButton>
      </div>
    </PageShell>
  );
}

function InfoPanel({
  icon: Icon,
  eyebrow,
  title,
  body,
  href,
  cta,
}: {
  icon: typeof Leaf;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)]">
      <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <p className="mt-5 text-sm font-semibold uppercase text-[#8f6220]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#625b51]">{body}</p>
      <Link
        href={href}
        className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#8f6220]"
      >
        {cta}
        <ArrowRight size={15} strokeWidth={1.8} />
      </Link>
    </section>
  );
}
