import { MobileDeviceNotification } from './components/MobileDeviceNotification/MobileDeviceNotification'
import { TerminalContainer } from './components/TerminalBody/TerminalBody'
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader'

function App() {
	return (
		<>
			<MobileDeviceNotification />
			<div className='flex h-screen items-start justify-center pt-24 text-neutral-900 md:mt-0 md:items-center'>
				<div className='scale-125'>
					<TerminalHeader />
					<TerminalContainer />
				</div>
			</div>
		</>
	)
}

export default App
