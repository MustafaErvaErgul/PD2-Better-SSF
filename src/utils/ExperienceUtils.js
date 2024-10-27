import { logInfo } from "./CommonUtils.js"

export const makeLevelingEasier = (data) => {
  let levelingMadeEasier = false

  data.map((element, index) => {
    const elementLevel = Number(element['Level'])

    if (element['Level'] && elementLevel >= 1 && elementLevel <= 89) {
      element['ExpRatio'] = 2048
      levelingMadeEasier = true

      logInfo(`Changed Experience entry! Level "${element['Level']}" ExpRatio changed to 2048`)
    }

    if (element['Level'] && elementLevel >= 90 && elementLevel <= 94) {
      element['ExpRatio'] = 1024
      levelingMadeEasier = true

      logInfo(`Changed Experience entry! Level "${element['Level']}" ExpRatio changed to 1024`)
    }
  })

  if (levelingMadeEasier) {
    logInfo(`makeLevelingEasier was successful`)
  } else {
    logError(`makeLevelingEasier was unsuccessful`)
  }
}