import { Fragment } from 'react/jsx-runtime'
import { commandsList } from '../../utils/constants/commandsList'
import { Button } from '../Button/Button'
import { SetStateProps } from '../../utils/interfaces'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

// interface HandleSetInput {
// 	handleSetInput: (value: string) => void
// }

export function List({ setInput }: SetStateProps<string>) {
	return (
		<ButtonsWrapper>
			Available commands:
			{commandsList.map(c => {
				return (
					<Fragment key={c.cmd}>
						<Button key={c.cmd} onClick={() => setInput(c.cmd)}>
							{c.cmd}
						</Button>
					</Fragment>
				)
			})}
		</ButtonsWrapper>
	)
}
