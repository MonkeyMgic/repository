import { getHours, getMinutes, addMinutes } from 'date-fns'

export const getHour = function (date) {
  return getHours(date)
}

export const getMinute = function (date) {
  return getMinutes(date)
}

export const addMinute = function (date, minutes) {
  return addMinutes(date, minutes)
}
