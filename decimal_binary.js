"use strict";
let decimalValue = 25;
let workingValue = decimalValue;
let binaryResult = "";
if (workingValue === 0) {
    binaryResult = "0";
}
else {
    while (workingValue > 0) {
        let binaryDigit = workingValue % 2;
        binaryResult = binaryDigit + binaryResult;
        workingValue = Math.floor(workingValue / 2);
    }
}
console.log(`Binary equivalent of ${decimalValue} is: ${binaryResult}`);
