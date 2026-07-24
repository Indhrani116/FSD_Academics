let firstValue: number = 24;
let secondValue: number = 36;

let firstCopy: number = firstValue;
let secondCopy: number = secondValue;

while (secondCopy !== 0) {
    let remainderValue: number = secondCopy;
    secondCopy = firstCopy % secondCopy;
    firstCopy = remainderValue;
}

let gcdResult: number = firstCopy;
let lcmResult: number = (firstValue * secondValue) / gcdResult;

console.log(`GCD of ${firstValue} and ${secondValue} is: ${gcdResult}`);
console.log(`LCM of ${firstValue} and ${secondValue} is: ${lcmResult}`);