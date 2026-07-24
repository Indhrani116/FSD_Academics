"use strict";
let binaryInput = "11001";
let decimalOutput = 0;
let powerIndex = 0;
for (let reverseIndex = binaryInput.length - 1; reverseIndex >= 0; reverseIndex--) {
    let binaryCharacter = binaryInput[reverseIndex];
    decimalOutput += Number(binaryCharacter) * Math.pow(2, powerIndex);
    powerIndex++;
}
console.log(`Decimal equivalent of ${binaryInput} is: ${decimalOutput}`);
