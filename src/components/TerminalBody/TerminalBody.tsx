import { useRef, useState } from 'react'
import { handleSetChat } from '../../utils/functions/handleSetChat'
import { ChatItem, OverflowingChild } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'
import { HorizontalRuler } from '../HorizontalRuler/HorizontalRuler'
import { useMessageScroll } from '../../utils/hooks/useMessageScroll'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>([
		{ id: Date.now(), content: <InitialMessage setInput={setInput} /> },
	])
	const [isChildOverflowing, setIsChildOverflowing] = useState<OverflowingChild | null>(null)

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	useMessageScroll({ messagesEndRef, inputRef, chat, setIsChildOverflowing })
	console.log(isChildOverflowing)
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
