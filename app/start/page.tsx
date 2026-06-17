import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import { PageIntro, PageShell } from "../components/site-ui";
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
      <PageIntro
        icon={Leaf}
        eyebrow="Faith Quiz"
        title="Find Your Faith Path"
        subtitle="Answer a few simple questions and receive Scripture, prayer, reflection, and an optional faith-symbol reminder."
      />

      <FaithQuiz />
    </PageShell>
  );
}
