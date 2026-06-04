import {
  Compass,
  Heart,
  Home,
  Leaf,
  Shield,
  Sun,
  Users,
} from "lucide-react";
import { CardLink, PageIntro, PageShell } from "../components/site-ui";
import { faithPathSlugs, faithPaths, type FaithPathSlug } from "@/lib/faith-paths";

const pathIcons: Record<FaithPathSlug, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  guidance: Compass,
  gratitude: Sun,
  healing: Heart,
  forgiveness: Heart,
  anxiety: Home,
  family: Users,
};

export default function StartPage() {
  return (
    <PageShell active="start">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Faith Path Finder"
          title="What do you need today?"
          subtitle="Choose the intention you want to bring into prayer, scripture, and daily faith."
        />
        <p className="max-w-xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 text-base leading-7 text-[#625b51] shadow-[0_18px_38px_rgba(71,55,35,0.055)]">
          Start with what you are actually carrying. Each path gives you a
          simple way to pray, read, and carry your intention with honesty and
          care.
        </p>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {faithPathSlugs.map((slug) => {
          const path = faithPaths[slug];
          const Icon = pathIcons[slug];

          return (
            <CardLink
              key={path.slug}
              href={`/start/${path.slug}`}
              icon={Icon}
              title={path.title}
              description={path.description}
              cta="Choose this path"
            />
          );
        })}
      </section>
    </PageShell>
  );
}
