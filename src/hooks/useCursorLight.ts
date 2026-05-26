import { useEffect } from 'react'

export function useCursorLight() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const light = document.querySelector('.cursor-light') as HTMLElement | null
    if (!light) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let curX = targetX
    let curY = targetY
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!document.body.classList.contains('cursor-active')) {
        document.body.classList.add('cursor-active')
      }
    }
    const onMouseLeave = () => document.body.classList.remove('cursor-active')

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    const tick = () => {
      curX += (targetX - curX) * 0.12
      curY += (targetY - curY) * 0.12
      light.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
