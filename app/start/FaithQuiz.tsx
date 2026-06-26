"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Check,
  Compass,
  Heart,
  Leaf,
  PenLine,
  Shield,
  Sun,
  type LucideIcon,
} from "lucide-react";
import {
  featuredStartFaithPathSlugs,
  startFaithPaths,
  type StartFaithPathSlug,
} from "@/lib/faith-paths";

type BeginChoice = "Scripture" | "Prayer" | "Reflection";

const carryingOptions = [
  "A heavy thought",
  "A decision",
  "Fear or uncertainty",
  "A tired heart",
  "A desire to give thanks",
  "A need to slow down",
] as const;
type CarryingChoice = (typeof carryingOptions)[number];

const pathIcons: Record<StartFaithPathSlug, LucideIcon> = {
  peace: Leaf,
  strength: Shield,
  protection: Shield,
  hope: Sun,
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
  icon: LucideIcon;
}> = [
  {
    value: "Scripture",
    description: "Open the guided Bible reading first.",
    icon: BookOpenText,
  },
  {
    value: "Prayer",
    description: "Pray honest words for what you carry.",
    icon: Heart,
  },
  {
    value: "Reflection",
    description: "Name the moment, then read and pray.",
    icon: PenLine,
  },
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

const STORAGE_KEY = "selah-faith-quiz-v1";

const steps = [
  { label: "Need" },
  { label: "Begin" },
  { label: "Carry" },
  { label: "Path" },
] as const;

function isStartSlug(value: unknown): value is StartFaithPathSlug {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(startFaithPaths, value)
  );
}

export function FaithQuiz() {
  const [intention, setIntention] = useState<StartFaithPathSlug | null>(null);
  const [beginWith, setBeginWith] = useState<BeginChoice | null>(null);
  const [carrying, setCarrying] = useState<CarryingChoice | null>(null);
  const [step, setStep] = useState(1);
  const [hydrated, setHydrated] = useState(false);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const skipFocus = useRef(true);

  // Restore prior answers (refresh-safe) without a hydration mismatch:
  // server renders the empty state, this runs only after mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Record<string, unknown>;
        if (isStartSlug(saved.intention)) setIntention(saved.intention);
        if (
          saved.beginWith === "Scripture" ||
          saved.beginWith === "Prayer" ||
          saved.beginWith === "Reflection"
        ) {
          setBeginWith(saved.beginWith);
        }
        if (carryingOptions.includes(saved.carrying as CarryingChoice)) {
          setCarrying(saved.carrying as CarryingChoice);
        }
      }
    } catch {
      // Ignore unreadable/blocked storage; the quiz still works in-memory.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ intention, beginWith, carrying }),
      );
    } catch {
      // Storage may be unavailable (private mode); answers stay in memory.
    }
  }, [intention, beginWith, carrying, hydrated]);

  // Move focus to the new step's heading so keyboard and screen-reader users
  // hear the question; skip the initial mount so we don't steal focus/scroll.
  useEffect(() => {
    if (skipFocus.current) {
      skipFocus.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const path = intention ? startFaithPaths[intention] : null;
  const Icon = intention ? pathIcons[intention] : Leaf;

  const reaches = (target: number) => {
    if (target <= 1) return true;
    if (target === 2) return intention !== null;
    if (target === 3) return intention !== null && beginWith !== null;
    return intention !== null && beginWith !== null && carrying !== null;
  };

  const orderedResults = useMemo(() => {
    if (!path || !beginWith) return [];
    const main = [
      {
        key: "Scripture" as const,
        title: "Recommended Scripture",
        body: `${path.scriptureReference}: ${path.scriptureContext}`,
      },
      { key: "Prayer" as const, title: "Recommended prayer", body: path.prayer },
      {
        key: "Reflection" as const,
        title: "Reflection prompt",
        body: path.reflectionPrompt,
      },
    ];
    return [
      ...main.filter((r) => r.key === beginWith),
      ...main.filter((r) => r.key !== beginWith),
    ];
  }, [beginWith, path]);

  // The "begin" answer decides which doorway opens first — a real effect,
  // not just reordering text.
  const doorway = useMemo(() => {
    if (!path || !beginWith) return null;
    if (beginWith === "Prayer") {
      return { href: path.prayerRoute, label: "Open the prayer" };
    }
    if (beginWith === "Reflection") {
      return { href: path.startRoute, label: "Start with reflection" };
    }
    return { href: path.scriptureRoute, label: "Open the Bible reading" };
  }, [beginWith, path]);

  return (
    <section
      aria-labelledby="faith-quiz-title"
      className="relative isolate mx-auto mt-6 max-w-3xl overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_15%_0%,rgba(239,204,139,0.16),transparent_38%),linear-gradient(135deg,#17251d_0%,#203d30_52%,#141a13_100%)] p-1.5 text-[#fffaf0] shadow-[0_28px_80px_rgba(25,45,34,0.2)] ring-1 ring-[#e9c985]/18 sm:p-2"
    >
      {/* Header strip: horizontal stepper only. The page-level intro already
          carries the "Faith Quiz" label, so the old duplicate is gone. */}
      <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 px-4 py-3 sm:px-5">
        <ol className="flex items-center gap-1" aria-label="Quiz progress">
          {steps.map(({ label }, index) => {
            const target = index + 1;
            const isActive = step === target;
            const isComplete = step > target && reaches(target);
            const isReachable = reaches(target);
            const isResult = target === 4;

            return (
              <li key={label} className="flex items-center">
                {index > 0 ? (
                  <span
                    aria-hidden
                    className={`mx-0.5 h-px w-3 sm:w-5 ${
                      step > index ? "bg-[#e9c985]/70" : "bg-[#fff8e8]/20"
                    }`}
                  />
                ) : null}
                <button
                  type="button"
                  onClick={() => isReachable && setStep(target)}
                  disabled={!isReachable}
                  aria-current={isActive ? "step" : undefined}
                  className={
                    isActive
                      ? "flex min-h-9 items-center gap-1.5 rounded-full bg-[#e9c985] px-2.5 text-xs font-semibold text-[#1f392c] shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
                      : isComplete
                        ? "flex min-h-9 items-center gap-1.5 rounded-full bg-[#fff8e8]/12 px-2.5 text-xs font-semibold text-[#fffaf0] transition hover:bg-[#fff8e8]/20"
                        : "flex min-h-9 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold text-[#fff8e8]/55 transition enabled:hover:text-[#fff8e8]/80 disabled:cursor-not-allowed disabled:opacity-50"
                  }
                >
                  <span
                    className={
                      isActive
                        ? "grid size-5 place-items-center rounded-full bg-[#1f392c]/15 text-[0.65rem]"
                        : "grid size-5 place-items-center rounded-full bg-[#fff8e8]/12 text-[0.65rem]"
                    }
                  >
                    {isComplete ? (
                      <Check size={12} strokeWidth={2.4} />
                    ) : isResult ? (
                      <Leaf size={11} strokeWidth={2} />
                    ) : (
                      target
                    )}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="overflow-hidden rounded-[1.4rem] bg-[#fffaf1] text-[#241f19] shadow-[0_18px_50px_rgba(0,0,0,0.16)] ring-1 ring-[#fffaf0]/60">
        <div className="p-5 sm:p-7">
          {step === 1 ? (
            <QuizStep
              eyebrow="Step 1 of 3 · What you need"
              title="What do you need today?"
              headingRef={headingRef}
              actionLabel="Continue"
              canAdvance={intention !== null}
              onNext={() => setStep(2)}
            >
              <ChoiceRadioGroup
                label="What do you need today?"
                columns="grid-cols-2 lg:grid-cols-3"
                variant="iconchip"
                value={intention}
                onChange={(v) => setIntention(v as StartFaithPathSlug)}
                options={featuredStartFaithPathSlugs.map((slug) => ({
                  value: slug,
                  title: startFaithPaths[slug].title,
                  icon: pathIcons[slug],
                }))}
              />
            </QuizStep>
          ) : null}

          {step === 2 ? (
            <QuizStep
              eyebrow="Step 2 of 3 · Where to begin"
              title="How would you like to begin?"
              description="This decides which doorway opens first. The full path still includes all three."
              headingRef={headingRef}
              actionLabel="Continue"
              canAdvance={beginWith !== null}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            >
              <ChoiceRadioGroup
                label="How would you like to begin?"
                columns="sm:grid-cols-3"
                variant="card"
                value={beginWith}
                onChange={(v) => setBeginWith(v as BeginChoice)}
                options={beginOptions.map((o) => ({
                  value: o.value,
                  title: o.value,
                  description: o.description,
                  icon: o.icon,
                }))}
              />
            </QuizStep>
          ) : null}

          {step === 3 ? (
            <QuizStep
              eyebrow="Step 3 of 3 · What you carry"
              title="What are you carrying right now?"
              headingRef={headingRef}
              actionLabel="Show my path"
              canAdvance={carrying !== null}
              onBack={() => setStep(2)}
              onNext={() => setStep(4)}
            >
              <ChoiceRadioGroup
                label="What are you carrying right now?"
                columns="grid-cols-1 sm:grid-cols-2"
                variant="chip"
                value={carrying}
                onChange={(v) => setCarrying(v as CarryingChoice)}
                options={carryingOptions.map((o) => ({ value: o, title: o }))}
              />
            </QuizStep>
          ) : null}

          {step === 4 && path && beginWith && carrying && doorway ? (
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6220]">
                    {beginWith} first · {path.title} Faith Path
                  </p>
                  <h2
                    id="faith-quiz-title"
                    ref={headingRef}
                    tabIndex={-1}
                    className="mt-1.5 font-serif text-2xl font-semibold leading-tight text-[#241f19] outline-none sm:text-3xl"
                  >
                    {path.title} Faith Path
                  </h2>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#244336] text-[#fffaf0]">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
              </div>

              <p className="mt-2.5 text-sm leading-6 text-[#5c5347]">
                Because you are carrying {carrying.toLowerCase()}:{" "}
                {concernGuidance[carrying]}
              </p>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {orderedResults.map((result, index) => (
                  <ResultItem
                    key={result.key}
                    title={index === 0 ? `${result.title} first` : result.title}
                    body={result.body}
                    primary={index === 0}
                  />
                ))}
                <ResultItem title="A small next step" body={path.smallNextStep} />
                <ResultItem
                  title="Faith-symbol reminder"
                  body={path.symbolReminder}
                />
              </div>

              <div className="mt-5 flex flex-col gap-2.5 border-t border-[#e7decb] pt-5 sm:flex-row sm:flex-wrap">
                <Link
                  href={doorway.href}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#284737] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_12px_28px_rgba(40,71,55,0.18)] transition hover:bg-[#1f392c]"
                >
                  {doorway.label}
                  <ArrowRight size={16} strokeWidth={1.8} />
                </Link>
                <Link
                  href={path.startRoute}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#284737]/30 bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#284737] transition hover:border-[#284737]/60 hover:bg-[#fffdf7]"
                >
                  See the full Faith Path
                </Link>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#355242] transition hover:border-[#bd9247] hover:bg-[#fffdf7] sm:ml-auto"
                >
                  Adjust answers
                </button>
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
  canAdvance,
  headingRef,
  onBack,
  onNext,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actionLabel: string;
  children: ReactNode;
  canAdvance: boolean;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onBack?: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6220]">
        {eyebrow}
      </p>
      <h2
        id="faith-quiz-title"
        ref={headingRef}
        tabIndex={-1}
        className="mt-1.5 font-serif text-2xl font-semibold leading-tight text-[#241f19] outline-none sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5c5347]">
          {description}
        </p>
      ) : null}
      <div className="mt-4">{children}</div>
      <div className="mt-5 flex items-center gap-2.5">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-4 py-2.5 text-sm font-semibold text-[#355242] transition hover:border-[#bd9247] hover:bg-[#fffdf7]"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Back
          </button>
        ) : null}
        <button
          type="button"
          onClick={onNext}
          disabled={!canAdvance}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#284737] px-5 py-2.5 text-sm font-semibold text-[#fffaf0] shadow-[0_12px_28px_rgba(40,71,55,0.18)] transition enabled:hover:bg-[#1f392c] disabled:cursor-not-allowed disabled:bg-[#e7decb] disabled:text-[#9c8f79] disabled:shadow-none sm:ml-auto"
        >
          {actionLabel}
          <ArrowRight size={16} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

type RadioOption = {
  value: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
};

function ChoiceRadioGroup({
  label,
  options,
  value,
  onChange,
  columns,
  variant = "card",
}: {
  label: string;
  options: RadioOption[];
  value: string | null;
  onChange: (value: string) => void;
  columns: string;
  variant?: "card" | "chip" | "iconchip";
}) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedIndex = options.findIndex((o) => o.value === value);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % options.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + options.length) % options.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = options.length - 1;
    }
    if (next === null) return;
    event.preventDefault();
    onChange(options[next].value);
    refs.current[next]?.focus();
  }

  return (
    <div role="radiogroup" aria-label={label} className={`grid gap-2.5 ${columns}`}>
      {options.map((option, index) => {
        const selected = value === option.value;
        // Roving tabindex: the checked radio (or the first when none chosen)
        // is the single tab stop; arrows move within the group.
        const tabbable = selected || (selectedIndex === -1 && index === 0);
        const OptionIcon = option.icon;

        const common = {
          ref: (el: HTMLButtonElement | null) => {
            refs.current[index] = el;
          },
          type: "button" as const,
          role: "radio" as const,
          "aria-checked": selected,
          tabIndex: tabbable ? 0 : -1,
          onClick: () => onChange(option.value),
          onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => onKeyDown(e, index),
        };

        if (variant === "chip") {
          return (
            <button
              key={option.value}
              {...common}
              className={
                selected
                  ? "min-h-12 rounded-xl border border-[#244336] bg-[#eef1e8] px-4 py-3 text-left text-sm font-semibold leading-6 text-[#244336] shadow-[0_8px_20px_rgba(40,71,55,0.08)]"
                  : "min-h-12 rounded-xl border border-[#dfcfb2] bg-[#fbf7ed] px-4 py-3 text-left text-sm font-semibold leading-6 text-[#625b51] transition hover:border-[#c49c52] hover:text-[#244336]"
              }
            >
              {option.title}
            </button>
          );
        }

        if (variant === "iconchip") {
          return (
            <button
              key={option.value}
              {...common}
              className={
                selected
                  ? "flex min-h-[58px] items-center gap-2.5 rounded-xl border border-[#244336] bg-[#eef1e8] px-3 py-2.5 text-left shadow-[0_8px_20px_rgba(40,71,55,0.08)]"
                  : "flex min-h-[58px] items-center gap-2.5 rounded-xl border border-[#dfcfb2] bg-[#fbf7ed] px-3 py-2.5 text-left transition hover:border-[#c49c52]"
              }
            >
              {OptionIcon ? (
                <span
                  className={
                    selected
                      ? "grid size-9 shrink-0 place-items-center rounded-full bg-[#244336] text-[#fffaf1]"
                      : "grid size-9 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737] ring-1 ring-[#e3d4b6]"
                  }
                >
                  <OptionIcon size={17} strokeWidth={1.8} />
                </span>
              ) : null}
              <span
                className={`font-serif text-base font-semibold leading-tight ${
                  selected ? "text-[#244336]" : "text-[#241f19]"
                }`}
              >
                {option.title}
              </span>
              {selected ? (
                <span className="ml-auto grid size-5 shrink-0 place-items-center rounded-full bg-[#284737] text-[#fffaf0]">
                  <Check size={12} strokeWidth={2.4} />
                </span>
              ) : null}
            </button>
          );
        }

        // variant === "card"
        return (
          <button
            key={option.value}
            {...common}
            className={
              selected
                ? "flex min-h-[92px] flex-col rounded-xl border border-[#244336] bg-[#eef1e8] p-4 text-left shadow-[0_10px_26px_rgba(40,71,55,0.08)]"
                : "flex min-h-[92px] flex-col rounded-xl border border-[#dfcfb2] bg-[#fbf7ed] p-4 text-left transition hover:border-[#c49c52]"
            }
          >
            <span className="flex items-center justify-between">
              {OptionIcon ? (
                <span
                  className={
                    selected
                      ? "grid size-9 place-items-center rounded-full bg-[#244336] text-[#fffaf1]"
                      : "grid size-9 place-items-center rounded-full bg-[#fffaf1] text-[#254737] ring-1 ring-[#e3d4b6]"
                  }
                >
                  <OptionIcon size={17} strokeWidth={1.8} />
                </span>
              ) : (
                <span />
              )}
              {selected ? (
                <span className="grid size-5 place-items-center rounded-full bg-[#284737] text-[#fffaf0]">
                  <Check size={12} strokeWidth={2.4} />
                </span>
              ) : null}
            </span>
            <span className="mt-2.5 block font-serif text-lg font-semibold leading-tight text-[#241f19]">
              {option.title}
            </span>
            {option.description ? (
              <span className="mt-1 block text-xs leading-5 text-[#625b51]">
                {option.description}
              </span>
            ) : null}
          </button>
        );
      })}
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
          ? "rounded-xl border border-[#d7b56d] bg-[#fffaf1] p-3.5 shadow-[0_10px_26px_rgba(71,55,35,0.06)] sm:col-span-2"
          : "rounded-xl border border-[#d8ddcf] bg-[#fffdf7]/70 p-3.5"
      }
    >
      <h3 className="text-xs font-semibold uppercase tracking-[0.04em] text-[#8f6220]">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-[#5c5347]">{body}</p>
    </div>
  );
}
