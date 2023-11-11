// 1. Make array of numbers that are doubles of the first array. 
function doubleNumbers(myArr) {
    const doubles = myArr.map(function(num) {
        return num * 2;
    })
    return doubles;
}

console.log(doubleNumbers([2, 5, 100]))



// 2. Take an array of numbers and make them strings
function stringItUp(arr){
    // your code here
    const numsToStrings = arr.map(function(num) {
        return "" + num;
    })
    return numsToStrings;
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  
  
// 3. Capitalize the first letter of each name and make the rest of the characters lowercase
function capitalizeNames(arr){
    // your code here 
    const capNames = arr.map(function(name) {
        return name;
    })
    return capNames;
  }
  
  //console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  


// 4. Make an array of strings of names
function namesOnly(arr){
    // your code here
    const listOfNames = arr.map(function(names) {
        return names.name;
    })
    return listOfNames;
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  


// 5. Make an array of strings of the names saying whether or not they can go to the Matrixx
function makeStrings(arr){
    // your code here
    const movies = arr.map(function(areKids) {
        if (areKids.age > 18) {
            return areKids.name + ` can go to the Matrix`;
        }
        else {
            return areKids.name + ` is under age!`;
        }
        return areKids.name;
    })
    return movies;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
 
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

// 6. Make the array of strings of the names saying whether or not they can go to the matrix
function readyToPutInTheDOM(arr){
    // your code here
    const custDOM = arr.map(function(custHTML) {
        return "<h1>" + custHTML.name + "</h1><h2>" + custHTML.age + "</h2>";
    })
    return custDOM;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]