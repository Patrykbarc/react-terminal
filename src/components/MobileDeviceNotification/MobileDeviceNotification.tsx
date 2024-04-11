import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function MobileDeviceNotification() {
	const [isClosed, setIsClosed] = useState<boolean>(false)

	return (
		!isClosed && (
			<div className='absolute bottom-0 flex w-full items-center justify-between bg-amber-100 px-3 py-2 text-neutral-900 sm:hidden'>
				<p>Use the desktop version for a better user experience.</p>
				<button className='p-0.5' onClick={() => setIsClosed(true)}>
					<XMarkIcon className='size-7' />
				</button>
			</div>
		)
	)
}
