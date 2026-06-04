import { BookOpenText } from "lucide-react";
import { FaithJourneyNav } from "@/app/components/FaithJourneyNav";
import { getFaithPathBySlug } from "@/lib/faith-paths";
import {
  BackButton,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../../components/site-ui";
import { getScripturePath, scripturePathKeys } from "../../scripture-paths";

export function generateStaticParams() {
  return scripturePathKeys.map((path) => ({ path }));
}

export default async function ScripturePathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const details = getScripturePath(path);
  const faithPath = getFaithPathBySlug(path);

  if (!details || !faithPath) {
    return <ScripturePathComingSoon />;
  }

  return (
    <PageShell active="bible">
      <PageIntro
        icon={BookOpenText}
        eyebrow="Scripture Path"
        title={details.title}
        subtitle={details.intro}
      />

      <FaithJourneyNav pathSlug={faithPath.slug} currentStep="read" />

      <article className="mt-8 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.08)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Scripture
        </p>
        <blockquote className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
          &ldquo;{details.verse.text}&rdquo;
        </blockquote>
        <p className="mt-5 text-sm font-semibold text-[#2f5140]">
          {details.verse.reference} - {details.verse.translation}
        </p>
      </article>

      <div className="mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
        <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Reflect
          </p>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            {details.reflection}
          </p>
        </section>

        <section className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Next step
          </p>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            {details.nextStep}
          </p>
        </section>
      </div>

      <div className="mt-6 max-w-5xl">
        <StatusNote>
          Scripture text from the World English Bible (WEB), public domain.
        </StatusNote>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/bible" label="Back to Bible" />
        <SecondaryButton href={details.prayerHref}>
          Return to matching prayer path
        </SecondaryButton>
        <SecondaryButton href={details.jewelryHref}>
          Explore matching faith symbol
        </SecondaryButton>
      </div>
    </PageShell>
  );
}

function ScripturePathComingSoon() {
  return (
    <PageShell active="bible">
      <PageIntro
        icon={BookOpenText}
        eyebrow="Scripture Path"
        title="Scripture path coming soon"
        subtitle="This Scripture Path is not available yet, but you can return to Scripture or prayer."
      />

      <section className="mt-8 max-w-3xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Choose another Scripture path
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          No Scripture Path content is included for this intention yet.
        </p>
        <div className="mt-6">
          <StatusNote>Scripture path coming soon.</StatusNote>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/bible" label="Back to Bible" />
        <SecondaryButton href="/prayer">Back to Prayer</SecondaryButton>
      </div>
    </PageShell>
  );
}
