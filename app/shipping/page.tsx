import type { Metadata } from "next";
import { PackageCheck } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  alternates: { canonical: "/shipping" },
  title: "Shipping Policy",
  description:
    "Shipping readiness information for Hope Bible before any optional public shop is introduced.",
};

export default function ShippingPage() {
  return (
    <LegalInfoPage
      icon={PackageCheck}
      eyebrow="Shipping"
      title="Shipping Policy"
      subtitle="Hope Bible does not currently operate a public shop or ship physical goods."
      note="The current site is a free faith-guidance resource. If an optional shop is added later, shipping details will be shown clearly before purchase."
      updated="June 9, 2026"
      sections={[
        {
          title: "Current status",
          body: "Hope Bible currently offers Bible readings, prayer guidance, Faith Quiz results, and faith-symbol education. It does not collect shipping addresses or fulfill physical orders.",
        },
        {
          title: "If a shop is added later",
          body: "Shipping costs, delivery estimates, processing times, tracking availability, fulfillment details, and support contact information will be stated before purchase. No shipping times or costs are being invented before those details are known.",
        },
        {
          title: "Fulfillment partners",
          body: "If future orders are handled with third-party fulfillment partners, that relationship will be described in the relevant shop policies before public launch.",
        },
        {
          title: "Guidance stays separate",
          body: "Free Scripture, prayer, and reflection guidance will remain available without purchase and does not depend on shipping or order activity.",
        },
      ]}
    />
  );
}
