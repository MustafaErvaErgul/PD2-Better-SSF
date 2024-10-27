import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeMagicSuffixesRollMaxValue, changeMagicSuffixField } from "../utils/MagicSuffixUtils.js"

const filePath = "../data/global/excel/MagicSuffix.txt"
const fileOutputPath = "../data/global/excel/MagicSuffix.txt"

export const applyMagicSuffixChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeMagicSuffixesRollMaxValue(arrayData)


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
