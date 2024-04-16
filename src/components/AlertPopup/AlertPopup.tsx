import { ClipboardDocumentCheckIcon } from '@heroicons/react/16/solid'

interface AlertPopupProps {
	isNotificationActive: boolean
}

export function AlertPopup({ isNotificationActive }: AlertPopupProps) {
	return (
		<div
			className={`absolute left-1/2 z-50 flex -translate-x-1/2 items-center rounded bg-gray-200 p-3 shadow-lg transition-all duration-700 ease-in-out ${isNotificationActive ? 'top-6' : '-top-full'}`}>
			<ClipboardDocumentCheckIcon className='mr-1.5 size-5' />
			<p>Copied to clipboard</p>
		</div>
	)
}
