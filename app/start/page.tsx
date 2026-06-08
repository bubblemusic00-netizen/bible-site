import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Gem,
  Heart,
  Leaf,
  Shield,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  featuredStartFaithPathSlugs,
  startFaithPaths,
  type StartFaithPathSlug,
} from "@/lib/faith-paths";
import { PageIntro, PageShell, StatusNote } from "../components/site-ui";

export const metadata: Metadata = {
  title: "Faith Quiz | Find Your Faith Path",
  description:
    "Take a simple Faith Quiz for peace, strength, protection, hope, guidance, or gratitude, then receive Scripture, prayer, reflection, and an optional faith reminder.",
};

const pathIcons: Record<StartFaithPathSlug, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  protection: Shield,
  hope: Sparkles,
  guidance: Compass,
  gratitude: Sun,
  healing: Heart,
  forgiveness: Heart,
  anxiety: Leaf,
  family: Heart,
};

const flowSteps = [
  {
    title: "Step 1: What do you need today?",
    description: "Choose the intention that best names what you are carrying.",
    icon: Heart,
  },
  {
    title: "Step 2: Receive your path",
    description: "Get a short Scripture reference and prayer for the moment.",
    icon: BookOpenText,
  },
  {
    title: "Step 3: Read, pray, reflect",
    description: "Use one prompt and one small next step without pressure.",
    icon: Leaf,
  },
  {
    title: "Carry an optional reminder",
    description: "Faith symbols can remind you to pray; they are never guarantees.",
    icon: Gem,
  },
];

const beginOptions = [
  {
    title: "Scripture",
    description: "Begin with a Bible reference and short context.",
    icon: BookOpenText,
  },
  {
    title: "Prayer",
    description: "Begin with honest words for the moment.",
    icon: Heart,
  },
  {
    title: "Reflection",
    description: "Begin by naming what you are carrying.",
    icon: Leaf,
  },
];

export default function StartPage() {
  return (
    <PageShell active="start">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Faith Quiz"
          title="Find Your Faith Path"
          subtitle="Answer a few simple questions and receive Scripture, prayer, reflection, and an optional faith-symbol reminder."
        />
        <StatusNote>
          This Faith Quiz is content-first and free. Optional faith symbols are
          reminders of prayer and Scripture, not promises of protection,
          healing, blessing, or spiritual results.
        </StatusNote>
      </div>

      <section className="mt-9 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-6">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          How the Faith Quiz works
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
          Three simple steps, one careful path.
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="rounded-lg bg-[#fbf7ed] p-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#284737] text-sm font-semibold text-[#fffaf0]">
                    {index + 1}
                  </span>
                  <Icon className="size-5 text-[#254737]" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#625b51]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              A quick first question
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              How would you like to begin?
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              You can start with Scripture, prayer, or reflection. The full path
              will still include all three.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {beginOptions.map((option) => {
              const Icon = option.icon;

              return (
                <div
                  key={option.title}
                  className="rounded-lg border border-[#d8ddcf] bg-[#fbf7ed] p-4"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#625b51]">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Step 1: What do you need today?
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Choose the intention that fits this season.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Each path begins with a careful intention, then points toward
            Scripture, prayer, reflection, and a small next step. Nothing here
            promises a miracle or a guaranteed outcome.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {featuredStartFaithPathSlugs.map((slug) => {
            const path = startFaithPaths[slug];
            const Icon = pathIcons[slug];

            return (
              <Link
                key={path.slug}
                href={path.startRoute}
                className="group rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_22px_48px_rgba(71,55,35,0.085)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <ArrowRight
                    size={17}
                    className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                  />
                </div>
                <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                  {path.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#625b51]">
                  {path.description}
                </p>
                <p className="mt-4 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-3 text-sm font-semibold leading-6 text-[#2f5140]">
                  {path.carefulLine}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#254737]">
                  Choose this path
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Step 2 and 3
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Receive your path, then read, pray, reflect, and carry a reminder.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              Faith symbols may be mentioned as optional reminders near the end
              of a path, but the main purpose is guidance for reading, prayer,
              reflection, and a faithful next step.
            </p>
          </div>
          <Link
            href="/bible"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
          >
            Read the Bible
            <BookOpenText size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
