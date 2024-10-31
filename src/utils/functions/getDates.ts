import { daysMapping } from '../constants/daysListMapping'
import { monthsMapping } from '../constants/monthsMapping'

export const getActualTime = () => {
  const date = new Date()
  const day = date.getDay()
  const monthDay = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const actualDate = `Today is ${daysMapping[day]}, ${formatNumbers(monthDay)} ${monthsMapping[month]} ${year}`
  const actualTime = `${formatNumbers(hours)}:${formatNumbers(minutes)}:${formatNumbers(seconds)}`

  return { actualDate, actualTime }
}

const formatNumbers = (number: number) => {
  const formattedNumber = number < 10 ? `0${number}` : number

  return formattedNumber
}
