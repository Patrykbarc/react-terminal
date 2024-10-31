import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { ProjectsList } from '../../../../utils/constants/projectsList'
import { Button } from '../../../Button/Button'

type DeployUrlProps = {
  url: ProjectsList['deploy']
}

export function DeployUrl({ url }: DeployUrlProps) {
  return (
    url && (
      <Button>
        <a href={url} className="flex items-center gap-1" target="_blank">
          <GlobeAltIcon className="size-4" /> Website
        </a>
      </Button>
    )
  )
}
