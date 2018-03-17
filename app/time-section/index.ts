import document from "document"

/**
*
* @param 
*/
export function drawClock(config: any) {
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
export function getClockConfiguration() {
  const root = document.getElementById('clock')
  
  const elements = {
    screen: {
      height: root.height,
      width: root.width
    },
    clockBarHeight: root.height / 6,
    hourBackground: document.getElementById("hour-background"),
    hourForeground: document.getElementById("hour-foreground"),
    hourText: document.getElementById("hour-text"),
    minuteBackground: document.getElementById("minute-background"),
    minuteForeground: document.getElementById("minute-foreground"),
    minuteText: document.getElementById("minute-text"),
    secondBackground: document.getElementById("second-background"),
    secondForeground: document.getElementById("second-foreground"),
    secondText: document.getElementById("second-text")
  }
   
  elements.hourBackground.height = elements.clockBarHeight
  elements.hourBackground.y = 0
  elements.hourForeground.height = elements.clockBarHeight
  elements.hourForeground.y = 0  
  elements.hourText.y = elements.clockBarHeight

  elements.minuteBackground.height = elements.clockBarHeight
  elements.minuteBackground.y = elements.clockBarHeight
  elements.minuteForeground.height = elements.clockBarHeight
  elements.minuteForeground.y = elements.clockBarHeight
  elements.minuteText.y = elements.clockBarHeight * 2

  elements.secondBackground.height = elements.clockBarHeight
  elements.secondBackground.y = elements.clockBarHeight * 2
  elements.secondForeground.height = elements.clockBarHeight
  elements.secondForeground.y = elements.clockBarHeight * 2
  elements.secondText.y = elements.clockBarHeight * 3
  
  return elements
}
