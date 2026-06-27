import Link from "next/link";
import { BookOpenText, Gem, Heart, Leaf } from "lucide-react";
import { getFaithPathBySlug, type FaithPathSlug } from "@/lib/faith-paths";

export type FaithJourneyStep = "start" | "pray" | "read" | "carry";

const steps: Array<{
  key: FaithJourneyStep;
  label: string;
  getHref: (path: NonNullable<ReturnType<typeof getFaithPathBySlug>>) => string;
  icon: typeof Leaf;
}> = [
  {
    key: "start",
    label: "Quiz",
    getHref: (path) => path.startRoute,
    icon: Leaf,
  },
  {
    key: "pray",
    label: "Pray",
    getHref: (path) => path.prayerRoute,
    icon: Heart,
  },
  {
    key: "read",
    label: "Read",
    getHref: (path) => path.scriptureRoute,
    icon: BookOpenText,
  },
  {
    key: "carry",
    label: "Carry",
    getHref: (path) => path.jewelryRoute,
    icon: Gem,
  },
];

export function FaithJourneyNav({
  pathSlug,
  currentStep,
}: {
  pathSlug: FaithPathSlug | string;
  currentStep: FaithJourneyStep;
}) {
  const faithPath = getFaithPathBySlug(pathSlug);

  if (!faithPath) {
    return null;
  }

  return (
    <nav
      aria-label={`${faithPath.title} Faith Path journey`}
      className="mt-7 max-w-5xl rounded-lg border border-line-300 bg-cream-200 p-2 shadow-elev-3"
    >
      <ol className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCurrent = step.key === currentStep;

          return (
            <li key={step.key} className="min-w-0">
              <Link
                href={step.getHref(faithPath)}
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "flex min-h-12 min-w-0 items-center gap-2 rounded-md border border-gold-600 bg-green-600 px-3 py-2 text-sm font-semibold text-cream-fg shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                    : "flex min-h-12 min-w-0 items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm font-semibold text-ink-600 transition hover:border-line-400 hover:bg-cream-100 hover:text-green-600"
                }
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.8} />
                <span className="truncate">{step.label}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
