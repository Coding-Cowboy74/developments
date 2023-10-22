
const form = document.airport; 
const btnSubmit = document.getElementById("submit");

form.addEventListener("submit", function(event) {
    event.preventDefault();

})

btnSubmit.addEventListener("click", function() {
    let firstName = form.fName.value;
    let lastName = form.lName.value;

    alert(`Name: ${firstName}  ${lastName}`);
})