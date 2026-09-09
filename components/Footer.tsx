export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--hairline)", padding: "36px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div className="mono" style={{ fontSize: "0.95rem" }}>
          <span style={{ color: "var(--porcelain)" }}>bjr</span>
          <span style={{ color: "var(--indigo)" }}>.ai</span>
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--text-dimmer)" }}>
          © 2026 bjr.ai — built with AI assistance, three drafts, and one long
          argument about semicolons.
        </p>
      </div>
    </footer>
  );
}
