import { BookOpenText, Sparkles } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";
import { verseOfTheDay } from "./verse-data";

export default function VerseOfTheDayPage() {
  return (
    <PageShell active="verse">
      <PageIntro
        icon={Sparkles}
        eyebrow="Daily Scripture"
        title="Verse of the Day"
        subtitle="Take a quiet moment with Scripture before the day gets loud."
      />

      <section className="mt-9 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_20px_44px_rgba(71,55,35,0.07)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          {verseOfTheDay.reference}
        </p>
        <blockquote className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
          &ldquo;{verseOfTheDay.text}&rdquo;
        </blockquote>
        <p className="mt-5 text-sm font-semibold text-[#2f5140]">
          {verseOfTheDay.reference} - {verseOfTheDay.translation}
        </p>
      </section>

      <section className="mt-6 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
            <BookOpenText size={20} strokeWidth={1.8} />
          </span>
          <div className="min-w-0">
            <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
              A quiet reflection
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              Jesus offers peace as a gift before every pressure is solved.
              Let this verse slow your thoughts and invite your heart back to
              trust, one honest breath at a time.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/bible">Read the Bible</PrimaryButton>
              <SecondaryButton href="/prayer/peace">
                Pray with this verse
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6 max-w-4xl">
        <StatusNote>
          Scripture text from the World English Bible (WEB), public domain.
        </StatusNote>
      </div>

    </PageShell>
  );
}
