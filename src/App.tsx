import { useState } from 'react'
import { MobileDeviceNotification } from './components/MobileDeviceNotification/MobileDeviceNotification'
import { Notification } from './components/Notification/Notification'
import { TerminalBody } from './components/Terminal/TerminalBody/TerminalBody'
import { TerminalHeader } from './components/Terminal/TerminalHeader/TerminalHeader'
import { ToggleDarkMode } from './components/ToggleDarkMode/ToggleDarkMode'
import { NotificationContext } from './utils/contexts/NotificationContext'

function App() {
  const [isNotificationActive, setIsNotificationActive] =
    useState<boolean>(false)

  return (
    <>
      <ToggleDarkMode />
      <MobileDeviceNotification />
      <Notification isNotificationActive={isNotificationActive} />

      <div className="flex h-dvh select-none items-start justify-center text-neutral-800 md:items-center">
        <div className="scale-125 pt-28 md:pt-0">
          <TerminalHeader />
          <NotificationContext.Provider
            value={{ isNotificationActive, setIsNotificationActive }}
          >
            <TerminalBody />
          </NotificationContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App
