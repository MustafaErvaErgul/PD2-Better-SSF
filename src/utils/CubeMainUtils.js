import { logInfo } from "./CommonUtils.js"

export const addNewCraftingRecipe = (data, newRecipe) => {
  data.unshift(newRecipe)
}

export const makeCraftedItemsRollMaxValues = (data) => {
  let craftedItemsRollMaxValue = false

  data.map((element, index) => {
    if (
      element["description"].includes("hitpower") ||
      element["description"].includes("blood") ||
      element["description"].includes("caster") ||
      element["description"].includes("safety") ||
      element["description"].includes("vampiric") ||
      element["description"].includes("bountiful") ||
      element["description"].includes("brilliant")
    ) {
      for (let i = 1; i <= 5; i++) {
        const minValueField = `mod ${i} min`
        const maxValueField = `mod ${i} max`

        const minValue = Number(element[minValueField])
        const maxValue = Number(element[maxValueField])

        if (maxValue > minValue) {
          element[minValueField] = maxValue
          craftedItemsRollMaxValue = true

          logInfo(`Changed CubeMain entry! "${element['description']}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
        }
      }
    }
  })

  if (craftedItemsRollMaxValue) {
    logInfo(`makeCraftedItemsRollMaxValue was successful`)
  } else {
    logError(`makeCraftedItemsRollMaxValue was unsuccessful`)
  }
}

export const makeCorruptedStatsRollMaxValue = (data) => {
  let corruptedStatsRollMaxValue = false

  data.map((element, index) => {
    if (element["description"].includes("item -> added mod")) {
      for (let i = 1; i <= 5; i++) {
        const modField = `mod ${i}`
        const minValueField = `mod ${i} min`
        const maxValueField = `mod ${i} max`

        const modFieldValue = element[modField]
        const minValue = Number(element[minValueField])
        const maxValue = Number(element[maxValueField])


        if (modFieldValue !== "corrupt" && modFieldValue !== "corruptnum" && maxValue > minValue) {
          element[minValueField] = maxValue
          corruptedStatsRollMaxValue = true

          logInfo(`Changed CubeMain entry! "${element['description']}" Mod "${modFieldValue}" Field "${minValueField}" from "${minValue}" to "${maxValue}"`)
        }
      }
    }
  })

  if (corruptedStatsRollMaxValue) {
    logInfo(`makeCorruptedStatsRollMaxValue was successful`)
  } else {
    logError(`makeCorruptedStatsRollMaxValue was unsuccessful`)
  }
}