import { Fragment } from 'react/jsx-runtime'
import { commandsList } from '../../utils/constants/commandsList'
import { Button } from '../Button/Button'
import { SetStateProps } from '../../utils/interfaces'

// interface HandleSetInput {
// 	handleSetInput: (value: string) => void
// }

export function Ls({ setInput }: SetStateProps<string>) {
	return (
		<span className='flex flex-wrap gap-1'>
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
		</span>
	)
}
