// Exercise 1.1
//
// Write a function that accepts a fullName and returns a count of the number of names in fullName
//
// Example:
// countNames('Morty Antoine Smith') should return 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

function countNames(word) {
  let nameSplit = word.split(" ");
  console.log(nameSplit);
  return nameSplit.length;
}

console.log(countNames("morty Antoine smith"));

module.exports = countNames;
