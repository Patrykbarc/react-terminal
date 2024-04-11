import { getActualTime } from '../../utils/functions/getDates'

export function ActualTime() {
	const { actualTime } = getActualTime()
	return <small className='hidden text-neutral-900 sm:block'>{actualTime}</small>
}
