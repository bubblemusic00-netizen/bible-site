import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

// Default site-wide social share image. Applies to every route that does not
// define its own opengraph-image deeper in the tree.
export const alt = "Selah — Scripture and prayer for what you carry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          {/* Cross mark */}
          <div
            style={{
              position: "relative",
              display: "flex",
              width: 64,
              height: 64,
              marginRight: 22,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 26,
                top: 4,
                width: 12,
                height: 56,
                borderRadius: 6,
                background: "#e9c985",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 20,
                width: 48,
                height: 12,
                borderRadius: 6,
                background: "#e9c985",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: 1,
              color: "#f3dfb6",
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            Scripture and prayer for what you are carrying.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "#f1eadf",
              opacity: 0.86,
              maxWidth: 820,
            }}
          >
            A short Faith Quiz, a Bible reading, a prayer, and one gentle next
            step. Free. No login.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
