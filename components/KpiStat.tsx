"use client";

import { useState } from "react";

export function KpiStat({
  value,
  label,
  why,
  alignRight = false,
  borderRight = true,
}: {
  value: string;
  label: string;
  why: string;
  alignRight?: boolean;
  borderRight?: boolean;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`kpi-stat${alignRight ? " align-right" : ""}`}
      tabIndex={0}
      style={{
        flex: "1 1 140px",
        padding: "22px 24px",
        borderRight: borderRight ? "1px solid var(--hairline)" : "none",
      }}
      onClick={() => setActive((a) => !a)}
      onBlur={() => setActive(false)}
    >
      <div
        className="mono kpi-label"
        style={{ fontSize: "1.4rem", color: "var(--porcelain)", display: "inline-block" }}
      >
        {value}
      </div>
      <div style={{ fontSize: "0.85rem", color: "var(--text-dimmer)", marginTop: 4 }}>
        {label}
      </div>
      <div className={`kpi-tip${active ? " is-active" : ""}`}>
        <span className="kpi-tip-label">Why this matters</span>
        <p>{why}</p>
      </div>
    </div>
  );
}
