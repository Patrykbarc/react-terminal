import React, { useEffect, useRef, useState } from 'react'

import { ChatItem } from '../../utils/interfaces'
import { Ls } from '../Outputs/Ls'
import { About } from '../Outputs/About'
import { Github } from '../Outputs/Github'
import { Secret } from '../Outputs/Secret'
import { InitialMessage } from '../Outputs/InitialMessage'
import { commandsListArray } from '../../utils/constants/commandsList'
import { closest } from 'fastest-levenshtein'
import { Button } from '../Button/Button'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>([
		{
			id: 1,
			content: <InitialMessage setInput={setInput} />,
		},
	])
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	function handleSetChat(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter' && input.trim().length > 0) {
			const newChatItem: ChatItem = { id: chat.length + 1, content: '$ ' + input }
			setChat(prevState => [...prevState, newChatItem])
			handleCommandResponse(input)
			setInput('')
		}
	}

	function handleCommandResponse(cmd: string) {
		setTimeout(() => {
			const closestCommand = closest(cmd, commandsListArray)
			let response: string | JSX.Element = (
				<>
					<span className='text-rose-600'>Terminal: command not found.</span>
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
					setChat([])
					return
				case 'ls':
					response = <Ls setInput={setInput} />
					break
				case 'about':
					response = <About setInput={setInput} />
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
		<div className='relative size-full max-h-[1024px] min-h-72 w-[400px] min-w-72 max-w-screen-lg resize overflow-hidden rounded-b-xl border border-gray-400 caret-gray-600 shadow-2xl'>
			<div className='absolute z-0 size-full'>
				<div className='flex h-full flex-col justify-between text-sm font-semibold'>
					<div
						ref={messagesEndRef}
						className='flex h-full flex-col gap-1 overflow-y-scroll break-words px-3 py-2'>
						{chat.map((item, index) => (
							<span
								key={item.id + index}
								// className={
								// 	typeof item.content === 'string' && item.content.includes('$')
								// 		? 'text-neutral-800'
								// 		: 'text-sky-700'
								// }
							>
								{item.content}
							</span>
						))}
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
