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

//  Coded and initialized the constructor function with properties
class Character {
   constructor(name, hitPoints, manaPoints, magicPoints, inventory) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.manaPoints = manaPoints;
    this.magicPoints = magicPoints;
    this.inventory = inventory;
   }

   //   The function here is simple, just to return a log message with the characters inventory
   printInventory() {
    console.log(`Your current inventory is: ${this.inventory}`);
   }
}

//   Here is the list of the characters equipment inventory list, made for the type of character and if villian or hero
let equipment = ["double cannon rocket", "AK-49 Pulse rifle", "laser survival knife", "static gravitational mines", "ammunitions", "48 automatic hand pulse gun"];
let npcHeklomantler = ["claws", "fangs", "laser eyes"]
let npcVoochooaminion = ["tail whip", "sonic scream", "mirage"];
let npcDemonStrife = ["soul snatcher", "mezmorizer", "wing strike"];

//  Instance of the character constructor for the hero character 
const player = new Character(playerName, 100, 50, 50, equipment);

//  Instances of the character constructor for the vilians of different spieces of types. 
const lizardSpecies = new Character("Heklomantler", 100, 20, 20, npcHeklomantler);
const gremlinSpecies = new Character("Voochooaminion", 50, 20, 20, npcVoochooaminion)
const demonSpecies = new Character("DemonStrife", 100, 50, 20, 20, npcDemonStrife);

// variable for the list of all the enemies
let gameEnemies = [lizardSpecies, gremlinSpecies, demonSpecies]

const getRandomNumber(min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

player.printInventory();

