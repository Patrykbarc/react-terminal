import { getActualTime } from '../../utils/functions/getDates'

export function ActualTime() {
	const { actualTime } = getActualTime()
	return <small className='text-neutral-900'>{actualTime}</small>
}
