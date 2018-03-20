import clock from 'clock'
import { HeartRateSensor } from 'heart-rate'

import { goals, today } from 'user-activity'
import { drawDate, getDateConfiguration } from './date-section/main'
import { drawHeartRate, getHeartRateConfiguration } from './heart-rate-section/main'
import { drawTime, getTimeConfiguration } from './time-section/main'
import { drawUserActivity, getUserActivityConfiguration } from './user-activity/main'

// setup the time & date
clock.granularity = 'seconds'
clock.ontick = () => {
  drawTime(getTimeConfiguration())
  drawDate(getDateConfiguration())
}

// setup the heart rate
const heartRateMonitor = new HeartRateSensor()
heartRateMonitor.onreading = () => {
  drawHeartRate(heartRateMonitor.heartRate, getHeartRateConfiguration())
}
heartRateMonitor.start()

// setup the user activity
const userActivityConfiguration = getUserActivityConfiguration()
drawUserActivity(userActivityConfiguration, goals, today.local)
setInterval(() => {
  drawUserActivity(userActivityConfiguration, goals, today.local)
}, 15000)
