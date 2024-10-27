import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { changeSkillField } from "../utils/SkillsUtils.js"

const filePath = "../data/global/excel/Skills.txt"
const fileOutputPath = "../data/global/excel/Skills.txt"

export const applySkillsChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  changeSkillField(arrayData, "54", "mana", "8")
  changeSkillField(arrayData, "54", "InTown", "1")

  changeSkillField(arrayData, "357", "mana", "8")
  changeSkillField(arrayData, "357", "InTown", "1")


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
