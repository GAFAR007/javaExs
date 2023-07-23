// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
const calculateAverage = (grades) => {
  let sumGrade = grades;
  console.log(sumGrade);

  let gradesLength = grades.length;
  console.log(gradesLength);

  let sunOfGrades = 0;
  grades.forEach((num) => {
    sunOfGrades += num;
  });
  console.log(sunOfGrades);

  let sumAverage = sunOfGrades / gradesLength;
  console.log(sumAverage);

  const roundNum = Math.round(sumAverage);

  console.log(roundNum);
  // grades is an array of numbers
};
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.

calculateAverage([48, 95, 65, 48, 59, 78, 72, 65, 24, 17, 100, 84]);

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
