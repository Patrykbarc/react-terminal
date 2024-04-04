import { commandsList } from '../../utils/constants/commandsList'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'
import { Button } from '../Button/Button'
import { SetStateProps } from '../../utils/interfaces'

export function Help({ setInput }: SetStateProps<string>) {
	return (
		<div className='flex flex-col gap-2'>
			<ButtonsWrapper>
				<ol className='flex w-full flex-col gap-1'>
					{commandsList.map(c => {
						return (
							<li className='flex justify-between gap-3' key={c.cmd}>
								<Button key={c.cmd} onClick={() => setInput(c.cmd)}>
									{c.cmd}
								</Button>
								<span>{c.description}</span>
							</li>
						)
					})}
				</ol>
			</ButtonsWrapper>
		</div>
	)
}
