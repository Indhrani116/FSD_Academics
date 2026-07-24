let strongInput: number = 145;
let duplicateValue: number = strongInput;
let factorialTotal: number = 0;

while (strongInput > 0) {
    let extractedDigit: number = strongInput % 10;
    let factorialValue: number = 1;

    for (let multiplierValue = 1; multiplierValue <= extractedDigit; multiplierValue++) {
        factorialValue *= multiplierValue;
    }

    factorialTotal += factorialValue;
    strongInput = Math.floor(strongInput / 10);
}

if (factorialTotal === duplicateValue) {
    console.log(`${duplicateValue} is a Strong Number`);
} else {
    console.log(`${duplicateValue} is Not a Strong Number`);
}