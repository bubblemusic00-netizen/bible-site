import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BookOpenText,
  Compass,
  Feather,
  Heart,
  Landmark,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import {
  Breadcrumbs,
  PageHero,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import {
  getGuide,
  guideGroups,
  guideKeys,
  guides,
  type GuideLink,
} from "../guide-data";
import { JsonLd } from "../../components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return guideKeys.map((guide) => ({ guide }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}): Promise<Metadata> {
  const { guide: guideSlug } = await params;
  const guide = getGuide(guideSlug);

  if (!guide) {
    return {
      title: "Beginner Christian Guides",
      description:
        "Beginner-friendly Christian guides for Scripture, prayer, faith, and reflection.",
    };
  }

  return {
    title:
      guide.slug === "how-to-use-hope-bible"
        ? "How to Use This Site"
        : guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guideSlug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide: guideSlug } = await params;
  const guide = getGuide(guideSlug);

  if (!guide) {
    redirect("/guides");
  }

  const siblingGuides = guideKeys
    .map((key) => guides[key])
    .filter((g) => g.group === guide.group && g.slug !== guide.slug);
  const groupTitle =
    guideGroups.find((group) => group.key === guide.group)?.title ??
    "More guides";

  return (
    <PageShell
      active="guides"
      hero={
        <PageHero
          icon={Compass}
          eyebrow={guide.audience}
          title={guide.title}
          subtitle={guide.intro}
          breadcrumbs={
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Home", path: "/" },
                { name: "Beginner Guides", path: "/guides" },
                { name: guide.title, path: `/guides/${guideSlug}` },
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
            { name: "Beginner Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guideSlug}` },
          ]),
          articleSchema({
            headline: guide.title,
            description: guide.description,
            path: `/guides/${guideSlug}`,
          }),
        ]}
      />
      <div className="mx-auto w-full max-w-6xl">
        <section className="relative overflow-hidden rounded-lg border border-[#ded1ba] bg-[#f7f0e3] px-4 py-10 shadow-[0_28px_90px_rgba(71,55,35,0.09)] sm:px-8 sm:py-12 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(196,156,82,0.18),transparent_66%)]" />
          <div className="pointer-events-none absolute inset-y-8 left-8 hidden w-px bg-gradient-to-b from-transparent via-[#d8c5a3] to-transparent opacity-70 lg:block" />
          <div className="pointer-events-none absolute inset-y-8 right-8 hidden w-px bg-gradient-to-b from-transparent via-[#d8c5a3] to-transparent opacity-70 lg:block" />

          <div className="relative mx-auto grid w-full max-w-[920px] gap-5 lg:grid-cols-[0.74fr_1.26fr]">
            <aside className="h-fit rounded-lg border border-[#d9c59d] bg-[#fffdf8] p-5 shadow-[0_22px_70px_rgba(71,55,35,0.07)] sm:p-6 lg:sticky lg:top-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8f6220]">
                In this guide
              </p>
              <ul className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-[#355242]">
                {guide.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${toSectionId(section.heading)}`}
                      className="inline-flex min-h-9 items-center transition hover:text-[#8f6220]"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#try-this-today"
                    className="inline-flex min-h-9 items-center transition hover:text-[#8f6220]"
                  >
                    Try this today
                  </a>
                </li>
              </ul>
            </aside>

            <article className="grid gap-5">
              {guide.sections.map((section) => (
                <section
                  id={toSectionId(section.heading)}
                  key={section.heading}
                  className="scroll-mt-24 rounded-lg border border-[#d9c59d] bg-[#fffdf8] px-5 py-7 shadow-[0_22px_70px_rgba(71,55,35,0.07)] sm:px-8"
                >
                  <h2 className="font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#625b51]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </section>

        <section
          id="try-this-today"
          className="mx-auto mt-8 w-full max-w-[980px] rounded-lg border border-[#d8ddcf] bg-[#eef1e8] p-5 shadow-[0_20px_50px_rgba(40,71,55,0.08)] sm:p-8"
        >
          <div className="mx-auto max-w-[780px]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7b561b]">
              <ListChecks size={15} strokeWidth={1.8} />
              Try this today
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Start small enough to actually begin.
            </h2>
            <ol className="mt-6 grid gap-3">
              {guide.practicalSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-lg border border-[#d0d9c8] bg-[#fbf7ed] p-4 text-base leading-7 text-[#625b51]"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-[#284737] text-sm font-semibold text-[#fffaf0]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto mt-8 grid w-full max-w-[980px] gap-4 lg:grid-cols-2">
          <RelatedLinks
            icon={BookOpenText}
            title="Related Bible readings"
            links={guide.relatedBible}
          />
          <RelatedLinks
            icon={Heart}
            title="Related prayers"
            links={guide.relatedPrayers}
          />
          <RelatedLinks
            icon={Feather}
            title="Faith Quiz paths"
            links={guide.relatedFaithPaths}
          />
          {guide.relatedSymbols.length > 0 ? (
            <RelatedLinks
              icon={Landmark}
              title="Symbols and boundaries"
              links={guide.relatedSymbols}
            />
          ) : null}
        </section>

        <div className="mx-auto mt-8 w-full max-w-[980px]">
          <StatusNote>{guide.boundaryNote}</StatusNote>
        </div>

        {siblingGuides.length > 0 ? (
          <section className="mx-auto mt-10 w-full max-w-[980px] border-t border-[#dfcfb2] pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
              Keep exploring &middot; {groupTitle}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siblingGuides.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/guides/${sibling.slug}`}
                  className="group flex min-w-0 flex-col rounded-xl border border-[#e4d6bd] bg-[#fffaf1]/70 p-5 shadow-[0_14px_36px_rgba(71,55,35,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_20px_48px_rgba(71,55,35,0.09)]"
                >
                  <span className="block font-serif text-xl font-semibold leading-tight text-[#241f19]">
                    {sibling.title}
                  </span>
                  <span className="mt-3 block h-px w-9 bg-[#d8c5a3] transition-all duration-200 group-hover:w-14 group-hover:bg-[#c49c52]" />
                  <span className="mt-3 block text-sm leading-6 text-[#625b51]">
                    {sibling.description}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#254737]">
                    Read
                    <ArrowRight
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mx-auto mt-8 flex w-full max-w-[980px] flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton href="/guides">
            Beginner Guides
            <ArrowRight size={16} strokeWidth={1.8} />
          </PrimaryButton>
          <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
          <SecondaryButton href="/bible">Guided Bible Readings</SecondaryButton>
          <SecondaryButton href="/prayer">Prayer Library</SecondaryButton>
          <SecondaryButton href="/content-boundaries">
            Content Boundaries
          </SecondaryButton>
        </div>
      </div>
    </PageShell>
  );
}

function RelatedLinks({
  icon: Icon,
  title,
  links,
}: {
  icon: typeof ShieldCheck;
  title: string;
  links: readonly GuideLink[];
}) {
  return (
    <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6">
      <h2 className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#8f6220]">
        <Icon size={16} strokeWidth={1.8} />
        {title}
      </h2>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 transition hover:border-[#c49c52] hover:bg-[#fffdf7]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-semibold leading-tight text-[#241f19]">
                  {link.label}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-[#625b51]">
                  {link.description}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="mt-1 shrink-0 text-[#8f6220] transition group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function toSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
