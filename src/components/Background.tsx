import { motion, useReducedMotion } from 'framer-motion'

const orbs = [
  {
    className:
      'left-[-15%] top-[-10%] h-[50vmax] w-[50vmax] bg-[radial-gradient(circle,rgba(90,100,120,0.35)_0%,transparent_68%)]',
    animate: {
      x: [0, 60, -30, 40, 0],
      y: [0, 50, 90, 30, 0],
      scale: [1, 1.12, 0.94, 1.06, 1],
    },
    duration: 30,
  },
  {
    className:
      'right-[-18%] top-[5%] h-[46vmax] w-[46vmax] bg-[radial-gradient(circle,rgba(70,80,100,0.3)_0%,transparent_68%)]',
    animate: {
      x: [0, -50, 20, -40, 0],
      y: [0, 70, 20, 90, 0],
      scale: [1, 0.92, 1.14, 1.04, 1],
    },
    duration: 34,
  },
  {
    className:
      'bottom-[-18%] left-[15%] h-[44vmax] w-[44vmax] bg-[radial-gradient(circle,rgba(55,65,85,0.28)_0%,transparent_68%)]',
    animate: {
      x: [0, 70, 20, -20, 0],
      y: [0, -50, -15, -70, 0],
      scale: [1, 1.1, 0.96, 1.15, 1],
    },
    duration: 38,
  },
  {
    className:
      'left-[35%] top-[30%] h-[26vmax] w-[26vmax] bg-[radial-gradient(circle,rgba(140,150,170,0.18)_0%,transparent_70%)]',
    animate: {
      x: [0, 30, -40, 15, 0],
      y: [0, -40, 20, -30, 0],
      scale: [1, 1.2, 0.88, 1.08, 1],
    },
    duration: 22,
  },
]

export function Background() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      {/* Soft charcoal depth — matches Linktree “lake” dark look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(48,52,62,0.75)_0%,#000000_58%)]" />

      <motion.div
        className="absolute inset-[-15%] opacity-50"
        style={{
          background:
            'conic-gradient(from 200deg at 50% 40%, rgba(80,88,102,0.35), rgba(40,44,54,0.2), rgba(100,108,120,0.28), rgba(30,34,42,0.25), rgba(80,88,102,0.35))',
          filter: 'blur(90px)',
        }}
        animate={
          reduceMotion ? undefined : { rotate: [0, 360], scale: [1, 1.05, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 70, repeat: Infinity, ease: 'linear' }
        }
      />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl will-change-transform ${orb.className}`}
          animate={reduceMotion ? undefined : orb.animate}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: orb.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.9,
                }
          }
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse at 50% 20%, black 8%, transparent 60%)',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.22] mix-blend-soft-light" />
    </div>
  )
}
