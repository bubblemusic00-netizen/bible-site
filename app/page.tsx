import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Cross,
  Gem,
  Heart,
  Sparkles,
} from "lucide-react";
import { faithPathShortList } from "@/lib/faith-paths";
import { ContinueFaithPath } from "./components/ContinueFaithPath";
import { SiteFooter, SiteHeader } from "./components/site-ui";

const actions = [
  {
    title: "Read the Bible",
    description: "Open Scripture and begin with a steady word.",
    href: "/bible",
    icon: BookOpenText,
  },
  {
    title: "Verse of the Day",
    description: "Receive a short Scripture moment.",
    href: "/verse-of-the-day",
    icon: Sparkles,
  },
  {
    title: "Faith Symbols",
    description: "Explore future reminders of faith.",
    href: "/jewelry",
    icon: Gem,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#fbf7ed] text-[#27231d]">
      <SiteHeader active="home" />

      <section className="relative isolate flex flex-1 overflow-hidden bg-[#201b15]">
        <Image
          src="/hero-bible-window.png"
          alt="Open Bible in warm morning light near a window"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,28,22,0.88),rgba(52,67,51,0.62)_47%,rgba(255,246,225,0.16)),linear-gradient(0deg,rgba(35,28,20,0.5),rgba(35,28,20,0.08)_48%,rgba(35,28,20,0.24))]" />

        <div className="relative z-10 mx-auto flex w-[calc(100vw-2.5rem)] max-w-7xl flex-col justify-center py-8 sm:w-full sm:px-8 lg:py-10">
          <div className="w-full max-w-[calc(100vw-2.5rem)] sm:max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7d0a4]/70 bg-[#fffaf0]/94 px-4 py-2 text-sm font-semibold text-[#76521d] shadow-[0_12px_30px_rgba(35,28,20,0.18)]">
              <Cross size={16} strokeWidth={1.8} />
              Free Christian Bible and prayer
            </p>
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.02] text-[#fffaf0] sm:text-5xl lg:text-6xl">
              What do you need today?
            </h1>
            <p className="mt-5 max-w-[calc(100vw-2.5rem)] text-base leading-7 text-[#eee8dc] sm:max-w-2xl sm:text-lg sm:leading-8">
              A quiet place to read, pray, reflect, and carry faith into your day.
            </p>

            <Link
              href="/start"
              className="group mt-7 block max-w-xl rounded-lg border border-[#f4dfb5]/75 bg-[#fff8eb]/96 p-5 text-[#241f19] shadow-[0_22px_54px_rgba(25,20,14,0.26)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0] hover:shadow-[0_26px_62px_rgba(25,20,14,0.32)] sm:p-6"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#284737] text-[#fffaf0] shadow-[0_12px_26px_rgba(40,71,55,0.22)]">
                  <Heart size={22} strokeWidth={1.8} />
                </span>
                <ArrowRight
                  size={18}
                  className="mt-2 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                />
              </span>
              <span className="mt-5 block font-serif text-3xl font-semibold leading-tight">
                Find Your Faith Path
              </span>
              <span className="mt-3 block text-sm font-medium leading-6 text-[#625b51] sm:text-base">
                Start with {faithPathShortList}.
              </span>
            </Link>
            <ContinueFaithPath />
          </div>

          <div className="mt-5 grid w-full grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 lg:max-w-4xl">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group relative min-w-0 overflow-hidden rounded-lg border border-[#f4dfb5]/55 bg-[#fff8eb]/94 p-4 text-[#241f19] shadow-[0_18px_42px_rgba(25,20,14,0.2)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0] hover:shadow-[0_22px_52px_rgba(25,20,14,0.26)] sm:p-5"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737] sm:size-11">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <ArrowRight
                      size={17}
                      className="mt-1 text-[#9a6a24] transition group-hover:translate-x-1"
                    />
                  </div>
                  <h2 className="mt-4 break-words font-serif text-xl font-semibold leading-tight sm:mt-5 sm:text-2xl lg:text-xl">
                    {action.title}
                  </h2>
                  <p className="mt-2 hidden text-sm leading-6 text-[#625b51] sm:block">
                    {action.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <SiteFooter tone="dark" />
        </div>
      </section>
    </main>
  );
}
