"use strict";
function checkPrimeRange(value) {
    if (value <= 1) {
        return false;
    }
    for (let divisor = 2; divisor * divisor <= value; divisor++) {
        if (value % divisor === 0) {
            return false;
        }
    }
    return true;
}
let lowerLimit = 10;
let upperLimit = 30;
console.log(`Prime numbers between ${lowerLimit} and ${upperLimit}:`);
for (let currentNumber = lowerLimit; currentNumber <= upperLimit; currentNumber++) {
    if (checkPrimeRange(currentNumber)) {
        console.log(currentNumber);
    }
}
