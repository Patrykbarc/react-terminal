import { SetStateProps } from '../../utils/interfaces'

const experience = [
	{
		text: "In 2017, I began studying computer graphics and multimedia production at UITP in Rzeszow. In 2020, I completed my bachelor's degree and began my professional path.",
	},
	{
		text: 'In the same year, I started working at Modern Forms as a graphic designer, where I was in charge of DTP and graphic design.',
	},
	{
		text: 'During my work, I always steered towards Frontend and UI/UX.',
	},
	{
		text: 'Since August 2023, I have been working as a junior Frontend Developer.',
	},
	{
		text: 'I am responsible for the development of an internal task management system tailored to the unique needs of sales representatives, graphic designers and the production department.',
	},
	{
		text: "I use web technologies such as Next.js along with Typescript, PHP, SCSS, and Tailwind and Bootstrap frameworks to ensure the system runs smoothly and optimizes the company's workflow processes.",
	},
]

export function Experience({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			{experience.map((item, index) => (
				<span key={index}>{item.text}</span>
			))}
		</div>
	)
}
