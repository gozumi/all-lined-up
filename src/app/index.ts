import clock from 'clock'

import { drawDate, getDateConfiguration } from './date-section/main'
import { drawTime, getTimeConfiguration } from './time-section/main'

clock.granularity = 'seconds'
clock.ontick = () => {
  drawTime(getTimeConfiguration())
  drawDate(getDateConfiguration())
}
