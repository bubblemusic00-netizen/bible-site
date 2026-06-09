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
  title: "Guided Bible Readings | Scripture, Reflection, and Prayer",
  description:
    "Explore a curated library of finished KJV guided Bible readings with Scripture, context, reflection questions, prayer starters, and next steps.",
};

export default function BiblePage() {
  return (
    <PageShell active="bible">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={BookOpenText}
          eyebrow="Guided Bible readings"
          title="Guided Bible Readings"
          subtitle="A small finished library of Scripture readings with context, reflection, prayer, and a simple next step."
        />
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-6">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            A focused reading library
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            Start with 10 complete guided readings organized by theme. Each one
            includes Scripture, context, reflection, prayer, and a simple next
            step.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SecondaryButton href={supportedBibleChapters[0].href}>
              Start reading
            </SecondaryButton>
            <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
          </div>
        </div>
      </div>

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#9a6a24]">
              <Library size={16} strokeWidth={1.8} />
              Finished library
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Ten guided readings available now.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#625b51]">
            Every reading shown here has a real page with KJV Scripture text,
            short context, an after-reading reflection, a prayer starter, and
            links into prayer and the Faith Quiz.
          </p>
        </div>
      </section>

      <div className="mt-5 max-w-5xl">
        <StatusNote>
          Hope Bible currently offers a focused library of finished guided
          readings rather than a full Bible database. Full Scripture text is
          presented from the King James Version (KJV), a public-domain Bible
          translation used here so guided readings can be offered openly and
          consistently.
        </StatusNote>
      </div>

      <div className="mt-8 grid gap-7">
        {groupedBibleReadings.map((group) => (
          <section
            key={group.key}
            className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6"
          >
            <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-[#9a6a24]">
                  {group.title}
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                  {group.description}
                </h2>
              </div>
              <p className="text-sm leading-6 text-[#625b51]">
                Choose a finished reading below. No unfinished books or
                unsupported chapters are listed.
              </p>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {group.readings.map((reading) => (
                <Link
                  key={reading.href}
                  href={reading.href}
                  className="group flex h-full min-w-0 flex-col rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-5 transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_18px_42px_rgba(71,55,35,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                      <Sparkles size={19} strokeWidth={1.8} />
                    </span>
                    <ArrowRight
                      size={17}
                      className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                    {reading.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#9a6a24]">
                    {reading.theme}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#625b51]">
                    {reading.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[#254737]">
                    Open guided reading
                  </p>
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
          context, reflection, and prayer. Faith symbols are optional reminders,
          not guarantees.
        </StatusNote>
      </div>
    </PageShell>
  );
}
