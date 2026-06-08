import type { Metadata } from "next";
import { BadgeInfo } from "lucide-react";
import { LegalPlaceholderPage } from "../components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Disclosures",
  description:
    "Disclosures for Hope Bible, including independent-resource status and future commerce transparency.",
};

export default function DisclosuresPage() {
  return (
    <LegalPlaceholderPage
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
          title: "Future commerce",
          body: "A future optional shop, affiliate relationship, partner fulfillment arrangement, or dropshipping relationship may be added later. If that happens, the relationship should be disclosed clearly before visitors make a purchase.",
        },
        {
          title: "Purchases are optional",
          body: "The free Bible, prayer, and reflection guidance should remain available without requiring a purchase. Any future faith reminder or jewelry item should be optional and separate from the core guidance.",
        },
        {
          title: "No object-based claims",
          body: "Christian symbols and future faith reminders must not be presented as miracle objects, protection charms, healing tools, sources of spiritual power, luck items, or guarantees of blessing or outcomes.",
        },
      ]}
    />
  );
}
