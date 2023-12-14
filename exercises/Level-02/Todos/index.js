
// REQUIREMENTS
// 
//  PART 1 - GET Request
// - The user can see their list of current todo's
// - Todo's show up as soon as the page loads
// - if a todo item is complete, it should have a strikethrough line in it
// - Imgages should be displayed if there are any

axios.get("https://api.vschool.io/stevenmartin/todo")
    .then(res => {
        console.log(res.data);
        displayFoodList(res.data);
    })

    .catch(err => console.log(err))

    function displayFoodList(data) {

        for (let i = 0; i < data.length; i++) {

            //  Here is is the list of newly created elements that will be injected into the DOM
            const imgs = document.createElement("img");
            const chkbx = document.createElement("input");
            const h2 = document.createElement("h2");
            const price = document.createElement("p");
            const desc = document.createElement("p");
            const btnDel = document.createElement("button");
            const detailsDiv = document.createElement("div");
            const imgDiv = document.createElement("div");

            //  Here is the setting attributes of elements area
            chkbx.setAttribute("type", "checkbox");
            chkbx.checked = data[i].completed;

            // Here is the area for setting the text or retrieving of data for text displaying 
            imgs.src = data[i].imgUrl;
            chkbx.textContent = "";
            h2.textContent = data[i].title;
            price.textContent = "$" + data[i].price;
            desc.textContent = data[i].description;
            btnDel.textContent = "X";

            //  Here is where all the elements are being appended (added) to the DOM for us to see
            imgDiv.append(imgs);
            detailsDiv.append(h2, price, desc, btnDel)
            //document.getElementById("img-side").append(imgs);
            document.getElementById("details-side").append(chkbx, imgDiv, detailsDiv);

            // Checking to see from the supplied data if the completed property is set to true on load 
            // we need to be sure that the item(s) are bing loaded with a strike through the item(s). 
            // Otherwise the item(s) will remain unaltered 
            if (chkbx.checked === true) {
                h2.style.textDecoration = "line-through";       //  <---- on load strike the item name
            } else {
                h2.style.textDecoration = "none";               //  <---- on load if not completed leave alone. 
            }



            // Part 3 PUT REQUEST 
            //      Each Todo will have a checkbox where it can be marked as complete or incomplete 
            //      Checking the checkbox should update the database
            
            chkbx.addEventListener("click", (e) => {

                if (chkbx.checked === false) {      //  If item(s) are checked then

                    axios.put("https://api.vschool.io/stevenmartin/todo/" + data[i]._id, {completed: false})

                    .then( res =>{
                        h2.style.textDecoration = "none";       //  <---- Make sure the item is left alone no strike through 
                    } )

                    .catch(err => console.log(err))         //  catch the error 
                }

                else {

                    axios.put("https://api.vschool.io/stevenmartin/todo/" + data[i]._id, {completed: true})

                    .then( res => {
                        console.log(res);
                        h2.style.textDecoration = "line-through";   //  <---- Make sure the item has a strike through
                    })

                    .catch(err => console.log(err))     //  catch the error
                }
            })
            
        }
    }