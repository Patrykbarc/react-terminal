import { useRef, useState } from 'react'
import { handleSetChat } from '../../utils/functions/handleSetChat'
import { ChatItem, OverflowingChild } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'
import { HorizontalRuler } from '../HorizontalRuler/HorizontalRuler'
import { useMessageScroll } from '../../utils/hooks/useMessageScroll'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'
import { PaperAirplaneIcon } from '@heroicons/react/16/solid'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>([
		{ id: Date.now(), content: <InitialMessage setInput={setInput} /> },
	])
	const [isChildOverflowing, setIsChildOverflowing] = useState<OverflowingChild | null>(null)

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const sendMessageButtonRef = useRef<HTMLButtonElement>(null)

	useMessageScroll({ chat, setIsChildOverflowing, refs: { messagesEndRef, inputRef, sendMessageButtonRef } })

	return (
		<TerminalBodyWrapper>
			<div
				ref={messagesEndRef}
				className='flex h-full flex-col gap-1 overflow-y-scroll break-words px-3 pb-4 pt-2'>
				{isChildOverflowing && <ScrollToTop id={isChildOverflowing.id} />}

				{chat.map((item, index) => {
					const lastIndex = chat.length - 1
					const isLastIndex = index === lastIndex
					return (
						<div key={item.id} id={String(item.id)}>
							{item.content}
							{!isLastIndex && <HorizontalRuler index={index} />}
						</div>
					)
				})}
			</div>
			<div className='flex items-center border-t pl-3'>
				<input
					ref={inputRef}
					placeholder='Type command'
					className={`bottom-0 z-50 w-full bg-transparent py-2 focus-visible:outline-none`}
					type='text'
					value={input}
					onChange={e => setInput(e.target.value)}
					onKeyUp={event => handleSetChat({ event, useStates: { input, setInput, setChat } })}
				/>
				<button
					ref={sendMessageButtonRef}
					className={`flex h-full items-center border-l px-5 ${input.trim().length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
					onClick={event => handleSetChat({ event, useStates: { input, setInput, setChat } })}>
					<PaperAirplaneIcon
						className={`size-5 ${input.trim().length > 0 ? 'text-sky-600' : 'text-gray-400'}`}
					/>
				</button>
			</div>
		</TerminalBodyWrapper>
	)
}
