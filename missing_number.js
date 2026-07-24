"use strict";
let sequenceArray = [1, 2, 3, 5, 6];
let expectedLength = sequenceArray.length + 1;
let expectedTotal = (expectedLength * (expectedLength + 1)) / 2;
let actualTotal = 0;
for (let elementPointer = 0; elementPointer < sequenceArray.length; elementPointer++) {
    actualTotal += sequenceArray[elementPointer];
}
let missingElement = expectedTotal - actualTotal;
console.log(`Missing Number: ${missingElement}`);
