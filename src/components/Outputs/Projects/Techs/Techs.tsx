import { ProjectsList } from '../../../../utils/constants/projectsList'

type TechsProps = {
  techs: ProjectsList['techs']
}

export function Techs({ techs }: TechsProps) {
  return (
    techs && (
      <small className="inline bg-neutral-400 bg-opacity-35 px-1 py-0.5 font-bold">
        <span className="font-medium">Technologies used:</span>
        <span className="block">{techs}</span>
      </small>
    )
  )
}
