import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17171C",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 96,
        }}
      >
        <span style={{ color: "#F5F4F0" }}>b</span>
        <span style={{ color: "#625BF6" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
