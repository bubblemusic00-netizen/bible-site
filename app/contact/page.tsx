import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalPlaceholderPage } from "../components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information for Hope Bible, an independent Christian Bible reading, prayer, and faith reflection resource.",
};

export default function ContactPage() {
  return (
    <LegalPlaceholderPage
      icon={Mail}
      eyebrow="Contact"
      title="Contact"
      subtitle="A simple contact page prepared for questions about this independent Christian resource."
      note="TODO before launch: add a real public email address or contact form. Do not launch with this TODO as the only contact method."
      updated="June 8, 2026"
      sections={[
        {
          title: "General questions",
          body: "Use this page for questions about Hope Bible, Scripture attribution, prayer content, faith-symbol language, legal pages, or future shop policies. A real contact method still needs to be added before launch.",
        },
        {
          title: "Contact method TODO",
          body: "Replace this placeholder with a real support email or form destination before public launch. No fake email has been added.",
        },
        {
          title: "Pastoral or urgent needs",
          body: "Hope Bible is not a crisis service, counseling provider, church office, or emergency support channel. Visitors with urgent needs should contact local emergency services, a trusted pastor, counselor, doctor, or qualified support organization.",
        },
        {
          title: "Policy questions",
          body: "Before any future shop goes live, this page should clearly support privacy, disclosure, shipping, return, and order-support questions.",
        },
      ]}
    />
  );
}
