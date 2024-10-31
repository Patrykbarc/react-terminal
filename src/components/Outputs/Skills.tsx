import { skills } from '../../utils/constants/skillsList'
import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Skills({ setInput }: SetStateProps<string>) {
  return (
    <div className="flex flex-col gap-3">
      <p>My tech stack:</p>
      <ol className="grid gap-y-2 sm:grid-cols-3 sm:gap-x-2 sm:gap-y-3">
        {skills.map(({ technology, icon, alt }) => {
          return (
            <li className="flex items-center" key={technology}>
              <img src={icon} alt={alt} className="me-3 size-6" />
              <p>{technology}</p>
            </li>
          )
        })}
      </ol>

      <ButtonsWrapper>
        Suggested commands:
        <Button onClick={() => setInput('experience')}>experience</Button>
        <Button onClick={() => setInput('projects')}>projects</Button>
      </ButtonsWrapper>
    </div>
  )
}
