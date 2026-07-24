let inputNumber: number = 153;
let originalValue: number = inputNumber;

let digitCount: number = inputNumber.toString().length;
let armstrongSum: number = 0;

while (inputNumber > 0) {
    let currentDigit: number = inputNumber % 10;
    armstrongSum += Math.pow(currentDigit, digitCount);
    inputNumber = Math.floor(inputNumber / 10);
}

if (armstrongSum === originalValue) {
    console.log(`${originalValue} is an Armstrong Number`);
} else {
    console.log(`${originalValue} is Not an Armstrong Number`);
}