import document from 'document'

import { ROOT_ELEMENT_ID } from '../_constants'

/**
 *
 * @param heartRate
 * @param config
 */
export function drawHeartRate (heartRate: number, config: any) {
  config.heartRateValue.text = heartRate
}

/**
 *
 */
export function getHeartRateConfiguration () {
  const root = document.getElementById(ROOT_ELEMENT_ID)
  const heartRateGroup = document.getElementById('heart-rate')

  const elements = {
    heartRateBackground: document.getElementById('heart-rate__background'),
    heartRateValue: document.getElementById('heart-rate__value'),
    heartRateValueGroup: document.getElementById('heart-rate__value-group'),
    screen: {
      height: root.height,
      width: root.width
    }
  }

  // position the heart rate
  heartRateGroup.groupTransform.translate.x = 0
  heartRateGroup.groupTransform.translate.y = 126

  elements.heartRateBackground.width = 42
  elements.heartRateBackground.height = 124

  elements.heartRateValue.x = -5
  elements.heartRateValue.y = -4
  elements.heartRateValueGroup.groupTransform.rotate.angle = 90
  elements.heartRateValueGroup.groupTransform.translate.y = elements.heartRateBackground.height

  return elements
}
