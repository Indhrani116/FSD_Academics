"use strict";
let firstValue = 24;
let secondValue = 36;
let firstCopy = firstValue;
let secondCopy = secondValue;
while (secondCopy !== 0) {
    let remainderValue = secondCopy;
    secondCopy = firstCopy % secondCopy;
    firstCopy = remainderValue;
}
let gcdResult = firstCopy;
let lcmResult = (firstValue * secondValue) / gcdResult;
console.log(`GCD of ${firstValue} and ${secondValue} is: ${gcdResult}`);
console.log(`LCM of ${firstValue} and ${secondValue} is: ${lcmResult}`);
