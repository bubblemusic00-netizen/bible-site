import { ImageResponse } from "next/og";

// Branded app icon: doorway opening toward light (matches the nav mark).
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
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 210,
            height: 250,
          }}
        >
          {/* arch outline */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 210,
              height: 250,
              border: "18px solid #fff8e8",
              borderBottom: "none",
              borderTopLeftRadius: 105,
              borderTopRightRadius: 105,
              boxSizing: "border-box",
            }}
          />
          {/* threshold base */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 210,
              height: 18,
              background: "#fff8e8",
              borderRadius: 9,
            }}
          />
          {/* light */}
          <div
            style={{
              position: "absolute",
              top: 58,
              left: 88,
              width: 34,
              height: 108,
              background: "#e9c985",
              borderRadius: 17,
            }}
          />
          {/* ascending steps */}
          <div
            style={{
              position: "absolute",
              bottom: 34,
              left: 55,
              width: 100,
              height: 12,
              background: "#e9c985",
              borderRadius: 6,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 56,
              left: 70,
              width: 70,
              height: 12,
              background: "#e9c985",
              borderRadius: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
