import type { Metadata } from "next";
import Link from "next/link";
import { BadgeInfo } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  alternates: { canonical: "/disclosures" },
  title: "Disclosures",
  description:
    "Disclosures for Hope Bible, including independent-resource status, future commerce boundaries, and clear faith-symbol language.",
};

export default function DisclosuresPage() {
  return (
    <LegalInfoPage
      icon={BadgeInfo}
      eyebrow="Disclosures"
      title="Disclosures"
      subtitle="Clear boundaries for a free, independent Christian faith-inspired resource."
      note="Hope Bible currently provides Bible readings, prayer guidance, Faith Quiz results, and faith-symbol education as free content. Any optional shop added later will be separate from the guidance content."
      updated="June 9, 2026"
      sections={[
        {
          title: "Independent resource",
          body: (
            <>
              Hope Bible is an independent Christian faith-inspired resource. It
              is not affiliated with an official church, ministry, denomination,
              Bible publisher, retail platform, or religious authority. Read
              the{" "}
              <Link
                href="/editorial-principles"
                className="inline-flex min-h-10 items-center font-semibold text-[#254737] transition hover:text-[#8f6220]"
              >
                Editorial Principles
              </Link>{" "}
              for more about how content is approached.
            </>
          ),
        },
        {
          title: "Free content first",
          body: "Bible readings, prayer guidance, Faith Quiz results, and faith-symbol education do not require a purchase. The core guidance content is intended to remain available without buying anything.",
        },
        {
          title: "Future optional shop",
          body: "If an optional shop is added later, product pages and policies will state relevant purchase, shipping, return, support, and fulfillment details before an order is placed. Any affiliate or third-party fulfillment relationships will be disclosed when applicable.",
        },
        {
          title: "Faith reminders, not guarantees",
          body: (
            <>
              Christian symbols are discussed as reminders of Scripture,
              prayer, and faith. They are not presented as miracle objects,
              protection charms, healing tools, sources of spiritual power, luck
              items, or promises of blessing, healing, protection, or specific
              outcomes. Read the{" "}
              <Link
                href="/content-boundaries"
                className="inline-flex min-h-10 items-center font-semibold text-[#254737] transition hover:text-[#8f6220]"
              >
                Content Boundaries
              </Link>{" "}
              for the site&apos;s limits.
            </>
          ),
        },
      ]}
    />
  );
}
