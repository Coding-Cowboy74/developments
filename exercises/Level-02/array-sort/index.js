
// 1. Sort an array from smallest number to largest
function leastToGreatest(arr) {
    arr.sort(function(a, b) {
        return a - b;
    })
    return arr;
}

//console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));


// 2. Sort an array from largest number to smallest
function greatestToLeast(arr) {
    arr.sort(function(a, b) {
        return b - a;
    })
    return arr;
}

//console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));


// 3. Sort an array from shortest string to longest
function lengthSort(arr) {
    arr.sort(function(a, b) {
        return a.length - b.length;
    })
    return arr;
}

//console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));


// 4. Sory an array alphabetically
function alphabetical(arr) {
    arr.sort();
    return arr;
}

//onsole.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));


// 5. Sory an objects in the array by age
function byAge(arr) {
    arr.sort(function(a, b) {
        return a.age - b.age;
    })
    return arr;
}

console.log(byAge([
    {name: "Quiet Samurai", age: 22},
    {name: "Arrogant Ambassador", age: 100},
    {name: "Misunderstood Observer", age: 2},
    {name: "Unlucky Swami", age: 77}
]));