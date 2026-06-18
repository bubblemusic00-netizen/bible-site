import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";

export const alt = "Selah prayer library";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Prayer", title: "Prayer Library" });
}
