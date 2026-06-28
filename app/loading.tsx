export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_16%_10%,rgba(226,190,120,0.16),transparent_34%),linear-gradient(135deg,rgba(255,252,244,0.96),rgba(246,238,222,0.92))] text-success">
      <div className="flex flex-col items-center gap-5">
        <span className="grid size-14 animate-pulse place-items-center rounded-[17px] bg-green-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_32px_rgba(32,70,54,0.24)]">
          <svg viewBox="0 0 28 32" className="size-9" fill="none" aria-hidden="true">
            <path
              d="M5 29 V13 a9 9 0 0 1 18 0 V29"
              stroke="#fff8e8"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M4 29 H24" stroke="#fff8e8" strokeWidth="1.7" strokeLinecap="round" />
            <rect x="12.3" y="8.5" width="3.4" height="7.6" rx="1.7" fill="#e6bf63" />
            <rect x="10.5" y="17.2" width="7" height="1.7" rx="0.85" fill="#e6bf63" />
            <rect x="9.3" y="20.2" width="9.4" height="1.7" rx="0.85" fill="#e6bf63" />
            <rect x="8.1" y="23.2" width="11.8" height="1.7" rx="0.85" fill="#e6bf63" />
            <rect x="6.9" y="26.2" width="14.2" height="1.7" rx="0.85" fill="#e6bf63" />
          </svg>
        </span>
        <p className="text-sm font-semibold uppercase tracking-label text-gold-700">
          Loading
        </p>
      </div>
    </div>
  );
}
