import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Heart,
  Library,
  Sparkles,
} from "lucide-react";
import {
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";
import { groupedPrayerPaths, prayerPathKeys, prayerPaths } from "./prayer-paths";

export const metadata: Metadata = {
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
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-6">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
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

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#9a6a24]">
              <Library size={16} strokeWidth={1.8} />
              Prayer, reflection, and Scripture
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Eighteen complete prayers available now.
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
          Hope Bible currently offers a focused library of eighteen prayers.
          Prayer guidance is for Scripture-rooted reflection and encouragement;
          it does not promise outcomes or replace pastoral care, counseling,
          medical help, emergency support, or trusted community.
        </StatusNote>
      </div>

      <div className="mt-8 grid gap-7">
        {groupedPrayerPaths.map((group) => (
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
                Choose a prayer for today, then continue with Scripture,
                reflection, and a small next step.
              </p>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {group.prayers.map((prayer) => (
                <Link
                  key={prayer.slug}
                  href={`/prayer/${prayer.slug}`}
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
                    {prayer.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#9a6a24]">
                    {prayer.theme}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#625b51]">
                    {prayer.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[#254737]">
                    Open prayer
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
