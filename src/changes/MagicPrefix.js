import fs from "fs"
import { convertTxtToArray, convertArrayToTxt } from "../utils/CommonUtils.js"
import { makeMagicPrefixesRollMaxValue, changeMagicPrefixField } from "../utils/MagicPrefixUtils.js"

const filePath = "../data/global/excel/MagicPrefix.txt"
const fileOutputPath = "../data/global/excel/MagicPrefix.txt"

const makeAllResistanceOnAllCharmsMoreCommon = (arrayData) => {
  changeMagicPrefixField(arrayData, "Shimmering", "320", "frequency", "2")
  changeMagicPrefixField(arrayData, "Shimmering", "321", "frequency", "2")
  changeMagicPrefixField(arrayData, "Shimmering", "322", "frequency", "2")
  changeMagicPrefixField(arrayData, "Shimmering", "317", "frequency", "2")
  changeMagicPrefixField(arrayData, "Shimmering", "318", "frequency", "2")
  changeMagicPrefixField(arrayData, "Shimmering", "319", "frequency", "2")
}

const makeSkillTabPrefixesMoreCommon = (arrayData) => {
  changeMagicPrefixField(arrayData, "Fletcher's", "430", "frequency", "4");
  changeMagicPrefixField(arrayData, "Acrobat's", "431", "frequency", "4");
  changeMagicPrefixField(arrayData, "Harpoonist's", "432", "frequency", "4");
  changeMagicPrefixField(arrayData, "Fletcher's", "433", "frequency", "4");
  changeMagicPrefixField(arrayData, "Bowyer's", "434", "frequency", "4");
  changeMagicPrefixField(arrayData, "Archer's", "435", "frequency", "4");
  changeMagicPrefixField(arrayData, "Acrobat's", "436", "frequency", "4");
  changeMagicPrefixField(arrayData, "Gymnast's", "437", "frequency", "4");
  changeMagicPrefixField(arrayData, "Athlete's", "438", "frequency", "4");
  changeMagicPrefixField(arrayData, "Harpoonist's", "439", "frequency", "4");
  changeMagicPrefixField(arrayData, "Spearmaiden's", "440", "frequency", "4");
  changeMagicPrefixField(arrayData, "Lancer's", "441", "frequency", "4");
  changeMagicPrefixField(arrayData, "Burning", "442", "frequency", "4");
  changeMagicPrefixField(arrayData, "Sparking", "443", "frequency", "4");
  changeMagicPrefixField(arrayData, "Chilling", "444", "frequency", "4");
  changeMagicPrefixField(arrayData, "Burning", "445", "frequency", "4");
  changeMagicPrefixField(arrayData, "Blazing", "446", "frequency", "4");
  changeMagicPrefixField(arrayData, "Volcanic", "447", "frequency", "4");
  changeMagicPrefixField(arrayData, "Sparking", "448", "frequency", "4");
  changeMagicPrefixField(arrayData, "Charged", "449", "frequency", "4");
  changeMagicPrefixField(arrayData, "Powered", "450", "frequency", "4");
  changeMagicPrefixField(arrayData, "Chilling", "451", "frequency", "4");
  changeMagicPrefixField(arrayData, "Freezing", "452", "frequency", "4");
  changeMagicPrefixField(arrayData, "Glacial", "453", "frequency", "4");
  changeMagicPrefixField(arrayData, "Hexing", "454", "frequency", "4");
  changeMagicPrefixField(arrayData, "Fungal", "455", "frequency", "4");
  changeMagicPrefixField(arrayData, "Graverobber's", "456", "frequency", "4");
  changeMagicPrefixField(arrayData, "Hexing", "457", "frequency", "4");
  changeMagicPrefixField(arrayData, "Blighting", "458", "frequency", "4");
  changeMagicPrefixField(arrayData, "Accursed", "459", "frequency", "4");
  changeMagicPrefixField(arrayData, "Fungal", "460", "frequency", "4");
  changeMagicPrefixField(arrayData, "Noxious", "461", "frequency", "4");
  changeMagicPrefixField(arrayData, "Venomous", "462", "frequency", "4");
  changeMagicPrefixField(arrayData, "Graverobber's", "463", "frequency", "4");
  changeMagicPrefixField(arrayData, "Vodoun", "464", "frequency", "4");
  changeMagicPrefixField(arrayData, "Golemlord's", "465", "frequency", "4");
  changeMagicPrefixField(arrayData, "Lion Branded", "466", "frequency", "4");
  changeMagicPrefixField(arrayData, "Captain's", "467", "frequency", "4");
  changeMagicPrefixField(arrayData, "Preserver's", "468", "frequency", "4");
  changeMagicPrefixField(arrayData, "Lion Branded", "469", "frequency", "4");
  changeMagicPrefixField(arrayData, "Hawk Branded", "470", "frequency", "4");
  changeMagicPrefixField(arrayData, "Rose Branded", "471", "frequency", "4");
  changeMagicPrefixField(arrayData, "Captain's", "472", "frequency", "4");
  changeMagicPrefixField(arrayData, "Commander's", "473", "frequency", "4");
  changeMagicPrefixField(arrayData, "Marshal's", "474", "frequency", "4");
  changeMagicPrefixField(arrayData, "Preserver's", "475", "frequency", "4");
  changeMagicPrefixField(arrayData, "Warder's", "476", "frequency", "4");
  changeMagicPrefixField(arrayData, "Guardian's", "477", "frequency", "4");
  changeMagicPrefixField(arrayData, "Expert's", "478", "frequency", "4");
  changeMagicPrefixField(arrayData, "Fanatic", "479", "frequency", "4");
  changeMagicPrefixField(arrayData, "Sounding", "480", "frequency", "4");
  changeMagicPrefixField(arrayData, "Expert's", "481", "frequency", "4");
  changeMagicPrefixField(arrayData, "Veteran's", "482", "frequency", "4");
  changeMagicPrefixField(arrayData, "Master's", "483", "frequency", "4");
  changeMagicPrefixField(arrayData, "Fanatic", "484", "frequency", "4");
  changeMagicPrefixField(arrayData, "Raging", "485", "frequency", "4");
  changeMagicPrefixField(arrayData, "Furious", "486", "frequency", "4");
  changeMagicPrefixField(arrayData, "Sounding", "487", "frequency", "4");
  changeMagicPrefixField(arrayData, "Resonant", "488", "frequency", "4");
  changeMagicPrefixField(arrayData, "Echoing", "489", "frequency", "4");
  changeMagicPrefixField(arrayData, "Trainer's", "490", "frequency", "4");
  changeMagicPrefixField(arrayData, "Spiritual", "491", "frequency", "4");
  changeMagicPrefixField(arrayData, "Nature's", "492", "frequency", "4");
  changeMagicPrefixField(arrayData, "Trainer's", "493", "frequency", "4");
  changeMagicPrefixField(arrayData, "Caretaker's", "494", "frequency", "4");
  changeMagicPrefixField(arrayData, "Keeper's", "495", "frequency", "4");
  changeMagicPrefixField(arrayData, "Spiritual", "496", "frequency", "4");
  changeMagicPrefixField(arrayData, "Feral", "497", "frequency", "4");
  changeMagicPrefixField(arrayData, "Communal", "498", "frequency", "4");
  changeMagicPrefixField(arrayData, "Nature's", "499", "frequency", "4");
  changeMagicPrefixField(arrayData, "Terra's", "500", "frequency", "4");
  changeMagicPrefixField(arrayData, "Gaea's", "501", "frequency", "4");
  changeMagicPrefixField(arrayData, "Entrapping", "502", "frequency", "4");
  changeMagicPrefixField(arrayData, "Mentalist's", "503", "frequency", "4");
  changeMagicPrefixField(arrayData, "Shogukusha's", "504", "frequency", "4");
  changeMagicPrefixField(arrayData, "Entrapping", "505", "frequency", "4");
  changeMagicPrefixField(arrayData, "Trickster's", "506", "frequency", "4");
  changeMagicPrefixField(arrayData, "Cunning", "507", "frequency", "4");
  changeMagicPrefixField(arrayData, "Mentalist's", "508", "frequency", "4");
  changeMagicPrefixField(arrayData, "Psychic", "509", "frequency", "4");
  changeMagicPrefixField(arrayData, "Shadow", "510", "frequency", "4");
  changeMagicPrefixField(arrayData, "Shogukusha's", "511", "frequency", "4");
  changeMagicPrefixField(arrayData, "Sensei's", "512", "frequency", "4");
  changeMagicPrefixField(arrayData, "Kenshi's", "513", "frequency", "4");
}

const makeLargeCharmPercentDamageAffixes4Percent = (arrayData) => {
  changeMagicPrefixField(arrayData, "Channeling", "738", "mod1min", "3")
  changeMagicPrefixField(arrayData, "Channeling", "738", "mod1max", "3")
  changeMagicPrefixField(arrayData, "Cold", "739", "mod1min", "3")
  changeMagicPrefixField(arrayData, "Cold", "739", "mod1max", "3")
  changeMagicPrefixField(arrayData, "Cinder", "740", "mod1min", "3")
  changeMagicPrefixField(arrayData, "Cinder", "740", "mod1max", "3")
  changeMagicPrefixField(arrayData, "Morbid", "741", "mod1min", "3")
  changeMagicPrefixField(arrayData, "Morbid", "741", "mod1max", "3")
  changeMagicPrefixField(arrayData, "Sparkling", "742", "mod1min", "3")
  changeMagicPrefixField(arrayData, "Sparkling", "742", "mod1max", "3")
  changeMagicPrefixField(arrayData, "Discharging", "743", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Discharging", "743", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Frigid", "744", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Frigid", "744", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Wildfire", "745", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Wildfire", "745", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Malicious", "746", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Malicious", "746", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Effervescent", "747", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Effervescent", "747", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Conduit", "748", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Conduit", "748", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Numbing", "749", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Numbing", "749", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Inferno", "750", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Inferno", "750", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Infectious", "751", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Infectious", "751", "mod1max", "4")
  changeMagicPrefixField(arrayData, "Scintillating", "752", "mod1min", "4")
  changeMagicPrefixField(arrayData, "Scintillating", "752", "mod1max", "4")
}

export const applyMagicPrefixChanges = () => {
  const txtData = fs.readFileSync(filePath, "latin1")
  const arrayData = convertTxtToArray(txtData)


  makeMagicPrefixesRollMaxValue(arrayData)
  makeAllResistanceOnAllCharmsMoreCommon(arrayData)
  makeSkillTabPrefixesMoreCommon(arrayData)
  makeLargeCharmPercentDamageAffixes4Percent(arrayData)


  const modifiedTxtData = convertArrayToTxt(arrayData)
  fs.writeFileSync(fileOutputPath, modifiedTxtData, "latin1")
}
