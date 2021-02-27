// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
// function capitalize(str) {
//   return str.split(" ")
//             .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
//             .join(" ");
// }

// Solution #2
function capitalize(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const prev = i = 1;
    if (prev < 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[prev] === " " ? str[i].toUpperCase() : str[i];
    }
  }

  return result;
}

module.exports = capitalize;
