import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpenText, Feather } from "lucide-react";
import { redirect } from "next/navigation";
import {
  Breadcrumbs,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
  pillLight,
  pillLightLink,
} from "../../../components/site-ui";
import {
  availableBibleChapterParams,
  getBibleBook,
  getBibleChapter,
  getBibleChapterReference,
} from "../../bible-data";
import { JsonLd } from "../../../components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return availableBibleChapterParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}): Promise<Metadata> {
  const { book, chapter } = await params;
  const chapterData = getBibleChapter(book, chapter);

  if (!chapterData) {
    return {
      title: "Guided Bible Reading",
      description:
        "Explore finished guided Bible readings with Scripture, context, reflection, and prayer.",
    };
  }

  const reference = getBibleChapterReference(chapterData);

  return {
    title: `${reference} Guided Bible Reading`,
    description: `${chapterData.description} Includes KJV Scripture, context, reflection, prayer, and a simple next step.`,
    alternates: {
      canonical: `/bible/${book}/${chapter}`,
    },
  };
}

export default async function BibleChapterPage({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}) {
  const { book, chapter } = await params;
  const bookDetails = getBibleBook(book);
  const chapterData = getBibleChapter(book, chapter);

  if (!bookDetails) {
    redirect("/bible");
  }

  if (!chapterData) {
    redirect("/bible");
  }

  const reference = getBibleChapterReference(chapterData);
  const canonicalPath = `/bible/${book}/${chapter}`;

  return (
    <PageShell active="bible">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guided Bible Readings", path: "/bible" },
            { name: bookDetails.name, path: `/bible/${book}` },
            { name: reference, path: canonicalPath },
          ]),
          articleSchema({
            headline: `${reference} Guided Bible Reading`,
            description: chapterData.description,
            path: canonicalPath,
          }),
        ]}
      />
      <div className="mx-auto w-full max-w-6xl">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guided Bible Readings", path: "/bible" },
            { name: bookDetails.name, path: `/bible/${book}` },
            { name: reference, path: canonicalPath },
          ]}
        />
        <nav
          aria-label="Reading navigation"
          className="flex flex-col gap-3 rounded-lg border border-[#dfcfb2] bg-[#fffaf1]/86 px-4 py-3 shadow-[0_18px_42px_rgba(71,55,35,0.06)] sm:flex-row sm:items-center sm:justify-between sm:px-5"
        >
          <Link
            href="/bible"
            className="inline-flex min-h-10 w-fit items-center gap-2 rounded-full px-2 text-sm font-semibold text-[#355242] transition hover:bg-[#f3eadb] hover:text-[#204636]"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Guided Bible Readings
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className={pillLight}>
              <BookOpenText size={13} strokeWidth={1.9} />
              Guided Reading
            </span>
            <a href="#after-reading" className={pillLightLink}>
              Reflection
            </a>
          </div>
        </nav>

        <section className="relative mt-7 overflow-hidden rounded-lg border border-[#ded1ba] bg-[#f7f0e3] px-4 py-10 shadow-[0_28px_90px_rgba(71,55,35,0.09)] sm:px-8 sm:py-14 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(196,156,82,0.18),transparent_66%)]" />
          <div className="pointer-events-none absolute inset-y-8 left-8 hidden w-px bg-gradient-to-b from-transparent via-[#d8c5a3] to-transparent opacity-70 lg:block" />
          <div className="pointer-events-none absolute inset-y-8 right-8 hidden w-px bg-gradient-to-b from-transparent via-[#d8c5a3] to-transparent opacity-70 lg:block" />

          <div className="relative mx-auto w-full max-w-[760px] text-center">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f6220]">
              <span className="h-px w-8 bg-[#d8c5a3]" />
              {chapterData.theme}
              <span className="h-px w-8 bg-[#d8c5a3]" />
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] text-[#241f19] sm:text-7xl">
              {reference}
            </h1>
            <p className="mt-3 font-serif text-2xl font-semibold leading-tight text-[#5d4630] sm:text-3xl">
              {chapterData.title}
            </p>
            <p className="mx-auto mt-5 max-w-[690px] text-base leading-8 text-[#625b51] sm:text-lg">
              {chapterData.contextIntro}
            </p>
            {chapterData.readingNote ? (
              <p className="mx-auto mt-5 max-w-[690px] rounded-lg border border-[#d8c5a3] bg-[#fffaf0]/82 px-4 py-3 text-sm font-semibold leading-6 text-[#6a563f]">
                {chapterData.readingNote}
              </p>
            ) : null}
          </div>

          <article className="relative mx-auto mt-10 w-full max-w-[760px] rounded-lg border border-[#d9c59d] bg-[#fffdf8] px-5 py-8 shadow-[0_22px_70px_rgba(71,55,35,0.08)] sm:px-9 sm:py-11">
            <div className="flex items-center justify-between gap-4 border-b border-[#e2d2b6] pb-5">
              <h2 className="font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-[1.75rem]">
                The Reading
              </h2>
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                {reference} &middot; {chapterData.translation}
              </p>
            </div>

            <div className="mt-9 space-y-5 sm:space-y-6">
              {chapterData.verses.map((verse, i) => (
                <p
                  key={verse.number}
                  className="grid w-full min-w-0 grid-cols-[1.5rem_minmax(0,1fr)] gap-3 font-serif text-[1.3rem] leading-[1.7] text-[#2b251d] sm:grid-cols-[2rem_minmax(0,1fr)] sm:text-[1.5rem] sm:leading-[1.72]"
                >
                  <span className="select-none pt-[0.55rem] text-right font-sans text-[0.7rem] font-semibold leading-none text-[#8f6220] sm:text-xs">
                    {verse.number}
                  </span>
                  <span
                    className={
                      i === 0
                        ? "block min-w-0 whitespace-normal break-words first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[3.6rem] first-letter:font-semibold first-letter:leading-[0.72] first-letter:text-[#8f6220] sm:first-letter:text-[4.4rem]"
                        : "block min-w-0 whitespace-normal break-words"
                    }
                  >
                    {verse.text}
                  </span>
                </p>
              ))}
            </div>
          </article>
        </section>

        <section
          id="after-reading" data-reveal
          className="mx-auto mt-8 w-full max-w-[980px] rounded-lg border border-[#d8ddcf] bg-[#eef1e8] p-5 shadow-[0_20px_50px_rgba(40,71,55,0.08)] sm:p-8"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7b561b]">
              <Feather size={15} strokeWidth={1.8} />
              After you read
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Let the reading become prayer and attention.
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-lg border border-[#d0d9c8] bg-[#fbf7ed] p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#241f19]">
                  Reflection question
                </h3>
                <p className="mt-2 text-base leading-7 text-[#625b51]">
                  {chapterData.reflectionQuestion}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-[#d0d9c8] bg-[#fbf7ed] p-5">
                  <h3 className="font-serif text-2xl font-semibold text-[#241f19]">
                    Prayer starter
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#625b51]">
                    {chapterData.prayerStarter}
                  </p>
                </div>
                <div className="rounded-lg border border-[#d0d9c8] bg-[#fbf7ed] p-5">
                  <h3 className="font-serif text-2xl font-semibold text-[#241f19]">
                    Small next step
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#625b51]">
                    {chapterData.smallNextStep}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-[#d0d9c8] bg-[#fbf7ed] p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#241f19]">
                  Optional faith-symbol reminder
                </h3>
                <p className="mt-2 text-base leading-7 text-[#625b51]">
                  A faith symbol can serve as a quiet reminder of prayer and
                  Scripture, but it is never a promise, charm, source of power,
                  or guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 w-full max-w-[980px]">
          <StatusNote>
            {chapterData.sourceNote} Selah offers reflection and prayer
            guidance, not official church, publisher, or counseling authority.
          </StatusNote>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[980px] flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton href={chapterData.relatedFaithPath}>
            Take the Faith Quiz
            <ArrowRight size={16} strokeWidth={1.8} />
          </PrimaryButton>
          <SecondaryButton href={chapterData.relatedPrayerRoute ?? "/prayer"}>
            {chapterData.relatedPrayerLabel ?? "Pray after reading"}
          </SecondaryButton>
          <SecondaryButton href="/bible">Back to Guided Bible Readings</SecondaryButton>
          <SecondaryButton href="/jewelry">Explore Faith Symbols</SecondaryButton>
          <SecondaryButton href={`/bible/${book}`}>
            Back to {bookDetails.name}
          </SecondaryButton>
        </div>
      </div>
    </PageShell>
  );
}
