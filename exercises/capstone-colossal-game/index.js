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
const player = new Character(playerName, 5, 10, 50, equipment);

//  Instances of the character constructor for the vilians of different spieces of types. 
const lizardSpecies = new Character("Heklomantler", 10, 2, 20, npcHeklomantler);
const gremlinSpecies = new Character("Voochooaminion", 50, 8, 20, npcVoochooaminion)
const demonSpecies = new Character("DemonStrife", 10, 3, 3, 20, npcDemonStrife);

// variable for the list of all the enemies
let gameEnemies = [lizardSpecies, gremlinSpecies, demonSpecies]

// Random number generator based on parameter inputs 
const getRandomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// Printing the players inventory or weapons that the player has. 
player.printInventory();


//    Using a while loop to keep looping until the game has been triggered that the game is no longer running. 
while (isRunnig) {
   if (gameEnemies.length === 0) {     // if the enemies array is at zero then the game needs to end
      
      // Display a congrats message via the console log to the player 
      console.log(`Congrats, ${player.name} you have beaten all characters in the game and you are now the master to the game.`);

      process.exit();      // exit or close the game from running. 
   }

   // created a choice to be made by the player on what to do for walking, checking inventory, or quiting 
   let decisionTime = readlineSync.question("What do you wanna do, press [w] for walk, [i] for inventory, or [q] to quit: ", {limit: ['w', 'i', 'q']});

   // conditional statement to find out if the user/player has pressed "w" for walking, "i" to display your inventory, or "q" to quit.
   if (decisionTime === "w") {      // for walking 
      console.log("Your chose to walk");

      let attackChance = getRandomNumber(1, 4);
      //console.log(attackChance);

      if (attackChance === 3) {     // checking the number generator and if the number and if its a 3 then the following code is triggered
         let enemyChoices = getRandomNumber(0, gameEnemies.length -1);     // getting the index value of the enemy
         let currentEnemy = gameEnemies[enemyChoices];
         console.log(`${currentEnemy.name} has appeared`);     // messasge is displayed to show the enemy that is attacking 
         //console.log("You have been attacked by: ", currentEnemy);

         // creating a choice again whether to "fight" or "run"
         const choices = ["fight", "run"];

         // created an input choice for the player to chose from
         let runningOrFighting = readlineSync.keyInSelect(choices, "do you want to fight or run?");

         if (choices[runningOrFighting] === "fight") {
            playerFighting(currentEnemy);    // if player chose to fight run the fight function 
         }
         
         else if (choices[runningOrFighting] === "run") {
            playerRun(currentEnemy);         // if the player chose to run then run the RUN function 
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

   // Create another random number generator that is based on a 50/50 chance to escape or not
   let runChance = getRandomNumber(1, 2);

   if (runChance === 1) {
      console.log(`Congrats ${player.name} were able to escape!`)    // if its a 1 then successfully escaped
   }

   else if (runChance === 2) {
      console.log(`You did not get away, you have to fight ${currentEnemy.name}`);  // if its a 2 then escaped failed and now you must fight. 
      playerFighting(currentEnemy);    // since escaped failed then the fight function has to be called again
   }
}

// Function that will be triggered when needed to show that the player has chosen to fight!!!!
function playerFighting(currentEnemy) {
   while (player.healthPoints > 0 && currentEnemy.healthPoints > 0) {      // as long as both the player and enemy health points are greater then zero keep running this loop. 

      currentEnemy.healthPoints -= player.attackPoints;     // keep subtracting the health points until dead 

      console.log(`You dealth ${player.attackPoints} in damage! Currently ${currentEnemy.name} is now at ${currentEnemy.healthPoints}`);

      player.healthPoints -= currentEnemy.attackPoints;     // keep subtractiong the health points until dead

      // displaying the current status of the fight and the health points 
      console.log(`${currentEnemy.name} dealt damage to you, your current health is at ${player.healthPoints}`)

      if (player.healthPoints <= 0) {
         console.log("Sorry you have died!");      // displaying message to the player that you are dead and stopping the game
         isRunnig = false;
      } 
      
      else if (currentEnemy.healthPoints <= 0) {
         console.log(`You have beaten ${currentEnemy.name}`);     // displaying a message that you had killed that enemy

         // updating the array of enemy characters, so that once dead will be removed from the array 
         gameEnemies = gameEnemies.filter(item => item.name !== currentEnemy.name);
      }
   }
}




