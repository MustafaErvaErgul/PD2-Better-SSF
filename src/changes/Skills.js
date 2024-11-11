import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { changeSkillField } from "../utils/SkillsUtils.js"

const filePath = "../data/global/excel/Skills.txt"
const fileOutputPath = "../data/global/excel/Skills.txt"

export const applySkillsChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)

  // Dragon Flight
  changeSkillField(arrayData, "275", "mana", "8")
  changeSkillField(arrayData, "275", "InTown", "1")

  // Leap
  changeSkillField(arrayData, "132", "mana", "8")
  changeSkillField(arrayData, "132", "InTown", "1")

  // Gust
  changeSkillField(arrayData, "370", "mana", "8")
  changeSkillField(arrayData, "370", "InTown", "1")

  // Blood Warp
  changeSkillField(arrayData, "367", "mana", "8")
  changeSkillField(arrayData, "367", "InTown", "1")

  // Charge
  changeSkillField(arrayData, "107", "mana", "8")
  changeSkillField(arrayData, "107", "InTown", "1")

  // Teleport
  changeSkillField(arrayData, "54", "mana", "8")
  changeSkillField(arrayData, "54", "InTown", "1")

  // Blink
  changeSkillField(arrayData, "357", "mana", "8")
  changeSkillField(arrayData, "357", "InTown", "1")


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
