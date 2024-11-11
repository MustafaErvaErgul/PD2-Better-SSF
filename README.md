# Introduction

PD2 Better SSF is a mod aimed to improve the SSF experince.

# Installation

[Download the latest release](https://github.com/MustafaErvaErgul/PD2-Better-SSF/releases)

1. Extract "data" in to your ProjectD2 directory.
2. Open up "PlugY.ini" add "-direct" and "-txt" to "Param=-3dfx". It should look like "Param=-3dfx -direct -txt"

# Changelog

### General
* Leveling has been made significantly easier until level 95. (95-99 is the same)
* Crafting Infusions added as a possible drop to "good" treasure classes. (They can drop from many locations in the game)
* Act Bosses always drop loot as if they're quest bugged.
* Worldstone Shard and Perfect Gem drop rates have been increased slightly.
* Mini Uber keys are much more common.
* Token of Absolution pieces no longer drop from Act Bosses. (PlugY already allows infinite respecs)
* Countess in Hell can now drop all runes.
* Map Boss drops have been adjusted so that they drop alot more maps. (Making it easier to sustain as SSF)
* Lower Kurast has Super Chests again.
* High Runes are slightly more common.
* Larzuk Puzzlepiece, Larzuk Puzzlebox, Skeleton Key, Infinite Books, Lilith's Mirror and Vial of Lightsong are more common.

### Items
* Gheed's Fortune now always rolls 100% Magic Find and 160% Gold Find.
* Affixes on items always roll max values within their respective tier.
  * 1-5 Life always rolls 5
  * 36-40 Life always rolls 40
  * An item doesn't always roll 40 Life
* "skilltab" prefixes are 4 times more common.
  * Skillers, +3 amulets, +3 gloves...
* All Resistance on all Charms is 2 times more common.
* % Damage Large Charms always roll 4%.
  * Fire, Cold, Lightning, Poison, Magic damage Large Charms  

### Skills
* Level 1 mana cost of all mobility skills have been reduced to 8. They are also castable in town.
  * Assassin's Dragon Flight
  * Barbarian's Leap
  * Druid's Gust
  * Necromancer's Blood Warp
  * Paladin's Charge
  * Sorceress's Teleport
  * Blink from Enigma

### Cube

* Added a recipe to craft a random Facet
  * 1 Identity Scroll + 1 Town Scroll + 10 Jewel Fragments -> 1 Random Unique Jewel

# For Devs

nodeVersion = v20.12.2

The "src" folder in this repo contains JS code that applies all the changes mentioned above with a single command "npm start".

You need to add unedited versions of the following .txt files under data/global/excel and than use "npm start".
* CubeMain.txt
* Experience.txt
* MagicPrefix.txt
* MagicSuffix.txt
* Runes.txt
* SetItems.txt
* Skills.txt
* TreasureClassEx.txt
* UniqueItems.txt

"npm start" should only be called once to edit the files. Replace the ".txt" files with the unedited ones whenever you want to use "npm start".
