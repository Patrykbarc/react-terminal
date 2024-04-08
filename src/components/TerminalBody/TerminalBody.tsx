import React, { useEffect, useRef, useState } from 'react'

import { ChatItem } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'
import { getActualTime } from '../../utils/functions/getDates'
import { handleCommandResponse } from '../../utils/functions/handleCommandResponse'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>([
		{
			id: Date.now(),
			content: <InitialMessage setInput={setInput} />,
		},
	])

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const { actualTime } = getActualTime()

	function handleSetChat(event: React.KeyboardEvent<HTMLInputElement>) {
		const formattedInput = input.trim().toLowerCase()

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

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
		}

		messagesEndRef.current?.addEventListener('click', () => {
			inputRef.current !== null && inputRef.current.focus()
		})
	}, [chat])

	return (
		<TerminalBodyWrapper>
			<div
				ref={messagesEndRef}
				className='flex h-full flex-col gap-1 overflow-y-scroll break-words px-3 py-2'>
				{chat.map((item, index) => {
					const lastIndex = chat.length - 1
					const isLastIndex = index === lastIndex
					return (
						<span
							key={item.id}
							// className={
							//     typeof item.content === 'string' && item.content.includes('$')
							//         ? 'text-neutral-800'
							//         : 'text-sky-700'
							// }
						>
							{item.content}

							{!isLastIndex && <hr data-index={index} className='my-1 opacity-50' />}
						</span>
					)
				})}
			</div>
			<input
				ref={inputRef}
				placeholder='Type command'
				className={`bottom-0 z-50 w-full border-t border-gray-200 bg-transparent px-3 py-2 focus-visible:outline-none`}
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
				onKeyUp={handleSetChat}
			/>
		</TerminalBodyWrapper>
	)
}
