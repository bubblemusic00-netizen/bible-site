import { ImageResponse } from "next/og";

// Branded app icon (also referenced as the Organization logo in JSON-LD).
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#203d30",
        }}
      >
        {/* Cross mark composed from two bars (satori: flexbox/absolute only). */}
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 320,
            height: 320,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 134,
              top: 24,
              width: 52,
              height: 272,
              borderRadius: 26,
              background: "#fff8e8",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 48,
              top: 104,
              width: 224,
              height: 52,
              borderRadius: 26,
              background: "#fff8e8",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
