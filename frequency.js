"use strict";
let textValue = "programming";
let characterFrequency = {};
for (let textIndex = 0; textIndex < textValue.length; textIndex++) {
    let currentCharacter = textValue[textIndex];
    if (characterFrequency[currentCharacter]) {
        characterFrequency[currentCharacter]++;
    }
    else {
        characterFrequency[currentCharacter] = 1;
    }
}
console.log("Character Frequencies:");
for (let characterKey in characterFrequency) {
    console.log(`${characterKey} : ${characterFrequency[characterKey]}`);
}
