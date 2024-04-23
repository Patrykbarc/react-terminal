import { Dispatch, RefObject, SetStateAction, useEffect } from 'react'
import { ChatItem, OverflowingChild } from '../interfaces'

interface UseMessageScrollParams {
	chat: ChatItem[]
	setIsChildOverflowing: Dispatch<SetStateAction<OverflowingChild | null>>
	refs: {
		messagesEndRef: RefObject<HTMLDivElement>
		inputRef: RefObject<HTMLInputElement>
		sendMessageButtonRef: RefObject<HTMLButtonElement>
	}
}

export function useMessageScroll({
	chat,
	setIsChildOverflowing,
	refs: { messagesEndRef, inputRef, sendMessageButtonRef },
}: UseMessageScrollParams) {
	useEffect(() => {
		if (messagesEndRef !== null && inputRef !== null) {
			const messagesRef = messagesEndRef.current
			const sendMessageRef = sendMessageButtonRef.current

			function handleScrollToBottom() {
				if (messagesRef) {
					messagesRef.scrollTop = messagesRef?.scrollHeight
				}
			}

			function handleSetInputFocus() {
				const refs = [messagesRef, sendMessageRef]

				refs.forEach(ref => {
					ref?.addEventListener('click', () => {
						inputRef.current !== null && inputRef.current.focus()
					})
				})
			}

			function handleScrollToTop() {
				const isChildOverflowing = checkDivHeight()

				if (isChildOverflowing !== undefined) {
					setIsChildOverflowing(isChildOverflowing)
				}
			}

			function checkDivHeight() {
				if (messagesRef?.lastChild !== null && messagesRef !== null) {
					const lastChild = messagesRef?.lastChild as HTMLElement

					const lastChildHeight = lastChild?.clientHeight
					const divHeight = messagesRef?.clientHeight

					if (lastChildHeight > divHeight) {
						return { isOverflowing: true, id: lastChild.id }
					} else {
						return { isOverflowing: false, id: '' }
					}
				}
			}

			handleScrollToBottom()
			handleSetInputFocus()
			handleScrollToTop()
		}
	}, [chat, messagesEndRef, inputRef, setIsChildOverflowing])
}
