import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";
import { getGuide } from "../guide-data";

export const alt = "Hope Bible beginner guide";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide } = await params;
  const data = getGuide(guide);
  return renderOgImage({
    eyebrow: "Beginner Guide",
    title: data ? data.title : "Beginner Christian Guides",
  });
}
