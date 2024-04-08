import { Dispatch, KeyboardEvent, SetStateAction } from 'react'
import { ChatItem } from '../interfaces'
import { handleCommandResponse } from './handleCommandResponse'
import { CodeBracketIcon, FolderIcon } from '@heroicons/react/24/outline'
import { ActualTime } from '../../components/ActualTime/ActualTime'

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
			content: (
				<>
					<div className='mb-2 flex w-full justify-between text-white'>
						<div className='flex'>
							<span className='block w-fit bg-green-700 px-2'>patrykbarc</span>
							<span className='flex w-fit items-center gap-1 bg-sky-700 px-2'>
								<FolderIcon className='size-4' /> portfolio
							</span>
							<span className='flex items-center gap-1 bg-neutral-900 px-2'>
								<CodeBracketIcon className='size-4' /> {formattedInput}
							</span>
						</div>
						<ActualTime />
					</div>
					<span>$ {formattedInput}</span>
				</>
			),
		}

		setChat(prevState => [...prevState, newChatItem])
		handleCommandResponse({ formattedInput, setInput, setChat })
		setInput('')
	}
}
