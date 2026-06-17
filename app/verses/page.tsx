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

export default function VersesPage() {
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

      <section className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {allVerseTopics.map((topic) => (
          <CardLink
            key={topic.slug}
            href={`/verses/${topic.slug}`}
            icon={BookOpenText}
            title={topic.shortTitle}
            description={`${topic.verses.length} verses on ${topic.shortTitle.toLowerCase()}, with a reflection and a prayer.`}
            cta="Read the verses"
          />
        ))}
      </section>

      <div className="mt-8 max-w-4xl">
        <StatusNote>
          Scripture text from the King James Version (KJV), public domain. Read
          each verse in its full context with prayer and care.
        </StatusNote>
      </div>
    </PageShell>
  );
}
