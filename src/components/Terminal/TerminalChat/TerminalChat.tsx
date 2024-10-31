import { ReactNode, RefObject } from 'react'
import { ChatItem } from '../../../utils/types'
import { HorizontalRuler } from '../../HorizontalRuler/HorizontalRuler'

interface TerminalChatProps {
  chat: ChatItem[]
  messagesEndRef: RefObject<HTMLDivElement>
  children: ReactNode
}

export function TerminalChat({
  chat,
  messagesEndRef,
  children
}: TerminalChatProps) {
  return (
    <div
      ref={messagesEndRef}
      className="flex h-full flex-col gap-1 overflow-y-scroll break-words px-3 pb-4 pt-2"
    >
      {children}
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
