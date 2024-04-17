import { Dispatch, RefObject, SetStateAction, useEffect } from 'react'
import { ChatItem, OverflowingChild } from '../interfaces'

interface UseMessageScrollParams {
	chat: ChatItem[]
	messagesEndRef: RefObject<HTMLDivElement>
	inputRef: RefObject<HTMLInputElement>
	setIsChildOverflowing: Dispatch<SetStateAction<OverflowingChild | null>>
}

export function useMessageScroll({
	chat,
	messagesEndRef,
	inputRef,
	setIsChildOverflowing,
}: UseMessageScrollParams) {
	useEffect(() => {
		if (messagesEndRef !== null && inputRef !== null) {
			const messagesRef = messagesEndRef.current

			function handleScrollToBottom() {
				if (messagesRef) {
					messagesRef.scrollTop = messagesRef?.scrollHeight
				}
			}

			function handleSetInputFocus() {
				if (messagesRef) {
					messagesRef.addEventListener('click', () => {
						inputRef.current !== null && inputRef.current.focus()
					})
				}
			}

			function handleScrollToTop() {
				const isChildOverflowing = checkDivHeight()

				if (isChildOverflowing?.isOverflowing) {
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
					}
				}
			}

			handleScrollToBottom()
			handleSetInputFocus()
			handleScrollToTop()
		}
	}, [chat, messagesEndRef, inputRef, setIsChildOverflowing])
}
