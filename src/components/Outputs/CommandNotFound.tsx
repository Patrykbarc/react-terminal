import { Dispatch, SetStateAction } from 'react'
import { Button } from '../Button/Button'

interface CommandNotFoundProps {
	setInput: Dispatch<SetStateAction<string>>
	closestCommand: string
}

export function CommandNotFound({ setInput, closestCommand }: CommandNotFoundProps) {
	return (
		<>
			<span className='text-rose-600'>Command not found.</span>
			<br />
			<span className='text-rose-600'>
				{' '}
				Did you mean {<Button onClick={() => setInput(closestCommand)}>{closestCommand}</Button>} ?
			</span>
		</>
	)
}
