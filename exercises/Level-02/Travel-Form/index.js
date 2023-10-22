
const form = document.airport; 
const btnSubmit = document.getElementById("submit");
const btnClear = document.getElementById("clear");

form.addEventListener("submit", function(event) {
    event.preventDefault();

})

btnSubmit.addEventListener("click", function() {
    //  declarations for the form and its elements 
    let firstName = form.fName.value;
    let lastName = form.lName.value;
    let age = form.custAge.value;
    let gender = form.gender.value;

    //  declarations for the arrays that would be required to work with the checkboxes. 
    let checkedLocations = [];
    let checkedDiet = [];
    let chkDietBoxes = document.querySelectorAll("input[name=diet]:checked");       //  checking to see if the check box is checked
    let chkLocBoxes = document.querySelectorAll("input[name=locations]:checked");       // checking to see if the check box is checked 

    for (let i = 0; i < chkLocBoxes.length; i++) {
        checkedLocations.push(chkLocBoxes[i].value);        // after looping through, adding the box that are checked to the array
    }

    for (let i = 0; i < chkDietBoxes.length; i++) {
        checkedDiet.push(chkDietBoxes[i].value);            // after looping through, adding the box that are checked to the array
    }

    // This first alert message is made with the ES5 way of doing it. 
    //alert(form.gender.value);
   /* alert("Name: " + firstName +" " + lastName + 
    "\n" + "Age: " + age + 
    "\n" + "Gender: " + gender +
    "\n" + "Location: " + checkedLocations + 
    "\n" + "Dieatary Restrictions: " + checkedDiet);
*/
    //  Here is the ES6 way of making the alert message!
    alert(`Name: ${firstName}  ${lastName}
    ${"\n"}Age: ${age}
    ${"\n"}Gender: ${gender}
    ${"\n"}Location: ${checkedLocations}
    ${"\n"}Dietary Requirements: ${checkedDiet}`);
})

btnClear.addEventListener("click", function() {
    form.reset();       // Resetting the form to be cleared
})