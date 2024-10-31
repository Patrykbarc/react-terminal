import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Github({ setInput }: SetStateProps<string>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="Github logo"
          className="me-3 size-6"
        />
        <a
          href="https://github.com/Patrykbarc"
          target="_blank"
          className="underline"
        >
          My Github page
        </a>
      </div>
      <ButtonsWrapper>
        Suggested commands:
        <Button onClick={() => setInput('linkedin')}>linkedin</Button>
      </ButtonsWrapper>
    </div>
  )
}
