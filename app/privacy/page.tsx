import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { LegalPlaceholderPage } from "../components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Hope Bible, an independent Christian Bible reading, prayer guidance, and faith reflection resource.",
};

export default function PrivacyPage() {
  return (
    <LegalPlaceholderPage
      icon={ShieldCheck}
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="How this independent Christian resource handles privacy before launch and before any future shop is added."
      note="This is a conservative launch draft. Replace TODO contact details and review it before adding analytics, forms, accounts, payments, Shopify, or other third-party tools."
      updated="June 8, 2026"
      sections={[
        {
          title: "Basic site usage",
          body: "Hope Bible is currently a free informational resource. It does not provide user accounts, checkout, payment processing, or public comments. If a visitor uses the site, normal technical information may be processed by hosting infrastructure so pages can load and remain secure.",
        },
        {
          title: "Contact forms",
          body: "A public contact method has not been added yet. If a contact form or email intake is added, information sent through that channel should be used only to respond to the request, manage the site, or address policy and support questions.",
        },
        {
          title: "Cookies and analytics",
          body: "The site does not currently describe any active analytics, advertising pixels, or marketing cookies. If analytics or cookies are added later, this page should explain what tools are used, what they collect, and how visitors can manage choices where applicable.",
        },
        {
          title: "Future shop privacy",
          body: "If an optional Shopify or partner checkout is added later, that checkout may have separate privacy practices for orders, payments, shipping, fraud prevention, and customer support. Those details should be shown clearly before any purchase is available.",
        },
      ]}
    />
  );
}
