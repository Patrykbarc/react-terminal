export interface Commands {
	cmd: string
	value?: string
	response?: string
}

export interface ChatItem {
	id: number
	content: string | React.ReactNode
}
