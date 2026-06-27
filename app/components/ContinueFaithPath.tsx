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
      className="group mb-8 block max-w-xl rounded-lg border border-line-300 bg-cream-200 p-4 text-ink-900 shadow-[0_14px_34px_rgba(71,55,35,0.075)] transition hover:-translate-y-0.5 hover:bg-cream-100 hover:shadow-[0_18px_42px_rgba(71,55,35,0.11)]"
    >
      <span className="flex items-start justify-between gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mist-200 text-green-600">
          <Heart size={17} strokeWidth={1.8} />
        </span>
        <ArrowRight
          size={16}
          className="mt-1 shrink-0 text-gold-700 transition group-hover:translate-x-1"
        />
      </span>
      <span className="mt-3 block font-serif text-2xl font-semibold leading-tight">
        Continue your {faithPaths[pathSlug].title} path
      </span>
      <span className="mt-2 block text-sm leading-6 text-ink-600">
        Return to prayer, Scripture, and an optional reminder for this intention.
      </span>
      <span className="mt-3 block text-sm font-semibold text-green-600">
        Continue path
      </span>
    </Link>
  );
}
