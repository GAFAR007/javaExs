// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
const getLetterGrade = (grades) => {
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

  let ans = sumGrade.filter((word) => {
    if (word <= roundNum) {
      console.log(word + " " + "f");
    } else if (word > 70 && word < 80) {
      console.log(word + " " + "d");
    } else if (word > 80 && word < 90) {
      console.log(word + " " + "c");
    } else if (word > 90 && word < 100) {
      console.log(word + " " + "b");
    } else if ((word = 100)) {
      console.log(word + " " + "a");
    }
    return word;
  });

  // grades is an array of numbers
};
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]);

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
