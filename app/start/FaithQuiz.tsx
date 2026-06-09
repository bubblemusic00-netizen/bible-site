"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpenText,
  Check,
  Compass,
  Heart,
  Leaf,
  PenLine,
  Shield,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  featuredStartFaithPathSlugs,
  startFaithPaths,
  type StartFaithPathSlug,
} from "@/lib/faith-paths";

type BeginChoice = "Scripture" | "Prayer" | "Reflection";
type CarryingChoice =
  | "A heavy thought"
  | "A decision"
  | "Fear or uncertainty"
  | "A tired heart"
  | "A desire to give thanks"
  | "A need to slow down";

const pathIcons: Record<StartFaithPathSlug, typeof Leaf> = {
  peace: Leaf,
  strength: Shield,
  protection: Shield,
  hope: Sparkles,
  guidance: Compass,
  gratitude: Sun,
  healing: Heart,
  forgiveness: Heart,
  anxiety: Leaf,
  family: Heart,
};

const beginOptions: Array<{
  value: BeginChoice;
  description: string;
  icon: typeof Leaf;
}> = [
  {
    value: "Scripture",
    description: "Start with a finished Bible reading and short context.",
    icon: BookOpenText,
  },
  {
    value: "Prayer",
    description: "Start with honest words for what you are carrying.",
    icon: Heart,
  },
  {
    value: "Reflection",
    description: "Start by naming the moment before taking a next step.",
    icon: PenLine,
  },
];

const carryingOptions: CarryingChoice[] = [
  "A heavy thought",
  "A decision",
  "Fear or uncertainty",
  "A tired heart",
  "A desire to give thanks",
  "A need to slow down",
];

const concernGuidance: Record<CarryingChoice, string> = {
  "A heavy thought":
    "Bring the thought into prayer without needing to solve all of it at once.",
  "A decision":
    "Let the path slow the moment so wisdom, counsel, and prayer have room.",
  "Fear or uncertainty":
    "Use the path to name fear honestly and choose one wise action.",
  "A tired heart":
    "Begin gently. The path is meant to be read slowly, not rushed through.",
  "A desire to give thanks":
    "Let gratitude become a careful act of noticing grace in ordinary things.",
  "A need to slow down":
    "Pause with Scripture, prayer, and one small step instead of pressure.",
};

export function FaithQuiz() {
  const [intention, setIntention] = useState<StartFaithPathSlug>("peace");
  const [beginWith, setBeginWith] = useState<BeginChoice>("Scripture");
  const [carrying, setCarrying] = useState<CarryingChoice>("A need to slow down");
  const [step, setStep] = useState(1);
  const path = startFaithPaths[intention];
  const Icon = pathIcons[intention];

  const beginLabel = useMemo(() => {
    if (beginWith === "Prayer") {
      return "Open the matching prayer when you enter the full path.";
    }

    if (beginWith === "Reflection") {
      return "Start with the reflection prompt, then continue into Scripture and prayer.";
    }

    return "Begin with the related guided Bible reading.";
  }, [beginWith]);
  const orderedResults = useMemo(() => {
    const mainResults = [
      {
        key: "Scripture" as const,
        title: "Recommended Scripture",
        body: `${path.scriptureReference}: ${path.scriptureContext}`,
      },
      {
        key: "Prayer" as const,
        title: "Recommended prayer",
        body: path.prayer,
      },
      {
        key: "Reflection" as const,
        title: "Reflection prompt",
        body: path.reflectionPrompt,
      },
    ];

    return [
      ...mainResults.filter((result) => result.key === beginWith),
      ...mainResults.filter((result) => result.key !== beginWith),
    ];
  }, [beginWith, path]);

  return (
    <section
      aria-labelledby="faith-quiz-title"
      className="mt-9 overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] shadow-[0_26px_72px_rgba(71,55,35,0.08)]"
    >
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <aside className="order-2 border-t border-[#dfcfb2] bg-[#f2f5ee] p-5 sm:p-7 lg:order-1 lg:border-r lg:border-t-0">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Faith Quiz
          </p>
          <h2
            id="faith-quiz-title"
            className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl"
          >
            Three questions, one guided path.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Your answers shape a simple result with Scripture, prayer,
            reflection, and an optional reminder.
          </p>

          <div className="mt-6 grid gap-3" aria-label="Quiz progress">
            {[
              ["1", "Need"],
              ["2", "Begin"],
              ["3", "Carry"],
              ["Result", "Path"],
            ].map(([number, label], index) => {
              const isActive = step === index + 1 || (index === 3 && step === 4);
              const isComplete = step > index + 1;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setStep(index + 1)}
                  className={
                    isActive || isComplete
                      ? "flex min-h-12 items-center gap-3 rounded-full border border-[#c49c52] bg-[#fffaf0] px-4 text-left text-sm font-semibold text-[#244336]"
                      : "flex min-h-12 items-center gap-3 rounded-full border border-[#d8ddcf] bg-[#fbf7ed] px-4 text-left text-sm font-semibold text-[#625b51] transition hover:border-[#c49c52]"
                  }
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#284737] text-xs text-[#fffaf0]">
                    {isComplete ? <Check size={15} strokeWidth={2} /> : number}
                  </span>
                  {label}
                </button>
              );
            })}
          </div>

          <p className="mt-6 rounded-lg border border-[#d8ddcf] bg-[#fbf7ed] p-4 text-sm font-semibold leading-6 text-[#2f5140]">
            No login, email, or personal details are needed. Your answers stay
            in this page as simple quiz state.
          </p>
        </aside>

        <div className="order-1 min-w-0 p-5 sm:p-7 lg:order-2">
          {step === 1 ? (
            <QuizStep
              eyebrow="Step 1"
              title="What do you need today?"
              description="Choose the intention that best names this moment. Nothing here promises an outcome; it simply guides your next reading, prayer, and reflection."
              actionLabel="Continue"
              onNext={() => setStep(2)}
            >
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {featuredStartFaithPathSlugs.map((slug) => {
                  const option = startFaithPaths[slug];
                  const OptionIcon = pathIcons[slug];
                  const selected = intention === slug;

                  return (
                    <ChoiceButton
                      key={slug}
                      selected={selected}
                      onClick={() => setIntention(slug)}
                      title={option.title}
                      description={option.description}
                      icon={OptionIcon}
                    />
                  );
                })}
              </div>
            </QuizStep>
          ) : null}

          {step === 2 ? (
            <QuizStep
              eyebrow="Step 2"
              title="How would you like to begin?"
              description="The full path includes Scripture, prayer, and reflection either way. This simply shapes the first doorway."
              actionLabel="Continue"
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            >
              <div className="grid gap-3 md:grid-cols-3">
                {beginOptions.map((option) => (
                  <ChoiceButton
                    key={option.value}
                    selected={beginWith === option.value}
                    onClick={() => setBeginWith(option.value)}
                    title={option.value}
                    description={option.description}
                    icon={option.icon}
                  />
                ))}
              </div>
            </QuizStep>
          ) : null}

          {step === 3 ? (
            <QuizStep
              eyebrow="Step 3"
              title="What are you carrying right now?"
              description="Choose the phrase closest to your current season. Keep it simple and honest."
              actionLabel="Show my path"
              onBack={() => setStep(2)}
              onNext={() => setStep(4)}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {carryingOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setCarrying(option)}
                    aria-pressed={carrying === option}
                    className={
                      carrying === option
                        ? "min-h-14 rounded-lg border border-[#244336] bg-[#eef1e8] px-4 py-3 text-left text-sm font-semibold leading-6 text-[#244336] shadow-[0_12px_28px_rgba(40,71,55,0.08)]"
                        : "min-h-14 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] px-4 py-3 text-left text-sm font-semibold leading-6 text-[#625b51] transition hover:border-[#c49c52] hover:text-[#244336]"
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </QuizStep>
          ) : null}

          {step === 4 ? (
            <div>
              <p className="text-sm font-semibold uppercase text-[#9a6a24]">
                Your Faith Path
              </p>
              <div className="mt-3 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase text-[#9a6a24]">
                      {beginWith} first
                    </p>
                    <h3 className="mt-2 font-serif text-4xl font-semibold leading-tight text-[#241f19]">
                      {path.title} Faith Path
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#625b51]">
                      {beginLabel} {concernGuidance[carrying]}
                    </p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#284737] text-[#fffaf0]">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="mt-5 rounded-lg border border-[#d8ddcf] bg-[#fffaf1] p-4">
                  <p className="text-sm font-semibold uppercase text-[#9a6a24]">
                    You chose
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <ChosenAnswer label="Need" value={path.title} />
                    <ChosenAnswer label="Begin with" value={beginWith} />
                    <ChosenAnswer label="Carrying" value={carrying} />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 lg:grid-cols-2">
                  {orderedResults.map((result, index) => (
                    <ResultItem
                      key={result.key}
                      title={index === 0 ? `${result.title} first` : result.title}
                      body={result.body}
                      primary={index === 0}
                    />
                  ))}
                  <ResultItem
                    title="Optional faith-symbol reminder"
                    body={path.symbolReminder}
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={path.startRoute}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#284737] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_12px_28px_rgba(40,71,55,0.18)] transition hover:bg-[#1f392c]"
                  >
                    Open My Faith Path
                    <ArrowRight size={16} strokeWidth={1.8} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#355242] transition hover:border-[#bd9247] hover:bg-[#fffdf7]"
                  >
                    Adjust answers
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function QuizStep({
  eyebrow,
  title,
  description,
  actionLabel,
  children,
  onBack,
  onNext,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  children: ReactNode;
  onBack?: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase text-[#9a6a24]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#625b51]">
        {description}
      </p>
      <div className="mt-6">{children}</div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#355242] transition hover:border-[#bd9247] hover:bg-[#fffdf7]"
          >
            Back
          </button>
        ) : null}
        <button
          type="button"
          onClick={onNext}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#284737] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_12px_28px_rgba(40,71,55,0.18)] transition hover:bg-[#1f392c]"
        >
          {actionLabel}
          <ArrowRight size={16} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

function ChoiceButton({
  selected,
  onClick,
  title,
  description,
  icon: Icon,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description: string;
  icon: typeof Leaf;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={
        selected
          ? "min-h-40 rounded-lg border border-[#244336] bg-[#eef1e8] p-4 text-left shadow-[0_14px_34px_rgba(40,71,55,0.1)]"
          : "min-h-40 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7]"
      }
    >
      <span className="flex items-start justify-between gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
          <Icon size={19} strokeWidth={1.8} />
        </span>
        {selected ? (
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#284737] text-[#fffaf0]">
            <Check size={15} strokeWidth={2} />
          </span>
        ) : null}
      </span>
      <span className="mt-4 block font-serif text-2xl font-semibold leading-tight text-[#241f19]">
        {title}
      </span>
      <span className="mt-2 block text-sm leading-6 text-[#625b51]">
        {description}
      </span>
    </button>
  );
}

function ChosenAnswer({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6a24]">
        {label}
      </p>
      <p className="mt-1 break-words text-sm font-semibold leading-6 text-[#244336]">
        {value}
      </p>
    </div>
  );
}

function ResultItem({
  title,
  body,
  primary = false,
}: {
  title: string;
  body: string;
  primary?: boolean;
}) {
  return (
    <div
      className={
        primary
          ? "rounded-lg border border-[#c49c52] bg-[#fffaf1] p-4 shadow-[0_14px_34px_rgba(71,55,35,0.075)] lg:col-span-2"
          : "rounded-lg border border-[#d8ddcf] bg-[#fbf7ed] p-4"
      }
    >
      <h4 className="text-sm font-semibold uppercase text-[#9a6a24]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-[#625b51]">{body}</p>
    </div>
  );
}
