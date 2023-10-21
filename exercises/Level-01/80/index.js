// Setting up exercise Project

/*  write a function that takes an array of numbers and returns the largest (without using Math.max())

// test data
    console.log(largest([6, 13, 250, 3])) // --> 250
    console.log(largest([3, 5, 2, 8, 1])) // --> 8
    console.log(largest([-13, 40, 3, 0, 19, 22])) // --> 40

*/
let max = 0;


function largest(myarr) {
    for (let i = 0; i < myarr.length; i++) {
        if (myarr[i] > max) {
            max = myarr[i];
            
        }
    }
    return max;
}


console.log(largest([3, 5, 2, 8, 1]));
console.log(largest([-13, 40, 3, 0, 19, 22]));
console.log(largest([6, 13, 250, 3]));
/*
Write a function that takes an arrary of words and a character and returns each word that has that character present.

// test data
    console.log(letterWithStrings(["$hello", "%%%%", "test!", "!"])) // --> ["$hello", "test!"]
    console.log(letterWithStrings(["#3", "$$$", "C%4!", "Hey!", "!"])) // --> ["C%4!", "Hey!"]
    console.log(letterWithStrings(["yellow", "green", "up", "down", "dog", "h"])) // --> []
*/
function letterWithStrings(wordArr, character) {
    let characterArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].includes(character)) {
            characterArr.push(wordArr[i]);
        }
    }
    return characterArr;
}

console.log(letterWithStrings(["$hello!", "%%^%%", "test!"], "!"));
console.log(letterWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));
console.log(letterWithStrings(["yellow", "green", "up", "down", "dog"], "h"));


/*
write a function that takes a num1 and num2 and returns whether num1 is divisible by num2. 

// test data 
    console.log(isDivisible(4, 2)) // --> true
    console.log(isDivisible(9, 3)) // --> true
    console.log(isDivisible(15, 4)) // --> false

*/

console.log(isDivisible(4,2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));


function isDivisible(num1, num2) {

    if (num1 % num2 === 0) {
        //console.log("true");
        return true
    }

    else {
        //console.log("false");
        return false
    }
}
