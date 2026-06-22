"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
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
    description: "Open the related guided Bible reading first.",
    icon: BookOpenText,
  },
  {
    value: "Prayer",
    description: "Open honest words to pray for what you carry.",
    icon: Heart,
  },
  {
    value: "Reflection",
    description: "Name the moment first, then read and pray.",
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
      className="relative isolate mt-8 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_18%_18%,rgba(239,204,139,0.18),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(255,250,240,0.08),transparent_30%),linear-gradient(135deg,#17251d_0%,#203d30_48%,#121711_100%)] p-2 text-[#fffaf0] shadow-[0_34px_100px_rgba(25,45,34,0.22)] ring-1 ring-[#e9c985]/18 sm:p-4"
    >
      <div className="relative z-10 grid gap-5 p-2 sm:p-3 lg:grid-cols-[0.34fr_1fr] lg:gap-7">
        <aside className="order-1 lg:py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e9c985]">
            Faith Quiz
          </p>
          <h2
            id="faith-quiz-title"
            className="mt-2 max-w-sm font-serif text-3xl font-semibold leading-tight sm:text-4xl"
          >
            A quiet path, shaped by three answers.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#fff8e8]/78 sm:text-base sm:leading-7">
            Choose what you need, where to begin, and what you are carrying. Each
            answer shapes the Scripture, prayer, and first doorway you receive.
          </p>

          <ol
            className="mt-7 grid grid-cols-4 gap-2 border-y border-[#fff8e8]/12 py-4 lg:grid-cols-1 lg:gap-0 lg:border-y-0 lg:py-0"
            aria-label="Quiz progress"
          >
            {[
              ["1", "Need"],
              ["2", "Begin"],
              ["3", "Carry"],
              ["Result", "Path"],
            ].map(([number, label], index) => {
              const target = index + 1;
              const isActive = step === target;
              const isComplete = step > target && reaches(target);
              const isReachable = reaches(target);

              return (
                <li key={label} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => isReachable && setStep(target)}
                    disabled={!isReachable}
                    aria-current={isActive ? "step" : undefined}
                    className={
                      isActive || isComplete
                        ? "flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#e9c985]/70 bg-[#fffaf0] px-3 text-sm font-semibold text-[#244336] shadow-[0_12px_26px_rgba(0,0,0,0.14)] lg:justify-start lg:rounded-none lg:border-x-0 lg:border-b lg:border-t-0 lg:bg-transparent lg:px-0 lg:text-[#fffaf0] lg:shadow-none"
                        : "flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#fff8e8]/16 bg-[#fff8e8]/7 px-3 text-sm font-semibold text-[#fff8e8]/72 transition enabled:hover:border-[#e9c985]/60 enabled:hover:bg-[#fff8e8]/12 disabled:cursor-not-allowed disabled:opacity-55 lg:justify-start lg:rounded-none lg:border-x-0 lg:border-b lg:border-t-0 lg:bg-transparent lg:px-0"
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
                </li>
              );
            })}
          </ol>

          <p className="mt-6 border-l border-[#e9c985]/55 pl-4 text-sm font-semibold leading-6 text-[#fff8e8]/82">
            No login or email needed. Your answers stay on this device so you can
            return to your path.
          </p>
        </aside>

        <div className="order-2 min-w-0 overflow-hidden rounded-[1.65rem] bg-[#fffaf1] text-[#241f19] shadow-[0_24px_70px_rgba(0,0,0,0.16)] ring-1 ring-[#fffaf0]/60 lg:order-2">
          <div className="border-b border-[#eadbc0] bg-[linear-gradient(135deg,#fffdf7,#f3eadb)] px-5 py-4 sm:px-7">
            <p className="text-sm font-semibold text-[#355242]">
              Start small. Read slowly. Pray honestly.
            </p>
          </div>
          <div className="p-5 sm:p-7 lg:p-8">
            {step === 1 ? (
              <QuizStep
                eyebrow="Step 1 of 3"
                title="What do you need today?"
                description="Choose the intention that best names this moment. Nothing here promises an outcome; it guides your next reading, prayer, and reflection."
                headingRef={headingRef}
                actionLabel="Continue"
                canAdvance={intention !== null}
                onNext={() => setStep(2)}
              >
                <ChoiceRadioGroup
                  label="What do you need today?"
                  columns="sm:grid-cols-2 xl:grid-cols-3"
                  value={intention}
                  onChange={(v) => setIntention(v as StartFaithPathSlug)}
                  options={featuredStartFaithPathSlugs.map((slug) => ({
                    value: slug,
                    title: startFaithPaths[slug].title,
                    description: startFaithPaths[slug].description,
                    icon: pathIcons[slug],
                  }))}
                />
              </QuizStep>
            ) : null}

            {step === 2 ? (
              <QuizStep
                eyebrow="Step 2 of 3"
                title="How would you like to begin?"
                description="This decides which doorway opens first — the Bible reading, the prayer, or a reflection. The full path still includes all three."
                headingRef={headingRef}
                actionLabel="Continue"
                canAdvance={beginWith !== null}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              >
                <ChoiceRadioGroup
                  label="How would you like to begin?"
                  columns="md:grid-cols-3"
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
                eyebrow="Step 3 of 3"
                title="What are you carrying right now?"
                description="Choose the phrase closest to your current season. It shapes the guidance and the small next step you receive."
                headingRef={headingRef}
                actionLabel="Show my path"
                canAdvance={carrying !== null}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              >
                <ChoiceRadioGroup
                  label="What are you carrying right now?"
                  columns="sm:grid-cols-2"
                  variant="chip"
                  value={carrying}
                  onChange={(v) => setCarrying(v as CarryingChoice)}
                  options={carryingOptions.map((o) => ({ value: o, title: o }))}
                />
              </QuizStep>
            ) : null}

            {step === 4 && path && beginWith && carrying && doorway ? (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8f6220]">
                  Your Faith Path
                </p>
                <div className="mt-3 overflow-hidden rounded-[1.35rem] bg-[#f2f5ee]">
                  <div className="flex flex-col gap-4 bg-[radial-gradient(circle_at_top_right,rgba(233,201,133,0.18),transparent_42%),linear-gradient(135deg,#203d30,#182a21)] p-5 text-[#fffaf0] sm:flex-row sm:items-start sm:justify-between sm:p-6">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#e9c985]">
                        {beginWith} first
                      </p>
                      <h2
                        ref={headingRef}
                        tabIndex={-1}
                        className="mt-2 font-serif text-4xl font-semibold leading-tight text-[#fffaf0] outline-none"
                      >
                        {path.title} Faith Path
                      </h2>
                      <p className="mt-3 text-base leading-7 text-[#fff8e8]/82">
                        Because you are carrying {carrying.toLowerCase()}:{" "}
                        {concernGuidance[carrying]}
                      </p>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fff8e8]/12 text-[#fffaf0]">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="border-b border-[#d8ddcf] bg-[#fffaf1] p-5 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8f6220]">
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
                        title={
                          index === 0 ? `${result.title} first` : result.title
                        }
                        body={result.body}
                        primary={index === 0}
                      />
                    ))}
                    <ResultItem
                      title="A small next step"
                      body={path.smallNextStep}
                    />
                    <ResultItem
                      title="Optional faith-symbol reminder"
                      body={path.symbolReminder}
                    />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[#d8ddcf] bg-[#fffaf1] p-5 sm:flex-row sm:flex-wrap sm:p-6">
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
  canAdvance,
  headingRef,
  onBack,
  onNext,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  children: ReactNode;
  canAdvance: boolean;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onBack?: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8f6220]">
        {eyebrow}
      </p>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] outline-none sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#625b51]">
        {description}
      </p>
      <div className="mt-6 border-y border-[#dfcfb2]/86 bg-[#fffdf7]/46">
        {children}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#355242] transition hover:border-[#bd9247] hover:bg-[#fffdf7]"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Back
          </button>
        ) : null}
        <button
          type="button"
          onClick={onNext}
          disabled={!canAdvance}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#284737] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_12px_28px_rgba(40,71,55,0.18)] transition enabled:hover:bg-[#1f392c] disabled:cursor-not-allowed disabled:bg-[#e7decb] disabled:text-[#9c8f79] disabled:shadow-none"
        >
          {actionLabel}
          <ArrowRight size={16} strokeWidth={1.8} />
        </button>
        {!canAdvance ? (
          <p className="text-sm font-semibold text-[#6a5f4d]" aria-hidden>
            Choose one to continue.
          </p>
        ) : null}
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
  variant?: "card" | "chip";
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
    <div role="radiogroup" aria-label={label} className={`grid gap-3 ${columns}`}>
      {options.map((option, index) => {
        const selected = value === option.value;
        // Roving tabindex: the checked radio (or the first when none chosen)
        // is the single tab stop; arrows move within the group.
        const tabbable = selected || (selectedIndex === -1 && index === 0);
        const OptionIcon = option.icon;

        if (variant === "chip") {
          return (
            <button
              key={option.value}
              ref={(el) => {
                refs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={tabbable ? 0 : -1}
              onClick={() => onChange(option.value)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={
                selected
                  ? "min-h-14 rounded-lg border border-[#244336] bg-[#eef1e8] px-4 py-3 text-left text-sm font-semibold leading-6 text-[#244336] shadow-[0_12px_28px_rgba(40,71,55,0.08)]"
                  : "min-h-14 rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] px-4 py-3 text-left text-sm font-semibold leading-6 text-[#625b51] transition hover:border-[#c49c52] hover:text-[#244336]"
              }
            >
              {option.title}
            </button>
          );
        }

        return (
          <button
            key={option.value}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={tabbable ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className={
              selected
                ? "min-h-32 border-y border-[#244336] bg-[#eef1e8] p-4 text-left shadow-[inset_4px_0_0_#244336,0_14px_34px_rgba(40,71,55,0.08)]"
                : "min-h-32 border-y border-transparent p-4 text-left transition hover:bg-[#fffdf7]"
            }
          >
            <span className="flex items-start justify-between gap-3">
              {OptionIcon ? (
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
                  <OptionIcon size={19} strokeWidth={1.8} />
                </span>
              ) : (
                <span />
              )}
              {selected ? (
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#284737] text-[#fffaf0]">
                  <Check size={15} strokeWidth={2} />
                </span>
              ) : null}
            </span>
            <span className="mt-4 block font-serif text-2xl font-semibold leading-tight text-[#241f19]">
              {option.title}
            </span>
            {option.description ? (
              <span className="mt-2 block text-sm leading-6 text-[#625b51]">
                {option.description}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
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
      <h3 className="text-sm font-semibold uppercase tracking-[0.04em] text-[#8f6220]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#625b51]">{body}</p>
    </div>
  );
}
