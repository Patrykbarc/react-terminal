import { Dispatch, RefObject, SetStateAction, useEffect } from 'react'
import { ChatItem, OverflowingChild } from '../interfaces'

interface UseMessageScrollParams {
  chat: ChatItem[]
  setIsChildOverflowing: Dispatch<SetStateAction<OverflowingChild | null>>
  refs: {
    messagesEndRef: RefObject<HTMLDivElement>
    inputRef: RefObject<HTMLInputElement>
    sendMessageButtonRef: RefObject<HTMLButtonElement>
    scrollToTopRef: RefObject<HTMLAnchorElement>
  }
}

export function useMessageScroll({
  chat,
  setIsChildOverflowing,
  refs: { messagesEndRef, inputRef, sendMessageButtonRef, scrollToTopRef }
}: UseMessageScrollParams) {
  useEffect(() => {
    const messagesEndRefCurrent = messagesEndRef.current
    const sendMessageButtonRefCurrent = sendMessageButtonRef.current
    const scrollToTopRefCurrent = scrollToTopRef.current
    const inputCurrent = inputRef.current

    const setupEventListeners = () => {
      messagesEndRefCurrent?.addEventListener(
        'scroll',
        checkOverflowAndPosition
      )
      messagesEndRefCurrent?.addEventListener('click', focusInput)
      sendMessageButtonRefCurrent?.addEventListener('click', focusInput)
      scrollToTopRefCurrent?.addEventListener('click', focusInput)
    }

    const removeEventListeners = () => {
      messagesEndRefCurrent?.removeEventListener(
        'scroll',
        checkOverflowAndPosition
      )
      messagesEndRefCurrent?.removeEventListener('click', focusInput)
      sendMessageButtonRefCurrent?.removeEventListener('click', focusInput)
      scrollToTopRefCurrent?.removeEventListener('click', focusInput)
    }

    const checkOverflowAndPosition = () => {
      const lastChild = messagesEndRefCurrent?.lastChild as HTMLElement
      if (lastChild && messagesEndRefCurrent) {
        const isOverflowing =
          lastChild.clientHeight > messagesEndRefCurrent.clientHeight
        const isScrolledToBottom =
          messagesEndRefCurrent.scrollTop +
            messagesEndRefCurrent.clientHeight >=
          lastChild.offsetTop + lastChild.clientHeight

        setIsChildOverflowing(
          isOverflowing && isScrolledToBottom
            ? { isOverflowing: true, id: lastChild.id }
            : null
        )
      }
    }

    const focusInput = () => {
      setTimeout(() => {
        if (inputCurrent) {
          inputCurrent.focus()
          const length = inputCurrent.value.length
          inputCurrent.setSelectionRange(length, length)
        }
      }, 100)
    }

    const scrollToBottom = () => {
      if (messagesEndRefCurrent) {
        messagesEndRefCurrent.scrollTop = messagesEndRefCurrent.scrollHeight
      }
    }

    setupEventListeners()
    checkOverflowAndPosition()
    scrollToBottom()

    return removeEventListeners
  }, [
    chat,
    messagesEndRef,
    inputRef,
    setIsChildOverflowing,
    sendMessageButtonRef,
    scrollToTopRef
  ])
}
