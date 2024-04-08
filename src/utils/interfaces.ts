import { Dispatch, SetStateAction } from 'react'

export interface Commands {
	cmd: string
	description: string
}

export interface ChatItem {
	id: number | string
	content: string | React.ReactNode | JSX.Element
}

export interface SetStateProps<T> {
	setInput: Dispatch<SetStateAction<T>>
}
