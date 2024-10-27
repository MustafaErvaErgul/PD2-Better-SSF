import { logInfo, logError } from "./CommonUtils.js"

export const makeActBossesQuestBugged = (data) => {
  let changedActBossesDrops = false

  const bossMapping = {
    "Andariel": "Andarielq",
    "Andariel (N)": "Andarielq (N)",
    "Andariel (H)": "Andarielq (H)",
    "Duriel - Base": "Durielq - Base",
    "Duriel (N) - Base": "Durielq (N) - Base",
    "Duriel (H) - Base": "Durielq (H) - Base",
    "Mephisto": "Mephistoq",
    "Mephisto (N)": "Mephistoq (N)",
    "Mephisto (H)": "Mephistoq (H)",
    "Diablo": "Diabloq",
    "Diablo (N)": "Diabloq (N)",
    "Diablo (H)": "Diabloq (H)",
    "Baal": "Baalq",
    "Baal (N)": "Baalq (N)",
    "Baal (H)": "Baalq (H)"
  }

  data.map((treasureClass) => {
    const bossName = treasureClass['Treasure Class']
    const questBossName = bossMapping[bossName]

    if (questBossName) {
      const questBoss = data.find(b => b['Treasure Class'] === questBossName)

      if (questBoss) {
        // Tracker for changes made
        const fieldChangedTracker = {}

        Object.keys(questBoss).forEach((key) => {
          if (key !== 'Treasure Class') {
            // Store original value for comparison
            const originalValue = treasureClass[key]
            const newValue = questBoss[key]

            // Update only if values are different
            if (originalValue !== newValue) {
              treasureClass[key] = newValue
              fieldChangedTracker[key] = true // Track that this field was changed
              changedActBossesDrops = true
            }
          }
        });

        // Log if any fields were changed
        const changedFields = Object.keys(fieldChangedTracker).filter(field => fieldChangedTracker[field])
        if (changedFields.length > 0) {
          logInfo(`Changed TreasureClassEx entry! Updated "${treasureClass['Treasure Class']}" with values from "${questBoss['Treasure Class']}" for fields: ${changedFields.join(', ')}`)
        }
      }
    }
  })

  if (changedActBossesDrops) {
    logInfo(`makeActBossesQuestBugged was successful`)
  } else {
    logError(`makeActBossesQuestBugged was unsuccessful`)
  }
}

export const addNewTreasureClass = (data, newTreasureClass) => {
  data.unshift(newTreasureClass)
}

export const addItemToTreasureClass = (data, treasureClassName, newItemName, newItemProb) => {
  let itemAddedToTreasureClass = false

  const treasureClassToChange = data.find((element) => {
    return element['Treasure Class'] == treasureClassName
  })

  if (!treasureClassToChange) {
    logError(`Couldn't find Treasure Class ${treasureClassName}`)
    return
  }

  for (let i = 1; i <= 10; i++) {
    const itemField = `Item${i}`
    const probField = `Prob${i}`

    // There is an empty item field where we can add the new item.
    if (!treasureClassToChange[itemField]) {
      treasureClassToChange[itemField] = newItemName
      treasureClassToChange[probField] = newItemProb
      itemAddedToTreasureClass = true

      logInfo(`Changed TreasureClassEx entry! Added Item "${newItemName}" to Treasure Class "${treasureClassName}"`)
      return
    }
  }

  if (itemAddedToTreasureClass) {
    logInfo(`addItemToTreasureClass was successful`)
  } else {
    logError(`addItemToTreasureClass was unsuccessful`)
  }
}

export const removeItemFromTreasureClass = (data, treasureClassName, itemName) => {
  let itemRemovedFromTreasureClass = false

  const treasureClassToChange = data.find((element) => {
    return element['Treasure Class'] == treasureClassName
  })

  if (!treasureClassToChange) {
    logError(`Couldn't find Treasure Class ${treasureClassName}`)
    return
  }

  for (let i = 1; i <= 10; i++) {
    const itemField = `Item${i}`
    const probField = `Prob${i}`

    if (treasureClassToChange[itemField] == itemName) {
      treasureClassToChange[itemField] = null
      treasureClassToChange[probField] = null
      itemRemovedFromTreasureClass = true

      logInfo(`Changed TreasureClassEx entry! Removed Item "${itemName}" from Treasure Class "${treasureClassName}"`)
      return
    }
  }

  if (itemRemovedFromTreasureClass) {
    logInfo(`removeItemFromTreasureClass was successful`)
  } else {
    logError(`removeItemFromTreasureClass was unsuccessful`)
  }
}

export const changeItemDropProb = (data, treasureClassName, itemName, changedItemProb) => {
  let itemDropProbChanged = false

  const treasureClassToChange = data.find((element) => {
    return element['Treasure Class'] == treasureClassName
  })

  if (!treasureClassToChange) {
    logError(`Couldn't find Treasure Class ${treasureClassName}`)
    return
  }

  for (let i = 1; i <= 10; i++) {
    const itemField = `Item${i}`
    const probField = `Prob${i}`

    if (treasureClassToChange[itemField] == itemName) {
      const oldValue = treasureClassToChange[probField]
      treasureClassToChange[probField] = changedItemProb
      itemDropProbChanged = true

      logInfo(`Changed TreasureClassEx entry! Item "${itemName}" drop prob changed from "${oldValue}" to "${changedItemProb}" in Treasure Class "${treasureClassName}"`)
      return
    }
  }

  if (itemDropProbChanged) {
    logInfo(`changeItemDropProb was successful`)
  } else {
    logError(`changeItemDropProb was unsuccessful`)
  }
}