import type { Metadata } from "next";
import { BadgeInfo } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  title: "Disclosures",
  description:
    "Disclosures for Hope Bible, including independent-resource status and clear faith-symbol boundaries.",
};

export default function DisclosuresPage() {
  return (
    <LegalInfoPage
      icon={BadgeInfo}
      eyebrow="Disclosures"
      title="Disclosures"
      subtitle="Clear boundaries for an independent Christian faith-inspired resource."
      note="Hope Bible is independent and does not currently sell products, run checkout, display product inventory, or publish affiliate offers."
      updated="June 8, 2026"
      sections={[
        {
          title: "Independent resource",
          body: "Hope Bible is an independent Christian faith-inspired resource. It is not affiliated with an official church, ministry, denomination, Bible publisher, retail platform, or religious authority.",
        },
        {
          title: "No commerce on this site",
          body: "Hope Bible currently provides free Bible, prayer, reflection, and faith-symbol education. It does not currently offer checkout, prices, product inventory, affiliate offers, or paid recommendations.",
        },
        {
          title: "Purchases are optional",
          body: "The free Bible, prayer, and reflection guidance does not require a purchase. Faith symbols are discussed as reminders and teaching aids, not as products on this site.",
        },
        {
          title: "No object-based claims",
          body: "Christian symbols are not presented as miracle objects, protection charms, healing tools, sources of spiritual power, luck items, or guarantees of blessing or outcomes.",
        },
      ]}
    />
  );
}
