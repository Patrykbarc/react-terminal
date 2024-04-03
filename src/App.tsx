import { TerminalContainer } from './components/TerminalBody/TerminalBody'
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader'

function App() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='scale-125'>
				<TerminalHeader />
				<TerminalContainer />
			</div>
		</div>
	)
}

export default App
