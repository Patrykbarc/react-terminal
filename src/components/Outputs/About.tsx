import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'

export function About({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<span>
				I'm Patryk Barć, a frontend developer and graphic designer based in Rzeszów, Poland. I have
				a passion for web development. With 1 year of commercial experience,
			</span>
			<span>
				I've worked on a variety of projects, from small business websites to an internal company
				management system.
			</span>
			<span>
				To show my list of skills type <Button onClick={() => setInput('skills')}>skills</Button>{' '}
				command.
			</span>
			<span>Feel free to explore more about me through other commands!</span>
		</div>
	)
}
