import { ProjectsList } from "../../../../utils/constants/projectsList";
import { Button } from "../../../Button/Button";

type GitUrlProps ={ 
    gitUrl: ProjectsList['gitUrl']
}

export function GitUrl({gitUrl}: GitUrlProps) {
  return (
    gitUrl && (
      <Button>
        <a href={gitUrl} className="flex items-center gap-1" target="_blank">
          <img
            className="size-4 invert"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub logo"
          />
          GitHub Repository
        </a>
      </Button>
    )
  )
}
