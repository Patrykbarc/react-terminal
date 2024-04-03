import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

const skills = [
	{ technology: 'JavaScript', proficiency: 'Intermediate' },
	{ technology: 'TypeScript', proficiency: 'Beginner' },
	{ technology: 'React', proficiency: 'Intermediate' },
	{ technology: 'NEXT', proficiency: 'Intermediate' },
	{ technology: 'Bootstrap', proficiency: 'Advanced' },
	{ technology: 'Tailwind', proficiency: 'Advanced' },
	{ technology: 'HTML/SCSS', proficiency: 'Advanced' },
	{ technology: 'Git', proficiency: 'Intermediate' },
	{ technology: 'SQL', proficiency: 'Intermediate' },
	{ technology: 'PHP', proficiency: 'Beginner' },
	{ technology: 'Adobe Illustrator', proficiency: 'Advanced' },
	{ technology: 'Adobe Photoshop', proficiency: 'Intermediate' },
	{ technology: 'Figma', proficiency: 'Intermediate' },
	{ technology: 'UI/UX Design', proficiency: 'Intermediate' },
]

export function Skills({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<ol className='list-inside list-decimal'>
				{skills.map(({ technology, proficiency }) => {
					return (
						<li key={technology}>
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
