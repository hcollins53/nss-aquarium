import { getFish } from "./database.js";



export const locationList = () => {
    const eachFish = getFish() 
    let html = '<article class="locationList">'


    for(const fish of eachFish) {
        html += `<section class="locations">
        <div class="fish__location">${fish.location}</div>
    </section>`
    }
    html += '</article>'
    return html
}
