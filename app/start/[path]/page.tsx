import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BookOpenText,
  Gem,
  Heart,
  Leaf,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import { SaveSelectedFaithPath } from "@/app/components/ContinueFaithPath";
import { NewsletterSignup } from "../../components/forms";
import {
  BackButton,
  Breadcrumbs,
  PageHero,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import {
  getStartFaithPathBySlug,
  startFaithPathSlugs,
  type FaithPathSlug,
} from "@/lib/faith-paths";

export function generateStaticParams() {
  return startFaithPathSlugs.map((path) => ({ path }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string }>;
}): Promise<Metadata> {
  const { path } = await params;
  const faithPath = getStartFaithPathBySlug(path);

  if (!faithPath) {
    return {
      title: "Faith Path",
      description:
        "Begin a guided Faith Path with Scripture, prayer, reflection, and a simple next step.",
    };
  }

  return {
    title: `${faithPath.title} Faith Path | Scripture and Prayer`,
    description: `${faithPath.description} Begin with Scripture, prayer, reflection, and a careful next step.`,
    alternates: { canonical: `/start/${path}` },
  };
}

export default async function StartPathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const faithPath = getStartFaithPathBySlug(path);

  if (!faithPath) {
    redirect("/start");
  }

  const linkedFaithPathSlug = faithPath.linkedFaithPathSlug as FaithPathSlug;

  return (
    <PageShell
      active="start"
      hero={
        <PageHero
          icon={Leaf}
          eyebrow="Faith Quiz Result"
          title={`${faithPath.title} Faith Path`}
          subtitle={faithPath.pastoralIntro}
          breadcrumbs={
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Home", path: "/" },
                { name: "Faith Quiz", path: "/start" },
                {
                  name: `${faithPath.title} Faith Path`,
                  path: `/start/${path}`,
                },
              ]}
            />
          }
        />
      }
    >
      <SaveSelectedFaithPath pathSlug={linkedFaithPathSlug} />

      <div className="max-w-5xl">
        <StatusNote>{faithPath.carefulLine}</StatusNote>
      </div>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
          Your result, in four steps.
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
          Scripture &middot; prayer &middot; reflection &middot; step
        </span>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <PathSection
          step={1}
          icon={BookOpenText}
          eyebrow="Scripture to begin with"
          title={faithPath.scriptureReference}
          body={faithPath.scriptureContext}
          href={faithPath.scriptureRoute}
          cta="Read related Scripture"
        />
        <PathSection
          step={2}
          icon={Heart}
          eyebrow="Prayer for today"
          title="Pray honestly"
          body={faithPath.prayer}
          href={faithPath.prayerRoute}
          cta="Open matching prayer"
        />
        <PathSection
          step={3}
          icon={PenLine}
          eyebrow="Reflection prompt"
          title="Hold this with care"
          body={faithPath.reflectionPrompt}
        />
        <PathSection
          step={4}
          icon={ShieldCheck}
          eyebrow="Small next step"
          title="One faithful action"
          body={faithPath.smallNextStep}
        />
      </div>

      <section className="mt-8 rounded-lg bg-green-700 p-6 text-cream-fg shadow-elev-green-4 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-300">
              Optional faith symbol reminder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              A reminder, not a promise.
            </h2>
            <p className="mt-3 text-base leading-7 text-cream-fg/84">
              {faithPath.symbolReminder} A symbol should never be treated as a
              source of power, luck, promised protection, healing, or
              spiritual results.
            </p>
          </div>
          <Link
            href={faithPath.jewelryRoute}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream-fg px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-cream-fg"
          >
            Explore Faith Symbols
            <Gem size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section className="mt-8 max-w-3xl rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-8">
        <NewsletterSignup
          heading="Carry this past today"
          description="One short email each morning — a verse, a reflection, and a prayer to return to. No spam, unsubscribe anytime."
          cta="Send me the daily verse"
        />
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/start" label="Back to Faith Quiz" />
        <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
        <SecondaryButton href={faithPath.prayerRoute}>Prayer Guide</SecondaryButton>
        <SecondaryButton href={faithPath.jewelryRoute}>
          Faith Symbols
        </SecondaryButton>
      </div>
    </PageShell>
  );
}

function PathSection({
  step,
  icon: Icon,
  eyebrow,
  title,
  body,
  href,
  cta,
}: {
  step: number;
  icon: typeof Leaf;
  eyebrow: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-green-600 font-serif text-lg font-semibold text-cream-fg">
          {step}
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-gold-700">
          <Icon size={16} strokeWidth={1.8} />
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink-900">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-ink-600">{body}</p>
      {href && cta ? (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-gold-700"
        >
          {cta}
          <ArrowRight size={15} strokeWidth={1.8} />
        </Link>
      ) : null}
    </section>
  );
}
