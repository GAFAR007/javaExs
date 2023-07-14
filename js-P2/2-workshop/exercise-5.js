// Exercise 5
//
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function itemIsPresent(myArray, item) {
  array.filter((word) => {
    if (word === item) {
      console.log(true);
    } else {
      if (word !== item) {
      }
      console.log(false);
    }
  });
  // code here
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Test case
const myArray = [
  "bacon",
  "purple",
  "door",
  "window",
  "exist",
  "code",
  "program",
  "funky",
];

const item = "elephant";

// Call the function to test your code.
itemIsPresent(myArray, item); //true

itemIsPresent(myArray, "funky"); // true
itemIsPresent(myArray, "elephant"); // false

// This is needed for automated testing (more on that later)
module.exports = itemIsPresent;
