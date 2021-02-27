// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
// function chunk(array, size) {
//   const result = [];
//
//   for (const data of array) {
//     const chunk = result[result.length - 1];
//     if (!chunk || chunk.length === size) {
//       result.push([ data ]);
//     } else {
//       chunk.push(data);
//     }
//   }
//
//   return result;
// }

// Solution #2
function chunk(array, size) {
  const result = [];

  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

// Solution #3
// function chunk(array, size) {
//   const result = [];
//
//   for (let i = 0; i < array.length; i++) {
//     if (i % size === 0) {
//       result.push([ array[i] ]);  // new chunk
//     } else {
//       result[result.length - 1].push(array[i]);
//     }
//   }
//
//   return result;
// }

module.exports = chunk;
