import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
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
    <div
      className="absolute bottom-0 right-0 m-5 cursor-pointer rounded-full p-3 drop-shadow-md transition-transform hover:scale-110"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <SunIcon className="size-12 text-neutral-100" />
      ) : (
        <MoonIcon className="size-12 text-neutral-100" />
      )}
    </div>
  )
}
