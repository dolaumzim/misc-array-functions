/**
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 * @param {unknown[]} arr
 * @return {*}  {unknown[]}
 */
export const removeFalsyFromArray = (arr: unknown[]): unknown[] => {
  let result: any = [];

  for (let value of arr) {
    if (value) {
      result.push(value);
    }
  }
  return result;
};
