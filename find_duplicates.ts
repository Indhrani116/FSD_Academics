let inputNumbers: number[] = [10, 20, 30, 20, 40, 10, 50, 30];

let seenElements: { [key: number]: boolean } = {};
let duplicateElements: { [key: number]: boolean } = {};

for (let scanIndex = 0; scanIndex < inputNumbers.length; scanIndex++) {
    let currentValue: number = inputNumbers[scanIndex];

    if (seenElements[currentValue]) {
        duplicateElements[currentValue] = true;
    } else {
        seenElements[currentValue] = true;
    }
}

console.log("Duplicate Elements:");

for (let duplicateKey in duplicateElements) {
    console.log(duplicateKey);
}