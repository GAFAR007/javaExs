// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

function calculateAverage(array) {
  let Array = array;
  console.log(Array);

  let arrayLength = array.length;
  console.log(arrayLength);

  let sunOfArray = 0;
  array.forEach((num) => {
    sunOfArray += num;
  });
  console.log(sunOfArray);

  let sumAverage = sunOfArray / arrayLength;
  console.log(sumAverage);

  const roundNum = Math.round(sumAverage);

  console.log(roundNum);
  // code here
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
calculateAverage([3, 6, 7, 2, 4]);

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
