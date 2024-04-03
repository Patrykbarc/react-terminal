import { ReactNode } from 'react'

export function ButtonsWrapper({ children }: { children: ReactNode }) {
	return <span className='flex flex-wrap gap-1'>{children}</span>
}
