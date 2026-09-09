"use client";

import { useId, useState } from "react";

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
  const tipId = useId();

  return (
    <button
      type="button"
      className={`kpi-stat${alignRight ? " align-right" : ""}`}
      aria-expanded={active}
      aria-describedby={tipId}
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
      <div id={tipId} className={`kpi-tip${active ? " is-active" : ""}`}>
        <span className="kpi-tip-label">Why this matters</span>
        <p>{why}</p>
      </div>
    </button>
  );
}
