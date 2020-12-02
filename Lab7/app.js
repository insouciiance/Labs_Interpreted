const prompt = require("prompt-sync")();

const [array, length] = inputArray();

if (array == null) {
    return;
} 

const numberOfMatches = findAndReplace(array, length);

console.log(`\nNumber of matches: ${numberOfMatches}`);

for (let i = 0; i < length; i++) {
    console.log(`[${i}]:${array[i]}`);
}

function inputArray() {
    const length = parseInt(prompt("Enter the size of the array: "));
    if (isNaN(length)) {
        return [null, -1];
    }

    const array = [];

    console.log("Enter the array:");
    for (let i = 0; i < length; i++) {
        array[i] = parseInt(prompt(`[${i}]:`));
        if (isNaN(array[i])) {
            return [null, -1];
        }
    }

    return [array, length];
}

function max(array, length) {
    let max = 0;

    for (let i = 0; i < length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

function findAndReplace(array, length) {
    const maxElement = max(array, length);
    let numberOfMatches = 0;

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0 && array[i] % 2 === 1) {
            array[i] = maxElement - array[i];
            numberOfMatches++;
        }
    }

    return numberOfMatches;
}