import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function About({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<p>
				I am an experienced and professional web developer with one year of commercial experience in
				full-stack programming and web design
			</p>
			<p>Additionally, I have 3.5 years of experience as a graphic designer.</p>
			<p>I possess strong creative and analytical skills.</p>
			<p>I am also a team player who pays attention to detail.</p>

			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('skills')}>skills</Button>
				<Button onClick={() => setInput('experience')}>experience</Button>
				<Button onClick={() => setInput('projects')}>projects</Button>
			</ButtonsWrapper>
		</div>
	)
}
