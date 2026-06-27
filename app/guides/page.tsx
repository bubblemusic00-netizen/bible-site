import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, Heart, Library } from "lucide-react";
import {
  HeroPrimary,
  HeroSecondary,
  PageHero,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";
import { groupedGuides, guideKeys, guides } from "./guide-data";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Beginner Christian Guides",
  description:
    "Beginner-friendly Christian guides for Scripture, prayer, faith, grace, Jesus, symbols, and using Selah with care.",
};

export default function GuidesPage() {
  const firstGuide = guides[guideKeys[0]];

  return (
    <PageShell
      active="guides"
      hero={
        <PageHero
          icon={Library}
          eyebrow="Beginner guides"
          title="Beginner Christian Guides"
          subtitle="Simple, careful guides for people who want to begin with Scripture, prayer, reflection, and Christian faith basics."
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HeroPrimary href={`/guides/${firstGuide.slug}`}>
              Start with a guide
              <ArrowRight size={16} strokeWidth={1.8} />
            </HeroPrimary>
            <HeroSecondary href="/start">Take the Faith Quiz</HeroSecondary>
          </div>
          <p className="mt-5 text-sm font-semibold leading-6 text-[#f1eadf]/72">
            {guideKeys.length} beginner-friendly, non-denominational guides.
          </p>
        </PageHero>
      }
    >
      <div className="max-w-5xl">
        <StatusNote>
          These guides help a beginner start with humility and attention. They
          are not a substitute for Scripture, church community, pastoral care,
          or professional support. Selah is independent and does not claim to be
          a church, pastor, ministry, denomination, Bible publisher, or official
          Christian authority.
        </StatusNote>
      </div>

      <div className="mt-9 grid gap-14">
        {groupedGuides.map((group) => (
          <section
            key={group.key}
            className="border-t border-line-300 pt-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
                {group.title}
              </p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ac9061]">
                {group.guides.length} {group.guides.length === 1 ? "guide" : "guides"}
              </span>
            </div>
            <h2 className="mt-2 max-w-2xl font-serif text-[1.7rem] font-semibold leading-tight text-ink-900 sm:text-[1.95rem]">
              {group.description}
            </h2>

            <div
              className={`mt-6 grid gap-5 ${
                group.key === "start" ? "" : "sm:grid-cols-2"
              }`}
            >
              {group.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className={`group flex min-w-0 flex-col rounded-xl border border-line-200 shadow-[0_14px_36px_rgba(71,55,35,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-[0_20px_48px_rgba(71,55,35,0.09)] ${
                    group.key === "start"
                      ? "bg-[#fbf6ea] p-7 sm:p-8"
                      : "bg-cream-200/70 p-5 hover:bg-cream-100"
                  }`}
                >
                  <span
                    className={`block font-serif font-semibold leading-[1.1] text-ink-900 ${
                      group.key === "start"
                        ? "text-[2rem] sm:text-[2.3rem]"
                        : "text-[1.7rem]"
                    }`}
                  >
                    {guide.title}
                  </span>
                  <span className="mt-4 block h-px w-10 bg-line-400 transition-all duration-200 group-hover:w-16 group-hover:bg-gold-500" />
                  <span className="mt-4 block text-base leading-7 text-ink-600">
                    {guide.description}
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

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-cream-fg shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-300">
              Use the guides with humility
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Let a guide lead you back to Scripture and prayer.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              These pages are meant to orient beginners, not replace Scripture,
              wise Christian community, pastoral care, or qualified help.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/bible"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-cream-fg"
            >
              Guided Bible Readings
              <BookOpenText size={16} strokeWidth={1.8} />
            </Link>
            <Link
              href="/prayer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#f4dfb5]/60 bg-[#fff8eb]/10 px-5 py-3 text-sm font-semibold text-cream-fg transition hover:bg-[#fff8eb]/16"
            >
              Prayer Library
              <Heart size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-7 max-w-5xl">
        <StatusNote>
          For fuller boundaries, read the Content Boundaries and Editorial
          Principles pages before treating any guide as more than general
          spiritual encouragement.
        </StatusNote>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SecondaryButton href="/content-boundaries">
          Content Boundaries
        </SecondaryButton>
        <SecondaryButton href="/editorial-principles">
          Editorial Principles
        </SecondaryButton>
        <SecondaryButton href="/about">About Selah</SecondaryButton>
      </div>
    </PageShell>
  );
}
