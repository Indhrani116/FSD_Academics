"use strict";
var MathOperations;
(function (MathOperations) {
    function add(firstNumberValue, secondNumberValue) {
        return firstNumberValue + secondNumberValue;
    }
    MathOperations.add = add;
    function subtract(firstNumberValue, secondNumberValue) {
        return firstNumberValue - secondNumberValue;
    }
    MathOperations.subtract = subtract;
    function multiply(firstNumberValue, secondNumberValue) {
        return firstNumberValue * secondNumberValue;
    }
    MathOperations.multiply = multiply;
    function divide(firstNumberValue, secondNumberValue) {
        if (secondNumberValue === 0) {
            console.log("Division by zero is not allowed.");
            return 0;
        }
        return firstNumberValue / secondNumberValue;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
let valueOne = 20;
let valueTwo = 5;
console.log(`Addition: ${MathOperations.add(valueOne, valueTwo)}`);
console.log(`Subtraction: ${MathOperations.subtract(valueOne, valueTwo)}`);
console.log(`Multiplication: ${MathOperations.multiply(valueOne, valueTwo)}`);
console.log(`Division: ${MathOperations.divide(valueOne, valueTwo)}`);
