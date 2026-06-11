import { useEffect } from 'react'

export function useHorizontalScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // CSS scroll-driven animation (@supports animation-timeline) handles this natively
    // on Chrome 115+, Firefox 131+, Safari 18+. JS rAF only runs as fallback.
    if (CSS.supports('animation-timeline: scroll()')) return

    const pin = document.querySelector('.work-pin') as HTMLElement | null
    const track = document.querySelector('.work-track') as HTMLElement | null
    if (!pin || !track) return

    let totalDistance = 0

    const measure = () => {
      const containerWidth = window.innerWidth
      const trackWidth = track.scrollWidth
      totalDistance = Math.max(0, trackWidth - containerWidth + 80)
    }
    measure()
    window.addEventListener('resize', measure, { passive: true })

    const update = () => {
      const rect = pin.getBoundingClientRect()
      const viewport = window.innerHeight
      const total = pin.offsetHeight - viewport
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const progress = total > 0 ? scrolled / total : 0
      const translateX = -progress * totalDistance
      track.style.transform = `translate3d(${translateX}px, 0, 0)`
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [])
}
