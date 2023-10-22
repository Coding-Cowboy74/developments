
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

    //alert(form.gender.value);
    alert("Name: " + firstName +" " + lastName + 
    "\n" + "Age: " + age + 
    "\n" + "Gender: " + gender +
    "\n" + "Location: " + 
    "\n" + "Dieatary Restrictions: ");
    //alert(`Name: ${firstName}  ${lastName} ${gender}`);
})

btnClear.addEventListener("click", function() {
    form.reset();
})