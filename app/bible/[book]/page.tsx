import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Footprints,
  HandHeart,
  HelpCircle,
} from "lucide-react";
import { redirect } from "next/navigation";
import {
  BackButton,
  Breadcrumbs,
  PageHero,
  PageShell,
  SecondaryButton,
  pillSolid,
} from "../../components/site-ui";
import { getBibleBook, supportedBibleChapters } from "../bible-data";

const readingIncludes = [
  { icon: BookOpenText, label: "Scripture", note: "Full KJV passage" },
  { icon: Compass, label: "Context", note: "Why the chapter matters" },
  { icon: HelpCircle, label: "Reflection", note: "A question to sit with" },
  { icon: HandHeart, label: "Prayer", note: "A prayer to begin" },
  { icon: Footprints, label: "Next step", note: "One small action" },
];

export function generateStaticParams() {
  return Array.from(
    new Set(supportedBibleChapters.map((chapter) => chapter.bookSlug)),
  ).map((book) => ({ book }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ book: string }>;
}): Promise<Metadata> {
  const { book } = await params;
  const details = getBibleBook(book);

  if (!details) {
    return { title: "Bible Book" };
  }

  return {
    title: `${details.name} Guided Bible Readings`,
    description: details.description,
    alternates: { canonical: `/bible/${book}` },
  };
}

export default async function BibleBookPage({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book } = await params;
  const details = getBibleBook(book);

  if (!details) {
    redirect("/bible");
  }

  if (details.availableChapters.length > 0) {
    return <AvailableBookOverview slug={book} />;
  }

  redirect("/bible");
}

function AvailableBookOverview({ slug }: { slug: string }) {
  const details = getBibleBook(slug);

  if (!details) {
    redirect("/bible");
  }

  const chapters = supportedBibleChapters.filter(
    (chapter) => chapter.bookSlug === slug,
  );
  const readingCount = chapters.length;

  return (
    <PageShell
      active="bible"
      hero={
        <PageHero
          icon={BookOpenText}
          eyebrow="Bible book"
          title={details.name}
          subtitle={`${readingCount} finished guided ${
            readingCount === 1 ? "reading" : "readings"
          } from ${details.name}, each pairing the full King James Version passage with context, reflection, and prayer.`}
          breadcrumbs={
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Home", path: "/" },
                { name: "Guided Bible Readings", path: "/bible" },
                { name: details.name, path: `/bible/${slug}` },
              ]}
            />
          }
        />
      }
    >
      <section className="rounded-lg border border-line-300 bg-cream-200 p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">
          What each reading includes
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {readingIncludes.map(({ icon: Icon, label, note }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-line-300 bg-cream-300 text-green-600">
                <Icon size={17} strokeWidth={1.6} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink-900">
                  {label}
                </span>
                <span className="block text-xs leading-5 text-ink-600">
                  {note}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-9 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Read {details.name}
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
          {readingCount} {readingCount === 1 ? "chapter" : "chapters"}
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.href}
            href={chapter.href}
            className="group flex min-w-0 flex-col rounded-xl border border-line-200 bg-cream-200/70 p-5 shadow-[0_14px_36px_rgba(71,55,35,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold-500 hover:bg-cream-100 hover:shadow-[0_20px_48px_rgba(71,55,35,0.09)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                {chapter.title}
              </span>
              <span className={pillSolid}>Guided reading</span>
            </div>
            <span className="mt-3 block font-serif text-[1.55rem] font-semibold leading-[1.12] text-ink-900">
              {chapter.theme}
            </span>
            <span className="mt-3 block h-px w-10 bg-line-400 transition-all duration-200 group-hover:w-16 group-hover:bg-gold-500" />
            <span className="mt-3 block text-base leading-7 text-ink-600">
              {chapter.description}
            </span>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-green-600">
              Read this chapter
              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/bible" label="Back to all readings" />
        <SecondaryButton href="/prayer">Pray before reading</SecondaryButton>
        <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
      </div>
    </PageShell>
  );
}
