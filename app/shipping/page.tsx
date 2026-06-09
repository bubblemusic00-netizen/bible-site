import type { Metadata } from "next";
import { PackageCheck } from "lucide-react";
import { LegalInfoPage } from "../components/LegalInfoPage";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Shipping Policy for Hope Bible while the site provides free Bible, prayer, and faith guidance without product sales.",
};

export default function ShippingPage() {
  return (
    <LegalInfoPage
      icon={PackageCheck}
      eyebrow="Shipping"
      title="Shipping Policy"
      subtitle="Hope Bible does not currently sell or ship products."
      note="There is currently no checkout, product inventory, shipping provider, or order fulfillment on Hope Bible."
      updated="June 8, 2026"
      sections={[
        {
          title: "No orders",
          body: "Hope Bible does not currently sell products, collect shipping addresses, or ship physical goods.",
        },
        {
          title: "Free guidance",
          body: "Bible readings, prayer guidance, Faith Quiz results, and faith-symbol education are available as site content and do not require shipping.",
        },
        {
          title: "Commerce boundary",
          body: "If commerce is introduced, shipping regions, costs, timing, tracking, fulfillment responsibilities, and support details should be clearly published before checkout is available.",
        },
        {
          title: "No shipping claims",
          body: "Because there is no public commerce experience, Hope Bible does not make shipping speed, delivery window, carrier, or fulfillment promises.",
        },
      ]}
    />
  );
}
