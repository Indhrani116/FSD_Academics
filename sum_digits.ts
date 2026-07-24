let digitInput: number = 5678;
let temporaryValue: number = digitInput;
let digitSum: number = 0;

while (temporaryValue > 0) {
    let lastDigit: number = temporaryValue % 10;
    digitSum += lastDigit;
    temporaryValue = Math.floor(temporaryValue / 10);
}

console.log(`Sum of digits of ${digitInput} is: ${digitSum}`);