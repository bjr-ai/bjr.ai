"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#how-i-help", label: "How I help" },
  { href: "/#experience", label: "Experience" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--ink)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <Link href="/" className="mono" style={{ fontSize: "0.95rem" }}>
          <span style={{ color: "var(--porcelain)" }}>bjr</span>
          <span style={{ color: "var(--indigo)" }}>.ai</span>
        </Link>

        <nav aria-label="Primary" className="nav-desktop">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "0.95rem", color: "var(--text-dim)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary" style={{ padding: "10px 18px", fontSize: "0.9rem" }}>
            Contact
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="mono" style={{ fontSize: "0.85rem", color: "var(--porcelain)" }}>
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className="nav-mobile"
        hidden={!open}
      >
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4, padding: "8px 24px 24px" }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: "1.05rem", color: "var(--text-dim)", padding: "12px 0" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary"
            style={{ padding: "14px 18px", fontSize: "1rem", marginTop: 8, justifyContent: "center" }}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
