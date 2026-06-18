import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Contact and support readiness for Selah, an independent Christian Bible reading, prayer, and faith reflection resource.",
};

export default function ContactPage() {
  // Owner note: Replace this pre-commerce message with a real support email or contact form before a public shop goes live.
  return (
    <LegalInfoPage
      icon={Mail}
      eyebrow="Contact"
      title="Contact"
      subtitle="How Selah will handle questions and support before any public shop goes live."
      note="A public contact address will be added before commerce launch. Selah is currently a free faith-guidance resource, and a direct support channel will be provided before any public shop is introduced."
      updated="June 9, 2026"
      sections={[
        {
          title: "General questions",
          body: "This page is reserved for questions about Selah, Scripture attribution, prayer content, faith-symbol language, legal pages, and future support policies.",
        },
        {
          title: "Support before commerce",
          body: "Before any public shop goes live, Selah will provide a real contact or support method for order, policy, and site questions. A real contact method will be published before any public shop or order support is introduced.",
        },
        {
          title: "Pastoral or urgent needs",
          body: "Selah is not a crisis service, counseling provider, church office, or emergency support channel. Visitors with urgent needs should contact local emergency services, a trusted pastor, counselor, doctor, or qualified support organization.",
        },
        {
          title: "Free guidance remains available",
          body: "Bible readings, prayers, Faith Quiz results, and faith-symbol education are available without purchase. If an optional shop is added later, the free guidance content will remain separate from any purchase decision.",
        },
      ]}
    />
  );
}
