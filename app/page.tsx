import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  ChevronDown,
  Compass,
  Cross,
  Heart,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/site-ui";
import { getVerseOfTheDay } from "./verse-of-the-day/verse-data";

// Advance the homepage verse near midnight (UTC) without a redeploy.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Selah | Scripture and Prayer for What You Carry",
  },
  description:
    "Take a short Faith Quiz and find Scripture, prayer, reflection, and one gentle next step for what you are carrying today.",
  alternates: {
    canonical: "/",
  },
};

const libraryLinks = [
  {
    title: "Bible",
    description: "Short guided readings — the passage, what it means, how to sit with it.",
    href: "/bible",
    icon: BookOpenText,
  },
  {
    title: "Prayer",
    description: "Words for when you don't have your own — grief, fear, waiting, thanks.",
    href: "/prayer",
    icon: Heart,
  },
  {
    title: "Guides",
    description: "New to this? Plain-language starts on prayer, grace, and faith.",
    href: "/guides",
    icon: Compass,
  },
];

const momentWords = ["Peace", "Guidance", "Strength", "Hope"];

export default function Home() {
  const verse = getVerseOfTheDay();

  return (
    <main
      id="main-content"
      className="flex min-h-screen w-full flex-col bg-[radial-gradient(125%_55%_at_50%_0%,#1b271e_0%,#11170f_48%,#0c110b_100%)] text-[#fffaf0]"
    >
      <SiteHeader active="home" overHero />

      <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden">
        <Image
          src="/hero-marble.jpg"
          alt="Carrara marble with warm gold veining"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5'%3E%3Crect width='100%25' height='100%25' fill='%23cfc8bb'/%3E%3C/svg%3E"
          className="object-cover object-[52%_42%] saturate-[1.07] contrast-[1.06] brightness-[1.04]"
        />
        {/* Cinematic scrim: dark where the text sits (left/bottom), luminous
            marble toward the right, plus a warm gold glow for depth. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,12,0.5)_0%,rgba(11,16,12,0.2)_38%,rgba(12,17,13,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(11,16,12,0.82)_0%,rgba(11,16,12,0.4)_44%,transparent_74%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_42%_at_50%_8%,rgba(233,201,133,0.14),transparent_64%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#111711] via-[#111711]/84 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-8 lg:py-20">
          <p
            className="fade-rise inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#f3dfb6]/90"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-px w-8 bg-[#f3dfb6]/40" />
            <Cross size={15} strokeWidth={1.8} />
            Scripture &amp; Prayer
            <span className="h-px w-8 bg-[#f3dfb6]/40" />
          </p>
          <h1
            className="fade-rise mt-7 max-w-[15ch] font-serif text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.015em] text-[#fffaf0] sm:text-7xl sm:leading-[0.98] lg:text-[6rem]"
            style={{ animationDelay: "90ms" }}
          >
            Find Scripture and prayer for what you are{" "}
            <span className="italic">carrying</span>.
          </h1>
          <p
            className="fade-rise mt-7 max-w-2xl text-base leading-7 text-[#f1eadf]/88 sm:text-xl sm:leading-8"
            style={{ animationDelay: "170ms" }}
          >
            Answer three quiet questions. In a minute, you&rsquo;ll have a
            passage, a prayer, and one small thing to carry into your day.
          </p>

          <div
            className="fade-rise mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
            style={{ animationDelay: "250ms" }}
          >
            <Link
              href="/start"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-7 py-3 text-sm font-semibold text-[#203d30] shadow-[0_20px_54px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0] hover:shadow-[0_24px_64px_rgba(233,201,133,0.32)]"
            >
              Take the Faith Quiz
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#library"
              className="group inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-[#f1eadf] transition hover:text-[#fffaf0]"
            >
              <BookOpenText size={17} strokeWidth={1.8} />
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-[#f3dfb6]/70">
                Explore Bible &amp; Prayer
              </span>
            </Link>
          </div>

          <p
            className="fade-rise mt-7 text-sm font-semibold leading-6 text-[#f1eadf]/76"
            style={{ animationDelay: "330ms" }}
          >
            Free to begin. No login, no pressure.
          </p>

          <p
            className="fade-rise mt-7 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1"
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3dfb6]/75">
              For moments of
            </span>
            <span className="font-serif text-lg italic text-[#f1eadf]/90">
              {momentWords.map((w) => w.toLowerCase()).join(" · ")}
            </span>
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#f1eadf]/70 lg:flex">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
            Scroll
          </span>
          <ChevronDown size={18} strokeWidth={1.8} className="scroll-cue" />
        </div>
      </section>

      <section className="relative bg-[#fbf7ed] px-4 py-20 text-center text-[#2b251d] sm:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(196,156,82,0.14),transparent_70%)]"
          aria-hidden
        />
        <div data-reveal className="relative mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#8f6220]">
            <span className="h-px w-8 bg-[#d8c5a3]" />
            Today&rsquo;s verse
            <span className="h-px w-8 bg-[#d8c5a3]" />
          </p>
          <blockquote className="mt-7 font-serif text-3xl font-medium leading-[1.3] text-[#2b251d] sm:text-[2.6rem] sm:leading-[1.24]">
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#8f6220]">
            {verse.reference} &middot; KJV
          </p>
          <Link
            href="/verse-of-the-day"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#254737] transition hover:text-[#203d30]"
          >
            A new verse each morning
            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8">
        <div
          data-reveal
          className="mx-auto grid w-full max-w-7xl gap-5 border-y border-[#fff8e8]/10 py-7 lg:grid-cols-[0.32fr_1fr] lg:items-start"
        >
          <p className="text-sm font-semibold uppercase text-[#e9c985]">
            Why this exists
          </p>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              A quiet place to begin when life feels heavy.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#f1eadf]/78">
              Most faith sites are loud — pop-ups, sign-ups, ten things to
              click. Selah is the opposite. When you&rsquo;re grieving, anxious,
              or just worn out, you shouldn&rsquo;t have to dig for a verse or
              the right words. Tell us what you&rsquo;re carrying, and we&rsquo;ll
              hand you something small and true to hold onto.
            </p>
          </div>
        </div>
      </section>

      <section
        id="library"
        className="relative z-10 px-4 pb-10 sm:px-8"
      >
        <div
          data-reveal
          className="mx-auto grid w-full max-w-7xl gap-6 border-b border-[#fff8e8]/10 pb-8 lg:grid-cols-[0.32fr_1fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Explore quietly
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              A library for the next step, not a wall of choices.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
          {libraryLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-44 flex-col rounded-xl border border-[#fff8e8]/10 bg-[#fffaf0]/[0.04] p-5 text-[#fffaf0] shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#e9c985]/35 hover:bg-[#fffaf0]/[0.07]"
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#e9c985]/12 text-[#e9c985] transition group-hover:bg-[#e9c985]/20">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="mt-4 block font-serif text-2xl font-semibold leading-tight">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-[#f1eadf]/72">
                  {item.description}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#e9c985]">
                  Open
                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
          </div>
        </div>

        <div
          data-reveal
          className="mx-auto grid w-full max-w-7xl gap-5 pt-8 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Faith Symbols
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              Some prayers you want to keep close.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#f1eadf]/72">
              A cross, an anchor, a verse worn at the collarbone — a small
              keepsake that brings you back to what you&rsquo;re praying through.
              A reminder, never a charm.
            </p>
          </div>
          <Link
            href="/jewelry"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#f4dfb5]/45 bg-[#fffaf0]/8 px-5 py-3 text-sm font-semibold text-[#fffaf0] backdrop-blur-md transition hover:bg-[#fffaf0]/14"
          >
            Explore Faith Symbols
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section className="bg-[#0d120c] px-4 py-16 text-center sm:px-8">
        <div
          data-reveal
          className="mx-auto flex max-w-2xl flex-col items-center"
        >
          <Image
            src="/selah-cream.png"
            alt="Selah"
            width={1044}
            height={612}
            sizes="(max-width: 640px) 280px, 460px"
            className="h-auto w-[clamp(260px,44vw,460px)]"
          />
          <p className="mt-4 font-serif text-xl italic text-[#f1eadf]/80">
            Pause. Be still. Carry it with you.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
