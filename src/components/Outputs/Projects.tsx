import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { Button } from '../Button/Button'
import { ReactNode } from 'react'

interface ProjectList {
	name: string
	gitUrl?: string
	deploy: string
	description?: string | ReactNode
	techs: string | ReactNode
}

const projectsList: ProjectList[] = [
	{
		name: 'Password Generator',
		gitUrl: 'https://github.com/Patrykbarc/ts-password-generator',
		deploy: 'https://react-ts-password-generator.netlify.app/',
		description:
			'The Password Generator App is a simple React-based powered with TypeScript application that allows users to generate secure passwords based on their preferences. The application provides a user-friendly interface to customize password length and include or exclude different character types such as letters, capital letters, numbers, and special characters.',
		techs: '',
	},
	{
		name: 'Piotr Kukla Photo',
		deploy: 'http://pkuklaphoto.pl/',
		description:
			"A professional photographer's personal website. The site provides a public content management panel and includes an administrator management panel.",
		techs: '',
	},
	{
		name: 'The Old Sailor Barber',
		gitUrl: 'https://github.com/Patrykbarc/react-old-sailor',
		deploy: 'https://theoldsailorbarber.netlify.app/',
		description: '',
		techs: '',
	},
	{
		name: 'Artist portfolio',
		gitUrl: 'https://github.com/Patrykbarc/react-artisans',
		deploy: 'https://main--react-ts-artisans.netlify.app/',
		description: (
			<span>
				A site created for practice and fun. Design inspired by{' '}
				<Button variant='link'>
					<a
						href='https://dribbble.com/shots/18627486-Artisans-Classic-Art-Collection-Website'
						target='_blank'>
						Artisans
					</a>
				</Button>
			</span>
		),
		techs: '',
	},
	{
		name: 'Calculator App',
		gitUrl: 'https://github.com/Patrykbarc/react-calculator',
		deploy: 'https://react-calculator-patrykbarc.netlify.app/',
		description: '',
		techs: '',
	},
]

export function Projects() {
	return (
		<ol>
			{projectsList.map(({ name, description, gitUrl, techs, deploy }: ProjectList) => {
				return (
					<li
						className='mb-3 border-b border-gray-200 border-opacity-50 pb-3 last-of-type:border-none'
						key={name}>
						<div className='flex flex-col'>
							<div className='mb-3 flex flex-col'>
								<p className='text-xl font-bold'>{name}</p>
								<p>{description}</p>
							</div>
							{techs && <p>{techs}</p>}
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
	)
}
