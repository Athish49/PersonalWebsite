export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-meta">
          <span className="footer-mark">AGR</span>
          <span className="footer-loc">San Jose, CA</span>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com/in/athishgr/" target="_blank" rel="noopener">LinkedIn <span className="arrow">↗</span></a>
          <a href="https://github.com/Athish49" target="_blank" rel="noopener">GitHub <span className="arrow">↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Athish Gopal Rajesh. Built with curiosity and too much coffee.</span>
        <span className="footer-version">v1.0 — portfolio</span>
      </div>
    </footer>
  )
}
