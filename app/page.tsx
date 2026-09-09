import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { KpiStat } from "@/components/KpiStat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* HERO */}
        <section style={{ position: "relative", padding: "80px 0 72px" }}>
          <div
            className="container"
            style={{ position: "relative", display: "flex", gap: 64, alignItems: "flex-start", flexWrap: "wrap" }}
          >
            <div style={{ flex: "1 1 560px", minWidth: 280, display: "flex", flexDirection: "column", gap: 26 }}>
              <div className="eyebrow">BJ Richardson — product leader, strategist, builder</div>
              <h1 style={{ fontSize: "clamp(2.2rem,5.6vw,4.6rem)", lineHeight: 1.05, color: "var(--porcelain)" }}>
                I like problems
                <br />
                that don&apos;t have a
                <br />
                clean brief yet.
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-dim)", maxWidth: 540 }}>
                Product judgment, systems thinking, and hands-on delivery for work that&apos;s real
                but not yet defined. Music and storytelling shape how I listen and explain things.
                AI accelerates the work — I still own the judgment and the accountability.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginTop: 8 }}>
                <a href="#contact" className="btn-primary">
                  Start a conversation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#work" className="btn-text">
                  See what I shipped
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div style={{ flex: "0 1 300px", minWidth: 240, display: "flex", flexDirection: "column", gap: 10, paddingTop: 8 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span
                  aria-hidden="true"
                  style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--indigo)", flexShrink: 0, marginTop: 7 }}
                />
                <span style={{ fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.5 }}>
                  Available for consulting and product-leadership conversations.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* WORK / PROOF TEASER */}
        <section id="work" className="section" style={{ position: "relative" }}>
          <div className="container">
            <div className="mono" style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-dimmer)", marginBottom: 16 }}>
              I brought an example.
            </div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              01 / Work
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem,3.4vw,2.7rem)", lineHeight: 1.15, maxWidth: 820, color: "var(--porcelain)" }}>
              I didn&apos;t redesign a website. I recovered one, verified it, and moved it — without
              breaking the one thing that actually mattered.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", maxWidth: 640, marginTop: 18, lineHeight: 1.6 }}>
              Bank Resources&apos; site was still running on 2005-era infrastructure. The real risk
              wasn&apos;t the look of it — it was that the website and the business&apos;s email lived
              in the same DNS zone.
            </p>

            <div style={{ display: "flex", gap: 0, flexWrap: "wrap", marginTop: 52, borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
              <KpiStat value="HTTPS" label="enforced, apex to www" why={`Browsers flag anything else as "Not secure" before a visitor reads a word — and the old setup left the site and the business's email exposed on the same unprotected DNS zone.`} />
              <KpiStat value="-79%" label="logo file size" why="A smaller logo file loads faster on the first paint, which matters most on the slower mobile connections a lot of visitors are on." />
              <KpiStat value="0" label="axe-core violations" why="The automated axe-core scan found no violations in the tested pages and states. Keyboard and screen-reader checks remain part of ongoing review — this number is a floor, not a guarantee." />
              <KpiStat value="0" label="W3C validation errors" why="Clean, standards-compliant markup renders predictably across browsers and is cheaper to maintain later — fewer surprises when something needs to change." />
              <KpiStat value="~170KB" label="core homepage payload" why="A lighter page loads faster on a slow connection — which is exactly the kind of connection a lot of this business's actual customers are on." alignRight borderRight={false} />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
              <Link href="/work/bank-resources" className="btn-text">
                Read the Bank Resources case study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p style={{ fontSize: "0.88rem", color: "var(--text-dimmer)", fontStyle: "italic", maxWidth: 420 }}>
                Technical proof. Not a promise about your inbox filling up — that part&apos;s still
                unmeasured, on purpose.
              </p>
            </div>
          </div>
        </section>

        {/* HOW I HELP */}
        <section id="how-i-help" className="section">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              02 / How I help
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem,3.4vw,2.7rem)", color: "var(--porcelain)", maxWidth: 640 }}>
              Three shapes this usually takes.
            </h2>

            <div style={{ marginTop: 48, display: "flex", flexDirection: "column" }}>
              {[
                {
                  n: "01",
                  title: "Digital Presence Reset",
                  body: "Your site stops embarrassing you in front of the people who actually matter — modern, accessible, and maintainable, without a redesign for its own sake.",
                },
                {
                  n: "02",
                  title: "Workflow Automation Sprint",
                  body: "Find the manual, painful, error-prone thing and make it stop being manual, painful, and error-prone — without unnecessary complexity.",
                },
                {
                  n: "03",
                  title: "Product Prototype Sprint",
                  body: "Turn a fuzzy idea into something real enough to argue about — validated with real users, faster than a slide deck could manage.",
                  last: true,
                },
              ].map((row) => (
                <div
                  key={row.n}
                  className="row-hover"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 28,
                    padding: "28px 0",
                    borderTop: "1px solid var(--hairline)",
                    borderBottom: row.last ? "1px solid var(--hairline)" : undefined,
                    flexWrap: "wrap",
                  }}
                >
                  <div className="mono" style={{ fontSize: "1rem", color: "var(--text-dimmer)", flex: "0 0 32px" }}>
                    {row.n}
                  </div>
                  <div style={{ flex: "1 1 260px", minWidth: 200 }}>
                    <h3 style={{ fontSize: "1.3rem", color: "var(--porcelain)" }}>{row.title}</h3>
                  </div>
                  <p style={{ flex: "2 1 380px", minWidth: 240, fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.55 }}>
                    {row.body}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-dimmer)", marginTop: 20 }}>
              No fixed pricing here on purpose — every engagement starts with a real conversation,
              not a rate card.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="section">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              How I work
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem,3.4vw,2.7rem)", color: "var(--porcelain)", maxWidth: 640 }}>
              A practical path, not a proprietary methodology.
            </h2>

            <div
              style={{
                marginTop: 52,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 28,
              }}
            >
              {[
                { n: "01", title: "Clarify", body: "Find out what's actually being asked. It's rarely what's in the first email." },
                { n: "02", title: "Decide", body: "Pick a direction that balances value, risk, and effort — out loud, on the record." },
                { n: "03", title: "Build", body: "Ship something real, focused, and explainable — not a slide about what it'll eventually do." },
                { n: "04", title: "Verify", body: "Check that it actually works, and say so only once that's true." },
              ].map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingRight: i < 3 ? 12 : 0,
                    borderRight: i < 3 ? "1px solid var(--hairline)" : "none",
                  }}
                >
                  <div className="mono" style={{ color: "var(--violet)", fontSize: "0.85rem" }}>
                    {step.n}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", color: "var(--porcelain)" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.94rem", color: "var(--text-dim)", lineHeight: 1.55 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="container">
            <div className="mono" style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-dimmer)", marginBottom: 16 }}>
              Turns out, I&apos;ve done this before.
            </div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              03 / Experience
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem,3.4vw,2.7rem)", color: "var(--porcelain)", maxWidth: 720 }}>
              Twenty years in payments. Most of it where the edges get complicated.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dim)", maxWidth: 680, marginTop: 22, lineHeight: 1.65 }}>
              I&apos;ve led products across payment gateways, tokenization, digital wallets, consumer
              fintech, rewards, and enterprise commerce — working between merchants, banks,
              processors, engineers, operators, and business leaders.
            </p>

            <div style={{ marginTop: 32, borderLeft: "2px solid var(--indigo)", paddingLeft: 20, maxWidth: 640 }}>
              <div className="mono" style={{ fontSize: "0.85rem", color: "var(--porcelain)" }}>
                bjr.ai / BJR AI LLC — Founder &amp; Principal Consultant, 2025–present
              </div>
              <p style={{ fontSize: "0.98rem", color: "var(--text-dim)", marginTop: 8, lineHeight: 1.55 }}>
                Recent work includes a community-bank feasibility study and the redesign and
                production migration behind{" "}
                <Link href="/work/bank-resources" style={{ color: "var(--violet)", borderBottom: "1px solid var(--hairline)" }}>
                  Case Study 001
                </Link>
                .
              </p>
            </div>

            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
              {[
                { title: "Product leadership", body: "Strategy, roadmaps, discovery, prioritization, and cross-functional delivery." },
                { title: "Payments and commerce", body: "Gateways, tokenization, digital payments, merchant systems, wallets, rewards, and regulated fintech." },
                { title: "Ambiguous, consequential work", body: "New products, complicated stakeholder environments, inherited systems, and projects whose real problem isn't obvious at first.", last: true },
              ].map((col) => (
                <div
                  key={col.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingRight: !col.last ? 12 : 0,
                    borderRight: !col.last ? "1px solid var(--hairline)" : "none",
                  }}
                >
                  <h3 style={{ fontSize: "1.1rem", color: "var(--porcelain)" }}>{col.title}</h3>
                  <p style={{ fontSize: "0.94rem", color: "var(--text-dim)", lineHeight: 1.55 }}>{col.body}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, borderTop: "1px solid var(--hairline)", paddingTop: 26, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                <span className="mono" aria-hidden="true" style={{ color: "var(--violet)", fontSize: "0.85rem", flex: "0 0 14px" }}>
                  —
                </span>
                <p style={{ fontSize: "0.98rem", color: "var(--text-dim)", maxWidth: 620 }}>
                  Roadmap ownership for an NCR gateway responsible for nearly 20% of U.S. card-present
                  transaction volume.
                </p>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                <span className="mono" aria-hidden="true" style={{ color: "var(--violet)", fontSize: "0.85rem", flex: "0 0 14px" }}>
                  —
                </span>
                <p style={{ fontSize: "0.98rem", color: "var(--text-dim)", maxWidth: 620 }}>
                  Supported large retail payment implementations, including work for national
                  retailers with more than 1,000 locations.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", marginTop: 36 }}>
              <a href="https://linkedin.com/in/bjrai" className="btn-text" target="_blank" rel="noopener noreferrer">
                View experience on LinkedIn
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/BJ-Richardson-Resume.pdf"
                className="mono btn-text"
                style={{ fontSize: "0.95rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé — payments &amp; product leadership (PDF)
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 3v8m0 0-3-3m3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <p className="mono" style={{ fontSize: "0.78rem", color: "var(--text-dimmer)", marginTop: 28, letterSpacing: "0.02em" }}>
              Experience includes Lynk Systems / RBS Worldpay, MTXeps / NCR Payments, CorFire / SK
              C&amp;C, NCR, Bakkt, and now bjr.ai / BJR AI LLC.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" style={{ borderBottom: "none" }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              04 / Contact
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,3.1rem)", lineHeight: 1.1, color: "var(--porcelain)", maxWidth: 640 }}>
                Got a problem that&apos;s important but still a little unclear?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
                <a href="mailto:hey@bjr.ai" className="btn-primary" style={{ padding: "16px 26px", fontSize: "1.02rem" }}>
                  Start a conversation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="mono" style={{ fontSize: "0.75rem", color: "var(--text-dimmer)" }}>
                  hey@bjr.ai
                </div>
              </div>
            </div>
            <p style={{ fontSize: "1rem", color: "var(--text-dim)", maxWidth: 560, marginTop: 22, lineHeight: 1.6 }}>
              Bring me what you&apos;ve got. We&apos;ll figure out the next step together — and I&apos;ll
              tell you honestly if it&apos;s not a fit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
