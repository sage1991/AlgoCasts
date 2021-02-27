// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//   if (stringA.length !== stringB.length) return false;
//
//   const distributionA = mapToDistribution(stringA);
//   const distributionB = mapToDistribution(stringB);
//
//   for (const char in distributionA) {
//     if (distributionA[char] !== distributionB[char]) return false;
//   }
//
//   return true;
// }
//
// const mapToDistribution = (str) => {
//   const distribution = {};
//   for (const char of str) {
//     distribution[char] = distribution[char] ? distribution[char] + 1 : 1;
//   }
//   return distribution;
// }

// Solution #2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
}



module.exports = anagrams;
