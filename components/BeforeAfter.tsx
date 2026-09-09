"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeCaption,
  afterCaption,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeCaption: string;
  afterCaption: string;
}) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div>
      <div
        role="group"
        aria-label="Before and after comparison"
        style={{ display: "inline-flex", gap: 8, marginBottom: 16 }}
      >
        <button
          type="button"
          aria-pressed={!showAfter}
          onClick={() => setShowAfter(false)}
          className="mono"
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "1px solid var(--hairline)",
            background: !showAfter ? "var(--indigo)" : "transparent",
            color: "var(--porcelain)",
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Before
        </button>
        <button
          type="button"
          aria-pressed={showAfter}
          onClick={() => setShowAfter(true)}
          className="mono"
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "1px solid var(--hairline)",
            background: showAfter ? "var(--indigo)" : "transparent",
            color: "var(--porcelain)",
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          After
        </button>
      </div>

      <div
        style={{
          border: showAfter ? "1px solid rgba(98,91,246,0.35)" : "1px solid var(--hairline)",
          borderRadius: 10,
          overflow: "hidden",
          background: "var(--ink-2)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderBottom: "1px solid var(--hairline)",
          }}
        >
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5a5a63" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5a5a63" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5a5a63" }} />
          <span className="mono" style={{ fontSize: "0.75rem", color: "var(--text-dimmer)", marginLeft: 8 }}>
            {showAfter ? afterCaption : beforeCaption}
          </span>
        </div>
        <div style={{ position: "relative", width: "100%", aspectRatio: "1440 / 1000" }}>
          <Image
            src={beforeSrc}
            alt="Legacy Bank Resources homepage, fixed-width table layout, HTTP only"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              opacity: showAfter ? 0 : 1,
              transition: "opacity 0.25s ease",
            }}
            priority
          />
          <Image
            src={afterSrc}
            alt="Production Bank Resources homepage, responsive, launched September 2026"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              opacity: showAfter ? 1 : 0,
              transition: "opacity 0.25s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}
