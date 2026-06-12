import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
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
import { groupedGuides, guideKeys, guides } from "./guide-data";

export const metadata: Metadata = {
  title: "Beginner Christian Guides",
  description:
    "Beginner-friendly Christian guides for Scripture, prayer, faith, grace, Jesus, symbols, and using Hope Bible with care.",
};

export default function GuidesPage() {
  const firstGuide = guides[guideKeys[0]];

  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={Library}
          eyebrow="Beginner guides"
          title="Beginner Christian Guides"
          subtitle="Simple, careful guides for people who want to begin with Scripture, prayer, reflection, and Christian faith basics."
        />
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-6">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Seven finished guides
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            These guides are beginner-friendly, non-denominational, and written
            to help visitors read Scripture, pray honestly, and use Hope Bible
            with clear boundaries.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SecondaryButton href={`/guides/${firstGuide.slug}`}>
              Start with a guide
            </SecondaryButton>
            <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
          </div>
        </div>
      </div>

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#9a6a24]">
              <Sparkles size={16} strokeWidth={1.8} />
              Scripture, prayer, and reflection
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Begin with clear words and careful next steps.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#625b51]">
            The guides are not a substitute for Scripture, church community,
            pastoral care, or professional support. They are meant to help a
            beginner start with humility and attention.
          </p>
        </div>
      </section>

      <div className="mt-5 max-w-5xl">
        <StatusNote>
          Hope Bible is independent and does not claim to be a church, pastor,
          ministry, denomination, Bible scholar, Bible publisher, or official
          Christian authority.
        </StatusNote>
      </div>

      <div className="mt-8 grid gap-7">
        {groupedGuides.map((group) => (
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
                Choose a finished guide below. Each page includes practical
                steps and links into Bible readings, prayers, and the Faith
                Quiz where useful.
              </p>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {group.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full min-w-0 flex-col rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-5 transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_18px_42px_rgba(71,55,35,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                      <Compass size={19} strokeWidth={1.8} />
                    </span>
                    <ArrowRight
                      size={17}
                      className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#9a6a24]">
                    {guide.audience}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#625b51]">
                    {guide.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[#254737]">
                    Open guide
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
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
            >
              Guided Bible Readings
              <BookOpenText size={16} strokeWidth={1.8} />
            </Link>
            <Link
              href="/prayer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#f4dfb5]/60 bg-[#fff8eb]/10 px-5 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#fff8eb]/16"
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
        <SecondaryButton href="/about">About Hope Bible</SecondaryButton>
      </div>
    </PageShell>
  );
}
