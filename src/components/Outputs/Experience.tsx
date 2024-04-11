import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

const experience = [
	{
		company: 'modern morms',
		position: 'full-stack developer',
		timespan: '04.2023 - current',
		text: (
			<>
				<p>
					I designed and created an internal product configurator, enabling company employees to
					quickly and easily create tasks.
				</p>
				<p>
					Currently, I am actively involved in the process of migrating the old system to a new one,
					which I am coding myself using Next.js and MySql technologies.
				</p>
				<p>
					I continue to play a key role in its development and customization to fit the company's
					needs. I also designed and created a tool for the production department to manage
					processes.
				</p>
				<p>
					I focus on user experience by analyzing and adapting interfaces to meet user needs. I
					optimize the system for performance and user experience.
				</p>
			</>
		),
	},
	{
		company: 'modern forms',
		position: 'graphic designer',
		timespan: '2020 - 2023',
		text: (
			<>
				<span>
					I designed and created an internal product configurator, enabling company employees to
					quickly and easily create tasks.
				</span>
				<span>
					Currently, I am actively involved in the process of migrating the old system to a new one,
					which I am coding myself using Next.js and MySql technologies.
				</span>
				<span>
					I continue to play a key role in its development and customization to fit the company's
					needs. I also designed and created a tool for the production department to manage
					processes.
				</span>
				<span>
					I focus on user experience by analyzing and adapting interfaces to meet user needs. I
					optimize the system for performance and user experience.
				</span>
			</>
		),
	},
]

export function Experience({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-8'>
			{experience.map((item, index) => (
				<div className='flex w-full flex-col gap-4'>
					<div className='h-fit w-2/6 text-balance capitalize'>
						<p className='text-2xl font-bold'>{item.position}</p>
						<small className='w-fit'>
							{item.company} | {item.timespan}
						</small>
					</div>

					<div className='w-5/6 gap-3' key={index}>
						<p className='flex flex-col gap-3'>{item.text}</p>
					</div>
				</div>
			))}
			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('projects')}>projects</Button>
			</ButtonsWrapper>
		</div>
	)
}
