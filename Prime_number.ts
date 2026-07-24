function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example
let num = 29;

if (isPrime(num)) {
    console.log(`${num} is a Prime Number`);
} else {
    console.log(`${num} is Not a Prime Number`);
}