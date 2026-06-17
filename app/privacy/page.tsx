import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "Privacy Policy for Hope Bible, an independent Christian Bible reading, prayer guidance, faith reflection, and faith-symbol education resource.",
};

export default function PrivacyPage() {
  return (
    <LegalInfoPage
      icon={ShieldCheck}
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="How this independent Christian resource handles privacy for the current free website."
      note="Hope Bible currently provides free Bible reading, prayer, reflection, and faith-symbol education without user accounts, payment processing, or public shop features."
      updated="June 9, 2026"
      sections={[
        {
          title: "Basic site usage",
          body: "Hope Bible is currently a free informational resource. It does not provide user accounts, payment processing, public comments, or a public shop. Normal technical information may be processed by hosting infrastructure so pages can load and remain secure.",
        },
        {
          title: "Contact and support",
          body: "A real contact/support method will be added before public commerce launch. When a visitor sends a message through an approved contact method, that information should be used only to respond to the request, manage the site, or address policy and support questions.",
        },
        {
          title: "Cookies and analytics",
          body: "The site does not currently describe any active advertising pixels or marketing cookies. Basic hosting logs may be processed by the platform that serves the site so pages can load and remain secure.",
        },
        {
          title: "Future commerce privacy",
          body: "If a separate optional commerce provider is added later, payment, shipping, and customer-support information may be handled by that provider or relevant payment services. Privacy details will be updated before any public shop goes live.",
        },
      ]}
    />
  );
}
