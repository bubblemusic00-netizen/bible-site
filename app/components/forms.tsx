"use client";

import { useId, useState, type ReactNode } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

// Reusable form primitives matching the site's warm/editorial design.
// Built ahead of email/checkout wiring so capture features drop in cleanly.

const fieldBase =
  "w-full rounded-lg border border-[#d8c5a3] bg-[#fffaf0] px-4 py-3 text-base text-[#241f19] placeholder:text-[#756a59] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition focus:border-[#bd9247] focus:outline-none focus:ring-2 focus:ring-[#c49c52]/45 disabled:cursor-not-allowed disabled:opacity-60";

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold text-[#2f5140]"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm font-semibold text-[#9b3434]" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm leading-5 text-[#625b51]">{hint}</p>
      ) : null}
    </div>
  );
}

export function TextInput({
  invalid,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={`${fieldBase} ${invalid ? "border-[#c08a8a] focus:ring-[#c08a8a]/45" : ""} ${className}`}
    />
  );
}

export function Textarea({
  invalid,
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      {...props}
      aria-invalid={invalid || undefined}
      className={`${fieldBase} min-h-28 resize-y ${invalid ? "border-[#c08a8a] focus:ring-[#c08a8a]/45" : ""} ${className}`}
    />
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

/**
 * Email capture UI. Posts to /api/subscribe, which currently validates only —
 * wire an email provider there before mounting this on live pages.
 */
export function NewsletterSignup({
  heading = "A verse and prayer in your inbox",
  description = "One short, quiet email each morning. No spam. Unsubscribe anytime.",
  cta = "Subscribe",
}: {
  heading?: string;
  description?: string;
  cta?: string;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError(undefined);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        // Surface the endpoint's own message (e.g. the 503 "not configured yet"
        // before Resend is wired) instead of a generic, broken-looking error.
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          res.status === 503
            ? (data?.error ?? "Email signups aren't open yet — check back soon.")
            : (data?.error ?? "Something went wrong. Please try again."),
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-[#cfe0d0] bg-[#eef5ee] px-4 py-4 text-[#2f5140]">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#dcebdc]">
          <Check size={18} strokeWidth={2} />
        </span>
        <p className="text-sm font-semibold leading-6">
          Thank you. Check your inbox to confirm.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3">
      <div>
        <p className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
          {heading}
        </p>
        <p className="mt-1 text-sm leading-6 text-[#625b51]">{description}</p>
      </div>
      <FormField label="Email address" htmlFor={id} error={error}>
        <TextInput
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          invalid={status === "error"}
          disabled={status === "loading"}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#203d30] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_14px_34px_rgba(40,71,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#183326] disabled:translate-y-0 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Subscribing…
          </>
        ) : (
          <>
            {cta}
            <ArrowRight size={16} strokeWidth={1.8} />
          </>
        )}
      </button>
    </form>
  );
}
