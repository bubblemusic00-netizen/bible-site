import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_16%_10%,rgba(226,190,120,0.16),transparent_34%),linear-gradient(135deg,rgba(255,252,244,0.96),rgba(246,238,222,0.92))] text-[#2f5140]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 size={34} strokeWidth={1.8} className="animate-spin text-[#254737]" />
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8f6220]">
          Loading
        </p>
      </div>
    </div>
  );
}
