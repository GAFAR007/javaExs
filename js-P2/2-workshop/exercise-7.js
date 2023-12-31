// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that accepts an array of names and returns a new array with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
const keepLong = (list) => {
  list.filter((word) => {
    if (word.length > 5) {
      console.log(word);
    }
  });
  // list is an array of strings
};
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"]);

// This is needed for automated testing (more on that later)
module.exports = keepLong;
