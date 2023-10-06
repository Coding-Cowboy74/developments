
let fb = 0;
let f = 0;
let b = 0;

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz" + " ");
        fb++;
    }

    else if (i % 3 === 0) {
        console.log("fizz" + " ");
        f++;
    }

    else if (i % 5 === 0) {
        console.log("buzz" + " ");
        b++;
    }

    else {
        console.log(i + " ");
    }

    console.log("FizzBuzz: " + fb);
    console.log("fizz: " + f);
    console.log("buzz: " + b);
}