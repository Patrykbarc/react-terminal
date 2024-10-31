import { CodeBracketIcon, FolderIcon } from '@heroicons/react/24/outline'
import { ActualTime } from '../ActualTime/ActualTime'

interface CommandBadgeProps {
  input: string
}

export function CommandBadge({ input }: CommandBadgeProps) {
  const formattedInput = input.trim().toLowerCase()

  return (
    <>
      <div className="mb-2 flex w-full flex-wrap justify-between text-white">
        <div className="hidden flex-wrap sm:flex">
          <div className="block w-fit bg-green-700 px-2">patrykbarc</div>
          <div className="flex w-fit items-center gap-1 bg-sky-600 px-2">
            <FolderIcon className="size-4" /> portfolio
          </div>
          <div className="flex items-center gap-1 bg-neutral-800 px-2">
            <CodeBracketIcon className="size-4" /> {formattedInput}
          </div>
        </div>
        <ActualTime />
      </div>
      <span className="block w-full rounded-sm bg-neutral-800 py-1 pr-2.5 ps-2 text-white sm:hidden">
        $ {formattedInput}
      </span>
    </>
  )
}
