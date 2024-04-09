interface ButtonProps {
	children: React.ReactNode
	value?: string
	variant?: 'primary' | 'outline' | 'link'
	onClick?: () => void
}

const buttonVariants = {
	primary: 'bg-sky-600 text-white hover:bg-sky-700',
	outline:
		'border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600',
	link: 'text-sky-600 hover:text-sky-800',
}

export function Button({ children, value, variant = 'primary', onClick }: ButtonProps) {
	return (
		<button
			className={`cursor-pointer rounded-sm px-2 transition-colors ${buttonVariants[variant]}`}
			value={value}
			onClick={onClick !== undefined ? () => onClick() : undefined}>
			{children}
		</button>
	)
}
