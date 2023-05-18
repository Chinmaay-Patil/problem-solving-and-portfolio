/** @format */

//counts the factors of given number

function countFactors(A) {
  let factors = 0;

  for (let i = 0; i <= Math.sqrt(A); i++) {
    if (A % i === 0) {
      factors = i === A / i ? factors + 1 : factors + 2;
    }
  }
  return factors;
}
