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
      note="A contact address will be added before public commerce launch. Until then, this page keeps the boundary clear without inventing a fake email."
      updated="June 8, 2026"
      sections={[
        {
          title: "General questions",
          body: "This page is reserved for questions about Hope Bible, Scripture attribution, prayer content, faith-symbol language, legal pages, or future shop policies.",
        },
        {
          title: "Contact method",
          body: "A real support email or contact form will be added before public commerce launch. No placeholder email has been invented.",
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
