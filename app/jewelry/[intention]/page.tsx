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
  PageHero,
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
    <PageShell
      active="jewelry"
      hero={
        <PageHero
          icon={Gem}
          eyebrow="Faith symbol reminder"
          title={details.pageTitle}
          subtitle={details.intro}
          breadcrumbs={
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Home", path: "/" },
                { name: "Faith Symbols", path: "/jewelry" },
                { name: details.relatedTheme, path: `/jewelry/${intention}` },
              ]}
            />
          }
        />
      }
    >
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
      <div className="max-w-5xl">
        <StatusNote>
          A symbol can help you remember to pray and return to Scripture — a
          reminder, not a charm or a guarantee.
        </StatusNote>
      </div>

      {linkedFaithPath && linkedFaithPath.slug === startPath.slug ? (
        <FaithJourneyNav pathSlug={linkedFaithPath.slug} currentStep="carry" />
      ) : null}

      <section className="mt-8 rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-4 sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-gold-700">
            Symbol reminder explanation
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            {details.reminderDirection}
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-600">
            {details.represents}
          </p>
          <p className="mt-3 text-base leading-7 text-ink-600">
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

      <section className="mt-8 rounded-lg bg-green-700 p-6 text-cream-fg shadow-elev-green-4 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-300">
              A gentle reminder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              A reminder, kept close.
            </h2>
            <p className="mt-3 text-base leading-7 text-cream-fg/84">
              {details.symbolReminder} Meaningful as a cue to pray and return to
              Scripture — never a charm or a guarantee of an outcome.
            </p>
          </div>
          <Link
            href="/jewelry"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream-fg px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-cream-fg"
          >
            Main Faith Symbols page
            <Gem size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-4 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-gold-700">
              Related symbols
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Learn the reminders behind this path.
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-600">
              These symbols are educational reminders only. Let them point back
              to Scripture, prayer, reflection, and wise care.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {relatedSymbols.map((symbol) => (
              <Link
                key={symbol.slug}
                href={`/jewelry/symbols/${symbol.slug}`}
                className="group rounded-lg border border-line-300 bg-cream-300 p-4 transition hover:border-gold-500 hover:bg-cream-100"
              >
                <h3 className="font-serif text-2xl font-semibold leading-tight text-ink-900">
                  {symbol.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  {symbol.reminder}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-600">
                  Read meaning
                  <ArrowRight size={15} strokeWidth={1.8} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-note-line bg-note-bg p-6 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-700">
              Free first, always
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              The guidance is always free.
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-600">
              The Scripture, prayer, and reflection here stand on their own and
              stay free. A keepsake is simply an optional way to keep the
              reminder close — it points to faith, never replaces it.
            </p>
          </div>
          <ShieldCheck className="size-10 text-green-600" strokeWidth={1.8} />
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
    <section className="rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3">
      <span className="grid size-11 place-items-center rounded-full bg-mist-200 text-green-600">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <p className="mt-5 text-sm font-semibold uppercase text-gold-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ink-900">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-ink-600">{body}</p>
      <Link
        href={href}
        className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-gold-700"
      >
        {cta}
        <ArrowRight size={15} strokeWidth={1.8} />
      </Link>
    </section>
  );
}
