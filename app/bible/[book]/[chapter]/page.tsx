import { BookOpenText } from "lucide-react";
import {
  BackButton,
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../../components/site-ui";
import {
  availableBibleChapterParams,
  getBibleBook,
  getBibleChapter,
} from "../../bible-data";

export function generateStaticParams() {
  return availableBibleChapterParams;
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
    return (
      <UnavailableChapter
        title="Bible chapter"
        subtitle="This book is not available yet."
      />
    );
  }

  if (!chapterData) {
    return (
      <UnavailableChapter
        title={bookDetails.name}
        subtitle={`Chapter ${chapter} is not available yet.`}
      />
    );
  }

  return (
    <PageShell active="bible">
      <PageIntro
        icon={BookOpenText}
        eyebrow="Bible reader"
        title={chapterData.book}
        subtitle={`Chapter ${chapterData.chapter} · ${chapterData.translation}`}
      />

      <div className="mt-8 max-w-3xl">
        <StatusNote>
          Bible text on this page is from the World English Bible.
        </StatusNote>
      </div>

      <article className="mt-6 max-w-3xl overflow-hidden rounded-lg border border-[#d9c59d] bg-[#fffaf1] p-5 shadow-[0_24px_60px_rgba(71,55,35,0.08)] sm:p-9">
        <div className="border-b border-[#e2d2b6] pb-6">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            {chapterData.book} {chapterData.chapter}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            {chapterData.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#746c60]">
            World English Bible
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {chapterData.verses.map((verse) => (
            <p
              key={verse.number}
              className="grid grid-cols-[1.9rem_minmax(0,1fr)] gap-3 text-[1.02rem] leading-8 text-[#302b24] sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:text-lg sm:leading-9"
            >
              <span className="pt-1 text-sm font-semibold leading-6 text-[#9a6a24]">
                {verse.number}
              </span>
              <span
                className="block min-w-0"
                style={{ width: "calc(100vw - 5.5rem)" }}
              >
                {verse.text}
              </span>
            </p>
          ))}
        </div>
      </article>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/prayer">Pray after reading</PrimaryButton>
        <SecondaryButton href={`/bible/${book}`}>
          Back to {bookDetails.name}
        </SecondaryButton>
        <SecondaryButton href="/bible">Back to Bible</SecondaryButton>
        <SecondaryButton href="/start">Find what you need today</SecondaryButton>
      </div>
    </PageShell>
  );
}

function UnavailableChapter({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <PageShell active="bible">
      <PageIntro
        icon={BookOpenText}
        eyebrow="Bible chapter"
        title={title}
        subtitle={subtitle}
      />

      <div className="mt-9 max-w-3xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Chapter coming soon
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          This chapter is not available in the local reader yet.
        </p>
        <div className="mt-6">
          <StatusNote>No Bible text is included for this chapter yet.</StatusNote>
        </div>
      </div>

      <div className="mt-8">
        <BackButton href="/bible" label="Back to Bible" />
      </div>
    </PageShell>
  );
}
