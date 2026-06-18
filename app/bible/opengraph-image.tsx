import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";

export const alt = "Selah guided Bible readings";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Bible", title: "Guided Bible Readings" });
}
