let sourceNumbers: number[] = [10, 20, 30, 40, 50];
let rotationCount: number = 2;

rotationCount = rotationCount % sourceNumbers.length;

let rotatedNumbers: number[] = [
    ...sourceNumbers.slice(sourceNumbers.length - rotationCount),
    ...sourceNumbers.slice(0, sourceNumbers.length - rotationCount)
];

console.log("Original Array:", sourceNumbers);
console.log("Rotated Array:", rotatedNumbers);