import { closest } from 'fastest-levenshtein'
import { Dispatch, SetStateAction } from 'react'
import { About } from '../../components/Outputs/About'
import { CommandNotFound } from '../../components/Outputs/CommandNotFound'
import { Experience } from '../../components/Outputs/Experience'
import { Github } from '../../components/Outputs/Github'
import { Help } from '../../components/Outputs/Help'
import { List } from '../../components/Outputs/List'
import { Projects } from '../../components/Outputs/Projects'
import { Secret } from '../../components/Outputs/Secret'
import { Skills } from '../../components/Outputs/Skills'
import { commandsListArray } from '../constants/commandsList'
import { ChatItem } from '../interfaces'
import { Contact } from '../../components/Outputs/Contact'
import { Linkedin } from '../../components/Outputs/Linkedin'
import { Clear } from '../../components/Outputs/Clear'

interface CommandResponse {
	formattedInput: string
	setInput: Dispatch<SetStateAction<string>>
	setChat: Dispatch<SetStateAction<ChatItem[]>>
}

export function handleCommandResponse({ formattedInput, setInput, setChat }: CommandResponse) {
	setTimeout(() => {
		const closestCommand: string = closest(formattedInput, commandsListArray)
		let response: string | JSX.Element | null

		switch (formattedInput) {
			case 'clear':
				response = <Clear setInput={setInput} />
				setChat([])
				break
			case 'list':
				response = <List setInput={setInput} />
				break
			case 'help':
				response = <Help setInput={setInput} />
				break
			case 'about':
				response = <About setInput={setInput} />
				break
			case 'skills':
				response = <Skills setInput={setInput} />
				break
			case 'experience':
				response = <Experience setInput={setInput} />
				break
			case 'projects':
				response = <Projects setInput={setInput} />
				break
			case 'contact':
				response = <Contact setInput={setInput} />
				break
			case 'github':
				response = <Github setInput={setInput} />
				break
			case 'linkedin':
				response = <Linkedin setInput={setInput} />
				break
			case 'secret':
				response = <Secret />
				break
			default:
				response = <CommandNotFound setInput={setInput} closestCommand={closestCommand} />
		}

		const newChatItem: ChatItem = { id: Date.now(), content: response }
		setChat(prevState => [...prevState, newChatItem])
	}, 150)
}
