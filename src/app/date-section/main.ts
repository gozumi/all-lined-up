import document from 'document'

import { ROOT_ELEMENT_ID } from '../_constants'

/**
 *
 * @param config
 */
export function drawDate (config: any) {
  const today = new Date()
  const currentDay = today.getDate()
  const currentMonth = today.getMonth() - 1
  const currentYear = today.getFullYear()
  const daysInMonth = numberOfdaysInMonth(currentMonth, currentYear)
  const dayUnitHeight = config.dayBackground.height / daysInMonth
  const monthUnitHeight = config.monthBackground.height / 12

  config.dayText.text = currentDay
  config.dayForeground.height = dayUnitHeight * currentDay
  config.dayForeground.y = config.dayBackground.height - config.dayForeground.height

  config.monthText.text = today.getMonth() + 1
  config.monthForeground.height = monthUnitHeight * currentMonth
  config.monthForeground.y = config.monthBackground.height - config.monthForeground.height

  config.yearText.text = today.getFullYear()
}

/**
 *
 */
export function getDateConfiguration () {
  const root = document.getElementById(ROOT_ELEMENT_ID)
  const dateGroup = document.getElementById('date')

  const elements = {
    dayBackground: document.getElementById('date__day-background'),
    dayForeground: document.getElementById('date__day-foreground'),
    dayGroup: document.getElementById('date__day'),
    dayText: document.getElementById('date__day-text'),
    monthBackground: document.getElementById('date__month-background'),
    monthForeground: document.getElementById('date__month-foreground'),
    monthGroup: document.getElementById('date__month'),
    monthText: document.getElementById('date__month-text'),
    screen: {
      height: root.height,
      width: root.width
    },
    yearBackground: document.getElementById('date__year-background'),
    yearGroup: document.getElementById('date__year'),
    yearText: document.getElementById('date__year-text')
  }

  // position the date
  dateGroup.groupTransform.translate.x = 232
  dateGroup.groupTransform.translate.y = 126

  // day
  elements.dayForeground.x = elements.dayBackground.x = 3
  elements.dayForeground.height = elements.dayBackground.height = 81
  elements.dayForeground.width = elements.dayBackground.width = 54
  elements.dayText.x = 0
  elements.dayText.y = elements.dayBackground.height

  // month
  elements.monthGroup.groupTransform.translate.x = 58
  elements.monthForeground.x = elements.monthBackground.x = 2
  elements.monthForeground.height = elements.monthBackground.height = 81
  elements.monthForeground.width = elements.monthBackground.width = 56
  elements.monthText.x = 0
  elements.monthText.y = elements.monthBackground.height

  // year
  elements.yearGroup.groupTransform.translate.y = 81
  elements.yearBackground.x = 3
  elements.yearBackground.y = 3
  elements.yearBackground.height = 40
  elements.yearBackground.width = 116
  elements.yearText.x = 3
  elements.yearText.y = elements.yearBackground.height + 2

  return elements
}

function numberOfdaysInMonth (month: number, year: number) {
  return new Date(year, month, 0).getDate()
}
