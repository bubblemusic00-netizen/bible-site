import type { Metadata } from "next";
import { ScrollText } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  title: "Terms of Use | Hope Bible",
  description:
    "Terms of Use for Hope Bible, an independent Christian Bible, prayer, faith reflection, and faith-symbol education resource.",
};

export default function TermsPage() {
  return (
    <LegalInfoPage
      icon={ScrollText}
      eyebrow="Terms"
      title="Terms of Use"
      subtitle="Plain-language terms for using this free Bible, prayer, reflection, and faith-symbol education resource."
      note="Hope Bible is currently a free guidance-first website. If an optional shop is added later, product-specific terms and policies will be provided before public launch."
      updated="June 9, 2026"
      sections={[
        {
          title: "Informational purpose",
          body: "Hope Bible provides general Scripture references, prayer guidance, faith reflections, and educational content about Christian symbols. The content is offered for personal reflection and general spiritual encouragement.",
        },
        {
          title: "No professional counseling",
          body: "Content on this site is for personal reflection and general guidance only. It does not replace pastoral care, professional counseling, medical care, legal advice, or other qualified support.",
        },
        {
          title: "Independent resource",
          body: "Hope Bible is independent. It is not an official church, ministry, denomination, Bible publisher, or religious authority. Visitors are responsible for reading Scripture in context and seeking trusted local guidance when needed.",
        },
        {
          title: "No promised outcomes",
          body: "Prayer, Scripture reflection, and faith symbols should not be treated as formulas, guarantees, charms, or promises of specific outcomes. Visitors remain responsible for their own decisions, actions, and care.",
        },
        {
          title: "Future shop terms",
          body: "If an optional shop is introduced later, product descriptions, support contact information, shipping details, return/refund terms, and any relevant fulfillment relationships will be stated in the applicable shop policies before purchase.",
        },
      ]}
    />
  );
}
