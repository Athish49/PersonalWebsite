import type { CSSProperties } from 'react'

export default function Work() {
  return (
    <section className="work-pin" id="work" aria-label="Work experience">
      <div className="work-sticky">
        <div className="work-track">
          <div className="work-intro">
            <span className="eyebrow">
              <span className="eyebrow-num">03</span>
              <span className="eyebrow-line" />
              <span>Experience</span>
            </span>
            <h2 className="work-headline">
            Real problems.<br />
              <span className="serif italic">Real systems. Real impact.</span>
            </h2>
            <p className="work-sub">Five roles. Three industries. Every project shipped to production and measured by outcomes. <br />Drag or scroll.</p>
            <div className="work-arrow" aria-hidden="true">
              <span>→</span>
            </div>
          </div>

          {/* 01 — Wisentel */}
          <article className="work-card" style={{ '--accent': '#4D90FF' } as CSSProperties}>
            <header className="work-card-head">
              <span className="work-num">01</span>
              <span className="work-period">Jun 2025 — Aug 2025</span>
            </header>
            <div className="work-icon"><img src="/images/book-icon.png" alt="" /></div>
            <h3 className="work-name">Wisentel</h3>
            <p className="work-role">AI Engineer Intern</p>
            <ul className="work-items">
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Agentic Research Platform</span>
                  <span className="work-item-badge">Multi-agent architecture</span>
                </div>
                <p className="work-item-desc">Inbox style platform for tracking research advances.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Ingestion Pipelines</span>
                  <span className="work-item-badge">10,000+ papers tracked daily</span>
                </div>
                <p className="work-item-desc">Paper harvesting from scientific and bibliographic databases.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Poster Generator</span>
                  <span className="work-item-badge">weeks → ~3 min</span>
                </div>
                <p className="work-item-desc">Research papers rendered as posters in minutes.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Personalized SLMs</span>
                  <span className="work-item-badge">1 model / user</span>
                </div>
                <p className="work-item-desc">Per-user fine-tuned on your own reading history.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">San Jose, CA</span>
          </article>

          {/* 02 — GEP Worldwide Associate DS */}
          <article className="work-card" style={{ '--accent': '#2a9d8f' } as CSSProperties}>
            <header className="work-card-head">
              <span className="work-num">02</span>
              <span className="work-period">Jul 2023 — Jun 2024</span>
            </header>
            <div className="work-icon"><img src="/images/coin-icon.png" alt="" /></div>
            <h3 className="work-name">GEP Worldwide</h3>
            <p className="work-role">Associate Data Scientist</p>
            <ul className="work-items">
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />AI Bot Builder</span>
                  <span className="work-item-badge">Sprint cycles → 2 hours</span>
                </div>
                <p className="work-item-desc">Low-code platform to prototype and deploy custom AI chatbots.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Spend Forecasting</span>
                  <span className="work-item-badge">~12% cost savings</span>
                </div>
                <p className="work-item-desc">ML procurement predictions to cut client overspend.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Clause Recommender</span>
                  <span className="work-item-badge">~40% turnaround time ↓</span>
                </div>
                <p className="work-item-desc">One-click clause additions using company's contract history.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Contracts Redlining</span>
                  <span className="work-item-badge">days → hours</span>
                </div>
                <p className="work-item-desc">Clause-level diffs between versions and policy deviation detection.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Invoice Auto-Harvest</span>
                  <span className="work-item-badge">750+ hrs/day saved</span>
                </div>
                <p className="work-item-desc">Location based OCR fallback recovers failed AP extractions.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />GEP Guru (RAG)</span>
                  <span className="work-item-badge">~87% faster search</span>
                </div>
                <p className="work-item-desc">Internal doc retrieval solution for 600+ professionals.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Mumbai, India</span>
          </article>

          {/* 03 — GEP Worldwide AI Intern */}
          <article className="work-card" style={{ '--accent': '#ff6b35' } as CSSProperties}>
            <header className="work-card-head">
              <span className="work-num">03</span>
              <span className="work-period">Jan 2023 — Jul 2023</span>
            </header>
            <div className="work-icon"><img src="/images/plane-icon.png" alt="" /></div>
            <h3 className="work-name">GEP Worldwide</h3>
            <p className="work-role">AI Intern</p>
            <ul className="work-items">
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Microservices Architecture</span>
                  <span className="work-item-badge">30% compute cost ↓</span>
                </div>
                <p className="work-item-desc">Revamped the pipeline from monolith architecture to 6 microservices.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Invoice Intelligence</span>
                  <span className="work-item-badge">5K → 16K+ invoices / day</span>
                </div>
                <p className="work-item-desc">Expanded extraction to 13 languages, and 7 new fields.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Invoice Middle Layer Match</span>
                  <span className="work-item-badge">~70% → 95%+ precision</span>
                </div>
                <p className="work-item-desc">Anomaly detection and master data validation to stop extraction errors.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Interactive Contracts Dashboard</span>
                  <span className="work-item-badge">5 min → 30 sec</span>
                </div>
                <p className="work-item-desc">Natural language queries to filter over contract metadata.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Spend Analysis ML</span>
                  <span className="work-item-badge">100,000+ items / day classified</span>
                </div>
                <p className="work-item-desc">Invoice line items classifier for procurement intelligence.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Mumbai, India</span>
          </article>

          {/* 04 — Mukham */}
          <article className="work-card" style={{ '--accent': '#9b51e0' } as CSSProperties}>
            <header className="work-card-head">
              <span className="work-num">04</span>
              <span className="work-period">Mar 2022 — Aug 2022</span>
            </header>
            <div className="work-icon"><img src="/images/gameboy-icon.png" alt="" /></div>
            <h3 className="work-name">Mukham</h3>
            <p className="work-role">Founding Engineer</p>
            <ul className="work-items">
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Smart Attendance</span>
                  <span className="work-item-badge">30K+ daily attendance records</span>
                </div>
                <p className="work-item-desc">Face + QR + GPS + Wi-Fi tracking to get 90%+ accuracy.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Eligibility Forecast</span>
                  <span className="work-item-badge">~20% violations avoided</span>
                </div>
                <p className="work-item-desc">Predicts attendance gaps before they become failures.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Startup Operations</span>
                  <span className="work-item-badge">founding team</span>
                </div>
                <p className="work-item-desc">Legal setup, hiring, and company registration.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Amaravathi, India</span>
          </article>

          {/* 05 — ADOPLE AI */}
          <article className="work-card" style={{ '--accent': '#e9c46a' } as CSSProperties}>
            <header className="work-card-head">
              <span className="work-num">05</span>
              <span className="work-period">Jul 2021 — Dec 2021</span>
            </header>
            <div className="work-icon"><img src="/images/coin-icon.png" alt="" /></div>
            <h3 className="work-name">ADOPLE AI</h3>
            <p className="work-role">Data Analyst Intern</p>
            <ul className="work-items">
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Stock News Classifier</span>
                  <span className="work-item-badge">3000+ news labelled daily</span>
                </div>
                <p className="work-item-desc">Tags listed company news by ESG category and sentiment score.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Trade Strategy Simulator</span>
                  <span className="work-item-badge">30+ strategies support</span>
                </div>
                <p className="work-item-desc">Pick a Nifty 500 stock, set rules, get P&L performance results.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />10-K Extractor</span>
                  <span className="work-item-badge">hrs of analysis → minutes</span>
                </div>
                <p className="work-item-desc">OCR pipeline to mine key metrics from SEC filings.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Salem, India</span>
          </article>

          <div className="work-end" aria-hidden="true">
            <span className="end-label">THAT'S THE WORK</span>
            <span className="end-line" />
            <span className="end-cta">Keep scrolling ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
