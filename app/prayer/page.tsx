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
import {
  prayerTopicKeys,
  prayerTopics,
  type PrayerTopicKey,
} from "./topics";

const topicIcons: Record<PrayerTopicKey, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  guidance: Compass,
  gratitude: Sun,
  healing: Sparkles,
  forgiveness: Heart,
  family: Users,
  anxiety: Home,
};

export default function PrayerPage() {
  return (
    <PageShell active="prayer">
      <PageIntro
        icon={Heart}
        eyebrow="Prayer guide"
        title="Prayer Guide"
        subtitle="Choose a quiet place to begin, then pray one honest prayer."
      />

      <section className="mt-8 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.045)] sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Simple starting points
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
            Prayer is not a formula.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            These prayers are short starting points for reflection and honest
            conversation with God. They are not guarantees or scripts you have
            to get perfect.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {prayerTopicKeys.map((key) => {
          const topic = prayerTopics[key];

          return (
            <CardLink
              key={key}
              href={`/prayer/${key}`}
              icon={topicIcons[key]}
              title={topic.title}
              description={topic.cardDescription}
              cta="Begin prayer"
            />
          );
        })}
      </section>
    </PageShell>
  );
}
