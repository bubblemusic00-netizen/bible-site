import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Heart,
  Home,
  Leaf,
  Moon,
  Shield,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { faithPaths } from "@/lib/faith-paths";
import {
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";
import { prayerPathKeys, type PrayerPathKey } from "./prayer-paths";

export const metadata: Metadata = {
  title: "Prayer Guide | Christian Prayers for Peace and Strength",
  description:
    "Find simple Christian prayer guidance for peace, strength, healing, gratitude, guidance, and honest prayer rooted in Scripture reflection.",
};

const pathIcons: Record<PrayerPathKey, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  guidance: Compass,
  gratitude: Sun,
  healing: Sparkles,
  forgiveness: Heart,
  anxiety: Home,
  family: Users,
};

const prayerCategories = [
  {
    title: "Morning Prayer",
    description:
      "Begin the day with honesty, gratitude, and a request for faithful attention.",
    cta: "Use the steps below",
    icon: Sun,
  },
  {
    title: "Prayer for Peace",
    description:
      "A quiet prayer for comfort when your thoughts feel noisy or unsettled.",
    href: "/prayer/peace",
    cta: "Pray for peace",
    icon: Leaf,
  },
  {
    title: "Prayer for Strength",
    description:
      "A prayerful path for courage, patience, and the next faithful step.",
    href: "/prayer/strength",
    cta: "Pray for strength",
    icon: Shield,
  },
  {
    title: "Prayer for Protection",
    description:
      "A careful prayer for God's care, wisdom, courage, and safe support.",
    href: "/prayer/strength",
    cta: "Pray for courage",
    icon: Shield,
  },
  {
    title: "Prayer for Healing",
    description:
      "A prayer for comfort, mercy, wise care, and not feeling alone in pain.",
    href: "/prayer/healing",
    cta: "Pray for comfort",
    icon: Sparkles,
  },
  {
    title: "Prayer for Guidance",
    description:
      "A simple way to ask for wisdom before a decision or next step.",
    href: "/prayer/guidance",
    cta: "Pray for guidance",
    icon: Compass,
  },
  {
    title: "Prayer for Gratitude",
    description:
      "A practice for noticing grace without denying what still feels hard.",
    href: "/prayer/gratitude",
    cta: "Pray with thanks",
    icon: Heart,
  },
  {
    title: "Prayer Before Sleep",
    description:
      "End the day by naming what you carried and entrusting tomorrow to God.",
    cta: "Use the steps below",
    icon: Moon,
  },
];

const prayerSteps = [
  {
    title: "Start honestly",
    description: "You can begin with a sentence as simple as, Lord, I am here.",
  },
  {
    title: "Name what you feel",
    description: "Bring fear, gratitude, confusion, anger, grief, or hope into the open.",
  },
  {
    title: "Ask for help",
    description: "Ask for mercy, wisdom, courage, comfort, patience, or support.",
  },
  {
    title: "Sit quietly",
    description: "Leave room for silence. Prayer does not have to fill every second.",
  },
  {
    title: "End with gratitude",
    description: "Name one gift, one person, or one small grace from the day.",
  },
];

export default function PrayerPage() {
  return (
    <PageShell active="prayer">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={Heart}
          eyebrow="Prayer guide"
          title="Pray with honesty and hope."
          subtitle="Prayer can be simple, rooted in Scripture, and honest about what you are carrying today."
        />
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-6">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            A gentle beginning
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            You do not need polished words to pray. Begin with what is true,
            let Scripture shape your attention, and ask God for help without
            turning prayer into a formula.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SecondaryButton href="/bible">Read Scripture first</SecondaryButton>
            <SecondaryButton href="/start">Find a Faith Path</SecondaryButton>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Choose a prayer for today
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Simple prayers for real moments
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            These categories are starting points for reflection and prayer. They
            do not promise outcomes, but they can help you name a need before
            God with care.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {prayerCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)]"
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#625b51]">
                  {category.description}
                </p>
                {category.href ? (
                  <Link
                    href={category.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#9a6a24]"
                  >
                    {category.cta}
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </Link>
                ) : (
                  <p className="mt-5 text-sm font-semibold text-[#254737]">
                    {category.cta}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-9 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            When you do not know what to say
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Let prayer begin small.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#625b51]">
            Some prayers are long. Others are a breath, a pause, or one honest
            sentence. God is not limited by the polish of your words.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {prayerSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5"
            >
              <h3 className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#625b51]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-9 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Prayer paths
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Begin with one honest need.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Each path offers a short Scripture moment, a simple reflection, and
            a prayer starter. These are quiet beginnings, not formulas or
            guarantees.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {prayerPathKeys.map((key) => {
          const path = faithPaths[key];
          const Icon = pathIcons[key];

          return (
            <Link
              key={key}
              href={path.prayerRoute}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_22px_48px_rgba(71,55,35,0.085)]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#ffffff]" />
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <ArrowRight
                  size={17}
                  className="mt-1 shrink-0 text-[#9b6b25] transition group-hover:translate-x-1"
                />
              </div>
              <h3 className="mt-5 break-words font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                {path.title}
              </h3>
              <p className="mt-2 break-words text-sm leading-6 text-[#625b51]">
                {path.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#254737]">
                Begin
              </p>
            </Link>
          );
        })}
      </section>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Prayer, Scripture, and reminders
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Let prayer lead toward Scripture.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              Prayer can begin with your need, continue with Bible reading, and
              become a small daily practice. Future faith symbols are optional
              reminders of prayer and Scripture, not promises or guarantees.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/bible"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
            >
              Read the Bible
              <BookOpenText size={16} strokeWidth={1.8} />
            </Link>
            <Link
              href="/jewelry"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#f4dfb5]/70 px-5 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#fffaf0]/12"
            >
              Faith reminders
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-7 max-w-5xl">
        <StatusNote>
          Prayer guidance on this site is for reflection and Scripture-rooted
          encouragement. It does not replace pastoral care, counseling, medical
          help, emergency support, or trusted community.
        </StatusNote>
      </div>
    </PageShell>
  );
}
