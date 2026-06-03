import { Heart } from "lucide-react";
import { notFound } from "next/navigation";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { prayerTopicKeys, prayerTopics } from "../topics";

export function generateStaticParams() {
  return prayerTopicKeys.map((topic) => ({ topic }));
}

export default async function PrayerTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const details = prayerTopics[topic as keyof typeof prayerTopics];

  if (!details) {
    notFound();
  }

  return (
    <PageShell active="prayer">
      <PageIntro
        icon={Heart}
        eyebrow="Prayer moment"
        title={details.headline}
        subtitle={details.intro}
      />

      <section className="mt-8 max-w-4xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Pause
        </p>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          {details.pause}
        </p>
      </section>

      <div className="mt-5 grid max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[#241f19]">Prayer</h2>
          <p className="mt-4 text-base leading-7 text-[#625b51]">
            {details.prayer}
          </p>
        </article>

        <section className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
            Reflection question
          </h2>
          <p className="mt-4 text-base leading-7 text-[#625b51]">
            {details.question}
          </p>
        </section>
      </div>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Small action step
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Carry this prayer into the day
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          {details.action}
        </p>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <StatusNote>
          Prayer is not a formula. This page is a quiet starting point for
          turning your heart toward God.
        </StatusNote>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/start">Find what you need today</PrimaryButton>
        {topic === "peace" ? (
          <SecondaryButton href="/plans/peace/day-1">
            Continue with 7 Days of Peace
          </SecondaryButton>
        ) : null}
        <SecondaryButton href="/verse-of-the-day">Verse of the Day</SecondaryButton>
        <SecondaryButton href="/prayer">Back to Prayer Guide</SecondaryButton>
      </div>
    </PageShell>
  );
}
