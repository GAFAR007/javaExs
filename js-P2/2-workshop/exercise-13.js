// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
let countBs = (str) => {
  console.log(str);

  let splitString = str.split("");
  console.log(splitString);

  let filter = splitString.filter((word) => {
    if (word === "B") {
      return word;
    }
  });
  console.log(filter);
  console.log(filter.join());
  console.log(filter.length);
  // str is a string
};
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
countBs("BananaBabyBubbles");

// This is needed for automated testing (more on that later)
module.exports = countBs;
