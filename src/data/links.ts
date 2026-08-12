import type { ComponentType, SVGProps } from 'react'
import {
  Building2,
  Briefcase,
  AppWindow,
  FileText,
  Code2,
  BookOpen,
  Send,
  Award,
  GraduationCap,
  Terminal,
  Binary,
} from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  YoutubeIcon,
} from '../components/icons'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface LinkItem {
  id: string
  title: string
  url: string
  icon: IconComponent
  accent: string
}

/** Mapped from https://linktr.ee/kadaliaswinkumar */
export const links: LinkItem[] = [
  {
    id: 'startup',
    title: 'Startup',
    url: 'https://techbuilderz.in/',
    icon: Building2,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    url: 'https://kadaliaswinkumar.github.io/kadaliaswinkumar.in/',
    icon: Briefcase,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'website',
    title: 'Website',
    url: 'https://kadali.my.canva.site/website',
    icon: AppWindow,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'resume',
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1Z-vQ1NGrc3ELmG1YuoouVTBiH-FSyue_/view?usp=sharing',
    icon: FileText,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'linkedin',
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/kadaliaswinkumar/',
    icon: LinkedinIcon,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'github',
    title: 'Github',
    url: 'https://github.com/KadaliAswinkumar',
    icon: GithubIcon,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'leetcode',
    title: 'LeetCode',
    url: 'https://leetcode.com/u/Theodor_7/',
    icon: Code2,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'gfg',
    title: 'GeeksforGeeks',
    url: 'https://auth.geeksforgeeks.org/user/kadaliaswinkumar/practice',
    icon: Binary,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'codestudio',
    title: 'Code Studio',
    url: 'https://www.codingninjas.com/studio/profile/Ghost_7',
    icon: Terminal,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'hackerrank',
    title: 'HackerRank',
    url: 'https://www.hackerrank.com/kadaliaswinkumar?hr_r=1',
    icon: Code2,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'interviewbit',
    title: 'Interviewbit',
    url: 'https://www.interviewbit.com/profile/kadaliaswinkumar',
    icon: Terminal,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'medium',
    title: 'Medium',
    url: 'https://medium.com/@kadaliaswinkumar',
    icon: BookOpen,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'credly',
    title: 'Credly',
    url: 'https://www.credly.com/users/kadali-aswinkumar',
    icon: Award,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'coursera',
    title: 'Coursera',
    url: 'https://www.coursera.org/user/6b7a6289adebbb8913bd213e0920bb44',
    icon: GraduationCap,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/kadali76',
    icon: XIcon,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/kadaliaswinkumar/',
    icon: InstagramIcon,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    url: 'https://t.me/Kadaliaswinkumar',
    icon: Send,
    accent: 'rgba(255,255,255,0.18)',
  },
  {
    id: 'youtube',
    title: 'Youtube',
    url: 'https://www.youtube.com/@kadaliaswinkumar?sub_confirmation=1',
    icon: YoutubeIcon,
    accent: 'rgba(255,255,255,0.18)',
  },
]
