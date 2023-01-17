//import getfish function to get the fish array
import { getFish } from "./database.js"
const checkFish = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    //create the for loop to iterate through the fish
    //find the sizes that are multiples of 3
    //push to the array
    for (const fish of checkFish) {
        if(fish.size % 3 === 0) {
            holyFish.push(fish)
        }

    }
    
    return holyFish
}
//create the for loop to iterate through the fish
    //find the sizes that are multiples of 5
    //push to the array
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fishc
    const soldiers = []
    
    for(const fish of checkFish) {
        if(fish.size % 5 === 0) {
            soldiers.push(fish)
        }
    }
   
    return soldiers
}
//create the for loop to iterate through the fish
    //find the sizes that are not multiples of 3 or 5
    //push to the array
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for(const fish of checkFish) {
        if(!(fish.size % 3 === 0) && !(fish.size % 5 === 0)) {
            regularFish.push(fish)
        }
    }
    
    return regularFish
}