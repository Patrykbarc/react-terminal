import { useState } from 'react'
import { Button } from '../Button/Button'

export function Secret() {
	const [isSecretShown, setIsSecretShown] = useState(false)
	const videoUrl = 'https://www.youtube.com/watch?v=uHgt8giw1LY'
	const gifUrl = 'https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif'

	function handleSetIsSecretShown() {
		setTimeout(() => {
			setIsSecretShown(true)
		}, 1000)
	}

	return (
		<div>
			<Button onClick={handleSetIsSecretShown}>
				<a href={videoUrl} target='_blank' rel='noopener noreferrer'>
					what's that? 🤔
				</a>
			</Button>
			{isSecretShown && (
				<div className='mt-5 block h-[400px] w-full overflow-hidden'>
					<img className='w-full object-cover object-center' src={gifUrl} />
				</div>
			)}
		</div>
	)
}
