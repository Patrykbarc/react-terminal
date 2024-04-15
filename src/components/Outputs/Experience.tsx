import { experience } from '../../utils/constants/experienceList'
import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Experience({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-8'>
			{experience.map((item, index) => (
				<div className='flex w-full flex-col gap-4' key={item.timespan}>
					<div className='h-fit text-balance capitalize'>
						<p className='text-2xl font-bold'>{item.position}</p>
						<small className='w-fit'>
							{item.company} | {item.timespan}
						</small>
					</div>

					<ol className='ms-5 flex w-5/6 list-outside list-disc flex-col gap-1' key={index}>
						{item.text}
					</ol>
				</div>
			))}
			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('projects')}>projects</Button>
			</ButtonsWrapper>
		</div>
	)
}
