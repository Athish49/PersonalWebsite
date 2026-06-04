import { useState } from 'react'

const EMAIL = 'grathish49@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="contact" id="contact">
      <span className="eyebrow">
        <span className="eyebrow-num">08</span>
        <span className="eyebrow-line" />
        <span>Contact</span>
      </span>

      <h2 className="contact-headline">
        Let's build<br />
        <span className="serif italic">AI that matters.</span>
      </h2>

      <div className="contact-email-wrap">
        <button onClick={handleCopy} className="contact-email">
          <span className="contact-email-text">{EMAIL}</span>
          <span className="contact-email-copy">
            {copied ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </span>
        </button>
        <span className={`contact-toast${copied ? ' contact-toast--visible' : ''}`}>Copied!</span>
      </div>

      <p className="contact-sub">
        Into <strong>AI engineering</strong>, <strong>agentic systems</strong>, or just want to nerd out about RAG and LLMs? You know where to find me.
      </p>
    </section>
  )
}
