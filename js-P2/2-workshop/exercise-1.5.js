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
  const words = codedString.split(" ");
  const filteredWords = words.filter((word) => !notCodeWords.includes(word));
  const decodedString = filteredWords.join(" ");
  // complete the function
}

const codedString = "I amnot the walrus.";
const notCodeWords = ["not"];
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.

const decodedString = decodeMessage(codedString, notCodeWords);
console.log(decodedString);

// This is needed for automated testing (more on that later)
module.exports = decodeMessage;
