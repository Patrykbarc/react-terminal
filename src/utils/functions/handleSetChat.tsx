import { Dispatch, KeyboardEvent, MouseEvent, SetStateAction } from 'react'
import { ChatItem } from '../interfaces'
import { handleCommandResponse } from './handleCommandResponse'
import { CommandBadge } from '../../components/CommandBadge/CommandBadge'

interface HandleSetChat {
	event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
	useStates: {
		input: string
		setInput: Dispatch<SetStateAction<string>>
		setChat: Dispatch<SetStateAction<ChatItem[]>>
	}
}

export function handleSetChat({ event, useStates: { input, setInput, setChat } }: HandleSetChat) {
	const keyboardEnterEvent =
		event.type === 'keyup' && (event as KeyboardEvent<HTMLInputElement>).key === 'Enter'
	const mouseClickEvent = event.type === 'click'

	const formattedInput = input.trim().toLowerCase()

	if ((keyboardEnterEvent || mouseClickEvent) && formattedInput.length > 0) {
		const newChatItem: ChatItem = {
			id: Date.now(),
			content: <CommandBadge input={input} />,
		}

		setChat(prevState => [...prevState, newChatItem])
		handleCommandResponse({ formattedInput, setInput, setChat })
		setInput('')
	}
}
