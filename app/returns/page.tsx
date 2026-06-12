import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  title: "Returns Policy",
  description:
    "Returns readiness information for Hope Bible before any optional public shop is introduced.",
};

export default function ReturnsPage() {
  return (
    <LegalInfoPage
      icon={RotateCcw}
      eyebrow="Returns"
      title="Returns Policy"
      subtitle="Hope Bible does not currently operate a public shop, so there are no active product returns."
      note="If an optional shop is added later, return and refund details will be stated clearly before purchase."
      updated="June 9, 2026"
      sections={[
        {
          title: "Current status",
          body: "Hope Bible currently provides free Bible readings, prayer guidance, Faith Quiz results, and faith-symbol education. There are no active product orders, returns, exchanges, refunds, or warranties on the current site.",
        },
        {
          title: "If a shop is added later",
          body: "Return and refund eligibility, time windows, item condition requirements, damaged-item handling, and the support contact process will be published before purchase. No return window is being invented before shop details are final.",
        },
        {
          title: "Optional purchases",
          body: "Any future faith reminder items would be optional. Free Scripture, prayer, reflection, and Faith Quiz guidance will remain available without purchase.",
        },
        {
          title: "Support requirement",
          body: "A real support/contact method will be provided before a public shop goes live so policy and order questions have a clear place to go.",
        },
      ]}
    />
  );
}
