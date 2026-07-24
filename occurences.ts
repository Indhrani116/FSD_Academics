let dataValues: number[] = [10, 20, 10, 30, 20, 10, 40];

let occurrenceMap: { [key: number]: number } = {};

for (let valuePosition = 0; valuePosition < dataValues.length; valuePosition++) {
    let presentValue: number = dataValues[valuePosition];

    if (occurrenceMap[presentValue]) {
        occurrenceMap[presentValue]++;
    } else {
        occurrenceMap[presentValue] = 1;
    }
}

console.log("Occurrences of Each Element:");

for (let arrayElement in occurrenceMap) {
    console.log(`${arrayElement} : ${occurrenceMap[arrayElement]}`);
}