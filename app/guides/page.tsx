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
  alternates: { canonical: "/guides" },
  title: "Beginner Christian Guides",
  description:
    "Beginner-friendly Christian guides for Scripture, prayer, faith, grace, Jesus, symbols, and using Selah with care.",
};

export default function GuidesPage() {
  const firstGuide = guides[guideKeys[0]];

  return (
    <PageShell active="guides">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={Library}
          eyebrow="Beginner guides"
          title="Beginner Christian Guides"
          subtitle="Simple, careful guides for people who want to begin with Scripture, prayer, reflection, and Christian faith basics."
        />
        <div className="border-l border-[#d8c5a3] pl-5">
          <p className="text-sm font-semibold uppercase text-[#8f6220]">
            Seven finished guides
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            These guides are beginner-friendly, non-denominational, and written
            to help visitors read Scripture, pray honestly, and use Selah
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

      <section className="mt-9 border-y border-[#dfcfb2] py-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#8f6220]">
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
          Selah is independent and does not claim to be a church, pastor,
          ministry, denomination, Bible scholar, Bible publisher, or official
          Christian authority.
        </StatusNote>
      </div>

      <div data-reveal-stagger className="mt-9 grid gap-10">
        {groupedGuides.map((group) => (
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
                Choose a finished guide below. Each page includes practical
                steps and links into Bible readings, prayers, and the Faith
                Quiz where useful.
              </p>
            </div>

            <div className="mt-5 divide-y divide-[#e4d6bd] border-y border-[#e4d6bd]">
              {group.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group grid min-w-0 gap-3 py-5 transition hover:bg-[#fffaf1]/72 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:px-3"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                    <Compass size={18} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-3xl">
                      {guide.title}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-[#8f6220]">
                      {guide.audience}
                    </span>
                    <span className="mt-2 block text-base leading-7 text-[#625b51]">
                      {guide.description}
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
        <SecondaryButton href="/about">About Selah</SecondaryButton>
      </div>
    </PageShell>
  );
}
