import { redirect } from "next/navigation";
import { faithPathSlugs, getFaithPathBySlug } from "@/lib/faith-paths";

export function generateStaticParams() {
  return faithPathSlugs.map((path) => ({ path }));
}

export default async function ScripturePathRedirectPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const faithPath = getFaithPathBySlug(path);

  redirect(faithPath?.scriptureRoute ?? "/bible");
}
