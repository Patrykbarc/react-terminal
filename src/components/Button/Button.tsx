interface ButtonProps {
	children: React.ReactNode
	value?: string
	onClick?: () => void
}

export function Button({ children, onClick, value }: ButtonProps) {
	return (
		<button
			className='cursor-pointer rounded-sm border border-neutral-500 bg-slate-200 px-2 hover:bg-neutral-900 hover:text-white'
			value={value}
			onClick={onClick !== undefined ? () => onClick() : undefined}>
			{children}
		</button>
	)
}
