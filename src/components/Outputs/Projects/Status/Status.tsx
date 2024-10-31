import { ProjectsList } from '../../../../utils/constants/projectsList'
import { Badge } from '../../../Badge/Badge'

type StatusProps = {
  name: ProjectsList['name']
  status: ProjectsList['status']
}

export function Status({ name, status }: StatusProps) {
  return (
    <div className="flex gap-2">
      <p className="text-xl font-bold">{name}</p>
      {status === 'development' && (
        <Badge size="sm" variant="outline">
          In progress
        </Badge>
      )}
    </div>
  )
}
