import { daysMapping } from '../constants/daysListMapping'
import { monthsMapping } from '../constants/monthsMapping'

export const getActualTime = () => {
	const date = new Date()
	const day = date.getDay()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	const actualDate = `Today is ${daysMapping[day]}, ${monthsMapping[month]} ${year}`
	const actualTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`

	return { actualDate, actualTime }
}

const formatTime = (time: number) => {
	const formattedTime = time < 10 ? `0${time}` : time

	return formattedTime
}
