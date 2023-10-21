
//  1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters
//  capilizeAndLowercase("HelLo") // => "HELLOhello"

//  2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down
//  Hint ****** You'll need to use the math.floor()
/*  findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5  */

//  3. Write a function that uses the slice() and other functions you've written to return the first half of the given string. 
/*
    returnFirstHalf("Hello") // => "He"
    returnFirstHalf("Hello World") // => "Hello"

*/

//  4. Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercasea.
/*
    Hint *****  if your string is odd, use math.floor() to round down
    capilizeAndLowercase("Hello") // => "HEllo"
    capilizeAndLowercase("Hello World") // => "HELLO world"

*/

// Optional Code Challange 

//  This one is a step up in difficulty and utilizes the .split() string method and the .join() array method
//  Write a function that takes a string as a parameter and capitalizes any character that follows a space.

//  capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

// Function calls 

//capilizeAndLowercase("hello");
//roundDown("kajsfjdalk");
//findTheMiddleIndex("this is a test string");
//findTheFirstHalf("this is another testing string");

//1. 
function capilizeAndLowercase(greeting) {
  var x = greeting.toUpperCase();

  console.log(x + greeting);
}
//2. 
function roundDown(sumNumber) {
    var test = Math.floor(sumNumber.length / 2);

    console.log(test);
}
//3.
function findTheMiddleIndex(text) {
    var middle = text.length;
    var rounded = Math.floor(middle);

    console.log(rounded);
}

//4.
function findTheFirstHalf(text2) {
    var count = text2.length / 2; 
    var str1 = text2.slice(0, count);
    var str2 = text2.slice(count);
    
    console.log(str1.toUpperCase() + str2.toLowerCase());
}

//4.
