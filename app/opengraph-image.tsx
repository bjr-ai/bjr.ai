import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BJ Richardson — Product Leader, Strategist, Builder";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          background: "#17171C",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            color: "#F5F4F0",
            marginBottom: 36,
          }}
        >
          bjr<span style={{ color: "#A7A3FF" }}>.ai</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#F5F4F0",
            maxWidth: 950,
          }}
        >
          I like problems that don&apos;t have a clean brief yet.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(245, 244, 240, 0.62)",
            marginTop: 32,
            maxWidth: 850,
          }}
        >
          BJ Richardson — Product Leader, Strategist, Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
