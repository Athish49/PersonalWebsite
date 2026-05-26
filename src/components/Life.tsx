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
            You'll find me reading AI papers, hacking on side projects, and occasionally breaking things in production just to understand why. I believe in learning by building — every bug in prod taught me more than any lecture.
          </p>
          <p>
            I grew up in India, built my AI foundations at <strong>Vellore Institute of Technology</strong>, shipped ML systems in Mumbai, and now I'm pursuing my <strong>M.S. in Data Science at Indiana University Bloomington</strong> — currently in San Jose as an AI Engineer.
          </p>
        </div>
      </div>

    </section>
  )
}
