interface ButtonProps {
	children: React.ReactNode
	value?: string
	variant?: 'primary' | 'outline' | 'link'
	classname?: string
	onClick?: () => void
}

const buttonVariants = {
	primary: 'bg-sky-600 px-2 text-white hover:bg-sky-700',
	outline:
		'border border-sky-600 text-sky-600 px-2 hover:bg-sky-600 hover:text-white hover:border-sky-600',
	link: 'text-sky-600 hover:text-sky-800',
}

export function Button({ children, value, variant = 'primary', classname, onClick }: ButtonProps) {
	return (
		<button
			className={`cursor-pointer rounded-sm transition-colors ${buttonVariants[variant]} ${classname}`}
			value={value}
			onClick={onClick !== undefined ? () => onClick() : undefined}>
			{children}
		</button>
	)
}
