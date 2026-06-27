import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, ChevronDown, Cross } from "lucide-react";
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
    eyebrow: "Guided readings",
    title: "Bible",
    description: "Short guided readings — the passage, what it means, how to sit with it.",
    href: "/bible",
  },
  {
    eyebrow: "Written prayers",
    title: "Prayer",
    description: "Words for when you don't have your own — grief, fear, waiting, thanks.",
    href: "/prayer",
  },
  {
    eyebrow: "Plain-language starts",
    title: "Guides",
    description: "New to this? Plain-language starts on prayer, grace, and faith.",
    href: "/guides",
  },
];

const momentWords = ["Peace", "Guidance", "Strength", "Hope"];

export default function Home() {
  const verse = getVerseOfTheDay();

  return (
    <main
      id="main-content"
      className="flex min-h-screen w-full flex-col bg-[radial-gradient(125%_55%_at_50%_0%,#1b271e_0%,#11170f_48%,#0c110b_100%)] text-cream-fg"
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
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-green-950 via-green-950/84 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-8 lg:py-20">
          <p
            className="fade-rise inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-gold-200/90"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-px w-8 bg-gold-200/40" />
            <Cross size={15} strokeWidth={1.8} />
            Scripture &amp; Prayer
            <span className="h-px w-8 bg-gold-200/40" />
          </p>
          <h1
            className="fade-rise mt-7 max-w-[15ch] font-serif text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.015em] text-cream-fg sm:text-7xl sm:leading-[0.98] lg:text-[6rem]"
            style={{ animationDelay: "90ms" }}
          >
            Find Scripture and prayer for what you are{" "}
            <span className="italic">carrying</span>.
          </h1>
          <p
            className="fade-rise mt-7 max-w-2xl text-base leading-7 text-cream-fg-muted/88 sm:text-xl sm:leading-8"
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
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream-fg px-7 py-3 text-sm font-semibold text-green-700 shadow-[0_20px_54px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-cream-fg hover:shadow-[0_24px_64px_rgba(233,201,133,0.32)]"
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
              className="group inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-cream-fg-muted transition hover:text-cream-fg"
            >
              <BookOpenText size={17} strokeWidth={1.8} />
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-gold-200/70">
                Explore Bible &amp; Prayer
              </span>
            </Link>
          </div>

          <p
            className="fade-rise mt-5 text-sm font-semibold leading-6 text-cream-fg-muted/76"
            style={{ animationDelay: "330ms" }}
          >
            Free to begin. No login, no pressure.
          </p>

          <p
            className="fade-rise mt-7 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1"
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-200/75">
              For moments of
            </span>
            <span className="font-serif text-lg italic text-cream-fg-muted/90">
              {momentWords.map((w) => w.toLowerCase()).join(" · ")}
            </span>
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-fg-muted/70 lg:flex">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
            Scroll
          </span>
          <ChevronDown size={18} strokeWidth={1.8} className="scroll-cue" />
        </div>
      </section>

      <section className="relative bg-cream-300 px-4 py-20 text-center text-ink-800 sm:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(196,156,82,0.14),transparent_70%)]"
          aria-hidden
        />
        <div data-reveal className="relative mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-gold-700">
            <span className="h-px w-8 bg-line-400" />
            Today&rsquo;s verse
            <span className="h-px w-8 bg-line-400" />
          </p>
          <blockquote className="mt-7 font-serif text-3xl font-medium leading-[1.3] text-ink-800 sm:text-[2.6rem] sm:leading-[1.24]">
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">
            {verse.reference} &middot; KJV
          </p>
          <Link
            href="/verse-of-the-day"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 transition hover:text-green-700"
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

      <section className="px-4 py-16 sm:px-8 lg:py-20">
        <div
          data-reveal
          className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[0.32fr_1fr] lg:items-start"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
            Why this exists
          </p>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-cream-fg sm:text-4xl">
              A quiet place to begin when life feels heavy.
            </h2>
            <p className="mt-3 text-base leading-7 text-cream-fg-muted/78">
              Most faith sites are loud — pop-ups, sign-ups, ten things to
              click. Selah is the opposite. When you&rsquo;re grieving, anxious,
              or just worn out, you shouldn&rsquo;t have to dig for a verse or
              the right words. Tell us what you&rsquo;re carrying, and we&rsquo;ll
              hand you something small and true to hold onto.
            </p>
            <p className="mt-3 text-base leading-7 text-cream-fg-muted/78">
              New here, or wondering what Christians actually believe? Start with
              the good news at the center of it all.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/guides/what-is-the-gospel"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition hover:text-gold-200"
              >
                Start here: the good news
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/beliefs"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cream-fg-muted/80 transition hover:text-cream-fg"
              >
                What we believe
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="library"
        className="relative z-10 bg-cream-300 px-4 py-16 text-ink-900 sm:px-8 lg:py-20"
      >
        <div
          data-reveal
          className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.32fr_1fr] lg:items-start"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
              Explore quietly
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              A library for the next step, not a wall of choices.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
          {libraryLinks.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-44 flex-col rounded-xl border border-line-200 bg-cream-200/70 p-6 text-ink-900 shadow-elev-2 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold-500 hover:bg-cream-100 hover:shadow-elev-4"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                  {item.eyebrow}
                </span>
                <span className="mt-3 block font-serif text-card font-semibold leading-[1.1] text-ink-900">
                  {item.title}
                </span>
                <span className="mt-4 block h-px w-10 bg-line-400 transition-all duration-200 group-hover:w-16 group-hover:bg-gold-500" />
                <span className="mt-4 block text-[0.95rem] leading-6 text-ink-600">
                  {item.description}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-green-600">
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
      </section>

      <section className="relative z-10 px-4 py-16 text-cream-fg sm:px-8 lg:py-20">
        <div
          data-reveal
          className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
              Faith Symbols
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold leading-tight text-cream-fg sm:text-4xl">
              Some prayers you want to keep close.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-cream-fg-muted/72">
              A cross, an anchor, a verse worn at the collarbone — a small
              keepsake that brings you back to what you&rsquo;re praying through.
              A reminder, never a charm.
            </p>
          </div>
          <Link
            href="/jewelry"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold-200/45 bg-cream-fg/8 px-5 py-3 text-sm font-semibold text-cream-fg backdrop-blur-md transition hover:bg-cream-fg/14"
          >
            Explore Faith Symbols
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section className="border-t border-green-900 bg-green-950 px-4 py-16 text-center sm:px-8">
        <div
          data-reveal
          className="mx-auto flex max-w-2xl flex-col items-center"
        >
          <span className="mb-6 h-px w-12 bg-gradient-to-r from-transparent via-gold-300/45 to-transparent" />
          <Image
            src="/selah-cream.png"
            alt="Selah"
            width={1044}
            height={612}
            sizes="(max-width: 640px) 280px, 460px"
            className="h-auto w-[clamp(260px,44vw,460px)]"
          />
          <p className="mt-4 font-serif text-xl italic text-cream-fg-muted/80">
            Pause. Be still. Carry it with you.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
