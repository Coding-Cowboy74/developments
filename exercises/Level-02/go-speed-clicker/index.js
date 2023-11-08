const buttonsStart = document.getElementById("btnStart");
const buttonReset = document.getElementById("btnReset");
let ele = document.getElementById("timerClock");
let clickCounter = 0;
let timeLeft = 30;
let timerID = setInterval(ReverseTimer, 1000);


buttonsStart.addEventListener("click", function() {
  
    clickCounter = localStorage.getItem("userClicks");
    

    
    clickCounter ++;
    localStorage.setItem("userClicks", clickCounter);
    document.getElementById("userClicks").textContent = "User Clicks: " + clickCounter;

  
    
})

buttonReset.addEventListener("click", function() {
    clickCounter = localStorage.removeItem("userClicks");
    document.getElementById("userClicks").textContent = `User Clicks: `;
    timeLeft = 30;
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