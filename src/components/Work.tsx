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
              What I built.<br />
              <span className="serif italic">One thread — AI first.</span>
            </h2>
            <p className="work-sub">From intern to founding engineer — shipping production AI systems across procurement, biomedical research, and fintech. Drag or scroll.</p>
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
                  <span className="work-item-title"><span className="work-item-dot" />Research Platform</span>
                  <span className="work-item-badge">1 inbox</span>
                </div>
                <p className="work-item-desc">One inbox for an entire research field.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Ingestion Pipelines</span>
                  <span className="work-item-badge">0 manual ops</span>
                </div>
                <p className="work-item-desc">Daily paper harvesting — fully automated.</p>
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
                <p className="work-item-desc">Per-user fine-tuned model for personalized Q&A.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">San Jose, CA · 2025</span>
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
                  <span className="work-item-badge">10x faster deploy</span>
                </div>
                <p className="work-item-desc">Custom AI chatbots deployed in under 2 hours.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Spend Forecasting</span>
                  <span className="work-item-badge">−12% unplanned</span>
                </div>
                <p className="work-item-desc">ML procurement predictions to cut client overspend.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Clause Recommender</span>
                  <span className="work-item-badge">−40% turnaround</span>
                </div>
                <p className="work-item-desc">Auto-suggests clauses from company contract history.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Contracts Redlining</span>
                  <span className="work-item-badge">days → hours</span>
                </div>
                <p className="work-item-desc">Clause-level diffs with policy deviation alerts.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Invoice Auto-Harvest</span>
                  <span className="work-item-badge">750+ hrs/day saved</span>
                </div>
                <p className="work-item-desc">OCR fallback recovers failed AP extractions.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />GEP Guru (RAG)</span>
                  <span className="work-item-badge">−87% search time</span>
                </div>
                <p className="work-item-desc">AI doc retrieval for 600+ procurement professionals.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Mumbai, India · 2023–24</span>
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
                  <span className="work-item-title"><span className="work-item-dot" />Invoice Intelligence</span>
                  <span className="work-item-badge">+65% global reach</span>
                </div>
                <p className="work-item-desc">Expanded extraction to 4 languages, 7 new fields.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Microservices</span>
                  <span className="work-item-badge">5K → 16K+ / day</span>
                </div>
                <p className="work-item-desc">Split monolith; cut compute costs 30%.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Data Validation</span>
                  <span className="work-item-badge">95%+ precision</span>
                </div>
                <p className="work-item-desc">Anomaly detection stops invoice payment errors.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Contracts NL Filter</span>
                  <span className="work-item-badge">5 min → 30 sec</span>
                </div>
                <p className="work-item-desc">Natural language to live contract DB queries.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Spend Analysis ML</span>
                  <span className="work-item-badge">M+ lines auto</span>
                </div>
                <p className="work-item-desc">Classifies invoice lines for procurement intel.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Mumbai, India · 2023</span>
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
                  <span className="work-item-badge">98% accuracy</span>
                </div>
                <p className="work-item-desc">Face + QR + GPS + Wi-Fi; 30K+ daily check-ins.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Eligibility Forecast</span>
                  <span className="work-item-badge">−20% violations</span>
                </div>
                <p className="work-item-desc">Predicts attendance gaps before they become fails.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Startup Operations</span>
                  <span className="work-item-badge">founding team</span>
                </div>
                <p className="work-item-desc">Legal setup, hiring, and company registration.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Amaravathi, India · 2022</span>
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
                  <span className="work-item-title"><span className="work-item-dot" />10-K Extractor</span>
                  <span className="work-item-badge">automated</span>
                </div>
                <p className="work-item-desc">OCR pipeline mines key metrics from SEC filings.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />ESG Classifier</span>
                  <span className="work-item-badge">auto-labeled</span>
                </div>
                <p className="work-item-desc">ML tags business news by ESG category + sentiment.</p>
              </li>
              <li className="work-item">
                <div className="work-item-row">
                  <span className="work-item-title"><span className="work-item-dot" />Trading Analytics</span>
                  <span className="work-item-badge">Nifty 500</span>
                </div>
                <p className="work-item-desc">Script evaluation with P&L performance insights.</p>
              </li>
            </ul>
            <span className="work-link work-link--quiet">Salem, India · Remote · 2021</span>
          </article>

          <div className="work-end" aria-hidden="true">
            <span className="end-label">End of reel</span>
            <span className="end-line" />
            <span className="end-cta">Keep scrolling ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
