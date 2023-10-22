
const form = document.airport; 
const btnSubmit = document.getElementById("submit");
const btnClear = document.getElementById("clear");

form.addEventListener("submit", function(event) {
    event.preventDefault();

})

btnSubmit.addEventListener("click", function() {
    let firstName = form.fName.value;
    let lastName = form.lName.value;
    let age = form.custAge.value;
    let gender = form.gender.value;

    let checkedLocations = [];
    let checkedDiet = [];
    let chkDietBoxes = document.querySelectorAll("input[name=diet]:checked");
    let chkLocBoxes = document.querySelectorAll("input[name=locations]:checked");

    for (let i = 0; i < chkLocBoxes.length; i++) {
        checkedLocations.push(chkLocBoxes[i].value);
    }

    for (let i = 0; i < chkDietBoxes.length; i++) {
        checkedDiet.push(chkDietBoxes[i].value);
    }

    //alert(form.gender.value);
   /* alert("Name: " + firstName +" " + lastName + 
    "\n" + "Age: " + age + 
    "\n" + "Gender: " + gender +
    "\n" + "Location: " + checkedLocations + 
    "\n" + "Dieatary Restrictions: " + checkedDiet);
*/
    alert(`Name: ${firstName}  ${lastName}
    ${"\n"}Age: ${age}
    ${"\n"}Gender: ${gender}
    ${"\n"}Location: ${checkedLocations}
    ${"\n"}Dietary Requirements: ${checkedDiet}`);
})

btnClear.addEventListener("click", function() {
    form.reset();
})