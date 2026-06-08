import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";
import { LegalPlaceholderPage } from "../components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Returns Policy",
  description:
    "Returns Policy for Hope Bible before any future optional shop or product sales are added.",
};

export default function ReturnsPage() {
  return (
    <LegalPlaceholderPage
      icon={RotateCcw}
      eyebrow="Returns"
      title="Returns Policy"
      subtitle="Prepared for a possible future shop, with no products for sale yet."
      note="There are currently no purchases, returns, exchanges, refunds, or product warranties on Hope Bible."
      updated="June 8, 2026"
      sections={[
        {
          title: "No sales yet",
          body: "Because Hope Bible does not currently sell products, there are no active return, exchange, refund, or warranty terms. This page is prepared for future readiness.",
        },
        {
          title: "Details before purchase",
          body: "If a shop is added later, the return policy should be clearly available before purchase and should explain eligibility, item condition, refund handling, exchanges, damaged items, and support steps.",
        },
        {
          title: "No return window yet",
          body: "No exact return window has been invented because the future shop, fulfillment model, and product rules are not finalized.",
        },
        {
          title: "Optional shop separation",
          body: "Any future purchase policy should remain separate from the free Bible, prayer, and reflection guidance, which should not depend on buying anything.",
        },
      ]}
    />
  );
}
