/** @format */

//You will be given an integer n. You need to return the count of prime numbers less than or equal to n.

function countPrimes(n) {
  if (n <= 1) {
    return 0;
  }

  const isPrime = new Array(n + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  let count = 1;

  for (let i = 3; i <= n; i += 2) {
    if (isPrime[i]) {
      count++;

      for (let j = i * i; j <= n; j += 2 * i) {
        isPrime[j] = false;
      }
    }
  }

  return count;
}
