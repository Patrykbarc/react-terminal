import { useEffect, useState } from 'react'

export function ToggleDarkMode() {
	const [darkMode, setDarkMode] = useState(false)

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
