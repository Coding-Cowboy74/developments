
// // 1a) Write a function that retruns the sum of two numbers. Throw an error if either argument is not of the data type NUMBER.
function sum(x, y){

    try {
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        }
        else {
            throw new Error("ERROR: Data must be in numbers, try again.");
        }
    }

    catch(err) {
        console.log(err);
        
    }
  }

// // 1b) Call the "sum" function inside a "try" block using "1" and "2" as arguments. Use the "console.log" within a "catch" block to inform the user of the error.
try {
    console.log(sum(1, "2"));
}

catch(err) {
    console.log(err);
}




// 2a) Given a user object, write a functin called "login" that takes a "username" and "password" as parameters. Throw an error if either of them don't mathch. Otherwise, log to the console a message saying "login successfull". 

  var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials

  try {
    if (username !== user.username) {
        throw new Error("ERROR: Incorrect username entered, try again!");
    } else if (password !== user.password){
        throw new Error("ERROR: Incorrect password entered, try again!");
    }

    else {
        console.log("Login is successfull");
    }
  }

  catch(err) {
    console.log(err);
  }
}


// 2b) Call the "login" function within a "try" block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

console.log(login("sam", "123abc"));