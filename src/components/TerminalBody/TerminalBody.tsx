import { useRef, useState } from 'react'
import { ChatItem, OverflowingChild } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'
import { useMessageScroll } from '../../utils/hooks/useMessageScroll'
import { TerminalInput } from '../TerminalInput/TerminalInput'
import { TerminalChat } from '../TerminalChat/TerminalChat'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'

export function TerminalContainer() {
	const [input, setInput] = useState('')
	const [chat, setChat] = useState<ChatItem[]>([
		{ id: Date.now(), content: <InitialMessage setInput={setInput} /> },
	])
	const [isChildOverflowing, setIsChildOverflowing] = useState<OverflowingChild | null>(null)

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const sendMessageButtonRef = useRef<HTMLButtonElement>(null)
	const scrollToTopRef = useRef<HTMLAnchorElement>(null)

	useMessageScroll({
		chat,
		setIsChildOverflowing,
		refs: { messagesEndRef, inputRef, sendMessageButtonRef, scrollToTopRef },
	})

	return (
		<TerminalBodyWrapper>
			<TerminalChat chat={chat} messagesEndRef={messagesEndRef}>
				<ScrollToTop
					scrollToTopRef={scrollToTopRef}
					id={isChildOverflowing !== null ? isChildOverflowing.id : ''}
					className={isChildOverflowing ? 'opacity-100' : 'opacity-0'}
				/>
			</TerminalChat>
			<TerminalInput
				refs={{ inputRef, sendMessageButtonRef }}
				states={{ input, setInput, setChat }}
			/>
		</TerminalBodyWrapper>
	)
}
