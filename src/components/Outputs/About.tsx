import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function About({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<div>
				<p className='mb-1 text-3xl font-black'>Patryk Barć</p>
				<p className='text-lg font-light uppercase'>fullstack developer & graphic designer</p>
			</div>
			<p>
				I am a professional web developer with commercial experience in fullstack
				programming and web design.
			</p>
			<p>
				I have 3.5 years of experience as a graphic designer and a bachelor's degree in "Computer
				Graphics and Multimedia Production".
			</p>
			<p>
				I possess strong creative and analytical skills. I am also a team player who pays attention
				to detail.
			</p>

			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('skills')}>skills</Button>
				<Button onClick={() => setInput('experience')}>experience</Button>
				<Button onClick={() => setInput('projects')}>projects</Button>
			</ButtonsWrapper>
		</div>
	)
}
