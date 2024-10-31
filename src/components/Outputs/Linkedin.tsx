import { SetStateProps } from '../../utils/interfaces'
import { Button } from '../Button/Button'
import { ButtonsWrapper } from '../ButtonsWrapper/ButtonsWrapper'

export function Linkedin({ setInput }: SetStateProps<string>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn logo"
          className="me-3 size-6"
        />
        <a
          href="https://www.linkedin.com/in/patryk-bar%C4%87/"
          target="_blank"
          className="underline"
        >
          My LinkedIn profile
        </a>
      </div>
      <ButtonsWrapper>
        Suggested command:
        <Button onClick={() => setInput('secret')}>secret 🤫</Button>
      </ButtonsWrapper>
    </div>
  )
}
