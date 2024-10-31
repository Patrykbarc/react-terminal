import { ProjectsList } from '../../../../utils/constants/projectsList'

type TechsProps = {
  techs: ProjectsList['techs']
}

export function Techs({ techs }: TechsProps) {
  return techs && <small className="font-semibold">{techs}</small>
}
