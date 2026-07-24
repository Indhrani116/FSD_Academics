"use strict";
let numberCollection = [12, 45, 7, 89, 34, 89, 56];
let highestValue = Number.MIN_SAFE_INTEGER;
let secondHighestValue = Number.MIN_SAFE_INTEGER;
for (let arrayPosition = 0; arrayPosition < numberCollection.length; arrayPosition++) {
    if (numberCollection[arrayPosition] > highestValue) {
        secondHighestValue = highestValue;
        highestValue = numberCollection[arrayPosition];
    }
    else if (numberCollection[arrayPosition] > secondHighestValue &&
        numberCollection[arrayPosition] !== highestValue) {
        secondHighestValue = numberCollection[arrayPosition];
    }
}
console.log(`Largest Number: ${highestValue}`);
console.log(`Second Largest Number: ${secondHighestValue}`);
