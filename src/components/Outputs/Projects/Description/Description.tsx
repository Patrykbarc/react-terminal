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
                <a href={i} target="_blank">
                  <img src={i} />
                </a>
              </picture>
            ))}
        </div>
      </div>
    )
  )
}
