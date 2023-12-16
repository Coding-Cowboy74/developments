function getData() {
    axios.get("https://api.vschool.io/stevenmartin/todo/")
        .then( res => {
            console.log(res.data)
            displayFoodList(res.data)
        })

        .catch(err => console.log(err))
}

function displayFoodList(data) {
    //  Here we are creating the new elements that are going to be needed to be used for displaying purposes into the DOM object. 
    for (let i = 0; i < data.length; i++) {
        const imgs = document.createElement("img");
        const chkbx = document.createElement("input");
        const h2 = document.createElement("h2");
        const price = document.createElement("p");
        const desc = document.createElement("p");
        const btnDel = document.createElement("button");
        const detailsDiv = document.createElement("div");

        //  Here we are setting the attributes to the certian elements that need them defined. 
        chkbx.setAttribute("type", "checkbox");
        chkbx.checked = data[i].completed;

        //  Here we are setting the text or displaying details to be shown, this is and will be based off of what the 
        //  JSON database is saying that it will be. Being that all this data is coming from JSON. 
        imgs.src = data[i].imgUrl;
        h2.textContent = data[i].title;
        price.textContent = data[i].price;
        desc.textContent = data[i].description;
        btnDel.textContent = "X";

        //  Here is where all the newly created and defined elements are going to be add to the DOM for viewing purposes.
        
        document.getElementById("details-side").append(imgs, h2, price, desc, btnDel);
    }
}
getData();