import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function showAll() {
      document.querySelectorAll<Element>('.reveal').forEach(el => el.classList.add('is-visible'))
    }

    if (reduced) {
      showAll()
      return
    }

    function revealVisible() {
      document.querySelectorAll<Element>('.reveal:not(.is-visible)').forEach(el => {
        const rect = el.getBoundingClientRect()
        // element is entering the viewport from the bottom
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          el.classList.add('is-visible')
        }
      })
    }

    // Run immediately on mount (catches anything already in view)
    revealVisible()

    // Run again after a short delay (handles any layout shifts from images/fonts loading)
    const t1 = setTimeout(revealVisible, 150)
    const t2 = setTimeout(revealVisible, 600)

    window.addEventListener('scroll', revealVisible, { passive: true })
    window.addEventListener('resize', revealVisible, { passive: true })

    return () => {
      window.removeEventListener('scroll', revealVisible)
      window.removeEventListener('resize', revealVisible)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])
}
