"use client";

import { useEffect } from "react";
import { RefreshCw, TriangleAlert } from "lucide-react";
import {
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "./components/site-ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for debugging; replace with real logging if added.
    console.error(error);
  }, [error]);

  return (
    <PageShell>
      <PageIntro
        icon={TriangleAlert}
        eyebrow="Something went wrong"
        title="This page ran into a problem."
        subtitle="It is not you. Try again, or return to a quiet starting point for Scripture and prayer."
      />

      <div className="mt-8 max-w-3xl">
        <StatusNote>
          If this keeps happening, please reach out through the contact page and
          we will look into it.
        </StatusNote>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#203d30] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_14px_34px_rgba(40,71,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#183326]"
        >
          <RefreshCw size={16} strokeWidth={1.8} />
          Try again
        </button>
        <SecondaryButton href="/">Return home</SecondaryButton>
        <SecondaryButton href="/contact">Contact</SecondaryButton>
      </div>
    </PageShell>
  );
}
