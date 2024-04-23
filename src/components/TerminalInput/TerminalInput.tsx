import { PaperAirplaneIcon } from '@heroicons/react/16/solid'
import { handleSetChat } from '../../utils/functions/handleSetChat'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { ChatItem } from '../../utils/interfaces'

interface TerminalInputProps {
	refs: {
		inputRef: RefObject<HTMLInputElement>
		sendMessageButtonRef: RefObject<HTMLButtonElement>
	}
	states: {
		input: string
		setInput: Dispatch<SetStateAction<string>>
		setChat: Dispatch<SetStateAction<ChatItem[]>>
	}
}

export function TerminalInput({
	refs: { inputRef, sendMessageButtonRef },
	states: { input, setInput, setChat },
}: TerminalInputProps) {
	const inputTrimLength = input.trim().length

	const buttonCursorStyle = inputTrimLength > 0 ? 'cursor-pointer' : 'cursor-default'
	const sendMessageIconStyle = inputTrimLength > 0 ? 'text-sky-600' : 'text-gray-400'

	return (
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
				className={`group flex h-full items-center overflow-hidden border-l px-5 ${buttonCursorStyle}`}
				onClick={event => handleSetChat({ event, useStates: { input, setInput, setChat } })}>
				<PaperAirplaneIcon className={`size-6 ${sendMessageIconStyle}`} />
			</button>
		</div>
	)
}
