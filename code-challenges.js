// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

//create a function that takes in an object
const capitalNames = (object) => {
  //.map through object and manipulate value by using .split to access an array of the two words in name obejct.  map through this new array of name split into letters
  return object.map((value) => {
    value.name = value.name.split(' ').map((word) => {
      //return the first index uppercased and then combine with the rest of the word still lower case
      return word[0].toUpperCase() + word.slice(1)
      //join it back togeher
    }).join(" ")
    //final return is a combination of the newly capitalized first and last name in name, in addition to "is a" and the occupation with a period at the end.  Spacing is important to have the correct output
    return value.name+ ' is a ' + value.occupation + '.'
  })
}

console.log(capitalNames(people))
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthur Dent is a radio employee."


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]

//create a function that takes in a mixed data array
const numsOnly = (array) => {
  //use .filter to go through array and use the typeof method to return an array with only the numbers
  let filterNums = array.filter(value => typeof value == "number")
    //.map through filterNums and get the remainder of the numbers when divided by 3 using modulo
    return filterNums.map(value => value % 3)
}

console.log(numsOnly(testingArray1))
// Expected output: [ 2, 0, -0, 0 ]
console.log(numsOnly(testingArray2))
// Expected output: [ 2, 1, -1 ]

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]

//create a function that takes in two arrays 
const noDupes = (array1, array2) => {
      //create variable that combines the two arugments into one new array using the spread operator
      let newArray = [...array1, ...array2]
      //use .filter to get rid of duplicates in newArray using .indexOf on the array itself
      let filtArray = newArray.filter((value, index, array) => index === array.indexOf(value))
          //return variable with the newly filtered array
          return filtArray
}
console.log(noDupes(testingArray3, testingArray4))
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
