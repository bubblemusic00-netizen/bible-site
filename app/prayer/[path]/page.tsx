import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenText,
  Feather,
  Heart,
} from "lucide-react";
import { redirect } from "next/navigation";
import {
  Breadcrumbs,
  PageHero,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { getPrayerPath, prayerPathKeys } from "../prayer-paths";
import { JsonLd } from "../../components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return prayerPathKeys.map((path) => ({ path }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string }>;
}): Promise<Metadata> {
  const { path } = await params;
  const prayer = getPrayerPath(path);

  if (!prayer) {
    return {
      title: "Prayer Library",
      description:
        "Choose Christian prayers for reflection, Scripture, and daily faith.",
    };
  }

  return {
    title: prayer.title,
    description: `${prayer.description} Includes before-you-pray guidance, a full prayer, related Scripture, reflection, and a small next step.`,
    alternates: {
      canonical: `/prayer/${path}`,
    },
  };
}

export default async function PrayerPathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const prayer = getPrayerPath(path);

  if (!prayer) {
    redirect("/prayer");
  }

  return (
    <PageShell
      active="prayer"
      hero={
        <PageHero
          icon={Heart}
          eyebrow={prayer.theme}
          title={prayer.title}
          subtitle={prayer.description}
          breadcrumbs={
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Home", path: "/" },
                { name: "Prayer Library", path: "/prayer" },
                { name: prayer.title, path: `/prayer/${path}` },
              ]}
            />
          }
        />
      }
    >
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Prayer Library", path: "/prayer" },
            { name: prayer.title, path: `/prayer/${path}` },
          ]),
          articleSchema({
            headline: prayer.title,
            description: prayer.description,
            path: `/prayer/${path}`,
          }),
        ]}
      />
      <div className="mx-auto w-full max-w-6xl">
        <section className="relative overflow-hidden rounded-lg border border-line-200 bg-cream-300 px-4 py-10 shadow-elev-5 sm:px-8 sm:py-12 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(196,156,82,0.18),transparent_66%)]" />
          <div className="pointer-events-none absolute inset-y-8 left-8 hidden w-px bg-gradient-to-b from-transparent via-line-400 to-transparent opacity-70 lg:block" />
          <div className="pointer-events-none absolute inset-y-8 right-8 hidden w-px bg-gradient-to-b from-transparent via-line-400 to-transparent opacity-70 lg:block" />

          <section className="relative mx-auto w-full max-w-[760px] rounded-lg border border-line-300 bg-cream-100 px-5 py-7 shadow-elev-4 sm:px-9 sm:py-9">
            <p className="text-sm font-semibold uppercase tracking-label text-gold-700">
              Before you pray
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900">
              {prayer.beforeHeading}
            </h2>
            <p className="mt-4 text-base leading-8 text-ink-600">
              {prayer.beforeYouPray}
            </p>
          </section>

          <article className="relative mx-auto mt-6 w-full max-w-[760px] rounded-lg border border-line-300 bg-cream-100 px-5 py-8 shadow-elev-4 sm:px-9 sm:py-11">
            <div className="border-b border-line-200 pb-6">
              <p className="text-sm font-semibold uppercase tracking-label text-gold-700">
                The prayer
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                {prayer.prayerHeading}
              </h2>
            </div>

            <div className="mt-8 space-y-5 font-serif text-[1.3rem] leading-body text-ink-800 sm:space-y-6 sm:text-[1.5rem] sm:leading-body">
              {prayer.prayer.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[3.6rem] first-letter:font-semibold first-letter:leading-[0.72] first-letter:text-gold-700 sm:first-letter:text-[4.4rem]"
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </section>

        <section
          id="after-prayer" data-reveal
          className="mx-auto mt-8 w-full max-w-[980px] rounded-lg border border-note-line bg-mist-200 p-5 shadow-elev-green-3 sm:p-8"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-label text-gold-800">
              <Feather size={15} strokeWidth={1.8} />
              After you pray
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              {prayer.reflectionHeading}
            </h2>
            <div className="mt-6 grid gap-4">
              <Link
                href={prayer.relatedBible.href}
                className="group rounded-lg border border-note-line bg-cream-300 p-5 transition hover:border-gold-500 hover:bg-cream-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-ink-900">
                      Related Scripture
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-gold-700">
                      {prayer.relatedBible.label}
                    </p>
                  </div>
                  <BookOpenText
                    size={18}
                    className="shrink-0 text-green-600 transition group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </div>
                <p className="mt-3 text-base leading-7 text-ink-600">
                  {prayer.relatedBible.description}
                </p>
              </Link>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-note-line bg-cream-300 p-5">
                  <h3 className="font-serif text-2xl font-semibold text-ink-900">
                    Reflection prompt
                  </h3>
                  <p className="mt-2 text-base leading-7 text-ink-600">
                    {prayer.reflectionPrompt}
                  </p>
                </div>
                <div className="rounded-lg border border-note-line bg-cream-300 p-5">
                  <h3 className="font-serif text-2xl font-semibold text-ink-900">
                    Small next step
                  </h3>
                  <p className="mt-2 text-base leading-7 text-ink-600">
                    {prayer.smallNextStep}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-note-line bg-cream-300 p-5">
                <h3 className="font-serif text-2xl font-semibold text-ink-900">
                  Optional faith-symbol reminder
                </h3>
                <p className="mt-2 text-base leading-7 text-ink-600">
                  {prayer.symbolReminder} Faith symbols are reminders of prayer
                  and Scripture, not promises, guarantees, or sources of
                  spiritual power.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 w-full max-w-[980px]">
          <StatusNote>
            Prayer guidance on this site is for Scripture-rooted reflection and
            encouragement. It does not promise outcomes or replace pastoral
            care, counseling, medical help, emergency support, or trusted
            community.
          </StatusNote>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[980px] flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton href={prayer.relatedFaithQuizPath}>
            Take the Faith Quiz
            <ArrowRight size={16} strokeWidth={1.8} />
          </PrimaryButton>
          <SecondaryButton href="/prayer">Prayer Library</SecondaryButton>
          <SecondaryButton href="/bible">Guided Bible Readings</SecondaryButton>
          <SecondaryButton href="/jewelry">Faith Symbols</SecondaryButton>
        </div>
      </div>
    </PageShell>
  );
}
