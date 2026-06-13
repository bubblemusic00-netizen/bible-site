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
};

const libraryLinks = [
  {
    title: "Bible",
    description: "Guided readings with context, reflection, and prayer.",
    href: "/bible",
    icon: BookOpenText,
  },
  {
    title: "Prayer",
    description: "Finished prayers for what you are carrying today.",
    href: "/prayer",
    icon: Heart,
  },
  {
    title: "Guides",
    description: "Beginner-friendly help for Scripture, prayer, and symbols.",
    href: "/guides",
    icon: Compass,
  },
];

const momentWords = ["Peace", "Guidance", "Strength", "Hope"];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#121711] text-[#fffaf0]">
      <SiteHeader active="home" />

      <section className="relative isolate flex min-h-[calc(100svh-4.25rem)] overflow-hidden">
        <Image
          src="/hero-bible-window.webp"
          alt="Open Bible in warm morning light near a window"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_50%] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(243,215,160,0.16),transparent_32%),linear-gradient(90deg,rgba(13,20,15,0.96),rgba(25,46,35,0.82)_48%,rgba(71,55,35,0.38)),linear-gradient(180deg,rgba(18,23,18,0.2),rgba(18,23,18,0.76))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#121711] to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-10 sm:px-8 lg:py-14">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#e8d4ad]/45 bg-[#fffaf0]/10 px-4 py-2 text-sm font-semibold text-[#f3dfb6] shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <Cross size={16} strokeWidth={1.8} />
              Hope Bible
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
              Free guidance. No login. No purchase required.
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
        </div>
      </section>

      <section className="bg-[#121711] px-4 py-8 sm:px-8">
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
        className="relative z-10 bg-[#121711] px-4 pb-10 sm:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-3 md:grid-cols-3">
          {libraryLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-28 items-start gap-4 rounded-lg border border-[#fff8e8]/12 bg-[#fffaf0]/6 p-4 text-[#fffaf0] transition hover:-translate-y-0.5 hover:border-[#e9c985]/50 hover:bg-[#fffaf0]/10"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e9c985]/14 text-[#e9c985]">
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
      </section>

      <SiteFooter />
    </main>
  );
}
