import { RefObject } from 'react'
import { ChatItem, OverflowingChild } from '../../utils/interfaces'
import { HorizontalRuler } from '../HorizontalRuler/HorizontalRuler'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'

interface TerminalChatProps {
	chat: ChatItem[]
	messagesEndRef: RefObject<HTMLDivElement>
	isChildOverflowing: OverflowingChild | null
}

export function TerminalChat({ chat, messagesEndRef, isChildOverflowing }: TerminalChatProps) {
	return (
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
	)
}
