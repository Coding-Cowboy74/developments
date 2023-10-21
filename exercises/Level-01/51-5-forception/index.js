
// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the secnd array will be the alphabet. Using a for loop within a for loop, create and return array that looks lik this: 

/*
function forception(people, alphabet){
    // your code here
}
// Output:
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
*/

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];       //  array of the people to be used and displayed in the for loop
var alphabet = "abcdefghijklmnopqrstuvwxyz";                        //  array of the alphabet being useed to be displayed after every person is displayed: person then alphabet --> repeat
var newArr = [];        // new array that the data will be pushed to and displayed at the end

//  Below here is the function that is being used to loop there the people array and display each name but will display the alphabet after each name.
// person --> alphabet --> person --> alphabet  until the loops are finished and the array's end
forception(people, alphabet);


function forception(people, alphabet) {
    var newAlphabet = alphabet.split("").join("");
    //var newPeople = people.toString().split("").join(":");
    for (let i = 0; i < people.length; i++) {
        newArr.push(people[i] + ":");
        for (let k = 0; k < newAlphabet.length; k++) {
            newArr.push('"' + newAlphabet[k] + '"');
        }
    }
    let displayResults = newArr.toString();
    console.log(displayResults)
    
}

