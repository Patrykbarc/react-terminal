import { useRef, useState } from 'react'
import { ChatItem, OverflowingChild } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'
import { HorizontalRuler } from '../HorizontalRuler/HorizontalRuler'
import { useMessageScroll } from '../../utils/hooks/useMessageScroll'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'
import { TerminalInput } from '../TerminalInput/TerminalInput'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>([
		{ id: Date.now(), content: <InitialMessage setInput={setInput} /> },
	])
	const [isChildOverflowing, setIsChildOverflowing] = useState<OverflowingChild | null>(null)

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const sendMessageButtonRef = useRef<HTMLButtonElement>(null)

	useMessageScroll({
		chat,
		setIsChildOverflowing,
		refs: { messagesEndRef, inputRef, sendMessageButtonRef },
	})

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
			<TerminalInput
				refs={{ inputRef, sendMessageButtonRef }}
				states={{ input, setInput, setChat }}
			/>
		</TerminalBodyWrapper>
	)
}
