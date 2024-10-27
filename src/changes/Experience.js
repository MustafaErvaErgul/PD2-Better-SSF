import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeLevelingEasier } from "../utils/ExperienceUtils.js"

const filePath = "../data/global/excel/Experience.txt"
const fileOutputPath = "../data/global/excel/Experience.txt"

export const applyExperienceChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeLevelingEasier(arrayData)


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
