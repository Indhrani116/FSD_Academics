"use strict";
let originalText = "programming";
let uniqueText = "";
let visitedCharacters = {};
for (let letterIndex = 0; letterIndex < originalText.length; letterIndex++) {
    let currentLetter = originalText[letterIndex];
    if (!visitedCharacters[currentLetter]) {
        uniqueText += currentLetter;
        visitedCharacters[currentLetter] = true;
    }
}
console.log(`Original String: ${originalText}`);
console.log(`String after removing duplicates: ${uniqueText}`);
