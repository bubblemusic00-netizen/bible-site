import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Hope Bible, an independent Christian Bible reading, prayer guidance, and faith reflection resource.",
};

export default function PrivacyPage() {
  return (
    <LegalInfoPage
      icon={ShieldCheck}
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="How this independent Christian resource handles privacy for the current free website."
      note="Hope Bible currently provides free Bible reading, prayer, reflection, and faith-symbol education without accounts, checkout, or payment processing."
      updated="June 8, 2026"
      sections={[
        {
          title: "Basic site usage",
          body: "Hope Bible is currently a free informational resource. It does not provide user accounts, checkout, payment processing, or public comments. If a visitor uses the site, normal technical information may be processed by hosting infrastructure so pages can load and remain secure.",
        },
        {
          title: "Contact forms",
          body: "When a visitor sends a message through an approved contact method, that information should be used only to respond to the request, manage the site, or address policy and support questions.",
        },
        {
          title: "Cookies and analytics",
          body: "The site does not currently describe any active advertising pixels or marketing cookies. Basic hosting logs may be processed by the platform that serves the site so pages can load and remain secure.",
        },
        {
          title: "Commerce boundary",
          body: "Hope Bible does not currently collect order, payment, shipping, or customer account information because there is no public commerce experience on the site.",
        },
      ]}
    />
  );
}
