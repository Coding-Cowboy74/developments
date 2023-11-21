
// the section is for the blue effects to happen, and but using the mouseover and the mouseout properties 
// I am able to simulate the hover function that would be simulated in css
let blue = document.getElementById("blue");
blue.addEventListener("mouseover", function() {
    blue.style.backgroundColor = "blue";
})

blue.addEventListener("mouseout", function() {
    blue.style.backgroundColor = "white";
})

// blue.addEventListener("keypress", function(e) {
//     if (e.key === 'b') {
//         e.preventDefault();
//         blue.style.backgroundColor = "blue";
//     }
// })

// the section is for the blue effects to happen, and but using the mouseover and the mouseout properties 
// I am able to simulate the hover function that would be simulated in css
let red = document.getElementById("red");
red.addEventListener("mousedown", function() {
    red.style.backgroundColor = "red";
})

red.addEventListener("mouseout", function() {
    red.style.backgroundColor = "white";
})

// the section is for the blue effects to happen, and but using the mouseover and the mouseout properties 
// I am able to simulate the hover function that would be simulated in css
let yellow = document.getElementById("yellow");
yellow.addEventListener("mouseup", function() {
    yellow.style.backgroundColor = "yellow";
})

yellow.addEventListener("mouseout", function() {
    yellow.style.backgroundColor = "white";
})

// the section is for the blue effects to happen, and but using the mouseover and the mouseout properties 
// I am able to simulate the hover function that would be simulated in css
let green = document.getElementById("green");
green.addEventListener("dblclick", function() {
    green.style.backgroundColor = "green";
})

green.addEventListener("mouseout", function() {
    green.style.backgroundColor = "white";
})

// the section is for the blue effects to happen, and but using the mouseover and the mouseout properties 
// I am able to simulate the hover function that would be simulated in css
let orange = document.getElementById("orange");
orange.addEventListener("wheel", function() {
    orange.style.backgroundColor = "orange";
})

orange.addEventListener("mouseout", function() {
    orange.style.backgroundColor = "white";
})

document.body.addEventListener("wheel", function() {
    orange.style.backgroundColor = "orange";
})