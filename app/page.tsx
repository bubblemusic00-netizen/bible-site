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

const quietPath = [
  "Name what you are carrying.",
  "Receive Scripture and prayer.",
  "Take one gentle next step.",
];

export default function Home() {
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
          className="object-cover object-[50%_45%] saturate-[1.04] contrast-[1.05]"
        />
        {/* Cinematic scrim: one vertical wash for legibility + a soft left
            gradient so the headline reads while the photo still breathes. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,12,0.5)_0%,rgba(11,16,12,0.34)_40%,rgba(12,17,13,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(11,16,12,0.82)_0%,rgba(11,16,12,0.42)_48%,transparent_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#111711] via-[#111711]/84 to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-8 lg:grid-cols-[1fr_0.58fr] lg:py-14">
          <div className="max-w-4xl">
            <p
              className="fade-rise inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-[#f3dfb6]/90"
              style={{ animationDelay: "0ms" }}
            >
              <Cross size={15} strokeWidth={1.8} />
              Scripture &amp; Prayer
            </p>
            <h1
              className="fade-rise mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.015em] text-[#fffaf0] sm:text-7xl lg:text-[5.8rem]"
              style={{ animationDelay: "90ms" }}
            >
              Find Scripture and prayer for what you are{" "}
              <span className="italic">carrying</span>.
            </h1>
            <p
              className="fade-rise mt-6 max-w-2xl text-base leading-7 text-[#f1eadf]/88 sm:text-xl sm:leading-8"
              style={{ animationDelay: "170ms" }}
            >
              Answer three questions about what you&rsquo;re carrying. In about
              a minute, you&rsquo;ll have a passage to read, a prayer to pray,
              and one small thing to do next.
            </p>

            <div
              className="fade-rise mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "250ms" }}
            >
              <Link
                href="/start"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-6 py-3 text-sm font-semibold text-[#203d30] shadow-[0_20px_54px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0] hover:shadow-[0_24px_64px_rgba(233,201,133,0.32)]"
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
              className="fade-rise mt-6 max-w-xl text-sm font-semibold leading-6 text-[#f1eadf]/76"
              style={{ animationDelay: "330ms" }}
            >
              Free to begin. No login, no pressure.
            </p>

            <div
              className="fade-rise mt-7 flex flex-wrap items-center gap-2 text-[#f1eadf]"
              style={{ animationDelay: "400ms" }}
            >
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#f3dfb6]/80">
                For moments of
              </span>
              {momentWords.map((word) => (
                <span
                  key={word}
                  className="rounded-full border border-[#fff8e8]/20 bg-[#fffaf0]/[0.06] px-3.5 py-1.5 text-sm font-medium backdrop-blur-md"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-full bg-[#e9c985]/12 blur-3xl" />
            <div className="relative border-l border-[#f3dfb6]/35 bg-[#fffaf0]/8 px-7 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e9c985]">
                A quiet beginning
              </p>
              <div className="mt-6 space-y-5">
                {quietPath.map((item, index) => (
                  <div key={item} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="mt-1 grid size-8 place-items-center rounded-full border border-[#e9c985]/50 text-sm font-semibold text-[#f3dfb6]">
                      {index + 1}
                    </span>
                    <p className="border-b border-[#fff8e8]/14 pb-5 font-serif text-2xl font-semibold leading-tight text-[#fffaf0]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-[#f1eadf]/72">
                The path is small on purpose: Scripture, prayer, reflection,
                then a next step you can actually carry.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#f1eadf]/70 lg:flex">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
            Scroll
          </span>
          <ChevronDown size={18} strokeWidth={1.8} className="scroll-cue" />
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

      <SiteFooter />
    </main>
  );
}
