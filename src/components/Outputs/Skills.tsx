import { skills } from '../../utils/constants/skillsList'
import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Skills({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-3'>
			<span>My tech stack:</span>
			<ol className='flex flex-col gap-1'>
				{skills.map(({ technology, proficiency, icon, alt }) => {
					return (
						<li className='flex items-center' key={technology}>
							<img src={icon} alt={alt} className='me-3 size-6' />
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
