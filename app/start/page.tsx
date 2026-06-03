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
import { CardLink, PageIntro, PageShell } from "../components/site-ui";
import { needKeys, needs, type NeedKey } from "./needs";

const needIcons: Record<NeedKey, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  guidance: Compass,
  hope: Sparkles,
  forgiveness: Heart,
  gratitude: Sun,
  family: Users,
  anxiety: Home,
};

export default function StartPage() {
  return (
    <PageShell active="start">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Start here"
          title="What do you need today?"
          subtitle="Choose a quiet starting point for Scripture, prayer, and reflection."
        />
        <p className="max-w-xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 text-base leading-7 text-[#625b51] shadow-[0_18px_38px_rgba(71,55,35,0.055)]">
          Start with what you are actually carrying. Each path gives one pause,
          one prayer, one reflection question, and a clear next step.
        </p>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {needKeys.map((key) => {
          const need = needs[key];

          return (
            <CardLink
              key={key}
              href={`/start/${key}`}
              icon={needIcons[key]}
              title={need.title}
              description={need.cardDescription}
              cta="Begin here"
            />
          );
        })}
      </section>
    </PageShell>
  );
}
