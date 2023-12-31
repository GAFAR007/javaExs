// Exercise 14
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  console.log(str);
  console.log(char);

  let splitString = str.split("");
  console.log(splitString);

  let filter = splitString.filter((word) => {
    if (word === char) {
      return word;
    }
  });
  console.log(filter);
  console.log(filter.join());
  console.log(filter.length);
  // str and char are both strings
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
countChar("BananaBabyBubbles", "a");

// This is needed for automated testing (more on that later)
module.exports = countChar;
