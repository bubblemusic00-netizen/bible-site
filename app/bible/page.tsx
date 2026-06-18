import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, Library, Sparkles } from "lucide-react";
import {
  PageIntro,
  PageShell,
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
            <SecondaryButton href={supportedBibleChapters[0].href}>
              Start reading
            </SecondaryButton>
            <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
            <SecondaryButton href="/guides/start-reading-the-bible">
              How to Start Reading
            </SecondaryButton>
          </div>
        </div>
      </div>

      <section className="mt-9 border-y border-[#dfcfb2] py-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#8f6220]">
              <Library size={16} strokeWidth={1.8} />
              Finished library
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Twenty guided readings available now.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#625b51]">
            Every reading shown here opens a complete page with KJV Scripture
            text, short context, an after-reading reflection, a prayer starter,
            and links into prayer and the Faith Quiz.
          </p>
        </div>
      </section>

      <div className="mt-5 max-w-5xl">
        <StatusNote>
          Selah currently offers a focused library of finished guided
          readings rather than a full Bible database. Full Scripture text is
          presented from the King James Version (KJV), a Bible translation
          widely used in public-domain contexts in the United States so guided
          readings can be offered openly and consistently.
        </StatusNote>
      </div>

      <div data-reveal className="mt-9 grid gap-10">
        {groupedBibleReadings.map((group) => (
          <section
            key={group.key}
            className="border-t border-[#dfcfb2] pt-7"
          >
            <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-[#8f6220]">
                  {group.title}
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                  {group.description}
                </h2>
              </div>
              <p className="text-sm leading-6 text-[#625b51]">
                Choose a finished reading below. Every link opens a polished
                reading page with Scripture, reflection, and prayer guidance.
              </p>
            </div>

            <div className="mt-5 divide-y divide-[#e4d6bd] border-y border-[#e4d6bd]">
              {group.readings.map((reading) => (
                <Link
                  key={reading.href}
                  href={reading.href}
                  className="group grid min-w-0 gap-3 py-5 transition hover:bg-[#fffaf1]/72 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:px-3"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                    <Sparkles size={18} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-3xl">
                      {reading.title}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-[#8f6220]">
                      {reading.theme}
                    </span>
                    <span className="mt-2 block text-base leading-7 text-[#625b51]">
                      {reading.description}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#254737] sm:justify-self-end">
                    Open
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
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
