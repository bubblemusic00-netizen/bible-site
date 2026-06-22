import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Heart,
  Library,
  HandHeart,
} from "lucide-react";
import {
  PageIntro,
  PageShell,
  SecondaryButton,
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
    <PageShell active="prayer">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={Heart}
          eyebrow="Prayer library"
          title="Prayer Library"
          subtitle="Choose a prayer for what you are carrying today, with Scripture, reflection, and one simple next step."
        />
        <div className="border-l border-[#d8c5a3] pl-5">
          <p className="text-sm font-semibold uppercase text-[#8f6220]">
            A focused prayer library
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            Prayer can be simple, honest, and rooted in Scripture. Start with
            18 prayers organized by the needs people often bring to God.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SecondaryButton href={`/prayer/${firstPrayer.slug}`}>
              Start praying
            </SecondaryButton>
            <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
            <SecondaryButton href="/guides/how-to-pray">
              How to Pray
            </SecondaryButton>
          </div>
        </div>
      </div>

      <section className="mt-9 border-y border-[#dfcfb2] py-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#8f6220]">
              <Library size={16} strokeWidth={1.8} />
              Prayer, reflection, and Scripture
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              {prayerPathKeys.length} complete prayers, available now.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#625b51]">
            Each prayer in this library is written to be read slowly, honestly,
            and with room for reflection, Scripture, and a small next step.
          </p>
        </div>
      </section>

      <div className="mt-5 max-w-5xl">
        <StatusNote>
          Selah currently offers a focused library of {prayerPathKeys.length}{" "}
          prayers. Prayer guidance is for Scripture-rooted reflection and
          encouragement;
          it does not promise outcomes or replace pastoral care, counseling,
          medical help, emergency support, or trusted community.
        </StatusNote>
      </div>

      <div data-reveal-stagger className="mt-9 grid gap-10">
        {groupedPrayerPaths.map((group) => (
          <section
            key={group.key}
            className="border-t border-[#dfcfb2] pt-7"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                {group.title}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                {group.description}
              </h2>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {group.prayers.map((prayer) => (
                <Link
                  key={prayer.slug}
                  href={`/prayer/${prayer.slug}`}
                  className="group flex min-w-0 flex-col rounded-xl border border-[#e4d6bd] bg-[#fffaf1]/70 p-5 shadow-[0_14px_36px_rgba(71,55,35,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_20px_48px_rgba(71,55,35,0.09)]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                    {prayer.theme}
                  </span>
                  <span className="mt-3 block font-serif text-[1.7rem] font-semibold leading-[1.1] text-[#241f19]">
                    {prayer.title}
                  </span>
                  <span className="mt-4 block h-px w-10 bg-[#d8c5a3] transition-all duration-200 group-hover:w-16 group-hover:bg-[#c49c52]" />
                  <span className="mt-4 block text-base leading-7 text-[#625b51]">
                    {prayer.description}
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
              Prayer and Scripture
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Let prayer become honest attention before God.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              These prayers are written to help you slow down, name what is
              true, and continue into Scripture. Faith symbols are optional
              reminders of prayer and Scripture, not promises or guarantees.
            </p>
          </div>
          <Link
            href="/bible"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
          >
            Guided Bible Readings
            <BookOpenText size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
