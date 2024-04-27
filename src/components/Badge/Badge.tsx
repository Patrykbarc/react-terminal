interface BadgeProps {
	size?: 'sm' | 'md' | 'lg'
	variant?: 'outline' | 'normal'
}

export function Badge({ size = 'md', variant = 'normal' }: BadgeProps) {
	const sizes = {
		sm: 'px-2 py-0.5',
		md: 'px-2 py-1',
		lg: 'px-3 py-1.5',
	}

	const variants = {
		outline: 'bg-none border ring-gray-500',
		normal: 'bg-gray-50 text-gray-600 ring-gray-500/10',
	}

	return (
		<span
			className={`inline-flex w-fit items-center rounded-md text-xs font-medium ring-1 ring-inset ${sizes[size]} ${variants[variant]}`}>
			Badge
		</span>
	)
}
