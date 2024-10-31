import { commandsList } from '../../utils/constants/commandsList'
import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Help({ setInput }: SetStateProps<string>) {
  return (
    <div className="flex flex-col gap-2">
      <ButtonsWrapper>
        <ol className="flex w-full flex-col gap-1">
          {commandsList.map((c) => {
            return (
              <li className="grid grid-cols-3 gap-3" key={c.cmd}>
                <Button key={c.cmd} onClick={() => setInput(c.cmd)}>
                  {c.cmd}
                </Button>
                <p className="col-span-2">{c.description}</p>
              </li>
            )
          })}
        </ol>
      </ButtonsWrapper>
    </div>
  )
}
