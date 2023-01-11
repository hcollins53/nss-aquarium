/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Psychy",
            food: "shrimp",
            size: 5,
            species: "Psychedelic Frogfish",
            location: "Indonesia",
            image: "https://d.newsweek.com/en/full/1952885/psychedelic-frogfish.webp?w=790&f=ae7bb6d61a5956a0c7e40bb0dac451c7"
        },
        {
            name: "Stinger",
            food: "crustaceans",
            size: 13,
            species: "Tasseled Scorpionfish",
            location: "India",
            image: "https://d.newsweek.com/en/full/1952887/tassled-scorpionfish.webp?w=900&f=7e2cdaeccdf9f9d68ed1fca9e2fa1a1b"
        },  
        {
            name: "Handy",
            food: "crustaceans",
            size: 4,
            species: "Handfish",
            location: "Australia",
            image: "https://d.newsweek.com/en/full/1952890/handfish.webp?w=900&f=00dacac77a5910875d7cd8dc9174bffd"
        },
        {
            name: "Marvin",
            food: "crustaceans",
            size: 9,
            species: "Blobfish",
            location: "New Zealand",
            image: "https://www.instagram.com/p/CXiNaH_Llxn/?utm_source=ig_embed&ig_rid=1d6d816a-5f9e-4c8a-9da8-ba3ab4cb9e99"
        },
        {
            name: "Ross",
            food: "sea urchins",
            size: 25,
            species: "Sheepshead Wrasse",
            location: "China",
            image: "https://d.newsweek.com/en/full/1952893/asian-sheepshead-wrasse.webp?w=900&f=d10b364f18354ce3bf7f1ab48979b5e1"
        },
        {
            name: "Hunter",
            food: "reef fishes",
            size: 12,
            species: "Camouflaged Stonefish",
            location: "Australia",
            image: "https://d.newsweek.com/en/full/1952896/camouflaged-stonefish.webp?w=900&f=1226d603c1e01f72488ae4a31362f2f4"
        },

    ]
}
//species, name, food, length, where it was harvested

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}