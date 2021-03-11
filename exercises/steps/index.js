// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Solution #1
// function steps(n) {
//
//   for (let i = 0; i < n; i++) {
//     let result = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         result += "#";
//       } else {
//         result += " ";
//       }
//     }
//     console.log(result);
//   }
// }


// Solution #2
const steps = (n) => print(n, 1);

const print = (n, i) => {
  if (i > n) return;

  let message = "";
  for (let k = 0; k < n; k++) {
    message += k < i ? "#" : " ";
  }
  console.log(message);

  print(n, i + 1);
}

module.exports = steps;
