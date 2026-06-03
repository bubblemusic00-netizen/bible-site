import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Cross,
  Gem,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";
import { PrimaryButton, SiteDisclaimer, SiteHeader } from "./components/site-ui";

const actions = [
  {
    title: "Read the Bible",
    description: "Open Scripture and begin with a steady word.",
    href: "/bible",
    icon: BookOpenText,
  },
  {
    title: "Pray",
    description: "Bring the day honestly before God.",
    href: "/prayer",
    icon: Heart,
  },
  {
    title: "Verse of the Day",
    description: "Receive a short Scripture moment.",
    href: "/verse-of-the-day",
    icon: Sparkles,
  },
  {
    title: "Reading Plans",
    description: "Start a guided daily path.",
    href: "/plans",
    icon: CalendarDays,
  },
  {
    title: "Faith Reminders",
    description: "Future Christian items.",
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
              Come into quiet hope.
            </h1>
            <p className="mt-5 max-w-[calc(100vw-2.5rem)] text-base leading-7 text-[#eee8dc] sm:max-w-2xl sm:text-lg sm:leading-8">
              A calm place to meet Jesus in Scripture, prayer, and faith.
            </p>
            <p className="mt-4 max-w-[calc(100vw-2.5rem)] border-l border-[#c99b4a] pl-4 text-sm font-medium leading-6 text-[#fff4df] sm:max-w-xl sm:text-base">
              Grace for today. Hope for the next step.
            </p>
            <div className="mt-6">
              <PrimaryButton href="/start">
                <Leaf size={16} strokeWidth={1.8} />
                What do you need today?
              </PrimaryButton>
            </div>
          </div>

          <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-5">
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

          <SiteDisclaimer>
            Hope Bible is an independent free Christian resource in development.
            No purchases, accounts, or payments are available here yet.
          </SiteDisclaimer>
        </div>
      </section>
    </main>
  );
}
