import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KpiStat } from "@/components/KpiStat";
import { BeforeAfter } from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: "Bank Resources Case Study",
  description:
    "How a 2005-era bank consultancy site was recovered, verified, and moved to modern, accessible infrastructure — without disrupting the business's email.",
  alternates: { canonical: "/work/bank-resources" },
  openGraph: {
    title: "Bank Resources Case Study — bjr.ai",
    description:
      "How a 2005-era bank consultancy site was recovered, verified, and moved — without disrupting the business's email.",
    url: "https://www.bjr.ai/work/bank-resources",
    images: ["/case-studies/bank-resources/after-1440x1000.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Resources Case Study — bjr.ai",
    description:
      "How a 2005-era bank consultancy site was recovered, verified, and moved — without disrupting the business's email.",
    images: ["/case-studies/bank-resources/after-1440x1000.png"],
  },
};

export default function BankResourcesCaseStudy() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="section" style={{ borderTop: "none", paddingBottom: 0 }}>
          <div className="container">
            <Link href="/" className="mono btn-text" style={{ fontSize: "0.85rem" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to bjr.ai
            </Link>

            <div className="eyebrow" style={{ marginTop: 28, marginBottom: 18 }}>
              Case study 001
            </div>
            <h1 style={{ fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: 1.1, color: "var(--porcelain)", maxWidth: 780 }}>
              Bank Resources: recovered, verified, and moved — without breaking the one thing
              that actually mattered.
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)", maxWidth: 680, marginTop: 22, lineHeight: 1.6 }}>
              Bank Resources is a small bank consultancy whose public site was still running on
              2005-era infrastructure. This wasn&apos;t a redesign brief — it was a recovery job. The
              real risk wasn&apos;t how the site looked; it was that the website and the business&apos;s
              email lived in the same DNS zone, which meant a routine hosting change could take
              down the owner&apos;s inbox along with the homepage.
            </p>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--porcelain)", marginBottom: 24 }}>
              Same content, moved to infrastructure that won&apos;t take the business down with it.
            </h2>
            <BeforeAfter
              beforeSrc="/case-studies/bank-resources/before-1440x1000.png"
              afterSrc="/case-studies/bank-resources/after-1440x1000.png"
              beforeCaption="bankresources.com — legacy capture, Sept 8, 2026"
              afterCaption="bankresources.com — live, launched Sept 3, 2026"
            />
            <p style={{ fontSize: "0.85rem", color: "var(--text-dimmer)", marginTop: 16, maxWidth: 620 }}>
              Both captures are matched at 1440×1000 so neither viewport wins the comparison on
              size alone.
            </p>
          </div>
        </section>

        {/* WHY THE DNS ZONE MATTERED */}
        <section className="section" aria-labelledby="infra-heading">
          <div className="container">
            <h2 id="infra-heading" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--porcelain)", marginBottom: 16 }}>
              The real risk was infrastructure, not design.
            </h2>
            <p style={{ fontSize: "1.02rem", color: "var(--text-dim)", maxWidth: 680, lineHeight: 1.6, marginBottom: 32 }}>
              The diagram below is a simplified illustration, not a network map — the point it
              makes is the one that mattered: before the move, the website and the business&apos;s
              email shared one DNS zone, so a change made for one could break the other. After the
              move, the site sits on its own modern hosting while the email path was left
              untouched.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              <div style={{ border: "1px solid var(--hairline)", borderRadius: 10, padding: 24 }}>
                <div className="mono" style={{ fontSize: "0.75rem", color: "var(--text-dimmer)", marginBottom: 14 }}>
                  BEFORE
                </div>
                <svg viewBox="0 0 220 120" width="100%" height="120" role="img" aria-labelledby="before-diagram-title">
                  <title id="before-diagram-title">
                    Website and email both depend on one shared, unprotected DNS zone
                  </title>
                  <rect x="70" y="4" width="80" height="28" rx="6" fill="none" stroke="var(--hairline)" />
                  <text x="110" y="22" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    DNS zone
                  </text>
                  <line x1="90" y1="32" x2="90" y2="80" stroke="var(--hairline)" />
                  <line x1="130" y1="32" x2="130" y2="80" stroke="var(--hairline)" />
                  <rect x="20" y="80" width="80" height="28" rx="6" fill="none" stroke="var(--violet)" />
                  <text x="60" y="98" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    Website
                  </text>
                  <rect x="120" y="80" width="80" height="28" rx="6" fill="none" stroke="var(--violet)" />
                  <text x="160" y="98" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    Email
                  </text>
                </svg>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dim)", marginTop: 12, lineHeight: 1.5 }}>
                  One shared zone. A hosting change made for the site could take the mailbox with
                  it.
                </p>
              </div>

              <div style={{ border: "1px solid rgba(98,91,246,0.35)", borderRadius: 10, padding: 24 }}>
                <div className="mono" style={{ fontSize: "0.75rem", color: "var(--violet)", marginBottom: 14 }}>
                  AFTER
                </div>
                <svg viewBox="0 0 220 120" width="100%" height="120" role="img" aria-labelledby="after-diagram-title">
                  <title id="after-diagram-title">
                    Website moved to its own hosting; the email path was left untouched
                  </title>
                  <rect x="20" y="4" width="80" height="28" rx="6" fill="none" stroke="var(--indigo)" />
                  <text x="60" y="22" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    Site DNS
                  </text>
                  <rect x="120" y="4" width="80" height="28" rx="6" fill="none" stroke="var(--hairline)" />
                  <text x="160" y="22" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    Mail DNS
                  </text>
                  <line x1="60" y1="32" x2="60" y2="80" stroke="var(--indigo)" />
                  <line x1="160" y1="32" x2="160" y2="80" stroke="var(--hairline)" />
                  <rect x="20" y="80" width="80" height="28" rx="6" fill="none" stroke="var(--violet)" />
                  <text x="60" y="98" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    Website
                  </text>
                  <rect x="120" y="80" width="80" height="28" rx="6" fill="none" stroke="var(--violet)" />
                  <text x="160" y="98" textAnchor="middle" fontSize="10" fill="var(--porcelain)" fontFamily="var(--font-mono)">
                    Email
                  </text>
                </svg>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dim)", marginTop: 12, lineHeight: 1.5 }}>
                  Separate zones. The site can be changed, redeployed, or rolled back without
                  touching the mailbox.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVIDENCE */}
        <section className="section" aria-labelledby="evidence-heading">
          <div className="container">
            <h2 id="evidence-heading" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--porcelain)", marginBottom: 24 }}>
              What actually changed, measured.
            </h2>
            <div style={{ display: "flex", gap: 0, flexWrap: "wrap", border: "1px solid var(--hairline)", borderTop: "1px solid var(--hairline)" }}>
              <KpiStat value="HTTPS" label="enforced, apex to www" why={`Browsers flag anything else as "Not secure" before a visitor reads a word — and the old setup left the site and the business's email exposed on the same unprotected DNS zone.`} />
              <KpiStat value="-79%" label="logo file size" why="A smaller logo file loads faster on the first paint, which matters most on the slower mobile connections a lot of visitors are on." />
              <KpiStat value="0" label="axe-core violations" why="The automated axe-core scan found no violations in the tested pages and states. Keyboard and screen-reader checks remain part of ongoing review — this number is a floor, not a guarantee." />
              <KpiStat value="0" label="W3C validation errors" why="Clean, standards-compliant markup renders predictably across browsers and is cheaper to maintain later — fewer surprises when something needs to change." />
              <KpiStat value="~170KB" label="core homepage payload" why="A lighter page loads faster on a slow connection — which is exactly the kind of connection a lot of this business's actual customers are on." alignRight borderRight={false} />
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="section" aria-labelledby="timeline-heading">
          <div className="container">
            <h2 id="timeline-heading" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--porcelain)", marginBottom: 24 }}>
              Timeline
            </h2>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              <li style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: "0.8rem", color: "var(--text-dimmer)", flex: "0 0 110px" }}>
                  ~2005–2026
                </span>
                <span style={{ fontSize: "0.98rem", color: "var(--text-dim)" }}>
                  Legacy site in continuous use, unmodernized: fixed-width tables, HTTP only.
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: "0.8rem", color: "var(--text-dimmer)", flex: "0 0 110px" }}>
                  Sept 8, 2026
                </span>
                <span style={{ fontSize: "0.98rem", color: "var(--text-dim)" }}>
                  Legacy site captured and audited in full (12 pages) before any change was made.
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: "0.8rem", color: "var(--violet)", flex: "0 0 110px" }}>
                  Sept 3, 2026
                </span>
                <span style={{ fontSize: "0.98rem", color: "var(--text-dim)" }}>
                  Rebuilt site relaunched in production at bank-resources.com.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* LIMITATIONS */}
        <section className="section" aria-labelledby="limits-heading">
          <div className="container">
            <h2 id="limits-heading" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--porcelain)", marginBottom: 16 }}>
              What this is, and isn&apos;t, proof of.
            </h2>
            <p style={{ fontSize: "1.02rem", color: "var(--text-dim)", maxWidth: 680, lineHeight: 1.65 }}>
              This is launched, verified technical proof — a real production migration with
              before/after evidence. It is not a measured business outcome. Bank Resources&apos;
              lead or inquiry volume before and after the relaunch is unmeasured, on purpose;
              no revenue, lead, or conversion claim is made here. Lighthouse figures referenced
              in the project record are single-run lab observations from August 29, 2026, not
              re-verified, ongoing numbers. The old site&apos;s contact form and a few legacy pages
              were retired as part of the move rather than modernized; nothing from the legacy
              site is publicly mirrored here.
            </p>
          </div>
        </section>

        {/* CLOSING */}
        <section className="section" style={{ borderBottom: "none" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", maxWidth: 480 }}>
              Have something with a similar shape — real, a little neglected, and higher-stakes
              than it looks?
            </p>
            <Link href="/#contact" className="btn-primary" style={{ padding: "16px 26px", fontSize: "1.02rem" }}>
              Start a conversation
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
