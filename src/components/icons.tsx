import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  return {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  }
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base({ ...props, fill: 'currentColor', stroke: 'none' })}>
      <path d="M12 2C6.477 2 2 6.584 2 12.217c0 4.506 2.865 8.326 6.839 9.675.5.093.682-.22.682-.486 0-.24-.009-.875-.013-1.717-2.782.616-3.369-1.366-3.369-1.366-.454-1.178-1.11-1.491-1.11-1.491-.908-.635.069-.622.069-.622 1.004.072 1.532 1.052 1.532 1.052.892 1.56 2.341 1.11 2.91.849.09-.66.35-1.11.636-1.366-2.22-.258-4.555-1.135-4.555-5.053 0-1.116.39-2.029 1.03-2.744-.103-.258-.447-1.297.098-2.703 0 0 .84-.274 2.75 1.046A9.36 9.36 0 0 1 12 6.844a9.36 9.36 0 0 1 2.504.344c1.909-1.32 2.747-1.046 2.747-1.046.547 1.406.203 2.445.1 2.703.64.715 1.028 1.628 1.028 2.744 0 3.928-2.339 4.792-4.566 5.046.359.316.679.94.679 1.896 0 1.368-.012 2.471-.012 2.807 0 .268.18.584.688.485C19.138 20.54 22 16.72 22 12.217 22 6.584 17.523 2 12 2Z" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base({ ...props, fill: 'currentColor', stroke: 'none' })}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base({ ...props, fill: 'currentColor', stroke: 'none' })}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.03-9.17L1.5 2h6.76l4.66 6.17L18.244 2Zm-1.16 18h1.81L7.03 3.94H5.09L17.084 20Z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M2.5 8.5A3.5 3.5 0 0 1 6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7Z" />
      <path d="m10 9.5 5.5 2.5L10 14.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
