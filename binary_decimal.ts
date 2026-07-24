let binaryInput: string = "11001";
let decimalOutput: number = 0;
let powerIndex: number = 0;

for (let reverseIndex = binaryInput.length - 1; reverseIndex >= 0; reverseIndex--) {
    let binaryCharacter: string = binaryInput[reverseIndex];
    decimalOutput += Number(binaryCharacter) * Math.pow(2, powerIndex);
    powerIndex++;
}

console.log(`Decimal equivalent of ${binaryInput} is: ${decimalOutput}`);