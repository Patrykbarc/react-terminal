import { useEffect, useRef, useState } from 'react'

import { handleSetChat } from '../../utils/functions/handleSetChat'
import { ChatItem } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'

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
				onKeyUp={event => handleSetChat({ event, useStates: { input, setInput, setChat } })}
			/>
		</TerminalBodyWrapper>
	)
}
