import { logInfo, logError } from "./CommonUtils.js"

export const changeSkillField = (data, skillId, field, changedFieldValue) => {
  let skillFieldChanged = false

  const skillToChange = data.find((element) => {
    return element['Id'] == skillId
  })

  if (!skillToChange) {
    logError(`Couldn't find Skill "${skillId}"`)
    return
  }

  if (skillToChange[field] !== undefined) {
    const oldValue = skillToChange[field]
    skillToChange[field] = changedFieldValue
    skillFieldChanged = true

    logInfo(`Changed Skills entry! "${skillToChange['skill']}" Field "${field}" from "${oldValue}" to "${changedFieldValue}"`)
    return
  } else {
    logError(`Skill "${skillToChange['skill']}" does not have a field called "${field}"`)
  }

  if (skillFieldChanged) {
    logInfo(`changeSkillField was successful`)
  } else {
    logError(`changeSkillField was unsuccessful`)
  }
}