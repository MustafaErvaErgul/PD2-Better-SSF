import { logInfo, logError } from "./CommonUtils.js"

export const changeMagicSuffixField = (data, suffixName, suffixComment, fieldToChange, changedFieldValue) => {
  let changedMagicSuffixField = false

  const magicSuffixToChange = data.find((element) => {
    return element['Name'] == suffixName && element['*comment'] == suffixComment
  })

  if (!magicSuffixToChange) {
    logError(`Couldn't find MagicSuffix "${suffixName}"`)
    return
  }

  if (!magicSuffixToChange[fieldToChange]) {
    logError(`MagicSuffix "${suffixName}" does not have the Field "${fieldToChange}"`)
    return
  } else {
    const oldValue = magicSuffixToChange[fieldToChange]
    magicSuffixToChange[fieldToChange] = changedFieldValue
    changedMagicSuffixField = true

    logInfo(`Changed MagicSuffix entry! "${magicSuffixToChange['Name']}" Field "${fieldToChange}" from "${oldValue}" to "${changedFieldValue}"`)
  }

  if (changedMagicSuffixField) {
    logInfo(`changeMagicSuffixField was successful`)
  } else {
    logError(`changeMagicSuffixField was unsuccessful`)
  }
}

export const makeMagicSuffixesRollMaxValue = (data) => {
  let magicSuffixesRollMaxValue = false

  data.map((element, index) => {
    for (let i = 1; i <= 9; i++) {
      const minValueField = `mod${i}min`
      const maxValueField = `mod${i}max`

      const minValue = Number(element[minValueField])
      const maxValue = Number(element[maxValueField])

      if (maxValue > minValue) {
        element[minValueField] = maxValue
        magicSuffixesRollMaxValue = true

        logInfo(`Changed MagicSuffix entry! "${element['Name']}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
      }
    }
  })

  if (magicSuffixesRollMaxValue) {
    logInfo(`makeMagicSuffixesRollMaxValue was successful`)
  } else {
    logError(`makeMagicSuffixesRollMaxValue was unsuccessful`)
  }
}