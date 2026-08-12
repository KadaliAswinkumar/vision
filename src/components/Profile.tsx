import { motion, useReducedMotion } from 'framer-motion'

/** Profile photo synced from your Linktree */
const PROFILE_IMAGE = '/profile.jpg'

export function Profile() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className="flex flex-col items-center text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative mb-5">
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(circle,rgba(160,170,190,0.35),transparent_70%)] blur-2xl"
          animate={
            reduceMotion
              ? undefined
              : { scale: [1.35, 1.55, 1.35], opacity: [0.55, 0.85, 0.55] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
          }
        />

        <motion.div
          className="relative h-[104px] w-[104px] overflow-hidden rounded-full border border-white/15 bg-black shadow-[0_0_36px_rgba(255,255,255,0.08)] sm:h-28 sm:w-28"
          initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <img
            src={PROFILE_IMAGE}
            alt="@kadaliaswinkumar"
            className="h-full w-full object-cover"
            width={112}
            height={112}
          />
        </motion.div>
      </div>

      <motion.h1
        className="text-[22px] font-semibold tracking-tight text-white sm:text-2xl"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
      >
        @kadaliaswinkumar
      </motion.h1>

      <motion.p
        className="mt-3 max-w-[320px] text-[13px] leading-relaxed text-white/75 sm:max-w-sm sm:text-sm"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28 }}
      >
        Tech entrepreneur and influencer sharing insights on startups, coding,
        and career growth. Explore my projects and portfolio to connect.
      </motion.p>
    </motion.header>
  )
}
