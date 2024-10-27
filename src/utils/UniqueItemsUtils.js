import { logInfo, logError } from "./CommonUtils.js"

export const changeUniqueItemField = (data, uniqueItemName, field, changedFieldValue) => {
  let uniqueItemFieldChanged = false

  const uniqueItemToChange = data.find((element) => {
    return element.index == uniqueItemName
  })

  if (!uniqueItemToChange) {
    logError(`Couldn't find Unique Item "${uniqueItemName}"`)
    return
  }

  if (uniqueItemToChange[field]) {
    const oldValue = uniqueItemToChange[field]
    uniqueItemToChange[field] = changedFieldValue
    uniqueItemFieldChanged = true

    logInfo(`Changed UniqueItems entry! "${uniqueItemToChange['index']}" Field "${field}" from "${oldValue}" to "${changedFieldValue}"`)
    return
  } else {
    logError(`Unique Item "${uniqueItemName}" does not have a field called "${field}"`)
  }

  if (uniqueItemFieldChanged) {
    logInfo(`changeUniqueItemField was successful`)
  } else {
    logError(`changeUniqueItemField was unsuccessful`)
  }
}

export const makeUniqueItemsRollMaxValues = (data) => {
  let uniqueItemsRollMaxValue = false

  data.map((element, index) => {
    for (let i = 1; i <= 11; i++) {
      const minValueField = `min${i}`
      const maxValueField = `max${i}`

      const minValue = Number(element[minValueField])
      const maxValue = Number(element[maxValueField])

      if (maxValue > minValue) {
        element[minValueField] = maxValue
        uniqueItemsRollMaxValue = true

        logInfo(`Changed UniqueItems entry! "${element['index']}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
      }
    }
  })

  if (uniqueItemsRollMaxValue) {
    logInfo(`makeUniqueItemsRollMaxValues was successful`)
  } else {
    logError(`makeUniqueItemsRollMaxValues was unsuccessful`)
  }
}
