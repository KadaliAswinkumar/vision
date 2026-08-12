import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const sync = () => {
      const on = mq.matches && !reduceMotion
      setEnabled(on)
      document.body.classList.toggle('cursor-glow', on)
    }

    sync()
    mq.addEventListener('change', sync)
    return () => {
      mq.removeEventListener('change', sync)
      document.body.classList.remove('cursor-glow')
    }
  }, [reduceMotion])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          opacity: visible ? 0.75 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 28, mass: 0.45 }}
      >
        <div className="h-9 w-9 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.08)_50%,transparent_70%)]" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101]"
        animate={{
          x: pos.x - 3.5,
          y: pos.y - 3.5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 42, mass: 0.18 }}
      >
        <div className="h-[7px] w-[7px] rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]" />
      </motion.div>
    </>
  )
}
