import { TerminalContainer } from './components/TerminalBody/TerminalBody'
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader'

function App() {
	return (
		<div className='mt-24 flex h-screen items-start justify-center md:mt-0 md:items-center'>
			<div className='scale-125'>
				<TerminalHeader />
				<TerminalContainer />
			</div>
		</div>
	)
}

export default App
