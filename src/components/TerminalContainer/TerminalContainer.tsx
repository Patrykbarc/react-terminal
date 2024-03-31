import React, { useEffect, useRef, useState } from 'react'
import { commandsList } from '../../utils/constants/commandsList'
import { chatList } from '../../utils/constants/chatList'
import { ChatItem } from '../../utils/interfaces'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>(chatList)
	const messagesEndRef = useRef<HTMLDivElement>(null)

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
			let response: string | JSX.Element = 'Terminal: command not found'
			switch (cmd) {
				case 'clear':
					setChat([])
					return
				case 'ls':
					response = 'List of available commands: ' + commandsList.map(c => c.cmd).join(' | ')
					break
				case 'github':
					response = (
						<a href='https://github.com/Patrykbarc' target='_blank' className='underline'>
							https://github.com/Patrykbarc
						</a>
					)
					break
				case 'secret':
					response = (
						<img
							className='size-[150px]'
							src='https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif'
						/>
					)
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
	}, [chat])

	return (
		<div className='relative size-full max-h-[1024px] min-h-72 min-w-72 max-w-screen-lg resize overflow-hidden rounded-b-xl border border-gray-400 caret-gray-600'>
			<div className='absolute z-0 size-full'>
				<div className='flex h-full flex-col justify-between text-sm font-semibold'>
					<div
						ref={messagesEndRef}
						className='flex h-full flex-col gap-1 overflow-y-scroll break-words px-3 py-2'>
						{chat.map((item, index) => (
							<p
								key={item.id + index}
								className={
									typeof item.content === 'string' && item.content.includes('$')
										? 'text-neutral-800'
										: 'text-sky-700'
								}>
								{item.content}
							</p>
						))}
					</div>
					<input
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
