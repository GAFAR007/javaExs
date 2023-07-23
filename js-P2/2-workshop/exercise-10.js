// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that accepts an array of numbers and returns true if every element
// of the array is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
const allLong = (list) => {
  let listCount = list;
  if (list <= 5) {
    console.log(true);
  } else if (list > 5) {
    console.log(false);
  }
  console.log(listCount);
  // list is an array of strings
};
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
let list = [1, 2, 3, 4, 5];
let list2 = (1, 2, 3, 4, 5, 9);

// Call the function to test your code.
allLong(list);

// This is needed for automated testing (more on that later)
