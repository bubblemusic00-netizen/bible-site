"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { ArrowRight, Heart } from "lucide-react";
import {
  faithPathSlugs,
  faithPaths,
  getFaithPathBySlug,
  type FaithPathSlug,
} from "@/lib/faith-paths";

const selectedFaithPathKey = "selectedFaithPath";
const selectedFaithPathChangeEvent = "faith-path-selection-change";

function isFaithPathSlug(value: string): value is FaithPathSlug {
  return faithPathSlugs.includes(value as FaithPathSlug);
}

export function SaveSelectedFaithPath({
  pathSlug,
}: {
  pathSlug: FaithPathSlug;
}) {
  useEffect(() => {
    if (typeof window.localStorage === "undefined") {
      return;
    }

    window.localStorage.setItem(selectedFaithPathKey, pathSlug);
    window.dispatchEvent(new Event(selectedFaithPathChangeEvent));
  }, [pathSlug]);

  return null;
}

function getSelectedFaithPathSnapshot() {
  if (typeof window.localStorage === "undefined") {
    return null;
  }

  const storedPath = window.localStorage.getItem(selectedFaithPathKey);

  if (storedPath && isFaithPathSlug(storedPath)) {
    return storedPath;
  }

  return null;
}

function subscribeToSelectedFaithPath(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(selectedFaithPathChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(selectedFaithPathChangeEvent, onStoreChange);
  };
}

export function ContinueFaithPath() {
  const pathSlug = useSyncExternalStore(
    subscribeToSelectedFaithPath,
    getSelectedFaithPathSnapshot,
    () => null,
  );

  if (!pathSlug) {
    return null;
  }

  const faithPath = getFaithPathBySlug(pathSlug);

  if (!faithPath) {
    return null;
  }

  return (
    <Link
      href={faithPath.startRoute}
      className="group mt-3 block max-w-xl rounded-lg border border-[#f4dfb5]/55 bg-[#fff8eb]/90 p-4 text-[#241f19] shadow-[0_14px_34px_rgba(25,20,14,0.18)] transition hover:-translate-y-0.5 hover:bg-[#fffaf0] hover:shadow-[0_18px_42px_rgba(25,20,14,0.24)]"
    >
      <span className="flex items-start justify-between gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
          <Heart size={17} strokeWidth={1.8} />
        </span>
        <ArrowRight
          size={16}
          className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
        />
      </span>
      <span className="mt-3 block font-serif text-2xl font-semibold leading-tight">
        Continue your {faithPaths[pathSlug].title} path
      </span>
      <span className="mt-2 block text-sm leading-6 text-[#625b51]">
        Return to prayer, scripture, and a symbolic reminder for this intention.
      </span>
      <span className="mt-3 block text-sm font-semibold text-[#254737]">
        Continue path
      </span>
    </Link>
  );
}
