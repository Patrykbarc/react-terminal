import { Dispatch, KeyboardEvent, SetStateAction } from 'react'
import { ChatItem } from '../interfaces'
import { getActualTime } from './getDates'
import { handleCommandResponse } from './handleCommandResponse'

interface HandleSetChat {
	event: KeyboardEvent<HTMLInputElement>
	states: {
		input: string
		setInput: Dispatch<SetStateAction<string>>
		setChat: Dispatch<SetStateAction<ChatItem[]>>
	}
}

export function handleSetChat({ event, states: { input, setInput, setChat } }: HandleSetChat) {
	const formattedInput = input.trim().toLowerCase()
	const { actualTime } = getActualTime()

	if (event.key === 'Enter' && formattedInput.length > 0) {
		const newChatItem: ChatItem = {
			id: Date.now(),
			content: (
				<div className='flex w-full justify-between  text-white'>
					<div className='flex '>
						<span className='block w-fit bg-green-700 px-2'>/patrykbarc</span>
						<span className='block w-fit bg-sky-700 px-2'>/portfolio</span>
						<span className='bg-neutral-900 px-2 '>$ {formattedInput}</span>
					</div>
					<small className='text-neutral-900'>{actualTime}</small>
				</div>
			),
		}

		setChat(prevState => [...prevState, newChatItem])
		handleCommandResponse({ formattedInput, setInput, setChat })
		setInput('')
	}
}
