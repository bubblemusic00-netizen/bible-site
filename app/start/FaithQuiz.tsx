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
      className="relative isolate mt-8 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_18%_18%,rgba(239,204,139,0.18),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(255,250,240,0.08),transparent_30%),linear-gradient(135deg,#17251d_0%,#203d30_48%,#121711_100%)] p-2 text-[#fffaf0] shadow-[0_34px_100px_rgba(25,45,34,0.22)] ring-1 ring-[#e9c985]/18 sm:p-4"
    >
      <div className="relative z-10 grid gap-5 p-2 sm:p-3 lg:grid-cols-[0.34fr_1fr] lg:gap-7">
        <aside className="order-2 lg:order-1 lg:py-4">
          <p className="text-sm font-semibold uppercase text-[#e9c985]">
            Faith Quiz
          </p>
          <h2
            id="faith-quiz-title"
            className="mt-2 max-w-sm font-serif text-3xl font-semibold leading-tight sm:text-4xl"
          >
            A quiet path, shaped by three answers.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#fff8e8]/78 sm:text-base sm:leading-7">
            Choose what you need, where to begin, and what you are carrying.
            The result opens Scripture, prayer, and reflection.
          </p>

          <div
            className="mt-7 grid grid-cols-4 gap-2 border-y border-[#fff8e8]/12 py-4 lg:grid-cols-1 lg:gap-0 lg:border-y-0 lg:py-0"
            aria-label="Quiz progress"
          >
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
                      ? "flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#e9c985]/70 bg-[#fffaf0] px-3 text-sm font-semibold text-[#244336] shadow-[0_12px_26px_rgba(0,0,0,0.14)] lg:justify-start lg:rounded-none lg:border-x-0 lg:border-b lg:border-t-0 lg:bg-transparent lg:px-0 lg:text-[#fffaf0] lg:shadow-none"
                      : "flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#fff8e8]/16 bg-[#fff8e8]/7 px-3 text-sm font-semibold text-[#fff8e8]/72 transition hover:border-[#e9c985]/60 hover:bg-[#fff8e8]/12 lg:justify-start lg:rounded-none lg:border-x-0 lg:border-b lg:border-t-0 lg:bg-transparent lg:px-0"
                  }
                >
                  <span
                    className={
                      isActive || isComplete
                        ? "grid size-7 shrink-0 place-items-center rounded-full bg-[#e9c985] text-xs text-[#1f392c]"
                        : "grid size-7 shrink-0 place-items-center rounded-full bg-[#fff8e8]/10 text-xs text-[#fff8e8]"
                    }
                  >
                    {isComplete ? <Check size={15} strokeWidth={2} /> : number}
                  </span>
                  <span className="hidden sm:inline lg:inline">{label}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 border-l border-[#e9c985]/55 pl-4 text-sm font-semibold leading-6 text-[#fff8e8]/82">
            No login, email, or personal details are needed. Your answers stay
            in this page as simple quiz state.
          </p>
        </aside>

        <div className="order-1 min-w-0 overflow-hidden rounded-[1.65rem] bg-[#fffaf1] text-[#241f19] shadow-[0_24px_70px_rgba(0,0,0,0.16)] ring-1 ring-[#fffaf0]/60 lg:order-2">
          <div className="border-b border-[#eadbc0] bg-[linear-gradient(135deg,#fffdf7,#f3eadb)] px-5 py-4 sm:px-7">
            <p className="text-sm font-semibold text-[#355242]">
              Start small. Read slowly. Pray honestly.
            </p>
          </div>
          <div className="p-5 sm:p-7 lg:p-8">
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
              <p className="text-sm font-semibold uppercase text-[#8f6220]">
                Your Faith Path
              </p>
              <div className="mt-3 overflow-hidden rounded-[1.35rem] bg-[#f2f5ee]">
                <div className="flex flex-col gap-4 bg-[radial-gradient(circle_at_top_right,rgba(233,201,133,0.18),transparent_42%),linear-gradient(135deg,#203d30,#182a21)] p-5 text-[#fffaf0] sm:flex-row sm:items-start sm:justify-between sm:p-6">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase text-[#e9c985]">
                      {beginWith} first
                    </p>
                    <h3 className="mt-2 font-serif text-4xl font-semibold leading-tight">
                      {path.title} Faith Path
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#fff8e8]/82">
                      {beginLabel} {concernGuidance[carrying]}
                    </p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fff8e8]/12 text-[#fffaf0]">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="border-b border-[#d8ddcf] bg-[#fffaf1] p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase text-[#8f6220]">
                    You chose
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <ChosenAnswer label="Need" value={path.title} />
                    <ChosenAnswer label="Begin with" value={beginWith} />
                    <ChosenAnswer label="Carrying" value={carrying} />
                  </div>
                </div>

                <div className="grid gap-3 p-5 sm:p-6 lg:grid-cols-2">
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

                <div className="flex flex-col gap-3 border-t border-[#d8ddcf] bg-[#fffaf1] p-5 sm:flex-row sm:flex-wrap sm:p-6">
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
      <p className="text-sm font-semibold uppercase text-[#8f6220]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#625b51]">
        {description}
      </p>
      <div className="mt-6 border-y border-[#dfcfb2]/86 bg-[#fffdf7]/46">
        {children}
      </div>
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
          ? "min-h-32 border-y border-[#244336] bg-[#eef1e8] p-4 text-left shadow-[inset_4px_0_0_#244336,0_14px_34px_rgba(40,71,55,0.08)]"
          : "min-h-32 border-y border-transparent p-4 text-left transition hover:bg-[#fffdf7]"
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
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8f6220]">
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
          ? "border border-[#d7b56d] bg-[#fffaf1] p-4 shadow-[0_14px_34px_rgba(71,55,35,0.06)] lg:col-span-2"
          : "border border-[#d8ddcf] bg-[#fffdf7]/68 p-4"
      }
    >
      <h4 className="text-sm font-semibold uppercase text-[#8f6220]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-[#625b51]">{body}</p>
    </div>
  );
}
