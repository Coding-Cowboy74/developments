const thisForm  = document['math-form'];
const addButn = document.getElementById("btnAdd");
const subButn = document.getElementById("btnSub");
const multButn = document.getElementById("btnMult");

thisForm.addEventListener("submit", function(event) {
    event.preventDefault();
})

addButn.addEventListener("click", function() {
    let value1 = thisForm.addValue1.value;
    let value2 = thisForm.addValue2.value;
    let displayAnswer = document.createElement("p");

    thisForm.addValue2.value = "";
    thisForm.addValue1.value = "";


    let answer = parseInt(value1) + parseInt(value2);
    displayAnswer.textContent  = "The answer is: " + answer;

    document.getElementById("answerText").appendChild(displayAnswer);
    //alert(answer);
})

subButn.addEventListener("click", function() {
    let subNum1 = thisForm.subValue1.value;
    let subNum2 = thisForm.subValue2.value;
    let subDisplay = document.createElement("p");

    thisForm.subValue1.value = "";
    thisForm.subValue2.value = "";

    let subAnswer = parseInt(subNum1) - parseInt(subNum2);
    subDisplay.textContent = `The answer is: ` + subAnswer;

    //alert(subAnswer);
    document.getElementById("subAnswer").appendChild(subDisplay);
})

multButn.addEventListener("click", function() {
    let multOne = thisForm.multValue1.value;
    let multTwo = thisForm.multValue2.value;
    let newContent = document.createElement("p");



    let multCalulation = parseInt(multOne) * parseInt(multTwo);
    newContent.textContent = "The answer is: " + multCalulation;

    thisForm.multValue2.value = "";
    thisForm.multValue1.value = "";

    //alert(multOne);
    document.getElementById("multiAns").appendChild(newContent);

})