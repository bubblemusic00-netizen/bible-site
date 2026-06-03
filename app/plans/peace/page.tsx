import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../components/site-ui";
import { peacePlan } from "../plans-data";

export default function PeacePlanPage() {
  return (
    <PageShell active="plans">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Reading plan"
          title={peacePlan.title}
          subtitle={peacePlan.description}
        />
        <StatusNote>{peacePlan.intro}</StatusNote>
      </div>

      <section className="mt-9 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Plan days
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Begin with one quiet day
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#625b51]">
          Day 1 is available now. The remaining days are intentionally marked as
          coming soon while this plan is built out carefully.
        </p>

        <div className="mt-6 grid gap-3">
          {peacePlan.days.map((day) =>
            day.available ? (
              <Link
                key={day.day}
                href={day.href}
                className="group flex flex-col gap-3 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 transition hover:border-[#c49c52] hover:bg-[#fffaf1] sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold uppercase text-[#9a6a24]">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#241f19]">
                    {day.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#254737]">
                  Start day
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ) : (
              <div
                key={day.day}
                className="flex flex-col gap-3 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold uppercase text-[#9a6a24]">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#241f19]">
                    {day.title}
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-[#eef1e8] px-3 py-1 text-xs font-semibold text-[#2f5140]">
                  Coming soon
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/plans/peace/day-1">Start Day 1</PrimaryButton>
        <SecondaryButton href="/plans">Back to Plans</SecondaryButton>
        <SecondaryButton href="/start">Find what you need today</SecondaryButton>
      </div>
    </PageShell>
  );
}
