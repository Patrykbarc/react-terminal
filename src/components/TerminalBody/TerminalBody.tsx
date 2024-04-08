import React, { useEffect, useRef, useState } from 'react'

import { closest } from 'fastest-levenshtein'
import { commandsListArray } from '../../utils/constants/commandsList'
import { ChatItem } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { About } from '../Outputs/About'
import { Experience } from '../Outputs/Experience'
import { Github } from '../Outputs/Github'
import { Help } from '../Outputs/Help'
import { InitialMessage } from '../Outputs/InitialMessage'
import { List } from '../Outputs/List'
import { Secret } from '../Outputs/Secret'
import { Skills } from '../Outputs/Skills'
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

	function handleSetChat(event: React.KeyboardEvent<HTMLInputElement>) {
		const formattedInput = input.trim().toLowerCase()

		if (event.key === 'Enter' && formattedInput.length > 0) {
			const date = new Date()
			const hours = date.getHours()
			const minutes = date.getMinutes()
			const seconds = date.getSeconds()

			const actualTime = `${hours}:${minutes}:${seconds}`

			const newChatItem: ChatItem = {
				id: Date.now(),
				content: (
					<div className='flex justify-between'>
						<span> $ {formattedInput}</span>
						<small>{actualTime}</small>
					</div>
				),
			}

			setChat(prevState => [...prevState, newChatItem])
			handleCommandResponse(formattedInput)
			setInput('')
		}
	}

	// TODO przenieść handleCommandResponse do useReducer
	function handleCommandResponse(cmd: string) {
		setTimeout(() => {
			const closestCommand = closest(cmd, commandsListArray)
			let response: string | JSX.Element | null = (
				<>
					<span className='text-rose-600'>Command not found.</span>
					<br />
					<span className='text-rose-600'>
						{' '}
						Did you mean{' '}
						{<Button onClick={() => setInput(closestCommand)}>{closestCommand}</Button>} ?
					</span>
				</>
			)
			switch (cmd) {
				case 'clear':
					response = null
					setChat([])
					break
				case 'list':
					response = <List setInput={setInput} />
					break
				case 'help':
					response = <Help setInput={setInput} />
					break
				case 'about':
					response = <About setInput={setInput} />
					break
				case 'skills':
					response = <Skills setInput={setInput} />
					break
				case 'experience':
					response = <Experience setInput={setInput} />
					break
				case 'github':
					response = <Github />
					break
				case 'secret':
					response = <Secret />
					break
			}
			const newChatItem: ChatItem = { id: chat.length + 1, content: response }
			setChat(prevState => [...prevState, newChatItem])
		}, 150)
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
				className={`bottom-0 z-50 w-full bg-transparent px-3 py-2 focus-visible:outline-none`}
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
				onKeyUp={handleSetChat}
			/>
		</TerminalBodyWrapper>
	)
}
