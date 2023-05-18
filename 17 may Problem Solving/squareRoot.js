/** @format */

// Given a number A. Return square root of the number if it is perfect square otherwise return -1.

function squareRoot(A) {
  for (let i = 1; i <= A; i++) {
    if (i * i === A) return i;
  }

  return -1;
}
