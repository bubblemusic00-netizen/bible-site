import {
  Compass,
  Heart,
  Home,
  Leaf,
  Shield,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { faithPaths } from "@/lib/faith-paths";
import { CardLink, PageIntro, PageShell, StatusNote } from "../components/site-ui";
import { prayerPathKeys, type PrayerPathKey } from "./prayer-paths";

const pathIcons: Record<PrayerPathKey, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  guidance: Compass,
  gratitude: Sun,
  healing: Sparkles,
  forgiveness: Heart,
  anxiety: Home,
  family: Users,
};

export default function PrayerPage() {
  return (
    <PageShell active="prayer">
      <PageIntro
        icon={Heart}
        eyebrow="Faith Path"
        title="What do you need today?"
        subtitle="Choose a quiet starting point for prayer, reflection, and hope."
      />

      <section className="mt-8 max-w-4xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Prayer paths
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Begin with one honest need.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Each path offers a short Scripture moment, a simple reflection, and
            a prayer starter. These are quiet beginnings, not formulas or
            guarantees.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {prayerPathKeys.map((key) => {
          const path = faithPaths[key];

          return (
            <CardLink
              key={key}
              href={path.prayerRoute}
              icon={pathIcons[key]}
              title={path.title}
              description={path.description}
              cta="Begin"
            />
          );
        })}
      </section>

      <div className="mt-7 max-w-4xl">
        <StatusNote>
          Future faith reminders may connect to these themes later. Nothing on
          this page is for sale.
        </StatusNote>
      </div>
    </PageShell>
  );
}
