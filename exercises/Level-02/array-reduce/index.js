
// 1. Turn an array of numbers into a total of all the numbers 
function total(arr) {
    const numberTotal = arr.reduce(function(final, num) {
        final += num;
        return final;
    })
    return numberTotal;
}

//console.log(total([1, 2, 3]));


// 2. Turn an array of numbers into a long string of all those numbers 
function stringConcat(arr) {
    const stringNumbers = arr.reduce(function(final, num) {
        final.push(num);
        return final;
    }, [])
    return stringNumbers;
}

//console.log(stringConcat([1, 2, 3]));


// 3. Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    // your code here
    const voter = arr.reduce(function(final, vote) {
        if (vote.voted) {
            final ++;
        }
        return final;
    }, 0)
    return voter;
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 //onsole.log(totalVotes(voters)); // 7


 // 4. Given an array of all your wishlist items, figure out how much it would cose to just by everything at once.
 function shoppingSpree(arr) {
    // your code here
    const shopping = arr.reduce(function(final, spreeCosts) {
        final += spreeCosts.price;
        return final;
    }, 0)
    return shopping;
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 //console.log(shoppingSpree(wishlist)); // 227005


// 5. Given an array of arrays, flatten them into a single array
function flatten(arr) {
    // your code here
    const fixingArrs = arr.reduce(function(final, current) {
        return final.concat(current);
    }, [])
    return fixingArrs;
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 //console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
 
 // 6. Given an array of potential voters, return an object representing the results of the vote.
 // Include how many of the potential votes were in AGES 18-25, how many from 26-35, how many frtom 36-55, and 
 // how many of each of those age ranges actually voted. The resulting object containing this data should have 
 // 6 properties. See the example output at the bottom.

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
   const result = arr.reduce(function(final, votes) {
    if (votes.age > 18 && votes.age <= 25) {
        final.numYoungPeople++;

        if (votes.voted) {
            final.numYoungVotes++;
        }
    }

    if (votes.age >=26 && votes.age <=35) {
        final.numMidsPeople++;

        if (votes.voted) {
            final.numMidVotesPeople++;
        }
    }

    if (votes.age >= 36 && votes.age <= 55) {
        final.numOldsPeople++;

        if (votes.voted) {
            final.numOldVotesPeople++;
        }
    }

    
    return final;
   }, {numYoungPeople: 0, numYoungVotes: 0, numMidsPeople: 0, numMidVotesPeople: 0, numOldsPeople: 0, numOldVotesPeople: 0})
   return result;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
