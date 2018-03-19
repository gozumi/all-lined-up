import document from 'document'

import { ROOT_ELEMENT_ID } from '../_constants'

/**
 *
 * @param config
 */
export function drawTime (config: any) {
  const totalHours = 24
  const today = new Date()
  const hours = today.getHours() % totalHours
  const minutes = today.getMinutes()
  const seconds = today.getSeconds()

  const hourWidth = config.screen.width / totalHours
  config.hourForeground.width = hourWidth * hours
  config.hourText.text = hours

  const minuteWidth = config.screen.width / 60
  config.minuteForeground.width = minuteWidth * minutes
  config.minuteText.text = minutes

  const secondsWidth = config.screen.width / 60
  config.secondForeground.width = secondsWidth * seconds
  config.secondText.text = seconds
}

/**
 *
 */
export function getTimeConfiguration () {
  const root = document.getElementById(ROOT_ELEMENT_ID)
  const time = document.getElementById('time')

  const elements = {
    hourBackground: document.getElementById('time__hour-background'),
    hourForeground: document.getElementById('time__hour-foreground'),
    hourText: document.getElementById('time__hour-text'),
    minuteBackground: document.getElementById('time__minute-background'),
    minuteForeground: document.getElementById('time__minute-foreground'),
    minuteText: document.getElementById('time__minute-text'),
    screen: {
      height: root.height,
      width: root.width
    },
    secondBackground: document.getElementById('time__second-background'),
    secondForeground: document.getElementById('time__second-foreground'),
    secondText: document.getElementById('time__second-text'),
    timeBarHeight: root.height / 6
  }

  elements.hourBackground.width = elements.screen.width
  elements.hourBackground.height = elements.timeBarHeight
  elements.hourBackground.y = 0
  elements.hourForeground.height = elements.timeBarHeight
  elements.hourForeground.y = 0
  elements.hourText.x = 25
  elements.hourText.y = elements.timeBarHeight

  elements.minuteBackground.width = elements.screen.width
  elements.minuteBackground.height = elements.timeBarHeight
  elements.minuteBackground.y = elements.timeBarHeight
  elements.minuteForeground.height = elements.timeBarHeight
  elements.minuteForeground.y = elements.timeBarHeight
  elements.minuteText.x = 25
  elements.minuteText.y = elements.timeBarHeight * 2

  elements.secondBackground.width = elements.screen.width
  elements.secondBackground.height = elements.timeBarHeight
  elements.secondBackground.y = elements.timeBarHeight * 2
  elements.secondForeground.height = elements.timeBarHeight
  elements.secondForeground.y = elements.timeBarHeight * 2
  elements.secondText.x = 25
  elements.secondText.y = elements.timeBarHeight * 3

  // position the time
  time.groupTransform.translate.x = 0
  time.groupTransform.translate.y = 0

  return elements
}
