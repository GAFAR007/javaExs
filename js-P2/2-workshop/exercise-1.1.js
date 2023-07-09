// Exercise 1.1
//
// Write a function that accepts a fullName and returns a count of the number of names in fullName
//
// Example:
// countNames('Morty Antoine Smith') should return 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countNames(n1, n2, n3) {
  return n1 + n2 + n3;
}

let result = countNames("morty", "Antoine", "smith");

console.log(result);

module.exports = countNames;
