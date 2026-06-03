import Link from "next/link";
import { ArrowRight, Gem, Leaf } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  StatusNote,
} from "../components/site-ui";
import { jewelryCategories, jewelryCategoryKeys } from "./categories";

export default function JewelryPage() {
  return (
    <PageShell active="jewelry">
      <PageIntro
        icon={Gem}
        eyebrow="Coming soon"
        title="Christian Jewelry"
        subtitle="Faith reminders for everyday life."
      />

      <section className="mt-8 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Future collections
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Meaningful pieces, not spiritual shortcuts.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Future items may include Christian pieces designed as daily
            reminders of faith, hope, peace, and gratitude. The spiritual value
            is in the prayer and remembrance they point toward, not in the item
            itself.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {jewelryCategoryKeys.map((key) => {
          const category = jewelryCategories[key];

          return (
            <Link
              key={key}
              href={`/jewelry/${key}`}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                  <Gem size={20} strokeWidth={1.8} />
                </span>
                <ArrowRight
                  size={17}
                  className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <h2 className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                  {category.name}
                </h2>
                <span className="shrink-0 rounded-full bg-[#eef1e8] px-3 py-1 text-xs font-semibold text-[#2f5140]">
                  Coming soon
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#625b51]">
                {category.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#254737]">
                Preview collection
              </p>
            </Link>
          );
        })}
      </section>

      <section className="mt-6 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Find your faith reminder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Start with what you want to remember.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              Later, a guided finder may help visitors choose a meaningful item
              based on what they want to remember, pray over, or gift with care.
            </p>
          </div>
          <PrimaryButton href="/start">
            <Leaf size={16} strokeWidth={1.8} />
            Start with what you need
          </PrimaryButton>
        </div>
      </section>

      <div className="mt-6 max-w-3xl">
        <StatusNote>
          No products, prices, checkout, or reviews are available yet.
        </StatusNote>
      </div>
    </PageShell>
  );
}
