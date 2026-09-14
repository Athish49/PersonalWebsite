import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const [photosActive, setPhotosActive] = useState(false)

  useEffect(() => {
    // Only pointer devices; touch / mobile handled by CSS display:none
    if (!window.matchMedia('(hover: hover)').matches) return

    const check = (e: MouseEvent) => {
      const section = sectionRef.current
      const tagline = taglineRef.current
      if (!section || !tagline) return

      const { top } = section.getBoundingClientRect()
      const { bottom } = tagline.getBoundingClientRect()

      // Zone: full viewport width, from top of hero section to bottom of tagline
      setPhotosActive(e.clientY >= top && e.clientY <= bottom)
    }

    const hide = () => setPhotosActive(false)

    document.addEventListener('mousemove', check, { passive: true })
    document.addEventListener('mouseleave', hide)

    return () => {
      document.removeEventListener('mousemove', check)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <section
      className={`hero${photosActive ? ' photos-active' : ''}`}
      id="top"
      ref={sectionRef}
    >
      <div className="hero-grid">
        <div className="hero-meta-top">
          <span className="eyebrow">
            <span className="eyebrow-num">01</span>
            <span className="eyebrow-line" />
            <span>Index — 2026</span>
          </span>
        </div>

        <div className="hero-headline-wrap">
          <h1 className="hero-name" aria-label="Athish Rajesh">
            <span className="word" data-word="Athish">
              <span className="char">A</span>
              <span className="char">t</span>
              <span className="char">h</span>
              <span className="char">i</span>
              <span className="char">s</span>
              <span className="char">h</span>
            </span>
            {/* <span className="word" data-word="Rajesh">
              <span className="char">R</span>
              <span className="char">a</span>
              <span className="char">j</span>
              <span className="char">e</span>
              <span className="char">s</span>
              <span className="char">h</span>
            </span> */}
          </h1>
          <div className="hero-name-photos" aria-hidden="true">
            <img className="hover-photo p-1" src="/images/hover-1.jpeg" alt="" loading="lazy" />
            <img className="hover-photo p-2" src="/images/hover-5.jpeg" alt="" loading="lazy" />
            <img className="hover-photo p-3" src="/images/hover-3.jpeg" alt="" loading="lazy" />
            <img className="hover-photo p-4" src="/images/hover-4.jpeg" alt="" loading="lazy" />
            <img className="hover-photo p-5" src="/images/hover-2.jpeg" alt="" loading="lazy" />
            <img className="hover-photo p-6" src="/images/hover-6.jpeg" alt="" loading="lazy" />
          </div>
        </div>

        <p className="hero-tagline" ref={taglineRef}>
          <span className="serif italic">To build</span> &amp; <span className="serif italic">to ship</span> &amp; to make AI systems that <span className="serif italic">actually matter</span>.
        </p>

        <div className="hero-meta-bottom">
          <div className="hero-role">
            <span className="kicker">Role</span>
            <span>Agentic AI &amp; Fullstack Developer</span>
          </div>
          <div className="hero-where">
            <span className="kicker">Where</span>
            <span>San Jose · Open to Relocate</span>
          </div>
          <div className="hero-since">
            <span className="kicker">Since</span>
            <span>3+ yrs in production AI</span>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-line" />
          <span className="scroll-cue-label">Scroll</span>
        </div>
      </div>
    </section>
  )
}
