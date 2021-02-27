// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const distribution = {};
  for (const char of str) {
    distribution[char] = distribution[char] ? distribution[char] + 1 : 1
  }

  let maxCount = 0;ㅊ
  let maxChar = "";
  for (const char in distribution) {
    if (distribution[char] > maxCount) {
      maxCount = distribution[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
