import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface Commands {
	cmd: string
	description: string
}

export interface ChatItem {
	id: number | string
	content: string | ReactNode | JSX.Element
}

export interface SetStateProps<T> {
	setInput: Dispatch<SetStateAction<T>>
}

export interface ProjectsList {
	name: string
	status?: 'development' | 'finished'
	gitUrl?: string
	deploy: string
	description?: string | ReactNode
	techs: string | ReactNode
}

export interface OverflowingChild {
	isOverflowing: boolean
	id: string
}
