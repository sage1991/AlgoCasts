// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution #1
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// }

// Solution #2
function palindrome(str) {
  return str.split("").every((char, i) => char === str.charAt(str.length - 1 - i));
}

// Solution #3
// function palindrome(str) {
//   const length = str.length;
//   const half = length / 2;
//   for (let i = 0; i < half; i++) {
//     if (str.charAt(i) !== str.charAt(length - 1 - i)) return false;
//   }
//   return true;
// }

module.exports = palindrome;
