let originalText: string = "programming";
let uniqueText: string = "";
let visitedCharacters: { [key: string]: boolean } = {};

for (let letterIndex = 0; letterIndex < originalText.length; letterIndex++) {
    let currentLetter: string = originalText[letterIndex];

    if (!visitedCharacters[currentLetter]) {
        uniqueText += currentLetter;
        visitedCharacters[currentLetter] = true;
    }
}

console.log(`Original String: ${originalText}`);
console.log(`String after removing duplicates: ${uniqueText}`);