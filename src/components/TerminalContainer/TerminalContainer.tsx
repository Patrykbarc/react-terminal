export function TerminalContainer() {
	return (
		<div className='relative rounded-b-xl size-full overflow-hidden resize min-w-72 min-h-72 border border-gray-400 max-w-screen-lg max-h-[1024px] caret-gray-600'>
			<div className='absolute z-0 size-full'>
				<div className='flex flex-col justify-between text-sm font-semibold h-full'>
					<div className='overflow-y-scroll px-3 pt-2'>
						<p>
							Hello world, welcome to my own terminal [Version 1.0]
							<br />© Patryk Barć. All rights reserved.
							<br />
							/home/user/
						</p>
					</div>
					<input
						placeholder='Type command'
						className='bottom-0 w-full z-50 px-3 py-2 bg-transparent focus-visible:outline-none border-t border-gray-200'
						type='text'
					/>
				</div>
			</div>
			<div className='absolute -z-10 bg-gradient-to-br from-slate-50 to-slate-200 backdrop-blur-md opacity-60 w-full h-full' />
		</div>
	)
}
