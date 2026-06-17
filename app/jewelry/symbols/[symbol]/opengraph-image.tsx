import {
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/app/components/og-image";
import { getFaithSymbol } from "../../symbol-data";

export const alt = "Hope Bible Christian symbol meaning";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const data = getFaithSymbol(symbol);
  return renderOgImage({
    eyebrow: "Faith Symbol",
    title: data ? `${data.name} Symbol Meaning` : "Christian Symbol Meaning",
  });
}
