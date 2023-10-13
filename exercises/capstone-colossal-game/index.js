//  initializing the readline sync ability that will be needed to get user information
let readlineSync = require("readline-sync");

//  in the first log message all that we are doing is welcoming the user to the game 
console.log("The Colossal RPG Game");

//  in this log message we are explaining the game type to the user. 
console.log("Welcome to the classic style RPG game, this will excite your if you love classing keyboard style games!");

//  declaring and initializing the question for the players and storing that in the variable to be used 
//  at such time where we will be requiring and needing that in the game. 
let playerName = readlineSync.question("Please enter players name! ");
