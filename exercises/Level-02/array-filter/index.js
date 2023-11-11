// 1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater. 
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num) {
        return num >= 5;
    })
    return result;
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));


// 2. Given an array of numbers, return a new array that only includes the even numbers.
function evenOnly(arr) {
    const result = arr.filter(function(num) {
        return num % 2 === 0;
    })
    return result;
}

console.log(evenOnly([3, 6, 8, 2]));


// 3. Given an array of strings, retrun a new array that only includes those that are 5 charachters or fewer in length.
function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(function(words) {
        return words.length <= 5;
    })
    return result;
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));


// 4. Given an array of peoplle objects, return a new array that has filtered out all those who don't belong in the club.
function peopleWhoBelongToTheIlluminati(arr) {
    const result = arr.filter(function(auth) {
        if (auth.member === true) {
            return true;
        }
    })
    return result;
}

console.log(peopleWhoBelongToTheIlluminati([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kanye West", member: false},
    {name: "Bob Ziroll", member: true}
]));


// 5. Make a filtered list of all the people who are old enough to see THE MATRIX (older than 18)
function ofAge(arr) {
    const result = arr.filter(function(oldEnough) {
        return oldEnough.age >= 18;
    })
    return result;
}

console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 16},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));