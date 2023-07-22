// Exercise 1.6
//
// Write a function that accepts an array of strings and a string.
// It should return the array without the string.
//
// Example:
// removeStringFromArray(["I", "bacon", "you", "she"], "bacon") should return ["I", "you", "she"]
//
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
let array = "dave, bacon, you, she";
console.log(array);
let string = "bacon";

function removeBacon(words) {
  let splitWordIntoArra = words.split(",");
  console.log(splitWordIntoArra);

  let removeBacon = splitWordIntoArra.filter((word) => {
    if (word !== " bacon") {
      return word;
    }
  });
  console.log(removeBacon);
}

// complete the function

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
removeBacon(array);
// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;
