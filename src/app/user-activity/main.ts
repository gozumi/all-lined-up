import document from 'document'

import { ROOT_ELEMENT_ID } from '../_constants'

/**
 *
 * @param config
 */
export function drawUserActivity (config: any, goals: any, today: any) {
  updateDynamicValues('steps', config, today, goals)
  updateDynamicValues('distance', config, today, goals)
  updateDynamicValues('elevationGain', config, today, goals)
  updateDynamicValues('calories', config, today, goals)
  updateDynamicValues('activeMinutes', config, today, goals)
}

/**
 *
 */
export function getUserActivityConfiguration () {
  const root = document.getElementById(ROOT_ELEMENT_ID)
  const userActivityGroup = document.getElementById('user-activity')

  const elements = {
    activeMinutes: {
      background: document.getElementById('user-activity__time-background'),
      foreground: document.getElementById('user-activity__time-foreground'),
      group: document.getElementById('user-activity__time'),
      value: document.getElementById('user-activity__time-value-text'),
      valueGroup: document.getElementById('user-activity__time-value-text-group')
    },
    calories: {
      background: document.getElementById('user-activity__energy-background'),
      foreground: document.getElementById('user-activity__energy-foreground'),
      group: document.getElementById('user-activity__energy'),
      value: document.getElementById('user-activity__energy-value-text'),
      valueGroup: document.getElementById('user-activity__energy-value-text-group')
    },
    distance: {
      background: document.getElementById('user-activity__distance-background'),
      foreground: document.getElementById('user-activity__distance-foreground'),
      group: document.getElementById('user-activity__distance'),
      value: document.getElementById('user-activity__distance-value-text'),
      valueGroup: document.getElementById('user-activity__distance-value-text-group')
    },
    elevationGain: {
      background: document.getElementById('user-activity__floors-background'),
      foreground: document.getElementById('user-activity__floors-foreground'),
      group: document.getElementById('user-activity__floors'),
      value: document.getElementById('user-activity__floors-value-text'),
      valueGroup: document.getElementById('user-activity__floors-value-text-group')
    },
    screen: {
      height: root.height,
      width: root.width
    },
    steps: {
      background: document.getElementById('user-activity__steps-background'),
      foreground: document.getElementById('user-activity__steps-foreground'),
      value: document.getElementById('user-activity__steps-value-text'),
      valueGroup: document.getElementById('user-activity__steps-value-text-group')
    }
  }

  const activityBarWidth = 38
  const activityBarHeight = 124

  // position the user activity
  userActivityGroup.groupTransform.translate.x = 42
  userActivityGroup.groupTransform.translate.y = 126

  updateActivityBar('steps', elements, activityBarWidth, activityBarHeight)

  updateActivityBar('distance', elements, activityBarWidth, activityBarHeight)
  elements.distance.group.groupTransform.translate.x = activityBarWidth

  updateActivityBar('elevationGain', elements, activityBarWidth, activityBarHeight)
  elements.elevationGain.group.groupTransform.translate.x = activityBarWidth * 2

  updateActivityBar('calories', elements, activityBarWidth, activityBarHeight)
  elements.calories.group.groupTransform.translate.x = activityBarWidth * 3

  updateActivityBar('activeMinutes', elements, activityBarWidth, activityBarHeight)
  elements.activeMinutes.group.groupTransform.translate.x = activityBarWidth * 4

  return elements
}

/**
 * Updates the passed in configuration for the activity specified.
 * @param activity The activity to update the configuration for
 * @param barConfig The activity bar configurartion
 * @param width The width of the activity bar
 * @param height The height of the activity bar
 */
function updateActivityBar (activity: string, barConfig: any, width: number, height: number) {
  // set up user steps
  barConfig[activity].foreground.x = barConfig[activity].background.x = 3
  barConfig[activity].foreground.width = barConfig[activity].background.width = width - 3
  barConfig[activity].foreground.height = barConfig[activity].background.height = height
  barConfig[activity].value.x = -3
  barConfig[activity].value.y = -11
  barConfig[activity].valueGroup.groupTransform.rotate.angle = 90
  barConfig[activity].valueGroup.groupTransform.translate.y = height
}

/**
 * Updates a specific activity's bar config based on the user's activities and their goals.
 * @param activity The activity to update the configuration for
 * @param barConfig The activity bar configurartion
 * @param today The local device activities recorded by the user today
 * @param goals The user goals
 */
function updateDynamicValues (activity: string, barConfig: any, today: any, goals: any) {
  barConfig[activity].value.text = today[activity]
  barConfig[activity].foreground.height =
    today[activity] < goals[activity] ?
      (today[activity] / goals[activity]) * barConfig[activity].background.height :
      barConfig[activity].background.height
  barConfig[activity].foreground.y = barConfig[activity].background.height - barConfig[activity].foreground.height
}
