import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { redirect } from "next/navigation";
import {
  BackButton,
  PageIntro,
  PageShell,
  SecondaryButton,
} from "../../components/site-ui";
import { getBibleBook, supportedBibleChapters } from "../bible-data";

export function generateStaticParams() {
  return Array.from(
    new Set(supportedBibleChapters.map((chapter) => chapter.bookSlug)),
  ).map((book) => ({ book }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ book: string }>;
}): Promise<Metadata> {
  const { book } = await params;
  const details = getBibleBook(book);

  if (!details) {
    return { title: "Bible Book" };
  }

  return {
    title: `${details.name} Guided Bible Readings`,
    description: details.description,
    alternates: { canonical: `/bible/${book}` },
  };
}

export default async function BibleBookPage({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book } = await params;
  const details = getBibleBook(book);

  if (!details) {
    redirect("/bible");
  }

  if (details.availableChapters.length > 0) {
    return <AvailableBookOverview slug={book} />;
  }

  redirect("/bible");
}

function AvailableBookOverview({ slug }: { slug: string }) {
  const details = getBibleBook(slug);

  if (!details) {
    redirect("/bible");
  }

  return (
    <PageShell active="bible">
      <PageIntro
        icon={BookOpenText}
        eyebrow="Bible book"
        title={details.name}
        subtitle={details.description}
      />

      <section className="mt-9 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#8f6220]">
          Finished guided readings
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Read {details.name}
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          {details.translationNote}
        </p>

        <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
          {details.availableChapters.map((chapter) => (
            <Link
              key={chapter}
              href={`/bible/${details.slug}/${chapter}`}
              className="group flex min-h-20 flex-col justify-between gap-3 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] px-4 py-3 transition hover:border-[#c49c52] hover:bg-[#fffaf1]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {details.name} {chapter}
                </span>
                <ArrowRight
                  size={17}
                  className="shrink-0 text-[#8f6220] transition group-hover:translate-x-1"
                />
              </div>
              <span className="w-fit rounded-full bg-[#284737] px-3 py-1 text-xs font-semibold text-[#fffaf0]">
                Guided reading
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BackButton href="/bible" label="Back to Bible" />
        <SecondaryButton href="/prayer">Pray before reading</SecondaryButton>
      </div>
    </PageShell>
  );
}
