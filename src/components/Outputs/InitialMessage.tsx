import { getActualTime } from '../../utils/functions/getDates'
import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'

export function InitialMessage({ setInput }: SetStateProps<string>) {
	const { actualDate, actualTime } = getActualTime()

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between'>
				<small>{actualDate}</small>
				<small>{actualTime}</small>
			</div>
			<p className='text-6xl font-bold'>Hello world</p>
			<p>Welcome to my own terminal [Version 1.0]</p>
			<p>© Patryk Barć. All rights reserved.</p>
			<p>
				Type <Button onClick={() => setInput('list')}>list</Button> to show list of available
				commands. Or if you want to check the description of each command type{' '}
				<Button onClick={() => setInput('help')}>help</Button>
			</p>
		</div>
	)
}
