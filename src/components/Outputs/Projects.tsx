import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { Button } from '../Button/Button'
import { ProjectsList, SetStateProps } from '../../utils/interfaces'
import { projectsList } from '../../utils/constants/projectsList'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Projects({ setInput }: SetStateProps<string>) {
	return (
		<>
			<ol>
				{projectsList.map(({ name, description, gitUrl, techs, deploy }: ProjectsList) => {
					return (
						<li
							className='mb-3 border-b border-gray-200 border-opacity-50 pb-3 last-of-type:border-none'
							key={name}>
							<div className='flex flex-col gap-3'>
								<div className='flex flex-col gap-3'>
									<p className='text-xl font-bold'>{name}</p>
									{description && <p>{description}</p>}
								</div>
								{techs && <small className='font-semibold'>{techs}</small>}

								<div className='flex gap-1.5'>
									{gitUrl && (
										<Button>
											<a href={gitUrl} className='flex items-center gap-1' target='_blank'>
												<img
													className='size-4 invert'
													src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
													alt='GitHub logo'
												/>
												GitHub Repository
											</a>
										</Button>
									)}
									{name && (
										<Button>
											<a href={deploy} className='flex items-center gap-1' target='_blank'>
												<GlobeAltIcon className='size-4' /> Website
											</a>
										</Button>
									)}
								</div>
							</div>
						</li>
					)
				})}
			</ol>
			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('contact')}>contact</Button>
			</ButtonsWrapper>
		</>
	)
}
