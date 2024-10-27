import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeUniqueItemsRollMaxValues, changeUniqueItemField } from "../utils/UniqueItemsUtils.js"

const filePath = "../data/global/excel/UniqueItems.txt"
const fileOutputPath = "../data/global/excel/UniqueItems.txt"

export const applyUniqueItemsChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeUniqueItemsRollMaxValues(arrayData)
  
  changeUniqueItemField(arrayData, "Gheed's Fortune", "min1", "100")
  changeUniqueItemField(arrayData, "Gheed's Fortune", "max1", "100")
  changeUniqueItemField(arrayData, "Gheed's Fortune", "min2", "160")


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
