"use strict";
let sourceNumbers = [10, 20, 30, 40, 50];
let rotationCount = 2;
rotationCount = rotationCount % sourceNumbers.length;
let rotatedNumbers = [
    ...sourceNumbers.slice(sourceNumbers.length - rotationCount),
    ...sourceNumbers.slice(0, sourceNumbers.length - rotationCount)
];
console.log("Original Array:", sourceNumbers);
console.log("Rotated Array:", rotatedNumbers);
