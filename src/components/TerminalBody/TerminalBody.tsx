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
import { Ls } from '../Outputs/Ls'
import { Secret } from '../Outputs/Secret'
import { Skills } from '../Outputs/Skills'

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
			const newChatItem: ChatItem = { id: Date.now(), content: `$ ${formattedInput}` }

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
				case 'ls':
					response = <Ls setInput={setInput} />
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
		<div className='relative size-full max-h-[1024px] min-h-72 min-w-[70vw] max-w-screen-lg resize-y overflow-hidden rounded-b-xl border border-gray-400 caret-gray-600 shadow-2xl md:min-w-[500px] lg:w-[700px] lg:min-w-72 lg:resize'>
			<div className='absolute z-0 size-full'>
				<div className='flex h-full flex-col justify-between text-balance text-sm font-semibold'>
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
						className='bottom-0 z-50 w-full border-t border-gray-200 bg-transparent px-3 py-2 focus-visible:outline-none'
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyUp={handleSetChat}
					/>
				</div>
			</div>
			<div className='absolute -z-10 h-full w-full bg-gradient-to-br from-slate-50 to-slate-200 opacity-60 backdrop-blur-md' />
		</div>
	)
}
