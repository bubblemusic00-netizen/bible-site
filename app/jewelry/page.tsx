import { Gem, Leaf } from "lucide-react";
import { faithPaths } from "@/lib/faith-paths";
import {
  CardLink,
  PageIntro,
  PageShell,
  PrimaryButton,
  StatusNote,
} from "../components/site-ui";
import { jewelryIntentionKeys, jewelryIntentions } from "./intentions";

export default function JewelryPage() {
  return (
    <PageShell active="jewelry">
      <PageIntro
        icon={Gem}
        eyebrow="Faith reminders"
        title="Carry your faith daily."
        subtitle="Faith symbols and Christian jewelry designed around the hope, strength, peace, and guidance people want to remember each day."
      />

      <section className="mt-8 max-w-4xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Coming soon
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Choose a symbol for the faith you want to carry.
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          This future layer will connect prayer intentions with tasteful
          Christian reminders. Nothing here is for sale yet, and these symbols
          will be reminders of faith only.
        </p>
      </section>

      <section className="mt-7">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Choose an intention
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Start with what you want to remember.
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {jewelryIntentionKeys.map((key) => {
            const intention = jewelryIntentions[key];
            const faithPath = faithPaths[key];

            return (
              <CardLink
                key={key}
                href={faithPath.jewelryRoute}
                icon={Gem}
                title={faithPath.title}
                description={`${faithPath.description} ${intention.futureDirection}`}
                cta="Explore intention"
              />
            );
          })}
        </div>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Faith Path connection
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Begin with prayer, then carry the intention.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              The prayer paths help visitors choose what they need today. This
              section prepares a future way to remember that intention with
              care.
            </p>
          </div>
          <PrimaryButton href="/prayer">
            <Leaf size={16} strokeWidth={1.8} />
            Start with prayer
          </PrimaryButton>
        </div>
      </section>

      <div className="mt-6 max-w-4xl">
        <StatusNote>
          Jewelry shown here is planned as a symbolic reminder of faith and is
          not a guarantee of protection, healing, or blessing.
        </StatusNote>
      </div>
    </PageShell>
  );
}
