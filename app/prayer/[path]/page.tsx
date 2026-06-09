import { Heart } from "lucide-react";
import { redirect } from "next/navigation";
import { FaithJourneyNav } from "@/app/components/FaithJourneyNav";
import { getFaithPathBySlug } from "@/lib/faith-paths";
import {
  BackButton,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { getPrayerPath, prayerPathKeys } from "../prayer-paths";

export function generateStaticParams() {
  return prayerPathKeys.map((path) => ({ path }));
}

export default async function PrayerPathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const details = getPrayerPath(path);
  const faithPath = getFaithPathBySlug(path);

  if (!details || !faithPath) {
    redirect("/prayer");
  }

  return (
    <PageShell active="prayer">
      <PageIntro
        icon={Heart}
        eyebrow="Prayer path"
        title={details.headline}
        subtitle={details.intro}
      />

      <FaithJourneyNav pathSlug={faithPath.slug} currentStep="pray" />

      <article className="mt-6 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.08)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Read
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Begin with Scripture
        </h2>
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
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Hold it honestly
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            {details.reflection}
          </p>
        </section>

        <section className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Pray
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Start with a simple prayer
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            {details.prayer}
          </p>
        </section>
      </div>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Carry
        </p>
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Carry this intention
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          Faith symbols connected to {details.intention} can serve as simple
          reminders of prayer and Scripture. They are not sources of protection,
          blessing, healing, or spiritual power.
        </p>
        <div className="mt-5 rounded-lg border border-[#d8c5a3] bg-[#fffaf0] p-4">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Today&apos;s step
          </p>
          <p className="mt-2 text-base leading-7 text-[#625b51]">
            {details.step}
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SecondaryButton href={faithPath.jewelryRoute}>
            Explore faith symbols for this intention
          </SecondaryButton>
        </div>
      </section>

      <div className="mt-6 max-w-5xl">
        <StatusNote>
          Scripture text from the World English Bible (WEB), public domain.
        </StatusNote>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/prayer" label="Back to all prayer paths" />
        <SecondaryButton href={faithPath.scriptureRoute}>
          Read more in Bible
        </SecondaryButton>
        <SecondaryButton href={faithPath.jewelryRoute}>
          Explore faith symbols for this intention
        </SecondaryButton>
      </div>
    </PageShell>
  );
}
