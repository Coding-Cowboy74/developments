//  initializing the readline sync ability that will be needed to get user information
let readlineSync = require("readline-sync");

//  in the first log message all that we are doing is welcoming the user to the game 
console.log("The Colossal RPG Game");

//  in this log message we are explaining the game type to the user. 
console.log("Welcome to the classic style RPG game, this will excite your if you love classing keyboard style games!");

//  declaring and initializing the question for the players and storing that in the variable to be used 
//  at such time where we will be requiring and needing that in the game. 
let playerName = readlineSync.question("Please enter players name! ");

//  Welcoming the user to the game 
console.log(`Hello, ${playerName} Welcome to the game We hope your enjoyy your time here.`);

class Character {
   constructor(name, hitPoints, manaPoints, magicPoints, inventory) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.manaPoints = manaPoints;
    this.magicPoints = magicPoints;
    this.inventory = inventory;
   }

   printInventory() {
    console.log(`Your current inventory is: ${this.inventory}`);
   }
}

let equipment = ["double cannon rocket", "AK-49 Pulse rifle", "laser survival knife", "static gravitational mines", "ammunitions", "48 automatic hand pulse gun"];
let npcHeklomantler = ["claws", "fangs", "laser eyes"]


const player = new Character(playerName, 100, 50, 50, equipment);

const enemy1 = new Character("Heklomantler", 100, 20, 20, npcHeklomantler);

console.log(enemy1);