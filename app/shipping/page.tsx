import type { Metadata } from "next";
import { PackageCheck } from "lucide-react";
import { LegalPlaceholderPage } from "../components/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Shipping Policy for Hope Bible before any future optional shop or product sales are added.",
};

export default function ShippingPage() {
  return (
    <LegalPlaceholderPage
      icon={PackageCheck}
      eyebrow="Shipping"
      title="Shipping Policy"
      subtitle="Prepared for a possible future shop, with no products for sale yet."
      note="There is currently no checkout, product inventory, shipping provider, or order fulfillment on Hope Bible."
      updated="June 8, 2026"
      sections={[
        {
          title: "No orders yet",
          body: "Hope Bible does not currently sell or ship products. This page exists so a clear shipping policy can be completed before any future optional shop goes live.",
        },
        {
          title: "Details before purchase",
          body: "If products are offered later, shipping regions, costs, processing expectations, carrier estimates, tracking, delays, lost packages, and support contact details should be provided before purchase.",
        },
        {
          title: "Partner fulfillment",
          body: "If future products are fulfilled by Shopify, a supplier, or another partner, that relationship and any relevant shipping responsibilities should be disclosed when the shop is live.",
        },
        {
          title: "No invented timelines",
          body: "No shipping speeds, delivery windows, or carrier promises are listed yet because no fulfillment setup has been finalized.",
        },
      ]}
    />
  );
}
