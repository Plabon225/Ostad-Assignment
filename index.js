// Problem Number (1)

let a = 10;
let b = 4;
function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(a, b));


// Problem Number (2)

let number = 9;
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(number));



// Problem Number (3)

let nums = [45, 2, 19,0,1,-5,-2, 100];
function findMin(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
console.log(findMin(nums));


// Problem Number (4)

const numbersArray = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

console.log(filterEvenNumbers(numbersArray));


// Problem Number (5)

const numberArray = [5, 3, 8, 1, 2,-2];

function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

console.log(sortArrayDescending(numberArray));


// Problem Number (6)

const example = "Hello World";

function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter(example));


// Problem Number (7)

const exampleArray = [10, 20, 30, 40, 50];

function findAverage(numbers) {
    if (numbers.length === 0) return 0; // Handle empty arrays
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

console.log(findAverage(exampleArray));


// Problem Number (8)

let year = 2024;
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

console.log(isLeapYear(year));





