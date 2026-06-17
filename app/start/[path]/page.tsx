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
import {
  BackButton,
  PageIntro,
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
    <PageShell active="start">
      <SaveSelectedFaithPath pathSlug={linkedFaithPathSlug} />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Faith Quiz Result"
          title={`${faithPath.title} Faith Path`}
          subtitle={faithPath.pastoralIntro}
        />
        <StatusNote>{faithPath.carefulLine}</StatusNote>
      </div>

      <section className="mt-8 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-6">
        <p className="text-sm font-semibold uppercase text-[#8f6220]">
          Full Faith Quiz result
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
          Scripture, prayer, reflection, and one careful next step.
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {[
            ["Scripture", "Read a reference slowly."],
            ["Prayer", "Name the need honestly."],
            ["Reflect", "Answer one careful prompt."],
            ["Step", "Take one small faithful action."],
          ].map(([title, description], index) => (
            <article key={title} className="rounded-lg bg-[#fbf7ed] p-4">
              <span className="grid size-9 place-items-center rounded-full bg-[#284737] text-sm font-semibold text-[#fffaf0]">
                {index + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#625b51]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <PathSection
          icon={BookOpenText}
          eyebrow="Scripture to begin with"
          title={faithPath.scriptureReference}
          body={faithPath.scriptureContext}
          href={faithPath.scriptureRoute}
          cta="Read related Scripture"
        />
        <PathSection
          icon={Heart}
          eyebrow="Prayer for today"
          title="Pray honestly"
          body={faithPath.prayer}
          href={faithPath.prayerRoute}
          cta="Open matching prayer"
        />
        <PathSection
          icon={PenLine}
          eyebrow="Reflection prompt"
          title="Hold this with care"
          body={faithPath.reflectionPrompt}
        />
        <PathSection
          icon={ShieldCheck}
          eyebrow="Small next step"
          title="One faithful action"
          body={faithPath.smallNextStep}
        />
      </div>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Optional faith symbol reminder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              A reminder, not a promise.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              {faithPath.symbolReminder} A symbol should never be treated as a
              source of power, luck, promised protection, healing, or
              spiritual results.
            </p>
          </div>
          <Link
            href={faithPath.jewelryRoute}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
          >
            Explore Faith Symbols
            <Gem size={16} strokeWidth={1.8} />
          </Link>
        </div>
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
  icon: Icon,
  eyebrow,
  title,
  body,
  href,
  cta,
}: {
  icon: typeof Leaf;
  eyebrow: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
      <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <p className="mt-5 text-sm font-semibold uppercase text-[#8f6220]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-[#625b51]">{body}</p>
      {href && cta ? (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#8f6220]"
        >
          {cta}
          <ArrowRight size={15} strokeWidth={1.8} />
        </Link>
      ) : null}
    </section>
  );
}
