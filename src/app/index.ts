import clock from 'clock'
import { HeartRateSensor } from 'heart-rate'

import { drawDate, getDateConfiguration } from './date-section/main'
import { drawHeartRate, getHeartRateConfiguration } from './heart-rate-section/main'
import { drawTime, getTimeConfiguration } from './time-section/main'

clock.granularity = 'seconds'
clock.ontick = () => {
  drawTime(getTimeConfiguration())
  drawDate(getDateConfiguration())
}

const heartRateMonitor = new HeartRateSensor()
heartRateMonitor.onreading = () => {
  drawHeartRate(heartRateMonitor.heartRate, getHeartRateConfiguration())
}

heartRateMonitor.start()
