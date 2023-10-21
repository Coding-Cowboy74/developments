// Initated the variables for the counters to happen
let fb = 0;
let f = 0;
let b = 0;


// Started a for loop to count from 1 to 100
for (i = 1; i <= 100; i++) {
    // Started an IF statement to count through the loop to find the places in the loop for every 3rd and 5th one. Replacing those numbers with the word FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz" + " ");
        fb++;       // Incrementing the counter by 1 every time
    }

    // IF statement to find every 3rd number and replacing it with the word fizz
    else if (i % 3 === 0) {
        console.log("fizz" + " ");
        f++;    // Incrementing its counter by 1 every time
    }

    // IF statement for find every 5th number and replacing it with the word buzz
    else if (i % 5 === 0) {
        console.log("buzz" + " ");
        b++;    // Incrementing its counter by 1 every time
    }

    // Otherwise we are just adding in the rest of the numbers of the for loop
    else {
        console.log(i + " ");
    }


    // Here we are console logging the results of all the counts for the "FizzBuzz", "fizz", and the "buzz" and displaying there for the reuslts
    console.log("FizzBuzz: " + fb);
    console.log("fizz: " + f);
    console.log("buzz: " + b);
}