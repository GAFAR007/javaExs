// Exercise 1.2
//
// Write a function that accepts a string of comma-separated names
// and returns an array of those names.
//
// Example:
// arrOFNames('Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137')
// should return...
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function arrOFNames(a1, a2, a3, a4, a5, a6, a7, a8) {
  return a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8;
}
let result3 = arrOFNames(
  "Simple Rick",
  "Slow Rick",
  "Tall Rick",
  "Cop Rick",
  "Doofus Rick",
  "Past Rick",
  "Replacement Rick",
  "Rick C-137"
);
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(result3);

// This is needed for automated testing (more on that later)
module.exports = arrOFNames;
