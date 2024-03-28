import { TerminalContainer } from './components/TerminalContainer/TerminalContainer'
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader'

function App() {
	return (
		<div className='h-screen flex items-center justify-center'>
			<div>
				<TerminalHeader />
				<TerminalContainer />
			</div>
		</div>
	)
}

export default App
