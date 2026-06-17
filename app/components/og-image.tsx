import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

// Shared Open Graph image renderer used by per-route opengraph-image files,
// so each shared link shows its own eyebrow + title on the brand background.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0d120e 0%, #17281f 52%, #203d30 100%)",
          color: "#fffaf0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              width: 60,
              height: 60,
              marginRight: 20,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 24,
                top: 4,
                width: 12,
                height: 52,
                borderRadius: 6,
                background: "#e9c985",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 18,
                width: 44,
                height: 12,
                borderRadius: 6,
                background: "#e9c985",
              }}
            />
          </div>
          <div
            style={{ fontSize: 30, fontWeight: 600, color: "#f3dfb6" }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#e9c985",
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.04,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#f1eadf", opacity: 0.82 }}>
          Scripture, prayer, and one gentle next step.
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
