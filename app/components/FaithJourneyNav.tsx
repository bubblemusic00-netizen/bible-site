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
    label: "Start",
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
      className="mt-7 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-2 shadow-[0_16px_34px_rgba(71,55,35,0.055)]"
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
                    ? "flex min-h-12 min-w-0 items-center gap-2 rounded-md border border-[#b88735] bg-[#284737] px-3 py-2 text-sm font-semibold text-[#fffaf0] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                    : "flex min-h-12 min-w-0 items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm font-semibold text-[#625b51] transition hover:border-[#d8c5a3] hover:bg-[#fffdf7] hover:text-[#254737]"
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
