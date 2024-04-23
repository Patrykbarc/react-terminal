import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/hooks/useLocalStorage'

export function ToggleDarkMode() {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	return (
		<button className='absolute border bg-gray-200 p-3' onClick={() => setDarkMode(!darkMode)}>
			{darkMode ? 'Light mode' : 'Dark mode'}
		</button>
	)
}
