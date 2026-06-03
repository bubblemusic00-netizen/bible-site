import { Gem, Leaf } from "lucide-react";
import { notFound } from "next/navigation";
import {
  BackButton,
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { jewelryCategories, jewelryCategoryKeys } from "../categories";

const goodFor = [
  "daily wear",
  "gifts",
  "reminders of faith",
  "encouragement",
];

export function generateStaticParams() {
  return jewelryCategoryKeys.map((category) => ({ category }));
}

export default async function JewelryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const details =
    jewelryCategories[category as keyof typeof jewelryCategories];

  if (!details) {
    notFound();
  }

  return (
    <PageShell active="jewelry">
      <PageIntro
        icon={Gem}
        eyebrow="Coming soon"
        title={details.name}
        subtitle={details.detail}
      />

      <section className="mt-9 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Coming soon
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          A future faith-reminder category
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#625b51]">
          This page is preparing space for a future collection preview rooted
          in daily remembrance and thoughtful gifting. It does not contain
          products, prices, checkout, or reviews.
        </p>
        <div className="mt-6">
          <StatusNote>
            These items would be reminders of faith only, not sources of
            protection, blessing, healing, power, or miracles.
          </StatusNote>
        </div>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
            <Leaf size={20} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
              What this category may be good for
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {goodFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#355242]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <BackButton href="/jewelry" label="Back to Jewelry" />
        <SecondaryButton href="/start">Start with what you need</SecondaryButton>
      </div>
    </PageShell>
  );
}
