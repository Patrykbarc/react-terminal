import { ProjectsList } from '../../../../utils/constants/projectsList'

type DescriptionProps = {
  description: ProjectsList['description']
}

export function Description({ description }: DescriptionProps) {
  return description && <p>{description}</p>
}
