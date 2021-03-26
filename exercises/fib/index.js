// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Solution #1 - iterative solution
// function fib(n) {
//   const series = [0, 1];
//
//   let index = series.length;
//   while (series.length - 1 < n) {
//     series.push(series[index - 1] + series[index - 2]);
//     index++;
//   }
//
//   return series[n];
// }


// Solution #2 - recursive solution && memoization
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

fib = memoize(fib);

module.exports = fib;
