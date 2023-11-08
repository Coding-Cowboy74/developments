const buttonsStart = document.getElementById("btnStart");
let ele = document.getElementById("timerClock");
let clickCounter = 0;
let timeLeft = 30;
let timerID = setInterval(ReverseTimer, 1000);


buttonsStart.addEventListener("click", function() {

    
    clickCounter ++;

    document.getElementById("userClicks").textContent = "User Clicks: " + clickCounter;
    localStorage.setItem("userClicks", clickCounter);
})

function ReverseTimer() {
    if (timeLeft === -1) {
        clearInterval(timerID);
        //alert("success");
        
    }
    else {
        ele.textContent = `Time remaining: ${timeLeft} seconds`;
        timeLeft -= 1;
    }

    
}