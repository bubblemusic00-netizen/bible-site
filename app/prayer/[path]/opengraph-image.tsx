import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";
import { getPrayerPath } from "../prayer-paths";

export const alt = "Hope Bible prayer";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const prayer = getPrayerPath(path);
  return renderOgImage({
    eyebrow: "Prayer",
    title: prayer ? prayer.title : "Prayer Library",
  });
}
