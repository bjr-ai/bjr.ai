import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="section" style={{ borderTop: "none", minHeight: "50vh", display: "flex", alignItems: "center" }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              404
            </div>
            <h1 style={{ fontSize: "clamp(1.9rem,3.4vw,2.7rem)", color: "var(--porcelain)", maxWidth: 640 }}>
              This page doesn&apos;t have a clean brief either.
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", maxWidth: 560, marginTop: 18, lineHeight: 1.6 }}>
              Whatever you were looking for isn&apos;t at this address. It might have moved, or it
              might never have existed — either way, the homepage is a safe place to start over.
            </p>
            <Link href="/" className="btn-primary" style={{ marginTop: 28 }}>
              Back to bjr.ai
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
