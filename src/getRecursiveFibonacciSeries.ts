/**
 * getRecursiveFibonacciSeries
 * @description
 * Returns the fibonacci series of a given number
 *
 * @example getRecursiveFibonacciSeries(1) // [0, 1]
 * @example getRecursiveFibonacciSeries(5) // [0, 1, 1, 2, 3, 5]
 *
 * @param {number} n
 * @return {*}  {number[]}
 */
export const getRecursiveFibonacciSeries = (n: number): number[] => {
  let result = new Array();

  if (n === 0) {
    result.push(0);
    return result;
  } else if (n === 1) {
    result.push(0, 1);
    return result;
  } else {
    const fibResult = getRecursiveFibonacciSeries(n - 1);
    fibResult.push(
      fibResult[fibResult.length - 1] + fibResult[fibResult.length - 2],
    );
    return fibResult;
  }
};
