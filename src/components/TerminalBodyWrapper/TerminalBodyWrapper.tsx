import { ReactNode } from 'react'

export function TerminalBodyWrapper({ children }: { children: ReactNode }) {
	return (
		<div className='relative size-full h-[330px] max-h-[1024px] min-h-72 min-w-[70vw] max-w-screen-lg resize-y overflow-hidden rounded-b-xl border border-gray-400 caret-gray-600 shadow-2xl sm:h-[500px] md:min-w-[500px] lg:w-[550px] lg:min-w-72 lg:resize'>
			<div className='absolute z-0 size-full'>
				<div className='flex h-full flex-col justify-between text-balance text-sm font-semibold'>
					{children}
				</div>
			</div>
			<div className='absolute -z-10 h-full w-full bg-gradient-to-br from-slate-50 to-slate-200 opacity-80 backdrop-blur-md' />
		</div>
	)
}
