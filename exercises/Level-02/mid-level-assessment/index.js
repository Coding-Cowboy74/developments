/*  Challenge 1: Sorting an Array
    Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
*/

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

function sortNumbers(numbers) {
    // const result = numbers.sort(function(a, b) {
    //     return a - b;
    // })

    const result = numbers.sort((a, b) => a - b);
    return result
}

/*  Challenge 2: Mapping an Array
    Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
*/

const strings = ["hello", "world", "javascript"];
const upperCaseStrings = convertToUppercase(strings);
console.log(upperCaseStrings);

function convertToUppercase(strings) {
    const result = strings.map(function(stringX) {
        return stringX.toUpperCase();
    })

    //const result = strings.map(stringX.toUpperCase());
    return result;
}