import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function About({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<span>
				I'm Patryk Barć, a frontend developer and graphic designer based in Rzeszów, Poland. I have
				a passion for web development.
			</span>
			<span>
				I've worked on a variety of projects, from small business websites to an internal company
				management system.
			</span>
			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('skills')}>skills</Button>
				<Button onClick={() => setInput('experience')}>experience</Button>
				<Button onClick={() => setInput('projects')}>projects</Button>
			</ButtonsWrapper>
		</div>
	)
}
