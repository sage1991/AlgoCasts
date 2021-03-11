// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// Solution #1
// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1) / 2);
//
//   for (let row = 0; row < n; row++) {
//     let message = "";
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         message += "#";
//       } else {
//         message += " ";
//       }
//     }
//
//     console.log(message);
//   }
// }


// Solution #2
// function pyramid(n) {
//   print(n, 1);
// }
//
// const print = (row, i) => {
//   if (row < i) return;
//
//   const max = countStar(row);
//   const count = countStar(i);
//   const padding = (max - count) / 2;
//
//   let message = "";
//   for (let column = 0; column < max; column++) {
//     if (column < padding || column > padding + count - 1) {
//       message += " ";
//     } else {
//       message += "#"
//     }
//   }
//   console.log(message);
//
//   print(row, i + 1);
// }
//
// const countStar = (n) => 2 * n - 1;

// Solution #3
function pyramid(n) {
  const max = countStar(n);

  for (let row = 0; row < n; row++) {
    const count = countStar(row + 1);
    const padding = (max - count) / 2;
    let message = "";
    for (let column = 0; column < max; column++) {
      if (column < padding || column >= padding + count) {
        message += " ";
      } else {
        message += "#";
      }
    }
    console.log(message);
  }
}

const countStar = (n) => 2 * n - 1;

module.exports = pyramid;
