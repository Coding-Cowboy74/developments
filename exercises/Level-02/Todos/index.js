
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

            const imgs = document.createElement("img");
            const h2 = document.createElement("h2");
            const price = document.createElement("p");
            const desc = document.createElement("p");

            imgs.src = data[i].imgUrl;
            h2.textContent = data[i].title;
            price.textContent = "$" + data[i].price;
            desc.textContent = data[i].description;

            //document.getElementById("img-side").append(imgs);
            document.getElementById("details-side").append(imgs, h2, price, desc);
            
        }
    }