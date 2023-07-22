// Exercise 3
//
// Write a function that accepts two numbers and returns
// the greater one. (this must have a different solution from the previous question.)
//
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_max.asp
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

const num1 = 12;
const num2 = 24;

function getMax(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    console.log(num2);
  } else {
    console.log("0");
  }
  // code here
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
getMax(num1, num2);

// This is needed for automated testing (more on that later)
module.exports = getMax;
