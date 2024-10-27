import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeCraftedItemsRollMaxValues } from "../utils/CubeMainUtils.js"

const filePath = "../data/global/excel/CubeMain.txt"
const fileOutputPath = "../data/global/excel/CubeMain.txt"

export const applyCubeMainChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeCraftedItemsRollMaxValues(arrayData)


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
