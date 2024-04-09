interface HorizontalRulerProps {
	index: number
}

export function HorizontalRuler({ index }: HorizontalRulerProps) {
	return <hr data-index={index} className='my-1 opacity-50' />
}
