import {
  ProjectsList,
  projectsList
} from '../../../utils/constants/projectsList'
import { SetStateProps } from '../../../utils/types'
import { Button } from '../../Button/Button'
import { ButtonsWrapper } from '../../ButtonsWrapper/ButtonsWrapper'
import { Description } from './Description/Description'
import { DeployUrl } from './Links/DeployUrl'
import { GitUrl } from './Links/GitUrl'
import { Status } from './Status/Status'
import { Techs } from './Techs/Techs'

export function Projects({ setInput }: SetStateProps<string>) {
  return (
    <>
      <ol>
        {projectsList.map(
          ({
            name,
            status,
            description,
            gitUrl,
            techs,
            deploy,
            image
          }: ProjectsList) => {
            return (
              <li
                className="mb-3 border-b border-gray-200 border-opacity-50 pb-3 last-of-type:border-none"
                key={name}
              >
                <div className="flex flex-col gap-3">
                  <Status name={name} status={status} />
                  <Description description={description} image={image} />
                  <Techs techs={techs} />

                  {gitUrl ||
                    (deploy && (
                      <div className="flex gap-1.5">
                        <GitUrl gitUrl={gitUrl} />
                        <DeployUrl url={deploy} />
                      </div>
                    ))}
                </div>
              </li>
            )
          }
        )}
      </ol>
      <ButtonsWrapper>
        Suggested commands:
        <Button onClick={() => setInput('contact')}>contact</Button>
      </ButtonsWrapper>
    </>
  )
}
