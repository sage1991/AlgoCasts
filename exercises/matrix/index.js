// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const mtx = [];

  for (let row = 0; row < n; row++) {
    mtx.push([]);
  }

  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let col = startCol; col <= endCol; col++) {
      mtx[startRow][col] = counter;
      counter++;
    }
    startRow++;

    // right col
    for (let row = startRow; row <= endRow; row++) {
      mtx[row][endCol] = counter;
      counter++;
    }
    endCol--;

    // bottom row
    for (let col = endCol; col >= startCol; col--) {
      mtx[endRow][col] = counter;
      counter++;
    }
    endRow--;

    // left col
    for (let row = endRow; row >= startRow; row--) {
      mtx[row][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return mtx;
}

module.exports = matrix;
