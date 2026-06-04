import { Gem, Leaf } from "lucide-react";
import { FaithJourneyNav } from "@/app/components/FaithJourneyNav";
import { getFaithPathBySlug } from "@/lib/faith-paths";
import {
  BackButton,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import {
  getJewelryIntention,
  jewelryIntentionKeys,
} from "../intentions";

export function generateStaticParams() {
  return jewelryIntentionKeys.map((intention) => ({ intention }));
}

export default async function JewelryIntentionPage({
  params,
}: {
  params: Promise<{ intention: string }>;
}) {
  const { intention } = await params;
  const details = getJewelryIntention(intention);
  const faithPath = getFaithPathBySlug(intention);

  if (!details || !faithPath) {
    return <IntentionComingSoon />;
  }

  return (
    <PageShell active="jewelry">
      <PageIntro
        icon={Gem}
        eyebrow="Faith reminder"
        title={faithPath.title}
        subtitle={details.intro}
      />

      <FaithJourneyNav pathSlug={faithPath.slug} currentStep="carry" />

      <section className="mt-8 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          What this symbol could represent
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          {details.futureDirection}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#625b51]">
          {details.represents}
        </p>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
            <Leaf size={20} strokeWidth={1.8} />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Future directions
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Placeholder categories
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {details.placeholders.map((placeholder) => (
                <div
                  key={placeholder}
                  className="rounded-lg border border-[#d8c5a3] bg-[#fffaf0] p-4"
                >
                  <p className="font-serif text-2xl font-semibold text-[#241f19]">
                    {placeholder}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#625b51]">
                    Future symbolic reminder. Coming soon.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6 max-w-5xl">
        <StatusNote>
          Jewelry shown here is planned as a symbolic reminder of faith and is
          not a guarantee of protection, healing, or blessing.
        </StatusNote>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/jewelry" label="Back to Jewelry" />
        <SecondaryButton href={faithPath.prayerRoute}>
          Return to prayer path
        </SecondaryButton>
        <SecondaryButton href={faithPath.scriptureRoute}>
          Read scripture for this intention
        </SecondaryButton>
      </div>
    </PageShell>
  );
}

function IntentionComingSoon() {
  return (
    <PageShell active="jewelry">
      <PageIntro
        icon={Gem}
        eyebrow="Faith reminder"
        title="Intention coming soon"
        subtitle="This faith reminder intention is not available yet."
      />

      <section className="mt-8 max-w-3xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Choose another intention
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          No jewelry preview or product information is included for this
          intention yet.
        </p>
        <div className="mt-6">
          <StatusNote>
            Jewelry shown here is planned as a symbolic reminder of faith and
            is not a guarantee of protection, healing, or blessing.
          </StatusNote>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/jewelry" label="Back to Jewelry" />
        <SecondaryButton href="/prayer">Start with prayer</SecondaryButton>
      </div>
    </PageShell>
  );
}
