axios.get("https://api.vschool.io/pokemon")
.then(response => {
    console.log(response.data);
    displayDOMData(response.data)
})
.catch(error => console.log(error))

function displayDOMData(data) {
    for (let i = 0; i < data.length; i++) {
        //  creating the needed elements 
        const div = document.createElement("div");
        const charName = document.createElement("h2");
        

        //  adding the needed descriptions to the page based on the name of the character
        charName.textContent = data[i].name;

        //  adding the new elements to the web page for display
        div.append(charName);

    }
}