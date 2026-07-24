let decimalValue: number = 25;
let workingValue: number = decimalValue;
let binaryResult: string = "";

if (workingValue === 0) {
    binaryResult = "0";
} else {
    while (workingValue > 0) {
        let binaryDigit: number = workingValue % 2;
        binaryResult = binaryDigit + binaryResult;
        workingValue = Math.floor(workingValue / 2);
    }
}

console.log(`Binary equivalent of ${decimalValue} is: ${binaryResult}`);