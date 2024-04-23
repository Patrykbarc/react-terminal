import { useRef, useState } from 'react'
import { ChatItem, OverflowingChild } from '../../utils/interfaces'
import { InitialMessage } from '../Outputs/InitialMessage'
import { TerminalBodyWrapper } from '../TerminalBodyWrapper/TerminalBodyWrapper'
import { useMessageScroll } from '../../utils/hooks/useMessageScroll'
import { TerminalInput } from '../TerminalInput/TerminalInput'
import { TerminalChat } from '../TerminalChat/TerminalChat'

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
			<TerminalChat
				chat={chat}
				messagesEndRef={messagesEndRef}
				isChildOverflowing={isChildOverflowing}
			/>
			<TerminalInput
				refs={{ inputRef, sendMessageButtonRef }}
				states={{ input, setInput, setChat }}
			/>
		</TerminalBodyWrapper>
	)
}
