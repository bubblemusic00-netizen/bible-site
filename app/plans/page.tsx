import { BookOpenCheck, Clock, Leaf } from "lucide-react";
import {
  CardLink,
  PageIntro,
  PageShell,
  StatusNote,
} from "../components/site-ui";
import { futurePlans, peacePlan } from "./plans-data";

export default function PlansPage() {
  return (
    <PageShell active="plans">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={BookOpenCheck}
          eyebrow="Guided reading"
          title="Reading Plans"
          subtitle="Simple guided paths for Scripture, prayer, and reflection."
        />
        <StatusNote>
          Plans are quiet paths for daily attention: read, pray, reflect, and
          take one faithful step.
        </StatusNote>
      </div>

      <section className="mt-9 grid max-w-3xl gap-4">
        <CardLink
          href="/plans/peace"
          icon={Leaf}
          title={peacePlan.title}
          description={peacePlan.description}
          cta="Start plan"
        />
      </section>

      <section className="mt-6 max-w-4xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
            <Clock size={20} strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Future plans
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              More guided paths coming soon
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {futurePlans.map((plan) => (
                <span
                  key={plan}
                  className="rounded-full border border-[#d8c5a3] bg-[#fbf7ed] px-3 py-1 text-sm font-semibold text-[#355242]"
                >
                  {plan}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
