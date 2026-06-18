import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Cross,
  Heart,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/site-ui";

export const metadata: Metadata = {
  title: {
    absolute: "Hope Bible | Scripture and Prayer for What You Carry",
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
    description: "Read finished guided passages slowly, with context.",
    href: "/bible",
    icon: BookOpenText,
  },
  {
    title: "Prayer",
    description: "Find honest words for peace, courage, grief, and hope.",
    href: "/prayer",
    icon: Heart,
  },
  {
    title: "Guides",
    description: "Beginner help for Scripture, prayer, grace, faith, and symbols.",
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
      className="flex min-h-screen w-full flex-col bg-[#111711] text-[#fffaf0]"
    >
      <SiteHeader active="home" />

      <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden">
        <Image
          src="/hero-marble.jpg"
          alt="Carrara marble with warm gold veining"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_45%] saturate-[1.04] contrast-[1.05]"
        />
        {/* Cinematic scrim: one vertical wash for legibility + a soft left
            gradient so the headline reads while the photo still breathes. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,12,0.5)_0%,rgba(11,16,12,0.34)_40%,rgba(12,17,13,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(11,16,12,0.82)_0%,rgba(11,16,12,0.42)_48%,transparent_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#111711] via-[#111711]/84 to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-8 lg:grid-cols-[1fr_0.58fr] lg:py-14">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-[#f3dfb6]/90">
              <Cross size={15} strokeWidth={1.8} />
              Scripture &amp; Prayer
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] text-[#fffaf0] sm:text-7xl lg:text-[5.8rem]">
              Find Scripture and prayer for what you are carrying.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#f1eadf]/88 sm:text-xl sm:leading-8">
              Take a short Faith Quiz and receive a Bible reading, a prayer, a
              reflection prompt, and one gentle next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/start"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-6 py-3 text-sm font-semibold text-[#203d30] shadow-[0_20px_54px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0]"
              >
                Take the Faith Quiz
                <ArrowRight size={17} strokeWidth={1.8} />
              </Link>
              <Link
                href="#library"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f4dfb5]/55 bg-[#fffaf0]/8 px-6 py-3 text-sm font-semibold text-[#fffaf0] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#fffaf0]/14"
              >
                <BookOpenText size={17} strokeWidth={1.8} />
                Explore Bible & Prayer
              </Link>
            </div>

            <p className="mt-6 max-w-xl text-sm font-semibold leading-6 text-[#f1eadf]/76">
              Free to begin. No login, no pressure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-[#f1eadf]/82">
              <span className="mr-1 py-2 text-[#f3dfb6]">
                For moments of
              </span>
              {momentWords.map((word) => (
                <span
                  key={word}
                  className="rounded-full border border-[#fff8e8]/18 bg-[#fffaf0]/8 px-3 py-2 backdrop-blur-md"
                >
                  {word}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-sm leading-6 text-[#f1eadf]/70">
              Choose what you need today. Read slowly. Pray honestly.
            </p>
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
      </section>

      <section className="bg-[#111711] px-4 py-8 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-5 border-y border-[#fff8e8]/10 py-7 lg:grid-cols-[0.32fr_1fr] lg:items-start">
          <p className="text-sm font-semibold uppercase text-[#e9c985]">
            Why this exists
          </p>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              A quiet place to begin when life feels heavy.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#f1eadf]/78">
              Hope Bible was shaped by a simple observation: in painful
              seasons, many people look for hope, prayer, and words that help
              them take the next step. This site offers a respectful place to
              begin with Scripture, prayer, and reflection without pressure to
              buy anything.
            </p>
          </div>
        </div>
      </section>

      <section
        id="library"
        className="relative z-10 bg-[#111711] px-4 pb-10 sm:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-6 border-b border-[#fff8e8]/10 pb-8 lg:grid-cols-[0.32fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Explore quietly
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              A library for the next step, not a wall of choices.
            </h2>
          </div>
          <div className="grid gap-0 border-y border-[#fff8e8]/12 md:grid-cols-3 md:border-l">
          {libraryLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-32 items-start gap-4 border-b border-[#fff8e8]/12 px-0 py-5 text-[#fffaf0] transition hover:bg-[#fffaf0]/7 md:border-b-0 md:border-r md:px-5 md:last:border-r-0"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e9c985]/12 text-[#e9c985] transition group-hover:bg-[#e9c985]/18">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block font-serif text-2xl font-semibold leading-tight">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-[#f1eadf]/72">
                    {item.description}
                  </span>
                </span>
              </Link>
            );
          })}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-5 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Faith Symbols
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              Some people carry reminders of what they are praying through.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#f1eadf]/72">
              Symbols are explained as optional reminders only, never as
              guarantees or sources of spiritual power.
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
