import { applyCubeMainChanges } from "./changes/CubeMain.js"
import { applyMagicPrefixChanges } from "./changes/MagicPrefix.js"
import { applyMagicSuffixChanges } from "./changes/MagicSuffix.js"
import { applyRunesChanges } from "./changes/Runes.js"
import { applySetItemsChanges } from "./changes/SetItems.js"
import { applyUniqueItemsChanges } from "./changes/UniqueItems.js"
import { applyExperienceChanges } from "./changes/Experience.js"
import { applyTreasureClassExChanges } from "./changes/TreasureClassEx.js"
import { applySkillsChanges } from "./changes/Skills.js"

applyExperienceChanges()
applyCubeMainChanges()
applyMagicPrefixChanges()
applyMagicSuffixChanges()
applyRunesChanges()
applySetItemsChanges()
applySkillsChanges()
applyTreasureClassExChanges()
applyUniqueItemsChanges()