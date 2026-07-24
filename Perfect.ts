let perfectInput: number = 28;
let divisorSum: number = 0;

for (let factorValue = 1; factorValue <= perfectInput / 2; factorValue++) {
    if (perfectInput % factorValue === 0) {
        divisorSum += factorValue;
    }
}

if (divisorSum === perfectInput) {
    console.log(`${perfectInput} is a Perfect Number`);
} else {
    console.log(`${perfectInput} is Not a Perfect Number`);
}