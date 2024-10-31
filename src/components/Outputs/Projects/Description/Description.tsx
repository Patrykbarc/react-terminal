import { ProjectsList } from '../../../../utils/constants/projectsList'

type DescriptionProps = {
  description: ProjectsList['description']
  image: ProjectsList['image']
}

export function Description({ description, image }: DescriptionProps) {
  return (
    description && (
      <div>
        <p>{description}</p>
        <div className="mt-6 grid grid-cols-2">
          {image &&
            image.map((i) => (
              <picture key={i}>
                <img src={i} />
              </picture>
            ))}
        </div>
      </div>
    )
  )
}
