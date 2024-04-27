import { useState } from 'react'
import { Notification } from './components/Notification/Notification'
import { MobileDeviceNotification } from './components/MobileDeviceNotification/MobileDeviceNotification'
import { TerminalContainer } from './components/TerminalBody/TerminalBody'
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader'
import { NotificationContext } from './utils/contexts/NotificationContext'
import { ToggleDarkMode } from './components/ToggleDarkMode/ToggleDarkMode'

function App() {
	const [isNotificationActive, setIsNotificationActive] = useState<boolean>(false)

	return (
		<>
			<ToggleDarkMode />
			<MobileDeviceNotification />
			<Notification isNotificationActive={isNotificationActive} />

			<div className='flex h-dvh select-none items-start justify-center text-neutral-800 md:items-center'>
				<div className='scale-125 pt-28 md:pt-0'>
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
