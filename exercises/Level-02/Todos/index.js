function getData() {
    axios.get("https://api.vschool.io/stevenmartin/todo/")
        .then( res => {
            console.log(res.data)
            displayFoodList(res.data)
        })

        .catch(err => console.log(err))
}

function displayFoodList(data) {

    for (let i = 0; i < data.length; i++) {
        const imgs = document.createElement("img");
        const chkbx = document.createElement("input");
        const h2 = document.createElement("h2");
        const price = document.createElement("p");
        const desc = document.createElement("p");
        const btnDel = document.createElement("button");
        const detailsDiv = document.createElement("div");
        const imgDiv = document.createElement("div");

        h2.textContent = data[i].title;

        document.getElementById("details-side").append(h2);
    }
}
getData();