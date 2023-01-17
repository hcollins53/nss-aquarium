import { getFish } from './database.js'
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
/*
for(const fish of allFish) {
    for (location of fish.location)
    console.log (location)
}
*/

// Import the FishList function from the correct module
import {FishList} from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */ 
//selector is inserted in the ()
let parentHTMLElement = document.querySelector("#fishHi")


parentHTMLElement.innerHTML = FishList()



import { mostHolyFish } from './fish.js'
import { soldierFish } from './fish.js'
import { nonHolyFish } from './fish.js'
let holyFish = mostHolyFish()
let soldier = soldierFish()
let restOfTheFish = nonHolyFish()
console.log(holyFish)
console.log(soldier)
console.log(restOfTheFish)


import {locationList } from './locations.js'
let HTMLElement = document.querySelector("#locations")
HTMLElement.innerHTML = locationList()
