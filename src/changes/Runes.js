import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeRunewordsRollMaxValues } from "../utils/RunesUtils.js"

const filePath = "../data/global/excel/Runes.txt"
const fileOutputPath = "../data/global/excel/Runes.txt"

export const applyRunesChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeRunewordsRollMaxValues(arrayData)
  

  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
