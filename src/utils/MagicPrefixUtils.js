import { logInfo, logError } from "./CommonUtils.js"

export const changeMagicPrefixField = (data, prefixName, prefixComment, fieldToChange, changedFieldValue) => {
  let changedMagicPrefixField = false

  const magicPrefixToChange = data.find((element) => {
    return element['Name'] == prefixName && element['*comment'] == prefixComment
  })

  if (!magicPrefixToChange) {
    logError(`Couldn't find MagicPrefix "${prefixName}"`)
    return
  }

  if (!magicPrefixToChange[fieldToChange]) {
    logError(`MagicPrefix "${prefixName}" does not have the Field "${fieldToChange}"`)
    return
  } else {
    const oldValue = magicPrefixToChange[fieldToChange]
    magicPrefixToChange[fieldToChange] = changedFieldValue
    changedMagicPrefixField = true

    logInfo(`Changed MagicPrefix entry! "${magicPrefixToChange['Name']}" Field "${fieldToChange}" from "${oldValue}" to "${changedFieldValue}"`)
  }

  if (changedMagicPrefixField) {
    logInfo(`changeMagicPrefixField was successful`)
  } else {
    logError(`changeMagicPrefixField was unsuccessful`)
  }
}

export const makeMagicPrefixesRollMaxValue = (data) => {
  let magicPrefixesRollMaxValue = false

  data.map((element, index) => {
    for (let i = 1; i <= 9; i++) {
      const minValueField = `mod${i}min`
      const maxValueField = `mod${i}max`

      const minValue = Number(element[minValueField])
      const maxValue = Number(element[maxValueField])

      if (maxValue > minValue) {
        element[minValueField] = maxValue
        magicPrefixesRollMaxValue = true

        logInfo(`Changed MagicPrefix entry! "${element['Name']}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
      }
    }
  })

  if (magicPrefixesRollMaxValue) {
    logInfo(`makeMagicPrefixesRollMaxValue was successful`)
  } else {
    logError(`makeMagicPrefixesRollMaxValue was unsuccessful`)
  }
}