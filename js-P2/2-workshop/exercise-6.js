// Exercise 6
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that accepts an array of numbers and returns a new array with
// all of the even numbers removed.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getEvens(list) {
  let evenNUm = list.filter((value) => {
    if (value % 2) {
      return value;
    }
  });

  console.log(evenNUm);

  // list is an array of numbers
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function to test your code
getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// This is needed for automated testing (more on that later)
module.exports = removeEvens;
