export default function Nav() {
  return (
    <nav className="top-nav" aria-label="Primary">
      <a href="#top" className="brand glass glass--pill" aria-label="Athish Gopal Rajesh — back to top">
        <span className="brand-mark">AGR</span>
        <span className="brand-dot" />
      </a>

      <div className="status-pill glass glass--pill" role="status" aria-live="polite">
        <span className="status-dot" aria-hidden="true" />
        <span className="status-text">Currently — building AI systems in <em>San Jose</em></span>
      </div>
    </nav>
  )
}
