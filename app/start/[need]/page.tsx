import { Leaf } from "lucide-react";
import { notFound } from "next/navigation";
import {
  BackButton,
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { needKeys, needs } from "../needs";

export function generateStaticParams() {
  return needKeys.map((need) => ({ need }));
}

export default async function NeedPage({
  params,
}: {
  params: Promise<{ need: string }>;
}) {
  const { need } = await params;
  const details = needs[need as keyof typeof needs];

  if (!details) {
    notFound();
  }

  return (
    <PageShell active="start">
      <PageIntro
        icon={Leaf}
        eyebrow="Quiet starting point"
        title={details.headline}
        subtitle={details.intro}
      />

      <section className="mt-8 max-w-4xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          1. Pause
        </p>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          {details.pause}
        </p>
      </section>

      <div className="mt-5 grid max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            2. Pray
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">Short prayer</h2>
          <p className="mt-4 text-base leading-7 text-[#625b51]">
            {details.prayer}
          </p>
        </article>

        <section className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            3. Reflect
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Reflection question
          </h2>
          <p className="mt-4 text-base leading-7 text-[#625b51]">
            {details.question}
          </p>
        </section>
      </div>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              4. Tiny action step
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Do one small thing
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              {details.action}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Continue from here
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButton href={`/prayer/${need}`}>
                Prayer for {details.title}
              </PrimaryButton>
              {need === "peace" ? (
                <SecondaryButton href="/plans/peace/day-1">
                  7 Days of Peace
                </SecondaryButton>
              ) : (
                <SecondaryButton href="/verse-of-the-day">
                  Verse of the Day
                </SecondaryButton>
              )}
              <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Faith reminder coming soon
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          Later, this path may connect to a simple Christian reminder item. It
          would be presented as a daily prompt to pause and pray, not as a
          source of protection, blessing, healing, miracles, or spiritual power.
        </p>
        <div className="mt-5">
          <StatusNote>{details.reminder}</StatusNote>
        </div>
      </section>

      <div className="mt-8">
        <BackButton href="/start" label="Back to Start" />
      </div>
    </PageShell>
  );
}
