// #1 Loop through the following array and count how many "computer's" there are. Log that final count. 

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]; 
var numberCount = 0;

for (let i = 0; i < officeItems.length; i++) {
    //console.log(officeItems[i]);

    if (officeItems[i] === "computer") {
        numberCount++;
    }
    
}
console.log("The final computer count is: " + numberCount);


// #2 Loop through the following array and log to t he console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough");
    }
    else {
        console.log("not old enough");
    }
  }