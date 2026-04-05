import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #2D4A54 0%, #1A2F36 100%)",
          borderRadius: "32px",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#B8923F",
            letterSpacing: "2px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}
