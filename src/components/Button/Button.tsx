interface ButtonProps {
	children: React.ReactNode
	value?: string
	onClick?: () => void
}

export function Button({ children, onClick, value }: ButtonProps) {
	return (
		<button
			className='cursor-pointer rounded-sm bg-sky-600 px-2 text-white transition-colors hover:bg-sky-700'
			value={value}
			onClick={onClick !== undefined ? () => onClick() : undefined}>
			{children}
		</button>
	)
}

// bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
