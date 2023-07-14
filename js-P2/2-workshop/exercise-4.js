// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

const num1 = 3;
const num2 = 1;
const num3 = 1;
const num4 = 1;
const num5 = 1;

function calculateAverage(num1, num2, num3, num4, num5) {
  console.log((num1 + num2 + num3 + num4 + num5) / 5);
  // code here
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
calculateAverage(3, 1, 1, 1, 1);

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
