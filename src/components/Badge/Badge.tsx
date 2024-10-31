import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'normal'
}

export function Badge({
  children,
  className,
  size = 'md',
  variant = 'normal'
}: BadgeProps) {
  const sizes = {
    sm: 'py-0.5 scale-75',
    md: 'py-1 scale-90',
    lg: 'py-2'
  }

  const variants = {
    outline: 'bg-none border ring-gray-500',
    normal: 'bg-gray-50 text-gray-600 ring-gray-500/10'
  }

  return (
    <span
      className={`inline-flex w-fit items-center rounded-md px-2 text-xs font-medium ring-1 ring-inset ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
