
// Create a new JavaScript file and put the two arrays at the beginning. You will write a single function that perfroms many operations.
// After every command use, console.lot() to inspect your arrays. A good way to do that is something like this:

/* 
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
*/

/*  Instructional Steps to perform to get the final result

    1. Remove the last item from the vegetable array.
    2. Remove the first item from the fruit array. 
    3. Find the index of "orange". 
    4. Add that number to the end of the fruit array.
    5. Use the length property to find the lenght of the vegetable array. 
    6. Add that number to the end of the vegetable array.
    7. Put the two arrays into one array. Fruit first. Call the new array "food".
    8. Remove 2 elements from your new array starting at index 4 with one method. 
    9. Reverse your array. 
    10. Turn your array into a string and return it. 

if you've done it correctly, the last step should print the following string to the console: 

3,pepper,1,watermelon,orange,apple
*/
modifyString();

function modifyString() {

    var fruit = ["banana", "apple", "orange", "watermelon"];
    var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    
    
    // 1. removing the last item of the vegetable array
    vegetables.pop();
    //console.log(vegetables);

    // 2. removing the first item of the fruit array.
    fruit.shift();
    //console.log(fruit);



    // 3. find the index of the orange
    var findOrange = fruit.indexOf("orange");
    //console.log(findOrange);


    // 4. add the number to the end of the fruit array
    fruit.push(findOrange);
    //console.log(fruit);


    //5. Use the length property to find the lenght of the vegetable array. 
    var vegLenght = vegetables.length;
    //console.log(vegLenght);


    //6. Add that number to the end of the vegetable array.
    vegetables.push(vegLenght);
    //console.log(vegetables);

    //7. Put the two arrays into one array. Fruit first. Call the new array "food".
    var food = fruit.concat(vegetables);
    //console.log(food);


    //8. Remove 2 elements from your new array starting at index 4 with one method. 
    var modFood = food.splice(4, 2);
    //console.log(food);


    //9. Reverse your array. 
    food.reverse();
    //console.log(food);


    //10. Turn your array into a string and return it.
    var strArr = food.toString();
    console.log(strArr);
}   


