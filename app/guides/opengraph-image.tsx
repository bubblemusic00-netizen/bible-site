import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";

export const alt = "Selah beginner Christian guides";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Guides",
    title: "Beginner Christian Guides",
  });
}
