import { daysMapping } from '../constants/daysListMapping'
import { monthsMapping } from '../constants/monthsMapping'

const date = new Date()
const day = date.getDay()
const month = date.getMonth()
const year = date.getFullYear()
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()

export const actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

export const actualDate = `Today is ${daysMapping[day]}, ${monthsMapping[month]} ${year}`
