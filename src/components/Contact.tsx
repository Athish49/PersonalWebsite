export default function Contact() {
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

      <a href="mailto:agr@iu.edu" className="contact-email">
        <span className="contact-email-text">agr@iu.edu</span>
        <span className="contact-email-arrow">→</span>
      </a>

      <p className="contact-sub">
        Into <strong>AI engineering</strong>, <strong>agentic systems</strong>, or just want to nerd out about RAG and LLMs? You know where to find me.
      </p>
    </section>
  )
}
