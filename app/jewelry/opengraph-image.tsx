import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";

export const alt = "Selah Christian faith symbols";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Faith Symbols",
    title: "Christian Faith Symbols",
  });
}
