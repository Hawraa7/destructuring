/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2]; 
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japenese"];
let [lolo, mayo] = languages;
console.log(lolo, mayo);

let [, , ayo, bambo] = languages;
console.log(ayo, bambo);

let languages2 = {
    firstlanguage: "english",
    secondlanguage: "french",
    thirdlanguage: "german",
    fourthlanguage: "japenese",
};
let {firstlanguage, thirdlanguage} = languages2;
console.log(firstlanguage, thirdlanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondfavorite, ...others] = fruits;
console.log(favorite);
console.log(secondfavorite);
console.log(others);

let favoritefoods = {
    brian: "pizza",
    anna: "pasta",
    sara: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoritefoods;
console.log(brian);
console.log(anna);
console.log(rest);