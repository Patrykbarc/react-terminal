import React, { useEffect, useRef, useState } from 'react'

const chatList: string[] = [
	'Hello world, welcome to my own terminal [Version 1.0]',
	'© Patryk Barć. All rights reserved.',
	'/home/user/',
]

interface Commands {
	cmd: string
	value?: string
	response?: string
}

const commandsList: Commands[] = [
	{
		cmd: 'ls',
		response: 'List of commands:',
	},
	{
		cmd: 'clear',
	},
	{
		cmd: 'about',
	},
	{
		cmd: 'skills',
	},
	{
		cmd: 'education',
	},
	{
		cmd: 'projects',
	},
	{
		cmd: 'contact',
	},
	{
		cmd: 'github',
	},
	{
		cmd: 'linkedin',
	},
	{
		cmd: 'blog',
	},
	{
		cmd: 'help',
	},
]

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<string[]>(chatList)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	function handleSetChat(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter' && input.trim().length > 0) {
			setChat(prevState => [...prevState, input])

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
						'List of avilable commands: ',
						commandsList.map(c => c.cmd + '    ').join(''),
					])
					break
				default:
					setChat(prevState => [...prevState, 'Terminal: command not found'])
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
						className='flex h-full flex-col gap-1 overflow-y-scroll px-3 pt-2'>
						{chat.map((c, index) => {
							return <p key={index}>{c}</p>
						})}
					</div>
					<input
						placeholder='Type command'
						className='bottom-0 z-50 w-full border-t border-gray-200 bg-transparent px-3 py-2 focus-visible:outline-none'
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyUp={handleSetChat}
						// disabled={input.trim().length === 0}
					/>
				</div>
			</div>
			<div className='absolute -z-10 h-full w-full bg-gradient-to-br from-slate-50 to-slate-200 opacity-60 backdrop-blur-md' />
		</div>
	)
}
