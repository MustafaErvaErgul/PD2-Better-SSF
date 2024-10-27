import { logInfo, logError } from "./CommonUtils.js"

export const makeSetItemsRollMaxValues = (data) => {
  let setItemsRollMaxValue = false

  data.map((element, index) => {
    for (let i = 1; i <= 9; i++) {
      const minValueField = `min${i}`
      const maxValueField = `max${i}`

      const minValue = Number(element[minValueField])
      const maxValue = Number(element[maxValueField])

      if (maxValue > minValue) {
        element[minValueField] = maxValue
        setItemsRollMaxValue = true

        logInfo(`Changed SetItems entry! "${element['index']}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
      }
    }
  })

  if (setItemsRollMaxValue) {
    logInfo(`makeSetItemsRollMaxValue was successful`)
  } else {
    logError(`makeSetItemsRollMaxValue was unsuccessful`)
  }
}