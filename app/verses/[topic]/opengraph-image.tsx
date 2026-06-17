import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";
import { getVerseTopic } from "../verse-topics";

export const alt = "Hope Bible Bible verses by topic";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = getVerseTopic(topic);
  return renderOgImage({
    eyebrow: "Bible Verses",
    title: data ? data.title : "Bible Verses by Topic",
  });
}
