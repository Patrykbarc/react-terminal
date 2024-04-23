import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function MobileDeviceNotification() {
	const [isClosed, setIsClosed] = useState<boolean>(false)

	return (
		!isClosed && (
			<div className='absolute bottom-0 z-50 flex w-full items-center justify-between border-t border-neutral-800 bg-opacity-80 px-3 py-2 text-neutral-800 sm:hidden'>
				<p>For a better user experience it's recommended to use the desktop version.</p>
				<button className='p-0.5' onClick={() => setIsClosed(true)}>
					<XMarkIcon className='size-7' />
				</button>
			</div>
		)
	)
}
