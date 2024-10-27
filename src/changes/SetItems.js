import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeSetItemsRollMaxValues } from "../utils/SetItemsUtils.js"

const filePath = "../data/global/excel/SetItems.txt"
const fileOutputPath = "../data/global/excel/SetItems.txt"

export const applySetItemsChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeSetItemsRollMaxValues(arrayData)


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
