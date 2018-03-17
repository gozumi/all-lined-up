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
    yearBackgound: document.getElementById('date__year-background'),
    yearGroup: document.getElementById('date__year'),
    yearText: document.getElementById('date__year-text')
  }

  // position the date
  dateGroup.groupTransform.translate.x = elements.screen.width - (elements.screen.width / 3)
  dateGroup.groupTransform.translate.y = elements.screen.height / 2

  // day
  elements.dayBackground.height = elements.screen.height / 3
  elements.dayForeground.width = elements.dayBackground.width = elements.screen.width / 6
  elements.dayText.x = 0
  elements.dayText.y = elements.dayBackground.height

  // month
  elements.monthGroup.groupTransform.translate.x = elements.dayBackground.width
  elements.monthBackground.height = elements.screen.height / 3
  elements.monthForeground.width = elements.monthBackground.width = elements.screen.width / 6
  elements.monthBackground.height = elements.screen.height / 3
  elements.monthBackground.width = elements.screen.width / 6
  elements.monthText.x = 0
  elements.monthText.y = elements.monthBackground.height

  // year
  elements.yearGroup.groupTransform.translate.y = elements.screen.height / 3
  elements.yearBackgound.height = elements.screen.height / 6
  elements.yearBackgound.width = elements.screen.width / 3
  elements.yearText.x = 0
  elements.yearText.y = elements.yearBackgound.height

  return elements
}

function numberOfdaysInMonth (month: number, year: number) {
  return new Date(year, month, 0).getDate()
}
