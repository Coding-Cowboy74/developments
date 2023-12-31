
/* 
    Code Challenges

    You are given an array containing integers. Your task is to implement the solution function to sort the array
    in ascending order, while preserving the original index positions of -1 values.

    Write a function solution that takes in an array and returns new array with the following conditions:
        All non -1 values in the array should be sorted in ascending order.
        The -1 values should retain their original index positions in the sorted array. 
*/

function solution(arr){
    //  making a new copy of the original array 
    let sortedArr = [... arr];

    //  finding the -1 values and filtering those values out of the array. 
    sortedArr = sortedArr.filter(x => x != -1).sort((a, b) => a - b);

    //  Looping through the array and splicing back in the -1 values based on there indicies.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            sortedArr.splice(i, 0, -1);
        }
    }
    return sortedArr;
}
/*
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))
*/


/* 
    Challenge 2: Counting Vowels

    Write a JavaScript function called countVowels that takes a string as input and counts the number of vowels (a, e, i, o, u)
    in the string. The function should return the count. 

    Implement the countVowels function using either the provided example solutions or your own solution. 
*/

//  Here are the data and the console log to run the function 
const input1 = "Hello World";
//console.log(countVowels(input1));
//  Here are the data and the console log to run the function 
const input2 = "Counting Vowels";
//console.log(countVowels(input2));


function countVowels(arr) {
    
    let counter = 0;        //  <-- setting the counter to zero, will be incrementing per finding a new vowel

    let vowels = "aeiou";       //  <-- setting up the data that we are currently looking for, in this case it is all/any vowels 

    for (let char of arr) {     //  <-- Here we are loopikng through the arr looking at each character in the arr

        char = char.toLowerCase();      //  <-- making sure all characters are going to be that of the low case characters. 

        if (vowels.includes(char)) {        //  <-- checking each character and if it is a vowel, increase the counter by 1
            counter++;      //  <-- Imcrementing the counter each time we find a vowel
        }
    }
    //  Let us go ahead and return the number of the count
    return counter;
}

