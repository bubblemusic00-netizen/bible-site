import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { CardLink, PageIntro, PageShell, StatusNote } from "../components/site-ui";
import { JsonLd } from "../components/JsonLd";
import { itemListSchema } from "@/lib/seo";
import { allVerseTopics } from "./verse-topics";

export const metadata: Metadata = {
  title: "Bible Verses by Topic",
  description:
    "King James Version Bible verses gathered by topic — strength, anxiety, healing, hope, grief, and peace — each with a short reflection and a prayer.",
  alternates: { canonical: "/verses" },
};

const occasionSlugs = new Set([
  "baptism",
  "wedding",
  "sympathy",
  "graduation",
]);

export default function VersesPage() {
  const occasionTopics = allVerseTopics.filter((t) =>
    occasionSlugs.has(t.slug),
  );
  const facingTopics = allVerseTopics.filter(
    (t) => !occasionSlugs.has(t.slug),
  );
  const groups = [
    { title: "For what you are facing", topics: facingTopics },
    { title: "For life's moments", topics: occasionTopics },
  ].filter((g) => g.topics.length > 0);

  return (
    <PageShell>
      <JsonLd
        data={itemListSchema(
          "Bible Verses by Topic",
          allVerseTopics.map((topic) => ({
            name: topic.title,
            path: `/verses/${topic.slug}`,
          })),
        )}
      />
      <PageIntro
        icon={BookOpenText}
        eyebrow="Topical Scripture"
        title="Bible verses for what you are facing."
        subtitle="Short, gathered passages for real moments — each with a quiet reflection and a prayer to carry it further."
      />

      <div data-reveal-stagger className="mt-9 grid gap-14">
        {groups.map((group) => (
          <section key={group.title} className="border-t border-[#dfcfb2] pt-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                {group.title}
              </p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ac9061]">
                {group.topics.length} topics
              </span>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.topics.map((topic) => (
                <CardLink
                  key={topic.slug}
                  href={`/verses/${topic.slug}`}
                  icon={BookOpenText}
                  title={topic.shortTitle}
                  description={topic.intro.split(/(?<=\.)\s/)[0]}
                  cta="Read the verses"
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 max-w-4xl">
        <StatusNote>
          Scripture text from the King James Version (KJV), public domain. Read
          each verse in its full context with prayer and care.
        </StatusNote>
      </div>
    </PageShell>
  );
}
