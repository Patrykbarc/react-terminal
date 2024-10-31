import { createContext } from 'react'

export const NotificationContext = createContext({
  isNotificationActive: false,
  setIsNotificationActive: (_state: boolean) => {}
})
