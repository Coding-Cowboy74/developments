const axios = require("axios");

// function assignResponseToVariable(response) {
//     console.log(response.data);
// }

axios.get('https://swapi.co/api/people/1').then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error)
});