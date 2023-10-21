//Preliminaries 

//1. Write a for loop that prints to the console the number 0 through 9. 
//2. Write a for loop that prints to the console the number 9 though 0. 
//3. Write a for loop that prints these fruits to the console. 
        //const fruit = ["banana", "orange", "apple", "kiwi"]

// #1 Write for loop that prints out to the console 0 through 9
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    
}
// Space between loops
//console.log("\n");


// Write a for loop that prints out to the console 9 through 0

const reverse = [9, 8,8, 7, 6, 5, 4, 3, 2, 1, 0];

for (i = 9; i >= 0; i--) {
   // console.log(i);
}


// Space between loops
//console.log("\n");

//3. Write a for loop that prints these fruits to the console. 
        //const fruit = ["banana", "orange", "apple", "kiwi"]

const fruit = ["banana", "orange", "apple", "kiwi"];

for (let i = 0; i < fruit.length; i++) {
    //console.log(fruit[i]);
}

        //Bronze Medal 

//1. Write a for loop that will push the numbers 0 through 9 to an array
//2. Write a for loop that prints to the console only even numbers 0 through 100.
//3. Write a for loop that will push every other fruit to an array. 
        //const fruit = ["banana", "orange", "apple", "kiwi", "peach"]


//1. Write a for loop that will push the numbers 0 through 9 to an array
var testArr = [];
var testNmb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9];

for (i = 0; i < testNmb.length; i++) {
   // testArr.push(testNmb[i]);
    //console.log(testArr[i]);
}


//2. Write a for loop that prints to the console only even numbers 0 through 100.

var final = 100; 

for (let i = 0; i <= final; i++) {
    //console.log(i);
    if (i % 2 === 0) {
        //console.log(i);
    }
}

//3. Write a for loop that will push every other fruit to an array. 
        //const fruit = ["banana", "orange", "apple", "kiwi", "peach"]


const fruits = ["banana", "orange", "apple", "kiwi", "peach"];

for (let i = 0; i < fruits.length; i+=2) {
    console.log(fruits[i]);
}