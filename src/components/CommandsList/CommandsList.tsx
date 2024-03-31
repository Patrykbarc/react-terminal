import { commandsList } from '../../utils/constants/commandsList'

export function CommandsList({ handleSetInput }: { handleSetInput: (value: string) => void }) {
	return (
		<span className='flex flex-wrap gap-1'>
			Available commands:
			{commandsList.map(c => {
				return (
					<button
						className='cursor-pointer rounded-sm border border-neutral-500 bg-slate-200 px-2 hover:bg-neutral-900 hover:text-white'
						key={c.cmd}
						onClick={() => handleSetInput(c.cmd)}>
						{c.cmd}
					</button>
				)
			})}
		</span>
	)
}
