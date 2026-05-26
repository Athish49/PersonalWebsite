import { useEffect } from 'react'

export function useScrollProgress() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bar = document.querySelector('.scroll-progress') as HTMLElement | null
    const update = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (bar) bar.style.width = pct + '%'
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
}
