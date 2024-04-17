import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

interface ScrollToTopProps {
	id: string
}

export function ScrollToTop({ id }: ScrollToTopProps) {
	return (
		id && (
			<a href={`#${id}` ?? ''} className='absolute bottom-0 right-0 mb-12 mr-8'>
				<ArrowUpCircleIcon className='size-8 text-neutral-600 opacity-70 transition-transform hover:scale-105 hover:opacity-100' />
			</a>
		)
	)
}