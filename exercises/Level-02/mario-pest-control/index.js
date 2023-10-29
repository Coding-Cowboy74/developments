// starting with the constant prices that will never change, this is the price that we know that will be multiplied by the number of those characters mario catches. 
const goombaPrice = 5;
const bobombsPrice = 7;
const cheepCheepPrices = 11;

const form = document['control-form'];

form.addEventListener("submit", function (e) {
    e.preventDefault();
})

let goombaCount = form.goombaAmount;

let goombaMath = parseInt(goombaCount) * parseInt(goombaPrice);

let calcula