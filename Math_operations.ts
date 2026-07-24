namespace MathOperations {

    export function add(firstNumberValue: number, secondNumberValue: number): number {
        return firstNumberValue + secondNumberValue;
    }

    export function subtract(firstNumberValue: number, secondNumberValue: number): number {
        return firstNumberValue - secondNumberValue;
    }

    export function multiply(firstNumberValue: number, secondNumberValue: number): number {
        return firstNumberValue * secondNumberValue;
    }

    export function divide(firstNumberValue: number, secondNumberValue: number): number {
        if (secondNumberValue === 0) {
            console.log("Division by zero is not allowed.");
            return 0;
        }
        return firstNumberValue / secondNumberValue;
    }
}

let valueOne: number = 20;
let valueTwo: number = 5;

console.log(`Addition: ${MathOperations.add(valueOne, valueTwo)}`);
console.log(`Subtraction: ${MathOperations.subtract(valueOne, valueTwo)}`);
console.log(`Multiplication: ${MathOperations.multiply(valueOne, valueTwo)}`);
console.log(`Division: ${MathOperations.divide(valueOne, valueTwo)}`);