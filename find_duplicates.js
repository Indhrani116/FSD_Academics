"use strict";
let inputNumbers = [10, 20, 30, 20, 40, 10, 50, 30];
let seenElements = {};
let duplicateElements = {};
for (let scanIndex = 0; scanIndex < inputNumbers.length; scanIndex++) {
    let currentValue = inputNumbers[scanIndex];
    if (seenElements[currentValue]) {
        duplicateElements[currentValue] = true;
    }
    else {
        seenElements[currentValue] = true;
    }
}
console.log("Duplicate Elements:");
for (let duplicateKey in duplicateElements) {
    console.log(duplicateKey);
}
