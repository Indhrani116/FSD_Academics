"use strict";
let dataValues = [10, 20, 10, 30, 20, 10, 40];
let occurrenceMap = {};
for (let valuePosition = 0; valuePosition < dataValues.length; valuePosition++) {
    let presentValue = dataValues[valuePosition];
    if (occurrenceMap[presentValue]) {
        occurrenceMap[presentValue]++;
    }
    else {
        occurrenceMap[presentValue] = 1;
    }
}
console.log("Occurrences of Each Element:");
for (let arrayElement in occurrenceMap) {
    console.log(`${arrayElement} : ${occurrenceMap[arrayElement]}`);
}
