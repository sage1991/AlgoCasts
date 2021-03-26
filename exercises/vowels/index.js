// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1
function vowels(str) {
  str = str.toLowerCase();

  const vowelList = [ "a", "e", "i", "o", "u" ];
  let count = 0;

  for (const char of str) {
    if (vowelList.includes(char)) {
      count++;
    }
  }

  return count;
}


// Solution #2
// function vowels(str) {
//   return str.length - str.replace(/[aeiou]/gi, "").length;
// }

module.exports = vowels;
