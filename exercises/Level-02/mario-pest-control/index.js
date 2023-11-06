// starting with the constant prices that will never change, this is the price that we know that will be multiplied by the number of those characters mario catches. 
const goombaPrice = 5;
const bobombsPrice = 7;
const cheepCheepPrices = 11;

const goomBtn = document.getElementById("calcGoombas");
const bombsBtn = document.getElementById("calcBombs");
const sheepsBtn = document.getElementById("calcSheeps");


// need variables for the declarations of the 3 button controls in the form so that they can be used for the click events. 

const form = document.controlForm;

form.addEventListener("submit", function (e) {
    // Prevent the default from happening so that the form cannot update and clear all form elements
    e.preventDefault();

    // In this section we are declaring the needed the information as in the amount of the goombas and then 
    // multiplying that by the constant value at top.
    const goombaTotal = form.goombaAmount.value;
    //console.log(goombaTotal);

    const goombaCoin = goombaTotal * goombaPrice;       //  math part of it multiplying the 2 factors.

    document.getElementById("goombaTotal").textContent = goombaCoin + " coins";        // displaying the answer to the user


    // In this section we are declaring the needed the information as in the amount of the bob-ombs and then 
    // multiplying that by the constant value at top.
    const bobombsTotal = form.bombsAmount.value;
    //console.log(bobombsTotal);

    const bobombsCoin = bobombsTotal * bobombsPrice;    // math part of it multiplying the 2 factors

    document.getElementById("bombsTotal").textContent = bobombsCoin + " coins";        // displaying the answer to the user

    // In this section we are declaring the needed the information as in the amount of the sheep-sheeps and then 
    // multiplying that by the constant value at top.
    const sheepGrandTotal = form.cheepAmount.value;     

    const sheepCoins = sheepGrandTotal * cheepCheepPrices;  // math part of it multiplying the 2 factors

    document.getElementById("sheepsTotal").textContent = sheepCoins + " coins";     // displaying the answer to the user
})

