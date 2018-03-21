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

  updateDynamicValues('hour', config, hours, 24)
  updateDynamicValues('minute', config, minutes, 60)
  updateDynamicValues('second', config, seconds, 60)
}

/**
 *
 */
export function getTimeConfiguration () {
  const root = document.getElementById(ROOT_ELEMENT_ID)
  const time = document.getElementById('time')

  const elements = {
    hour: {
      background: document.getElementById('time__hour-background'),
      foreground: document.getElementById('time__hour-foreground'),
      group: document.getElementById('time__hour-group'),
      text: document.getElementById('time__hour-text'),
      valueGroup: document.getElementById('time__hour-text-group')
    },
    minute: {
      background: document.getElementById('time__minute-background'),
      foreground: document.getElementById('time__minute-foreground'),
      group: document.getElementById('time__minute-group'),
      text: document.getElementById('time__minute-text'),
      valueGroup: document.getElementById('time__minute-text-group')
    },
    screen: {
      height: root.height,
      width: root.width
    },
    second: {
      background: document.getElementById('time__second-background'),
      foreground: document.getElementById('time__second-foreground'),
      group: document.getElementById('time__second-group'),
      text: document.getElementById('time__second-text'),
      valueGroup: document.getElementById('time__second-text-group')
    }
  }

  const timeBarHeight = 42
  const timeBarWidth = elements.screen.width

  updateTimeBar('hour', elements, timeBarWidth, timeBarHeight)

  updateTimeBar('minute', elements, timeBarWidth, timeBarHeight)
  elements.minute.group.groupTransform.translate.y = timeBarHeight

  updateTimeBar('second', elements, timeBarWidth, timeBarHeight)
  elements.second.group.groupTransform.translate.y = timeBarHeight * 2

  return elements
}

function updateTimeBar (unit: string, config: any, width: number, height: number) {
  config[unit].background.width = width
  config[unit].foreground.height = config[unit].background.height = height - 3
  config[unit].foreground.x = config[unit].background.x = 0
  config[unit].foreground.y = config[unit].background.y = 0
  config[unit].text.x = 54
  config[unit].text.y = 0
  config[unit].text.fontSize = 50
  config[unit].valueGroup.groupTransform.translate.x = 5
  config[unit].valueGroup.groupTransform.translate.y = height - 7
}

function updateDynamicValues (unit: string, config: any, value: number, total: number) {
  const hourWidth = config.screen.width / total
  config[unit].foreground.width = hourWidth * value
  config[unit].text.text = value
}
