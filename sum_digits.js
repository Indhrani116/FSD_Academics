"use strict";
let digitInput = 5678;
let temporaryValue = digitInput;
let digitSum = 0;
while (temporaryValue > 0) {
    let lastDigit = temporaryValue % 10;
    digitSum += lastDigit;
    temporaryValue = Math.floor(temporaryValue / 10);
}
console.log(`Sum of digits of ${digitInput} is: ${digitSum}`);
