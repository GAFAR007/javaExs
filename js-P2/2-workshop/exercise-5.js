// Exercise 5
//
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
const itemIsPresent = (myArray, item) => {
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
};
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

const item = "elephants";

// Call the function to test your code.
itemIsPresent(myArray, item); //false(x8)

itemIsPresent(myArray, "funky"); // false(x7), true
itemIsPresent(myArray, "elephant"); // false(x8)

// This is needed for automated testing (more on that later)
module.exports = itemIsPresent;
