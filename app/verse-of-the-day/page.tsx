import type { Metadata } from "next";
import { BookOpenText, CalendarDays } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";
import { getVerseOfTheDay } from "./verse-data";
import { NewsletterSignup } from "../components/forms";

// Regenerate hourly so the verse advances reliably near midnight (UTC) without
// a redeploy, while staying cached for visitors.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Verse of the Day",
  description:
    "A new King James Version Bible verse each day, with a short reflection and a prayer to carry it into your day.",
  alternates: {
    canonical: "/verse-of-the-day",
  },
};

export default function VerseOfTheDayPage() {
  const verse = getVerseOfTheDay();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <PageShell active="verse">
      <PageIntro
        icon={CalendarDays}
        eyebrow="Daily Scripture"
        title="Verse of the Day"
        subtitle="Take a quiet moment with Scripture before the day gets loud."
      />

      <section className="mt-9 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_20px_44px_rgba(71,55,35,0.07)] sm:p-8">
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8f6220]">
          <CalendarDays size={15} strokeWidth={1.8} />
          {today}
        </p>
        <blockquote className="mt-5 font-serif text-3xl font-medium leading-[1.3] text-[#2b251d] sm:text-[2.6rem] sm:leading-[1.24]">
          &ldquo;{verse.text}&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#8f6220]">
          {verse.reference} - {verse.translation}
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
              {verse.reflection}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/bible">Read the Bible</PrimaryButton>
              <SecondaryButton href={`/prayer/${verse.prayerSlug}`}>
                Pray with this verse
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 max-w-4xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7b561b]">
          Come back tomorrow
        </p>
        <p className="mt-2 text-base leading-7 text-[#625b51]">
          A new verse is chosen each day. Make it a small daily habit: read
          slowly, sit with the reflection, and carry one line into the hours
          ahead.
        </p>
      </section>

      <section className="mt-6 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 sm:p-8">
        <NewsletterSignup
          heading="Get the verse in your inbox"
          description="One short, quiet email each morning — a verse, a reflection, and a prayer. No spam. Unsubscribe anytime."
          cta="Send me the daily verse"
        />
      </section>

      <div className="mt-6 max-w-4xl">
        <StatusNote>
          Scripture text from the King James Version (KJV), public domain.
        </StatusNote>
      </div>
    </PageShell>
  );
}
