import { DeployUrl } from '../Links/DeployUrl'
import { GitUrl } from '../Links/GitUrl'

type Links = string | undefined

type BadgesProps = {
  gitUrl: Links
  deploy: Links
}

export function Badges({ gitUrl, deploy }: BadgesProps) {
  const links = [gitUrl, deploy]

  return (
    links && (
      <div className="flex gap-1.5">
        <GitUrl gitUrl={gitUrl} />
        <DeployUrl url={deploy} />
      </div>
    )
  )
}
