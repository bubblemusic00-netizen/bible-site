import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { PageIntro, PageShell, StatusNote } from "./site-ui";

type LegalSection = {
  title: string;
  body: ReactNode;
};

export function LegalPlaceholderPage({
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
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro icon={Icon} eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <StatusNote>{note}</StatusNote>
      </div>

      {updated ? (
        <p className="mt-6 text-sm font-semibold text-[#7b561b]">
          Last updated: {updated}
        </p>
      ) : null}

      <section className="mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-7"
          >
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#241f19]">
              {section.title}
            </h2>
            <div className="mt-3 text-base leading-7 text-[#625b51]">
              {section.body}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
