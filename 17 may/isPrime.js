/** @format */

//check if given number is prime return 1 if it is prime else 0

function isPrime(A) {
  let factors = 0;

  for (let i = 0; i <= Math.sqrt(Number(A)); i++) {
    if (Number(A) % i === 0) {
      factors = i === Number(A) / i ? factors + 1 : factors + 2;
    }
  }

  return factors === 2 ? 1 : 0;
}
