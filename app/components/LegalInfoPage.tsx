import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { PageHero, PageShell, StatusNote } from "./site-ui";

type LegalSection = {
  title: string;
  body: ReactNode;
};

export function LegalInfoPage({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  note,
  updated,
  sections,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  updated?: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell
      hero={
        <PageHero
          icon={Icon}
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />
      }
    >
      <div className="max-w-5xl">
        <StatusNote>{note}</StatusNote>
      </div>

      {updated ? (
        <p className="mt-6 text-sm font-semibold text-gold-800">
          Last updated: {updated}
        </p>
      ) : null}

      <section className="mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-7"
          >
            <h2 className="font-serif text-3xl font-semibold leading-tight text-ink-900">
              {section.title}
            </h2>
            <span className="mt-4 block h-px w-10 bg-line-400" />
            <div className="mt-4 text-base leading-7 text-ink-600">
              {section.body}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
