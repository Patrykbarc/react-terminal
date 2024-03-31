import React, { useEffect, useRef, useState } from 'react'
import { commandsList } from '../../utils/constants/commandsList'

interface ChatItem {
	id: number
	content: string | React.ReactNode
}

const chatList: ChatItem[] = [
	{
		id: 1,
		content: 'Hello world, welcome to my own terminal [Version 1.0]',
	},
	{
		id: 2,
		content: '© Patryk Barć. All rights reserved.',
	},
	{
		id: 3,
		content: 'Type "ls" to show list of available commands',
	},
]

export function TerminalContainer() {
	const [input, setInput] = useState('')
	// const [inputHistory, setInputHistory] = useState<string[]>([])
	const [chat, setChat] = useState<ChatItem[]>(chatList)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	function handleSetChat(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter' && input.trim().length > 0) {
			setChat(prevState => [...prevState, { id: prevState.length + 1, content: '$ ' + input }])
			// setInputHistory(prevState => [...prevState, input])
			handleCommandResponse(input)
			setInput('')
		}
	}

	function handleCommandResponse(cmd: string) {
		setTimeout(() => {
			switch (cmd) {
				case 'clear':
					setChat([])
					break
				case 'ls':
					setChat(prevState => [
						...prevState,
						{
							id: prevState.length + 1,
							content:
								'List of avilable commands: ' + commandsList.map(c => c.cmd + '  |  ').join(''),
						},
					])
					break
				case 'github':
					setChat(prevState => [
						...prevState,
						{
							id: prevState.length + 1,
							content: (
								<a href='https://github.com/Patrykbarc' target='_blank'>
									https://github.com/Patrykbarc
								</a>
							),
						},
					])
					break
				default:
					setChat(prevState => [
						...prevState,
						{ id: prevState.length + 1, content: 'Terminal: command not found' },
					])
					break
			}
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
						{chat.map(item => {
							let containsDollarSign
							typeof item.content === 'string' && (containsDollarSign = item.content.includes('$'))

							return (
								<p
									key={item.id}
									className={`${containsDollarSign ? 'text-neutral-800' : 'text-violet-500'}`}>
									{/* {item.content.replace('$', '')} */}
									{item.content}
								</p>
							)
						})}
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
