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
	gitUrl?: string
	deploy: string
	description?: string | ReactNode
	techs: string | ReactNode
}
