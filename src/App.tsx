import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Work from './components/Work'
import MarqueeSection from './components/MarqueeSection'
import Recognition from './components/Recognition'
import Speaking from './components/Speaking'
import Skills from './components/Skills'
import Life from './components/Life'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useCursorLight } from './hooks/useCursorLight'
import { useReveal } from './hooks/useReveal'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'

export default function App() {
  useScrollProgress()
  useCursorLight()
  useReveal()
  useHorizontalScroll()

  // Hero entrance — add `loaded` after first paint
  useEffect(() => {
    const addLoaded = () => requestAnimationFrame(() => document.body.classList.add('loaded'))
    if (document.readyState === 'complete') {
      addLoaded()
    } else {
      window.addEventListener('load', addLoaded, { once: true })
    }
    const t = setTimeout(() => document.body.classList.add('loaded'), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Ambient blobs */}
      <div className="ambient" aria-hidden="true">
        <span className="ambient-blob ambient-blob--1" />
        <span className="ambient-blob ambient-blob--2" />
        <span className="ambient-blob ambient-blob--3" />
      </div>

      {/* Cursor light */}
      <div className="cursor-light" aria-hidden="true" />

      {/* Scroll progress */}
      <div className="scroll-progress" />

      <Nav />

      <main id="main-content">
        <Hero />
        <Manifesto />
        <Work />
        <MarqueeSection />
        <Recognition />
        <Speaking />
        <Skills />
        <Life />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
