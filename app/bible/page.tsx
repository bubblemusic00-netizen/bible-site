import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Heart,
  Leaf,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { PageIntro, PageShell, SecondaryButton, StatusNote } from "../components/site-ui";
import { supportedBibleChapters } from "./bible-data";
import { scripturePathCards } from "./scripture-paths";

export const metadata: Metadata = {
  title: "Read the Bible | Beginner Scripture Paths",
  description:
    "Start reading the Bible with beginner-friendly Scripture paths, short context, reflection guidance, and properly attributed Bible text where available.",
};

const oldTestamentBooks = [
  { name: "Genesis", href: "/bible/genesis", status: "Available now" },
  { name: "Exodus", href: "/bible/exodus", status: "Coming soon" },
  { name: "Psalms", href: "/bible/psalms", status: "Coming soon" },
  { name: "Proverbs", href: "/bible/proverbs", status: "Coming soon" },
  { name: "Isaiah", href: "/bible/isaiah", status: "Coming soon" },
];

const newTestamentBooks = [
  { name: "Matthew", href: "/bible/matthew", status: "Coming soon" },
  { name: "Mark", href: "/bible/mark", status: "Coming soon" },
  { name: "Luke", href: "/bible/luke", status: "Coming soon" },
  { name: "John", href: "/bible/john", status: "Available now" },
  { name: "Romans", href: "/bible/romans", status: "Coming soon" },
];

const beginnerPaths = [
  {
    title: "Gospel of John",
    description: "A clear place to meet Jesus, His words, His signs, and the invitation to faith.",
    why: "Read John when you want to understand who Jesus is and why Christians center faith around Him.",
    firstPassage: "John 1",
    href: "/bible/john/1",
    cta: "Read John 1",
    icon: Sparkles,
  },
  {
    title: "Psalms",
    description: "Prayers and songs for fear, comfort, worship, grief, trust, and praise.",
    why: "Read Psalms when you need language for honest prayer before God.",
    firstPassage: "Psalm 23",
    href: "/bible/psalms",
    cta: "View Psalms page",
    icon: Heart,
  },
  {
    title: "Proverbs",
    description: "Short wisdom sayings for daily decisions, speech, work, patience, and character.",
    why: "Read Proverbs when you want practical wisdom for ordinary choices.",
    firstPassage: "Proverbs 1",
    href: "/bible/proverbs",
    cta: "View Proverbs page",
    icon: Compass,
  },
  {
    title: "Genesis",
    description: "The beginning of creation, human calling, brokenness, promise, and covenant.",
    why: "Read Genesis to see how the Bible begins the story of God, people, and promise.",
    firstPassage: "Genesis 1",
    href: "/bible/genesis/1",
    cta: "Read Genesis 1",
    icon: Leaf,
  },
  {
    title: "Romans",
    description: "A deep New Testament letter about grace, faith, salvation, and life in Christ.",
    why: "Read Romans when you are ready to reflect on sin, mercy, faith, and grace.",
    firstPassage: "Romans 1",
    href: "/bible/romans",
    cta: "View Romans page",
    icon: ScrollText,
  },
];

const readingSteps = [
  {
    title: "Read slowly",
    description: "Let one paragraph or one chapter be enough. Scripture is not a race.",
  },
  {
    title: "Ask what it says about God",
    description: "Notice God's character, promises, commands, mercy, justice, and presence.",
  },
  {
    title: "Ask what it reveals about people",
    description: "Look honestly at human desire, fear, faith, weakness, courage, and need.",
  },
  {
    title: "Pray after reading",
    description: "Turn what you noticed into a simple prayer, even if the prayer is unfinished.",
  },
  {
    title: "Avoid formula thinking",
    description: "Do not use verses as magic words. Read with humility, context, and prayer.",
  },
];

export default function BiblePage() {
  return (
    <PageShell active="bible">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <PageIntro
          icon={BookOpenText}
          eyebrow="Bible hub"
          title="Read the Bible"
          subtitle="Begin reading Scripture with simple paths, short context, reflection prompts, and honest prayerful next steps."
        />
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-6">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Start gently
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            The Bible section is built for beginners and returning readers: open
            a passage, understand why it matters, reflect carefully, and pray
            without pressure.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SecondaryButton href="/prayer">Pray before reading</SecondaryButton>
            <SecondaryButton href="/start">Find a Faith Path</SecondaryButton>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Start reading here
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Beginner-friendly Bible paths
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            These are not rules for where you must begin. They are simple
            doorways into Scripture when the whole Bible feels large.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
          {beginnerPaths.map((path, index) => {
            const Icon = path.icon;

            return (
              <article
                key={path.title}
                className={
                  index === 0
                    ? "rounded-lg border border-[#cba35d] bg-[#fffaf1] p-6 shadow-[0_24px_60px_rgba(71,55,35,0.08)] lg:row-span-2"
                    : "rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)]"
                }
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-3xl">
                      {path.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#625b51]">
                      {path.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm leading-6 text-[#625b51]">
                  <p>
                    <span className="font-semibold text-[#241f19]">
                      Why read it:
                    </span>{" "}
                    {path.why}
                  </p>
                  <p>
                    <span className="font-semibold text-[#241f19]">
                      Suggested first passage:
                    </span>{" "}
                    {path.firstPassage}
                  </p>
                </div>
                <Link
                  href={path.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#9a6a24]"
                >
                  {path.cta}
                  <ArrowRight size={15} strokeWidth={1.8} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Supported chapters
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Ready to read now
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#625b51]">
            These local reader pages currently include World English Bible text.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {supportedBibleChapters.map((chapter) => (
            <Link
              key={`${chapter.bookSlug}-${chapter.chapter}`}
              href={chapter.href}
              className="group flex min-h-20 items-center justify-between gap-4 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] px-4 py-4 transition hover:border-[#c49c52] hover:bg-[#fffaf1]"
            >
              <div className="min-w-0">
                <p className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {chapter.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#625b51]">
                  {chapter.translation}
                </p>
              </div>
              <ArrowRight
                size={17}
                className="shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            How to read Scripture
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Read with attention, context, and prayer.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#625b51]">
            A faithful reading can be simple. You do not need to understand
            every detail before a passage can shape your prayer and attention.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {readingSteps.map((step) => (
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

      <div className="mt-9 grid gap-5 lg:grid-cols-2">
        <TestamentPanel
          title="Old Testament"
          description="The story of creation, covenant, wisdom, prophecy, and God's faithfulness."
          books={oldTestamentBooks}
          icon="leaf"
        />
        <TestamentPanel
          title="New Testament"
          description="The life of Jesus, the early church, letters of faith, and the hope of renewal."
          books={newTestamentBooks}
          icon="sparkles"
        />
      </div>

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Scripture for what you need today
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Continue a Faith Path
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#625b51]">
            Short Scripture moments connected to prayer, reflection, and daily
            remembrance.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scripturePathCards.map((path) => (
            <Link
              key={path.slug}
              href={path.href}
              className="group rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 transition hover:border-[#c49c52] hover:bg-[#fffaf1]"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-serif text-xl font-semibold leading-tight text-[#241f19]">
                  {path.title}
                </p>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[#625b51]">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Scripture attribution and trust
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Read with proper attribution and humility.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              Bible text and translations should be credited where they appear.
              Hope Bible is for reflection, prayer, and guidance; it is not an
              official church, publisher, or religious authority.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/prayer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
            >
              Pray with Scripture
              <ArrowRight size={16} strokeWidth={1.8} />
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
          Scripture text from the World English Bible (WEB), public domain,
          appears only on supported reader and reflection pages where it is
          attributed. Faith symbols are optional reminders, not guarantees.
        </StatusNote>
      </div>
    </PageShell>
  );
}

function TestamentPanel({
  title,
  description,
  books,
  icon,
}: {
  title: string;
  description: string;
  books: Array<{ name: string; href: string; status: string }>;
  icon: "leaf" | "sparkles";
}) {
  const Icon = icon === "leaf" ? Leaf : Sparkles;

  return (
    <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
          <Icon size={22} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-base leading-7 text-[#625b51]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <Link
            key={book.name}
            href={book.href}
            className="group flex min-h-20 flex-col justify-between gap-3 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] px-4 py-3 transition hover:border-[#c49c52] hover:bg-[#fffaf1]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-medium text-[#302b24]">{book.name}</span>
              <ArrowRight
                size={16}
                className="shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
              />
            </div>
            <span
              className={
                book.status === "Available now"
                  ? "w-fit rounded-full bg-[#284737] px-3 py-1 text-xs font-semibold text-[#fffaf0]"
                  : "w-fit rounded-full bg-[#eef1e8] px-3 py-1 text-xs font-semibold text-[#2f5140]"
              }
            >
              {book.status}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
