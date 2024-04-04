import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'

export function InitialMessage({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-2'>
			<span>Hello world, welcome to my own terminal [Version 1.0]</span>
			<span>© Patryk Barć. All rights reserved.</span>
			<span>
				Type <Button onClick={() => setInput('ls')}>ls</Button> to show list of available commands
			</span>
			<span>
				If you want to check the description of each command type{' '}
				<Button onClick={() => setInput('help')}>help</Button>
			</span>
		</div>
	)
}
