import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export function useCountUp(target: number, duration = 1400) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const s = Date.now()
    const step = () => {
      const p = Math.min((Date.now() - s) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(start + (target - start) * ease))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return { ref, count }
}
