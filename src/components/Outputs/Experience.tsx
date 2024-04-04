import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

const experience = [
	{
		text: "In 2017, I began studying computer graphics and multimedia production at UITM in Rzeszow. In 2020, I completed my bachelor's degree and began my professional path.",
	},
	{
		text: 'In the same year, I started working at Modern Forms as a graphic designer, where I was in charge of DTP and graphic design.',
	},
	{
		text: 'During my work, I steered towards Frontend and UI/UX.',
	},
	{
		text: 'Since August 2023, I have been working as a junior Fullstack Developer.',
	},
	{
		text: 'I am responsible for the development of an internal task management system tailored to the unique needs of sales representatives, graphic designers and the production department.',
	},
	{
		text: "I use web technologies such as Next.js along with Typescript, PHP, SCSS, Tailwind and Bootstrap frameworks to ensure the system runs smoothly and optimizes the company's workflow processes.",
	},
]

export function Experience({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			{experience.map((item, index) => (
				<span key={index}>{item.text}</span>
			))}
			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('projects')}>projects</Button>
			</ButtonsWrapper>
		</div>
	)
}
