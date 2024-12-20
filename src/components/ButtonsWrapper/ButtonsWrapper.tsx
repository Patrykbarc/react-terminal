import { ReactNode } from 'react'

export function ButtonsWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-1">{children}</div>
}
