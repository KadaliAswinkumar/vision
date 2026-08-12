import { links } from '../data/links'
import { LinkButton } from './LinkButton'

export function LinkList() {
  return (
    <nav aria-label="Links" className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:gap-3.5">
      {links.map((link, index) => (
        <LinkButton key={link.id} link={link} index={index} />
      ))}
    </nav>
  )
}
