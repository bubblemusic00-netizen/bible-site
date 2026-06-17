import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";
import { getJewelryIntention } from "../intentions";

export const alt = "Hope Bible faith symbol reminder";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ intention: string }>;
}) {
  const { intention } = await params;
  const data = getJewelryIntention(intention);
  return renderOgImage({
    eyebrow: "Faith Symbol Reminder",
    title: data ? data.pageTitle : "Faith Symbol Reminder",
  });
}
