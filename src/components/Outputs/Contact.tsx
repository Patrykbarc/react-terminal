import { MouseEvent, useContext, useEffect } from 'react'
import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

import { PhoneIcon, EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { NotificationContext } from '../../utils/contexts/NotificationContext'

const contactInfo = [
	{
		text: '534-073-115',
		icon: <PhoneIcon />,
	},
	{
		text: 'patrykbarc.design@gmail.com',
		icon: <EnvelopeOpenIcon />,
	},
	{
		text: '38-120 Czudec, Rzeszów',
		icon: <MapPinIcon />,
	},
]

export function Contact({ setInput }: SetStateProps<string>) {
	const { isNotificationActive, setIsNotificationActive } = useContext(NotificationContext)

	function copyToClipboard(e: MouseEvent<HTMLButtonElement>) {
		const target = e.target as HTMLButtonElement
		if (target !== null) {
			navigator.clipboard.writeText(target.textContent || '')
			setIsNotificationActive(true)
		}
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsNotificationActive(false)
		}, 2500)

		return () => clearInterval(timeout)
	}, [isNotificationActive, setIsNotificationActive])

	return (
		<div className='flex flex-col gap-2'>
			{contactInfo.map(contact => {
				return (
					<Button
						key={contact.text}
						classname='w-fit pe-3'
						value={contact.text}
						onClick={e => copyToClipboard(e)}>
						<div className='flex items-center'>
							<div className='size-4'>{contact.icon}</div>
							<p className='ps-2'>{contact.text}</p>
						</div>
					</Button>
				)
			})}

			<ButtonsWrapper>
				Suggested commands:
				<Button onClick={() => setInput('github')}>github</Button>
				<Button onClick={() => setInput('linkedin')}>linkedin</Button>
			</ButtonsWrapper>
		</div>
	)
}
