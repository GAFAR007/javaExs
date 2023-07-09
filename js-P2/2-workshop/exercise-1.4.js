// Exercise 1.4
//
// Write a function that accepts a name and returns only the first name and last name.
// Essentially removing the middle name if there is one.
// - This function should still work if there is no middle name.
// - If there are multiple middle names this function should still work.
// - If the string has only one name, e.g. "Adele", it should return that name
//
// Example:
// removeMiddleName("Morty Antoine Smith") should return "Morty Smith"
// removeMiddleName("Morty Smith") should return "Morty Smith"
// removeMiddleName("cc") should return "Morty"
// removeMiddleName("Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(
  firstName,
  middleName,
  lastName,
  firstName2,
  middleName2,
  lastName2
) {
  return (
    firstName + middleName + lastName + firstName2 + middleName2 + lastName2
  );
}

let MortyAntoineSmith = removeMiddleName(
  " Morty  ",
  " ",
  " Smith, ",
  " ",
  " ",
  ""
);

console.log(MortyAntoineSmith);

let MortySmith = removeMiddleName(" Morty  ", " ", "Smith, ", "  ", " ", "");

let cc = removeMiddleName(" Morty,  ", " ", "", "  ", " ", "");

let MortyAntoineFredBaconSmith = removeMiddleName(
  " Morty  ",
  " ",
  "smith,",
  "",
  "",
  "",
  "",
  ""
);

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(MortyAntoineSmith);
console.log(MortySmith);
console.log(cc);
console.log(MortyAntoineFredBaconSmith);

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
