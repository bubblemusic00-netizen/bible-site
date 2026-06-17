import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";
import { getBibleChapter, getBibleChapterReference } from "../../bible-data";

export const alt = "Hope Bible guided Bible reading";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}) {
  const { book, chapter } = await params;
  const data = getBibleChapter(book, chapter);
  const title = data
    ? getBibleChapterReference(data)
    : "Guided Bible Reading";
  return renderOgImage({ eyebrow: "Guided Bible Reading", title });
}
