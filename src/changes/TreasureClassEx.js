import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"

const filePath = "../data/global/excel/TreasureClassEx.txt"
const fileOutputPath = "../data/global/excel/TreasureClassEx.txt"

import { craftingInfusionTreasureClass } from "../arbitrary/index.js"
import { addNewTreasureClass, addItemToTreasureClass, removeItemFromTreasureClass, changeItemDropProb, makeActBossesQuestBugged, changeTreasureClassExField } from "../utils/TreasureClassExUtils.js"


const addCraftingInfusionTreasureClass = (arrayData) => {
  addNewTreasureClass(arrayData, craftingInfusionTreasureClass)
  addItemToTreasureClass(arrayData, "Act 1 Good", "CraftingInfusion", "12")
  addItemToTreasureClass(arrayData, "Act 2 Good", "CraftingInfusion", "12")
  addItemToTreasureClass(arrayData, "Act 3 Good", "CraftingInfusion", "12")
  addItemToTreasureClass(arrayData, "Act 4 Good", "CraftingInfusion", "12")
  addItemToTreasureClass(arrayData, "Act 5 Good", "CraftingInfusion", "12")

  addItemToTreasureClass(arrayData, "Act 1 (N) Good", "CraftingInfusion", "20")
  addItemToTreasureClass(arrayData, "Act 2 (N) Good", "CraftingInfusion", "20")
  addItemToTreasureClass(arrayData, "Act 3 (N) Good", "CraftingInfusion", "20")
  addItemToTreasureClass(arrayData, "Act 4 (N) Good", "CraftingInfusion", "20")
  addItemToTreasureClass(arrayData, "Act 5 (N) Good", "CraftingInfusion", "20")

  addItemToTreasureClass(arrayData, "Act 1 (H) Good", "CraftingInfusion", "24")
  addItemToTreasureClass(arrayData, "Act 2 (H) Good", "CraftingInfusion", "24")
  addItemToTreasureClass(arrayData, "Act 3 (H) Good", "CraftingInfusion", "24")
  addItemToTreasureClass(arrayData, "Act 4 (H) Good", "CraftingInfusion", "24")
  addItemToTreasureClass(arrayData, "Act 5 (H) Good", "CraftingInfusion", "24")

  addItemToTreasureClass(arrayData, "Map Good t1", "CraftingInfusion", "28")
  addItemToTreasureClass(arrayData, "Map Good t2", "CraftingInfusion", "30")
  addItemToTreasureClass(arrayData, "Map Good t3", "CraftingInfusion", "32")
}

const increaseWssAndPerfectGemDrops = (arrayData) => {
  changeItemDropProb(arrayData, "Act 1 Good", "wss", "12")
  changeItemDropProb(arrayData, "Act 2 Good", "wss", "12")
  changeItemDropProb(arrayData, "Act 3 Good", "wss", "12")
  changeItemDropProb(arrayData, "Act 4 Good", "wss", "12")
  changeItemDropProb(arrayData, "Act 5 Good", "wss", "12")

  changeItemDropProb(arrayData, "Act 1 (N) Good", "wss", "20")
  changeItemDropProb(arrayData, "Act 2 (N) Good", "wss", "20")
  changeItemDropProb(arrayData, "Act 3 (N) Good", "wss", "20")
  changeItemDropProb(arrayData, "Act 4 (N) Good", "wss", "20")
  changeItemDropProb(arrayData, "Act 5 (N) Good", "wss", "20")

  changeItemDropProb(arrayData, "Act 1 (H) Good", "wss", "24")
  changeItemDropProb(arrayData, "Act 2 (H) Good", "wss", "24")
  changeItemDropProb(arrayData, "Act 3 (H) Good", "wss", "24")
  changeItemDropProb(arrayData, "Act 4 (H) Good", "wss", "24")
  changeItemDropProb(arrayData, "Act 5 (H) Good", "wss", "24")

  changeItemDropProb(arrayData, "Map Good t1", "wss", "28")
  changeItemDropProb(arrayData, "Map Good t2", "wss", "30")
  changeItemDropProb(arrayData, "Map Good t3", "wss", "32")

  changeItemDropProb(arrayData, "Act 1 (H) Good", "Perfect Gem", "12")
  changeItemDropProb(arrayData, "Act 2 (H) Good", "Perfect Gem", "12")
  changeItemDropProb(arrayData, "Act 3 (H) Good", "Perfect Gem", "12")
  changeItemDropProb(arrayData, "Act 4 (H) Good", "Perfect Gem", "12")
  changeItemDropProb(arrayData, "Act 5 (H) Good", "Perfect Gem", "12")

  changeItemDropProb(arrayData, "Map Good t1", "Perfect Gem", "14")
  changeItemDropProb(arrayData, "Map Good t2", "Perfect Gem", "16")
  changeItemDropProb(arrayData, "Map Good t3", "Perfect Gem", "18")
}

const makeMiniUberKeysMoreCommon = (arrayData) => {
  changeItemDropProb(arrayData, "Blood Raven (H)", "pk1", "260")
  changeItemDropProb(arrayData, "Countess Item (H)", "pk1", "200")

  changeItemDropProb(arrayData, "Summoner (H)", "pk2", "270")
  changeItemDropProb(arrayData, "Bloodwitch (H)", "pk2", "260")

  changeItemDropProb(arrayData, "Nihlathak (H)", "pk3", "240")
  changeItemDropProb(arrayData, "Izual (H)", "pk3", "260")
}

const removeTokenOfAbsolutionPieces = (arrayData) => {
  removeItemFromTreasureClass(arrayData, "Andariel (N)", "tes")
  removeItemFromTreasureClass(arrayData, "Andariel (H)", "tes")
  removeItemFromTreasureClass(arrayData, "Andarielq (N)", "tes")
  removeItemFromTreasureClass(arrayData, "Andarielq (H)", "tes")

  removeItemFromTreasureClass(arrayData, "Duriel (N) - Base", "tes")
  removeItemFromTreasureClass(arrayData, "Duriel (H) - Base", "tes")
  removeItemFromTreasureClass(arrayData, "Durielq (N) - Base", "tes")
  removeItemFromTreasureClass(arrayData, "Durielq (H) - Base", "tes")

  removeItemFromTreasureClass(arrayData, "Mephisto (N)", "ceh")
  removeItemFromTreasureClass(arrayData, "Mephisto (H)", "ceh")
  removeItemFromTreasureClass(arrayData, "Mephistoq (N)", "ceh")
  removeItemFromTreasureClass(arrayData, "Mephistoq (H)", "ceh")

  removeItemFromTreasureClass(arrayData, "Diablo (N)", "bet")
  removeItemFromTreasureClass(arrayData, "Diablo (H)", "bet")
  removeItemFromTreasureClass(arrayData, "Diabloq (N)", "bet")
  removeItemFromTreasureClass(arrayData, "Diabloq (H)", "bet")

  removeItemFromTreasureClass(arrayData, "Baal (N)", "fed")
  removeItemFromTreasureClass(arrayData, "Baal (H)", "fed")
  removeItemFromTreasureClass(arrayData, "Baalq (N)", "fed")
  removeItemFromTreasureClass(arrayData, "Baalq (H)", "fed")
}

const makeHellCountesDropAllRunes = (arrayData) => {
  removeItemFromTreasureClass(arrayData, "Countess Rune (H)", "Runes 12 equiv")
  addItemToTreasureClass(arrayData, "Countess Rune (H)", "Runes 17 equiv", "30")
}

const changeMapBossDrops = (arrayData) => {
  changeItemDropProb(arrayData, "Map Boss T1", "Act 5 (H) Equip C", "4")
  changeItemDropProb(arrayData, "Map Boss T1", "T1 Map Drop", "32")

  changeItemDropProb(arrayData, "Map Boss T2", "Act 5 (H) Equip C", "4")
  changeItemDropProb(arrayData, "Map Boss T2", "T2 Map Drop", "32")

  changeItemDropProb(arrayData, "Map Boss T3", "Act 5 (H) Equip C", "4")
  changeItemDropProb(arrayData, "Map Boss T3", "T3 Map Drop", "32")

  changeItemDropProb(arrayData, "Map Boss T4", "Act 5 (H) Equip C", "4")
  changeItemDropProb(arrayData, "Map Boss T4", "T3 Map Drop", "32")
}

const makeHighRunesMoreCommon = (arrayData) => {
  changeItemDropProb(arrayData, "Runes 17 equiv", "Runes 16 equiv", "3957")
  changeItemDropProb(arrayData, "Runes 16 equiv", "Runes 15 equiv", "2941")
  changeItemDropProb(arrayData, "Runes 15 equiv", "Runes 14 equiv", "2170")
  changeItemDropProb(arrayData, "Runes 14 equiv", "Runes 13 equiv", "1517")
  changeItemDropProb(arrayData, "Runes 13 equiv", "Runes 12 equiv", "1066")
  changeItemDropProb(arrayData, "Runes 12 equiv", "Runes 11", "720")
}

const makePd2ItemsMoreCommon = (arrayData) => {
  changeTreasureClassExField(arrayData, "Larzuk Puzzlebox NM", "Unique", 1800)
  changeTreasureClassExField(arrayData, "Larzuk Puzzlebox H", "Unique", 900)

  changeTreasureClassExField(arrayData, "Larzuk Puzzlepiece N", "Unique", 1800)
  changeTreasureClassExField(arrayData, "Larzuk Puzzlepiece NM", "Unique", 900)
  changeTreasureClassExField(arrayData, "Larzuk Puzzlepiece H", "Unique", 450)

  changeTreasureClassExField(arrayData, "SkeletonKey N", "Unique", 3600)
  changeTreasureClassExField(arrayData, "SkeletonKey NM", "Unique", 1800)
  changeTreasureClassExField(arrayData, "SkeletonKey H", "Unique", 1800)

  changeTreasureClassExField(arrayData, "Horadric ID Book N", "Unique", 3600)
  changeTreasureClassExField(arrayData, "Horadric ID Book NM", "Unique", 1800)
  changeTreasureClassExField(arrayData, "Horadric ID Book H", "Unique", 1800)

  changeTreasureClassExField(arrayData, "Horadric TP Book N", "Unique", 3600)
  changeTreasureClassExField(arrayData, "Horadric TP Book NM", "Unique", 1800)
  changeTreasureClassExField(arrayData, "Horadric TP Book H", "Unique", 1800)

  changeTreasureClassExField(arrayData, "Lillith Mirror N", "Unique", 5000)
  changeTreasureClassExField(arrayData, "Lillith Mirror NM", "Unique", 5000)
  changeTreasureClassExField(arrayData, "Lillith Mirror H", "Unique", 5000)

  changeTreasureClassExField(arrayData, "Vial of Lightsong N", "Unique", 2500)
  changeTreasureClassExField(arrayData, "Vial of Lightsong NM", "Unique", 2500)
  changeTreasureClassExField(arrayData, "Vial of Lightsong H", "Unique", 2500)
}


export const applyTreasureClassExChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)

  removeTokenOfAbsolutionPieces(arrayData)
  makeActBossesQuestBugged(arrayData)
  addCraftingInfusionTreasureClass(arrayData)
  increaseWssAndPerfectGemDrops(arrayData)
  makeMiniUberKeysMoreCommon(arrayData)
  makeHellCountesDropAllRunes(arrayData)
  changeMapBossDrops(arrayData)
  makeHighRunesMoreCommon(arrayData)
  makePd2ItemsMoreCommon(arrayData)

  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}