// Exercise 2
//
// Write a function that accepts two numbers and returns
// the greater one.
//
//
// Edit only the code between the lines (below)
const  getMax = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if ((nub1 = num2)) {
    return "0";
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code
console.log(getMax(6, 9));

// This is needed for automated testing (more on that later)
module.exports = getMax;
