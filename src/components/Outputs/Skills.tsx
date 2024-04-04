import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

const skills = [
	{
		technology: 'JavaScript',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
	},
	{
		technology: 'TypeScript',
		proficiency: 'Beginner',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
	},
	{
		technology: 'React',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
	},
	{
		technology: 'NEXT',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
	},
	{
		technology: 'Bootstrap',
		proficiency: 'Advanced',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
	},
	{
		technology: 'Tailwind',
		proficiency: 'Advanced',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
	},
	{
		technology: 'HTML',
		proficiency: 'Advanced',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
	},
	{
		technology: 'Sass',
		proficiency: 'Advanced',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
	},
	{
		technology: 'Git',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
	},
	{
		technology: 'MySQL',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
	},
	{
		technology: 'PHP',
		proficiency: 'Beginner',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg',
	},
	{
		technology: 'Adobe Illustrator',
		proficiency: 'Advanced',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg',
	},
	{
		technology: 'Adobe Photoshop',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg',
	},
	{
		technology: 'Figma',
		proficiency: 'Intermediate',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
	},
	{
		technology: 'UI/UX Design',
		proficiency: 'Intermediate',
		icon: '',
	},
]

export function Skills({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<span>My tech stack:</span>
			<ol className='flex flex-col gap-1'>
				{skills.map(({ technology, proficiency, icon }) => {
					return (
						<li className='flex items-center' key={technology}>
							<img src={icon} className='me-3 size-6' alt='' />
							<span>{technology}</span> : <span>{proficiency}</span>
						</li>
					)
				})}
			</ol>
			<span>
				<ButtonsWrapper>
					Suggested commands:
					<Button onClick={() => setInput('experience')}>experience</Button>
					<Button onClick={() => setInput('projects')}>projects</Button>
				</ButtonsWrapper>
			</span>
		</div>
	)
}
