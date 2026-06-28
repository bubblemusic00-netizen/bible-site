import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import { PageShell } from "../components/site-ui";
import { FaithQuiz } from "./FaithQuiz";

export const metadata: Metadata = {
  alternates: { canonical: "/start" },
  title: "Faith Quiz | Scripture, Prayer, and Reflection",
  description:
    "Take a simple Faith Quiz for Christian faith guidance with Scripture, prayer, reflection, and an optional faith-symbol reminder.",
};

export default function StartPage() {
  return (
    <PageShell active="start">
      {/* Compact on mobile so the quiz stages fit the viewport without scrolling;
          full intro presence returns at sm+. h1 kept for SEO/a11y. */}
      <div className="w-full max-w-3xl">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide2 text-gold-700 sm:text-sm">
          <Leaf size={14} strokeWidth={1.8} />
          Faith Quiz
        </p>
        <h1 className="mt-1.5 font-serif text-[1.75rem] font-semibold leading-display text-ink-900 sm:mt-5 sm:text-6xl">
          Find Your Faith Path
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-ink-600 sm:mt-5 sm:text-lg sm:leading-8">
          Answer a few simple questions and receive Scripture, prayer, reflection, and an optional faith-symbol reminder.
        </p>
      </div>

      <FaithQuiz />
    </PageShell>
  );
}
