export default function Life() {
  return (
    <section className="life" id="life">
      <span className="eyebrow">
        <span className="eyebrow-num">07</span>
        <span className="eyebrow-line" />
        <span>Off the clock</span>
      </span>

      <div className="life-grid">
        <figure className="life-portrait reveal">
          <img src="/images/headshot.jpg" alt="Portrait of Athish Gopal Rajesh" />
          <figcaption className="tape">Sometimes the best ideas happen at 2am.</figcaption>
        </figure>

        <div className="life-text reveal">
          <h2 className="life-headline">
            <span className="serif italic">Build things.</span><br />
            Ship fast. Stay<br />
            curious.
          </h2>
          <p>
            You'll find me reading AI papers, hacking on side projects, and going deep on problems until they're actually solved. I believe in learning by building. Every system I've shipped has taught me more than any lecture ever could.
          </p>
          <p>
            I grew up in India, built my AI foundations at <strong>Vellore Institute of Technology,</strong> and shipped ML systems across procurement, fintech, and biomedical fields. I recently completed my <strong>M.S. in Data Science at Indiana University Bloomington,</strong> and I'm based in San Jose, ready to bring everything I've built towards the next hard problem.
          </p>
        </div>
      </div>

    </section>
  )
}
