import { Dispatch, KeyboardEvent, SetStateAction } from 'react'
import { ChatItem } from '../interfaces'
import { handleCommandResponse } from './handleCommandResponse'
import { CommandBadge } from '../../components/CommandBadge/CommandBadge'

interface HandleSetChat {
	event: KeyboardEvent<HTMLInputElement>
	useStates: {
		input: string
		setInput: Dispatch<SetStateAction<string>>
		setChat: Dispatch<SetStateAction<ChatItem[]>>
	}
}

export function handleSetChat({ event, useStates: { input, setInput, setChat } }: HandleSetChat) {
	const formattedInput = input.trim().toLowerCase()

	if (event.key === 'Enter' && formattedInput.length > 0) {
		const newChatItem: ChatItem = {
			id: Date.now(),
			content: <CommandBadge input={input} />,
		}

		setChat(prevState => [...prevState, newChatItem])
		handleCommandResponse({ formattedInput, setInput, setChat })
		setInput('')
	}
}
