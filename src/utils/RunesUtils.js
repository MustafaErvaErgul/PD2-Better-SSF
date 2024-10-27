import { logInfo, logError } from "./CommonUtils.js"

export const makeRunewordsRollMaxValues = (data) => {
  let runewordsRollMaxValue = false

  data.map((element, index) => {
    for (let i = 1; i <= 7; i++) {
      const minValueField = `T1Min${i}`
      const maxValueField = `T1Max${i}`

      const minValue = Number(element[minValueField])
      const maxValue = Number(element[maxValueField])

      if (maxValue > minValue) {
        element[minValueField] = maxValue
        runewordsRollMaxValue = true

        logInfo(`Changed Runes entry! "${element['Rune Name']}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
      }
    }
  })

  if (runewordsRollMaxValue) {
    logInfo(`makeRunewordsRollMaxValues was successful`)
  } else {
    logError(`makeRunewordsRollMaxValues was unsuccessful`)
  }
}