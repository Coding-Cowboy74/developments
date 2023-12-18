const myTodo = document.todoForm;       //  variable for the form to create a new todo item
const price = document.getElementById("itemPrice");
const imgURL = document.getElementById("textUrl");
const itemDesc = document.getElementById("descText");
const btnClear = document.getElementById("btnClear");

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
        const selDiv = document.createElement("div");
        const endDiv = document.createElement("div");

        //  Here we are setting the attributes to the certian elements that need them defined. 
        chkbx.setAttribute("type", "checkbox");
        chkbx.checked = data[i].completed;
        
        //  CSS Styling taking place here in JavaScript 
        btnDel.style.margin = "10px 10px 60px 10px";
        btnDel.style.padding = "10px 10px 10px 10px";

        //  Here we are setting the text or displaying details to be shown, this is and will be based off of what the 
        //  JSON database is saying that it will be. Being that all this data is coming from JSON. 
        imgs.src = data[i].imgUrl;
        h2.textContent = data[i].title;
        price.textContent = "$" + data[i].price;
        desc.textContent = data[i].description;
        btnDel.textContent = "X";

        //  Here is where all the newly created and defined elements are going to be add to the DOM for viewing purposes.
        selDiv.append(chkbx, h2);
        endDiv.append(price, desc, btnDel);
        document.getElementById("resultsContainer").append(imgs, selDiv, endDiv);
        

        //  Here we are checking to see from the supplied data if the completed property is set to tur on a load.
        //  We need to be sure that the item(s) are being loaded with a strike-through in the items text. 
        //  Otherwise the item(s) will remain unaltered.  
        if (chkbx.checked === true) {
            h2.style.textDecoration = "line-through";       // <----    on load strike-through the items text
        } else {
            h2.style.textDecoration = "none";               // <----    on load leave the text alone
        }


        //PART 2 DELETE REQUEST
        btnDel.addEventListener("click", (e) => {
            axios.delete("https://api.vschool.io/stevenmartin/todo/" + data[i]._id)

                .then(res => {
                    console.log(res.data);
                    getData();
                })

                .catch(err => console.log(err))
        })

        // PART 3 PUT REQUEST
        //  Each todo will have a separate checkbox, this way it can be checked and amost being check the items name will 
        //  be marked as a completed item, via by having a strike-through line through the items text. 
        chkbx.addEventListener("click", (e) => {
            //  Now here we are checking to from the supplied data if the completed is true or false and checking that check box
            //  based on that value in JSON data.
            if (chkbx.checked === false) {
                axios.put("https://api.vschool.io/stevenmartin/todo/" + data[i]._id, {completed: false})

                    .then(res => {
                        console.log(res.data);      //  log the data 
                        h2.style.textDecoration = "none";           //  <----   Make sure that the text is left alone
                    })

                    .catch(err => console.log(err))         // catch the error 
            } else {
                axios.put("https://api.vschool.io/stevenmartin/todo/" + data[i]._id, {completed: true})

                    .then(res => {
                        console.log(res.data);      //  log the data 
                        h2.style.textDecoration = "strike-through";     //  <----   Make sure that there a strike-through line
                    })

                    .catch(err => console.log(err))             //  catch the error 
            }
        })
    }
}

//  The clearlist function is and only has one real purpose here. What we need to do is to clear the list being displayed on the 
//  system, if there is a list being displayed that is. 

//  Otherwise what would happen if you had a list being displayed alread, it would just append to the already display list of data. 
//  We want it to start over from scratch so to speak.
function clearList() {
    const el = document.getElementById("list-view");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}
getData();

//  The clear or reset button, all it is meant to do is to clear any the input fields that have any type of data or text 
//  in the form. Then the user will get a message from the computer about needing to add the data again to be able to save one.
btnClear.addEventListener("click", (e) => {
    myTodo.Title.value = "";
    myTodo.Price.value = "";
    myTodo.textUrl.value = "";
    myTodo.descText.value = "";

    alert("You have cleared the information and cannot save a new item, please add all the details!");
})

myTodo.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTodo = {
        title: myTodo.itemTitle.value,
        price: myTodo.itemPrice.value,
        imgUrl: myTodo.itemUrl.value,
        description: myTodo.itemDesc.value

    }

    axios.post("https://api.vschool.io/stevenmartin/todo", newTodo)

        .then(res => {
            console.log(res.data);
            getData();
        })
})