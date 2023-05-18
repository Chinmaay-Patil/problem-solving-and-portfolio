/** @format */

//You are given an integer A. You have to tell whether it is a perfect number or not.
// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
// A proper divisor of a natural number is the divisor that is strictly less than the number.

function isPerfectNumber(A) {
  let factors = 0;

  for (let i = 1; i <= A; i++) {
    if (A % i === 0 && i < A) {
      factors = factors + i;
    }
  }
  return factors === A ? 1 : 0;
}
