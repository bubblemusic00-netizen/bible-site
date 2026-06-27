import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import {
  PageHero,
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
    <PageShell
      active="verse"
      hero={
        <PageHero
          icon={CalendarDays}
          eyebrow="Daily Scripture"
          title="Verse of the Day"
          subtitle="Take a quiet moment with Scripture before the day gets loud."
        />
      }
    >
      <section className="relative max-w-4xl overflow-hidden rounded-lg border border-[#e0cfa8] bg-[linear-gradient(160deg,#fffdf7,#fdf6e6)] p-7 shadow-[0_28px_64px_rgba(71,55,35,0.1)] sm:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#c49c52,#e9c985)]" />
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold-700">
          <CalendarDays size={15} strokeWidth={1.8} />
          {today}
        </p>
        <blockquote className="mt-5 font-serif text-3xl font-medium leading-[1.3] text-[#2b251d] sm:text-[2.6rem] sm:leading-[1.24]">
          &ldquo;{verse.text}&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-gold-700">
          {verse.reference} &middot; {verse.translation}
        </p>
      </section>

      <section className="mt-5 max-w-4xl rounded-lg border border-line-300 bg-cream-200 p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
          A quiet reflection
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900">
          Sit with it before the day gets loud.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-ink-600">
          {verse.reflection}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton href="/bible">Read the Bible</PrimaryButton>
          <SecondaryButton href={`/prayer/${verse.prayerSlug}`}>
            Pray with this verse
          </SecondaryButton>
        </div>
      </section>

      <section className="mt-6 max-w-4xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-800">
          Come back tomorrow
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900">
          Make it a small daily rhythm.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-ink-600">
          A new verse is chosen each day. Three quiet steps are enough.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", t: "Read", d: "One verse, slowly — out loud if you can." },
            { n: "2", t: "Reflect", d: "Sit with the one-line thought for a moment." },
            { n: "3", t: "Carry", d: "Take a single line into the hours ahead." },
          ].map((step) => (
            <li
              key={step.n}
              className="rounded-lg border border-[#d3dac9] bg-[#fbfdf8] p-4"
            >
              <span className="grid size-8 place-items-center rounded-full bg-green-600 font-serif text-sm font-semibold text-cream-fg">
                {step.n}
              </span>
              <span className="mt-3 block font-serif text-xl font-semibold text-ink-900">
                {step.t}
              </span>
              <span className="mt-1 block text-sm leading-6 text-ink-600">
                {step.d}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6 max-w-4xl rounded-lg border border-line-300 bg-cream-200 p-6 sm:p-8">
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
