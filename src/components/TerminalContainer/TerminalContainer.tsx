export function TerminalContainer() {
	return (
		<div className='relative size-[500px] rounded-b-xl overflow-hidden resize min-w-72 min-h-72'>
			<input className='absolute bottom-0 w-full z-50 px-5 mb-3 bg-transparent' type='text' />
			<div className='size-full bg-gradient-to-br from-slate-50 to-slate-200 backdrop-blur-md opacity-60'></div>
		</div>
	)
}
