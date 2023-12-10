

axios.get("https://api.vschool.io/pokemon")
    .then(res => {
        console.log('data', res.data)       // logging the data to be sure axios is working and displaying the data 
        console.log(res.data?.objects[0].pokemon)   // logging the data to the exact point since this one takes more steps

        
        getDataForDOM(res.data?.objects[0].pokemon)     //  Passing the data to the function to have access to the data's name att. 
    })

    .catch(err => console.log(err))     // Logging the error, if it gets thrown 

function getDataForDOM(data) {

        for (let i = 0; i < data.length; i++) {     //  Looping through the data to create new h2 for display per name in JSON data
            // Creating the new elements 
            const h2 = document.createElement("h2");    

            //  Adding the text from the JSON data 
            h2.textContent = data[i].name;

            //  Adding the element to the body of the document 
            document.body.appendChild(h2);
        }
}