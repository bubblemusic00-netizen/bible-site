import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Heart,
} from "lucide-react";
import {
  HeroPrimary,
  HeroSecondary,
  PageHero,
  PageShell,
  StatusNote,
} from "../components/site-ui";
import { groupedPrayerPaths, prayerPathKeys, prayerPaths } from "./prayer-paths";

export const metadata: Metadata = {
  alternates: { canonical: "/prayer" },
  title: "Prayer Library | Christian Prayers for Daily Faith",
  description:
    "Choose from a focused library of Christian prayers for daily faith, including peace, wisdom, grief, family, work, courage, and discernment.",
};

export default function PrayerPage() {
  const firstPrayer = prayerPaths[prayerPathKeys[0]];

  return (
    <PageShell
      active="prayer"
      hero={
        <PageHero
          icon={Heart}
          eyebrow="Prayer library"
          title="Prayer Library"
          subtitle="Choose a prayer for what you are carrying today — each with Scripture, reflection, and one simple next step."
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HeroPrimary href={`/prayer/${firstPrayer.slug}`}>
              Start praying
            </HeroPrimary>
            <HeroSecondary href="/start">Take the Faith Quiz</HeroSecondary>
            <HeroSecondary href="/guides/how-to-pray">How to Pray</HeroSecondary>
          </div>
          <p className="mt-5 text-sm font-semibold leading-6 text-cream-fg-muted/72">
            {prayerPathKeys.length} complete prayers, organized by the needs
            people bring to God.
          </p>
        </PageHero>
      }
    >
      <div className="max-w-5xl">
        <StatusNote>
          Selah currently offers a focused library of {prayerPathKeys.length}{" "}
          prayers. Prayer guidance is for Scripture-rooted reflection and
          encouragement;
          it does not promise outcomes or replace pastoral care, counseling,
          medical help, emergency support, or trusted community.
        </StatusNote>
      </div>

      <div data-reveal-stagger className="mt-10 grid gap-14">
        {groupedPrayerPaths.map((group) => (
          <section
            key={group.key}
            className="border-t border-line-300 pt-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
                {group.title}
              </p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                {group.prayers.length} prayers
              </span>
            </div>
            <h2 className="mt-2 max-w-2xl font-serif text-[1.7rem] font-semibold leading-tight text-ink-900 sm:text-[1.95rem]">
              {group.description}
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {group.prayers.map((prayer) => (
                <Link
                  key={prayer.slug}
                  href={`/prayer/${prayer.slug}`}
                  className="group flex min-w-0 flex-col rounded-xl border border-line-200 bg-cream-200/70 p-5 shadow-[0_14px_36px_rgba(71,55,35,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold-500 hover:bg-cream-100 hover:shadow-[0_20px_48px_rgba(71,55,35,0.09)]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                    {prayer.theme}
                  </span>
                  <span className="mt-3 block font-serif text-[1.7rem] font-semibold leading-[1.1] text-ink-900">
                    {prayer.title}
                  </span>
                  <span className="mt-4 block h-px w-10 bg-line-400 transition-all duration-200 group-hover:w-16 group-hover:bg-gold-500" />
                  <span className="mt-4 block text-base leading-7 text-ink-600">
                    {prayer.description}
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

      <section className="mt-8 rounded-lg bg-green-700 p-6 text-cream-fg shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-300">
              Prayer and Scripture
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Let prayer become honest attention before God.
            </h2>
            <p className="mt-3 text-base leading-7 text-cream-fg/84">
              These prayers are written to help you slow down, name what is
              true, and continue into Scripture. Faith symbols are optional
              reminders of prayer and Scripture, not promises or guarantees.
            </p>
          </div>
          <Link
            href="/bible"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream-fg px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-cream-fg"
          >
            Guided Bible Readings
            <BookOpenText size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
