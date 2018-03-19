import document from 'document'

import { ROOT_ELEMENT_ID } from '../_constants'

export function drawHeartRate (heartRate: number, config: any) {
  config.heartRateValue.text = heartRate
}

export function getHeartRateConfiguration () {
  const root = document.getElementById(ROOT_ELEMENT_ID)
  const heartRateGroup = document.getElementById('heart-rate')

  const elements = {
    heartRateBackground: document.getElementById('heart-rate__background'),
    heartRateValue: document.getElementById('heart-rate__value'),
    screen: {
      height: root.height,
      width: root.width
    }
  }

  // position the heart rate
  heartRateGroup.groupTransform.translate.x = 0
  heartRateGroup.groupTransform.translate.y = elements.screen.height / 2

  elements.heartRateBackground.width = elements.screen.width / 3
  elements.heartRateBackground.height = elements.screen.height / 2

  elements.heartRateValue.x = 0
  elements.heartRateValue.y = elements.heartRateBackground.height

  return elements
}
