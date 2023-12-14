
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
            chkbx.checked = data[i].competed;

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
            
        }
    }