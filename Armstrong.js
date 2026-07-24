"use strict";
let inputNumber = 153;
let originalValue = inputNumber;
let digitCount = inputNumber.toString().length;
let armstrongSum = 0;
while (inputNumber > 0) {
    let currentDigit = inputNumber % 10;
    armstrongSum += Math.pow(currentDigit, digitCount);
    inputNumber = Math.floor(inputNumber / 10);
}
if (armstrongSum === originalValue) {
    console.log(`${originalValue} is an Armstrong Number`);
}
else {
    console.log(`${originalValue} is Not an Armstrong Number`);
}
