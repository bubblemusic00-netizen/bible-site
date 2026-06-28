import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ArrowRight, BookOpenText, Feather, Heart } from "lucide-react";
import {
  Breadcrumbs,
  PageHero,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { JsonLd } from "../../components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { getVerseTopic, verseTopicKeys } from "../verse-topics";
import { getPrayerPath } from "../../prayer/prayer-paths";

export function generateStaticParams() {
  return verseTopicKeys.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const data = getVerseTopic(topic);

  if (!data) {
    return { title: "Bible Verses by Topic" };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/verses/${topic}` },
  };
}

export default async function VerseTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = getVerseTopic(topic);

  if (!data) {
    redirect("/verses");
  }

  const prayer = getPrayerPath(data.relatedPrayerSlug);

  return (
    <PageShell
      active="verse"
      hero={
        <PageHero
          icon={BookOpenText}
          eyebrow="Topical Scripture"
          title={data.title}
          subtitle={data.intro}
          breadcrumbs={
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Home", path: "/" },
                { name: "Bible Verses", path: "/verses" },
                { name: data.shortTitle, path: `/verses/${topic}` },
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
            { name: "Bible Verses by Topic", path: "/verses" },
            { name: data.shortTitle, path: `/verses/${topic}` },
          ]),
          articleSchema({
            headline: data.title,
            description: data.description,
            path: `/verses/${topic}`,
          }),
        ]}
      />

      <section className="max-w-4xl space-y-0 overflow-hidden rounded-lg border border-line-300 bg-cream-200">
        {data.verses.map((verse, i) => (
          <div
            key={verse.reference}
            className="flex gap-4 border-b border-line-200 px-5 py-6 last:border-b-0 sm:gap-6 sm:px-7"
          >
            <span
              aria-hidden
              className="mt-1.5 font-serif text-base font-semibold leading-none text-gold-700"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-label text-gold-700">
                {verse.reference}
              </p>
              <blockquote className="mt-3 font-serif text-[1.3rem] leading-body text-ink-800 sm:text-[1.55rem]">
                &ldquo;{verse.text}&rdquo;
              </blockquote>
            </div>
          </div>
        ))}
      </section>

      <section data-reveal className="mt-6 max-w-4xl rounded-lg border border-note-line bg-mist-200 p-6 sm:p-8">
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-label text-gold-800">
          <Feather size={15} strokeWidth={1.8} />
          A quiet reflection
        </p>
        <p className="mt-3 text-base leading-7 text-green-500">
          {data.reflection}
        </p>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {prayer ? (
          <PrimaryButton href={`/prayer/${prayer.slug}`}>
            <Heart size={16} strokeWidth={1.8} />
            Pray about {data.shortTitle.toLowerCase()}
          </PrimaryButton>
        ) : null}
        <SecondaryButton href={`/start/${data.relatedFaithPath}`}>
          Take the Faith Quiz
          <ArrowRight size={15} strokeWidth={1.8} />
        </SecondaryButton>
        <SecondaryButton href="/verses">More verse topics</SecondaryButton>
      </div>

      <div className="mt-8 max-w-4xl">
        <StatusNote>
          Scripture text from the King James Version (KJV), public domain. Read
          each verse in its surrounding context with prayer and care.
        </StatusNote>
      </div>
    </PageShell>
  );
}
