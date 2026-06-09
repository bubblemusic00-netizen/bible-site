import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  title: "Returns Policy",
  description:
    "Returns Policy for Hope Bible while the site provides free Bible, prayer, and faith guidance without product sales.",
};

export default function ReturnsPage() {
  return (
    <LegalInfoPage
      icon={RotateCcw}
      eyebrow="Returns"
      title="Returns Policy"
      subtitle="Hope Bible does not currently sell products, so there are no active returns or exchanges."
      note="There are currently no purchases, returns, exchanges, refunds, or product warranties on Hope Bible."
      updated="June 8, 2026"
      sections={[
        {
          title: "No sales",
          body: "Because Hope Bible does not currently sell products, there are no active return, exchange, refund, or warranty terms.",
        },
        {
          title: "Free guidance",
          body: "Bible readings, prayer guidance, Faith Quiz results, and faith-symbol education are free site content and are not tied to a purchase.",
        },
        {
          title: "Commerce boundary",
          body: "If commerce is introduced, return eligibility, item condition, refund handling, exchanges, damaged items, and support steps should be clearly published before checkout is available.",
        },
        {
          title: "No purchase requirement",
          body: "The free Bible, prayer, and reflection guidance does not depend on buying anything.",
        },
      ]}
    />
  );
}
