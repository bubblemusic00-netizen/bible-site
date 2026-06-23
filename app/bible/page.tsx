import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
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
    <PageShell active="bible">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={BookOpenText}
          eyebrow="Guided Bible readings"
          title="Guided Bible Readings"
          subtitle="A focused library of finished Scripture readings with context, reflection, prayer, and a simple next step."
        />
        <div className="border-l border-[#d8c5a3] pl-5">
          <p className="text-sm font-semibold uppercase text-[#8f6220]">
            A focused reading library
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            Start with {readingCount} complete guided readings organized by
            theme. Each one includes Scripture, context, reflection, prayer, and
            a simple next step.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href={supportedBibleChapters[0].href}>
              Start reading
              <ArrowRight size={16} strokeWidth={1.8} />
            </PrimaryButton>
            <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
            <SecondaryButton href="/guides/start-reading-the-bible">
              How to Start Reading
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className="mt-9 max-w-5xl">
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
            className="border-t border-[#dfcfb2] pt-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                {group.title}
              </p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ac9061]">
                {group.readings.length} readings
              </span>
            </div>
            <h2 className="mt-2 max-w-2xl font-serif text-[1.7rem] font-semibold leading-tight text-[#241f19] sm:text-[1.95rem]">
              {group.description}
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {group.readings.map((reading) => (
                <Link
                  key={reading.href}
                  href={reading.href}
                  className="group flex min-w-0 flex-col rounded-xl border border-[#e4d6bd] bg-[#fffaf1]/70 p-6 shadow-[0_14px_36px_rgba(71,55,35,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_20px_48px_rgba(71,55,35,0.09)]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                    {reading.theme}
                  </span>
                  <span className="mt-3 block font-serif text-[1.7rem] font-semibold leading-[1.1] text-[#241f19]">
                    {reading.title}
                  </span>
                  <span className="mt-4 block h-px w-10 bg-[#d8c5a3] transition-all duration-200 group-hover:w-16 group-hover:bg-[#c49c52]" />
                  <span className="mt-4 block text-base leading-7 text-[#625b51]">
                    {reading.description}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#254737]">
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

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Reading with care
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Scripture, context, reflection, and prayer belong together.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              These readings use the King James Version and pair the text with
              non-denominational reflection guidance. The site is independent
              and is not an official church, Bible publisher, or religious
              authority.
            </p>
          </div>
          <Link
            href={supportedBibleChapters[0].href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
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
