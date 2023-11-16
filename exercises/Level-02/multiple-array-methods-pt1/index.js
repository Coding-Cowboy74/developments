
/*  You should use multiple array methods to solve these problems. Don't use FOR LOOPS!
    Using the provided PEOPLEARRAY (bottom of this article), write a function that: 
    
    1. Returns a list of everyone older than 18, which is
    2. sorted apphabetically by last name, and where 
    3. each name and age is embedded in a string that looks like an HTML <li> element. 
*/

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
 /*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

function sortedOfAge(arr){
    // Your code here

    // const ofAge = arr.filter(function(people) {
    //     if (people.age >= 18) {
    //         return true;
    //     }
    // })
    // return ofAge;

    const alphaSorted = arr.sort((a, b) => (a.lastName < b.lastName) ? -1 : (b.lastName < a.lastName) ? 1 : 0).filter(person => person.age >= 18);

    //const filteredAge = alphaSorted.filter(person => person.age >= 18);


    // const alphaSorted = arr.sort(function(a, b) {
    //     if (a.lastName < b.lastName) {
    //         return -1;
    //     }

    //     if (b.lastName < a.lastName) {
    //         return 1;
    //     }
    //     return 0;
    // })

    // const filteredAge = alphaSorted.filter(function(person) {
    //     if (person.age >= 18) {
    //         return person;
    //     }
    // })
    return alphaSorted.map(function(person) {
        //return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>";
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    })
    
 }
 
 console.log(sortedOfAge(peopleArray));
 


 
 


/*  Extra Credit

    - Create another array of one or more individuals and add it to the original array. 
    - Create a function that filters out all people who's last names end with "y" or "a" and 
        save those people in another array.
    = Remove the second individual from the array.
    = Return the array in reverse order. 
    */