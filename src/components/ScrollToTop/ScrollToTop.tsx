import { ArrowUpCircleIcon } from '@heroicons/react/16/solid'
import { RefObject } from 'react'

interface ScrollToTopProps {
  id: string
  className: string
  scrollToTopRef: RefObject<HTMLAnchorElement>
}

export function ScrollToTop({
  id,
  className,
  scrollToTopRef
}: ScrollToTopProps) {
  return (
    <a
      ref={scrollToTopRef}
      href={`#${id}`}
      className={`absolute bottom-0 right-0 mb-11 mr-6 transition-opacity ${className}`}
    >
      <ArrowUpCircleIcon className="size-8 text-neutral-600 opacity-70 transition-transform hover:scale-105 hover:opacity-100" />
    </a>
  )
}
