import { Button } from '../../components/Button/Button'
import { ProjectsList } from '../interfaces'

export const projectsList: ProjectsList[] = [
	{
		name: 'SecureKeyGen',
		status: 'finished',
		gitUrl: 'https://github.com/Patrykbarc/ts-password-generator',
		deploy: 'https://securekeygen.netlify.app/',
		description:
			'The SecureKeyGen is a simple React-based powered with TypeScript application that allows users to generate secure passwords based on their preferences. The application provides a user-friendly interface to customize password length and include or exclude different character types such as letters, capital letters, numbers, and special characters.',
		techs: 'React | TypeScript | Tailwind',
	},
	{
		name: 'Piotr Kukla Photo',
		status: 'finished',
		deploy: 'http://pkuklaphoto.pl/',
		description:
			"A professional photographer's personal website. The site provides a public content management panel and includes an administrator management panel.",
		techs: 'PHP | MySql | JavScript | Bootstrap',
	},
	{
		name: 'The Old Sailor Barber',
		status: 'development',
		gitUrl: 'https://github.com/Patrykbarc/react-old-sailor',
		deploy: 'https://theoldsailorbarber.netlify.app/',
		description: '',
		techs: 'React | Tailwind',
	},
	{
		name: 'Artist portfolio',
		status: 'development',
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
		techs: 'React | Tailwind',
	},
	{
		name: 'Calculator App',
		gitUrl: 'https://github.com/Patrykbarc/react-calculator',
		deploy: 'https://react-calculator-patrykbarc.netlify.app/',
		description: '',
		techs: 'React',
	},
]
