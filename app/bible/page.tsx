import Link from "next/link";
import { ArrowRight, BookOpenText, Leaf, Sparkles } from "lucide-react";
import { PageIntro, PageShell } from "../components/site-ui";

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

const startingPoints = [
  {
    title: "New to the Bible",
    href: "/bible/john",
    status: "Start with John",
  },
  {
    title: "Looking for Peace",
    href: "/plans/peace/day-1",
    status: "Guided day",
  },
  {
    title: "Want to Know Jesus",
    href: "/bible/john/1",
    status: "Read John 1",
  },
  {
    title: "Need Strength",
    href: "/start/strength",
    status: "Guided moment",
  },
  {
    title: "Daily Reading",
    href: "/verse-of-the-day",
    status: "Today",
  },
];

export default function BiblePage() {
  return (
    <PageShell active="bible">
      <PageIntro
        icon={BookOpenText}
        eyebrow="Bible hub"
        title="Read the Bible"
        subtitle="Begin with the Old Testament, the New Testament, or a guided starting point for prayerful reading and study."
      />

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

      <section className="mt-6 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Start here
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Gentle places to begin
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#625b51]">
            Short paths that connect reading with prayer and reflection.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {startingPoints.map((point) => (
            <Link
              key={point.title}
              href={point.href}
              className="group rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 transition hover:border-[#c49c52] hover:bg-[#fffaf1]"
            >
              <p className="font-serif text-xl font-semibold leading-tight text-[#241f19]">
                {point.title}
              </p>
              <p className="mt-3 inline-flex rounded-full bg-[#eef1e8] px-3 py-1 text-xs font-semibold text-[#2f5140] transition group-hover:bg-[#284737] group-hover:text-[#fffaf0]">
                {point.status}
              </p>
            </Link>
          ))}
        </div>
      </section>
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
          <h2 className="font-serif text-3xl font-semibold text-[#241f19]">{title}</h2>
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
