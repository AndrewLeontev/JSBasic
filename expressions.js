const square = (num) => num * num;
const sumOfSquares = (a, b) => { square(a) + square(b); }
const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));
console.log(squareSumOfSquares(0, 0));
console.log(squareSumOfSquares(1, 1));
console.log(squareSumOfSquares(-3, 7));

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};
