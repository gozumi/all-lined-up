import clock from "clock"
import { getClockConfiguration, drawClock } from './time-section/index.js'

// Set up the clock
clock.granularity = "seconds"
clock.ontick = () => drawClock(getClockConfiguration());
