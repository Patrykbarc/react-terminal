import { getActualTime } from '../../utils/functions/getDates'
import { SetStateProps } from '../../utils/interfaces'
import { ActualTime } from '../ActualTime/ActualTime'
import { Button } from '../Button/Button'

export function Clear({ setInput }: SetStateProps<string>) {
  const { actualDate } = getActualTime()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <small>{actualDate}</small>
        <ActualTime />
      </div>
      <p>
        Type <Button onClick={() => setInput('list')}>list</Button> to show list
        of available commands. Or if you want to check the description of each
        command type <Button onClick={() => setInput('help')}>help</Button>
      </p>
    </div>
  )
}
