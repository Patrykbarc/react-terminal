const projectsList: Record<string, string>[] = [
	{
		name: 'Password Generator',
		gitUrl: 'https://github.com/Patrykbarc/ts-password-generator',
		deploy: 'https://react-ts-password-generator.netlify.app/',
	},
	{
		name: 'The Old Sailor Barber',
		gitUrl: 'https://github.com/Patrykbarc/react-old-sailor',
		deploy: 'https://theoldsailorbarber.netlify.app/',
	},
	{
		name: 'Piotr Kukla Photo',
		deploy: 'http://pkuklaphoto.pl/',
	},
	{
		name: 'Artist portfolio',
		gitUrl: 'https://github.com/Patrykbarc/react-artisans',
		deploy: 'https://main--react-ts-artisans.netlify.app/',
	},
	{
		name: 'Calculator App',
		gitUrl: 'https://github.com/Patrykbarc/react-calculator',
		deploy: 'https://react-calculator-patrykbarc.netlify.app/',
	},
]

export function Projects() {
	return (
		<ol className='flex'>
			{projectsList.map(({ name, gitUrl, deploy }) => {
				return (
					<li className='flex flex-col  gap-3' key={name}>
						{gitUrl && (
							<a href={gitUrl} target='_blank'>
								GitHub: {name}
							</a>
						)}
						<a href={deploy} target='_blank'>
							deploy: {name}
						</a>
					</li>
				)
			})}
		</ol>
	)
}
