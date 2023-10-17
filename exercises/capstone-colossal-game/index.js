//  initializing the readline sync ability that will be needed to get user information
let readlineSync = require("readline-sync");

let isRunnig = true;

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
   constructor(name, healthPoints, attackPoints, magicPoints, inventory) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
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
const player = new Character(playerName, 85, 10, 50, equipment);

//  Instances of the character constructor for the vilians of different spieces of types. 
const lizardSpecies = new Character("Heklomantler", 10, 2, 20, npcHeklomantler);
const gremlinSpecies = new Character("Voochooaminion", 50, 8, 20, npcVoochooaminion)
const demonSpecies = new Character("DemonStrife", 10, 3, 3, 20, npcDemonStrife);

// variable for the list of all the enemies
let gameEnemies = [lizardSpecies, gremlinSpecies, demonSpecies]

const getRandomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

player.printInventory();



while (isRunnig) {
   if (gameEnemies.length === 0) {
      console.log(`Congrats, ${player.name} you have beaten all characters in the game and you are now the master to the game.`);

      process.exit();
   }
   let decisionTime = readlineSync.question("What do you wanna do, press [w] for walk, [i] for inventory, or [q] to quit: ", {limit: ['w', 'i', 'q']});

   // conditional statement to find out if the user/player has pressed "w" for walking, "i" to display your inventory, or "q" to quit.
   if (decisionTime === "w") {      // for walking 
      console.log("Your chose to walk");

      let attackChance = getRandomNumber(1, 4);
      //console.log(attackChance);

      if (attackChance === 3) {
         let enemyChoices = getRandomNumber(0, gameEnemies.length -1);
         let currentEnemy = gameEnemies[enemyChoices];
         console.log(`${currentEnemy.name} has appeared`);
         console.log("You have been attacked by: ", currentEnemy);

         const choices = ["fight", "run"];

         let runningOrFighting = readlineSync.keyInSelect(choices, "do you want to fight or run?");

         if (choices[runningOrFighting] === "fight") {
            playerFighting(currentEnemy);
         }
         
         else if (choices[runningOrFighting] === "run") {
            playerRun(currentEnemy);
         }

      }
   }

   else if (decisionTime === "i") {    // to display the players inventory 
      player.printInventory();
   }

   else if (decisionTime === "q") {    // to quit the game
      console.log("your chosose to quite the game\n thanks for playing");
      isRunnig = false;
   }
}

// Function that will be triggered when needed to show that the player has chosen to run!
function playerRun(currentEnemy) {
   console.log(`Player is running from ${currentEnemy.name}`);

   let runChance = getRandomNumber(1, 2);

   if (runChance === 1) {
      console.log(`Congrats ${player.name} were able to escape!`)
   }

   else if (runChance === 2) {
      console.log(`You did not get away, you have to fight ${currentEnemy.name}`);
      playerFighting(currentEnemy);
   }
}

// Function that will be triggered when needed to show that the player has chosen to fight!!!!
function playerFighting(currentEnemy) {
   while (player.healthPoints > 0 && currentEnemy.healthPoints > 0) {
      currentEnemy.healthPoints -= player.attackPoints;

      console.log(`You dealth ${player.attackPoints} in damage! Currently ${currentEnemy.name} is now at ${currentEnemy.healthPoints}`);

      player.healthPoints -= currentEnemy.attackPoints;

      console.log(`${currentEnemy.name} dealt damage to you, your current health is at ${player.healthPoints}`)

      if (player.healthPoints <= 0) {
         console.log("Sorry you have died!");
         isRunnig = false;
      }

      else if (currentEnemy.attackPoints <= 0) {
         console.log(`You have beaten ${currentEnemy.name}`);
         gameEnemies = gameEnemies.filter(item => item.name !== currentEnemy.name);
      }
   }
}




