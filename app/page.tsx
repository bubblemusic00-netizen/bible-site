import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Cross,
  Gem,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react";
import { ContinueFaithPath } from "./components/ContinueFaithPath";
import { SiteFooter, SiteHeader } from "./components/site-ui";

export const metadata: Metadata = {
  title: {
    absolute: "Hope Bible | Free Bible Reading, Prayer, and Christian Guidance",
  },
  description:
    "Hope Bible is a free Christian faith-inspired platform for Bible reading, prayer guidance, Faith Paths, and meaningful faith reminders.",
};

const actionItems = [
  {
    title: "Read Scripture",
    description:
      "Open a calm Bible reader with Scripture passages and clear translation attribution.",
    href: "/bible",
    cta: "Read the Bible",
    icon: BookOpenText,
  },
  {
    title: "Find a Prayer",
    description:
      "Begin with a simple prayer path for peace, strength, guidance, gratitude, and more.",
    href: "/prayer",
    cta: "Open Prayer Guide",
    icon: Heart,
  },
  {
    title: "Start a Faith Path",
    description:
      "Choose what you are carrying today, then continue through prayer, Scripture, and reflection.",
    href: "/start",
    cta: "Start Your Path",
    icon: Leaf,
  },
  {
    title: "Explore Faith Symbols",
    description:
      "Learn how Christian symbols may serve as thoughtful reminders of prayer and Scripture.",
    href: "/jewelry",
    cta: "Explore Symbols",
    icon: Gem,
  },
];

const intentionItems = [
  {
    title: "Peace",
    description: "Scripture and prayer for seasons when you need peace.",
    href: "/start/peace",
    icon: Leaf,
  },
  {
    title: "Strength",
    description: "A steady path for days that feel heavy or tiring.",
    href: "/start/strength",
    icon: ShieldCheck,
  },
  {
    title: "Protection",
    description:
      "Prayerful reflection for moments when you are seeking courage and wise shelter.",
    href: "/start/strength",
    icon: ShieldCheck,
  },
  {
    title: "Hope",
    description:
      "A gentle place to bring pain, longing, and the need for renewed hope.",
    href: "/start/healing",
    icon: Sparkles,
  },
  {
    title: "Guidance",
    description: "Scripture and prayer before the next decision or step.",
    href: "/start/guidance",
    icon: Compass,
  },
  {
    title: "Gratitude",
    description: "A path for noticing grace and giving thanks with care.",
    href: "/start/gratitude",
    icon: Sun,
  },
];

const trustPoints = [
  "Free Bible, prayer, and reflection guidance comes first.",
  "Hope Bible is independent and not an official church, ministry, publisher, or religious authority.",
  "Content is for Scripture exploration, prayer, and personal reflection.",
  "Faith reminders are optional symbols, never promises or guarantees.",
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#fbf7ed] text-[#27231d]">
      <SiteHeader active="home" />

      <section className="relative isolate overflow-hidden bg-[#201b15]">
        <Image
          src="/hero-bible-window.webp"
          alt="Open Bible in warm morning light near a window"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,28,22,0.92),rgba(44,61,48,0.72)_48%,rgba(255,246,225,0.18)),linear-gradient(0deg,rgba(24,20,16,0.68),rgba(24,20,16,0.1)_46%,rgba(24,20,16,0.34))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-8 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.75fr] lg:items-center lg:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#e7d0a4]/70 bg-[#fffaf0]/94 px-4 py-2 text-sm font-semibold text-[#76521d] shadow-[0_12px_30px_rgba(35,28,20,0.18)]">
              <Cross size={16} strokeWidth={1.8} />
              Free Christian Bible and prayer guidance
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-[1.02] text-[#fffaf0] sm:text-5xl lg:text-6xl">
              Free Bible Reading, Prayer, and Christian Faith Guidance
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#f1eadf] sm:text-lg sm:leading-8">
              Hope Bible helps you read Scripture, begin honest prayer, and
              follow a simple Faith Path. Faith symbols are optional reminders,
              not the heart of the site and never spiritual guarantees.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/start"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-6 py-3 text-sm font-semibold text-[#244336] shadow-[0_18px_44px_rgba(25,20,14,0.22)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0]"
              >
                Start Your Faith Path
                <ArrowRight size={17} strokeWidth={1.8} />
              </Link>
              <Link
                href="/bible"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f4dfb5]/75 bg-[#241f19]/24 px-6 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_14px_34px_rgba(25,20,14,0.18)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0]/12"
              >
                <BookOpenText size={17} strokeWidth={1.8} />
                Read the Bible
              </Link>
              <Link
                href="/jewelry"
                className="inline-flex min-h-11 items-center justify-center gap-1 text-sm font-semibold text-[#fff8e8]/88 transition hover:text-[#fffaf0]"
              >
                Explore Faith Symbols
                <ArrowRight size={15} strokeWidth={1.8} />
              </Link>
            </div>
            <ContinueFaithPath />
          </div>

          <aside className="rounded-lg border border-[#f4dfb5]/52 bg-[#fff8eb]/94 p-5 text-[#241f19] shadow-[0_24px_70px_rgba(20,16,12,0.28)] sm:p-6">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              A simple path
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight">
              Start with what you need today.
            </h2>
            <div className="mt-5 grid gap-4">
              {[
                ["Pray", "Begin with an honest prayer starter."],
                ["Read", "Continue with Scripture for reflection."],
                ["Carry", "Let symbols remain optional reminders."],
              ].map(([title, description], index) => (
                <div key={title} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-[#284737] text-sm font-semibold text-[#fffaf0]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-[#625b51]">
                    <span className="block font-semibold text-[#241f19]">
                      {title}
                    </span>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              What you can do here
            </p>
              <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl lg:text-5xl">
                A quiet place for Scripture, prayer, and daily faith.
              </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#625b51]">
            Move at a human pace: read a passage, begin a prayer, choose a Faith
            Path, or learn about symbols as reminders of what you are already
            praying and reading.
          </p>
        </div>

        <div className="mt-9 divide-y divide-[#dfcfb2] overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] shadow-[0_24px_60px_rgba(71,55,35,0.075)] lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {actionItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="p-5 sm:p-6">
                <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#625b51]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#9a6a24]"
                >
                  {item.cta}
                  <ArrowRight size={15} strokeWidth={1.8} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f2f5ee]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-16">
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Start with what you need today
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl lg:text-5xl">
              Choose an intention for prayer and Scripture.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#625b51]">
              These paths are gentle starting points. They do not promise an
              outcome; they simply help you bring a real need into prayer,
              Scripture, and reflection.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {intentionItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-lg border border-[#d8ddcf] bg-[#fbf7ed] p-5 transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffaf1] hover:shadow-[0_18px_42px_rgba(71,55,35,0.08)]"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                    />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#241f19]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#625b51]">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_24px_60px_rgba(71,55,35,0.07)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Trust comes before conversion
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl lg:text-5xl">
              Free guidance, clear boundaries, no pressure.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#625b51]">
              Hope Bible is designed to be useful before it ever asks anything
              from a visitor. The core experience is Scripture, prayer, and
              reflection.
            </p>
          </div>

          <ul className="grid gap-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-4 text-sm font-semibold leading-6 text-[#2f5140]"
              >
                <ShieldCheck className="mt-0.5 size-5 shrink-0" strokeWidth={1.8} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(245,221,178,0.18),transparent_65%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#e9c985]">
                Faith Symbols
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Christian symbols can be quiet daily reminders.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#fff8e8]/84">
                A cross, dove, heart, or other Christian symbol can help a
                person remember prayer, Scripture, and faith in ordinary life.
                They are reminders only, not spiritual guarantees or promises.
              </p>
            </div>
            <Link
              href="/jewelry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-6 py-3 text-sm font-semibold text-[#244336] shadow-[0_18px_44px_rgba(25,20,14,0.2)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0]"
            >
              Explore Faith Symbols
              <ArrowRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
