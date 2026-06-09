import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import { PageIntro, PageShell, StatusNote } from "../components/site-ui";
import { FaithQuiz } from "./FaithQuiz";

export const metadata: Metadata = {
  title: "Faith Quiz | Scripture, Prayer, and Reflection",
  description:
    "Take a simple Faith Quiz for Christian faith guidance with Scripture, prayer, reflection, and an optional faith-symbol reminder.",
};

export default function StartPage() {
  return (
    <PageShell active="start">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={Leaf}
          eyebrow="Faith Quiz"
          title="Find Your Faith Path"
          subtitle="Answer a few simple questions and receive Scripture, prayer, reflection, and an optional faith-symbol reminder."
        />
        <StatusNote>
          Free and private: no login, email, or personal details. Faith symbols
          are optional reminders, not promises or guarantees.
        </StatusNote>
      </div>

      <FaithQuiz />
    </PageShell>
  );
}
