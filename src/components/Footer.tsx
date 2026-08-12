import { motion, useReducedMotion } from 'framer-motion'
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  YoutubeIcon,
} from './icons'

const socials = [
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/KadaliAswinkumar',
  },
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/kadaliaswinkumar/',
  },
  {
    label: 'Twitter',
    icon: XIcon,
    href: 'https://twitter.com/kadali76',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/kadaliaswinkumar/',
  },
  {
    label: 'YouTube',
    icon: YoutubeIcon,
    href: 'https://www.youtube.com/@kadaliaswinkumar?sub_confirmation=1',
  },
]

export function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.footer
      className="mt-12 flex flex-col items-center gap-5 pb-2 sm:mt-14"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <div className="flex items-center gap-2.5">
        {socials.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>

      <p className="text-center text-xs text-white/35 sm:text-[13px]">
        Built with <span className="text-white/70">♥</span> by Aswin • Free &
        Fast
      </p>
    </motion.footer>
  )
}
