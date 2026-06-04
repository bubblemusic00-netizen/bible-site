import { BookOpenText, Gem, Heart, Leaf } from "lucide-react";
import Link from "next/link";
import { SaveSelectedFaithPath } from "@/app/components/ContinueFaithPath";
import { FaithJourneyNav } from "@/app/components/FaithJourneyNav";
import {
  BackButton,
  CardLink,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import {
  faithPathSlugs,
  getFaithPathBySlug,
} from "@/lib/faith-paths";

export function generateStaticParams() {
  return faithPathSlugs.map((path) => ({ path }));
}

export default async function StartPathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const faithPath = getFaithPathBySlug(path);

  if (!faithPath) {
    return (
      <PageShell active="start">
        <PageIntro
          icon={Leaf}
          eyebrow="Faith Path Finder"
          title="Faith path coming soon"
          subtitle="This intention is not available yet, but you can still begin with prayer or choose another path."
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <BackButton href="/start" label="Back to Start" />
          <SecondaryButton href="/prayer">Prayer Guide</SecondaryButton>
        </div>
      </PageShell>
    );
  }

  const journeySteps = [
    {
      title: "Pray",
      description: `Begin with a guided prayer moment for ${faithPath.shortLabel.toLowerCase()}.`,
      href: faithPath.prayerRoute,
      icon: Heart,
    },
    {
      title: "Read",
      description: "Continue with a short Scripture reflection for this intention.",
      href: faithPath.scriptureRoute,
      icon: BookOpenText,
    },
    {
      title: "Carry",
      description:
        "Explore a future symbolic reminder of faith. No products or checkout yet.",
      href: faithPath.jewelryRoute,
      icon: Gem,
    },
  ];

  return (
    <PageShell active="start">
      <SaveSelectedFaithPath pathSlug={faithPath.slug} />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Your Faith Path"
          title={`Your path today: ${faithPath.title}`}
          subtitle={faithPath.finderIntro}
        />
        <StatusNote>
          The Carry step is symbolic only. Future faith symbols would be daily
          reminders of belief, not a guarantee of protection, healing, blessing,
          or spiritual power.
        </StatusNote>
      </div>

      <FaithJourneyNav pathSlug={faithPath.slug} currentStep="start" />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {journeySteps.map((step) => (
          <CardLink
            key={step.title}
            href={step.href}
            icon={step.icon}
            title={step.title}
            description={step.description}
            cta={`Go to ${step.title.toLowerCase()}`}
          />
        ))}
      </section>

      <div className="mt-8">
        <BackButton href="/start" label="Choose another path" />
        <Link
          href="/start"
          className="mt-4 inline-flex text-sm font-semibold text-[#6d5e4a] transition hover:text-[#254737]"
        >
          Choose a different path
        </Link>
      </div>
    </PageShell>
  );
}
