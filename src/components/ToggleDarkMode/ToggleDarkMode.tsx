import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/hooks/useLocalStorage'
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'

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
		<div
			className='absolute m-5 cursor-pointer transition-transform hover:scale-110'
			onClick={() => setDarkMode(!darkMode)}>
			{darkMode ? (
				<SunIcon className='size-12 text-neutral-800' />
			) : (
				<MoonIcon className='size-12 text-neutral-800' />
			)}
		</div>
	)
}
