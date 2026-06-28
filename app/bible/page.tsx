import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import {
  HeroPrimary,
  HeroSecondary,
  PageHero,
  PageShell,
  StatusNote,
} from "../components/site-ui";
import { groupedBibleReadings, supportedBibleChapters } from "./bible-data";

export const metadata: Metadata = {
  alternates: { canonical: "/bible" },
  title: "Guided Bible Readings | Scripture, Reflection, and Prayer",
  description:
    "Explore a curated library of finished KJV guided Bible readings with Scripture, context, reflection questions, prayer starters, and next steps.",
};

export default function BiblePage() {
  const readingCount = supportedBibleChapters.length;

  return (
    <PageShell
      active="bible"
      hero={
        <PageHero
          icon={BookOpenText}
          eyebrow="Guided readings"
          title="Guided Bible Readings"
          subtitle="A focused library of finished Scripture readings — each with context, reflection, prayer, and one simple next step."
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HeroPrimary href={supportedBibleChapters[0].href}>
              Start reading
              <ArrowRight size={16} strokeWidth={1.8} />
            </HeroPrimary>
            <HeroSecondary href="/start">Take the Faith Quiz</HeroSecondary>
            <HeroSecondary href="/guides/start-reading-the-bible">
              How to Start Reading
            </HeroSecondary>
          </div>
          <p className="mt-5 text-sm font-semibold leading-6 text-cream-fg-muted/72">
            {readingCount} complete guided readings, organized by theme.
          </p>
        </PageHero>
      }
    >
      <div className="max-w-5xl">
        <StatusNote>
          Selah currently offers a focused library of finished guided
          readings rather than a full Bible database. Full Scripture text is
          presented from the King James Version (KJV), a Bible translation
          widely used in public-domain contexts in the United States so guided
          readings can be offered openly and consistently.
        </StatusNote>
      </div>

      <div data-reveal-stagger className="mt-9 grid gap-14">
        {groupedBibleReadings.map((group) => (
          <section
            key={group.key}
            className="border-t border-line-300 pt-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-semibold uppercase tracking-label text-gold-700">
                {group.title}
              </p>
              <span className="text-xs font-semibold uppercase tracking-label text-gold-600">
                {group.readings.length} readings
              </span>
            </div>
            <h2 className="mt-2 max-w-2xl font-serif text-card font-semibold leading-tight text-ink-900 sm:text-[1.95rem]">
              {group.description}
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {group.readings.map((reading) => (
                <Link
                  key={reading.href}
                  href={reading.href}
                  className="group flex min-w-0 flex-col rounded-xl border border-line-200 bg-cream-200/70 p-6 shadow-elev-2 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold-500 hover:bg-cream-100 hover:shadow-elev-4"
                >
                  <span className="block text-xs font-semibold uppercase tracking-label text-gold-700">
                    {reading.theme}
                  </span>
                  <span className="mt-3 block font-serif text-card font-semibold leading-heading text-ink-900">
                    {reading.title}
                  </span>
                  <span className="mt-4 block h-px w-10 bg-line-400 transition-all duration-200 group-hover:w-16 group-hover:bg-gold-500" />
                  <span className="mt-4 block text-base leading-7 text-ink-600">
                    {reading.description}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-green-600">
                    Read
                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-lg bg-green-700 p-6 text-cream-fg shadow-elev-green-4 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-300">
              Reading with care
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Scripture, context, reflection, and prayer belong together.
            </h2>
            <p className="mt-3 text-base leading-7 text-cream-fg/84">
              These readings use the King James Version and pair the text with
              non-denominational reflection guidance. The site is independent
              and is not an official church, Bible publisher, or religious
              authority.
            </p>
          </div>
          <Link
            href={supportedBibleChapters[0].href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream-fg px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-cream-fg"
          >
            Start first reading
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <div className="mt-7 max-w-5xl">
        <StatusNote>
          These readings are complete, polished, and built for Scripture,
          context, reflection, and prayer. New to Scripture? Start with the
          beginner reading guide. Faith symbols are optional reminders, not
          guarantees.
        </StatusNote>
      </div>
    </PageShell>
  );
}
