// Exercise 1.5
//
// Write a function that accepts a coded string and an array of "notCode" words.
// This function should return the decoded string (with all of the notCode words removed.)
//
// Example:
// decodeMessage("I amnot the walrus.", ["not"]) should return "I am the walrus."
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

function decodeMessage(string, notCode) {
  let splitString = string.split("not");
  console.log(splitString);

  let firstWord = splitString.slice(0, 1);
  console.log(firstWord);

  let secondWord = splitString.slice(-1);
  console.log(secondWord);

  console.log(firstWord + secondWord);
}

let codedString = "I amnot the walrus.";
let notCodeWords = "not";
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code
decodeMessage(codedString, notCodeWords);

// This is needed for automated testing (more on that later)
module.exports = decodeMessage;
