import { useState } from 'react'
import { AlertPopup } from './components/AlertPopup/AlertPopup'
import { MobileDeviceNotification } from './components/MobileDeviceNotification/MobileDeviceNotification'
import { TerminalContainer } from './components/TerminalBody/TerminalBody'
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader'
import { NotificationContext } from './utils/contexts/NotificationContext'

function App() {
	const [isNotificationActive, setIsNotificationActive] = useState<boolean>(false)

	return (
		<>
			<MobileDeviceNotification />
			<AlertPopup isNotificationActive={isNotificationActive} />

			<div className='flex h-screen items-start justify-center pt-24 text-neutral-900 sm:pt-0 md:mt-0 md:items-center'>
				<div className='scale-125'>
					<TerminalHeader />
					<NotificationContext.Provider value={{ isNotificationActive, setIsNotificationActive }}>
						<TerminalContainer />
					</NotificationContext.Provider>
				</div>
			</div>
		</>
	)
}

export default App
