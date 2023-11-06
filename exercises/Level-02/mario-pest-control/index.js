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
    e.preventDefault();

    const goombaTotal = form.goombaAmount.value;
    console.log(goombaTotal);

const goombaCoin = goombaTotal * 5;

document.getElementById("goombaTotal").textContent = goombaCoin;

})
/*
goomBtn.addEventListener("click", function() {

    //let amountInquiry = document.goombaAmount.value;

    let calc = parseInt(form.goombaAmount.value) * parseInt(goombaPrice.textContent);

    //console.log(goombaPrice);
})*/
