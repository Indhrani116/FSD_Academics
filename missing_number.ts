let sequenceArray: number[] = [1, 2, 3, 5, 6];

let expectedLength: number = sequenceArray.length + 1;

let expectedTotal: number = (expectedLength * (expectedLength + 1)) / 2;

let actualTotal: number = 0;

for (let elementPointer = 0; elementPointer < sequenceArray.length; elementPointer++) {
    actualTotal += sequenceArray[elementPointer];
}

let missingElement: number = expectedTotal - actualTotal;

console.log(`Missing Number: ${missingElement}`);