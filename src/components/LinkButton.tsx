import { motion, useReducedMotion } from 'framer-motion'
import { MoreVertical } from 'lucide-react'
import type { LinkItem } from '../data/links'

interface LinkButtonProps {
  link: LinkItem
  index: number
}

export function LinkButton({ link, index }: LinkButtonProps) {
  const reduceMotion = useReducedMotion()
  const Icon = link.icon

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border border-white/[0.06] bg-black px-4 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-5 sm:py-4"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.35 + index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.02,
              y: -2,
              backgroundColor: 'rgba(18,18,18,1)',
              borderColor: 'rgba(255,255,255,0.16)',
              boxShadow: '0 10px 28px -10px rgba(255,255,255,0.12)',
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center text-white">
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <span className="relative flex-1 text-center text-[15px] font-semibold tracking-tight text-white sm:text-base">
        {link.title}
      </span>

      <MoreVertical
        className="relative h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white/70"
        strokeWidth={2}
        aria-hidden
      />
    </motion.a>
  )
}
